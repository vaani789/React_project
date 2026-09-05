import React, { useState } from "react";

const Joinbank = () => {
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
                                Join the Bank
                            </li>
                        </ul> 
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">Flexible clinical work, without the usual friction.</h1>
                            <p className="wow fadeInUp" data-wow-delay=".7s">
                                Bank and locum work should be straightforward. In practice it is usually a compliance process repeated from scratch for every agency, followed by calls
about shifts nowhere near where you live.Our bank works differently. You complete compliance once with us. After that you see work that actually matches what you told us — profession,
location, availability and scope.
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

                {/* Why clinicians join */}
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
                                        <a href="service-details.html">Compliance once</a>
                                    </h3>
                                    <p>
                                       We hold your file, monitor expiry dates and prompt you before anything lapses.
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
                                        <a href="service-details.html">Relevant work only</a>
                                    </h3>
                                    <p>
                                        Filtered by your stated location, availability and scope. No calls about a shift two hours away on a day you said you were
unavailable.
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
                                        <a href="service-details.html">Transparent rates</a>
                                    </h3>
                                    <p>
                                        You know what you are being paid before you accept, and it does not change afterwards
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
                                        <a href="service-details.html">Accurate role information</a>
                                    </h3>
                                    <p>
                                        What the session actually involves, what systems are used, and who to ask on the day.</p>
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
                                        <a href="service-details.html">Genuine flexibility</a>
                                    </h3>
                                    <p>
                                        No minimum commitment and no penalty for declining work
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
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-card-items-two">
                                <div className="content">
                                    <h3 className="title"> 
                                        <a href="service-details.html">Someone clinical to call</a>
                                    </h3>
                                    <p>
                                       If a placement is not what you were told, you speak to a clinician who will deal with it.
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

                <section className="supported-section">
                    <div className="supported-container">

                        <p className="section-label">
                            Who can join
                        </p>

                        <div className="support-grid">

                            <div className="support-card">
                                Pharmacists and pharmacy technicians, including independent prescribers
                            </div>

                            <div className="support-card">
                                Advanced clinical practitioners and advanced nurse practitioners
                            </div>

                            <div className="support-card">
                                Non-medical prescribers from any professional background
                            </div>

                            <div className="support-card">
                                Practice nurses, specialist nurses and nurse practitioners
                            </div>

                            <div className="support-card">
                                GPs, paramedics in primary care and physician associates
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

export default Joinbank;