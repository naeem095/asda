import WebLayout from "./web-layout/layout";
import HomeHero from "./components/home-hero/home-hero";
import HomeCategory from "./components/home-category/home-category";
import Link from "next/link";

import '../app/components/navbar/navbar.css'

export default function Home() {
  return (
    <WebLayout>
      <HomeHero />
      <HomeCategory />
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-xl-3">
              <div className="main-title mb30-lg">
                <h2 className="title mb-0">Popular Products</h2>
                <p className="paragraph">Most viewed and all-time top-selling services</p>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="navpill-style2 at-home9 mb50-lg">
                <ul
                  className="nav nav-pills mb20 justify-content-xl-end"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active fw500 dark-color"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Development &amp; IT
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link fw500 dark-color"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Design &amp; Creative
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link fw500 dark-color"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Digital Marketing
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link fw500 dark-color"
                      id="pills-music-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-music"
                      type="button"
                      role="tab"
                      aria-controls="pills-music"
                      aria-selected="false"
                    >
                      Music &amp; Audio
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link fw500 dark-color"
                      id="pills-video-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-video"
                      type="button"
                      role="tab"
                      aria-controls="pills-video"
                      aria-selected="false"
                    >
                      Video &amp; Animation
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>






          <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="bdrs16 listing-style1 mb-0 shadow-sm">
                <div className="list-thumb">
                  <img
                    className="w-100"
                    src="images/listings/preview-update.avif"
                    alt=""
                  />
                  <a href="" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">
                    <em>by</em>{" "}
                    <a href="#" className="fw500">
                      easital_tech
                    </a>{" "}
                    in{" "}
                    <a href="#" className="fw500">
                      Fashion
                    </a>
                  </p>
                  <h5 className="list-title mb-2">
                    <Link href="/product-details">
                      I will design modern websites in figma or adobe xd
                    </Link>
                  </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">159 Sales</p>
                    <div className="review-meta d-flex align-items-center">
                      <i className="fas fa-star fz10 review-color me-2" />
                      <p className="mb-0 body-color fz14">
                        <span className="dark-color me-2">4.82</span>94 reviews
                      </p>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center mt15">
                    <div className="budget">
                      <p className="mb-0 body-color">
                        <span className="dark-color fw500 fz18 ms-1">$983</span>
                      </p>
                    </div>
                    <div className="d-flex gap-1">
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="page-register.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Add to Cart"
                      >
                        <i className="fa-solid fa-cart-shopping" />
                      </a>
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="packmycode-product-details.html"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bdrs16 listing-style1 mb-0 shadow-sm">
                <div className="list-thumb">
                  <img
                    className="w-100"
                    src="images/listings/preview_image.avif"
                    alt=""
                  />
                  <a href="" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">
                    <em>by</em>{" "}
                    <a href="#" className="fw500">
                      easital_tech
                    </a>{" "}
                    in{" "}
                    <a href="#" className="fw500">
                      Fashion
                    </a>
                  </p>
                  <h5 className="list-title mb-2">
                    <Link href="/product-details">
                      Katan - Multipurpose Shopify Theme
                    </Link>
                  </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">159 Sales</p>
                    <div className="review-meta d-flex align-items-center">
                      <i className="fas fa-star fz10 review-color me-2" />
                      <p className="mb-0 body-color fz14">
                        <span className="dark-color me-2">4.82</span>94 reviews
                      </p>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center mt15">
                    <div className="budget">
                      <p className="mb-0 body-color">
                        <span className="dark-color fw500 fz18 ms-1">$983</span>
                      </p>
                    </div>
                    <div className="d-flex gap-1">
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="page-register.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Add to Cart"
                      >
                        <i className="fa-solid fa-cart-shopping" />
                      </a>
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="packmycode-product-details.html"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bdrs16 listing-style1 mb-0 shadow-sm">
                <div className="list-thumb">
                  <img className="w-100" src="images/listings/preview-04.avif" alt="" />
                  <a href="" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">
                    <em>by</em>{" "}
                    <a href="#" className="fw500">
                      easital_tech
                    </a>{" "}
                    in{" "}
                    <a href="#" className="fw500">
                      Fashion
                    </a>
                  </p>
                  <h5 className="list-title mb-2">
                    <a href="packmycode-product-details.html">
                      Hub - Responsive Multi-Purpose WordPress Theme
                    </a>
                  </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">159 Sales</p>
                    <div className="review-meta d-flex align-items-center">
                      <i className="fas fa-star fz10 review-color me-2" />
                      <p className="mb-0 body-color fz14">
                        <span className="dark-color me-2">4.82</span>94 reviews
                      </p>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center mt15">
                    <div className="budget">
                      <p className="mb-0 body-color">
                        <span className="dark-color fw500 fz18 ms-1">$983</span>
                      </p>
                    </div>
                    <div className="d-flex gap-1">
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="page-register.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Add to Cart"
                      >
                        <i className="fa-solid fa-cart-shopping" />
                      </a>
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="packmycode-product-details.html"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bdrs16 listing-style1 mb-0 shadow-sm">
                <div className="list-thumb">
                  <img className="w-100" src="images/listings/preview-05.avif" alt="" />
                  <a href="" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">Design &amp; Creative</p>
                  <h5 className="list-title line-clamp2">
                    <a href="packmycode-product-details.html">
                      Ohio - Creative Portfolio &amp; Agency WordPress Theme
                    </a>
                  </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">159 Sales</p>
                    <div className="review-meta d-flex align-items-center">
                      <i className="fas fa-star fz10 review-color me-2" />
                      <p className="mb-0 body-color fz14">
                        <span className="dark-color me-2">4.82</span>94 reviews
                      </p>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center mt15">
                    <div className="budget">
                      <p className="mb-0 body-color">
                        <span className="dark-color fw500 fz18 ms-1">$983</span>
                      </p>
                    </div>
                    <div className="d-flex gap-1">
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="page-register.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Add to Cart"
                      >
                        <i className="fa-solid fa-cart-shopping" />
                      </a>
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="packmycode-product-details.html"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bdrs16 listing-style1 mb-0 shadow-sm">
                <div className="list-thumb">
                  <img className="w-100" src="images/listings/preview-06.avif" alt="" />
                  <a href="" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">Design &amp; Creative</p>
                  <h5 className="list-title line-clamp2">
                    <a href="packmycode-product-details.html">
                      Soledad – Multipurpose, Newspaper, Blog &amp; WooCommerce WordPress
                      Theme
                    </a>
                  </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">159 Sales</p>
                    <div className="review-meta d-flex align-items-center">
                      <i className="fas fa-star fz10 review-color me-2" />
                      <p className="mb-0 body-color fz14">
                        <span className="dark-color me-2">4.82</span>94 reviews
                      </p>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center mt15">
                    <div className="budget">
                      <p className="mb-0 body-color">
                        <span className="dark-color fw500 fz18 ms-1">$983</span>
                      </p>
                    </div>
                    <div className="d-flex gap-1">
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="page-register.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Add to Cart"
                      >
                        <i className="fa-solid fa-cart-shopping" />
                      </a>
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="packmycode-product-details.html"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bdrs16 listing-style1 mb-0 shadow-sm">
                <div className="list-thumb">
                  <img className="w-100" src="images/listings/preview-07.avif" alt="" />
                  <a href="" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">
                    <em>by</em>{" "}
                    <a href="#" className="fw500">
                      easital_tech
                    </a>{" "}
                    in{" "}
                    <a href="#" className="fw500">
                      Fashion
                    </a>
                  </p>
                  <h5 className="list-title line-clamp2">
                    <a href="packmycode-product-details.html">
                      Canvas | The Multi-Purpose HTML5 Template
                    </a>
                  </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">159 Sales</p>
                    <div className="review-meta d-flex align-items-center">
                      <i className="fas fa-star fz10 review-color me-2" />
                      <p className="mb-0 body-color fz14">
                        <span className="dark-color me-2">4.82</span>94 reviews
                      </p>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center mt15">
                    <div className="budget">
                      <p className="mb-0 body-color">
                        <span className="dark-color fw500 fz18 ms-1">$983</span>
                      </p>
                    </div>
                    <div className="d-flex gap-1">
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="page-register.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Add to Cart"
                      >
                        <i className="fa-solid fa-cart-shopping" />
                      </a>
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="packmycode-product-details.html"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bdrs16 listing-style1 mb-0 shadow-sm">
                <div className="list-thumb">
                  <img className="w-100" src="images/listings/preview-08.avif" alt="" />
                  <a href="" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">
                    <em>by</em>{" "}
                    <a href="#" className="fw500">
                      easital_tech
                    </a>{" "}
                    in{" "}
                    <a href="#" className="fw500">
                      Fashion
                    </a>
                  </p>
                  <h5 className="list-title mb-2">
                    <a href="packmycode-product-details.html">
                      Martex - Software, SaaS &amp; Startup HTML5 Template
                    </a>
                  </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">159 Sales</p>
                    <div className="review-meta d-flex align-items-center">
                      <i className="fas fa-star fz10 review-color me-2" />
                      <p className="mb-0 body-color fz14">
                        <span className="dark-color me-2">4.82</span>94 reviews
                      </p>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center mt15">
                    <div className="budget">
                      <p className="mb-0 body-color">
                        <span className="dark-color fw500 fz18 ms-1">$983</span>
                      </p>
                    </div>
                    <div className="d-flex gap-1">
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="page-register.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Add to Cart"
                      >
                        <i className="fa-solid fa-cart-shopping" />
                      </a>
                      <a
                        className="btn-soft-primary fz14 px-3 py-2 rounded-3 ud-btn"
                        href="packmycode-product-details.html"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="text-center mt10">
                <a
                  className="ud-btn btn-thm double-border bdrs60"
                  href="packmycode-product-list.html"
                >
                  See All Products
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* CTA Banner */}
      <section className="cta-banner-about2 at-home10-2 at-home6 mx-auto position-relative pt60-lg pb60-lg">
        <div className="container">
          <div
            className="row align-items-center wow fadeInDown"
            data-wow-delay="400ms"
          >
            <div className="col-lg-7 col-xl-5 mb60-xs mb100-md">
              <div className="mb30">
                <div className="main-title">
                  <h2 className="title">
                    A whole world of freelance <br className="d-none d-xl-block" />{" "}
                    talent at your fingertips
                  </h2>
                </div>
              </div>
              <div className="why-chose-list">
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-badge" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">Proof of quality</h4>
                    <p className="text mb-0 fz15">
                      Check any pro’s work samples, client reviews, and identity{" "}
                      <br className="d-none d-lg-block" /> verification.
                    </p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-money" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">No cost until you hire</h4>
                    <p className="text mb-0 fz15">
                      Interview potential fits for your job, negotiate rates, and
                      only pay <br className="d-none d-lg-block" /> for work you
                      approve.
                    </p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-security" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">Safe and secure</h4>
                    <p className="text mb-0 fz15">
                      Focus on your work knowing we help protect your data and
                      privacy. We’re here with 24/7 support if you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4 offset-xl-1">
              <div className="listbox-style1 px30 py-5 bdrs16 bgc-dark position-relative">
                <div className="list-style1">
                  <ul className="mb-0">
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      The best for every budget
                    </li>
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      Quality work done quickly
                    </li>
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      Protected payments, every time
                    </li>
                    <li className="text-white fw500 mb-0">
                      <i className="far fa-check dark-color bgc-white" />
                      24/7 support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="home6-cta-img bdrs24"
          src="images/about/about-19.jpg"
          alt=""
          height={600}
        />
      </section>
      {/* Funfact */}
      <section className="pb-0">
        <div className="container maxw1600 bdrb1 pb50">
          <div className="row">
            <div className="col-xl-10 mx-auto">
              <div
                className="row justify-content-center wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="col-6 col-md-3">
                  <div className="funfact_one mb20-sm text-center">
                    <div className="details">
                      <ul className="d-flex justify-content-center list-unstyled mb-0 ps-0">
                        <li>
                          <div className="timer">834</div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text mb-0">Total Freelancer</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="funfact_one mb20-sm text-center">
                    <div className="details">
                      <ul className="d-flex justify-content-center list-unstyled mb-0 ps-0">
                        <li>
                          <div className="timer">732</div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text mb-0">Positive Review</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="funfact_one mb20-sm text-center">
                    <div className="details">
                      <ul className="d-flex justify-content-center list-unstyled mb-0 ps-0">
                        <li>
                          <div className="timer">90</div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text mb-0">Order recieved</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="funfact_one mb20-sm text-center">
                    <div className="details">
                      <ul className="d-flex justify-content-center list-unstyled mb-0 ps-0">
                        <li>
                          <div className="timer">236</div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text mb-0">Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inspiring work */}
      <section className="">
        <div className="container">
          <div
            className="row align-items-center g-4 wow fadeInUp"
            data-wow-delay="00ms"
          >
            <div className="col-md-6">
              <div className="find-work bgc-light-yellow pb50 pt60 px20 bdrs24 text-center">
                <img
                  className="mb30"
                  src="images/about/home20-vector-1.png"
                  alt=""
                />
                <h2 className="title mb30">Find great work</h2>
                <p className="text mb30">
                  Work with the largest network of independent professionals and{" "}
                  <br className="d-none d-lg-block" /> get things done—from quick
                  turnaround.
                </p>
                <a className="ud-btn btn-dark bdrs60" href="page-job-list-v1.html">
                  Get Started <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="find-work bgc-thm4 pb50 pt60 px20 bdrs24 text-center">
                <img
                  className="mb30"
                  src="images/about/home20-vector-2.png"
                  alt=""
                />
                <h2 className="title mb30">Find talent your way</h2>
                <p className="text mb30">
                  Work with the largest network of independent professionals and{" "}
                  <br className="d-none d-lg-block" /> get things done—from quick
                  turnaround.
                </p>
                <a
                  className="ud-btn btn-dark bdrs60"
                  href="page-freelancer-v1.html"
                >
                  Get Started <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Funfact */}
      <section className="pt100 pb100 pt60-lg pb60-lg pb30-md">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="home4-about-1 position-relative">
                <img
                  className="w-100 mb30-md"
                  src="images/about/about-9.png"
                  alt=""
                />
                <img
                  src="images/about/happy-client.png"
                  alt=""
                  className="bounce-x img-1 default-box-shadow4"
                />
                <div className="iconbox-small1 d-none d-lg-block wow fadeInRight default-box-shadow4 bounce-x animate-up-1">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6 className="mb-1">4.9/5</h6>
                    <p className="text fz13 mb-0">Clients rate professionals</p>
                  </div>
                </div>
                <div className="iconbox-small2 d-none d-lg-block wow fadeInLeft default-box-shadow4 bounce-y animate-up-2">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6 className="mb-1">+12M</h6>
                    <p className="text fz13 mb-0">Project Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="mb30">
                <div className="mb30">
                  <h2 className="title mb30">
                    Join World's Best Marketplace{" "}
                    <br className="d-none d-xl-block" />
                    for Workers
                  </h2>
                  <p className="text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="list-style2">
                  <ul className="mb25">
                    <li>
                      <i className="far fa-check" />
                      Connect to freelancers with proven business experience
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Get matched with the perfect talent by a customer success
                      manager
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Unmatched quality of remote, hybrid, and flexible jobs
                    </li>
                  </ul>
                </div>
                <a href="page-contact.html" className="ud-btn btn-thm-border">
                  Find Talent <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WebLayout>
  );
}
