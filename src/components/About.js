import '../components/css/About.css'
import Logo from '../assests/ByteNext Logo2.png';
import Image from '../assests/Teamwork.jpg';
import { FaPlayCircle } from "react-icons/fa";

function About(props) {
    return (
        <div className="AboutPage">
            <div className='aboutUsFormBanner'>
                <p><span>Home &gt;</span> About Us</p>
            </div>

            <div className='aboutUsDetails'>
                <div className='aboutUsDetailsImage'>
                    <img src={Image} alt='' />
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
                            <p>I have been using <b>ByteNextTechnologies</b> Services for over a year now, and I couldn't be happier with their level of expertise and professionalism. Whenever I encounter an issue, their team is always prompt in responding and resolving the problem efficiently. They have a deep understanding of our business needs and provide tailored solutions that have greatly improved our productivity and security. I highly recommend <b>ByteNextTechnologies</b> to any organization in need of reliable and comprehensive development support.</p>
                        </div>
                    </div>
                    <div class="testimonial testimonial2">
                        <div className='testimonialsHeader'>
                            <div className='testimonialsImage'>
                                <img src='https://raw.githubusercontent.com/bytenexttech/imgg/main/WhatsApp%20Image%202023-06-29%20at%2020.19.46.jpg' alt='Testimonials' />
                            </div>
                        </div>
                        <div className='testimonialsBody'>
                            <p>Our experience with <b>ByteNextTechnologies</b> has been nothing short of exceptional. Their team has been instrumental in streamlining our sales process and optimizing our customer relation. They proactively monitor our systems to identify and resolve potential issues before they become critical problems. Their expertise and dedication to customer service have been remarkable, and we trust them to handle our needs with the utmost professionalism. We are extremely satisfied with the level of support we receive from <b>ByteNextTechnologies</b>.</p>
                        </div>
                    </div>
                    <div class="testimonial testimonial3">
                        <div className='testimonialsHeader'>
                            <div className='testimonialsImage'>
                                <img src='https://raw.githubusercontent.com/bytenexttech/imgg/main/WhatsApp%20Image%202023-06-30%20at%2015.35.27.jpg' alt='Testimonials' />
                            </div>
                        </div>
                        <div className='testimonialsBody'>
                            <p>After struggling with outdated systems for years, we decided to partner with <b>ByteNextTechnologies</b>, and it has been a game-changer for our organization. They have completely transformed our infrastructure, implementing modern technologies that have improved our efficiency and security. The team at <b>ByteNextTechnologies</b> is highly knowledgeable and responsive, always going above and beyond to ensure our systems are running smoothly. We are incredibly grateful for their expertise and would highly recommend their IT services to anyone looking for a reliable and innovative IT partner.</p>
                        </div>
                    </div>
                    <div class="testimonial testimonial4">
                        <div className='testimonialsHeader'>
                            <div className='testimonialsImage'>
                                <img src='https://raw.githubusercontent.com/bytenexttech/imgg/main/WhatsApp%20Image%202023-06-30%20at%2015.50.08.jpg' alt='Testimonials' />
                            </div>
                        </div>
                        <div className='testimonialsBody'>
                            <p>I can confidently say that <b>ByteNextTechnologies</b> is the best Salesforce support provider we have ever worked with. Their team is composed of highly skilled professionals who are not only knowledgeable but also incredibly friendly and approachable. They have been instrumental in helping us navigate complex IT challenges and have provided us with tailored solutions that perfectly align with our business goals. <b>ByteNextTechnologies</b> has truly become an invaluable extension of our team, and we wholeheartedly endorse their services to any organization in need of top-notch Salesforce support.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;
