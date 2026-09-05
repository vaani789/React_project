import React, { useState } from "react";
import { Link } from "react-router-dom";

const Casestudies = () => {
    const [activeType, setActiveType] = useState("hiring");

    const caseStudyPoints = [
        {
            text: "A hard-to-fill prescriber role that had been open for months elsewhere",
            icon: "assets/img/inner-page/icon/01.svg",
            delay: ".3s",
        },
        {
            text: "A full clinical team built for a new or expanding service",
            icon: "assets/img/inner-page/icon/02.svg",
            delay: ".5s",
        },
        {
            text: "A senior clinical leadership appointment",
            icon: "assets/img/inner-page/icon/01.svg",
            delay: ".3s",
        },
        {
            text: "A brief we advised against, and what we recommended instead — genuinely persuasive, and almost nobody publishes these",
            icon: "assets/img/inner-page/icon/02.svg",
            delay: ".3s",
        },
        {
            text: "Rapid locum cover that protected a pathway during unplanned absence",
            icon: "assets/img/inner-page/icon/03.svg",
            delay: ".5s",
        },
    ];

    const supportedItems = [
        "Deep market intelligence",
        "Extensive personal networks",
        "Bespoke AI-powered research",
        "Comprehensive candidate assessment",
        "Confidential market mapping",
    ];

    const caseStudyTemplate = [
        {
            category: "Client",
            title: "Named with consent, or anonymised by type and region",
            image: "assets/img/home-2/news-01.jpg",
        },
        {
            category: "The challenge",
            title: "What was not working, and what it was costing clinically",
            image: "assets/img/home-2/news-02.jpg",
        },
        {
            category: "What we did",
            title: "The approach, including anything that had to change in the brief",
            image: "assets/img/home-2/news-03.jpg",
        },
        {
            category: "The outcome",
            title: "Roles filled, timescales, retention at six or twelve months",
            image: "assets/img/home-2/news-01.jpg",
        },
        {
            category: "What was hard",
            title: "The honest constraint — this is what makes it credible",
            image: "assets/img/home-2/news-02.jpg",
        },
        {
            category: "Client comment",
            title: "A short quote, with written permission on file",
            image: "assets/img/home-2/news-03.jpg",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Case study contact form submitted");
    };

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

                                    <li>Case Studies</li>
                                </ul>

                                <h1
                                    className="wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    The work, described <br />
                                    honestly.
                                </h1>

                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay=".7s"
                                >
                                    Recruitment case studies are usually written
                                    to sound impressive rather than to be
                                    informative. Ours set out what the service
                                    needed, what we did, what it produced and
                                    what was difficult — because the difficult
                                    part is the bit worth reading.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <section className="about-section-4 section-padding fix pb-0">
                    <div className="container">
                        <div className="about-wrapper-4">
                            <div className="row g-4">

                                <div className="col-lg-8">
                                    <div className="about-image">
                                        <img
                                            src="assets/img/inner-page/about.jpg"
                                            alt="Case studies"
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
                                                <span className="count">
                                                    25
                                                </span>
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

                {/* Feature Section */}
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
                                            Case studies worth capturing first
                                        </h3>

                                    </div>

                                    <div className="feature-image">
                                        <img
                                            src="assets/img/inner-page/feature-1.jpg"
                                            alt="Case study"
                                        />
                                    </div>

                                </div>

                                <div className="col-lg-7">
                                    <div className="feature-box-items">

                                        {caseStudyPoints.map((item, index) => (
                                            <div
                                                className={`box ${
                                                    index === caseStudyPoints.length - 1
                                                        ? "mb-0 "
                                                        : ""
                                                }wow fadeInRight`}
                                                data-wow-delay={item.delay}
                                                key={index}
                                            >
                                                <div className="icon">
                                                    <img
                                                        src={item.icon}
                                                        alt=""
                                                    />
                                                </div>

                                                <div className="content">
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>

                {/* Supported Section */}
                <section className="supported-section">
                    <div className="supported-container">

                        <p className="section-label">
                            EVERY SEARCH IS SUPPORTED BY
                        </p>

                        <div className="support-grid">

                            {supportedItems.map((item, index) => (
                                <div
                                    className="support-card"
                                    key={index}
                                >
                                    {item}
                                </div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* Team Section */}
                <section
                    className="team-section fix section-padding hero-ptb image-distortion p-relative z-index-1"
                    style={{
                        backgroundImage:
                            "url('assets/img/home-2/team-bg.jpg')",
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
                                    The Brains Behind <br />
                                    Our Platform
                                </h2>

                            </div>

                            <div className="array-button">

                                <button
                                    type="button"
                                    className="array-prev"
                                    aria-label="Previous team"
                                >
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>

                                <button
                                    type="button"
                                    className="array-next"
                                    aria-label="Next team"
                                >
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>

                            </div>

                        </div>

                        <div className="swiper team-slider">

                            <div className="swiper-wrapper">

                                {[
                                    {
                                        image: "team-1.jpg",
                                        name: "Shikhon Islam",
                                        role: "Brand Manager",
                                    },
                                    {
                                        image: "team-2.jpg",
                                        name: "Esther Howard",
                                        role: "Co. founder",
                                    },
                                    {
                                        image: "team-3.jpg",
                                        name: "Theresa Webb",
                                        role: "UI-UX Designer",
                                    },
                                    {
                                        image: "team-4.jpg",
                                        name: "Messle Qualam",
                                        role: "UI-UX Designer",
                                    },
                                ].map((member, index) => (
                                    <div
                                        className="swiper-slide wow fadeInUp"
                                        data-wow-delay={`.${2 + index * 2}s`}
                                        key={index}
                                    >

                                        <div className="team-box-items">

                                            <div className="thumb">

                                                <img
                                                    src={`assets/img/home-2/${member.image}`}
                                                    alt={member.name}
                                                />

                                                <img
                                                    src={`assets/img/home-2/${member.image}`}
                                                    alt={member.name}
                                                />

                                                <div className="social-icon d-flex align-items-center">

                                                    <a
                                                        href="https://www.facebook.com/"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label="Facebook"
                                                    >
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>

                                                    <a
                                                        href="https://twitter.com/"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label="Twitter"
                                                    >
                                                        <i className="fab fa-twitter"></i>
                                                    </a>

                                                    <a
                                                        href="https://vimeo.com/"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label="Vimeo"
                                                    >
                                                        <i className="fab fa-vimeo-v"></i>
                                                    </a>

                                                    <a
                                                        href="https://www.pinterest.com/"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label="Pinterest"
                                                    >
                                                        <i className="fab fa-pinterest-p"></i>
                                                    </a>

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

                {/* Contact Section */}
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
                                If you're serious about growth, let's have a
                                proper conversation. Scale Health asks for at
                                least 30 minutes so we can understand your
                                business and recommend the right approach.
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
                                    Scale Health is London-based, partnering
                                    with independent healthcare providers
                                    across the UK and Europe.
                                </p>

                            </div>

                            <div className="about-info-block">

                                <span>RESPONSE TIME</span>

                                <p>
                                    One working day, from a person who has read
                                    your brief.
                                </p>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="about-form-card">

                            {/* Toggle */}
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

                            {/* Form */}
                            <form onSubmit={handleSubmit}>

                                <div className="about-form-row">

                                    <div className="about-form-group">

                                        <label htmlFor="fullName">
                                            FULL NAME
                                        </label>

                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            required
                                        />

                                    </div>

                                    <div className="about-form-group">

                                        <label htmlFor="organisation">
                                            ORGANISATION
                                        </label>

                                        <input
                                            id="organisation"
                                            name="organisation"
                                            type="text"
                                        />

                                    </div>

                                </div>

                                <div className="about-form-group">

                                    <label htmlFor="email">
                                        EMAIL
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
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
                                        name="role"
                                        type="text"
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

                {/* News / Case Study Template Section */}
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
                                    Template to follow for <br />
                                    each case study
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

                            {caseStudyTemplate.map((item, index) => (
                                <div
                                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay={`.${3 + (index % 3) * 2}s`}
                                    key={index}
                                >

                                    <div className="news-box-items">

                                        <div className="thumb">

                                            <img
                                                src={item.image}
                                                alt={item.category}
                                            />

                                            <img
                                                src={item.image}
                                                alt={item.category}
                                            />

                                        </div>

                                        <div className="content">

                                            <ul>
                                                <li>
                                                    {item.category}
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
        </>
    );
};

export default Casestudies;
