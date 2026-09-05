import React, { useState } from "react";

const ClinicalNetwork = () => {
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
                                Clinical Network
                            </li>
                        </ul> 
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">Built through practice, not purchased from a database.</h1>
                            <p className="wow fadeInUp" data-wow-delay=".7s">
                                Any agency can buy a CV database. What it cannot buy is the reason a senior prescriber returns a call at eight in the evening — which is usually that
they know the person calling, or know someone who does.
                            </p>
                        </div>
                    </div>
                </div>
                </div>


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
                                            What the network covers
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
                                                <h3 className="title">Pharmacy</h3>                     
                                                <p>
                                                    community, PCN, general practice, hospital and specialist pharmacists; technicians including ACTs
                                                </p>
                                            </div>
                                        </div>
                                        <div className="box wow fadeInRight" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/02.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Advanced clinical practice</h3>  
                                                <p>
                                                    ACPs and ANPs across primary, urgent and acute care, plus trainees
                                                </p>
                                            </div>
                                        </div>
                                        <div className="box wow fadeInRight" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/01.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Non-medical prescribing</h3>  
                                                <p>
                                                    independent and supplementary prescribers from pharmacy, nursing, paramedicine and allied health
                                                </p>
                                            </div>
                                        </div>
                                        <div className="box wow fadeInRight" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/01.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Wider primary and urgent care</h3>  
                                                <p>
                                                    GPs, paramedics in primary care, physician associates
                                                </p>
                                            </div>
                                        </div>
                                        <div className="box mb-0 wow fadeInRight" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/03.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Nursing</h3>  
                                                <p>
                                                practice nurses, specialist nurses, nurse practitioners                                               
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
                           How the network is maintained
                        </p>

                        <div className="support-grid">

                            <div className="support-card">
                                Registration status re-verified at each renewal window
                            </div>

                            <div className="support-card">
                                Availability and scope confirmed regularly, not assumed from an old record
                            </div>

                            <div className="support-card">
                                Data handled under UK GDPR, with consent recorded and refreshed
                            </div>

                            <div className="support-card">
                                No CV is ever shared without explicit permission for that specific role
                            </div>


                        </div>

                    </div>
                </section>                 

                {/* form */}
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
                        
            </div>
            </>
        )
}

export default ClinicalNetwork;