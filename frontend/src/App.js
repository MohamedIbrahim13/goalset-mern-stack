import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { logout } from "./actions/authAction";

function App() {
  //const [auth, setAuth] = useState(null);
  //const dispatch = useDispatch();
  const { auth } = useSelector(state => state.auth);
  const { goals, isLoading } = useSelector(state => state.goals);
  // const logOut = useCallback(() => {
  //   dispatch(logout());

  // }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header auth={auth} logout={logout} />
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard auth={auth} goals={goals} isLoading={isLoading} />
              }
            />
            <Route path="/login" element={<Login auth={auth} />} />
            <Route path="/register" element={<Register auth={auth} />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
