import Link from "next/link";
import WebLayout from "../web-layout/layout";

export default function Page() {
    return (
        <WebLayout>
            {/* Listings All Lists */}
            <section className="pt30 pb90">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between mb30">
                        <h3 className="align-items-center d-flex gap-3 mb-0">
                            <svg
                                width={20}
                                height={18}
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.5 16.5L1 9M1 9L8.5 1.5M1 9H19"
                                    stroke="#030303"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Found Expert (200)
                        </h3>
                        <div className="align-items-center d-flex d-md-flex gap-2 justify-content-between justify-content-md-end page_control_shorting">
                            <div className="pcs_dropdown dark-color text-center text-md-end">
                                <span className="me-1">Sort by</span>
                                <select className="selectpicker show-tick">
                                    <option>All</option>
                                    <option>Price (High to Low)</option>
                                    <option>Price (Low to High)</option>
                                    <option>Rating (High to Low)</option>
                                    <option>Rating (Low to High)</option>
                                    <option>Duration (High to Low)</option>
                                    <option>Duration (Low to High)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <div className="bdrs8 bg-white p-4 shadow">
                                <div className="mb-3 text-center">
                                    <h3 className="mb-0">$100 - $150</h3>
                                    <span className="fz14">Your Price</span>
                                </div>
                                {/* Range Slider Mobile Version */}
                                <div className="range-slider-style2 mb20">
                                    <div className="range-wrapper">
                                        <div className="mb10 mt15" id="slider" />
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span id="slider-range-value1" />
                                            <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                                            <span id="slider-range-value2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="border-bottom border-top py-3 fs-15">
                                    <div className="align-items-center d-flex justify-content-between mb-2">
                                        <span className="text-muted">Application</span>
                                        <span className="fw500 text-dark">159</span>
                                    </div>
                                    <div className="align-items-center d-flex justify-content-between mb-2">
                                        <span className="text-muted">Duration</span>
                                        <span className="fw500 text-dark">11-20</span>
                                    </div>
                                    <div className="align-items-center d-flex justify-content-between mb-2">
                                        <span className="text-muted">Price</span>
                                        <span className="fw500 text-dark">$100 - $150</span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="ud-btn btn-thm w-100 mt20 stop-bidding"
                                >
                                    Stop Bidding
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-9 ps-xl-5">
                            <div>
                                <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3  shadow">
                                    {/* <a href="packmycode-job-details.html" class="stretched-link"></a> */}
                                    <div className="details">
                                        <div className="bdrb1 mb20 pb20">
                                            <div className="row g-3">
                                                <div className="col-sm">
                                                    <div className="wrapper d-flex">
                                                        <div className="thumb position-relative">
                                                            <img
                                                                className="rounded-circle mx-auto"
                                                                src="images/team/fl-1.png"
                                                                alt=""
                                                                height={80}
                                                                width={80}
                                                            />
                                                            <span className="online" />
                                                        </div>
                                                        <div className="ml20">
                                                            <h5 className="title mb-1">Kristin Watson</h5>
                                                            <p className="mb-0">
                                                                United States, Member since January 2024
                                                            </p>
                                                            <div className="align-items-center d-flex review-meta">
                                                                <div className="d-flex align-items-center text-primary rating-stars me-2">
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon half" />
                                                                    <i className="fa-star-icon none" />
                                                                </div>
                                                                <div className="mb-0 text-muted fz14">
                                                                    <span className="dark-color fw-medium me-2">(4.82)</span>94 reviews
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-auto">
                                                    <div className="align-items-center d-flex fw-medium fw500 fz14 gap-3">
                                                        <Link href="/message">
                                                            Message
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={14}
                                                                height={14}
                                                                fill="currentColor"
                                                                className="bi bi-chat-left-text ms-1"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                                            </svg>
                                                        </Link>
                                                        <Link href="freelancer-profile">
                                                            View Profile
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={17}
                                                                height={17}
                                                                fill="currentColor"
                                                                className="bi bi-eye ms-1"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="fz18">Short Description : </h5>
                                        <p className="job-des">
                                            We are seeking an experienced Shopify Developer to join our
                                            team for an exciting e-commerce project. The ideal candidate
                                            will have a strong background in Shopify development, a deep
                                            understanding of e-commerce best practices, and a passion for
                                            creating seamless online shopping experiences.
                                        </p>
                                        <div className="row mt-3 g-2">
                                            <div className="col-sm">
                                                <div className="align-items-center d-flex gap-3 text-center">
                                                    <div>
                                                        <div className="fz14">Price</div>
                                                        <div className="fw600 fz19 text-dark">$4655</div>
                                                    </div>
                                                    <span className="vr" />
                                                    <div>
                                                        <div className="fz14">Delivery Time</div>
                                                        <div className="fw600 fz19 text-dark">14 Hours</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="align-self-end col-sm-auto">
                                                <div className="d-flex gap-2">
                                                    <button type="button" className="ud-btn btn-thm2">
                                                        See Details
                                                    </button>
                                                    <button type="button" className="ud-btn btn-thm">
                                                        Accpet
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3  shadow">
                                    {/* <a href="packmycode-job-details.html" class="stretched-link"></a> */}
                                    <div className="details">
                                        <div className="bdrb1 mb20 pb20">
                                            <div className="row g-3">
                                                <div className="col-sm">
                                                    <div className="wrapper d-flex">
                                                        <div className="thumb position-relative">
                                                            <img
                                                                className="rounded-circle mx-auto"
                                                                src="images/team/fl-2.png"
                                                                alt=""
                                                                height={80}
                                                                width={80}
                                                            />
                                                            <span className="online" />
                                                        </div>
                                                        <div className="ml20">
                                                            <h5 className="title mb-1">Kristin Watson</h5>
                                                            <p className="mb-0">
                                                                United States, Member since January 2024
                                                            </p>
                                                            <div className="align-items-center d-flex review-meta">
                                                                <div className="d-flex align-items-center text-primary rating-stars me-2">
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon half" />
                                                                    <i className="fa-star-icon none" />
                                                                </div>
                                                                <div className="mb-0 text-muted fz14">
                                                                    <span className="dark-color fw-medium me-2">(4.82)</span>94 reviews
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-auto">
                                                    <div className="align-items-center d-flex fw-medium fw500 fz14 gap-3">
                                                        <Link href="/message">
                                                            Message
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={14}
                                                                height={14}
                                                                fill="currentColor"
                                                                className="bi bi-chat-left-text ms-1"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                                            </svg>
                                                        </Link>
                                                        <Link href="freelancer-profile">
                                                            View Profile
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={17}
                                                                height={17}
                                                                fill="currentColor"
                                                                className="bi bi-eye ms-1"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="fz18">Short Description : </h5>
                                        <p className="job-des">
                                            We are seeking an experienced Shopify Developer to join our
                                            team for an exciting e-commerce project. The ideal candidate
                                            will have a strong background in Shopify development, a deep
                                            understanding of e-commerce best practices, and a passion for
                                            creating seamless online shopping experiences.
                                        </p>
                                        <div className="row mt-3 g-2">
                                            <div className="col-sm">
                                                <div className="align-items-center d-flex gap-3 text-center">
                                                    <div>
                                                        <div className="fz14">Price</div>
                                                        <div className="fw600 fz19 text-dark">$4655</div>
                                                    </div>
                                                    <span className="vr" />
                                                    <div>
                                                        <div className="fz14">Delivery Time</div>
                                                        <div className="fw600 fz19 text-dark">14 Hours</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="align-self-end col-sm-auto">
                                                <div className="d-flex gap-2">
                                                    <button type="button" className="ud-btn btn-thm2">
                                                        See Details
                                                    </button>
                                                    <button type="button" className="ud-btn btn-thm">
                                                        Accpet
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3  shadow">
                                    {/* <a href="packmycode-job-details.html" class="stretched-link"></a> */}
                                    <div className="details">
                                        <div className="bdrb1 mb20 pb20">
                                            <div className="row g-3">
                                                <div className="col-sm">
                                                    <div className="wrapper d-flex">
                                                        <div className="thumb position-relative">
                                                            <img
                                                                className="rounded-circle mx-auto"
                                                                src="images/team/fl-3.png"
                                                                alt=""
                                                                height={80}
                                                                width={80}
                                                            />
                                                            <span className="online" />
                                                        </div>
                                                        <div className="ml20">
                                                            <h5 className="title mb-1">Kristin Watson</h5>
                                                            <p className="mb-0">
                                                                United States, Member since January 2024
                                                            </p>
                                                            <div className="align-items-center d-flex review-meta">
                                                                <div className="d-flex align-items-center text-primary rating-stars me-2">
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon half" />
                                                                    <i className="fa-star-icon none" />
                                                                </div>
                                                                <div className="mb-0 text-muted fz14">
                                                                    <span className="dark-color fw-medium me-2">(4.82)</span>94 reviews
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-auto">
                                                    <div className="align-items-center d-flex fw-medium fw500 fz14 gap-3">
                                                        <Link href="/message">
                                                            Message
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={14}
                                                                height={14}
                                                                fill="currentColor"
                                                                className="bi bi-chat-left-text ms-1"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                                            </svg>
                                                        </Link>
                                                        <Link href="freelancer-profile">
                                                            View Profile
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={17}
                                                                height={17}
                                                                fill="currentColor"
                                                                className="bi bi-eye ms-1"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="fz18">Short Description : </h5>
                                        <p className="job-des">
                                            We are seeking an experienced Shopify Developer to join our
                                            team for an exciting e-commerce project. The ideal candidate
                                            will have a strong background in Shopify development, a deep
                                            understanding of e-commerce best practices, and a passion for
                                            creating seamless online shopping experiences.
                                        </p>
                                        <div className="row mt-3 g-2">
                                            <div className="col-sm">
                                                <div className="align-items-center d-flex gap-3 text-center">
                                                    <div>
                                                        <div className="fz14">Price</div>
                                                        <div className="fw600 fz19 text-dark">$4655</div>
                                                    </div>
                                                    <span className="vr" />
                                                    <div>
                                                        <div className="fz14">Delivery Time</div>
                                                        <div className="fw600 fz19 text-dark">14 Hours</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="align-self-end col-sm-auto">
                                                <div className="d-flex gap-2">
                                                    <button type="button" className="ud-btn btn-thm2">
                                                        See Details
                                                    </button>
                                                    <button type="button" className="ud-btn btn-thm">
                                                        Accpet
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3  shadow">
                                    {/* <a href="packmycode-job-details.html" class="stretched-link"></a> */}
                                    <div className="details">
                                        <div className="bdrb1 mb20 pb20">
                                            <div className="row g-3">
                                                <div className="col-sm">
                                                    <div className="wrapper d-flex">
                                                        <div className="thumb position-relative">
                                                            <img
                                                                className="rounded-circle mx-auto"
                                                                src="images/team/fl-1.png"
                                                                alt=""
                                                                height={80}
                                                                width={80}
                                                            />
                                                            <span className="online" />
                                                        </div>
                                                        <div className="ml20">
                                                            <h5 className="title mb-1">Kristin Watson</h5>
                                                            <p className="mb-0">
                                                                United States, Member since January 2024
                                                            </p>
                                                            <div className="align-items-center d-flex review-meta">
                                                                <div className="d-flex align-items-center text-primary rating-stars me-2">
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon" />
                                                                    <i className="fa-star-icon half" />
                                                                    <i className="fa-star-icon none" />
                                                                </div>
                                                                <div className="mb-0 text-muted fz14">
                                                                    <span className="dark-color fw-medium me-2">(4.82)</span>94 reviews
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-auto">
                                                    <div className="align-items-center d-flex fw-medium fw500 fz14 gap-3">
                                                        <Link href="/message">
                                                            Message
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={14}
                                                                height={14}
                                                                fill="currentColor"
                                                                className="bi bi-chat-left-text ms-1"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                                            </svg>
                                                        </Link>
                                                        <Link href="freelancer-profile">
                                                            View Profile
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={17}
                                                                height={17}
                                                                fill="currentColor"
                                                                className="bi bi-eye ms-1"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="fz18">Short Description : </h5>
                                        <p className="job-des">
                                            We are seeking an experienced Shopify Developer to join our
                                            team for an exciting e-commerce project. The ideal candidate
                                            will have a strong background in Shopify development, a deep
                                            understanding of e-commerce best practices, and a passion for
                                            creating seamless online shopping experiences.
                                        </p>
                                        <div className="row mt-3 g-2">
                                            <div className="col-sm">
                                                <div className="align-items-center d-flex gap-3 text-center">
                                                    <div>
                                                        <div className="fz14">Price</div>
                                                        <div className="fw600 fz19 text-dark">$4655</div>
                                                    </div>
                                                    <span className="vr" />
                                                    <div>
                                                        <div className="fz14">Delivery Time</div>
                                                        <div className="fw600 fz19 text-dark">14 Hours</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="align-self-end col-sm-auto">
                                                <div className="d-flex gap-2">
                                                    <button type="button" className="ud-btn btn-thm2">
                                                        See Details
                                                    </button>
                                                    <button type="button" className="ud-btn btn-thm">
                                                        Accpet
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mbp_pagination mt30 text-center">
                                    <ul className="page_navigation">
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                {" "}
                                                <span className="fas fa-angle-left" />
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">
                                                2 <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                4
                                            </a>
                                        </li>
                                        <li className="page-item d-inline-block d-sm-none">
                                            <a className="page-link" href="#">
                                                ...
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                5
                                            </a>
                                        </li>
                                        <li className="page-item d-none d-sm-inline-block">
                                            <a className="page-link" href="#">
                                                ...
                                            </a>
                                        </li>
                                        <li className="page-item d-none d-sm-inline-block">
                                            <a className="page-link" href="#">
                                                20
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <span className="fas fa-angle-right" />
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="mt10 mb-0 pagination_page_count text-center">
                                        1 – 20 of 300+ property available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </WebLayout>
    )
}