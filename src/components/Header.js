import { useEffect } from "react";
import '../components/css/Header.css'
import menu_white from '../assests/menu-white.png'
import logo from '../assests/logo.png'
function Header(props) {

    useEffect(() => {
        window.onscroll = function () { fixedHeader() };
    }, []);

    function fixedHeader() {
        var header = document.querySelector('.header');
        var sticky = header.offsetTop + 100;

        if (window.scrollY > sticky) {
            header.classList.add("stickyHeader");
        } else {
            header.classList.remove("stickyHeader");
        }
    }

    const showMobileHeader = () => {
        console.log('Clicked');
        console.log(document.querySelector('.header .tabs').style.height);
        if (document.querySelector('.header .tabs').style.height === '0px' || document.querySelector('.header .tabs').style.height === '') {
            document.querySelector('.header .tabs').style.height = 'max-content';
            document.querySelector('.header .tabs').style.padding = '20px';
            document.querySelector('.header').style.background = '#151414';
        }
        else {
            document.querySelector('.header .tabs').style.height = '0px';
            document.querySelector('.header .tabs').style.padding = '0px 20px';

            var header = document.querySelector('.header');
            var sticky = header.offsetTop + 100;

            if (window.scrollY > sticky) {
                document.querySelector('.header').style.background = '#151414';
            } else {
                document.querySelector('.header').style.background = 'transparent';
            }
        }
    }

    const tabClicked = () => {
        if (window.innerWidth < 700) {
            showMobileHeader();
        }
    }


    return (
        <div className='header'>
            <div className='header-content'>
                <a href="/">
                    <div className='logo'>
                        <img src={logo} alt='' />
                    </div>
                </a>
                <div className='tabs'>
                    <a href='/' onClick={tabClicked}>Home</a>
                    <a href='/#Services' onClick={tabClicked}>Services</a>
                    <a href='/About' onClick={tabClicked}>About Us</a>
                    <a href='/Contact' onClick={tabClicked}>Contact Us</a>
                    {/* <a href='/Training' onClick={tabClicked}>Get Trained</a> */}
                </div>
                <div className="bars">
                    <img src={menu_white} alt="" onClick={showMobileHeader} />
                </div>
            </div>
        </div>
    );
}
export default Header;