import '../components/css/Index.css'
import '../components/css/Common.css'
import { AiFillCheckSquare } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import agile from '../assests/agile.png';
import website from '../assests/website.png';
import application from '../assests/application.png';
import salesforce from '../assests/salesforce.png';
function Index(props) {
    return (
        <div className='home-page'>
            <div className='home-page-banner'>
                <div className='video-wrap'>
                    <video className='homePageBannerVideo' autoPlay loop muted>
                        <source src='https://techilaservices.com/wp-content/themes/newtechila/assets/img/banner/banner.mp4?v=5151' type='video/mp4' />
                    </video>
                </div>
                <div className='home-page-content'>
                    <div>
                        <h1>Tech is Just What Your  Business Needs.</h1>
                        <p className='btn'>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className='grid-two-template'>
                <div className='grid-two-template-area'>
                    <div className='grid-two-template-image'>
                        <img src='https://img.freepik.com/free-photo/coders-discussing-about-source-code-compiling-discovers-errors-asks-rest-team-explanations-front-multiple-screens-running-algorithms-software-developers-doing-teamwork_482257-41856.jpg?w=1380&t=st=1682181054~exp=1682181654~hmac=f0f73a68101093e47e586d6e72a234ce6d8d64afed0c060b947ddee5dc837c2a' alt='' />
                    </div>
                    <div className='grid-two-template-content'>
                        <h2>WHO WE ARE</h2>
                        <h1>Why Tech Global Services</h1>
                        <h3>Salesforce Development, Salesforce Consulting Service. Salesforce is a powerful tool for marketing and promotions. We design and optimize your sales process to maximize cross-selling, up-selling and deliver effective personalized marketing to your customers and we are also professional development and consulting partners.</h3>
                        <br />
                        <p><span><AiFillCheckSquare /></span>We are a boutique consulting and technology firm having offices in US and India.</p>
                        <p style={{ marginBottom: "50px" }}><span><AiFillCheckSquare /></span>We craft custom cloud-based software and mobile digital solutions for enterprises.</p>
                        <a href='/'>Learn More</a>
                    </div>
                </div>
            </div>
            <div className='home-services-section'>
                <h1>OUR SERVICES</h1>
                <div className='home-services-list'>
                    <div className='home-service-single'>
                        <div className='home-service-image'>
                            <img src={website} alt='' />
                        </div>
                        <div className='home-service-content'>
                            <h2>Website Development</h2>
                            <p>We have a team of Certified Architects to provide best solution in the industry.</p>
                        </div>
                    </div>
                    <div className='home-service-single'>
                        <div className='home-service-image'>
                            <img src={application} alt='' />
                        </div>
                        <div className='home-service-content'>
                            <h2>Application Development</h2>
                            <p>We have a team of Certified Architects to provide best solution in the industry.</p>
                        </div>
                    </div>
                    <div className='home-service-single'>
                        <div className='home-service-image'>
                            <img src={salesforce} alt='' />
                        </div>
                        <div className='home-service-content'>
                            <h2>Salesforce Development</h2>
                            <p>We have a team of Certified Architects to provide best solution in the industry.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-page-counters'>
                {/* https://techilaservices.com/wp-content/themes/newtechila/assets/img/banner/Techila_banner.jpg */}
                <div className='home-page-counters-content'>
                    <div className='home-page-counter'>
                        <h1>800+</h1>
                        <p>Project Complated</p>
                    </div>
                    <div className='home-page-counter'>
                        <h1>40+</h1>
                        <p>Appexchange Apps</p>
                    </div>
                    <div className='home-page-counter'>
                        <h1>100+</h1>
                        <p>Third Party Integration</p>
                    </div>
                    <div className='home-page-counter'>
                        <h1>150+</h1>
                        <p>Total Team Experience</p>
                    </div>
                    <div className='home-page-counter'>
                        <h1>500+</h1>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>


            <div className='grid-two-template-reverce'>
                <div className='grid-two-template-reverce-area'>
                    <div className='grid-two-template-reverce-content'>
                        <h2>OUR PROCESS</h2>
                        <h1>How Do We Work ?</h1>
                        <h3>We believe in Customer Success & We ensure that what we develop, it provide its best value to your customers.</h3>
                        <br />
                        <p><span><AiFillCheckSquare /></span><b style={{ fontWeight: "500", color: "#ff243e" }}>Requirement Gathering : </b>Setup meetings to gather requirements and finalise scope.</p>
                        <p><span><AiFillCheckSquare /></span><b style={{ fontWeight: "500", color: "#ff243e" }}>Design : </b>Use best practices to design a scalable system.</p>
                        <p><span><AiFillCheckSquare /></span><b style={{ fontWeight: "500", color: "#ff243e" }}>Develop : </b>Setup the instance using decorative and custom coding.</p>
                        <p><span><AiFillCheckSquare /></span><b style={{ fontWeight: "500", color: "#ff243e" }}>Testing : </b>Perform unit testing, system testing and UAT with client.</p>
                        <p style={{ marginBottom: "50px" }}><span><AiFillCheckSquare /></span><b style={{ fontWeight: "500", color: "#ff243e" }}>Go Live and Training : </b>Make everything live and train the power users.</p>
                        <a href='/'>Contact Us</a>
                    </div>
                    <div className='grid-two-template-reverce-image'>
                        <img src={agile} alt='' />
                    </div>
                </div>
            </div>

            <div className='home-page-articales'>
                <h1>IMPORTANT ARTICLES</h1>
                <div className='home-page-articale-list'>
                    <div className='home-page-articale'>
                        <div className='home-page-articale-image'>
                            <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2048/https://techilaservices.com/wp-content/uploads/2023/04/ChatGPT-And-Salesforce-Transforming-Sales-And-Marketing-2048x640.jpg' alt='' />
                        </div>
                        <div className='home-page-articale-content'>
                            <h3>April-20-2023</h3>
                            <h2>ChatGPT And Salesforce: Transforming Sales And Marketing</h2>
                            <p>ChatGPT has undoubtedly been one of the most impactful and controversial inventions of our time. Since its advent, people are either singing praises of the AI tool or blamin.</p>
                            <a href='/'>Learn More <span><BsFillArrowRightCircleFill /></span></a>
                        </div>
                    </div>
                    <div className='home-page-articale'>
                        <div className='home-page-articale-image'>
                            <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2048/https://techilaservices.com/wp-content/uploads/2023/04/ChatGPT-Integration-With-Salesforce-%E2%80%93-techila-2048x640.jpg' alt='' />
                        </div>
                        <div className='home-page-articale-content'>
                            <h3>April-20-2023</h3>
                            <h2>ChatGPT And Salesforce: Transforming Sales And Marketing</h2>
                            <p>ChatGPT has undoubtedly been one of the most impactful and controversial inventions of our time. Since its advent, people are either singing praises of the AI tool or blamin.</p>
                            <a href='/'>Learn More <span><BsFillArrowRightCircleFill /></span></a>
                        </div>
                    </div>
                    <div className='home-page-articale'>
                        <div className='home-page-articale-image'>
                            <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2048/https://techilaservices.com/wp-content/uploads/2023/03/Automation-and-integration-with-workato-in-2023-1-2048x640.jpg' alt='' />
                        </div>
                        <div className='home-page-articale-content'>
                            <h3>April-20-2023</h3>
                            <h2>ChatGPT And Salesforce: Transforming Sales And Marketing</h2>
                            <p>ChatGPT has undoubtedly been one of the most impactful and controversial inventions of our time. Since its advent, people are either singing praises of the AI tool or blamin.</p>
                            <a href='/'>Learn More <span><BsFillArrowRightCircleFill /></span></a>
                        </div>
                    </div>
                    <div className='home-page-articale'>
                        <div className='home-page-articale-image'>
                            <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1066/https://techilaservices.com/wp-content/uploads/2023/03/MicrosoftTeams-image-3.jpg' alt='' />
                        </div>
                        <div className='home-page-articale-content'>
                            <h3>April-20-2023</h3>
                            <h2>ChatGPT And Salesforce: Transforming Sales And Marketing</h2>
                            <p>ChatGPT has undoubtedly been one of the most impactful and controversial inventions of our time. Since its advent, people are either singing praises of the AI tool or blamin.</p>
                            <a href='/'>Learn More <span><BsFillArrowRightCircleFill /></span></a>
                        </div>
                    </div>
                    <div className='home-page-articale'>
                        <div className='home-page-articale-image'>
                            <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2046/https://techilaservices.com/wp-content/uploads/2023/01/Blog-Service-Now-ITSM-Vs-Salesforce-1.jpg' alt='' />
                        </div>
                        <div className='home-page-articale-content'>
                            <h3>April-20-2023</h3>
                            <h2>ChatGPT And Salesforce: Transforming Sales And Marketing</h2>
                            <p>ChatGPT has undoubtedly been one of the most impactful and controversial inventions of our time. Since its advent, people are either singing praises of the AI tool or blamin.</p>
                            <a href='/'>Learn More <span><BsFillArrowRightCircleFill /></span></a>
                        </div>
                    </div>
                    <div className='home-page-articale'>
                        <div className='home-page-articale-image'>
                            <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2046/https://techilaservices.com/wp-content/uploads/2022/12/Blog-Workato-Partner.jpg' alt='' />
                        </div>
                        <div className='home-page-articale-content'>
                            <h3>April-20-2023</h3>
                            <h2>ChatGPT And Salesforce: Transforming Sales And Marketing</h2>
                            <p>ChatGPT has undoubtedly been one of the most impactful and controversial inventions of our time. Since its advent, people are either singing praises of the AI tool or blamin.</p>
                            <a href='/'>Learn More <span><BsFillArrowRightCircleFill /></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Index;