import { IoStorefront } from "react-icons/io5"
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"


const Footer = ()=>{
    return  <section className="bg-neutral mt-16">
            <div className="align-elm py-4">
            <footer className="footer p-10 text-neutral-content">
                <nav>
                    <header className="footer-title">Company</header> 
                    <Link
                     className="link link-hover"
                     to={'/about'}
                    >
                        About us
                    </Link>
                </nav> 
                <nav>
                    <header className="footer-title">STORE INFO</header> 
                    <a href="#" className="link link-hover">Store Demo Store USA</a>
                    <a href="#" className="link link-hover">+123456789</a>
                    <a href="#" className="link link-hover">Support@test.Com</a>
                </nav>
            </footer> 
            <footer className="footer px-10 py-4 border-t text-neutral-content border-neutral-300">
                <aside className="items-center grid-flow-col">
                    <IoStorefront className="text-5xl pl-4" />
                    <p>Astro Store<br/>Providing reliable tech since 2023</p>
                </aside> 
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="#" target="_blank">
                            <FaTwitter className="text-xl"/>
                        </a>
                        <a href="#" target="_blank">
                            <FaLinkedinIn className="text-xl" />
                        </a>
                    </div>
                </nav>
            </footer>
            </div>
        </section>
   
}

export default Footer