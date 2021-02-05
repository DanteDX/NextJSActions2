import {GetStaticProps} from "next";
import React from "react";

export const getStaticProps:GetStaticProps = async(context) =>{
    return{
        props:{info:'shadman martin piyal'}
    }
}

export const getStaticPaths = () =>{
    return{
        fallback:false,
        paths:[
            {params:{name:'shadman'}},
            {params:{name:'martin'}},
            {params:{name:'piyal'}}
        ]
    }
}

const Super = (props):JSX.Element =>{
    return(
        <>
            <p>{props.info}</p>
        </>
    )
}

export default Super;

