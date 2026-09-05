import React from "react";
import { Link } from "react-router-dom";

const ExecutiveSearch = () => {
    const teamMembers = [
        {
            image: "assets/img/home-2/team-1.jpg",
            name: "Shikhon Islam",
            role: "Brand Manager",
            delay: ".2s",
        },
        {
            image: "assets/img/home-2/team-2.jpg",
            name: "Esther Howard",
            role: "Co. founder",
            delay: ".4s",
        },
        {
            image: "assets/img/home-2/team-3.jpg",
            name: "Theresa Webb",
            role: "UI-UX Designer",
            delay: ".6s",
        },
        {
            image: "assets/img/home-2/team-4.jpg",
            name: "Messle Qualam",
            role: "UI-UX Designer",
            delay: ".8s",
        },
    ];

    const appointments = [
        {
            icon: "assets/img/inner-page/icon/01.svg",
            text: "Medical directors and clinical directors",
            delay: ".3s",
        },
        {
            icon: "assets/img/inner-page/icon/02.svg",
            text: "Superintendent pharmacists and directors of pharmacy",
            delay: ".5s",
        },
        {
            icon: "assets/img/inner-page/icon/03.svg",
            text: "Directors of nursing and heads of advanced practice",
            delay: ".5s",
        },
        {
            icon: "assets/img/inner-page/icon/03.svg",
            text: "Chief operating officers within clinical services",
            delay: ".5s",
        },
        {
            icon: "assets/img/inner-page/icon/03.svg",
            text: "Non-executive and advisory clinical appointments",
            delay: ".5s",
        },
    ];

    const supportItems = [
        "Deep market intelligence",
        "Extensive personal networks",
        "Bespoke AI-powered research",
        "Comprehensive candidate assessment",
        "Confidential market mapping",
    ];

    const faqItems = [
        {
            number: "01.",
            title: "Engagement",
            text: "A proper briefing with your board or clinical leadership — the mandate, the constraints, the reason the role exists now, and what success looks like at twelve months.",
            active: true,
            delay: "",
        },
        {
            number: "02.",
            title: "Market mapping",
            text: "A structured map of who is doing this work, where, and at what level. You see the map, not just the shortlist.",
            delay: ".2s",
        },
        {
            number: "03.",
            title: "Discreet approach",
            text: "Confidential contact with individuals in post. No exposure for them, and none for you if the search is sensitive.",
            delay: ".4s",
        },
        {
            number: "04.",
            title: "Assessment",
            text: "Clinical credibility, governance record, leadership history and motivation, assessed by someone who has practised.",
            delay: ".6s",
        },
        {
            number: "05.",
            title: "Offer and onboarding",
            text: "Support through package negotiation, notice periods and the first months in post.",
            delay: ".8s",
        },
    ];

    const people = [
        {
            image: "assets/img/home-2/news-01.jpg",
            name: "Tyler",
            surname: "Denbigh",
            role: "Founder · Commercial",
            title: "Commercial talent and growth strategy for high-growth health.",
            delay: ".3s",
        },
        {
            image: "assets/img/home-2/news-02.jpg",
            name: "Madison",
            surname: "Fox",
            role: "Clinical Delivery",
            title: "Clinical workforce across regulated health services and new verticals.",
            delay: ".5s",
        },
        {
            image: "assets/img/home-2/news-03.jpg",
            name: "Danny",
            surname: "Davies",
            role: "Clinical Leadership",
            title: "Medical and clinical directors for early-stage and scaling health businesses.",
            delay: ".7s",
        },
        {
            image: "assets/img/home-2/news-01.jpg",
            name: "Dan",
            surname: "Seal",
            role: "Head of Public Sector",
            title: "NHS and public sector workforce, contracts and partnerships.",
            delay: ".3s",
        },
        {
            image: "assets/img/home-2/news-02.jpg",
            name: "James",
            surname: "Doyle",
            role: "Non-Executive Director",
            title: "Board-level guidance, governance and strategic direction.",
            delay: ".5s",
        },
        {
            image: "assets/img/home-2/news-03.jpg",
            name: "Chris",
            surname: "Hampson",
            role: "Clinical Delivery Support",
            title: "Operational support across clinical workforce delivery and onboarding.",
            delay: ".7s",
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

                {/* Back To Top */}
                <button id="back-top" className="back-to-top" type="button">
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

                                    <li>Executive Search</li>
                                </ul>

                                <h1
                                    className="wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    The appointments that set the direction.
                                </h1>

                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay=".7s"
                                >
                                    Executive appointments in healthcare are made
                                    from a small pool of people who are almost
                                    never applying for jobs. Advertising does not
                                    reach them. Approaching them requires
                                    credibility they will recognise.
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
                                            alt="Executive Search"
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
                                            Appointments we search for
                                        </h3>
                                    </div>

                                    <div className="feature-image">
                                        <img
                                            src="assets/img/inner-page/feature-1.jpg"
                                            alt="Appointments"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-7">
                                    <div className="feature-box-items">
                                        {appointments.map((item, index) => (
                                            <div
                                                className={`box ${
                                                    index === appointments.length - 1
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
                            {supportItems.map((item, index) => (
                                <div className="support-card" key={index}>
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

                                {teamMembers.map((member) => (
                                    <div
                                        className="swiper-slide wow fadeInUp"
                                        data-wow-delay={member.delay}
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

                                                <div className="social-icon d-flex align-items-center">
                                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>

                                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>

                                                    <a href="https://vimeo.com/" target="_blank" rel="noreferrer">
                                                        <i className="fab fa-vimeo-v"></i>
                                                    </a>

                                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
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

                {/* FAQ Section */}
                <section className="faq-section fix section-padding pb-0">
                    <div className="container">

                        <div className="section-title-area align-items-center">

                            <div className="section-title mb-0">

                                <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <span className="sub-title">
                                        <b>Saas</b> Simple, Quick, Helpful
                                    </span>
                                </div>

                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    How a search runs
                                </h2>

                            </div>

                            <Link
                                className="theme-btn-main style-2"
                                to="/contact"
                            >
                                <span className="theme-btn-arrow-left">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>

                                <span className="theme-btn">
                                    Contact us
                                </span>

                                <span className="theme-btn-arrow-right">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>

                        </div>

                        <div className="faq-items-1">
                            <ul className="accordion-box">

                                {faqItems.map((item) => (
                                    <li
                                        className={`accordion block ${
                                            item.active
                                                ? "active-block"
                                                : "wow fadeInUp"
                                        }`}
                                        data-wow-delay={item.delay}
                                        key={item.number}
                                    >
                                        <div
                                            className={`acc-btn ${
                                                item.active ? "active" : ""
                                            }`}
                                        >
                                            <div className="number">
                                                {item.number}
                                            </div>

                                            {item.title}

                                            <div className="icon fa-regular fa-plus"></div>
                                        </div>

                                        <div
                                            className={`acc-content ${
                                                item.active ? "current" : ""
                                            }`}
                                        >
                                            <div className="content">
                                                <div className="text">
                                                    {item.text}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>

                    </div>
                </section>

                {/* News / People Section */}
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
                                    People who've done <br />
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

                            {people.map((person) => (
                                <div
                                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay={person.delay}
                                    key={person.name + person.surname}
                                >
                                    <div className="news-box-items">

                                        <div className="thumb">
                                            <img
                                                src={person.image}
                                                alt={person.title}
                                            />

                                            <img
                                                src={person.image}
                                                alt={person.title}
                                            />
                                        </div>

                                        <div className="content">

                                            <ul>
                                                <li>
                                                    {person.name}{" "}
                                                    <b>{person.surname}</b>
                                                </li>

                                                <li>
                                                    {person.role}
                                                </li>
                                            </ul>

                                            <h3 className="title">
                                                <Link to="/news-details">
                                                    {person.title}
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

export default ExecutiveSearch;
