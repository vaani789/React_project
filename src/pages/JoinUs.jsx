import React from "react";

const JoinUs = () => {

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
                               Join Us
                            </li>
                        </ul> 
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">Build the agency healthcare actually deserves</h1>
                            <p className="wow fadeInUp" data-wow-delay=".7s">
                                Vero exists because clinical recruitment is generally done badly. Fixing that requires people who care about doing it properly — which is a different hire
from the standard recruitment profile.
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
                                           How we work
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
                                                   Quality over volume — measured on placements that last, not calls made
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
                                                    Clinical training provided, including time with our founders
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
                                                    No pressure to submit candidates you do not believe in
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 


                {/* Who we hire */}
                <section className="service-section-2 fix section-padding">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title style-2">
                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                <span className="sub-title">Manage Tasks. Master Time</span>
                            </div>
                            <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                               Who we hire
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
                                        <a href="service-details.html">Clinicians moving out of practice</a>
                                    </h3>
                                    <p>
                                        If you are a pharmacist, ACP, prescriber or nurse considering a move away from the clinical floor, this is one of the few commercial routes where your
clinical background is the primary asset rather than an interesting footnote. We will teach you recruitment. We cannot teach clinical judgement.
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
                                        <a href="service-details.html">Recruiters who want to specialise</a>
                                    </h3>
                                    <p>
                                        If you have recruitment experience and are tired of volume targets and speculative CV sends, we work differently: fewer roles, deeper relationships, and
the expectation that you will learn the clinical detail properly.
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
                                        <a href="service-details.html">Operations and compliance</a>
                                    </h3>
                                    <p>
                                        Compliance in clinical staffing is a patient safety function, not administration. We want people who understand that distinction.
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
                        
                    </div>
                </div>
                </section>           
                        
            </div>
        
        </>
    )
}


export default JoinUs;