import React from "react";
import Sdata from "../Sdata";
import Myfun from "../Cards";
import "../index.css";

const Netflix = ()=>{
    return (
        <>
            <Myfun
                key={Sdata[0].id}
                image={Sdata[0].image}
                movie={Sdata[0].movie}
                links={Sdata[0].links}
                Name={Sdata[0].Name} />
        </>
    );
}

export default Netflix;
