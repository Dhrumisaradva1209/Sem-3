// app.js
const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('./config');
const url = 'mongodb://localhost:27017';


// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
// const dbName = 'e-comm'
//models
const products = require('./model/product');
const userDatas = require('./model/data');
const carts = require('./model/cart');
const admins = require('./model/admin');
const order = require('./model/order');
const cart = require('./model/cart');

app.use(bodyParser.json());
app.use(cors());

app.get('/api', async (req, res) => {
    try {
        let result = await products.find();

        res.send(result);
    } catch (error) {
        res.status(200).json({ error: true });
    }
});

app.get('/api/:id', async (req, res) => {

    try {
        let result = await products.findOne({ _id: req.params.id });

        res.send(result);
    } catch (error) {
        res.status(200).json({ error: true });
    }
});

app.post('/api/postData', async (req, res) => {
    console.log(req.body);
    try {
        let { url, company, image, name, discount, price, size, resolution, os, graphics, ssd, ram, processor } = req.body;
        let result = new products({ url, company, image, name, discount, price, size, resolution, os, graphics, ssd, ram, processor });
        console.log(result);

        await result.save();
        res.status(200).send('Data received successfully');
    } catch (error) {

        res.status(200).json({ error: true });
    }

});

app.put('/api/putData/:id', async (req, res) => {
    try {
        await products.updateOne(
            { _id: req.params.id }, {
            $set: req.body
        }
        );
        console.log(req.body);
        res.send("Data update successfully")
    } catch (error) {
        res.status(200).json({ error: true });
    }
});

app.delete('/api/delete/:id', async (req, res) => {
    // const id = req.params.id;
    // console.log(id);

    console.log(req.params.id);

    try {
        const result = await products.deleteOne({ _id: new ObjectId(req.params.id) });
        console.log(req.params.id);

        if (result.deletedCount === 1) {
            res.json({ message: 'Record deleted successfully' });
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// SignUp Page Backend

app.get('/login/:email/:passwrod', async (req, res) => {
    try {
        let result;
        // let admindata = await admins.findOne({email: req.params.email, pass: req.params.passwrod});
        // console.log("Add" , admindata);
        try {
            result = await admins.findOne({ email: req.params.email, pass: req.params.passwrod });
            if (result == null) {
                result = await userDatas.findOne({ email: req.params.email, pass: req.params.passwrod });
            } else {
                return res.status(200).json({ error: false, admin: true, message: "successfully login", userID: result._id });
            }
        } catch (error) {

        }

        if (result != null) {
            res.status(200).json({ error: false, message: "successfully login", userID: result._id });
        } else {
            res.status(200).json({ error: true, message: "email or password invalid" });
        }
    } catch (error) {
        res.status(200).json({ error: true });
    }
});

app.get('/user/data/:id', async (req, res) => {

    try {
        let result;
        // let admindata = await admins.findOne({email: req.params.email, pass: req.params.passwrod});
        // console.log("Add" , admindata);
        try {
            result = await admins.findOne({ _id: req.params.id });
            if (result == null) {
                result = await userDatas.findOne({ _id: req.params.id });
            } else {
                return res.status(200).json({ error: false, data: result });
            }
        } catch (error) {

        }

        if (result != null) {
            res.status(200).json({ error: false, data: result });
        } else {
            res.status(200).json({ error: true });
        }
    } catch (error) {
        // console.log()
        res.status(200).json({ error: true });
    }
});

app.post('/signUp', async (req, res) => {
    console.log(req.body);
    try {
        let { firstname, lastname, email, pass, phone, address } = req.body;
        let result = new userDatas({ firstname, lastname, email, pass, phone, address });
        console.log(result);

        if (result != null) {
            await result.save();
            res.status(200).send('Data received successfully');
        } else {
            res.status(200).send('Data not received successfully');
        }

    } catch (error) {

        res.status(200).json({ error: true });
    }

});


// Add To Cart Api

app.get('/cartProduct/:id', async (req, res) => {
    try {
        let result = await carts.find({ userID: req.params.id });

        res.send(result);
    } catch (error) {
        res.status(200).json({ error: true });
    }
});

app.post('/cartProduct/postdata', async (req, res) => {
    console.log(req.body);
    try {
        let { userID, url, company, image, name, discount, price, size, resolution, os, graphics, ssd, ram, processor } = req.body;
        let result = new carts({ userID, url, company, image, name, discount, price, size, resolution, os, graphics, ssd, ram, processor });
        console.log(result);

        await result.save();
        res.status(200).send('Data received successfully');
    } catch (error) {

        res.status(200).json({ error: true });
    }

});

app.delete('/cartProduct/Delete/:id', async (req, res) => {
    // const id = req.params.id;
    // console.log(id);

    console.log(req.params.id);

    try {
        const result = await carts.deleteOne({ _id: new ObjectId(req.params.id) });
        console.log(req.params.id);

        if (result.deletedCount === 1) {
            res.json({ message: 'Record deleted successfully' });
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/order/:userId' , async(req , res)=>{
    try{
   let {userId} = req.params;
   let cartList = await carts.find({userID : userId});

   for(var card of cartList){
     delete card._id;
     let { _id, ...productWithoutId } = card;
    let newOrder = new order(productWithoutId._doc);
    await newOrder.save();
   }
    await cart.deleteMany({userID : userId});
   res.status(200).json({success : true});

    }catch(error){
        console.log(error.message);
        res.status(500).json({success : false , error : error.message});
    }
})


app.get('/getAllOrder' , async(req , res)=>{
    try{

     let orders = await order.find();
        res.status(200).json({success : true  , data :orders });

    }catch(err){
        res.status(500).json({success : false , error : err.message});
    }
})


//payment
// const 
app.post('/orders' ,  async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: "rzp_test_vfXFgrIi1UZkyg",
			key_secret: "K8K75X4h4NokeibGZHn6DNxj",
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
        console.log(error.message);
		res.status(500).json({ message: "Internal Server Error!" });
	}
});

app.post('/verify' ,  async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
	}
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
