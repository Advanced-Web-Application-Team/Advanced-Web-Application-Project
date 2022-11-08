
import Header from "../components/SingleComponent/Header";
import Navbar from "../components/SingleComponent/Navbar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import DisplayCharts from "../components/SingleComponent/DisplayCharts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Footer from "../components/SingleComponent/Footer";
//import LogIn from "../components/SingleComponent/LogIn";
//import Register from "../components/SingleComponent/Register";
//import Carousel from "../components/SingleComponent/Carousel";
import SecondPage from "../components/SingleComponent/SecondPage";
import 'react-toastify/dist/ReactToastify.css';
import { ChartProvider } from "../context/ChartContext";
import LayoutsForChart from "../components/SingleComponent/LayoutsForChart";
import UserView from "../components/SingleComponent/UserView";
function Home() {

  let [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const openModal = () => {
    setNavbarIsOpen(true);
  };

  const closeModal = () => {
    setNavbarIsOpen(false);
  };

  return (
    <>
    <ChartProvider>
    <Router>
    <div className="Home">
      <Header openModal={openModal} />
      <Navbar closeModal={closeModal} navbarOpen={navbarIsOpen}/>

      <div className="">
      <Routes>
          <Route exact path="/home" element={
          <DisplayCharts />
          }/>
          <Route path ="/emission" element={<SecondPage />}/>
          <Route path="/layoutdesign" element={<LayoutsForChart />} />
          <Route path="/publiclayout" element={<UserView />}/>
      </Routes>
      </div>

    </div>
   
    </Router>

   
    <ToastContainer />
    </ChartProvider>
    </>
  );
}

export default Home;
