import './App.css';
import Slider from './Components/Slider';
import Afterslider from './Components/Afterslider';
import Blacknav from './Components/Blacknav';
import SideGuests from './Components/SideGuests';
import a from './Images/Chancellor-111.png'
import b from './Images/CM-G.png'
import c from './Images/ShriAshishPatel.png'
import d from './Images/VC2.png'
import Glance from './Components/Glance';
import Content from './Components/Content';
import Footer from './Components/Footer';
import DemoCarousel from './Components/DemoCarousel';
import Services from './Components/Services';
import Service1 from './Components/Service1';
import Service2 from './Components/Service2';
import Service3 from './Components/Service3';
import { useState } from 'react';
import ReactDOM from "react-dom/client";
import News from './Components/News';
import Events from './Components/Events';
import Carousel from './Components/Carousel';
import Dropdown from './Components/Dropdown';


function App() {
  const[count,setCount] = useState(0);
  const[num,setNum] = useState(0);
  return (
   <>
   <div className="md:w-11/12 w-full mx-auto shadow-lg shadow-slate-800">
   <Slider />
   <Afterslider />
   <Blacknav />
   <div className="flex lg:flex-row flex-col">
    <div className="lg:w-3/4 w-full">
    <Carousel />
    </div>
    <div className="lg:w-1/4 w-full grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 ">
      <SideGuests name="Smt. Anandiben Patel" position="Hon’ble Chancellor & H.E. Governor of U.P." img={a} />
      <SideGuests name="Shri Yogi Adityanath" position="Hon'ble Chief Minister of U.P." img={b} />
      <SideGuests name="Shri Ashish Patel" position="Hon'ble Minister for Technical Education, U.P." img={c} />
      <SideGuests name="Prof. Jai Prakash Saini" position="Hon'ble Vice Chancellor" img={d} />
    </div>
   </div>
   <div className="content m-10 shadow-md shadow-slate-800">
    {/* two column  */}
    <div className="all-buttons my-6 mt-14 gap-2 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 w-11/12 mx-auto ">
      <button style={{borderRadius:"15px"}} className='message bg-[#f6931d] text-xs text-white p-2 my-2 font-bold'>Viksit Bharat @2047</button>
      <button style={{borderRadius:"15px"}} className='message bg-[#f6931d] text-xs text-white p-2 my-2 font-bold'>PhD-First Year 2024-25, July Session</button>
      <button style={{borderRadius:"15px"}} className='message bg-[#f6931d] text-xs text-white p-2 my-2 font-bold'>P.G. Admissions-2024-25</button>
      <button style={{borderRadius:"15px"}} className='message bg-[#f6931d] text-xs text-white p-2 my-2 font-bold'>U.G. Admissions-2024-25</button>
      <button style={{borderRadius:"15px"}} className='message bg-[#f6931d] text-xs text-white p-2 my-2 font-bold '>International Students-2024-25</button>

    </div>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4">
      <div className="first">
      <div className="but flex text-white  ">
      <button
                  className={`p-2 w-1/2 border-2 text-size border-slate-200 font-bold rounded-t-lg ${num === 0 ? 'bg-[#f7941d] text-white' : 'bg-white text-slate-700'}`}
                  onClick={() => setNum(0)}
                >
                  EVENTS
                </button>
                <button
                  className={`p-2 w-1/2 border-2 text-size border-slate-200 font-bold rounded-t-lg ${num === 1 ? 'bg-[#f7941d] text-white' : 'bg-white text-slate-700'}`}
                  onClick={() => setNum(1)}
                >
                  LATEST NEWS
                </button>
        
      </div>
      {num === 0 && <Events />}
      {num === 1 && <News />} 
           </div>
      <div className="second">
      <div className="but flex text-white ">
       
      <button
                  className={`p-2 w-1/4 border-2 text-size border-slate-200 font-bold rounded-t-lg ${count === 0 ? 'bg-[#f7941d] text-white' : 'bg-white text-slate-700'}`}
                  onClick={() => setCount(0)}
                >
                  STUDENTS
                </button>
                <button
                  className={`p-2 w-1/4 border-2 text-size border-slate-200 font-bold rounded-t-lg ${count === 1 ? 'bg-[#f7941d] text-white' : 'bg-white text-slate-700'}`}
                  onClick={() => setCount(1)}
                >
                  ADMISSION
                </button>
                <button
                  className={`p-2 w-1/4 border-2 text-size border-slate-200 font-bold rounded-t-lg ${count === 2 ? 'bg-[#f7941d] text-white' : 'bg-white text-slate-700'}`}
                  onClick={() => setCount(2)}
                >
                  FACULTY
                </button>
                <button
                  className={`p-2 w-1/4 border-2 text-size border-slate-200 font-bold rounded-t-lg ${count === 3 ? 'bg-[#f7941d] text-white' : 'bg-white text-slate-700'}`}
                  onClick={() => setCount(3)}
                >
                  MISCELLANEOUS
                </button>
              </div>
              {count === 0 && <Services />}
              {count === 1 && <Service1 />}
              {count === 2 && <Service2 />}
              {count === 3 && <Service3 />}
        {/* <Services /> */}
      </div>
    </div>
    {/* glance + content */}
    <div className="flex md:flex-row flex-col">
    <div className="md:w-1/4 m-10 ">
    <Glance />
    </div>
    <div className="md:w-3/4 px-10 justify my-10 mx-auto">
    <Content />
    </div>
    </div>
   
   </div>
   <Footer />
   {/* <Dropdown tag="hello"/> */}
   </div>
   </>
  );
}

export default App;
