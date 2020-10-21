import React from "react";
import Myfun from "../Cards";
import Sdata from "../Sdata";
const Amazon = () =>{
    return (
        <>
            <Myfun
                key={Sdata[1].id}
                image={Sdata[1].image}
                movie={Sdata[1].movie}
                links={Sdata[1].links}
                Name={Sdata[1].Name} />
        </>
    );
}

export default Amazon;
