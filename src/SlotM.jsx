import React from "react";
import Else from "./ElseSlot";
import ISlot from "./IfSlot";
const SlotM=(props)=>{
    var {x,y,z}=props;

  
        if(x===y && y===z){
         return(<ISlot x="😄" y="😄" z="😄"/>)
        }
        else{
            return(<Else x="😄" y="😄" z="🎅"/>)
        }
      
    
}

export default SlotM;