import React from 'react';
import "./index.css";
import Img from "./Image"
const Myfun = (props) =>{
   return(
       <div classNames="cards">
           <div className="card">
               {/* /* <img className="card_img" alt="shaik mohammed" src={props.image}/>
                */ }
                <Img image={props.image}/>
               <div className="card__info">
               <h3 className="Name">{props.Name}</h3>
                   <h3 className="Movie">{props.movie}</h3>
                   <a href={props.links}>
                       <button className="btnc">WACTH NOW</button>
                   </a>
               </div>
           </div>
       </div>
   );
}

export default Myfun;