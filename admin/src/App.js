import TopBar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="users" element={<UserList />} />
            <Route path="user/:userId" element={<User />} />
            <Route path="newUser" element={<NewUser />} />
            <Route path="products" element={<ProductList />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="newProduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
