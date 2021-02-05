import {GetStaticProps} from "next";
import React from "react";

export const getStaticProps:GetStaticProps = async(context) =>{
    return{
        props:{info:Math.floor(Math.random() * 10)},
        revalidate:10
    }
};

const Special = (props) =>{
    return(
        <>
            <p>{props.info}</p>
        </>
    )
}

export default Special;