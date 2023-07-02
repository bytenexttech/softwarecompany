import React, { useState } from 'react';
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

    const [state, setState] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [course, setCourse] = useState('');
    const [showError, setShowError] = useState(false);

    const makePayment = (name) => {
        setState(!state);
        window.document.querySelector('html').style.overflowY = 'auto';
        if (name !== 'Null') {
            document.querySelector('html').style.overflowY = 'hidden';
            setCourse(name);
        }
    }

    const loadscript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src;
            script.onload = () => {
                resolve(true);
            }
            script.onerror = () => {
                resolve(false);
            }
            document.body.appendChild(script);
        })
    }

    const initiatePayment = () => {
        let FullName = document.querySelector('.PaymentFullName').value;
        let EmailAddress = document.querySelector('.PaymentEmailAddress').value;
        let Phone = document.querySelector('.PaymentPhoneNumber').value;
        let CourseName = course;

        if (FullName === null || FullName === '' || EmailAddress === null || EmailAddress === '' || Phone === null || Phone === '') {
            setShowError(true);
            setTimeout(() => { setShowError(false) }, 3000);
        }
        else {
            console.log({
                FullName: FullName,
                EmailAddress: EmailAddress,
                Phone: Phone,
                CourseName: CourseName
            });
            loadRazorpay();
        }
    }

    const loadRazorpay = async () => {
        const res = await loadscript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('You are offline... Failed to load resources.');
        }
        //rzp_test_ZJGWzG6ZZxiNsR
        const options = {
            key: "rzp_live_QcEe5nA76s6F0G",
            currency: "INR",
            amount: 3999 * 100,
            name: "ByteNextTechnologies",
            description: "Course Enrollment",

            handler: function (response) {
                setPaymentSuccess(true);
                setState(false);
            },
            prefill: {
                name: "ByteNextTechnologies"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div className='TrainingPage'>
            {state ? <PaymentDetailsModal initiatePayment={initiatePayment} makePayment={makePayment} showError={showError} /> : ''}
            {paymentSuccess ? <PaymentSuccessful /> : ''}
            <div className='trainingPageHero'>
                <div className='trainingPageHeroLeft'>
                    <div className='trainingPageHeroLeftContent'>
                        <h1>Expert IT training when and where you need it</h1>
                        <p>Welcome to ByteNextTechnologies, we offer a wide range of comprehensive and engaging training programs to help you enhance your skills and achieve your professional goals. Our expert trainers deliver impactful learning experiences tailored to your needs. Explore our diverse training offerings and unlock your full potential today!</p>
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

                <div id='TrainingContent'></div>
            </div>

            <div className='allTrainings'>
                <h1>All Trainings</h1><br /><br />
                <div className='trainingsList'>
                    <div className='singleTraining'>
                        <h2>Salesforce Admin</h2>
                        <br />
                        <h3>Overview</h3>
                        <p>Welcome to our Salesforce Admin course! In today's digital age, businesses are increasingly relying on Customer Relationship Management (CRM) systems to streamline their operations, manage customer relationships, and drive sales growth. Salesforce has emerged as a leading CRM platform, and there is a growing demand for skilled Salesforce administrators who can efficiently manage and customize this powerful tool.</p>
                        <br />
                        <p>Our Salesforce Admin course is designed to equip you with the essential skills and knowledge needed to excel as a Salesforce administrator. Whether you are a beginner or have some prior experience, this course will provide you with a comprehensive understanding of Salesforce's core functionalities, enabling you to navigate the platform confidently and efficiently.</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', padding: '5vw 8vw 5vw 5vw' }}>
                            <p><b>Training Duration</b> : 2 Months</p>
                            <p><b>Training Cost</b> : INR 2999/-</p>
                        </div>
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
                        <div className='courseEnroll' onClick={() => makePayment('Salesforce Admin')}>Enroll Now</div>
                    </div>

                    <div className='singleTraining'>
                        <h2>Web Development</h2>
                        <br />
                        <h3>Overview</h3>
                        <p>Welcome to our Web Development course! In today's digital world, having a strong online presence is crucial for individuals and businesses alike. Web development is the backbone of the internet, encompassing the design, development, and maintenance of websites and web applications. With the rapid growth of e-commerce, online services, and digital marketing, there is an increasing demand for skilled web developers who can create engaging and functional web experiences.</p>
                        <br />
                        <p>Our Web Development course is designed to provide you with a solid foundation in web development principles and technologies. Whether you are a beginner or have some prior coding experience, this course will equip you with the essential skills needed to build dynamic and interactive websites.</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', padding: '5vw 8vw 5vw 5vw' }}>
                            <p><b>Training Duration</b> : 2 Months</p>
                            <p><b>Training Cost</b> : INR 2999/-</p>
                        </div>
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
                                <p>Practical Web Designing Use Cases</p>
                            </div>
                            <div className='include'>
                                <AiOutlineUser />
                                <p>Delivered By Web Design Experts</p>
                            </div>
                        </div>

                        <br />
                        <h3>Course Contents</h3>
                        <div className='courseContent'>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Web Design Basic</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>HTML Basics</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>CSS Basics</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Javascript</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Bootstrap</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>React JS</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Node Js</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>E-commerce Website</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Ecommerce Website Dashboard</p>
                            </div>
                            <div className='include'>
                                <AiFillCaretRight />
                                <p>Real world projects</p>
                            </div>
                        </div>
                        <div className='courseEnroll' onClick={() => makePayment('Web Development')}>Enroll Now</div>
                        {/* <div className='courseEnroll' onClick={() => makePayment('Web Development')}>Enroll Now</div> */}

                    </div>
                </div>
            </div>
        </div>
    );
}
const PaymentDetailsModal = ({ initiatePayment, makePayment, showError }) => <div className='PaymentDetailsModal'>
    <div className='PaymentDetailsModalOverlay'></div>
    <div className='PaymentDetailsModalContent'>
        <div className='PaymentDetailsModalContentArea'>
            <h1>Please enter your details : </h1>
            <p>Full Name</p>
            <input className='PaymentFullName' placeholder='Full Name' type='name' />
            <p>Email Address</p>
            <input className='PaymentEmailAddress' placeholder='Email Address' type='Email' />
            <p>Phone</p>
            <input className='PaymentPhoneNumber' placeholder='Phone' type='tel' />
            {showError ? <h6 style={{ color: '#ff3333', fontSize: '12px', padding: '10px 0 0', fontWeight: '600' }}>Please fill all the details...!</h6> : ''}
            <div className='Enroll' onClick={initiatePayment}>Enroll Me</div>
            <div className='close' onClick={() => makePayment('Null')}>close</div>
        </div>
    </div>
</div>;


const PaymentSuccessful = () => <div className='PaymentDetailsModal'>
    <div className='PaymentDetailsModalOverlay'></div>
    <div className='PaymentDetailsModalContent'>
        <div className='PaymentDetailsModalContentArea paymentSuccessArea'>
            <div className='paymentSuccess'>
                <p><svg viewBox="0 0 512 512" width="100" fill='white' title="check-circle">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                </svg></p>
                <div style={{ width: '100%', height: '30px', background: '#019871' }}></div>
                <h2>Payment successful</h2>
                <h3>You will shortly receive email confirmation.</h3>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSengjwQzAarIhE1GCBxAo3K7_qa_4hxG_UZ9NKukMMcjtQGrw/viewform?embedded=true" width="640" height="687" frameborder="0" marginheight="0" marginwidth="0" title='Onboard'>Loading…</iframe>
            </div>
        </div>
    </div>
</div>;

export default Training;