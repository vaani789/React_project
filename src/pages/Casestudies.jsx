import React, { useState } from "react";

const Casestudies = () => {
        const [activeType, setActiveType] = useState("hiring");
    
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
                    <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('assets/img/inner-page/breadcrumb.png')"}}>
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
                                    Case Studies
                                </li>
                            </ul> 
                                <h1 className="wow fadeInUp" data-wow-delay=".5s">The work, described <br/> honestly.</h1>
                                <p className="wow fadeInUp" data-wow-delay=".7s">
                                    Recruitment case studies are usually written to sound impressive rather than to be informative. Ours set out what the service needed, what we did, what
it produced and what was difficult — because the difficult part is the bit worth reading.
                                </p>
                            </div>
                        </div>
                    </div>
                   </div>

                    {/* <!-- About Section Start --> */}
                    <section className="about-section-4 section-padding fix pb-0">
                        <div className="container">
                            <div className="about-wrapper-4">
                                <div className="row g-4">
                                    <div className="col-lg-8">
                                        <div className="about-image">
                                            <img src="assets/img/inner-page/about.jpg" alt="img"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="about-bg-box bg-cover" style={{backgroundImage: "url(assets/img/inner-page/about-bg.png)"}}>
                                            <div className="box-content">
                                                <h2><span className="count">25</span><sup>+</sup></h2>
                                                <p>
                                                    Years of Experience of software Industries solutions.
                                                </p>
                                                <a className="theme-btn-main style-2" href="about.html">
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
                    </section>

                    {/* <!-- Feature Section Start --> */}
                    <section className="feature-section-4 section-padding">
                        <div className="blur-1">
                            <img src="assets/img/inner-page/blur-1.png" alt="img"/>
                        </div>
                        <div className="blur-2">
                            <img src="assets/img/inner-page/blur-2.png" alt="img"/>
                        </div>
                        <div className="container">
                            <div className="feature-wrapper-4">
                                <div className="row g-4">
                                    <div className="col-lg-5">
                                        <div className="section-title style-2 mb-0">
                                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                                <span className="sub-title">Manage Tasks. Master Time</span>
                                            </div>
                                            <h3 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                                Case studies worth capturing first 
                                            </h3>
                                        </div>
                                        <div className="feature-image">
                                            <img src="assets/img/inner-page/feature-1.jpg" alt="img"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="feature-box-items">
                                            <div className="box wow fadeInRight" data-wow-delay=".3s">
                                                <div className="icon">
                                                    <img src="assets/img/inner-page/icon/01.svg" alt="img"/>
                                                </div>
                                                <div className="content">                       
                                                    <p>
                                                         A hard-to-fill prescriber role that had been open for months elsewhere                                                   
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="box wow fadeInRight" data-wow-delay=".5s">
                                                <div className="icon">
                                                    <img src="assets/img/inner-page/icon/02.svg" alt="img"/>
                                                </div>
                                                <div className="content">
                                                    <p>
                                                        A full clinical team built for a new or expanding service
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="box wow fadeInRight" data-wow-delay=".3s">
                                                <div className="icon">
                                                    <img src="assets/img/inner-page/icon/01.svg" alt="img"/>
                                                </div>
                                                <div className="content">                       
                                                    <p>
                                                         A senior clinical leadership appointment                                                   
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="box wow fadeInRight" data-wow-delay=".3s">
                                                <div className="icon">
                                                    <img src="assets/img/inner-page/icon/02.svg" alt="img"/>
                                                </div>
                                                <div className="content">                       
                                                    <p>
                                                        A brief we advised against, and what we recommended instead — genuinely persuasive, and almost nobody publishes these                                                  
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="box mb-0 wow fadeInRight" data-wow-delay=".5s">
                                                <div className="icon">
                                                    <img src="assets/img/inner-page/icon/03.svg" alt="img"/>
                                                </div>
                                                <div className="content">
                                                    <p>
                                                        Rapid locum cover that protected a pathway during unplanned absence
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>     

                    <section className="supported-section">
                        <div className="supported-container">

                            <p className="section-label">
                                EVERY SEARCH IS SUPPORTED BY
                            </p>

                            <div className="support-grid">

                                <div className="support-card">
                                    Deep market intelligence
                                </div>

                                <div className="support-card">
                                    Extensive personal networks
                                </div>

                                <div className="support-card">
                                    Bespoke AI-powered research
                                </div>

                                <div className="support-card">
                                    Comprehensive candidate assessment
                                </div>

                                <div className="support-card">
                                    Confidential market mapping
                                </div>

                            </div>

                        </div>
                    </section>                 

                    {/* <!-- Team Section Start --> */}
                    <section className="team-section fix section-padding hero-ptb image-distortion p-relative z-index-1" data-background="{{assets/img/home-2/team-bg.jpg}}">
                        <div className="container">
                            <div className="section-title-area">
                                <div className="section-title style-2 sec-style-2 mb-0">
                                        <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <span className="sub-title">Driven By Excellence</span>
                                    </div>
                                    <h2 className="text_invert-2">
                                        The Brains Behind <br/> Our Platform
                                    </h2>
                                </div>
                                <div className="array-button">
                                    <button className="array-prev"><i className="fa-solid fa-chevron-left"></i></button>
                                    <button className="array-next"><i className="fa-solid fa-chevron-right"></i></button>
                                </div>
                            </div>
                            <div className="swiper team-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide wow fadeInUp" data-wow-delay=".2s">
                                        <div className="team-box-items">
                                            <div className="thumb">
                                                <img src="assets/img/home-2/team-1.jpg" alt="img"/>
                                                <img src="assets/img/home-2/team-1.jpg" alt="img"/>
                                                <div className="social-icon d-flex align-items-center">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">
                                                    <a href="team-details.html">Shikhon Islam</a>
                                                </h3>
                                                <p>Brand Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide wow fadeInUp" data-wow-delay=".4s">
                                        <div className="team-box-items">
                                            <div className="thumb">
                                                <img src="assets/img/home-2/team-2.jpg" alt="img"/>
                                                <img src="assets/img/home-2/team-2.jpg" alt="img"/>
                                                <div className="social-icon d-flex align-items-center">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">
                                                    <a href="team-details.html">Esther Howard</a>
                                                </h3>
                                                <p>Co. founder</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide wow fadeInUp" data-wow-delay=".6s">
                                        <div className="team-box-items">
                                            <div className="thumb">
                                                <img src="assets/img/home-2/team-3.jpg" alt="img"/>
                                                <img src="assets/img/home-2/team-3.jpg" alt="img"/>
                                                <div className="social-icon d-flex align-items-center">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">
                                                    <a href="team-details.html">Theresa Webb</a>
                                                </h3>
                                                <p>ui-ux designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide wow fadeInUp" data-wow-delay=".8s">
                                        <div className="team-box-items">
                                            <div className="thumb">
                                                <img src="assets/img/home-2/team-4.jpg" alt="img"/>
                                                <img src="assets/img/home-2/team-4.jpg" alt="img"/>
                                                <div className="social-icon d-flex align-items-center">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">
                                                    <a href="team-details.html">Messle Qualam</a>
                                                </h3>
                                                <p>ui-ux designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about-contact-section">
                        <div className="about-contact-container">
                        {/* LEFT SIDE */}
                        <div className="about-info-card">
                            <h2>
                            Ready to build your
                            <br />
                            next leadership team?
                            </h2>
                            <p className="about-intro-text">
                            If you're serious about growth, let's have a proper
                            conversation. Scale Health asks for at least 30
                            minutes so we can understand your business and
                            recommend the right approach.
                            </p>
                            <div className="about-info-block">
                            <span>EMAIL</span>
                            <a href="mailto:tyler@scalehealth.co.uk">
                                tyler@scalehealth.co.uk
                            </a>
                            </div>
                            <div className="about-info-block">
                            <span>COVERAGE</span>
                            <p>
                                Scale Health is London-based, partnering with
                                independent healthcare providers across the UK
                                and Europe.
                            </p>
                            </div>
                            <div className="about-info-block">
                            <span>RESPONSE TIME</span>
                            <p>
                                One working day, from a person who has read your brief.
                            </p>
                            </div>
                        </div>
                        {/* RIGHT SIDE */}

                        <div className="about-form-card">
                            {/* TOGGLE */}
                            <div className="about-toggle">
                            <button type="button" className={ activeType === "hiring" ? "active" : ""}onClick={() => setActiveType("hiring")}>
                                I'm hiring
                            </button>
                            <button type="button" className={ activeType === "looking" ? "active" : ""} onClick={() => setActiveType("looking")}>
                                I'm looking
                            </button>
                            </div>
                            {/* FORM */}
                            <form>
                            <div className="about-form-row">
                                <div className="about-form-group">
                                <label>FULL NAME</label>
                                <input type="text" />
                                </div>
                                <div className="about-form-group">
                                <label>ORGANISATION</label>
                                <input type="text" />
                                </div>
                            </div>
                            <div className="about-form-group">
                                <label>EMAIL</label>
                                <input type="email" />
                            </div>
                            <div className="about-form-group">
                                <label>
                                {activeType === "hiring"
                                    ? "ROLE OR SERVICE YOU'RE HIRING FOR"
                                    : "WHAT ARE YOU LOOKING FOR?"
                                }
                                </label>
                                <input type="text" />
                            </div>
                            <div className="about-form-group">
                                <label>
                                {activeType === "hiring"
                                    ? "WHAT ARE YOU TRYING TO BUILD?"
                                    : "TELL US ABOUT YOUR REQUIREMENTS"
                                }
                                </label>
                                <textarea rows="5"></textarea>
                            </div>
                            <button type="submit" className="about-submit-btn">
                                <span>Book a discovery call</span>
                                <span className="about-arrow">
                                ›
                                </span>
                            </button>
                            </form>
                        </div>
                        </div>
                    </section>

                    {/* <!-- News Section Start --> */}
                    <section className="news-section fix section-padding">
                        <div className="container">
                            <div className="section-title-area">
                                <div className="section-title style-2">
                                    <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <span className="sub-title">The Team</span>
                                    </div>
                                    <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                        Template to follow for  <br/> each case study
                                    </h2>
                                </div>
                                <a className="theme-btn-main style-2" href="news.html">
                                    <span className="theme-btn-arrow-left"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                    <span className="theme-btn">More blogs</span>
                                    <span className="theme-btn-arrow-right"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="news-box-items">
                                        <div className="thumb">
                                            <img src="assets/img/home-2/news-01.jpg" alt="img"/>
                                            <img src="assets/img/home-2/news-01.jpg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <ul>
                                                <li>
                                                    Client
                                                </li>
                                            </ul>
                                            <h3 className="title">
                                                <a href="news-details.html">Named with consent, or anonymised by type and region</a>
                                            </h3>
                                           {/* <a href="news-details.html" className="service-btn">Read more <i className="fa-solid fa-arrow-up-right"></i></a> */}
                                        </div>
                                    </div>
                                </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="news-box-items">
                                        <div className="thumb">
                                            <img src="assets/img/home-2/news-02.jpg" alt="img"/>
                                            <img src="assets/img/home-2/news-02.jpg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <ul>
                                                <li>
                                                   The challenge
                                                </li>
                                            </ul>
                                            <h3 className="title">
                                                <a href="news-details.html">
                                                    What was not working, and what it was costing clinically
                                                </a>
                                            </h3>
                                           {/* <a href="news-details.html" className="service-btn">Read more <i className="fa-solid fa-arrow-up-right"></i></a> */}
                                        </div>
                                    </div>
                                </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="news-box-items">
                                        <div className="thumb">
                                            <img src="assets/img/home-2/news-03.jpg" alt="img"/>
                                            <img src="assets/img/home-2/news-03.jpg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <ul>
                                                <li>
                                                    What we did
                                                </li>
                                            </ul>
                                            <h3 className="title">
                                                <a href="news-details.html">
                                                    The approach, including anything that had to change in the brief
                                                </a>
                                            </h3>
                                           {/* <a href="news-details.html" className="service-btn">Read more <i className="fa-solid fa-arrow-up-right"></i></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="news-box-items">
                                        <div className="thumb">
                                            <img src="assets/img/home-2/news-01.jpg" alt="img"/>
                                            <img src="assets/img/home-2/news-01.jpg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <ul>
                                                <li>
                                                    The outcome
                                                </li>
                                            </ul>
                                            <h3 className="title">
                                                <a href="news-details.html">Roles filled, timescales, retention at six or twelve months</a>
                                            </h3>
                                           {/* <a href="news-details.html" className="service-btn">Read more <i className="fa-solid fa-arrow-up-right"></i></a> */}
                                        </div>
                                    </div>
                                </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="news-box-items">
                                        <div className="thumb">
                                            <img src="assets/img/home-2/news-02.jpg" alt="img"/>
                                            <img src="assets/img/home-2/news-02.jpg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <ul>
                                                <li>
                                                    What was hard
                                                </li>
                                            </ul>
                                            <h3 className="title">
                                                <a href="news-details.html">
                                                    The honest constraint — this is what makes it credible
                                                </a>
                                            </h3>
                                           {/* <a href="news-details.html" className="service-btn">Read more <i className="fa-solid fa-arrow-up-right"></i></a> */}
                                        </div>
                                    </div>
                                </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="news-box-items">
                                        <div className="thumb">
                                            <img src="assets/img/home-2/news-03.jpg" alt="img"/>
                                            <img src="assets/img/home-2/news-03.jpg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <ul>
                                                <li>
                                                    Client comment
                                                </li>
                                            </ul>
                                            <h3 className="title">
                                                <a href="news-details.html">
                                                   A short quote, with written permission on file
                                                </a>
                                            </h3>
                                           {/* <a href="news-details.html" className="service-btn">Read more <i className="fa-solid fa-arrow-up-right"></i></a> */}
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


export default Casestudies;