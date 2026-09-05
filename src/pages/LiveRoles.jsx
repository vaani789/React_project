import React from 'react';

const LiveRoles = () => {

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
                            Portfolio Details
                        </li>
                    </ul>
                        <h1 className="wow fadeInUp" data-wow-delay=".5s">Transparent Hardware <br/> Innovation</h1>
                        <p className="wow fadeInUp" data-wow-delay=".7s">
                            Simplify the way you work with our powerful task management platform From organizing daily to-dos to managing complex projects.
                        </p>
                    </div>
                </div>
            </div>
            </div>

            {/* <!-- Project Section Start --> */}
            <section className="project-details-section fix section-padding">
                <div className="container">
                    <div className="project-details-wrapper">
                        <div className="project-details-top-item">
                            <div className="project-details-info-item">
                                <div className="content">
                                    <span>Client:</span>
                                    <p>Leeno Solutions</p>
                                </div>
                                <div className="content">
                                    <span>Services:</span>
                                    <p>SaaS Landing</p>
                                </div>
                                <div className="content">
                                    <span>Platform:</span>
                                    <p>Business development</p>
                                </div>
                                <div className="content style-2">
                                    <span>Date:</span>
                                    <p>June 2026</p>
                                </div>
                            </div>
                            <div className="project-details-image">
                                <img data-speed=".8" src="assets/img/inner-page/project-details.jpg" alt="img"/>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-7">
                                    <div className="left-text">
                                        <h2>
                                            Transparent Hardware <br/> Innovation
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="details-content">
                                        <p>
                                                We are redefining the future of hardware by combining cutting-edge technology with full transparency. Our solutions are designed to offer clear visibility into every component, ensuring reliability, efficiency, and user trust. By innovating hardware
                                        </p>
                                        <ul className="details-list">
                                            <li className="border-bottom-0 pb-0">
                                                <i className="fa-solid fa-check"></i>
                                                Optimize resource allocation
                                            </li>
                                            <li className="border-bottom-0 pb-0">
                                                <i className="fa-solid fa-check"></i>
                                                Measure key performance
                                            </li>
                                            <li className="border-bottom-0 pb-0">
                                                <i className="fa-solid fa-check"></i>
                                                Create strategic roadmap
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check"></i>
                                                Define clear goals
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="details-image-item">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="thumb">
                                            <img data-speed=".8" src="assets/img/inner-page/project-details-2.jpg" alt="img"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="thumb">
                                            <img data-speed=".8" src="assets/img/inner-page/project-details-3.jpg" alt="img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="left-text">
                                <h2>
                                    Turning concept into <br/> visual stories
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="details-box">
                                        <span className="number">01</span>
                                        <h3>Research insights</h3>
                                        <p>
                                            We begin by understanding user needs, behaviors, and pain points through.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="details-box">
                                        <span className="number">02</span>
                                        <h3>SassS Mapping</h3>
                                        <p>
                                            We begin by understanding user needs, behaviors, and pain points through.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="details-box">
                                        <span className="number">03</span>
                                        <h3>Interface Design</h3>
                                        <p>
                                            We begin by understanding user needs, behaviors, and pain points through.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="details-box">
                                        <span className="number">04</span>
                                        <h3>Design testing</h3>
                                        <p>
                                            We begin by understanding user needs, behaviors, and pain points through.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="details-bottom-content">
                                <div className="left-text">
                                    <h2>Final Result</h2>
                                </div>
                                <div className="right-content">
                                    <p>
                                        We are redefining the future of hardware by combining cutting-edge technology with full transparency. Our solutions are designed to offer clear visibility into every component, ensuring reliability, efficiency, and user trust. By innovating hardware.
                                    </p>
                                    <p className="mb-0">
                                        We are redefining the future of hardware by combining cutting-edge technology with full transparency. 
                                    </p>
                                </div>
                            </div>
                            <div className="slider-button d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                                        <button className="cmn-prev cmn-border d-center">
                                        <i className="fa-solid fa-arrow-left"></i>
                                        </button>
                                        <span className="previus-text text-capitalize">
                                        Preview
                                        </span>
                                    </div>
                                    <div className="icon-gird">
                                        <img src="assets/img/inner-page/icon/grid.svg" alt="img"/>
                                    </div>
                                    <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                                        <span className="previus-text text-capitalize">
                                        Next
                                        </span>
                                        <button className="cmn-next cmn-border d-center">
                                        <i className="fa-solid fa-arrow-right"></i>
                                        </button>
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

export default LiveRoles;