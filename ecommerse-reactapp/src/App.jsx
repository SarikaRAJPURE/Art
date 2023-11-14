import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart"
import ProductList from "./Pages/ProductList/ProductList";
import Register from "./Pages/Register";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Announcement from "./components/Announcement/Announcement";
import Shop from "./Pages/Shop/Shop";
import Footer from "./components/Footer/Footer";
import Success from "./Pages/Success";
import Pay from "./Pages/Pay";
import NotFound from "./Pages/NotFound";
import { useSelector } from "react-redux";

const App = () => {
  //const isLoggedIn = false;
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  return <div>
    <Announcement />
    <Navbar />
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/pay" element={<Pay />} />
    </Routes>
    <Footer />
  </div>;
};

export default App;