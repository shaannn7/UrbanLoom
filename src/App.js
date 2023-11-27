import './App.css';
import Register from './Component/User/Register';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/User/Login';
import Home from './Component/Home/Home';
import { useState } from 'react';
import Shop from './Component/Home/Shop/Shop';
import { Items } from './Component/Items';
import Cart from './Component/Home/Cart/Cart';
import Payment from './Component/Home/Payment/Payment';
import { validateCpassword, validateEmail, validateMnumber, validateName, validatePassword } from './ValidationUser';
import NavBar from './Component/Home/NavBar/Nav';
import Bedroom from './Component/Home/Shop/Catgrs/Bedroom';
import Dinning from './Component/Home/Shop/Catgrs/Dinning';
import Entertainment from './Component/Home/Shop/Catgrs/Entertainment';
import Kids from './Component/Home/Shop/Catgrs/Kids';
import Office from './Component/Home/Shop/Catgrs/Office';
import Outdoor from './Component/Home/Shop/Catgrs/Outdoor';
import Seating from './Component/Home/Shop/Catgrs/Seating';
import Storage from './Component/Home/Shop/Catgrs/Storage';
import Viewproduct from './Component/Home/Shop/Viewproduct';
import Search from './Component/Home/Search/Search';











function App() {




  const nav = useNavigate()




  const [valUser, setvalUser] = useState([
    {}
  ])
  const validateUser = (name, email, mnumber, password, cpassword) => {
    const findUser = valUser.find((x) => x.email === email && x.mnumber === mnumber)
    if (!findUser) {
      if (validateName(name) && validateEmail(email) && validateMnumber(mnumber) && validatePassword(password) && validateCpassword(cpassword, password)) {
        setvalUser([
          ...valUser,
          { name: name, email: email, mnumber: mnumber, password: password }
        ])
        nav('/login')
      }
    }
    else {
      alert("Register your account!!!!!!!")
    }
  }





  const [ifLogin, setifLogin] = useState(false)
  const [loguser, setloguser] = useState({})
  const Loguser = (email, password) => {
    const findUser = valUser.find((x) => x.email === email && x.password === password)
    if (findUser && validateEmail(email) && validatePassword(password)) {
      setloguser({ email: email, password: password, name: findUser.name })
      setCart(findUser.cart || [])
      nav('/')
      setifLogin(true)
    }
    else {
      alert("Email or Password is incorrect !!!!")
    }
  }




  const [search , setsearch]=useState(" ") 
  const [searchresult , setsearchresult]=useState([{}])
  const searchpro = ()=>{
    const Searchproduct = item.filter((items)=>items.ProductName.toLowerCase().includes(search.toLowerCase()))
    setsearchresult(Searchproduct)
    nav('/Search')
}
console.log(searchresult)



  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (ifLogin) {
      setShow(true);
    }
  }


  const handleClose = () => setShow(false);
  const [cart, setCart] = useState([])
  const [item, setItem] = useState(Items)
  const Addcart = (id) => {
    if (ifLogin) {
      const Finditem = item.find((x) => x.Id === id)
      if (Finditem) {
        const Data = cart.some((x) => x.Id === id)
        if (Data) {
          const UpdateCart = cart.map((x) => x.Id === id ? { ...x, Qty: x.Qty + 1, Total: (x.Qty + 1) * x.Price } : x)
          setCart(UpdateCart)
        }
        else {
          setCart([...cart, {
            ...Finditem,
            Qty: 1,
            Total: ((Finditem.Qty) * (Finditem.Price))
          }])
        }
      }
    } else {
      alert("Oops! It looks like you need to log in first before adding products to your cart. Please login to continue shopping.")
      nav('/Login')
    }
  }






  let tot = 0;
  const findUser = valUser.find((item) => item.email === loguser.email)
  if (findUser.cart || []) {
    tot = cart.reduce((Tot, item) => item.Total + Tot, 0)
  }




  const [buyitem, setbuyitem] = useState([{}])
  const Buynow = (id) => {
    if (ifLogin) {
      const findbuyitem = item.find((item) => item.Id === id)
      if (findbuyitem) {
        const newBuytot = [{ ...findbuyitem, Total: (findbuyitem.Qty) * (findbuyitem.Price) }]
        setbuyitem(newBuytot)
        nav('/Payment')
      }
      else {
        setbuyitem(cart)
        nav('/Payment')
      }
    } else {
      alert("Oops! It looks like you need to log in first before buying products. Please login to continue shopping.")
      nav('/Login')
    }
  }

  const buytot = buyitem.reduce((tot, item) => item.Total + tot, 0)



  const Logout = () => {
    const findUser = valUser.map((x) => x.email === loguser.email ? { ...x, cart: cart } : x)
    setvalUser(findUser)
    setloguser({})
    setCart([])
    nav('/Login')
    setifLogin(false)
  }





  return (
    <div className="App">
      <NavBar Logout={Logout} Loguser={loguser} ifLogin={ifLogin} Items={Items} searchpro={searchpro} setsearch={setsearch}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register validateUser={validateUser} />}></Route>
        <Route path="/login" element={<Login Loguser={Loguser} />}></Route>
        <Route path='/Shop' element={<Shop Addcart={Addcart} nav={nav} />} />
        <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} tot={tot} ifLogin={ifLogin} Loguser={loguser} Buynow={Buynow} />} />
        <Route path='/Payment' element={<Payment cart={cart} tot={tot} Buynow={Buynow} buyitem={buyitem} buytot={buytot}  />} />
        <Route path='/Bedroom' element={<Bedroom Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
        <Route path='/Dinning' element={<Dinning Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
        <Route path='/Entertainment' element={<Entertainment Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
        <Route path='/Kids' element={<Kids Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
        <Route path='/Office' element={<Office Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
        <Route path='/Outdoor' element={<Outdoor Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
        <Route path='/Seating' element={<Seating Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
        <Route path='/Storage' element={<Storage Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
        <Route path='/Viewproduct/:Id' element={<Viewproduct Items={Items} Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} Buynow={Buynow} />} />
        <Route path='/Search' element={<Search searchresult={searchresult} />} />
      </Routes>
    </div>
  );
}

export default App;
