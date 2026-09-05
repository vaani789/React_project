import React, { useState } from "react";

const ClinicalDelivery = () => {
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
                                Clinical Delivery
                            </li>
                        </ul> 
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">Capacity when you need it, compliant before you book it.</h1>
                            <p className="wow fadeInUp" data-wow-delay=".7s">
                                Temporary clinical staffing is where agencies most often cut corners. A start date is looming, a clinician is nearly compliant, and the file gets finished
retrospectively. We do not work that way.
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
                                            How clinical delivery works with us
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
                                                <h3 className="title">We understand the gap before we fill it</h3>                     
                                                <p>
                                                    A locum covering a medication review clinic needs different competence to one covering an acute on-the-day list. We establish what the sessions actually
involve, what supervision exists and what the postholder must be able to do unsupervised.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="box wow fadeInRight" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/02.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Compliance completed up front</h3>  
                                                <p>
                                                    Registration verified with the regulator, right to work documented, enhanced DBS current at the correct level, prescribing annotation checked on the
register, references taken from clinical referees, mandatory training in date, indemnity confirmed. Complete before you are offered anyone.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="box wow fadeInRight" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/01.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Continuity where you want it</h3>  
                                                <p>
                                                    Wherever possible we return the same clinicians to the same service. Continuity matters clinically, and it substantially reduces induction burden on your
permanent team.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="box mb-0 wow fadeInRight" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/03.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Transparent rates</h3>  
                                                <p>
                                                Itemised, so you can see the clinician's rate and our margin separately. No hidden uplifts and no charges that appear on the invoice but not the booking.                                                        
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
                            Common uses
                        </p>

                        <div className="support-grid">

                            <div className="support-card">
                                Sickness, parental leave and unplanned absence
                            </div>

                            <div className="support-card">
                                Vacancy cover while a permanent search runs
                            </div>

                            <div className="support-card">
                                Waiting-list and backlog initiatives
                            </div>

                            <div className="support-card">
                                Seasonal pressure, including winter and vaccination programmes
                            </div>

                            <div className="support-card">
                                Additional prescribing capacity during service expansion
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

                {/* <!-- News Section Start --> */}
                <section className="supported-section">
                    <div className="supported-container">
                        <p className="section-label">
                            What you receive
                        </p>
                        <div className="support-grid">

                            <div className="support-card">
                                A named contact who knows your service, not a rotating desk
                            </div>

                            <div className="support-card">
                                Full compliance documentation available for audit at any time
                            </div>

                            <div className="support-card">
                                Clear escalation route if a placement is not working
                            </div>

                        </div>

                    </div>
                </section>  
                        
            </div>
            </>
        )
}

export default ClinicalDelivery;