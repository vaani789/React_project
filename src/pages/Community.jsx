import React from "react";
import { Link } from "react-router-dom";

const Community = () => {
    const features = [
        {
            icon: "assets/img/home-2/feature-icon-1.svg",
            text: "Advanced practice and non-medical prescribing are relatively young disciplines",
            delay: ".3s",
        },
        {
            icon: "assets/img/home-2/feature-icon-2.svg",
            text: "Standards are still settling, job titles are used inconsistently, and a lot of clinicians are navigating routes that nobody has mapped for them",
            delay: ".5s",
        },
        {
            icon: "assets/img/home-2/feature-icon-3.svg",
            text: "Peer conversation genuinely helps, and there is not enough of it.",
            delay: ".7s",
        },
    ];

    const communityAudience = [
        {
            title: "Collaboration",
            text: "Pharmacists across community, PCN, general practice and hospital settings",
            icon: "assets/img/home-2/service-icon-1.svg",
            delay: ".3s",
        },
        {
            title: "Integration",
            text: "Advanced clinical practitioners and trainee ACPs",
            icon: "assets/img/home-2/service-icon-2.svg",
            delay: ".5s",
            active: true,
        },
        {
            title: "Reporting",
            text: "Non-medical prescribers from any professional background",
            icon: "assets/img/home-2/service-icon-3.svg",
            delay: ".7s",
        },
        {
            title: "Management",
            text: "Nurses and allied health professionals developing their scope",
            icon: "assets/img/home-2/service-icon-4.svg",
            delay: ".3s",
        },
        {
            title: "Tracking",
            text: "Clinical leads and managers building multidisciplinary teams",
            icon: "assets/img/home-2/service-icon-5.svg",
            delay: ".5s",
        },
    ];

    const communityOffers = [
        {
            number: "01.",
            title: "Peer conversation that is actually clinical",
            description:
                "Prescribing scope, supervision arrangements, portfolio evidence, the practical realities of working at advanced level. Discussion between people doing the work, not commentary from outside.",
            image: "assets/img/home-2/project-1.jpg",
        },
        {
            number: "02.",
            title: (
                <>
                    Career guidance without <br /> a sales agenda
                </>
            ),
            description:
                "Questions we answer regularly: is an independent prescribing qualification worth it, what does a move from community into a PCN really involve, how do you find a designated prescribing practitioner, what does an advanced practice route require in reality.",
            image: "assets/img/home-2/project-2.jpg",
        },
        {
            number: "03.",
            title: "Pay transparency",
            description:
                "Clinicians are consistently underinformed about what their skills are worth. We share what we see across the market so people negotiate from information rather than hope.",
            image: "assets/img/home-2/project-3.jpg",
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

                {/* Search Start */}
                <div className="search-popup">
                    <div className="search-popup__overlay search-toggler"></div>

                    <div className="search-popup__content">
                        <form
                            role="search"
                            method="get"
                            className="search-popup__form"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="text"
                                id="search"
                                name="search"
                                placeholder="Search Here..."
                            />

                            <button
                                type="submit"
                                aria-label="Search submit"
                                className="search-btn"
                            >
                                <span>
                                    <i className="fa-regular fa-magnifying-glass"></i>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="hero-section-2 fix position-relative">

                    <div className="hero-2">

                        <div className="swiper hero-slider-2">

                            <div className="swiper-wrapper">

                                <div className="swiper-slide">

                                    <div className="hero-slider-items">

                                        <div className="item-img position-absolute">
                                            <img
                                                src="assets/img/home-2/hero-slider-2.jpg"
                                                alt="Community"
                                            />
                                        </div>

                                        <div className="container">

                                            <div className="hero-content">

                                                <span className="hero-sub">
                                                    Manage Tasks. Master Time
                                                </span>

                                                <h1 className="hero-title">
                                                    A network run by clinicians,
                                                    for clinicians.

                                                    <span className="star">
                                                        <img
                                                            src="assets/img/home-2/star2.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </h1>

                                                <p>
                                                    Recruitment agencies talk about
                                                    their "community" and usually
                                                    mean a mailing list. Ours is
                                                    intended to be useful whether or
                                                    not you ever apply for a job
                                                    through us.
                                                </p>

                                                <div className="hero-button">

                                                    <Link
                                                        className="theme-btn-main style-2"
                                                        to="/case-studies"
                                                    >
                                                        <span className="theme-btn-arrow-left">
                                                            <i className="fa-solid fa-arrow-up-right"></i>
                                                        </span>

                                                        <span className="theme-btn">
                                                            Explore our work
                                                        </span>

                                                        <span className="theme-btn-arrow-right">
                                                            <i className="fa-solid fa-arrow-up-right"></i>
                                                        </span>
                                                    </Link>

                                                    <Link
                                                        className="theme-btn-main style-2 theme-2"
                                                        to="/contact"
                                                    >
                                                        <span className="theme-btn-arrow-left">
                                                            <i className="fa-solid fa-arrow-up-right"></i>
                                                        </span>

                                                        <span className="theme-btn">
                                                            Get started
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

                        </div>

                    </div>

                </section>

                {/* Feature Section */}
                <section className="feature-section-2 section-padding">

                    <div className="light-shape d-none d-xl-block">
                        <img
                            src="assets/img/home-2/light-shape1.png"
                            alt=""
                        />
                    </div>

                    <div className="light-shape2 d-none d-xl-block">
                        <img
                            src="assets/img/home-2/light-shape2.png"
                            alt=""
                        />
                    </div>

                    <div className="container">

                        <div className="section-title style-2 text-center">

                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                <span className="sub-title">
                                    Fast, Reliable, Scalable
                                </span>
                            </div>

                            <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                A network run by clinicians, <br />
                                for clinicians.
                            </h2>

                        </div>

                        <div className="row">

                            {features.map((feature, index) => (
                                <div
                                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay={feature.delay}
                                    key={index}
                                >
                                    <div className="feature-box-items-2">

                                        <div className="icon">
                                            <img
                                                src={feature.icon}
                                                alt=""
                                            />
                                        </div>

                                        <div className="content">
                                            <p>{feature.text}</p>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* Who It Is For */}
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
                                    Who it is for
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

                            {communityAudience.map((item, index) => (
                                <div
                                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay={item.delay}
                                    key={index}
                                >

                                    <div
                                        className={`service-card-items-two ${
                                            item.active ? "active" : ""
                                        }`}
                                    >

                                        <div className="content">

                                            <h3 className="title">
                                                {item.title}
                                            </h3>

                                            <p>{item.text}</p>

                                        </div>

                                        <div className="icon-items">

                                            <div className="icon">
                                                <img
                                                    src={item.icon}
                                                    alt=""
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

                {/* Community Offers */}
                <section className="project-section section-padding oit-panel-pin-area">

                    <div className="container">

                        <div className="section-title style-2 text-center">

                            <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                <span className="sub-title">
                                    Building Digital Excellence
                                </span>
                            </div>

                            <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                What the community <br />
                                offers.
                            </h2>

                        </div>

                        <div className="project-wrapper">

                            {communityOffers.map((item, index) => (
                                <div
                                    className="project-box-items oit-panel-pin"
                                    key={index}
                                >

                                    <div className="content">

                                        <span className="number">
                                            {item.number}
                                        </span>

                                        <h3 className="title">
                                            <Link to="/project-details">
                                                {item.title}
                                            </Link>
                                        </h3>

                                        <p>{item.description}</p>

                                        <Link
                                            to="/projects"
                                            className="news-btn"
                                        >
                                            <span className="text">

                                                <span className="text-default">
                                                    Explore More{" "}
                                                    <i className="fa-regular fa-arrow-up-right"></i>
                                                </span>

                                                <span className="text-hover">
                                                    Explore More{" "}
                                                    <i className="fa-regular fa-arrow-up-right"></i>
                                                </span>

                                            </span>
                                        </Link>

                                    </div>

                                    <div className="thumb">

                                        <img
                                            src={item.image}
                                            alt={typeof item.title === "string" ? item.title : "Community"}
                                        />

                                        <img
                                            src={item.image}
                                            alt={typeof item.title === "string" ? item.title : "Community"}
                                        />

                                    </div>

                                </div>
                            ))}

                        </div>

                        <div className="project-button text-center mt-5">

                            <Link
                                className="theme-btn-main style-2"
                                to="/projects"
                            >
                                <span className="theme-btn-arrow-left">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>

                                <span className="theme-btn">
                                    More works
                                </span>

                                <span className="theme-btn-arrow-right">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>

                        </div>

                    </div>

                </section>

            </div>
        </>
    );
};

export default Community;