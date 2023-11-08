import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';


const menu=["Home","Signup","Login","Contact"];
const toPath=["/","/Signup","/Login","/Contact"];
const Nav=()=>{
    return (<>
     <nav>
            <h1>This is working</h1>
            <ul>
                {menu.map((i,index)=><Link to={toPath[index]}>{i}</Link>)}
            </ul>
        </nav>
        </>)
};

const Home=()=>{
    return (<>
    <Nav/>
    <h1>This is homepage Page.</h1></>)
}

const Signup=()=>{
    return (<>
    <Nav/>
    <h1>This is Signup Page.</h1></>)
}
const Login=()=>{
    return (<>
    <Nav/>
    <h1>This is Login Page.</h1></>)
}
const Contact=()=>{
    return (<>
    <Nav/>
    <h1>This is Contact Page.</h1></>)
}

const Bind=()=>{
    return(
        <>
        <BrowserRouter>
         <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Contact" element={<Contact/>} />
        </Routes>
        </BrowserRouter></>)
}

export default class MenuBar extends React.Component{

    render(){
        return (<>
       
        <Bind/>
        
        </>)

    }
}

