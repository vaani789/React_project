import React from 'react';

const Contact = () => {
    return(
        <>
        <div class="page-wrapper">

            {/* <!-- Preloader Start --> */}
            <div id="preloader">
                <div class="hexus-loader-inner">
                <div class="hexus-loader">
                    <span class="hexus-loader-item"></span>
                    <span class="hexus-loader-item"></span>
                    <span class="hexus-loader-item"></span>
                    <span class="hexus-loader-item"></span>
                    <span class="hexus-loader-item"></span>
                    <span class="hexus-loader-item"></span>
                    <span class="hexus-loader-item"></span>
                    <span class="hexus-loader-item"></span>
                </div>
                </div>
            </div>

            {/* <!-- Back-To-Top Start --> */}
            <button id="back-top" class="back-to-top">
            <i class="fa-regular fa-arrow-up"></i>
            </button>

             {/* <!-- GT MouseCursor Start --> */}
            <div class="mouseCursor cursor-outer"></div>
            <div class="mouseCursor cursor-inner"></div>

                {/* <!-- Breadcrumb Section Start --> */}
                <div class="breadcrumb-wrapper bg-cover" style={{backgroundImage: "url('assets/img/inner-page/breadcrumb.png')"}}>
                <div class="container">
                    <div class="page-heading">
                        <div class="breadcrumb-sub-title">
                            <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                            <li>
                                <a href="index.html">
                                    <i class="fa-solid fa-house"></i> Home
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li>
                                Contact Us
                            </li>
                        </ul>
                            <h1 class="wow fadeInUp" data-wow-delay=".5s">Talk to someone who  <br/> has done the job.</h1>
                            <p class="wow fadeInUp" data-wow-delay=".7s">
                                Whether you are filling a clinical role or thinking about your next one, the first conversation is free, informal and commits you to nothing. You will speak
to a clinician, not a call centre.
                            </p>
                        </div>
                    </div>
                </div>
                </div>

                {/* <!-- Contact-Box Section Start --> */}
                <section class="contact-box-section section-padding fix">
                    <div class="container">
                        <div class="row g-4">
                            <div class="col-lg-6 col-md-6">
                                <div class="contact-box-item">
                                    <div class="contact-image">
                                        <img src="assets/img/inner-page/contact.jpg" alt="img"/>
                                    </div>
                                    <div class="contact-content">
                                        <h2>If you are hiring</h2>
                                        <p>Tell us what the role involves and what your service needs.</p>
                                        {/* <a href="contact.html" class="view-btn">View On Map <i class="fa-solid fa-arrow-up-right"></i></a>
                                        <h3>
                                            <img src="assets/img/inner-page/icon/09.svg" alt="img"/>
                                                <a href="tel:+16336547896">+163 3654 7896</a>
                                        </h3> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="contact-box-item">
                                    <div class="contact-image">
                                        <img src="assets/img/inner-page/contact-2.jpg" alt="img"/>
                                    </div>
                                    <div class="contact-content">
                                        <h2>If you are looking</h2>
                                        <p>Send a CV, or just send a question. Plenty of people get in touch only to understand their options.</p>
                                        {/* <a href="contact.html" class="view-btn">View On Map <i class="fa-solid fa-arrow-up-right"></i></a>
                                        <h3>
                                            <img src="assets/img/inner-page/icon/09.svg" alt="img"/>
                                                <a href="tel:+16336547896">+163 3654 7896</a>
                                        </h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* <!-- Contact-Us Section Start --> */}
                <section class="contact-us-section section-padding fix">
                    <div class="container">
                        <div class="contact-us-wrapper">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <div class="contact-us-content">
                                        <div class="section-title style-2 mb-0">
                                            <div class="tz-sub-tilte tz-sub-anim tx-subTitle">
                                                <span class="sub-title">Quick Response Guaranteed</span>
                                            </div>
                                            <h2 class="tx-title sec_title  tz-itm-title tz-itm-anim">
                                                Have Questions? <br/> Contact Us.
                                            </h2>
                                        </div>
                                        <div class="contact-us-item">
                                            <div class="contact-content">
                                                <div class="icon">
                                                    <img src="assets/img/inner-page/icon/04.svg" alt="img"/>
                                                </div>
                                                <div class="cont">
                                                    <span>Need help?</span>
                                                    <h3> <a href="tel:+16336547896">+163 3654 7896</a></h3>
                                                    <h3><a href="mailto:support@Synex.com">support@Synex.com</a></h3>
                                                </div>
                                            </div>
                                            <div class="contact-content">
                                                <div class="icon">
                                                    <img src="assets/img/inner-page/icon/05.svg" alt="img"/>
                                                </div>
                                                <div class="cont">
                                                    <span>Our location?</span>
                                                    <h3>
                                                        123 Market, San Francisco, <br/> ME84103, USA.
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="contact-box">
                                        <h3>Need Support? Contact Us</h3>
                                        <form action="contact.php" id="contact-form" class="contact-form-box">
                                            <div class="row g-4 align-items-center">
                                                <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                    <div class="form-clt">
                                                        <input type="text" placeholder="Enter name*"/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                                    <div class="form-clt">
                                                        <input type="text" placeholder="Enter email*"/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                    <div class="form-clt">
                                                        <input type="number" placeholder="Enter phone*"/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                                    <div class="form-clt">
                                                        <input type="email" placeholder="Your website"/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                                    <div class="form-clt">
                                                        <textarea name="message" placeholder="What on your mind..."></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                                    <button type="submit" class="theme-btn-main style-2 wow fadeInUp" data-wow-delay=".5s">
                                                            <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                            <span class="theme-btn">Submit Now</span>
                                                            <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>

        </>
    )
}

export default Contact;