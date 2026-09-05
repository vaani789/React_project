import React from 'react';
import { Link } from 'react-router-dom';

const Insights = () => {
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

                {/* GT MouseCursor Start */}
                <div className="mouseCursor cursor-outer"></div>
                <div className="mouseCursor cursor-inner"></div>

                {/* Breadcrumb Section Start */}
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
                                            <i className="fa-solid fa-house"></i> Home
                                        </Link>
                                    </li>

                                    <li>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </li>

                                    <li>
                                        Insight Hub
                                    </li>
                                </ul>

                                <h1
                                    className="wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    Written by clinicians, for clinicians
                                    <br />
                                    and the services that employ them.
                                </h1>

                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay=".7s"
                                >
                                    Most recruitment content is written to attract
                                    traffic rather than to be useful. Ours is written
                                    by people who have done these jobs, aimed at two
                                    questions: what is this role genuinely worth, and
                                    how do you do it well?
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    Launch articles — pay guides
                ====================================================== */}

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
                                    Launch articles — pay guides
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

                            {/* Card 1 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".3s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            Clinical pharmacist salary UK
                                        </h3>

                                        <p>
                                            PCN, community and hospital compared
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-1.svg"
                                                alt="Clinical pharmacist"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".5s">

                                <div className="service-card-items-two active">

                                    <div className="content">
                                        <h3 className="title">
                                            Independent prescribing qualification
                                        </h3>

                                        <p>
                                            What an independent prescribing
                                            qualification is actually worth to your salary
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-2.svg"
                                                alt="Independent prescribing"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".7s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            Advanced clinical practitioner pay
                                        </h3>

                                        <p>
                                            NHS bandings against private and PCN roles
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-3.svg"
                                                alt="Advanced clinical practitioner"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".3s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            <Link to="/service-details">
                                                Team build
                                            </Link>
                                        </h3>

                                        <p>
                                            Locum rates for pharmacists and prescribers,
                                            and how to negotiate them
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-4.svg"
                                                alt="Team build"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".5s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            Clinical leadership
                                        </h3>

                                        <p>
                                            Practice nurse and nurse practitioner pay
                                            across settings
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-5.svg"
                                                alt="Clinical leadership"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    Launch articles — for employers
                ====================================================== */}

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
                                    Launch articles — for employers
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

                            {/* Employer Card 1 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".3s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            Pharmacist, ACP or prescriber?
                                        </h3>

                                        <p>
                                            Scoping the role before you advertise
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-1.svg"
                                                alt="Pharmacist, ACP or prescriber"
                                            />
                                        </div>

                                        <Link
                                            to="/service-details"
                                            className="service-btn"
                                        >
                                            Learn more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            {/* Employer Card 2 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".5s">

                                <div className="service-card-items-two active">

                                    <div className="content">
                                        <h3 className="title">
                                            Six reasons your clinical vacancy is not
                                            attracting applicants
                                        </h3>

                                        <p>
                                            Understand why clinical vacancies fail to
                                            attract the right applicants.
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-2.svg"
                                                alt="Clinical vacancy"
                                            />
                                        </div>

                                        <Link
                                            to="/service-details"
                                            className="service-btn"
                                        >
                                            Learn more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            {/* Employer Card 3 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".7s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            Skill mix in a PCN
                                        </h3>

                                        <p>
                                            Designing a clinical team that works
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-3.svg"
                                                alt="Skill mix in a PCN"
                                            />
                                        </div>

                                        <Link
                                            to="/service-details"
                                            className="service-btn"
                                        >
                                            Learn more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            {/* Employer Card 4 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".3s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            Safe onboarding for a locum prescriber
                                        </h3>

                                        <p>
                                            Practical guidance for safe onboarding.
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-4.svg"
                                                alt="Locum prescriber"
                                            />
                                        </div>

                                        <Link
                                            to="/service-details"
                                            className="service-btn"
                                        >
                                            Learn more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            {/* Employer Card 5 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".5s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            What to ask a clinical leadership candidate
                                        </h3>

                                        <p>
                                            What a generalist panel may miss during
                                            clinical leadership interviews.
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-5.svg"
                                                alt="Clinical leadership candidate"
                                            />
                                        </div>

                                        <Link
                                            to="/service-details"
                                            className="service-btn"
                                        >
                                            Learn more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    Launch articles — for clinicians
                ====================================================== */}

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
                                    Launch articles — for clinicians
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

                            {/* Clinician Card 1 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".3s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            Community pharmacy into a PCN
                                        </h3>

                                        <p>
                                            An honest account of the differences
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-1.svg"
                                                alt="Community pharmacy"
                                            />
                                        </div>

                                        <Link
                                            to="/service-details"
                                            className="service-btn"
                                        >
                                            Learn more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            {/* Clinician Card 2 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".5s">

                                <div className="service-card-items-two active">

                                    <div className="content">
                                        <h3 className="title">
                                            Routes into advanced clinical practice
                                        </h3>

                                        <p>
                                            What each route really requires
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-2.svg"
                                                alt="Advanced clinical practice"
                                            />
                                        </div>

                                        <Link
                                            to="/service-details"
                                            className="service-btn"
                                        >
                                            Learn more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            {/* Clinician Card 3 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".7s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            Independent prescribing
                                        </h3>

                                        <p>
                                            Choosing a course, finding a DPP,
                                            surviving the portfolio
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-3.svg"
                                                alt="Independent prescribing"
                                            />
                                        </div>

                                        <Link
                                            to="/service-details"
                                            className="service-btn"
                                        >
                                            Learn more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            {/* Clinician Card 4 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".3s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            Interview questions clinical panels
                                            actually ask
                                        </h3>

                                        <p>
                                            Prepare for the questions that matter.
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-4.svg"
                                                alt="Clinical interview questions"
                                            />
                                        </div>

                                        <Link
                                            to="/service-details"
                                            className="service-btn"
                                        >
                                            Learn more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            {/* Clinician Card 5 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".5s">

                                <div className="service-card-items-two">

                                    <div className="content">
                                        <h3 className="title">
                                            Knowing when to leave a role
                                        </h3>

                                        <p>
                                            And when the problem will follow you
                                        </p>
                                    </div>

                                    <div className="icon-items">
                                        <div className="icon">
                                            <img
                                                src="assets/img/home-2/service-icon-5.svg"
                                                alt="Leaving a role"
                                            />
                                        </div>

                                        <Link
                                            to="/service-details"
                                            className="service-btn"
                                        >
                                            Learn more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Insights;