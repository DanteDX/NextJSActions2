import React from "react";
import Link from "next/link";

export default function House(){
    return(
        <div className="special">
            This is the home component
            <Link href="/spider">
                <a className="p-4 m-4 bg-red-500 border-black border-2">Spider</a>
            </Link>
        </div>
    )
}