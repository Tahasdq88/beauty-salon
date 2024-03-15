import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/homepage/HomePage";
import Loginpage from "./pages/LoginPage/Loginpage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Contact from "./pages/contact/Contact";
import OurStory from "./pages/OurStory/OurStory";
import Treatment from "./pages/treatment/Treatment";
import PricePage from "./pages/Price/PricePage";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();
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
      {!isAuthenticated && (
        <Route
          path="/login"
          element={
            <Layout>
              <Loginpage />
            </Layout>
          }
        />
      )}
      {!isAuthenticated && (
        <Route
          path="/Signup"
          element={
            <Layout>
              <SignupPage />
            </Layout>
          }
        />
      )}
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
      <Route
        path="/prices"
        element={
          <Layout>
            <PricePage />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
