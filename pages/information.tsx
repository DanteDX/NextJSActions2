import {GetServerSideProps} from "next";
import React from 'react';

export const getServerSideProps:GetServerSideProps = async(context) =>{
    let name = "shadman";
    return{
        props:{name}
    }
};

export default function Information(props){
    return(
        <p>{props.name}</p>
    )
}