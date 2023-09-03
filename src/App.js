import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/homepage/HomePage";
import Loginpage from "./pages/LoginPage/Loginpage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Loginpage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
