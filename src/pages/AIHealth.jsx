import React from "react";

const AIHealth = () => {

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
                               AI in Health
                            </li>
                        </ul> 
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">A clinician's view, not a vendor's.</h1>
                            <p className="wow fadeInUp" data-wow-delay=".7s">
                                Every healthcare organisation is being told AI will transform its workforce. Most of that message comes from people selling AI. As clinicians, our view is
more measured — and more useful if you are trying to plan a workforce.
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
                                           What it means for hiring
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
                                                {/* <h3 className="title">Pharmacy</h3> */}
                                                <p>
                                                   Digital confidence is becoming a genuine selection criterion, not a nice-to-have
                                                </p>
                                            </div>
                                        </div>
                                        <div className="box wow fadeInRight" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/02.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                {/* <h3 className="title">Advanced clinical practice</h3>   */}
                                                <p>
                                                    Roles are shifting toward oversight, exception handling and complex cases
                                                </p>
                                            </div>
                                        </div>
                                        <div className="box wow fadeInRight" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/01.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                {/* <h3 className="title">Non-medical prescribing</h3>   */}
                                                <p>
                                                    Remote-capable clinicians widen your candidate pool considerably
                                                </p>
                                            </div>
                                        </div>
                                        <div className="box wow fadeInRight" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/inner-page/icon/02.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                {/* <h3 className="title">Wider primary and urgent care</h3>   */}
                                                <p>
                                                   Governance roles are growing in importance as services adopt new tools
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 


                {/* What we assess */}
                <section className="service-section-2 fix section-padding">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title style-2">
                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                <span className="sub-title">Manage Tasks. Master Time</span>
                            </div>
                            <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                What is genuinely changing
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
                                        <a href="service-details.html">Documentation</a>
                                    </h3>
                                    <p>
                                        Ambient scribing and automated note-taking are removing real administrative time from consultations, which changes how many
patients a clinician can safely see.
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
                                        <a href="service-details.html">Triage and prioritisation</a>
                                    </h3>
                                    <p>
                                        Increasingly used to sort demand before it reaches a clinician, shifting the case mix that arrives on a list.
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
                                        <a href="service-details.html">Medicines optimisation</a>
                                    </h3>
                                    <p>
                                        Automated identification of patients for review changes what a clinical pharmacist spends their day doing.
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
                                        <a href="service-details.html">Remote and asynchronous care</a>
                                    </h3>
                                    <p>
                                        Expanding the geography a clinician can cover, and widening the pool you can recruit from.
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
                        
                    </div>
                </div>
                </section>           

                <section className="pricing-section">
                    <div className="container">
                        <div className="section-title text-center">
                        <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                            What is not changing
                        </h2>
                        <p className="mt-5" style={{ fontSize: "20px",letterSpacing: "normal",color: "#443838",}} >
                            Clinical accountability. A prescribing decision is still made by a registered professional who carries the responsibility for it. Regulators have not moved
                            on this, and services that plan as though they have are exposed.
                            The need for clinical judgement in ambiguity, the value of continuity, and the fact that patients in distress want a person. These are the parts of the job
                            that do not automate.
                        </p>
                        </div>
                    </div>
                </section>

                <section className="pricing-section">
                    <div className="container">
                        <div className="section-title text-center">
                        <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                            Our position
                        </h2>
                        <p className="mt-5" style={{ fontSize: "20px",letterSpacing: "normal",color: "#443838",}} >
                            We are not an AI consultancy and will not pretend otherwise. What we can do is tell you how AI adoption is changing the roles services are actually
recruiting for, because we see those briefs before the market does.
                        </p>
                        </div>
                    </div>
                </section>
                        
            </div>
        
        </>
    )
}

export default AIHealth;