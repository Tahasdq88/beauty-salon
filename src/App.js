import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/homepage/HomePage";
import Loginpage from "./pages/LoginPage/Loginpage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Contact from "./pages/contact/Contact";
import OurStory from "./pages/OurStory/OurStory";
import Treatment from "./pages/treatment/Treatment";

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
      <Route
        path="/Signup"
        element={
          <Layout>
            <SignupPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/story"
        element={
          <Layout>
            <OurStory />
          </Layout>
        }
      />
     
      <Route
      path="/treatments/:id"
      element={
        <Layout>
          <Treatment />
        </Layout>
      }
      />
    </Routes>
  );
}

export default App;
