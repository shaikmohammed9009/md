import React from 'react';
import "./index.css";
import Image from "./Abdulgafoor/Myimage";
const Myfun = (props) =>{
   return(
       <div classNames="cards">
           <div className="card">
           <img className="card_img" alt="shaik mohammed" src={props.pimg}/>
               <div className="card__info">
               <h3 className="Name">{props.pn}</h3>
                   <h3 className="Movie">{props.Gm}</h3>
                   <h3 className="Movie">{props.pp}</h3>
                  
               </div>
           </div>
       </div>
   );
}
export default Myfun;