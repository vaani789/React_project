import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* Footer Section Start */}
            <footer className="footer-section fix section-padding">
                <div className="container">
                    <div className="footer-top-wrapper">
                        <h2 className="title wa_title_spilt_1">
                            Subscribe for <br /> Smarter Decisions.
                        </h2>

                        <div
                            className="right-content wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Email address*"
                                    aria-label="Email address"
                                />

                                <div className="line"></div>

                                <button
                                    className="email-btn"
                                    type="submit"
                                    aria-label="Subscribe"
                                >
                                    <img
                                        src="assets/img/home-1/mail.png"
                                        alt="Subscribe"
                                    />
                                </button>
                            </form>

                            <label className="sq-checkbox">
                                <input type="checkbox" />
                                <span
                                    className="box"
                                    aria-hidden="true"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="check"
                                        focusable="false"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M5 12l4 4L19 6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>

                                <span className="label-text">
                                    I agree to the privacy policy.
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="footer-area">
                    <div className="container">
                        <div className="footer-widget-wrapper">
                            <div className="row justify-content-between">

                                {/* Logo / About */}
                                <div className="col-xl-4 col-lg-5 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="footer-widget-items">
                                        <div className="widget-head">
                                            <Link to="/" className="footer-logo">
                                                <img
                                                    src="assets/img/home-1/footer-logo.svg"
                                                    alt="Vero"
                                                />
                                            </Link>
                                        </div>

                                        <div className="footer-content">
                                            <p>
                                                Scale Health is the growth partner for ambitious health organisations. Clinical, commercial and leadership talent, placed properly.
                                            </p>

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

                                {/* Company */}
                                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="footer-widget-items">
                                        <div className="widget-head">
                                            <span className="widget-title">
                                                Company
                                            </span>
                                        </div>

                                        <ul className="gt-list-area">
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>

                                            <li>
                                                <Link to="/community">Community</Link>
                                            </li>

                                            <li>
                                                <Link to="/contact">Join Us</Link>
                                            </li>

                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Resources */}
                                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="footer-widget-items">
                                        <div className="widget-head">
                                            <span className="widget-title">
                                                Resource
                                            </span>
                                        </div>

                                        <ul className="gt-list-area">
                                            <li>
                                                <Link to="/executive-search">
                                                    Executive Search
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/capacity-planner">
                                                    Capacity Planner
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/case-studies">
                                                    Case Studies
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/insights">
                                                    Insight Hub
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/contact">
                                                    Find a Job
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/contact">
                                                    Join the Bench
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="col-xl-2 ps-lg-0 col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="footer-widget-items">
                                        <div className="widget-head">
                                            <span className="widget-title">
                                                Services
                                            </span>
                                        </div>

                                        <ul className="gt-list-area">
                                            <li>
                                                <Link to="/service-details">
                                                    Overview
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/service-details">
                                                    Clinical Delivery
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/service-details">
                                                    Clinical Network
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/service-details">
                                                    Commercial Models
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/service-details">
                                                    Commercial Talent
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/service-details">
                                                    Clinical Leadership
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/service-details">
                                                    Governance &amp; Compliance
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/service-details">
                                                    AI in Health
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="footer-widget-items">
                                        <div className="widget-head">
                                            <span className="widget-title">
                                                Contact
                                            </span>
                                        </div>

                                        <ul className="contact-list">
                                            <li>
                                                <img
                                                    src="assets/img/home-1/call.png"
                                                    alt="Phone"
                                                />

                                                <a href="tel:+447725334868">
                                                    +44 7725 334868
                                                </a>
                                            </li>

                                            <li>
                                                <img
                                                    src="assets/img/home-1/email.png"
                                                    alt="Email"
                                                />

                                                <a href="mailto:hello@vero.com">
                                                    hello@vero.com
                                                </a>
                                            </li>

                                            <li>
                                                General information or new
                                                <br />
                                                business inquiries.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="footer-bottom-wrapper">
                                <p>
                                    © 2026 <b>Vero.</b> All rights reserved.
                                </p>

                                <ul className="footer-list">
                                    <li>
                                        <Link to="/contact">
                                            Privacy policy
                                        </Link>
                                    </li>

                                    <li>।</li>

                                    <li>
                                        <Link to="/contact">
                                            Terms &amp; conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;