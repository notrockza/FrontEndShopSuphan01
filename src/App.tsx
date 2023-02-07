import { useState } from 'react'
import LoginUser from './App/Compoments/FormUser/LoginUser'
import { Routes ,Route } from 'react-router-dom'
import AboutUser from './App/Compoments/PageUser/AboutUser'
import RegisterUser from './App/Compoments/FormUser/RegisterUSer'
import Product from './App/Compoments/Shoppings/Product'
import Details from './App/Compoments/Shoppings/Details'
import Test from './App/Compoments/Test/Test'
import Carts from './App/Compoments/Shoppings/Carts'
import SidebarAdmin from './App/Compoments/Private/Sidebar/SidebarAdmin'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
<Route path="/" element={<AboutUser/>} />
<Route path="/register" element={<RegisterUser/>} />
<Route path="/login" element={<LoginUser/>} />
<Route path="/product" element={<Product/>} />
<Route path="/detail/:id" element={<Details/>} />
<Route path="/test" element={<Test/>} />
<Route path="/cart" element={<Carts/>} />
<Route path='/admin' element={<SidebarAdmin/>}></Route>
</Routes>
    </>
  )
}

export default App
