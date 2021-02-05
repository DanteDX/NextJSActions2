import React,{useState} from 'react';
import Link from "next/link";


const Form = ():JSX.Element =>{
    const submitHandler = (e) =>{
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const middleName = e.target.middleName.value;
        const lastName = e.target.lastName.value;
        const to = "/info"+"/"+firstName+"/"+middleName+"/"+lastName;
        setCurrentLink(to);
        setShow(true);
    }
    const [show,setShow] = useState(false);
    const [currentLink,setCurrentLink] = useState('');
    return(
        <>
            <form onSubmit={e => submitHandler(e)}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" />
                <hr/>
                <label htmlFor="middleName">Middle Name:</label>
                <input type="text" name="middleName" id="middleName" />
                <hr/>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" />
                <hr/>
                <button type="submit">Submit</button>
            </form>
            {
                show && (
                    <Link href={currentLink}>
                        <a>Go to CurrentLink</a>
                    </Link>
                )
            }
        </>

    )
}

export default Form;