import '../components/css/About.css'
import Logo from '../assests/ByteNext Logo2.png';
import Image from '../assests/salesforce.png';
import { FaPlayCircle } from "react-icons/fa";

function About(props) {
    return (
        <div className="AboutPage">
            {/* <div className='playVideoComponentOverlay'></div>
            <div className='playVideoComponent'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XROICkmXT_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div> */}
            <div className='aboutUsFormBanner'>
                <p><span>Home &gt;</span> About Us</p>
            </div>

            <div className='aboutUsDetails'>
                <div className='aboutUsDetailsImage'>
                    <div style={{ background: '#ccc', padding: '50px' }}>
                        <img src={Logo} alt='aboutUS' />
                    </div>
                    <div className='image2' style={{height: '90%'}}>
                        <img src={Image} alt='aboutUS' />
                    </div>
                </div>
                <div className='aboutUsDetailsText'>
                    <h1>Designing, Developing & Implementing Salesforce Solutions.</h1>
                    <p>Welcome to Byte Next Technology, we are passionate about Salesforce. With our deep expertise in consulting, development, and training, we help businesses leverage the full potential of the Salesforce platform. Our dedicated team is committed to delivering innovative solutions and empowering your success in the digital landscape.</p>
                    <div className='aboutUsDetailsPlayVideo'>
                        <h1><FaPlayCircle /></h1>
                        <p>Play Video</p>
                    </div>
                </div>
            </div>


            <div style={{ padding: "80px 0px" }}>
                <h1 className='testimonialsHeading'>Testimonials</h1>
                <div class="testimonials">
                    <div class="testimonial testimonial1">
                        <div className='testimonialsHeader'>
                            <div className='testimonialsImage'>
                                <img src='https://raw.githubusercontent.com/bytenexttech/imgg/main/Charity%20H.png' alt='Testimonials' />
                            </div>
                        </div>
                        <div className='testimonialsBody'>
                            <p>Get your order delivered fast as soon as posible.Get your order delivered fast as soon as posible.</p>
                        </div>
                    </div>
                    <div class="testimonial testimonial2">
                        <div className='testimonialsHeader'>
                            <div className='testimonialsImage'>
                                <img src='https://raw.githubusercontent.com/bytenexttech/imgg/main/WhatsApp%20Image%202023-06-29%20at%2020.19.46.jpg' alt='Testimonials' />
                            </div>
                        </div>
                        <div className='testimonialsBody'>
                            <p>Get your order delivered fast as soon as posible.Get your order delivered fast as soon as posible.</p>
                        </div>
                    </div>
                    <div class="testimonial testimonial3">
                        <div className='testimonialsHeader'>
                            <div className='testimonialsImage'>
                                <img src='https://raw.githubusercontent.com/bytenexttech/imgg/main/WhatsApp%20Image%202023-06-30%20at%2015.35.27.jpg' alt='Testimonials' />
                            </div>
                        </div>
                        <div className='testimonialsBody'>
                            <p>Get your order delivered fast as soon as posible.Get your order delivered fast as soon as posible.</p>
                        </div>
                    </div>
                    <div class="testimonial testimonial4">
                        <div className='testimonialsHeader'>
                            <div className='testimonialsImage'>
                                <img src='https://raw.githubusercontent.com/bytenexttech/imgg/main/WhatsApp%20Image%202023-06-30%20at%2015.50.08.jpg' alt='Testimonials' />
                            </div>
                        </div>
                        <div className='testimonialsBody'>
                            <p>Get your order delivered fast as soon as posible.Get your order delivered fast as soon as posible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;