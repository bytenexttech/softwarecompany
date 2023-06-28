import '../components/css/Common.css'
import '../components/css/Training.css'
import { FiWatch } from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { GiPathDistance } from "react-icons/gi";

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
                        <div className='trainingBenefitIcon' style={{background:'#edf5fc'}}>
                            <FiWatch style={{color:'#59a3de'}}/>
                        </div>
                        <p>Save time & money</p>
                    </div>
                    <div className='trainingBenefit'>
                        <div className='trainingBenefitIcon' style={{background:'#f4effa'}}>
                            <FaBalanceScale style={{color:'#925eca'}} />
                        </div>
                        <p>Balance learning with life</p>
                    </div>
                    <div className='trainingBenefit'>
                        <div className='trainingBenefitIcon' style={{background:'#fef4ea'}}>
                            <FiBook style={{color:'#fa9231'}} />
                        </div>
                        <p>Gain valuable knowledge</p>
                    </div>
                    <div className='trainingBenefit'>
                        <div className='trainingBenefitIcon' style={{background:'#ffeaee'}}>
                            <GiPathDistance style={{color:'#fc2f5c'}} />
                        </div>
                        <p>Finish what you started</p>
                    </div>
                </div>
            </div>

            <div className='allTrainings'>
                <h1>All Trainings</h1>
            </div>
        </div>
    );
}
export default Training;