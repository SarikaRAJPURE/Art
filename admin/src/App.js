import TopBar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/user/User";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
