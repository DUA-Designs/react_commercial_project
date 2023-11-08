import React,{useRef} from "react";
import Logo from "../assets/images/ddblack.png";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { aboutImg,menu } from "../data";
import Footer from "./footer";

const NavBar =()=>{
    const searchRef=useRef();

    const searchHandler=()=>{
      
       
        searchRef.current.classList.toggle("active");
       
        
        
        
       

    }



    return (<>
   <header className="header">
    <img src={Logo} alt="logo"/>
   <nav className="navbar">
    <Link to="/" >Home</Link>
    <Link to="/about" >About</Link>
    <Link to="/menu" >Menu</Link>
    <Link to="/products" >Products</Link>
    <Link to="/review" >Review</Link>
    <Link to="/contact" >Contact</Link>
    <Link to="/blog" >Blog</Link>



        

        </nav>
        <div className="icons">
            <div className="fa fa-search" onClick={searchHandler}></div>
            <div className="fa fa-shopping-cart"></div>
            <div className="fa fa-bars" id="menu-btn"></div>
            
        </div>
        <div className="search-form" id="appear" ref={searchRef}>
            <input type="search" placeholder="search here ..." />
            <label htmlFor="search-box" className="fa fa-search" ></label>
        </div>
   </header>
    </>)
}


const Home= ()=>{
return (<>
<NavBar/>

<section className="home" id="home">
    <div className="content">
        <h3>Hi, <span>Good Morning Everyone.</span> Enjoy the class</h3>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
        <a href="#home" className="btn">Get the data</a>
    </div>
</section>
 
</>)
}
const About= ()=>{
    return (<>
    <NavBar/>
    
    <section className="about" id="about">
    <h1 className="heading"><span>About</span>Us</h1>
    <div className="row">
    <div className="image"><img src={aboutImg} alt="about_us"></img>
    </div>
    

        <div className="content">
            <h1>What Makes You Best</h1>
    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
    <a href="#about" className="btn"> About Us</a>
    </div></div>
    
    </section>
    </>)
    }
    const Menu= ()=>{
        return (<>
        <NavBar/>
        <section className="menu" id="menu">
            <div className="content"><h1>Our <span>Menu</span></h1></div>
      <div className="columns">
           {menu.map((i)=><div className="box"><img src={i["component"]} alt="menu_imgs"></img>
           <h2>{i["name"]}</h2>
           <h3>{"$"+i["price"]} <sub>{ (Number(i["price"])+Number(i["price"]*20/100)).toFixed(2) }</sub></h3>
           <a href="#menu" className="btn" >Add To Cart</a>
           </div>)}
          
        
    
      </div>
   
    </section>
        </>)
        }

        const Products= ()=>{
            return (<>
            <NavBar/>
            <section className="products"><div className="content"><h1>Our Products</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
    </div></section>
            </>)
            }

            const Review= ()=>{
                return (<>
                <NavBar/>
                <section className="review"><div className="content"><h1>Review</h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
    </div></section>
                </>)
                }
                const Contact= ()=>{
                    return (<>
                    <NavBar/>
                    <section className="contact" id="contact"><h1 className="heading"><span>Contact</span></h1>
                    <div className="content">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.875588080509!2d78.51570967368876!3d17.369718603316816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb995b83d1960f%3A0x65ab077d64504e04!2sVivid%20Technologies%20Staffing!5e0!3m2!1sen!2sin!4v1699343117085!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="location"></iframe>

                        <form>
                            <h3>Get In Touch</h3>
                            <div className="inputBox">
                                <span className="fa fa-user"></span>
                                <input type="text" placeholder="name"></input>
                            </div>
                            <div className="inputBox">
                                <span className="fa fa-envelope"></span>
                                <input type="email" placeholder="email"></input>
                            </div>
                            <div className="inputBox">
                                <span className="fa fa-user"></span>
                                <input type="number" placeholder="number"></input>
                            </div>
                            <input type="submit" value="contact now" className="btn"/>
                        </form>
    </div></section>
    <Footer/>
                    </>)
                    }
                    const Blog= ()=>{
                        return (<>
                        <NavBar/>
                        <section className="blog"><div className="content"><h1>Read our blog...</h1>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
    </div></section>
                        </>)
                        }
                        
                        
const Bind=()=>{
    return (<><BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        </Routes>
        </BrowserRouter></>);
}



export default Bind;