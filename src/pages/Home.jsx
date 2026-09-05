import React, { useEffect } from 'react';
import PlexusBackground from "./PlexusBackground";
const Home = () => {

    useEffect(() => {
        const section = document.querySelector("#networkSection");
        const counters = document.querySelectorAll(".counter");

        if (!section || !counters.length) return;

        let hasAnimated = false;

        const animateCounter = (counter) => {
            const target = Number(counter.dataset.target);
            const duration = 1600;
            const startTime = performance.now();

            const update = (currentTime) => {
                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                const easedProgress =
                    1 - Math.pow(1 - progress, 3);

                const currentValue = Math.floor(
                    easedProgress * target
                );

                counter.textContent =
                    currentValue.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent =
                        target.toLocaleString();
                }
            };

            requestAnimationFrame(update);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !hasAnimated
                    ) {
                        hasAnimated = true;

                        counters.forEach((counter) => {
                            animateCounter(counter);
                        });

                        observer.disconnect();
                    }

                });
            },
            {
                threshold: 0.25
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };

    }, []);

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

                    
                    {/* <!-- Hero Section Start --> */}
                    <section className="hero-section hero-1 fix bg-cover hero-ptb image-distortion p-relative z-index-1">
                        <PlexusBackground />
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="hero-content">
                                        <div className="shape-1">
                                            <img src="assets/img/home-1/shape1.png" alt="img" />
                                        </div>
                                        <div className="shape-2">
                                            <img src="assets/img/home-1/shape2.png" alt="img"/>
                                        </div>
                                        <span className="hero-sub wow fadeInUp" style={{ color: "#ffffff" }}>
                                           <b>Saas</b> Manage Tasks. Master Time
                                        </span>
                                        <h1 className="wa_title_spilt_1" style={{ color: "#ffffff" }}>
                                           Healthcare recruitment <br/> by healthcare professionals.
                                        </h1>
                                        <p className="wow fadeInUp" data-wow-delay=".3s" style={{ color: "#ffffff" }}>
                                            Vero was founded by pharmacists, advanced clinical practitioners and non-medical prescribers — not by salespeople who learned the vocabulary. That
difference shows in every conversation we have, with the services hiring through us and the clinicians trusting us with their careers.
                                        </p>
                                        <form action="#" className="wow fadeInUp" data-wow-delay=".5s">
                                            <input type="text" placeholder="Enter email*"/>
                                            <button type="submit" className="theme-btn-main style-2">
                                                <span className="theme-btn-arrow-left"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                                <span className="theme-btn">Subscribe</span>
                                                <span className="theme-btn-arrow-right"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-items">
                                <div className="hero-image hero-animation">
                                    <img src="assets/images/hero_image.png" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Brand Section Start --> */}
                    <div className="brand-section-one section-padding">
                        <div className="container">
                            <div className="text wa_title_spilt_1">
                                COMPANIES <b>WE'VE</b> SUPPORTED
                            </div>
                        </div>
                        <div className="marquee">
                            <div className="marquee-group">
                                <div className="brand-img">
                                    <h3>Held Health</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Enua</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Harrow Health</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Momenta Connect</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Keys Group</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Insights Diagnostics</h3>
                                </div>
                            </div>
                                <div className="marquee-group">
                                <div className="brand-img">
                                    <h3>MentalWell</h3>
                                </div>
                                <div className="brand-img">
                                     <h3>Dandy</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>C The Sign</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Incredible Health</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Heailos</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Montu</h3>
                                </div>
                            </div>
                                <div className="marquee-group">
                                <div className="brand-img">
                                    <h3>Problme Shared</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Psicon</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Health Assurad</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Diverse Diagnostics</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Medefer</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Clinical Partners</h3>
                                </div>
                            </div>
                                <div className="marquee-group">
                                <div className="brand-img">
                                    <h3>Berkeley Psychiatrists</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Healios</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Psicon</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Dandy</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Montu</h3>
                                </div>
                                <div className="brand-img">
                                    <h3>Enua</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Service Section Start --> */}
                    <section className="service-section fix section-padding pt-0">
                        <div className="container">
                            <div className="section-title text-center">
                                <div className="tz-sub-tilte tx-subTitle">
                                    <span className="sub-title">
                                        <b>What</b>  makes us different
                                    </span>
                                </div>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                    Most clinical recruitment is done by people who have never worked a clinic
                                </h2>
                            
                                
                            </div>
                            <div className="row">
                                <div className="col-xl-8 col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="service-box-items">
                                        <div className="thumb">
                                            <img src="assets/images/smart_auto.png" alt="img"/>
                                            <img src="assets/images/smart_auto.png" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">
                                                <a href="service-details.html">Smart Automation</a>
                                            </h3>
                                            <p>
                                                Tell us what you are trying to build and we will tell you honestly whether we can help.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                     <div className="service-box-items">
                                        <div className="thumb">
                                            <img src="assets/images/real-time.png" alt="img"/>
                                            <img src="assets/images/real-time.png" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">
                                                <a href="service-details.html">Real-Time Collaboration</a>
                                            </h3>
                                            <p>
                                                Work together seamlessly with your team, no matter  assign tasks.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 wow fadeInUp" data-wow-delay=".3s">
                                     <div className="service-box-items">
                                        <div className="thumb">
                                            <img src="assets/images/analytics.png" alt="img"/>
                                            <img src="assets/images/analytics.png" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">
                                                <a href="service-details.html">Advanced Analytics</a>
                                            </h3>
                                            <p>
                                               Gain insights that matter with detailed reports and dashboards.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="service-box-items">
                                        <div className="thumb">
                                            <img src="assets/images/cloud.png" alt="img"/>
                                            <img src="assets/images/cloud.png" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">
                                                <a href="service-details.html">Secure Cloud Storage</a>
                                            </h3>
                                            <p>
                                                Keep your files safe and accessible anytime, anywhere.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Choose Us Section Start --> */}
                    <section className="choose-us-section fix section-padding pt-0">
                        <div className="container">
                            <div className="section-title text-center">
                                <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <span className="sub-title"><b>Our Products </b>& Services</span>
                                </div>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                    How we work
                                </h2>
                            </div>
                            <div className="row advance-wrap">
                                <div className="col-xl-3 col-lg-4 col-md-6 advance-item">
                                    <div className="choose-us-items">
                                        <div className="number">
                                            01
                                        </div>
                                        <div className="content">
                                            <h3 className="title">A clinical brief, not a job spec</h3>
                                            <p>
                                                What the role involves day to day, where it sits in the team, what scope the postholder needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 advance-item">
                                    <div className="choose-us-items">
                                        <div className="number">
                                            02
                                        </div>
                                        <div className="content">
                                            <h3 className="title">Search, not just advertise</h3>
                                            <p>
                                                The best clinicians are working, not applying. We reach them through professional networks built in practice.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 advance-item">
                                    <div className="choose-us-items">
                                        <div className="number">
                                            03
                                        </div>
                                        <div className="content">
                                            <h3 className="title">Clinically screened before you see anyone</h3>
                                            <p>
                                                Registration verified, scope confirmed, motivation understood.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 advance-item">
                                    <div className="choose-us-items">
                                        <div className="number">
                                            04
                                        </div>
                                        <div className="content">
                                            <h3 className="title">Still involved after the start date</h3>
                                            <p>
                                                A placement that does not last has not worked.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-items">
                                 <div className="dashboard-image hero-animation">
                                    <img src="assets/images/dashboard.png" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- How It Section Start --> */}
                    <section className="how-it-section fix section-padding pt-0">
                        <div className="container">
                            <div className="section-title-area align-items-start">
                                <div className="section-title mb-0">
                                    <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <span className="sub-title"><b>Saas</b>See How It Works</span>
                                    </div>
                                </div>
                                <div className="section-title mb-0">
                                    <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                        Three things clinical  <br/> founders change
                                    </h2>
                                </div>
                                <a className="theme-btn-main style-2" href="contact.html">
                                    <span className="theme-btn-arrow-left"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                    <span className="theme-btn">Learn more</span>
                                    <span className="theme-btn-arrow-right"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                </a>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-xxl-5 col-xl-6 col-lg-6">
                                    <ul className="how-it-items">
                                        <li className="wow fadeInUp" data-wow-delay=".3s">
                                            <div className="icon">
                                                <img src="assets/img/home-1/folder.png" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">We read a CV the way a clinical lead reads a CV</h3>
                                                <p>
                                                    Scope of practice, prescribing annotation, supervision history, the settings someone has genuinely worked in. Substance, not keywords.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay=".5s">
                                            <div className="icon">
                                                <img src="assets/img/home-1/pencil.png" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">We can hold a real clinical conversation</h3>
                                                <p>
                                                    Candidates notice within about ninety seconds whether the person calling them understands the job. It is why good clinicians take our calls and return them.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay=".7s">
                                            <div className="icon">
                                                <img src="assets/img/home-1/security.png" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">We tell you when we cannot help</h3>
                                                <p>
                                                    If the rate, scope or timeline makes a brief unfillable, you hear it in week one rather than week eight. That costs us work occasionally. It is also why
services come back.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <div className="how-it-image wow fadeInUp" data-wow-delay=".4s">
                                        <img src="assets/images/real-time.png" alt="img"/>
                                        <img src="assets/images/real-time.png" alt="img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Testimonial Section Start --> */}
                    <section className="testimonial-section fix section-padding">
                         <div className="ripple-image ripples position-absolute w-100 h-100 top-0 start-0 z-0">
                            <img src="assets/img/home-1/testimonial-bg.jpg" alt="shape"/>
                        </div>
                        <div className="container">
                             <div className="section-title text-center">
                                <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <span className="sub-title"><b>Saas</b>Reliable, Proven, Loved</span>
                                </div>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                    Clients
                                </h2>
                            </div>
                        </div>
                        <div className="swiper testimonial-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide wow fadeInUp">
                                    <div className="testimonial-box-items">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                        <p className="text">
                                           “We needed to onboard rapidly to meet demand. Scale Health have been pivotal in building out the clinical team with a varied clinical mix, always kept quality and compliance front and centre throughout. They continue to support us now.”
                                        </p>
                                        <div className="client-info">
                                            <div className="thumb">
                                                <img src="assets/img/home-1/client-1.png" alt="img"/>
                                            </div>
                                            <div className="info-content">
                                                <h3 className="name">Dianne Russell</h3> 
                                                <span>Brand Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide wow fadeInUp" data-wow-delay=".2s">
                                    <div className="testimonial-box-items">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                        <p className="text">
                                           “Over the past year, we've worked closely with Scale Health to support delivery across our ADHD and ASD pathways. They've supplied a significant number of clinicians, adapting well to changing areas of demand.”
                                        </p>
                                        <div className="client-info">
                                            <div className="thumb">
                                                <img src="assets/img/home-1/client-1.png" alt="img"/>
                                            </div>
                                            <div className="info-content">
                                                <h3 className="name">Dianne Russell</h3> 
                                                <span>Brand Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide wow fadeInUp" data-wow-delay=".4s">
                                    <div className="testimonial-box-items">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                        <p className="text">
                                           “Scale Health have been a trusted partner to us at Problem Shared, supporting both our ADHD and ASD pathways, bringing strong market knowledge, benchmarking insight, and regular, transparent updates.”
                                        </p>
                                        <div className="client-info">
                                            <div className="thumb">
                                                <img src="assets/img/home-1/client-1.png" alt="img"/>
                                            </div>
                                            <div className="info-content">
                                                <h3 className="name">Dianne Russell</h3> 
                                                <span>Brand Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide wow fadeInUp" data-wow-delay=".6s">
                                    <div className="testimonial-box-items">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                        <p className="text">
                                           “We needed to onboard rapidly to meet demand. Scale Health have been pivotal in building out the clinical team with a varied clinical mix, always kept quality and compliance front and centre throughout. They continue to support us now.”
                                        </p>
                                        <div className="client-info">
                                            <div className="thumb">
                                                <img src="assets/img/home-1/client-1.png" alt="img"/>
                                            </div>
                                            <div className="info-content">
                                                <h3 className="name">Dianne Russell</h3> 
                                                <span>Brand Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide wow fadeInUp" data-wow-delay=".8s">
                                    <div className="testimonial-box-items">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                        <p className="text">
                                           “Over the past year, we've worked closely with Scale Health to support delivery across our ADHD and ASD pathways. They've supplied a significant number of clinicians, adapting well to changing areas of demand.”
                                        </p>
                                        <div className="client-info">
                                            <div className="thumb">
                                                <img src="assets/img/home-1/client-1.png" alt="img"/>
                                            </div>
                                            <div className="info-content">
                                                <h3 className="name">Dianne Russell</h3> 
                                                <span>Brand Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide wow fadeInUp" data-wow-delay=".9s">
                                    <div className="testimonial-box-items">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                        <p className="text">
                                           “We needed to onboard rapidly to meet demand. Scale Health have been pivotal in building out the clinical team with a varied clinical mix, always kept quality and compliance front and centre throughout. They continue to support us now.”
                                        </p>
                                        <div className="client-info">
                                            <div className="thumb">
                                                <img src="assets/img/home-1/client-1.png" alt="img"/>
                                            </div>
                                            <div className="info-content">
                                                <h3 className="name">Dianne Russell</h3> 
                                                <span>Brand Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Faq Section Start --> */}
                    <section className="faq-section fix section-padding">
                        <div className="container">
                            <div className="section-title-area align-items-center">
                                <div className="section-title mb-0">
                                    <div className="tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <span className="sub-title"><b>Saas</b>Simple, Quick, Helpful</span>
                                    </div>
                                    <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                       Who we recruit 
                                    </h2>
                                </div>
                                <a className="theme-btn-main style-2" href="contact.html">
                                    <span className="theme-btn-arrow-left"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                    <span className="theme-btn">Contact us</span>
                                    <span className="theme-btn-arrow-right"> <i className="fa-solid fa-arrow-up-right"></i> </span>
                                </a>
                            </div>
                            <div className="faq-items-1">
                                <ul className="accordion-box">
                                    {/* <!--Block--> */}
                                    <li className="accordion block active-block">
                                        <div className="acc-btn active">
                                            <div className="number"> 01.</div>
                                             Pharmacy
                                            <div className="icon fa-regular fa-plus"></div>
                                        </div>
                                        <div className="acc-content current">
                                            <div className="content">
                                                <div className="text">
                                                    community, PCN, general practice, hospital, technicians                                                
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    {/* <!--Block--> */}
                                    <li className="accordion block wow fadeInUp" data-wow-delay=".2s">
                                        <div className="acc-btn">
                                            <div className="number"> 02.</div>
                                          Advanced clinical practice
                                            <div className="icon fa-regular fa-plus"></div>
                                        </div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">
                                                    ACPs, ANPs, trainee ACPs
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    {/* <!--Block--> */}
                                    <li className="accordion block wow fadeInUp" data-wow-delay=".4s">
                                        <div className="acc-btn">
                                            <div className="number"> 03.</div>
                                                    Non-medical prescribers
                                            <div className="icon fa-regular fa-plus"></div>
                                        </div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">
                                                    Independent and supplementary, all backgrounds
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    {/* <!--Block--> */}
                                    <li className="accordion block wow fadeInUp" data-wow-delay=".6s">
                                        <div className="acc-btn">
                                            <div className="number"> 04.</div>
                                                Nursing
                                            <div className="icon fa-regular fa-plus"></div>
                                        </div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">
                                                    Practice, specialist and nurse practitioners
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    {/* <!--Block--> */}
                                    <li className="accordion block wow fadeInUp" data-wow-delay=".8s">
                                        <div className="acc-btn">
                                            <div className="number"> 05.</div>
                                                Wider primary and urgent care
                                            <div className="icon fa-regular fa-plus"></div>
                                        </div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">
                                                    GPs, paramedics, physician associates
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                

                    <section className="network-section" id="networkSection">
                        <div className="network-container">

                        <h2 className="section-title">The network behind the delivery.</h2>

                        <div className="stats-grid">

                            <div className="stat-item">
                            <div className="stat-number">
                                <span className="counter" data-target="1000">0</span><span className="accent">+</span>
                            </div>
                            <p>Registered clinicians in our bank</p>
                            </div>

                            <div className="stat-item">
                            <div className="stat-number">
                                <span className="counter" data-target="500">0</span><span className="accent">+</span>
                            </div>
                            <p>Assessment &amp; therapy professionals</p>
                            </div>

                            <div className="stat-item">
                            <div className="stat-number">
                                <span className="counter" data-target="250">0</span><span className="accent">+</span>
                            </div>
                            <p>Prescribers across all specialisms</p>
                            </div>

                            <div className="stat-item">
                            <div className="stat-number">
                                <span className="counter" data-target="10">0</span><span className="accent">days</span>
                            </div>
                            <p>Average onboarding to compliant</p>
                            </div>

                            <div className="stat-item">
                            <div className="stat-number">
                                <span className="counter" data-target="100">0</span><span className="accent">%</span>
                            </div>
                            <p>Client retention rate</p>
                            </div>

                        </div>

                        <div className="feature-grid">
                            <div className="feature-card">
                            <h3>CVs in 24hrs</h3>
                            <p>For all active pathways</p>
                            </div>

                            <div className="feature-card">
                            <h3>10-day avg onboarding</h3>
                            <p>Fully compliant, ready to work</p>
                            </div>

                            <div className="feature-card">
                            <h3>Safe &amp; vetted</h3>
                            <p>GMC, NMC and HCPC compliance maintained</p>
                            </div>
                        </div>

                        </div>
                    </section>
        </div>
        </>
    );
};

export default Home;