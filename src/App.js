import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userAuthContext from "./utils/userAuthContext";
import Home from "./Components/Home";
import About from "./Components/About";
import OurEvents from "./Components/OurEvents";
import Navbar from "./Components/navbar/Navbar";
import NotFound from "./Components/NotFound";
import Rentals from "./Components/Rentals";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
// import ErrorPage from "./Components/ErrorPage";

export default function App() {
  const [user] = userAuthContext();
  return (
    <>
      <BrowserRouter>
        <Navbar data={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/error" element={<ErrorPage />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/About/*" element={<About />} />
          <Route path="/Rentals">
            <Route index element={<OurEvents />} />
            <Route path=":id" element={<Rentals />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
