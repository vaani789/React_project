import React from "react";

const Services = () => {
    return(
        <>
        <div className="page-wrapper">

            {/* <!-- Preloader Start --> */}
            <div id="preloader">
                <div className="hexus-loader-inner">
                <div className="hexus-loader">
                    <span className="hexus-loader-item"></span>
                    <span className="hexus-loader-item"></span>
                    <span className="hexus-loader-item"></span>
                    <span className="hexus-loader-item"></span>
                    <span className="hexus-loader-item"></span>
                    <span className="hexus-loader-item"></span>
                    <span className="hexus-loader-item"></span>
                    <span className="hexus-loader-item"></span>
                </div>
                </div>
            </div>

            {/* <!-- Back-To-Top Start --> */}
            <button id="back-top" className="back-to-top">
            <i className="fa-regular fa-arrow-up"></i>
            </button>

             {/* <!-- GT MouseCursor Start --> */}
            <div className="mouseCursor cursor-outer"></div>
            <div className="mouseCursor cursor-inner"></div>

            {/* <!-- Breadcrumb Section Start --> */}
            <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: "url('assets/img/inner-page/breadcrumb.png')"}}>
            <div className="container">
                <div className="page-heading">
                    <div className="breadcrumb-sub-title">
                        <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li>
                            <a href="index.html">
                                <i className="fa-solid fa-house"></i> Home
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            Services
                        </li>
                    </ul>
                        <h1 className="wow fadeInUp" data-wow-delay=".5s">One partner across your <br/> clinical workforce.</h1>
                        <p className="wow fadeInUp" data-wow-delay=".7s">
                            Clinical vacancies cost differently to ordinary vacancies. An unfilled prescriber role is a capped clinic list. A pharmacist gap is medicines reviews that do
not happen. The cost is counted in patients waiting, not only in agency spend.
                        </p>
                    </div>
                </div>
            </div>
            </div>

            {/* <!-- About Section Start --> */}
            <div className="about-section-4 section-padding fix pb-0">
                <div className="container">
                    <div className="about-wrapper-4">
                        <div className="row g-4">
                            <div className="col-lg-8">
                                <div className="about-image">
                                    <img src="assets/images/services.png" alt="img"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="about-bg-box bg-cover" style={{backgroundImage: "url(assets/img/inner-page/about-bg.png)"}}>
                                    <div className="box-content">
                                        <div className="avator">
                                            <img src="assets/img/inner-page/avator.png" alt="img"/>
                                        </div>
                                        <p className="style-2">
                                            Over <span>100K</span> download all over the world.
                                        </p>
                                        <a className="theme-btn-main style-2" href="service.html">
                                            <span className="theme-btn-arrow-left"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                            <span className="theme-btn">Know more</span>
                                            <span className="theme-btn-arrow-right"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* <!-- Service Section Start --> */}
            <section className="service-section-2 fix section-padding">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title style-2">
                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                <span className="sub-title">Manage Tasks. Master Time</span>
                            </div>
                            <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                What we offer
                            </h2>
                        </div>
                        <a className="theme-btn-main style-2" href="service.html">
                            <span className="theme-btn-arrow-left"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                            <span className="theme-btn">All services</span>
                            <span className="theme-btn-arrow-right"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-card-items-two">
                                <div className="content">
                                    <h3 className="title"> 
                                        <a href="service-details.html">Permanent recruitment</a>
                                    </h3>
                                    <p>
                                        For roles that define your service. Full clinical brief, direct approach, a short shortlist of genuinely suitable clinicians. We advise on realistic salary
banding, and if the package will not attract the person you have described, you hear it before the search.
                                    </p>
                                </div>
                                <div className="icon-items">
                                    <div className="icon">
                                        <img src="assets/img/home-2/service-icon-1.svg" alt="img"/>
                                    </div>
                                    <a href="service-details.html" className="service-btn">Learn more <i className="fa-solid fa-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-card-items-two active">
                                <div className="content">
                                    <h3 className="title"> 
                                        <a href="service-details.html">Clinical delivery — locum and temporary</a>
                                    </h3>
                                    <p>
                                        Sickness, parental leave, seasonal pressure, waiting-list initiatives. Every clinician is fully compliant before being offered, not after booking.
                                    </p>
                                </div>
                                <div className="icon-items">
                                    <div className="icon">
                                        <img src="assets/img/home-2/service-icon-2.svg" alt="img"/>
                                    </div>
                                    <a href="service-details.html" className="service-btn">Learn more <i className="fa-solid fa-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-card-items-two">
                                <div className="content">
                                    <h3 className="title"> 
                                        <a href="service-details.html">Fixed-term and project staffing</a>
                                    </h3>
                                    <p>
                                        Funded programmes, service redesign, backlog clearance and new pathway launches, where you need clinical capacity for a defined period without
permanent headcount.
                                    </p>
                                </div>
                                <div className="icon-items">
                                    <div className="icon">
                                        <img src="assets/img/home-2/service-icon-3.svg" alt="img"/>
                                    </div>
                                    <a href="service-details.html" className="service-btn">Learn more <i className="fa-solid fa-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-card-items-two">
                                <div className="content">
                                    <h3 className="title"> 
                                        <a href="service-details.html">Team build</a>
                                    </h3>
                                    <p>
                                        Standing up a new service rarely works role by role. We plan the whole clinical team — skill mix, supervision structure, prescribing coverage, start-date
sequencing — and recruit against that plan.
                                    </p>
                                </div>
                                <div className="icon-items">
                                    <div className="icon">
                                        <img src="assets/img/home-2/service-icon-4.svg" alt="img"/>
                                    </div>
                                    <a href="service-details.html" className="service-btn">Learn more <i className="fa-solid fa-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-card-items-two">
                                <div className="content">
                                    <h3 className="title"> 
                                        <a href="service-details.html">Clinical leadership</a>
                                    </h3>
                                    <p>
                                        Clinical directors, heads of pharmacy, lead ACPs, governance leads. Roles where the wrong appointment is felt across the whole service.
                                    </p>
                                </div>
                                <div className="icon-items">
                                    <div className="icon">
                                        <img src="assets/img/home-2/service-icon-5.svg" alt="img"/>
                                    </div>
                                    <a href="service-details.html" className="service-btn">Learn more <i className="fa-solid fa-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-card-items-two">
                                <div className="content">
                                    <h3 className="title"> 
                                        <a href="service-details.html">Advisory</a>
                                    </h3>
                                    <p>
                                        Sometimes you do not need a placement. Pay benchmarking, skill mix and delegation, whether a role suits a pharmacist, ACP or prescriber, and why a
vacancy keeps failing to attract applicants. Usually free at the point of conversation.
                                    </p>
                                </div>
                                <div className="icon-items">
                                    <div className="icon">
                                        <img src="assets/img/home-2/service-icon-6.svg" alt="img"/>
                                    </div>
                                    <a href="service-details.html" className="service-btn">Learn more <i className="fa-solid fa-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Contact-Us Section Start --> */}
            <section className="contact-us-section section-padding fix">
                <div className="container">
                    <div className="contact-us-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="contact-us-content">
                                    <div className="section-title style-2 mb-0">
                                        <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                            <span className="sub-title">Quick Response Guaranteed</span>
                                        </div>
                                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                            Have Questions? <br/> Contact Us.
                                        </h2>
                                    </div>
                                    <div className="contact-us-item">
                                        <div className="contact-content">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/04.svg" alt="img"/>
                                            </div>
                                            <div className="cont">
                                                <span>Need help?</span>
                                                <h3> <a href="tel:+16336547896">+163 3654 7896</a></h3>
                                                <h3><a href="mailto:support@Synex.com">support@Synex.com</a></h3>
                                            </div>
                                        </div>
                                        <div className="contact-content">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/05.svg" alt="img"/>
                                            </div>
                                            <div className="cont">
                                                <span>Our location?</span>
                                                <h3>
                                                    123 Market, San Francisco, <br/> ME84103, USA.
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-box">
                                    <h3>Need Support? Contact Us</h3>
                                    <form action="contact.php" id="contact-form" className="contact-form-box">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="form-clt">
                                                    <input type="text" placeholder="Enter name*"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                                <div className="form-clt">
                                                    <input type="text" placeholder="Enter email*"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="form-clt">
                                                    <input type="number" placeholder="Enter phone*"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                                <div className="form-clt">
                                                    <input type="email" placeholder="Your website"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="form-clt">
                                                    <textarea name="message" placeholder="What on your mind..."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                                <button type="submit" className="theme-btn-main style-2 wow fadeInUp" data-wow-delay=".5s">
                                                        <span className="theme-btn-arrow-left"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                                        <span className="theme-btn">Submit Now</span>
                                                        <span className="theme-btn-arrow-right"> <i className="fa-solid fa-arrow-up-right"></i> </span>
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

export default Services;