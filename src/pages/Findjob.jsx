import React, { useState } from "react";

const Findjob = () => {
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
                                Find a Job
                            </li>
                        </ul> 
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">Finally, a recruiter who understands what you actually do.</h1>
                            <p className="wow fadeInUp" data-wow-delay=".7s">
                                You know the conversation. Someone rings about a role, cannot answer a basic question about scope or supervision, mispronounces your qualification,
and sends your CV to four places you never agreed to. Then rings a fortnight later having forgotten the whole thing.
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

                {/* What working with us is like */}
                <section className="service-section-2 fix section-padding">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title style-2">
                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                <span className="sub-title">Manage Tasks. Master Time</span>
                            </div>
                            <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                What working with us is like
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
                                        <a href="service-details.html">A real conversation about your career</a>
                                    </h3>
                                    <p>
                                        Not a script. Sometimes the honest answer is that you should stay where you are another year. We will say that.
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
                                        <a href="service-details.html">Your CV goes nowhere without your say-so</a>
                                    </h3>
                                    <p>
                                        We ask before every submission, every time. No speculative sends.
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
                                        <a href="service-details.html">Straight information about the role</a>
                                    </h3>
                                    <p>
                                        Real scope, real caseload, whether the supervision described actually exists, and why the last person left. If we do not know, we find out rather than
guess.
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
                                        <a href="service-details.html">Honest advice on pay</a>
                                    </h3>
                                    <p>
                                        What the role is genuinely worth in your area and profession, including where prescribing or advanced practice status should move the number.
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
                                        <a href="service-details.html">No pressure</a>
                                    </h3>
                                    <p>
                                        If a role is not right, that is the end of it.
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
                    </div>
                </div>
                </section>
               
                {/* form */}
                <section className="about-contact-section">
                    <div className="about-contact-container">
                    {/* LEFT SIDE */}
                    <div className="about-info-card">
                        <h2>Not seeing the right <br />  role?</h2>
                        <p className="about-intro-text">
                        Most of what we work on is never advertised. Register with us and we will contact you when something fits — and only then.</p>
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
                        <button type="button" className={ activeType === "hiring" ? "active" : ""}onClick={() => setActiveType("hiring")}>I'm hiring</button>
                        <button type="button" className={ activeType === "looking" ? "active" : ""} onClick={() => setActiveType("looking")}>I'm looking</button>
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
        </div>
        </>
    )
}

export default Findjob;