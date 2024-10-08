import { Routes, Navigate, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import AddBlog from "./pages/blog/AddBlog";
import BlogList from "./pages/blog/BlogList";
import BlogPost from "./pages/blog/BlogPost";
import EditBlog from "./pages/blog/EditBlog";
import Search from "./pages/blog/Search";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="font-lexend-deca">
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createblog" element={<AddBlog />}/>
        <Route path="/feed" element={<BlogList/>}/>
        <Route path="/read/:id" element={<BlogPost/>}/>
        <Route path="/edit/:id" element={<EditBlog />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
