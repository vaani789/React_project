import React from "react";
import { Link } from "react-router-dom";

const CapacityPlanner = () => {
    const plannerQuestions = [
        {
            text: "Patient volume and pathway — how many appointments, of what type, over what period",
            icon: "assets/img/home-2/service-icon-1.svg",
        },
        {
            text: "Appointment length and complexity by clinician type",
            icon: "assets/img/home-2/service-icon-2.svg",
            active: true,
        },
        {
            text: "Proportion of activity requiring a prescriber",
            icon: "assets/img/home-2/service-icon-3.svg",
        },
        {
            text: "Supervision requirements, including trainee ACPs and any DPP arrangements",
            icon: "assets/img/home-2/service-icon-4.svg",
        },
        {
            text: "Available clinical sessions per week and realistic utilisation",
            icon: "assets/img/home-2/service-icon-5.svg",
        },
        {
            text: "Leave, training and admin allowance — the figure most plans understate",
            icon: "assets/img/home-2/service-icon-5.svg",
        },
    ];

    const plannerResults = [
        {
            text: "Whole-time equivalent requirement by profession",
            icon: "assets/img/home-2/service-icon-1.svg",
        },
        {
            text: "Suggested skill mix across pharmacists, ACPs, prescribers and nurses",
            icon: "assets/img/home-2/service-icon-2.svg",
            active: true,
        },
        {
            text: "Minimum prescribing coverage to keep the pathway moving",
            icon: "assets/img/home-2/service-icon-3.svg",
        },
        {
            text: "Indicative cost range by staffing model",
            icon: "assets/img/home-2/service-icon-4.svg",
        },
        {
            text: "Where a temporary or permanent model fits better",
            icon: "assets/img/home-2/service-icon-5.svg",
        },
    ];

    return (
        <>
            <div className="page-wrapper">

                {/* Preloader Start */}
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

                {/* Back-To-Top Start */}
                <button
                    id="back-top"
                    className="back-to-top"
                    type="button"
                    aria-label="Back to top"
                >
                    <i className="fa-regular fa-arrow-up"></i>
                </button>

                {/* Mouse Cursor */}
                <div className="mouseCursor cursor-outer"></div>
                <div className="mouseCursor cursor-inner"></div>

                {/* Breadcrumb Section */}
                <div
                    className="breadcrumb-wrapper bg-cover"
                    style={{
                        backgroundImage:
                            "url('assets/img/inner-page/breadcrumb.png')",
                    }}
                >
                    <div className="container">
                        <div className="page-heading">
                            <div className="breadcrumb-sub-title">

                                <ul
                                    className="breadcrumb-items wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <li>
                                        <Link to="/">
                                            <i className="fa-solid fa-house"></i>{" "}
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </li>

                                    <li>Capacity Planner</li>
                                </ul>

                                <h1
                                    className="wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    How many clinicians do you actually need?
                                </h1>

                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay=".7s"
                                >
                                    Most services size their workforce from last
                                    year's headcount plus whatever the budget
                                    allows. That works until demand shifts, and
                                    then it produces the two most common staffing
                                    errors we see: recruiting the wrong profession,
                                    and recruiting too few prescribers to cover
                                    the clinic list. This planner works the
                                    calculation the other way round — from the
                                    activity you need to deliver.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* What it asks */}
                <section className="service-section-2 fix section-padding">
                    <div className="container">

                        <div className="section-title-area">

                            <div className="section-title style-2">
                                <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <span className="sub-title">
                                        Manage Tasks. Master Time
                                    </span>
                                </div>

                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    What it asks
                                </h2>
                            </div>

                            <Link
                                className="theme-btn-main style-2"
                                to="/services"
                            >
                                <span className="theme-btn-arrow-left">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>

                                <span className="theme-btn">
                                    All services
                                </span>

                                <span className="theme-btn-arrow-right">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>

                        </div>

                        <div className="row">

                            {plannerQuestions.map((item, index) => (
                                <div
                                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay={`${0.3 + (index % 3) * 0.2}s`}
                                    key={index}
                                >
                                    <div
                                        className={`service-card-items-two ${
                                            item.active ? "active" : ""
                                        }`}
                                    >

                                        <div className="content">
                                            <h3 className="title">
                                                {/* Intentionally no empty link */}
                                            </h3>

                                            <p>{item.text}</p>
                                        </div>

                                        <div className="icon-items">

                                            <div className="icon">
                                                <img
                                                    src={item.icon}
                                                    alt="Service"
                                                />
                                            </div>

                                            <Link
                                                to="/services"
                                                className="service-btn"
                                            >
                                                Learn more{" "}
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>

                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* What it gives you */}
                <section className="service-section-2 fix section-padding">
                    <div className="container">

                        <div className="section-title-area">

                            <div className="section-title style-2">

                                <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <span className="sub-title">
                                        Manage Tasks. Master Time
                                    </span>
                                </div>

                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    What it gives you
                                </h2>

                            </div>

                            <Link
                                className="theme-btn-main style-2"
                                to="/services"
                            >
                                <span className="theme-btn-arrow-left">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>

                                <span className="theme-btn">
                                    All services
                                </span>

                                <span className="theme-btn-arrow-right">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>

                        </div>

                        <div className="row">

                            {plannerResults.map((item, index) => (
                                <div
                                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay={`${0.3 + (index % 3) * 0.2}s`}
                                    key={index}
                                >
                                    <div
                                        className={`service-card-items-two ${
                                            item.active ? "active" : ""
                                        }`}
                                    >

                                        <div className="content">

                                            <h3 className="title">
                                                {/* Intentionally no empty link */}
                                            </h3>

                                            <p>{item.text}</p>

                                        </div>

                                        <div className="icon-items">

                                            <div className="icon">
                                                <img
                                                    src={item.icon}
                                                    alt="Service"
                                                />
                                            </div>

                                            <Link
                                                to="/services"
                                                className="service-btn"
                                            >
                                                Learn more{" "}
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>

                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* What it is not */}
                <section className="pricing-section">
                    <div className="container">

                        <div className="section-title text-center">

                            <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                What it is not
                            </h2>

                            <p
                                className="mt-5"
                                style={{
                                    fontSize: "20px",
                                    letterSpacing: "normal",
                                    color: "#443838",
                                }}
                            >
                                An estimate, not a workforce plan. It does not
                                account for your local demand patterns, estate
                                constraints, commissioning arrangements or
                                existing team dynamics. Use it to frame the
                                conversation, then have the conversation.
                            </p>

                        </div>

                    </div>
                </section>

            </div>
        </>
    );
};

export default CapacityPlanner;