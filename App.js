import "./App.css";
import Hellofun from "./components/Hellofun.js";
import Image from "./components/image";
import Time from "./components/Time.js";
import Name from "./components/Name.js";
import Table from "./components/myTables.js";
import Factorial from "./components/Factorial.js";
import Displaynames from "./components/Displaynames.js";
import ObjectArrDisplay from "./components/ObjectArrDisplay.js";
import Styless from "./components/Welcome.js";
import StateFunComp from "./components/Paragraph.js";
import Increament from "./components/Increment.js";
import ImageState from "./components/Complast.js";
import { UserForm } from './components/UseForm';
import RegForm from "./components/Regform.js";
import { Link ,Route, Routes} from 'react-router-dom'
import { Home } from "./components/Home.js";
import { SetName } from "./components/SetName.jsx";
import { DummyRest } from "./components/DummyRest.jsx";
import { Navbar } from "./components/navbar.jsx";
import { EmpFetch } from "./components/Dbdata.js";
import MyRestComp from "./components/Dbpost.js";
import Formvalidation from "./components/Formvalidation.js";
import Login from "./login.js";
import GetBookComp from "./components/GetBook.js";
function App() {

  return (
    <header>
       <div>
      <h1>Book Information KnowIT </h1>
      <GetBookComp />
    </div>
      {/* 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        */}

      {/* <Hellofun></Hellofun>
        <Image></Image>
        <Time></Time>
        <Name></Name>

        <Table></Table> */}

      {/* <Factorial num={5}></Factorial>
      <Displaynames
        name={["aniket", "adesh", "ramesh", "sachin"]}
      ></Displaynames>
      <ObjectArrDisplay
        emps={[
          { empid: 1001, ename: "Amit", salary: 2000 },
          { empid: 1002, ename: "Aniket", salary: 3000 },
          { empid: 1003, ename: "Anna", salary: 4000 },
        ]}
      ></ObjectArrDisplay>
      <Styless></Styless>
      <StateFunComp></StateFunComp>
      <Increament></Increament>
      <ImageState/> */}
      {/* <UserForm></UserForm> */}
      {/* <RegForm></RegForm> */}
{/* 
      <ul className="nav navbar">
            <li className="nav-item">
                <Link to="/hello" className="nav-link">Hello comp</Link>
            </li>
            <li className="nav-item">
                <Link to="/timer" className="nav-link">Timer Comp</Link>
            </li>
            <li className="nav-item">
                <Link to="/empform" className="nav-link">Emp Form</Link>
            </li>
            

         </ul>
      <Link to = "/home">home</Link>
      <br/>
      <Link to = "/setname">SetName</Link>
      <br/>
      <Link to = "/DummyRest">Getdata</Link>
      <br/>
      <Link to= "/db">show data</Link>
      <br/>

      <Link to = "/data">Emp data</Link> 

      
      <Routes>
        <Route path ="/home" element ={<Home/>}/>
        <Route path ="/setname" element={<SetName/>}/>
        <Route path ="/DummyRest" element= {<DummyRest/>}/>
        <Route path = "/navbar" element = {<Navbar/>}/>
        <Route path = '/db' element = {<EmpFetch/>}/>
        <Route path = '/data' element = {<MyRestComp/>}/>
        <Route path='/empvalid' element={ <Formvalidation /> } />
        
          
      </Routes> */}
      

    </header>
  );
}

export default App;
