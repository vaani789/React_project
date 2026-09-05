import React from "react";

const CapacityPlanner = () => {

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
                               Capacity Planner
                            </li>
                        </ul>
                            <h1 class="wow fadeInUp" data-wow-delay=".5s">How many clinicians do you actually need?</h1>
                            <p class="wow fadeInUp" data-wow-delay=".7s">Most services size their workforce from last year's headcount plus whatever the budget allows. That works until demand shifts, and then it produces the
two most common staffing errors we see: recruiting the wrong profession, and recruiting too few prescribers to cover the clinic list.
This planner works the calculation the other way round — from the activity you need to deliver.
                            </p>
                        </div>
                    </div>
                </div>
                </div>

                {/* Launch articles — pay guides */}
                <section className="service-section-2 fix section-padding">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title style-2">
                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                <span className="sub-title">Manage Tasks. Master Time</span>
                            </div>
                            <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                What it asks
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Patient volume and pathway — how many appointments, of what type, over what period
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Appointment length and complexity by clinician type
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Proportion of activity requiring a prescriber
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Supervision requirements, including trainee ACPs and any DPP arrangements
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Available clinical sessions per week and realistic utilisation
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Leave, training and admin allowance — the figure most plans understate
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

                {/* What it gives you */}
                <section className="service-section-2 fix section-padding">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title style-2">
                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                <span className="sub-title">Manage Tasks. Master Time</span>
                            </div>
                            <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                What it gives you
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Whole-time equivalent requirement by profession
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Suggested skill mix across pharmacists, ACPs, prescribers and nurses
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Minimum prescribing coverage to keep the pathway moving
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Indicative cost range by staffing model
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
                                        <a href="service-details.html"></a>
                                    </h3>
                                    <p>
                                        Where a temporary or permanent model fits better
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

                <section className="pricing-section">
                    <div className="container">
                        <div className="section-title text-center">
                        <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                            What it is not
                        </h2>
                        <p className="mt-5" style={{ fontSize: "20px",letterSpacing: "normal",color: "#443838",}} >
                            An estimate, not a workforce plan. It does not account for your local demand patterns, estate constraints, commissioning arrangements or existing team
dynamics. Use it to frame the conversation, then have the conversation.
                        </p>
                        </div>
                    </div>
                </section>
          
        </div>
        </>
    )
}

export default CapacityPlanner;