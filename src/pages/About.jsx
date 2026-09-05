import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
    const [activeType, setActiveType] = useState("hiring");

    const teamMembers = [
        {
            image: "assets/img/home-2/team-1.jpg",
            name: "Shikhon Islam",
            role: "Brand Manager",
        },
        {
            image: "assets/img/home-2/team-2.jpg",
            name: "Esther Howard",
            role: "Co. Founder",
        },
        {
            image: "assets/img/home-2/team-3.jpg",
            name: "Theresa Webb",
            role: "UI/UX Designer",
        },
        {
            image: "assets/img/home-2/team-4.jpg",
            name: "Messle Qualam",
            role: "UI/UX Designer",
        },
    ];

    const newsItems = [
        {
            image: "assets/img/home-2/news-01.jpg",
            firstName: "Tyler",
            lastName: "Denbigh",
            role: "Founder · Commercial",
            title:
                "Commercial talent and growth strategy for high-growth health.",
        },
        {
            image: "assets/img/home-2/news-02.jpg",
            firstName: "Madison",
            lastName: "Fox",
            role: "Clinical Delivery",
            title:
                "Clinical workforce across regulated health services and new verticals.",
        },
        {
            image: "assets/img/home-2/news-03.jpg",
            firstName: "Danny",
            lastName: "Davies",
            role: "Clinical Leadership",
            title:
                "Medical and clinical directors for early-stage and scaling health businesses.",
        },
        {
            image: "assets/img/home-2/news-01.jpg",
            firstName: "Dan",
            lastName: "Seal",
            role: "Head of Public Sector",
            title:
                "NHS and public sector workforce, contracts and partnerships.",
        },
        {
            image: "assets/img/home-2/news-02.jpg",
            firstName: "James",
            lastName: "Doyle",
            role: "Non-Executive Director",
            title:
                "Board-level guidance, governance and strategic direction.",
        },
        {
            image: "assets/img/home-2/news-03.jpg",
            firstName: "Chris",
            lastName: "Hampson",
            role: "Clinical Delivery Support",
            title:
                "Operational support across clinical workforce delivery and onboarding.",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="page-wrapper">

            {/* ================= PRELOADER ================= */}
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


            {/* ================= BACK TO TOP ================= */}
            <button
                id="back-top"
                className="back-to-top"
                type="button"
            >
                <i className="fa-regular fa-arrow-up"></i>
            </button>


            {/* ================= MOUSE CURSOR ================= */}
            <div className="mouseCursor cursor-outer"></div>
            <div className="mouseCursor cursor-inner"></div>


            {/* ================= BREADCRUMB ================= */}
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

                                <li>About Us</li>
                            </ul>

                            <h1
                                className="wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                We were clinicians first. We still think like
                                clinicians.
                            </h1>

                            <p
                                className="wow fadeInUp"
                                data-wow-delay=".7s"
                            >
                                Vero was founded by pharmacists, advanced
                                clinical practitioners and non-medical
                                prescribers who had spent their careers inside
                                healthcare services — and a fair share of that
                                time frustrated by how those services were
                                staffed.
                            </p>

                        </div>
                    </div>
                </div>
            </div>


            {/* ================= ABOUT SECTION ================= */}
            <section className="about-section-4 section-padding fix pb-0">
                <div className="container">
                    <div className="about-wrapper-4">
                        <div className="row g-4">

                            <div className="col-lg-8">
                                <div className="about-image">
                                    <img
                                        src="assets/images/dashboard.png"
                                        alt="Healthcare dashboard"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div
                                    className="about-bg-box bg-cover"
                                    style={{
                                        backgroundImage:
                                            "url('assets/img/inner-page/about-bg.png')",
                                    }}
                                >
                                    <div className="box-content">

                                        <h2>
                                            <span className="count">25</span>
                                            <sup>+</sup>
                                        </h2>

                                        <p>
                                            Years of Experience of software
                                            Industries solutions.
                                        </p>

                                        <Link
                                            className="theme-btn-main style-2"
                                            to="/about"
                                        >
                                            <span className="theme-btn-arrow-left">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>

                                            <span className="theme-btn">
                                                Know more
                                            </span>

                                            <span className="theme-btn-arrow-right">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                        </Link>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* ================= FEATURE SECTION ================= */}
            <section className="feature-section-4 section-padding">

                <div className="blur-1">
                    <img
                        src="assets/img/inner-page/blur-1.png"
                        alt=""
                    />
                </div>

                <div className="blur-2">
                    <img
                        src="assets/img/inner-page/blur-2.png"
                        alt=""
                    />
                </div>

                <div className="container">
                    <div className="feature-wrapper-4">

                        <div className="row g-4">

                            <div className="col-lg-5">

                                <div className="section-title style-2 mb-0">

                                    <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <span className="sub-title">
                                            Manage Tasks. Master Time
                                        </span>
                                    </div>

                                    <h3 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                        What we hold ourselves to
                                    </h3>

                                </div>

                                <div className="feature-image">
                                    <img
                                        src="assets/img/inner-page/feature-1.jpg"
                                        alt="Healthcare professionals"
                                    />
                                </div>

                            </div>


                            <div className="col-lg-7">

                                <div className="feature-box-items">

                                    <div
                                        className="box wow fadeInRight"
                                        data-wow-delay=".3s"
                                    >
                                        <div className="icon">
                                            <img
                                                src="assets/img/inner-page/icon/01.svg"
                                                alt=""
                                            />
                                        </div>

                                        <div className="content">
                                            <p>
                                                We had seen roles advertised
                                                with a scope that did not exist.
                                                We had sat on panels reviewing
                                                candidates who should never
                                                have reached shortlist.
                                            </p>
                                        </div>
                                    </div>


                                    <div
                                        className="box wow fadeInRight"
                                        data-wow-delay=".5s"
                                    >
                                        <div className="icon">
                                            <img
                                                src="assets/img/inner-page/icon/02.svg"
                                                alt=""
                                            />
                                        </div>

                                        <div className="content">
                                            <p>
                                                We had watched good colleagues
                                                accept positions that had been
                                                misrepresented and leave within
                                                months.
                                            </p>
                                        </div>
                                    </div>


                                    <div
                                        className="box mb-0 wow fadeInRight"
                                        data-wow-delay=".7s"
                                    >
                                        <div className="icon">
                                            <img
                                                src="assets/img/inner-page/icon/03.svg"
                                                alt=""
                                            />
                                        </div>

                                        <div className="content">
                                            <p>
                                                Every one of those outcomes
                                                traced back to the same cause:
                                                the people recruiting did not
                                                understand the work. So we
                                                built the agency we had wanted
                                                to hire through.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>


            {/* ================= SUPPORTED SECTION ================= */}
            <section className="supported-section">
                <div className="supported-container">

                    <p className="section-label">
                        EVERY SEARCH IS SUPPORTED BY
                    </p>

                    <div className="support-grid">

                        <div className="support-card">
                            Clinical credibility is not optional
                        </div>

                        <div className="support-card">
                            Patient safety above placement fees
                        </div>

                        <div className="support-card">
                            Clinicians are colleagues, not candidates
                        </div>

                        <div className="support-card">
                            We would rather lose a fee than a relationship
                        </div>

                        <div className="support-card">
                            Confidential market mapping
                        </div>

                    </div>

                </div>
            </section>


            {/* ================= TEAM SECTION ================= */}
            <section
                className="team-section fix section-padding hero-ptb image-distortion p-relative z-index-1"
                style={{
                    backgroundImage:
                        "url('assets/img/home-2/team-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">

                    <div className="section-title-area">

                        <div className="section-title style-2 sec-style-2 mb-0">

                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                <span className="sub-title">
                                    Driven By Excellence
                                </span>
                            </div>

                            <h2 className="text_invert-2">
                                The Brains Behind
                                <br />
                                Our Platform
                            </h2>

                        </div>


                        <div className="array-button">

                            <button
                                className="array-prev"
                                type="button"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>

                            <button
                                className="array-next"
                                type="button"
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>

                        </div>

                    </div>


                    <div className="swiper team-slider">

                        <div className="swiper-wrapper">

                            {teamMembers.map((member, index) => (
                                <div
                                    className="swiper-slide wow fadeInUp"
                                    data-wow-delay={`0.${index + 2}s`}
                                    key={member.name}
                                >

                                    <div className="team-box-items">

                                        <div className="thumb">

                                            <img
                                                src={member.image}
                                                alt={member.name}
                                            />

                                            <img
                                                src={member.image}
                                                alt={member.name}
                                            />


                                            {/* SOCIAL ICONS */}
                                            <div className="social-icon d-flex align-items-center">

                                                <button
                                                    type="button"
                                                    aria-label="Facebook"
                                                >
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>

                                                <button
                                                    type="button"
                                                    aria-label="Twitter"
                                                >
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button
                                                    type="button"
                                                    aria-label="Vimeo"
                                                >
                                                    <i className="fab fa-vimeo-v"></i>
                                                </button>

                                                <button
                                                    type="button"
                                                    aria-label="Pinterest"
                                                >
                                                    <i className="fab fa-pinterest-p"></i>
                                                </button>

                                            </div>

                                        </div>


                                        <div className="content">

                                            <h3 className="title">
                                                <Link to="/team-details">
                                                    {member.name}
                                                </Link>
                                            </h3>

                                            <p>{member.role}</p>

                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </section>


            {/* ================= CONTACT SECTION ================= */}
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
                                One working day, from a person who has read your
                                brief.
                            </p>

                        </div>

                    </div>


                    {/* RIGHT SIDE */}
                    <div className="about-form-card">

                        {/* TOGGLE */}
                        <div className="about-toggle">

                            <button
                                type="button"
                                className={
                                    activeType === "hiring"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveType("hiring")
                                }
                            >
                                I'm hiring
                            </button>

                            <button
                                type="button"
                                className={
                                    activeType === "looking"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveType("looking")
                                }
                            >
                                I'm looking
                            </button>

                        </div>


                        {/* FORM */}
                        <form onSubmit={handleSubmit}>

                            <div className="about-form-row">

                                <div className="about-form-group">

                                    <label htmlFor="fullName">
                                        FULL NAME
                                    </label>

                                    <input
                                        id="fullName"
                                        type="text"
                                        name="fullName"
                                        required
                                    />

                                </div>


                                <div className="about-form-group">

                                    <label htmlFor="organisation">
                                        ORGANISATION
                                    </label>

                                    <input
                                        id="organisation"
                                        type="text"
                                        name="organisation"
                                    />

                                </div>

                            </div>


                            <div className="about-form-group">

                                <label htmlFor="email">
                                    EMAIL
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                />

                            </div>


                            <div className="about-form-group">

                                <label htmlFor="role">

                                    {activeType === "hiring"
                                        ? "ROLE OR SERVICE YOU'RE HIRING FOR"
                                        : "WHAT ARE YOU LOOKING FOR?"}

                                </label>

                                <input
                                    id="role"
                                    type="text"
                                    name="role"
                                    required
                                />

                            </div>


                            <div className="about-form-group">

                                <label htmlFor="requirements">

                                    {activeType === "hiring"
                                        ? "WHAT ARE YOU TRYING TO BUILD?"
                                        : "TELL US ABOUT YOUR REQUIREMENTS"}

                                </label>

                                <textarea
                                    id="requirements"
                                    name="requirements"
                                    rows="5"
                                    required
                                ></textarea>

                            </div>


                            <button
                                type="submit"
                                className="about-submit-btn"
                            >
                                <span>
                                    Book a discovery call
                                </span>

                                <span className="about-arrow">
                                    ›
                                </span>
                            </button>

                        </form>

                    </div>

                </div>

            </section>


            {/* ================= NEWS SECTION ================= */}
            <section className="news-section fix section-padding">

                <div className="container">

                    <div className="section-title-area">

                        <div className="section-title style-2">

                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                <span className="sub-title">
                                    The Team
                                </span>
                            </div>

                            <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                People who've done
                                <br />
                                the job.
                            </h2>

                        </div>


                        <Link
                            className="theme-btn-main style-2"
                            to="/news"
                        >

                            <span className="theme-btn-arrow-left">
                                <i className="fa-solid fa-arrow-up-right"></i>
                            </span>

                            <span className="theme-btn">
                                More blogs
                            </span>

                            <span className="theme-btn-arrow-right">
                                <i className="fa-solid fa-arrow-up-right"></i>
                            </span>

                        </Link>

                    </div>


                    <div className="row">

                        {newsItems.map((item, index) => (

                            <div
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay={`0.${index + 3}s`}
                                key={`${item.firstName}-${item.lastName}`}
                            >

                                <div className="news-box-items">

                                    <div className="thumb">

                                        <img
                                            src={item.image}
                                            alt={`${item.firstName} ${item.lastName}`}
                                        />

                                        <img
                                            src={item.image}
                                            alt={`${item.firstName} ${item.lastName}`}
                                        />

                                    </div>


                                    <div className="content">

                                        <ul>

                                            <li>
                                                {item.firstName}{" "}
                                                <b>{item.lastName}</b>
                                            </li>

                                            <li>
                                                {item.role}
                                            </li>

                                        </ul>


                                        <h3 className="title">

                                            <Link to="/news-details">
                                                {item.title}
                                            </Link>

                                        </h3>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </div>
    );
};

export default About;