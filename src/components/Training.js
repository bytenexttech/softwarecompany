import '../components/css/Common.css'
import '../components/css/Training.css'
import { FiWatch } from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { GiPathDistance } from "react-icons/gi";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
function Training(props) {

    return (
        <div className='TrainingPage'>
            <div className='trainingPageHero'>
                <div className='trainingPageHeroLeft'>
                    <div className='trainingPageHeroLeftContent'>
                        <h1>Expert IT training when and where you need it</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas architecto doloremque fugiat! Tempora, molestias minus mollitia optio laboriosam nulla, sed, numquam ad tempore.</p>
                        <br /><a href='#TrainingContent'><p>Learn More</p></a>
                    </div>
                </div>
                <div className='trainingPageHeroRight'>
                    <img style={{ zIndex: '0', position: 'absolute', left: '0', top: '0' }} src='https://templates.hibootstrap.com/eduon/default/assets/img/banner-img/shape-img-1.png' alt='' />
                    <div className='trainingPageHeroRightContent'>
                        <img src='https://templates.hibootstrap.com/eduon/default/assets/img/banner-img/banner-img-2.png' alt='' />
                    </div>
                    <img style={{ zIndex: '0', position: 'absolute', right: '20px', bottom: '20px' }} src='https://templates.hibootstrap.com/eduon/default/assets/img/banner-img/shape-img-8.png' alt='' />
                </div>
            </div>
            <div className='trainingBenefits'>
                <h1>Your benefit with ByteNext</h1>
                <div className='trainingBenefitsList'>
                    <div className='trainingBenefit'>
                        <div className='trainingBenefitIcon' style={{ background: '#edf5fc' }}>
                            <FiWatch style={{ color: '#59a3de' }} />
                        </div>
                        <p>Save time & money</p>
                    </div>
                    <div className='trainingBenefit'>
                        <div className='trainingBenefitIcon' style={{ background: '#f4effa' }}>
                            <FaBalanceScale style={{ color: '#925eca' }} />
                        </div>
                        <p>Balance learning with life</p>
                    </div>
                    <div className='trainingBenefit'>
                        <div className='trainingBenefitIcon' style={{ background: '#fef4ea' }}>
                            <FiBook style={{ color: '#fa9231' }} />
                        </div>
                        <p>Gain valuable knowledge</p>
                    </div>
                    <div className='trainingBenefit'>
                        <div className='trainingBenefitIcon' style={{ background: '#ffeaee' }}>
                            <GiPathDistance style={{ color: '#fc2f5c' }} />
                        </div>
                        <p>Finish what you started</p>
                    </div>
                </div>
            </div>

            <div className='allTrainings'>
                <h1>All Trainings</h1><br /><br />
                <div className='trainingsList'>
                    <div className='singleTraining'>
                        <h2>Salesforce Admin</h2>
                        <br />
                        <h3>Overview</h3>
                        <p>Salesforce is a high-in-demand skill set, and Salesforce Admin is the foundation for all of it. Designed to help you master this essential skill and prepare you for the Salesforce certification exam, our online and classroom options allow you to choose the best learning experience.</p>
                        <br />
                        <p>Our unique approach has helped students transform their careers worldwide, including in the USA, UK, India, Canada, Singapore, Australia, and UAE. As the only training institute in the world with an in-house certification exam center, our program offers convenience and the opportunity to get job-ready.</p>

                        <br />
                        <h3>Training includes</h3>
                        <div className='trainingIncludes'>
                            <div className='include'>
                                <FiWatch />
                                <p>45 Hours of Sessions</p>
                            </div>
                            <div className='include'>
                                <RiPagesLine />
                                <p>Real-Time Projects To Gain Industry Experience</p>
                            </div>
                            <div className='include'>
                                <RiPagesLine />
                                <p>Practical Assignments On Business Use Cases</p>
                            </div>
                            <div className='include'>
                                <AiOutlineUser />
                                <p>Delivered By Salesforce Experts</p>
                            </div>
                        </div>
                        
                        <br />
                        <h3>Course Contents</h3>
                        <div className='courseContent'>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Salesforce Basic</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Salesforce Platform & Environment</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Data Modeling</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Data Management</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Data Security</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Automations</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Reports & Dashboard</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Salesforce Clouds</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>AppExchange</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>UI Customization</p>
                            </div>
                        </div>
                        <div className='courseEnroll'>Enroll Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Training;