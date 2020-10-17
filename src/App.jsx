import React from "react";
import Sdata from "./Sdata";
import Myfun from "./Cards";
const App = () =>{
return(<>
<h1 className="h1">AMAZON WEB SERIES</h1>
{Sdata.map((nava) =>{
   return(<Myfun 
       key={nava.id}
       image={nava.image}
       movie={nava.movie}
       links={nava.links}
       Name={nava.Name}   />  
       
)})}
</>
)}

export default App;