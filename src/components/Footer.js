// import { useEffect } from "react";
import '../components/css/Footer.css'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
function Footer(props) {

    const scrolltoTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className='footer'>
            <div className='footer-content-area'>
                <div className='footer-content'>
                    <div className='footer-quick-links'>
                        <h1>Quick Links</h1>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Services</p>
                        <p>Integrations</p>
                        <p>Products</p>
                        <p>Contact</p>
                        <p>Blogs</p>
                    </div>
                    <div className='footer-services'>
                        <h1>Services</h1>
                        <p>Website Development</p>
                        <p>Ecommerce Development</p>
                        <p>Salesforce Consulting</p>
                        <p>Salesforce Development</p>
                        <p>Salesforce Support</p>
                        <p>Application Development</p>
                        <p>Integrations</p>
                    </div>
                    <div className='footer-contact'>
                        <h1>Contact Us</h1>
                        <p>+91 9079762613</p>
                        <p>Contact@comapny.com</p>
                        <p>1200 N Federal Hwy, Ste 201,<br /> Boca Raton, FL 33432, USA</p>
                    </div>
                    <div className='footer-social'>
                        <h1>Follow Us</h1>
                        <div className='footer-social-links'>
                            <p><AiOutlineInstagram /></p>
                            <p><AiFillLinkedin /></p>
                            <p><BsTwitter /></p>
                            <p><AiFillFacebook /></p>
                        </div>
                    </div>
                </div>
                <div className='footer-up-scroller'>
                    <h1><BsFillArrowUpCircleFill style={{cursor: "pointer"}} onClick={scrolltoTop} /></h1>
                </div>
            </div>
        </div>
    );
}
export default Footer;