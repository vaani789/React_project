import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    // Home page par menu white, baaki pages par black
    const isHomePage = location.pathname === "/";
    const menuColor = isHomePage ? "#fff" : "#000";

    return (
        <>
            {/* Header Section Start */}
            <header
                className="header-section header-1"
                id="sticky-header"
            >
                <div className="header-main">
                    <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">

                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img
                                src="assets/img/logo/black-logo.svg"
                                alt="logo"
                            />
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mx-auto mb-lg-0">

                                {/* Home */}
                                <li className="nav-item menu-thumb">
                                    <Link
                                        className="nav-link"
                                        to="/"
                                        style={{ color: menuColor }}
                                    >
                                        Home
                                    </Link>
                                </li>

                                {/* About */}
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/about"
                                        style={{ color: menuColor }}
                                    >
                                        About
                                    </Link>
                                </li>

                                {/* Services */}
                                <li className="has-dropdown nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/services"
                                        style={{ color: menuColor }}
                                    >
                                        Services{" "}
                                        <i className="fas fa-chevron-down"></i>
                                    </Link>

                                    <ul className="sub-menu list-unstyled">
                                        <li className="has-dropdown">

                                            <Link
                                                className="nav-link"
                                                to="/services"
                                            >
                                                Services Overview
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/clinicaldelivery"
                                            >
                                                Clinical Delivery
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/clinicalnetwork"
                                            >
                                                Clinical Network
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/commercialmodel"
                                            >
                                                Commercial Model
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/commercialtalent"
                                            >
                                                Commercial Talent
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/clinicalleadership"
                                            >
                                                Clinical Leadership
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/governance"
                                            >
                                                Governance & Compliance
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/aihealth"
                                            >
                                                AI in Health
                                            </Link>

                                        </li>
                                    </ul>
                                </li>

                                {/* Join Us */}
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/joinus"
                                        style={{ color: menuColor }}
                                    >
                                        Join Us
                                    </Link>
                                </li>

                                {/* Resources */}
                                <li className="has-dropdown nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/insight"
                                        style={{ color: menuColor }}
                                    >
                                        Resources{" "}
                                        <i className="fas fa-chevron-down"></i>
                                    </Link>

                                    <ul className="sub-menu list-unstyled">
                                        <li className="has-dropdown">

                                            <Link
                                                className="nav-link"
                                                to="/executivesearch"
                                            >
                                                Executive Search
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/casestudies"
                                            >
                                                Case Studies
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/insight"
                                            >
                                                Insights
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/community"
                                            >
                                                Community
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/capacityplanner"
                                            >
                                                Capacity Planner
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/findjob"
                                            >
                                                Find a Job
                                            </Link>

                                            <Link
                                                className="nav-link"
                                                to="/joinbank"
                                            >
                                                Join The Bank
                                            </Link>

                                        </li>
                                    </ul>
                                </li>

                                {/* Legal */}
                                <li className="nav-item has-dropdown">
                                    <Link
                                        className="nav-link"
                                        to="/privacypolicy"
                                        style={{ color: menuColor }}
                                    >
                                        Legal{" "}
                                        <i className="fas fa-chevron-down"></i>
                                    </Link>

                                    <ul className="sub-menu list-unstyled">
                                        <li>
                                            <Link
                                                className="nav-link"
                                                to="/privacypolicy"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Contact */}
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/contact"
                                        style={{ color: menuColor }}
                                    >
                                        Contact
                                    </Link>
                                </li>

                            </ul>

                            {/* Right Menu */}
                            <div className="menu-right-info">

                                <Link
                                    className="theme-btn-main style-2"
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

                                {/* Mobile Logo */}
                                <div className="logo">
                                    <Link to="/">
                                        <img
                                            src="assets/img/logo/black-logo.svg"
                                            alt="logo"
                                        />
                                    </Link>
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

                        {/* Mobile Menu Logo */}
                        <div className="logo">
                            <Link to="/">
                                <img
                                    src="assets/img/logo/white-logo.svg"
                                    alt="logo"
                                />
                            </Link>
                        </div>

                        <div className="close-mobile-menu">
                            <i className="fas fa-times"></i>
                        </div>

                        <div className="menu-body">
                            <div className="menu-list">

                                <ul className="list-unstyled">

                                    {/* Home */}
                                    <li className="sub-mobile-menu">
                                        <Link
                                            className="nav-link"
                                            to="/"
                                            style={{ color: menuColor }}
                                        >
                                            Home
                                        </Link>
                                    </li>

                                    {/* About */}
                                    <li>
                                        <Link
                                            className="nav-link"
                                            to="/about"
                                            style={{ color: menuColor }}
                                        >
                                            About
                                        </Link>
                                    </li>

                                    {/* Services */}
                                    <li className="sub-mobile-menu">
                                        <Link to="/services">
                                            Services
                                            <i className="fas fa-chevron-down float-end"></i>
                                        </Link>

                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to="/services">
                                                    Services Overview
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/clinicaldelivery">
                                                    Clinical Delivery
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/clinicalnetwork">
                                                    Clinical Network
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/commercialmodel">
                                                    Commercial Model
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/commercialtalent">
                                                    Commercial Talent
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/clinicalleadership">
                                                    Clinical Leadership
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/governance">
                                                    Governance & Compliance
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/aihealth">
                                                    AI in Health
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Join Us */}
                                    <li>
                                        <Link to="/joinus">
                                            Join Us
                                        </Link>
                                    </li>

                                    {/* Resources */}
                                    <li className="sub-mobile-menu has-dropdown">
                                        <Link to="/insight">
                                            Resources
                                            <i className="fas fa-chevron-down float-end"></i>
                                        </Link>

                                        <ul className="list-unstyled">

                                            <li>
                                                <Link to="/executivesearch">
                                                    Executive Search
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/casestudies">
                                                    Case Studies
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/insight">
                                                    Insights
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/community">
                                                    Community
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/capacityplanner">
                                                    Capacity Planner
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/findjob">
                                                    Find a Job
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/joinbank">
                                                    Join The Bank
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>

                                    {/* Legal */}
                                    <li className="sub-mobile-menu">
                                        <Link to="/privacypolicy">
                                            Legal
                                            <i className="fas fa-chevron-down float-end"></i>
                                        </Link>

                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to="/privacypolicy">
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Contact */}
                                    <li>
                                        <Link to="/contact">
                                            Contact
                                        </Link>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Mobile Contact Info */}
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

                            {/* Social Icons */}
                            <div className="social-icon-list">

                                <span className="follow-title">
                                    Follow us:
                                </span>

                                <div className="social-icon d-flex align-items-center">

                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>

                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Twitter"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>

                                    <a
                                        href="https://vimeo.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Vimeo"
                                    >
                                        <i className="fab fa-vimeo-v"></i>
                                    </a>

                                    <a
                                        href="https://www.pinterest.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Pinterest"
                                    >
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