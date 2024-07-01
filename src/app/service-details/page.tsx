
import CommunityBadgesCard from "../components/community-badges-card/community-badges-card"
import Reviews from "../components/reviews/reviews"
import WebLayout from "../web-layout/layout"

export default function Page() {
    return (
        <WebLayout>
            {/* Service Details */}
            <section className="pt30 pb90 pb30-md">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8 pe-xxl-5">
                            <div>
                                <div className="row mb20">
                                    <div className="col-xl-12">
                                        <div className="position-relative">
                                            <h2>
                                                I will write optimized fiverr gig description, fiverr gig
                                                SEO, profile,title,free image
                                            </h2>
                                            <div className="align-items-center d-flex flex-wrap gap-2 gap-sm-2">
                                                <a className="" href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/logo.jpg"
                                                            height={40}
                                                            width={40}
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">27collective</span>
                                                </a>
                                                <p className="mb-0 dark-color fz14">
                                                    <i className="fas fa-star vam fz10 review-color me-2" />{" "}
                                                    4.82 94 reviews
                                                </p>
                                                <p className="mb-0 dark-color fz14">
                                                    <i className="flaticon-file-1 vam fz20 me-2" /> 2 Order in
                                                    Queue
                                                </p>
                                                <p className="mb-0 dark-color fz14">
                                                    <i className="flaticon-website vam fz20 me-2" /> 902 Views
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <hr class="opacity-100 mb30 mt30"> */}
                                <div className="service-single-sldier vam_nav_style slider-1-grid owl-carousel owl-theme mb60">
                                    <div className="item">
                                        <div className="thumb p50 p30-sm">
                                            <img src="images/service.png" alt="" className="w-100" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb p50 p30-sm">
                                            <img
                                                src="images/listings/service-details-1.jpg"
                                                alt=""
                                                className="w-100"
                                            />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb p50 p30-sm">
                                            <img
                                                src="images/listings/service-details-1.jpg"
                                                alt=""
                                                className="w-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="service-about">
                                    <h4>About</h4>
                                    <p className="text mb30">
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem Ipsum is that it has a more-or-less
                                        normal distribution of letters, as opposed to using 'Content
                                        here, content here', making it look like readable English.
                                    </p>
                                    <p className="text mb-0">Services I provide:</p>
                                    <p className="text mb-0">1) Website Design</p>
                                    <p className="text mb-0">2) Mobile App Design</p>
                                    <p className="text mb-0">3) Brochure Design</p>
                                    <p className="text mb-0">4) Business Card Design</p>
                                    <p className="text mb30">5) Flyer Design</p>
                                    <p className="text mb30">
                                        Many desktop publishing packages and web page editors now use
                                        Lorem Ipsum as their default model text, and a search for 'lorem
                                        ipsum' will uncover many web sites still in their infancy.
                                        Various versions have evolved over the years, sometimes by
                                        accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                    <div className="d-flex align-items-start">
                                        <div className="list1">
                                            <h6>App type</h6>
                                            <p className="text mb-0">Business, Food &amp; drink,</p>
                                            <p className="text">Graphics &amp; design</p>
                                        </div>
                                        <div className="list1 ml80">
                                            <h6>Design tool</h6>
                                            <p className="text mb-0">Adobe XD, Figma,</p>
                                            <p className="text">Adobe Photoshop</p>
                                        </div>
                                        <div className="list1 ml80">
                                            <h6>Device</h6>
                                            <p className="text">Mobile, Desktop</p>
                                        </div>
                                    </div>
                                    <hr className="opacity-100 my-5" />
                                    <h4 className="mb-4">Compare Packages</h4>
                                    <div className="table-style2 table-responsive bdr1">
                                        <table className="table table-borderless mb-0">
                                            <thead className="t-head">
                                                <tr>
                                                    <th className="col" scope="col" />
                                                    <th className="col" scope="col">
                                                        <span className="h2">
                                                            $29 <small>/ monthly</small>
                                                        </span>
                                                        <br />
                                                        <span className="h4">Basic</span>
                                                        <br />
                                                        <span className="text">
                                                            I will redesign your current{" "}
                                                            <br className="d-none d-lg-block" /> landing page or
                                                            create one for <br className="d-none d-lg-block" />{" "}
                                                            you (upto 4 sections)
                                                        </span>
                                                    </th>
                                                    <th className="col" scope="col">
                                                        <span className="h2">
                                                            $49 <small>/ monthly</small>
                                                        </span>
                                                        <br />
                                                        <span className="h4">Standard</span>
                                                        <br />
                                                        <span className="text">
                                                            4 High Quality Desktop{" "}
                                                            <br className="d-none d-lg-block" /> Pages.
                                                        </span>
                                                    </th>
                                                    <th className="col" scope="col">
                                                        <span className="h2">
                                                            $89 <small>/ monthly</small>
                                                        </span>
                                                        <br />
                                                        <span className="h4">Premium</span>
                                                        <br />
                                                        <span className="text">
                                                            4 High Quality Desktop and{" "}
                                                            <br className="d-none d-lg-block" /> Mobile Pages.
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="t-body">
                                                <tr className="bgc-thm3">
                                                    <th scope="row">Source file</th>
                                                    <td>
                                                        <a className="check_circle bgc-thm" href="#">
                                                            <span className="fas fa-check" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a className="check_circle bgc-thm" href="#">
                                                            <span className="fas fa-check" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a className="check_circle bgc-thm" href="#">
                                                            <span className="fas fa-check" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Number of pages</th>
                                                    <td>2</td>
                                                    <td>4</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr className="bgc-thm3">
                                                    <th scope="row">Revisions</th>
                                                    <td>1</td>
                                                    <td>3</td>
                                                    <td>5</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Delivery Time </th>
                                                    <td>2 Days</td>
                                                    <td>3 Days</td>
                                                    <td>4 Days</td>
                                                </tr>
                                                <tr className="bgc-thm3">
                                                    <th scope="row">Total</th>
                                                    <td>$29</td>
                                                    <td>$49</td>
                                                    <td>$89</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" />
                                                    <td>
                                                        <a href="" className="ud-btn btn-thm">
                                                            Select
                                                            <i className="fal fa-arrow-right-long ms-2" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href="" className="ud-btn btn-thm">
                                                            Select
                                                            <i className="fal fa-arrow-right-long ms-2" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href="" className="ud-btn btn-thm">
                                                            Select
                                                            <i className="fal fa-arrow-right-long ms-2" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr className="opacity-100 my-5" />
                                    <h4 className="mb-4">Frequently Asked Questions</h4>
                                    <div className="accordion-style1 faq-page mb-0">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item active">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne"
                                                    >
                                                        What methods of payments are supported?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseOne"
                                                    className="accordion-collapse collapse show"
                                                    aria-labelledby="headingOne"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        Cras vitae ac nunc orci. Purus amet tortor non at
                                                        phasellus ultricies hendrerit. Eget a, sit morbi nunc
                                                        sit id massa. Metus, scelerisque volutpat nec sit vel
                                                        donec. Sagittis, id volutpat erat vel.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo"
                                                    >
                                                        Can I cancel at anytime?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseTwo"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingTwo"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        Cras vitae ac nunc orci. Purus amet tortor non at
                                                        phasellus ultricies hendrerit. Eget a, sit morbi nunc
                                                        sit id massa. Metus, scelerisque volutpat nec sit vel
                                                        donec. Sagittis, id volutpat erat vel.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree"
                                                    >
                                                        How do I get a receipt for my purchase?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseThree"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        Cras vitae ac nunc orci. Purus amet tortor non at
                                                        phasellus ultricies hendrerit. Eget a, sit morbi nunc
                                                        sit id massa. Metus, scelerisque volutpat nec sit vel
                                                        donec. Sagittis, id volutpat erat vel.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFour">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseFour"
                                                        aria-expanded="false"
                                                        aria-controls="collapseFour"
                                                    >
                                                        Which license do I need?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseFour"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingFour"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        Cras vitae ac nunc orci. Purus amet tortor non at
                                                        phasellus ultricies hendrerit. Eget a, sit morbi nunc
                                                        sit id massa. Metus, scelerisque volutpat nec sit vel
                                                        donec. Sagittis, id volutpat erat vel.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFive">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseFive"
                                                        aria-expanded="false"
                                                        aria-controls="collapseFive"
                                                    >
                                                        How do I get access to a theme I purchased?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseFive"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingFive"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        Cras vitae ac nunc orci. Purus amet tortor non at
                                                        phasellus ultricies hendrerit. Eget a, sit morbi nunc
                                                        sit id massa. Metus, scelerisque volutpat nec sit vel
                                                        donec. Sagittis, id volutpat erat vel.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="opacity-100 my-5" />
                                    <h4 className="mb-4">Add Extra Services</h4>
                                    <div className="extra-service-tab">
                                        <nav>
                                            <div
                                                className="nav flex-column nav-tabs"
                                                id="nav-tab"
                                                role="tablist"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="nav-home2-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-home2"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="true"
                                                >
                                                    <label className="custom_checkbox fw500 text-start">
                                                        100 Words (+2 days)
                                                        <span className="text text-bottom">
                                                            I will professionally translate english to german
                                                        </span>
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="price">$25</span>
                                                </button>
                                                <button
                                                    className="nav-link active"
                                                    id="nav-profile2-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-profile2"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    <label className="custom_checkbox fw500 text-start">
                                                        100 Words (+2 days)
                                                        <span className="text text-bottom">
                                                            I will professionally translate english to german
                                                        </span>
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="price">$45</span>
                                                </button>
                                                <button
                                                    className="nav-link"
                                                    id="nav-contact2-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-contact2"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    <label className="custom_checkbox fw500 text-start">
                                                        100 Words (+2 days)
                                                        <span className="text text-bottom">
                                                            I will professionally translate english to german
                                                        </span>
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="price">$75</span>
                                                </button>
                                            </div>
                                        </nav>
                                    </div>
                                    <hr className="opacity-100 my-5" />
                                    <Reviews />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ps-xxl-5">
                            <div>
                                <div className="blog-sidebar ms-lg-auto">
                                    <div className="mb20 p20 position-relative rounded-3 shadow">
                                        <div className="d-flex">
                                            <div className="tip">Share</div>
                                            <div className="share">
                                                <div
                                                    className="trigger share-btn"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Share This Gig"
                                                >
                                                    <a
                                                        href="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#shareButtonModal"
                                                    >
                                                        <i className="fa-solid fa-share-nodes" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="like">
                                                <div
                                                    className="trigger like-btn"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Save To List"
                                                >
                                                    <a href="#">
                                                        <i className="fas fa-heart" /> 1,315
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb20 p20 position-relative rounded-3 shadow">
                                        <div className="navpill-style1">
                                            <ul
                                                className="nav nav-pills mb20"
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
                                                        Basic
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
                                                        Standard
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
                                                        Premium
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div
                                                    className="tab-pane fade fz15 text show active"
                                                    id="pills-home"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-home-tab"
                                                >
                                                    <div className="price-content">
                                                        <div className="price">$699</div>
                                                        <div className="h5 mb-2">
                                                            (STANDARD: 20$) 2 ADVANCED GIG PICTURE WITH
                                                            JPG,PNG,SOURCE FILE
                                                        </div>
                                                        <p className="fz14 text">
                                                            Save up to 15% with
                                                            <a
                                                                href="#"
                                                                className="fw-medium text-primary"
                                                                data-bs-toggle="popover"
                                                                data-bs-placement="top"
                                                                data-bs-trigger="hover focus"
                                                                data-bs-content="Maximum 100 characters. No HTML or emoji allowed"
                                                            >
                                                                easital_tech
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={14}
                                                                    height={14}
                                                                    fill="currentColor"
                                                                    className="bi bi-info-circle-fill"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                                                                </svg>
                                                            </a>
                                                        </p>
                                                        <p className="text fz14">
                                                            Customize the whole website with your images and
                                                            content. Change the whole website theme matching with
                                                            your business color. Additionally, full SEO
                                                            optimization.
                                                        </p>
                                                        <hr className="opacity-100 mb20" />
                                                        {/* <ul class="p-0 mb15 d-sm-flex align-items-center list-unstyled">
                                                      <li class="fz14 fw-bold dark-color"><i class="flaticon-sandclock fz20 text-thm2 me-1 vam"></i>04days Delivery</li>
                                                      <li class="fz14 fw-bold dark-color ml15 ml0-xs"><i class="flaticon-recycle fz20 text-thm2 me-1 vam"></i>Unlimited Revisions</li>
                                                  </ul> */}
                                                        <div className="d-flex gap-2 mb15">
                                                            <div className="bgc-thm4 fw-medium fz14 px-2 py-1 rounded-2 text-primary">
                                                                <i className="fa-regular fa-clock  me-2" />
                                                                1-day delivery
                                                            </div>
                                                            <div className="bgc-thm4 fw-medium fz14 px-2 py-1 rounded-2 text-primary">
                                                                <i className="fa-solid fa-arrows-rotate me-2" />
                                                                Unlimited revisions
                                                            </div>
                                                        </div>
                                                        <div className="list-style1">
                                                            <ul className="">
                                                                <li className="mb10">
                                                                    <i className="bgc-thm4 fa-solid fa-check text-thm3" />
                                                                    Unlimited custom assets
                                                                </li>
                                                                <li className="mb10">
                                                                    <i className="bgc-thm4 fa-solid fa-check text-thm3" />
                                                                    Responsive design
                                                                </li>
                                                                <li className="mb10">
                                                                    <i className="bgc-thm4 fa-solid fa-check text-thm3" />
                                                                    Prototype
                                                                </li>
                                                                <li className="mb10">
                                                                    <i className="bgc-thm4 fa-solid fa-check text-thm3" />
                                                                    Source file
                                                                </li>
                                                                <li className="text-black-50">
                                                                    <i className="bgc-gray-4 fa-solid fa-xmark" />
                                                                    Unlimited custom assets
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-grid gap-2 mt-4">
                                                            <a href="" className="ud-btn btn-thm">
                                                                Continue $699
                                                                <i className="fal fa-arrow-right-long ms-2" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade fz15 text"
                                                    id="pills-profile"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-profile-tab"
                                                >
                                                    Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                                                    pellentesque nec nibh sed et, vel diam, massa. Placerat
                                                    quis vel fames interdum urna lobortis sagittis sed
                                                    pretium. Aliquam eget posuere sit enim elementum nulla
                                                    vulputate magna. Morbi sed arcu proin quis tortor non
                                                    risus.{" "}
                                                </div>
                                                <div
                                                    className="tab-pane fade fz15 text"
                                                    id="pills-contact"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-contact-tab"
                                                >
                                                    Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                                                    pellentesque nec nibh sed et, vel diam, massa. Placerat
                                                    quis vel fames interdum urna lobortis sagittis sed
                                                    pretium. Aliquam eget posuere sit enim elementum nulla
                                                    vulputate magna. Morbi sed arcu proin quis tortor non
                                                    risus.{" "}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CommunityBadgesCard />
                                    <div className="freelancer-style1 service-single mb-0">
                                        <div className="wrapper d-flex align-items-center">
                                            <div className="thumb position-relative mb25">
                                                <img
                                                    className="rounded-circle mx-auto"
                                                    src="images/team/fl-1.png"
                                                    alt=""
                                                />
                                                <span className="online" />
                                            </div>
                                            <div className="ml20">
                                                <h5 className="title mb-1">Kristin Watson</h5>
                                                <p className="mb-0">Dog Trainer</p>
                                                <div className="review">
                                                    <p>
                                                        <i className="fas fa-star fz10 review-color pr10" />
                                                        <span className="dark-color">4.9</span> (595 reviews)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="opacity-100" />
                                        <div className="details">
                                            <div className="fl-meta d-flex align-items-center justify-content-between">
                                                <a className="meta fw500 text-start">
                                                    Location
                                                    <br />
                                                    <span className="fz14 fw400">London</span>
                                                </a>
                                                <a className="meta fw500 text-start">
                                                    Rate
                                                    <br />
                                                    <span className="fz14 fw400">$90 / hr</span>
                                                </a>
                                                <a className="meta fw500 text-start">
                                                    Job Success
                                                    <br />
                                                    <span className="fz14 fw400">%98</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-grid mt-4">
                                            <a
                                                href="page-freelancer-single.html"
                                                className="ud-btn btn-soft-primary"
                                            >
                                                Contact Me
                                                <i className="fal fa-arrow-right-long ms-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Share Button Modal */}
            <div className="modal" id="shareButtonModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <button
                                type="button"
                                className="btn-close end-0 me-3 mt-3 position-absolute top-0"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                            <div className="mt-3 text-center">
                                <h4 className="mb-1">Share This Gig</h4>
                                Spread the word about this Gig on Packmycode
                            </div>
                            <div className="d-flex gap-3 justify-content-center social-share-btns mt-4 mb-3">
                                <a
                                    className="share-btn share-btn-twitter"
                                    href="https://x.com/"
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    <div className="social-icon">
                                        <i className="fa-brands fa-twitter" />
                                    </div>
                                    <span className="d-block fz13 mt-2">Twitter</span>
                                </a>
                                <a
                                    className="share-btn share-btn-facebook"
                                    href="https://www.facebook.com/"
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    <div className="social-icon">
                                        <i className="fa-brands fa-facebook-f" />
                                    </div>
                                    <span className="d-block fz13 mt-2">Facebook</span>
                                </a>
                                <a
                                    className="share-btn share-btn-linkedin"
                                    href="https://www.linkedin.com/"
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    <div className="social-icon">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </div>
                                    <span className="d-block fz13 mt-2">Linkedin</span>
                                </a>
                                <a
                                    className="share-btn share-btn-whatsapp"
                                    href="https://web.whatsapp.com"
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    <div className="social-icon">
                                        <i className="fa-brands fa-whatsapp" />
                                    </div>
                                    <span className="d-block fz13 mt-2">Whatsapp</span>
                                </a>
                                <a
                                    className="share-btn share-btn-link"
                                    href="#"
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    <div className="social-icon">
                                        <i className="fa-solid fa-link" />
                                    </div>
                                    <span className="d-block fz13 mt-2">Copy Link</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebL>

    )
}