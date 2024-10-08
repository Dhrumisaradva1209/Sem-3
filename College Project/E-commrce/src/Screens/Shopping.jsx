import React  , {useState ,  useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Card_List from '../Components/CardList'
import { IoMdSearch } from "react-icons/io";

export default function Shopping() {
  
    const [data, setData] = useState([]);
    const [temp , setTemp] = useState([]);

    
    useEffect(() => {
        fetch("http://localhost:5000/api")
            .then(res => res.json())
            .then((res)=>{ setData(res); setTemp(res)}, );
    }, []);

    const handleSearch = (e)=>{
        setData(temp.filter((p)=>p.name.toLowerCase().includes(e.target.value.toLowerCase()) || p.price.toLowerCase().includes(e.target.value.toLowerCase()) || p.size.toLowerCase().includes(e.target.value.toLowerCase()) || p.os.toLowerCase().includes(e.target.value.toLowerCase()) || p.graphics.toLowerCase().includes(e.target.value.toLowerCase()) ));
    }

    return (
        <>
            <div>
                <Header />
            </div>
            <form class="d-flex container mt-3">
                    <div class="input-group">
                        <input type="text" class="form-control" onChange={(e)=>handleSearch(e)} placeholder="Search" />
                        <button type="button" class="btn btn-secondary"><IoMdSearch /></button>
                    </div>
                </form>
            <div>
                <Card_List  data={data}/>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
