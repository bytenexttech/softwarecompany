import '../components/css/Contact.css'

function Contact(props) {
    return (
        <div className='contactUsForm'>
            <div className='contactUsFormBanner'>
                <p><span>Home &gt;</span> Contact Us</p>
            </div>
            <div className='establishment'>
                <div className='establishmentImage'>
                    <img src='https://v9m6d2m2.rocketcdn.me/elementor/demos/minimal-fashion02/wp-content/uploads/sites/69/2021/10/minimal_fashion_02-img-20.jpeg' alt='' />
                </div>
                <div className='establishmentContent'>
                    <div>
                        <h1>Established In 2023</h1>
                        <p>Reach out to us and take your Salesforce experience to new heights. Whether you need consulting, development, or training services, our team is here to assist you. Get in touch today and let's discuss your unique business needs.</p>
                        {/* <h3>TRUSTED BY</h3>
                        <div className='TrustedImages'>
                            <img src='https://v9m6d2m2.rocketcdn.me/elementor/demos/minimal-fashion02/wp-content/uploads/sites/69/2021/10/brand-02.jpeg' alt='' />
                            <img src='https://v9m6d2m2.rocketcdn.me/elementor/demos/minimal-fashion02/wp-content/uploads/sites/69/2021/10/brand-02.jpeg' alt='' />
                            <img src='https://v9m6d2m2.rocketcdn.me/elementor/demos/minimal-fashion02/wp-content/uploads/sites/69/2021/10/brand-05.jpeg' alt='' />
                            <img src='https://v9m6d2m2.rocketcdn.me/elementor/demos/minimal-fashion02/wp-content/uploads/sites/69/2021/10/brand-03.jpeg' alt='' />
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div className='locationMap'>
                <img src='https://v9m6d2m2.rocketcdn.me/elementor/demos/minimal-fashion02/wp-content/uploads/sites/69/2021/10/minimal_fashion_02-img-27.jpeg' alt='Map' />
            </div> */}

            <div className='contactForm'>
                <h1>Fill Out Contact Form</h1>
                <div className='NameField'>
                    <div className='Input firstName'>
                        <p>First Name*</p>
                        <input placeholder='First Name' />
                    </div>
                    <div className='Input lastName'>
                        <p>Last Name*</p>
                        <input placeholder='Last Name' />
                    </div>
                </div>
                <div className='Input EmailField'>
                    <p>Email*</p>
                    <input placeholder='Email Address' />
                </div>
                <div className='Input DescriptionField'>
                    <p>Description*</p>
                    <textarea placeholder='Description' rows='10' />
                </div>
                <div className='contactFormSubmit'>
                    SUBMIT
                </div>
            </div>

            

        </div>
    );
}
export default Contact;