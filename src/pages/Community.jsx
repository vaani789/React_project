import React from "react";

const Community = () => {
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

             {/* <!-- Search Start --> */}
            <div className="search-popup">
                <div className="search-popup__overlay search-toggler"></div>
                <div className="search-popup__content">
                    <form role="search" method="get" className="search-popup__form" action="#">
                        <input type="text" id="search" name="search" placeholder="Search Here..."/>
                        <button type="submit" aria-label="search submit" className="search-btn">
                            <span><i className="fa-regular fa-magnifying-glass"></i></span>
                        </button>
                    </form>
                </div>
            </div>

                    {/* <!-- Hero Section Start --> */}
                    <section className="hero-section-2 fix  position-relative">
                        <div className="hero-2">
                            <div className="swiper hero-slider-2">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="hero-slider-items">
                                            <div className="item-img position-absolute">
                                                <img src="assets/img/home-2/hero-slider-2.jpg" alt="img"/>
                                            </div>
                                            {/* <div className="hero-shape">
                                                <img src="assets/img/home-2/hero-shape1.png" alt="img"/>
                                            </div> */}
                                            {/* <div className="hero-shape2">
                                                <img src="assets/img/home-2/hero-shape2.png" alt="img"/>
                                            </div> */}
                                            {/* <div className="hero-info">
                                                <img src="assets/img/home-2/hero-info.png" alt="img"/>
                                            </div> */}
                                            <div className="container">
                                                <div className="hero-content">
                                                        <span className="hero-sub">Manage Tasks. Master Time</span>
                                                        <h1 className="hero-title">
                                                            A network run by clinicians, for clinicians. <span className="star"><img src="assets/img/home-2/star2.png" alt="img"/></span>
                                                        </h1>
                                                        <p>
                                                            Recruitment agencies talk about their "community" and usually mean a mailing list. Ours is intended to be useful whether or not you ever apply for a job
through us.
                                                        </p>
                                                    <div className="hero-button">
                                                        <a className="theme-btn-main style-2" href="project.html">
                                                            <span className="theme-btn-arrow-left"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                                            <span className="theme-btn">Explore our work</span>
                                                            <span className="theme-btn-arrow-right"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                                        </a>
                                                         <a className="theme-btn-main style-2 theme-2" href="contact.html">
                                                            <span className="theme-btn-arrow-left"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                                            <span className="theme-btn">Get started</span>
                                                            <span className="theme-btn-arrow-right"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </section>	
                 
                    {/* <!-- Feature Section Start --> */}
                    <section className="feature-section-2 section-padding">
                        <div className="light-shape d-none d-xl-block">
                            <img src="assets/img/home-2/light-shape1.png" alt="img"/>
                        </div>
                        <div className="light-shape2 d-none d-xl-block">
                            <img src="assets/img/home-2/light-shape2.png" alt="img"/>
                        </div>
                        <div className="container">
                            <div className="section-title style-2 text-center">
                                <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <span className="sub-title">Fast, Reliable, Scalable</span>
                                </div>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                    A network run by clinicians,  <br/> for clinicians.
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="feature-box-items-2">
                                        <div className="icon">
                                            <img src="assets/img/home-2/feature-icon-1.svg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"></h3>
                                            <p>
                                                Advanced practice and non-medical prescribing are relatively young disciplines
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="feature-box-items-2">
                                        <div className="icon">
                                            <img src="assets/img/home-2/feature-icon-2.svg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"></h3>
                                            <p>
                                               Standards are still settling, job titles are used inconsistently, and a lot of clinicians are navigating routes that nobody has mapped for them
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="feature-box-items-2">
                                        <div className="icon">
                                            <img src="assets/img/home-2/feature-icon-3.svg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title"></h3>
                                            <p>
                                                Peer conversation genuinely helps, and there is not enough of it.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Service Section Start --> */}
                    <section className="service-section-2 fix section-padding">
                        <div className="container">
                            <div className="section-title-area">
                                <div className="section-title style-2">
                                    <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <span className="sub-title">Manage Tasks. Master Time</span>
                                    </div>
                                    <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                       Who it is for 
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
                                                <a href="service-details.html">Collaboration</a>
                                            </h3>
                                            <p>
                                                Pharmacists across community, PCN, general practice and hospital settings                                        
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
                                                <a href="service-details.html">Integration</a>
                                            </h3>
                                            <p>
                                                Advanced clinical practitioners and trainee ACPs
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
                                                <a href="service-details.html">Reporting</a>
                                            </h3>
                                            <p>
                                                Non-medical prescribers from any professional background
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
                                                <a href="service-details.html">Management</a>
                                            </h3>
                                            <p>
                                                Nurses and allied health professionals developing their scope
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
                                                <a href="service-details.html">Tracking</a>
                                            </h3>
                                            <p>
                                                Clinical leads and managers building multidisciplinary teams
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

                    {/* <!-- Project Section Start --> */}
                    <section className="project-section section-padding oit-panel-pin-area">
                        <div className="container">
                            <div className="section-title style-2 text-center">
                                <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <span className="sub-title">Building Digital Excellence</span>
                                </div>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                    What the community  <br/> offers.
                                </h2>
                            </div>
                            <div className="project-wrapper">
                                <div className="project-box-items oit-panel-pin">
                                    <div className="content">
                                        <span className="number">01.</span>
                                        <h3 className="title">
                                            <a href="project-details.html">Peer conversation that is actually clinical</a>
                                        </h3>
                                        <p>
                                            Prescribing scope, supervision arrangements, portfolio evidence, the practical realities of working at advanced level. Discussion between people doing
the work, not commentary from outside.
                                        </p>
                                        <a href="project.html" className="news-btn">
                                            <span className="text">
                                                <span className="text-default">Explore More  <i className="fa-regular fa-arrow-up-right"></i></span>
                                                <span className="text-hover">Explore More  <i className="fa-regular fa-arrow-up-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/img/home-2/project-1.jpg" alt="img"/>
                                        <img src="assets/img/home-2/project-1.jpg" alt="img"/>
                                    </div>
                                </div>
                                <div className="project-box-items oit-panel-pin">
                                    <div className="content">
                                        <span className="number">02.</span>
                                        <h3 className="title">
                                            <a href="project-details.html">Career guidance without  <br/> a sales agenda</a>
                                        </h3>
                                        <p>
                                        Questions we answer regularly: is an independent prescribing qualification worth it, what does a move from community into a PCN really involve, how
                                        do you find a designated prescribing practitioner, what does an advanced practice route require in reality.                                        
                                        </p>
                                        <a href="project.html" className="news-btn">
                                            <span className="text">
                                                <span className="text-default">Explore More  <i className="fa-regular fa-arrow-up-right"></i></span>
                                                <span className="text-hover">Explore More  <i className="fa-regular fa-arrow-up-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/img/home-2/project-2.jpg" alt="img"/>
                                        <img src="assets/img/home-2/project-2.jpg" alt="img"/>
                                    </div>
                                </div>
                                <div className="project-box-items oit-panel-pin">
                                    <div className="content">
                                        <span className="number">03.</span>
                                        <h3 className="title">
                                            <a href="project-details.html">Pay transparency</a>
                                        </h3>
                                        <p>
                                            Clinicians are consistently underinformed about what their skills are worth. We share what we see across the market so people negotiate from
                                            information rather than hope.                                        
                                        </p>
                                        <a href="project.html" className="news-btn">
                                            <span className="text">
                                                <span className="text-default">Explore More  <i className="fa-regular fa-arrow-up-right"></i></span>
                                                <span className="text-hover">Explore More  <i className="fa-regular fa-arrow-up-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/img/home-2/project-3.jpg" alt="img"/>
                                        <img src="assets/img/home-2/project-3.jpg" alt="img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-button text-center mt-5">
                                <a className="theme-btn-main style-2" href="project.html">
                                    <span className="theme-btn-arrow-left"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                    <span className="theme-btn">More works</span>
                                    <span className="theme-btn-arrow-right"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                </a>
                            </div>
                        </div>
                    </section>

                    
               
        </div>
        </>
    )

}

export default Community;