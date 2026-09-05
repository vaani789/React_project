import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    // Home page par menu white, baaki pages par black
    const isHomePage = location.pathname === "/";
    const menuColor = isHomePage ? "#fff" : "#000";

    return (
        <>
        {/* <!-- Header Section Start --> */}
        
        <header className="header-section header-1" id="sticky-header">
            <div className="header-main">
                <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
                    <a className="navbar-brand" href="/">
                        <img src="assets/img/logo/black-logo.svg" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-lg-0">
                            <li className="nav-item menu-thumb">
                                <Link className="nav-link active"  to="/"  style={{ color: menuColor }} >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="/about"
                                    style={{ color: menuColor }}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="has-dropdown nav-item">
                                <a className="nav-link" href="#" style={{ color: menuColor }}>
                                    Services <i className="fas fa-chevron-down"></i>
                                </a>
                                <ul className="sub-menu list-unstyled">
                                    <li className="has-dropdown">
                                        <Link
                                            className="nav-link active"
                                            to="/services">
                                            Services OverView
                                        </Link>
                                        <Link
                                            className="nav-link active"
                                            to="/clinicaldelivery"
                                        >
                                            Clinical Delivery
                                        </Link>
                                        <Link
                                            className="nav-link active"
                                            to="/clinicalnetwork"
                                        >
                                            Clinical Network
                                        </Link>
                                        <Link
                                            className="nav-link active"
                                            to="/commercialmodel"
                                        >
                                            Commercial Model
                                        </Link>
                                        <Link
                                            className="nav-link active"
                                            to="/commercialtalent"
                                        >
                                            Commercial Talent
                                        </Link>
                                        <Link className="nav-link active" to="/clinicalleadership">
                                            Clinical Leadership
                                        </Link>
                                        <Link className="nav-link active" to="/governance">
                                            Governance & Compliance
                                        </Link>
                                        <Link className="nav-link active" to="/aihealth" >
                                            AI in Health
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="/joinus"
                                    style={{ color: menuColor }}
                                >
                                    Join Us
                                </Link>
                            </li>
                            <li className="has-dropdown nav-item">
                                <a className="nav-link" href="#" style={{ color: menuColor }} >
                                    Resources <i className="fas fa-chevron-down"></i>
                                </a>
                                <ul className="sub-menu list-unstyled">
                                    <li className="has-dropdown">
                                        <Link
                                            className="nav-link active"
                                            to="/executivesearch"
                                        >
                                            ExecutiveSearch
                                        </Link>
                                        <Link
                                            className="nav-link active"
                                            to="/casestudies"
                                        >
                                            Case Studies
                                        </Link>
                                        <Link
                                            className="nav-link active"
                                            to="/insight"
                                        >
                                            Insights
                                        </Link>
                                        <Link
                                            className="nav-link active"
                                            to="/community"
                                        >
                                            Community
                                        </Link>
                                        <Link
                                            className="nav-link active"
                                            to="/capacityplanner"
                                        >
                                            Capacity Planner
                                        </Link>
                                        <Link
                                            className="nav-link active"
                                            to="/findjob"
                                        >
                                            Find a Job
                                        </Link>
                                        <Link
                                            className="nav-link active"
                                            to="/joinbank"
                                        >
                                            Join The Bank
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#"
                                    style={{ color: menuColor }}
                                >
                                    Legal <i className="fas fa-chevron-down"></i>
                                </a>

                                <ul className="sub-menu list-unstyled">
                                    <Link
                                        className="nav-link active"
                                        to="/privacypolicy"
                                    >
                                        Privacy Policy
                                    </Link>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="/contact"
                                    style={{ color: menuColor }}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <div className="menu-right-info">
                            <a className="theme-btn-main style-2" href="contact.html" >
                                <span className="theme-btn-arrow-left">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                                <span className="theme-btn">
                                    Get started
                                </span>
                                <span className="theme-btn-arrow-right">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                            </a>
                            <div className="sidebar__toggle offcanvas-btn d-xl-none my-auto">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu-area d-block d-xl-none">
                <div className="container">
                    <div className="mobile-topbar">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="logo">
                                <a href="/">
                                    <img
                                        src="assets/img/logo/black-logo.svg"
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <div className="menu-search d-flex align-items-center gap-4">
                                <div className="bars">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-overlay"></div>
                <div className="mobile-menu-main">
                    <div className="logo">
                        <a href="/">
                            <img
                                src="assets/img/logo/white-logo.svg"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="close-mobile-menu">
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="menu-body">
                        <div className="menu-list">
                            <ul className="list-unstyled">
                                <li className="sub-mobile-menu">
                                    <Link className="nav-link active"  to="/"  style={{ color: menuColor }} >Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-link active" to="/about" style={{ color: menuColor }}>About</Link>
                                </li>
                                <li className="sub-mobile-menu">
                                    <a href="#">
                                        Services
                                        <i className="fas fa-chevron-down float-end"></i>
                                    </a>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="/services">
                                                Services Overview
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/clinicaldelivery">
                                                Clinical Delivery
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/clinicalnetwork">
                                                Clinical Network
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/commercialmodel">
                                                Commercial Model
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/commercialtalent">
                                                Commercial Talent
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/clinicalleadership">
                                                Clinical Leadership
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/governance">
                                                Governance & Compliance
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/aihealth">
                                                AI in Health
                                            </a>
                                        </li>

                                    </ul>
                                </li>
                                <li>
                                    <a href="/joinus">
                                        Join Us
                                    </a>
                                </li>
                                <li className="sub-mobile-menu has-dropdown">
                                    <a href="#">
                                        Resources
                                        <i className="fas fa-chevron-down float-end"></i>
                                    </a>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="/executivesearch">
                                                ExecutiveSearch
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/casestudies">
                                                Case Studies
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/insight">
                                                Insights
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/community">
                                                Community
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/capacityplanner">
                                                Capacity Planner
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/findjob">
                                                Find a Job
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/joinbank">
                                                Join The Bank
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-mobile-menu">
                                    <a href="#">
                                        Legal
                                        <i className="fas fa-chevron-down float-end"></i>
                                    </a>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="/privacypolicy">
                                                Privacy Policy
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="off-contact-area">
                        <div className="off-contact-info">

                            <span className="info-title">
                                Contact Info
                            </span>
                            <div className="contact-details">
                                <span className="sub-info">
                                    Phone
                                </span>
                                <p>
                                    <a href="tel:+18005550123">
                                        +1 (800) 555-0123
                                    </a>
                                </p>

                            </div>

                            <div className="contact-details">

                                <span className="sub-info">
                                    Email
                                </span>
                                <p>
                                    <a href="mailto:hello@Synex.com">
                                        hello@Synex.com
                                    </a>
                                </p>
                            </div>
                            <div className="contact-details">
                                <span className="sub-info">
                                    Location
                                </span>
                                <p>
                                    374 William S Canning Blvd USA
                                </p>
                            </div>
                        </div>
                        <div className="social-icon-list">
                            <span className="follow-title">
                                Follow us:
                            </span>
                            <div className="social-icon d-flex align-items-center">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-vimeo-v"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;