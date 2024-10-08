import './App.css';
import Home from './Screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopping from './Screens/Shopping';
import CardDetails from './Screens/CardDetails';
import ServerSite from './Screens/ServerSite';
import Card_List from './Screens/Card_List';
import Login from './Login&SignUp/Login'
import SignUp from './Login&SignUp/SignUp';
import Add_Cart from './Screens/Add_Cart';
import Profile_Detail from './Screens/Profile_Detail';
import ProtectRoute from './ProtectRoute';
import Admin_Detail from './Screens/Admin_profile_Screen';
import UpdateListAndEdit from './Screens/UpdateListAndEdit';
import Orders from './Components/Admin/orders/Orders'

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/login' element={<Login />} />
//           <Route path='/signUp' element={<SignUp />} />
//           <Route path='/' element={<Home />} />
//           <Route path='/shopping' element={<Shopping />} />
//           <Route path='/cardDetail' element={<CardDetails />} />
//           <Route path='/cardView/:id' element={<CardDetails />} />
//           <Route path='/admin/add' element={<ServerSite />} />
//           <Route path='/admin/update/listcard' element={<Card_List />} />
//           <Route path='/admin/update/card/:id' element={<UpdateSite />} />
//           <Route path='/addTocart' element={<Add_Cart />} />
//           {/* <Route path='/Profile' element={<ProtectRout><Profile_Detail /></ProtectRout>} /> */}
//           <Route path='/Profile' element={<ProtectRout><Profile_Detail></Profile_Detail></ProtectRout>} />
//           {/* <Route path='/Profile' element={<Profile_Detail />} /> */}
          

//           {/* <Route path='/Profile' element={} /> */}
//           {/* <Route path='/admin/update/:id' element={<ServerSiteUpdate />}/> */}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<HomePage />} /> */}
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/cardDetail' element={<CardDetails />} />
          <Route path='/cardView/:id' element={<CardDetails />} />
          <Route path='/admin/add' element={<ProtectRoute childern={<ServerSite />}/>} />
          <Route path='/admin/update/listcard' element={<ProtectRoute childern={<Card_List />}/>} />
          <Route path='/admin/update/card/:id' element={<ProtectRoute childern={<UpdateListAndEdit />}/>} />
          <Route path='/addTocart' element={<ProtectRoute childern={<Add_Cart />} />}/>
          <Route path='/Profile/user' element={<ProtectRoute childern={<Profile_Detail/>}/>} />
          <Route path='/Profile/admin' element={<ProtectRoute childern={<Admin_Detail />}/>} />
          <Route path='/Orders' element={<ProtectRoute childern={<Orders />}/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
