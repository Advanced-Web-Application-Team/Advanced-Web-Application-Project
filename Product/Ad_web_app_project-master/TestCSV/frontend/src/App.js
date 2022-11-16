import logo from './logo.svg';
import './App.css';
import DisplayCharts from "./components/screens/MainPage/DisplayCharts";
import SecondPage from "./components/screens/MainPage/SecondPage";
import Header from "./components/screens/UI components/Header";
import Navbar from "./components/screens/UI components/Navbar"
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LineChartOfV2 from './components/AllChartDesigns/LineChartOfV2';
import LineChartOfV3 from './components/AllChartDesigns/LineChartOfV3';
import LineChartOfV4 from './components/AllChartDesigns/LineChartOfV4';
import LineChartOfV5 from './components/AllChartDesigns/LineChartOfV5';
import LineChartOfV6 from './components/AllChartDesigns/LineChartOfV6';
import LineChartOfV7 from './components/AllChartDesigns/LineChartOfV7';
import LineChartOfV8 from './components/AllChartDesigns/LineChartOfV8';
import LineChartOfV9 from './components/AllChartDesigns/LineChartOfV9';
import LineChart from './components/AllChartDesigns/LineChart';
import { LineChartProvider } from './context/LineChartContext';


let arrayScreen = [];

arrayScreen.push({id: "v1", item: <LineChart />});
arrayScreen.push({id: "v2", item: <LineChartOfV2 />});
arrayScreen.push({id: "v3", item: <LineChartOfV3 />});
arrayScreen.push({id: "v4", item: <LineChartOfV4 />});
arrayScreen.push({id: "v5", item: <LineChartOfV5 />});
arrayScreen.push({id: "v6", item: <LineChartOfV6 />});
arrayScreen.push({id: "v7", item: <LineChartOfV7 />});
arrayScreen.push({id: "v8", item: <LineChartOfV8 />});
arrayScreen.push({id: "v9", item: <LineChartOfV9 />});
function App() {


  let [navbarIsOpen, setNavbarIsOpen] = useState(false);
  
  const openModal = () => {
    setNavbarIsOpen(true);
  };

  const closeModal = () => {
    setNavbarIsOpen(false);
  };



  return (
    <>
    <LineChartProvider>
      <Router>
      <Header openModal={openModal} />
      <Navbar closeModal={closeModal} navbarOpen={navbarIsOpen}/>

      <div className="">
      <Routes>
          <Route exact path="/" element={
          <DisplayCharts arrayScreen={arrayScreen}/>
          }/>
          
          {/* <Route path="/login" element={<LogIn />}/>
          <Route path="/register" element={<Register />}/>
          <Route path ="/emission" element={<SecondPage />}/>
          <Route path="/layoutdesign" element={<LayoutsForChart />} />
          <Route path="/publiclayout" element={<UserView />}/> */}
          <Route path ="/emission" element={<SecondPage />}/>
      </Routes>
      </div>

      {/* {arrayScreen.map((item) => (
          <SingleChart key={item.id} id={item.id} item={item.item}/>
      ))}  */}
      </Router>
    </LineChartProvider>
    </>
  );
}

export default App;
