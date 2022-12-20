import { Route, Routes } from "react-router-dom";
import Left from "./components/Left";
import Dashboard from "./pages/Dashboard";
import PostManagement from "./pages/PostManagement";
import UserManagement from "./pages/UserManagement";

const App = () => {
  return (
    <div className="flex">
      <Left />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/userManagement" exact element={<UserManagement />} />
        <Route path="/postManagement" exact element={<PostManagement />} />
        {/* <Route path="/users/:id" exact element={<Users />} />
        <Route path="/add-user" exact element={<Add />} />
        <Route path="/edit-user/:id" exact element={<Edit />} /> */}
      </Routes>
    </div>
  );
};
export default App;
