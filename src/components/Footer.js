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
                        <a href='/'>Home</a>
                        <a href='/About'>About Us</a>
                        {/* <a href='/'>Careers</a> */}
                        <a href='/#Services'>Services</a>
                        {/* <a href='/'>Integrations</a> */}
                        {/* <a href='/'>Products</a> */}
                        <a href='/Contact'>Contact</a>
                        {/* <a href='/'>Blogs</a> */}
                    </div>
                    <div className='footer-services'>
                        <h1>Services</h1>
                        <a href='/'>Website Development</a>
                        <a href='/'>Ecommerce Development</a>
                        <a href='/'>Salesforce Consulting</a>
                        <a href='/'>Salesforce Development</a>
                        <a href='/'>Application Development</a>
                    </div>
                    <div className='footer-contact'>
                        <h1>Contact Us</h1>
                        <a href='tel:+91    9166276171' type='mobile'>+91 9166276171</a>
                        <a href='mailto:hello@bytenexttechnologies.in'>hello@bytenexttechnologies.in</a>
                        <a href='/'>Sector 28, RanaSanga Marg Prata Nagar,<br /> Jaipur, 302022, INDIA</a>
                    </div>
                    <div className='footer-social'>
                        <h1>Follow Us</h1>
                        <div className='footer-social-links'>
                            <a href='/'><AiOutlineInstagram /></a>
                            <a href='/'><AiFillLinkedin /></a>
                            <a href='/'><BsTwitter /></a>
                            <a href='/'><AiFillFacebook /></a>
                        </div>
                    </div>
                </div>
                <div className='footer-up-scroller'>
                    <h1><BsFillArrowUpCircleFill style={{ cursor: "pointer" }} onClick={scrolltoTop} /></h1>
                </div>
            </div>
        </div>
    );
}
export default Footer;