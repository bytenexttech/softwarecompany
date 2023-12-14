import { useEffect } from "react";
import '../components/css/Header.css'
import logo from '../assests/logo.png'
import { ImCross } from "react-icons/im";
import { FcReadingEbook } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
function Header(props) {

    useEffect(() => {
        window.onscroll = function () { fixedHeader() };
    }, []);

    function fixedHeader() {
        var header = document.querySelector('.header');
        var sticky = header.offsetTop + 200;

        if (window.scrollY > sticky) {
            header.classList.add("stickyHeader");
        } else {
            header.classList.remove("stickyHeader");
        }
    }

    const showMobileHeader = () => {
        document.querySelector('.tabs').style.left = '0px';
    }
    const hideMobileHeader = () => {
        document.querySelector('.tabs').style.left = '-100vw';
    }

    const tabClicked = () => {
        if (window.innerWidth < 700) {
            hideMobileHeader();
        }
    }


    return (
        <div className='header'>
            <div className='header-content'>
                <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='logo'>
                        <img src={logo} alt='' />
                    </div>
                </a>
                <div className='tabs'>
                    <div className="MobileContent">
                        <a href="/"><img src={logo} alt='' /></a>
                        <p><ImCross onClick={hideMobileHeader} /></p>
                    </div>
                    <a href='/'>Home</a>
                    <a href='/#Services' onClick={tabClicked}>Services</a>
                    <a href='/About'>About Us</a>
                    <a href='/Contact'>Contact Us</a>
                    {/* <a href='https://forms.gle/35TFeUCuxjDrBatA8' target="_blank" rel="noreferrer">Internship</a> */}
                    <a href='mailto:hello@bytenexttechnologies.in' target="_blank" rel="noreferrer">Internship</a>
                    <a href='https://bytenexttechnologies.hashnode.dev/' target="_blank" rel="noreferrer">Blogs</a>
                    <a href='/Training'>Get Trained <span><FcReadingEbook /></span></a>
                </div>
                <div className="bars">
                    <FaBars onClick={showMobileHeader} />
                </div>
            </div>
        </div>
    );
}
export default Header;