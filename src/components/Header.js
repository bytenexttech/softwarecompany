import { useEffect } from "react";
import '../components/css/Header.css'
import menu_white from '../assests/menu-white.png'
import logo from '../assests/logo.png'
import { AiOutlineDown } from "react-icons/ai";
function Header(props) {

    useEffect(() => {
        window.onscroll = function () { fixedHeader() };
    }, []);

    function fixedHeader() {
        var header = document.querySelector('.header');
        var sticky = header.offsetTop + 100;

        if (window.pageYOffset > sticky) {
            header.classList.add("stickyHeader");
        } else {
            header.classList.remove("stickyHeader");
        }
    }

    const showMobileHeader = () => {
        console.log('Clicked');
        console.log(document.querySelector('.header .tabs').style.height);
        if(document.querySelector('.header .tabs').style.height === '0px' || document.querySelector('.header .tabs').style.height === '') {
            document.querySelector('.header .tabs').style.height = 'max-content';
            document.querySelector('.header .tabs').style.padding = '20px';
            document.querySelector('.header').style.background = '#151414';
        }
        else {
            document.querySelector('.header .tabs').style.height = '0px';
            document.querySelector('.header .tabs').style.padding = '0px 20px';

            var header = document.querySelector('.header');
            var sticky = header.offsetTop + 100;

            if (window.pageYOffset > sticky) {
                document.querySelector('.header').style.background = '#151414';
            } else {
                document.querySelector('.header').style.background = 'transparent';
            }
        }
    }


    return (
        <div className='header'>
            <div className='header-content'>
                <div className='logo'>
                    <img src={logo} alt='' />
                </div>
                <div className='tabs'>
                    <a href='/'>Services <span><AiOutlineDown /></span></a>
                    <a href='/'>Integrations <span><AiOutlineDown /></span></a>
                    <a href='/'>Products <span><AiOutlineDown /></span></a>
                    <a href='/'>Portfolio <span><AiOutlineDown /></span></a>
                    <a href='/'>About Us</a>
                    <a href='/'>Contact Us</a>
                </div>
                <div className="bars">
                    <img src={menu_white} alt="" onClick={showMobileHeader} />
                </div>
            </div>
        </div>
    );
}
export default Header;