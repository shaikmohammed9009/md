// import React, { useState } from "react";
// import "./index.css";
// import SlotM from "./SlotM";


import React from "react";
// import Netflix from "./netflix/Netflix";
// import Amazon from "./Amazon/Amazon";
import Smydata from "./Abdulgafoor/Smydata";
import Myfun from "./Cards";
import "./index.css";
// const Myseries = "Amazon"

// const Shaik = () => {
//     if (Myseries === "netflix") {

//        return(<Netflix />)
//     }else if(Myseries === "Amazon"){
//            return(<Amazon />)
//     }


//     else {
//         return(alert("PLEASE ENTER VALID NAME"))

//     }
// };



const App = () => {
 
  // const [count,setCount]=useState(0)
  //   const Btn =() =>{
  //     setCount(count + 1)
  //   }
   return( <>
        {/* <h1 className="h1" >{count}</h1>
        <button onClick={Btn}>Click</button> */}
        {/* {Myseries === "Amazon" ? <Netflix />:<Amazon />} */}
        {/* <Shaik /> */}
        {/* <div className="slot_m">
        <SlotM />
        <SlotM />
        <SlotM />
        </div> */}
        <h1><span>ABDUL GAFOOR UMRI </span><br/><br/>CONTACT US : <span>9392637635</span> </h1>
        {Smydata.map((navs)=>{
          return(<Myfun
              key={navs.id}
              pimg={navs.pimg}
              pn={navs.pn}
              Gm={navs.gm}
              pp={navs.pp}

          />)
        })}



  
    </>)

};

export default App;