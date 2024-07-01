import WebLayout from "../web-layout/layout";
import { Orbitron } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
    subsets: ['latin'],
    display: 'swap',
})

export default function Page() {
    return (
        <WebLayout>
            <div className="container">
                {/* Search Input */}
                <div className="advance-search-tab at-home6 bgc-white bdrs4 p10 position-relative zi2 mt30">
                    <div className="row">
                        <div className="col-md-9 col-lg-8 col-xl-10">
                            <div className="advance-search-field mb10-sm">
                                <form className="form-search position-relative">
                                    <div className="box-search">
                                        <i className="icon fa-solid fa-magnifying-glass"></i>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="search"
                                            placeholder="What are you looking for?"
                                        />
                                        <div className="search-suggestions">
                                            <h6 className="fz14 ml30 mt25 mb-3">Popular Search</h6>
                                            <div className="box-suggestions">
                                                <ul className="px-0 m-0 pb-4">
                                                    <li>
                                                        <div className="info-product">
                                                            <div className="item_title">mobile app development</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="info-product">
                                                            <div className="item_title">mobile app builder</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="info-product">
                                                            <div className="item_title">mobile legends</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="info-product">
                                                            <div className="item_title">
                                                                mobile app ui ux design
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="info-product">
                                                            <div className="item_title">
                                                                mobile game app development
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="info-product">
                                                            <div className="item_title">mobile app design</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-4 col-xl-2">
                            <button
                                className="align-items-center bdrs4 btn-thm2 d-flex gap-2 justify-content-center ud-btn w-100"
                                type="button"
                            >
                                <svg
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.9748 0C12.3769 0 15.9496 3.57271 15.9496 7.9748C15.9496 12.3769 12.3769 15.9496 7.9748 15.9496C3.57271 15.9496 0 12.3769 0 7.9748C0 3.57271 3.57271 0 7.9748 0ZM7.9748 14.1774C11.4013 14.1774 14.1774 11.4013 14.1774 7.9748C14.1774 4.54829 11.4013 1.77218 7.9748 1.77218C4.54829 1.77218 1.77218 4.54829 1.77218 7.9748C1.77218 11.4013 4.54829 14.1774 7.9748 14.1774ZM15.4933 14.2403L18 16.7462L16.7462 18L14.2403 15.4933L15.4933 14.2403Z"
                                        fill="white"
                                    />
                                </svg>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="fz14 mt-1">
                    <strong className="text-dark">19,035</strong> HTML Website Templates to
                    start your web project
                </div>
            </div>
            {/* Listings All Lists */}
            <section className="pt30 pb90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 pe-xl-5">
                            <div className="list-sidebar-style1 d-none d-lg-block">
                                <div className="accordion" id="accordionExample">
                                    <div className="bg-transparent card mb20 mt-0 pb10">
                                        <div className="card-header active" id="heading0">
                                            <h4>
                                                <button
                                                    className="btn btn-link ps-0 pt-0"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse0"
                                                    aria-expanded="true"
                                                    aria-controls="collapse0"
                                                >
                                                    Category
                                                </button>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse0"
                                            className="collapse show"
                                            aria-labelledby="heading0"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body card-body px-0 pt-0">
                                                <div className="checkbox-style1">
                                                    <label className="custom_checkbox">
                                                        Designer
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(1,945)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Web Developers
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(8,136)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Illustrators
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(917)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Node.js
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(240)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Project Managers
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(2,460)</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb20 pb0 bg-transparent">
                                        <div className="card-header active" id="heading1">
                                            <h4>
                                                <button
                                                    className="btn btn-link ps-0"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse1"
                                                    aria-expanded="true"
                                                    aria-controls="collapse1"
                                                >
                                                    Salary
                                                </button>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse1"
                                            className="collapse show"
                                            aria-labelledby="heading1"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body card-body px-0 pt-0">
                                                {/* Range Slider Desktop Version */}
                                                <div className="range-slider-style1">
                                                    <div className="range-wrapper">
                                                        <div className="slider-range mb10 mt15" />
                                                        <div className="d-flex align-items-center">
                                                            <input
                                                                type="text"
                                                                className="amount"
                                                                placeholder="$20"
                                                            />
                                                            <span className="fa-sharp fa-solid fa-minus mx-2 dark-color" />
                                                            <input
                                                                type="text"
                                                                className="amount2"
                                                                placeholder="$70987"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb20 pb5 bg-transparent">
                                        <div className="card-header active" id="heading2">
                                            <h4>
                                                <button
                                                    className="btn btn-link ps-0"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse2"
                                                    aria-expanded="true"
                                                    aria-controls="collapse2"
                                                >
                                                    Job Type
                                                </button>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse2"
                                            className="collapse show"
                                            aria-labelledby="heading2"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body card-body px-0 pt-0">
                                                <div className="widget-wrapper pr20">
                                                    <div className="switch-style1">
                                                        <div className="form-check form-switch">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="flexSwitchCheckDefault1"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexSwitchCheckDefault1"
                                                            >
                                                                Freelance
                                                            </label>
                                                            <span className="right-tags">(1,945)</span>
                                                        </div>
                                                    </div>
                                                    <div className="switch-style1">
                                                        <div className="form-check form-switch">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="flexSwitchCheckDefault2"
                                                                defaultChecked="checked"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexSwitchCheckDefault2"
                                                            >
                                                                Full Time
                                                            </label>
                                                            <span className="right-tags">(8,136)</span>
                                                        </div>
                                                    </div>
                                                    <div className="switch-style1">
                                                        <div className="form-check form-switch">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="flexSwitchCheckDefault3"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexSwitchCheckDefault3"
                                                            >
                                                                Part Time
                                                            </label>
                                                            <span className="right-tags">(917)</span>
                                                        </div>
                                                    </div>
                                                    <div className="switch-style1">
                                                        <div className="form-check form-switch">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="flexSwitchCheckDefault4"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexSwitchCheckDefault4"
                                                            >
                                                                Internship
                                                            </label>
                                                            <span className="right-tags">(240)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a className="text-thm" href="">
                                                    +20 more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-transparent">
                                        <div className="card-header active" id="heading3">
                                            <h4>
                                                <button
                                                    className="btn btn-link ps-0"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse3"
                                                    aria-expanded="true"
                                                    aria-controls="collapse3"
                                                >
                                                    Level
                                                </button>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse3"
                                            className="collapse show"
                                            aria-labelledby="heading3"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body card-body p-0">
                                                <div className="checkbox-style1">
                                                    <label className="custom_checkbox">
                                                        All
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(1,945)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Internship
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(8,136)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Entery Level
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(917)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Mid-Senior
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(240)</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="navtab-style1">
                                <div className="border-bottom mb-4">
                                    <div className="row align-items-center">
                                        <div className="col-sm text-center text-sm-start">
                                            <div>
                                                <span className="fw500">5,512</span> jobs available
                                            </div>
                                        </div>
                                        <div className="col">
                                            <nav>
                                                <div
                                                    className="border-0 nav nav-tabs"
                                                    id="nav-tab2"
                                                    role="tablist"
                                                >
                                                    <button
                                                        className="nav-link fw600 active"
                                                        id="nav-item1-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#nav-item1"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="nav-item1"
                                                        aria-selected="true"
                                                    >
                                                        Live Job
                                                    </button>
                                                    <button
                                                        className="nav-link fw600"
                                                        id="nav-item2-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#nav-item2"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="nav-item2"
                                                        aria-selected="false"
                                                    >
                                                        Regular Job
                                                    </button>
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="col-sm-auto">
                                            <div className="align-items-center d-flex d-md-flex gap-2 justify-content-between justify-content-md-end page_control_shorting">
                                                <div className="dropdown-lists d-block d-lg-none">
                                                    <ul className="p-0 mb-0 text-center text-md-start">
                                                        <li>
                                                            {/* Advance Features modal trigger */}
                                                            <button
                                                                type="button"
                                                                className="open-btn filter-btn-left"
                                                            >
                                                                {" "}
                                                                <img
                                                                    className="me-1"
                                                                    src="images/icon/all-filter-icon.svg"
                                                                    alt=""
                                                                />{" "}
                                                                All Filter
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pcs_dropdown dark-color text-center text-md-end d-flex">
                                                    <span className="me-1">Sort by</span>
                                                    <select className="selectpicker show-tick">
                                                        <option>Best Selling</option>
                                                        <option>Recommended</option>
                                                        <option>New Arrivals</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content" id="nav-tabContent">
                                    <div
                                        className="tab-pane fade fz15 text active show"
                                        id="nav-item1"
                                        role="tabpanel"
                                        aria-labelledby="nav-item1-tab"
                                    >
                                        <div>
                                            <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3 shadow active">
                                                {/* Start Ribbon */}
                                                <span className="end-0 overflow-hidden position-absolute top-0 text-center ribbon">
                                                    <span className="ribbon-inner-wrap">
                                                        <span className="ribbon-border position-relative" />
                                                        <span className="fz11 position-absolute ribbon-star text-white w-100">
                                                            <i className="fa-solid fa-star" />
                                                        </span>
                                                    </span>
                                                </span>
                                                <div className="details">
                                                    <div className="bottom-0 end-0 mb-1 mb-2 me-3 position-absolute small">
                                                        Posted: 2 Days Ago
                                                    </div>
                                                    <div className="pb-1 text-dark">
                                                        <span className="fz17 fw500">$95k – $150k</span> Hourly
                                                    </div>
                                                    <h5 className="fz18">
                                                        Chemist (QC &amp; QA/Lab) for Oil Refinery Industries
                                                    </h5>
                                                    <p className="job-des">
                                                        If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't anything embarrassing hidden
                                                        in the middle of text. All the Lorem Ipsum generators on
                                                        the Internet tend.
                                                    </p>
                                                    <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
                                                        <div>
                                                            <span className="fw500 text-dark">1-5</span> Days
                                                        </div>
                                                        <span className="vr" />
                                                        <div>Expensive</div>
                                                        <span className="vr" />
                                                        <div>
                                                            Total Biding:{" "}
                                                            <span className="fw500 text-dark">200</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="countdown"
                                                        className="countdown-wrap end-0 top-0"
                                                    >
                                                        <ul className="d-flex gap-3 list-unstyled mb-sm-0 p-0">
                                                            <li className="text-center">
                                                                <div
                                                                    id="days"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                />
                                                                <div className="fz12">days</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="hours"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                />
                                                                <div className="fz12">Hours</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="minutes"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                />
                                                                <div className="fz12">Minutes</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="seconds"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                />
                                                                <div className="fz12">Seconds</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-warning fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Edit"
                                                        >
                                                            <i className="fa-solid fa-pen" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-primary fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Delete"
                                                        >
                                                            <i className="fa-solid fa-trash" />
                                                        </button>
                                                        <Link
                                                            className="btn-soft-primary fw-semibold fz14 px-3 py-2 rounded-2 ud-btn"
                                                            href="/freelancer-list"
                                                        >
                                                            See Bidding
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3 shadow active-yellow">
                                                {/* Start Ribbon */}
                                                <span className="end-0 overflow-hidden position-absolute top-0 text-center ribbon">
                                                    <span className="ribbon-inner-wrap">
                                                        <span className="ribbon-border position-relative" />
                                                        <span className="fz11 position-absolute ribbon-star text-white w-100">
                                                            <i className="fa-solid fa-star" />
                                                        </span>
                                                    </span>
                                                </span>
                                                <div className="details">
                                                    <div className="bottom-0 end-0 mb-1 mb-2 me-3 position-absolute small">
                                                        Posted: 2 Days Ago
                                                    </div>
                                                    <div className="pb-1 text-dark">
                                                        <span className="fz17 fw500">$95k – $150k</span> Hourly
                                                    </div>
                                                    <h5 className="fz18">
                                                        Sr. Executive / Executive, Cradit Realization
                                                    </h5>
                                                    <p className="job-des">
                                                        If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't anything embarrassing hidden
                                                        in the middle of text. All the Lorem Ipsum generators on
                                                        the Internet tend.
                                                    </p>
                                                    <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
                                                        <div>
                                                            <span className="fw500 text-dark">1-5</span> Days
                                                        </div>
                                                        <span className="vr" />
                                                        <div>Expensive</div>
                                                        <span className="vr" />
                                                        <div>
                                                            Total Biding:{" "}
                                                            <span className="fw500 text-dark">200</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="countdown"
                                                        className="countdown-wrap end-0 top-0"
                                                    >
                                                        <ul className="d-flex gap-3 list-unstyled mb-sm-0 p-0">
                                                            <li className="text-center">
                                                                <div
                                                                    id="days"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    229
                                                                </div>
                                                                <div className="fz12">days</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="hours"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    13
                                                                </div>
                                                                <div className="fz12">Hours</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="minutes"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    9
                                                                </div>
                                                                <div className="fz12">Minutes</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="seconds"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    45
                                                                </div>
                                                                <div className="fz12">Seconds</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-warning fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Edit"
                                                        >
                                                            <i className="fa-solid fa-pen" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-primary fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Delete"
                                                        >
                                                            <i className="fa-solid fa-trash" />
                                                        </button>
                                                        <Link
                                                            className="btn-soft-primary fw-semibold fz14 px-3 py-2 rounded-2 ud-btn"
                                                            href="/freelancer-list"
                                                        >
                                                            See Bidding
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3 shadow">
                                                {/* Start Ribbon */}
                                                <span className="end-0 overflow-hidden position-absolute top-0 text-center ribbon">
                                                    <span className="ribbon-inner-wrap">
                                                        <span className="ribbon-border position-relative" />
                                                        <span className="fz11 position-absolute ribbon-star text-white w-100">
                                                            <i className="fa-solid fa-star" />
                                                        </span>
                                                    </span>
                                                </span>
                                                <div className="details">
                                                    <div className="bottom-0 end-0 mb-1 mb-2 me-3 position-absolute small">
                                                        Posted: 2 Days Ago
                                                    </div>
                                                    <div className="pb-1 text-dark">
                                                        <span className="fz17 fw500">$95k – $150k</span> Hourly
                                                    </div>
                                                    <h5 className="fz18">
                                                        Sr. Executive / Executive, Cradit Realization
                                                    </h5>
                                                    <p className="job-des">
                                                        If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't anything embarrassing hidden
                                                        in the middle of text. All the Lorem Ipsum generators on
                                                        the Internet tend.
                                                    </p>
                                                    <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
                                                        <div>
                                                            <span className="fw500 text-dark">1-5</span> Days
                                                        </div>
                                                        <span className="vr" />
                                                        <div>Expensive</div>
                                                        <span className="vr" />
                                                        <div>
                                                            Total Biding:{" "}
                                                            <span className="fw500 text-dark">200</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="countdown"
                                                        className="countdown-wrap end-0 top-0"
                                                    >
                                                        <ul className="d-flex gap-3 list-unstyled mb-sm-0 p-0">
                                                            <li className="text-center">
                                                                <div
                                                                    id="days"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    229
                                                                </div>
                                                                <div className="fz12">days</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="hours"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    13
                                                                </div>
                                                                <div className="fz12">Hours</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="minutes"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    9
                                                                </div>
                                                                <div className="fz12">Minutes</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="seconds"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    45
                                                                </div>
                                                                <div className="fz12">Seconds</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-warning fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Edit"
                                                        >
                                                            <i className="fa-solid fa-pen" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-primary fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Delete"
                                                        >
                                                            <i className="fa-solid fa-trash" />
                                                        </button>
                                                        <Link
                                                            className="btn-soft-primary fw-semibold fz14 px-3 py-2 rounded-2 ud-btn"
                                                            href="/freelancer-list"
                                                        >
                                                            See Bidding
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3 shadow">
                                                <div className="details">
                                                    <div className="bottom-0 end-0 mb-1 mb-2 me-3 position-absolute small">
                                                        Posted: 2 Days Ago
                                                    </div>
                                                    <div className="pb-1 text-dark">
                                                        <span className="fz17 fw500">$95k – $150k</span> Hourly
                                                    </div>
                                                    <h5 className="fz18">
                                                        Sr. Executive / Executive, Cradit Realization
                                                    </h5>
                                                    <p className="job-des">
                                                        If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't anything embarrassing hidden
                                                        in the middle of text. All the Lorem Ipsum generators on
                                                        the Internet tend.
                                                    </p>
                                                    <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
                                                        <div>
                                                            <span className="fw500 text-dark">1-5</span> Days
                                                        </div>
                                                        <span className="vr" />
                                                        <div>Expensive</div>
                                                        <span className="vr" />
                                                        <div>
                                                            Total Biding:{" "}
                                                            <span className="fw500 text-dark">200</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="countdown"
                                                        className="countdown-wrap end-0 top-0"
                                                    >
                                                        <ul className="d-flex gap-3 list-unstyled mb-sm-0 p-0">
                                                            <li className="text-center">
                                                                <div
                                                                    id="days"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    229
                                                                </div>
                                                                <div className="fz12">days</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="hours"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    13
                                                                </div>
                                                                <div className="fz12">Hours</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="minutes"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    9
                                                                </div>
                                                                <div className="fz12">Minutes</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="seconds"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    45
                                                                </div>
                                                                <div className="fz12">Seconds</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-warning fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Edit"
                                                        >
                                                            <i className="fa-solid fa-pen" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-primary fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Delete"
                                                        >
                                                            <i className="fa-solid fa-trash" />
                                                        </button>
                                                        <Link
                                                            className="btn-soft-primary fw-semibold fz14 px-3 py-2 rounded-2 ud-btn"
                                                            href="/freelancer-list"
                                                        >
                                                            See Bidding
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3 shadow">
                                                <div className="details">
                                                    <div className="bottom-0 end-0 mb-1 mb-2 me-3 position-absolute small">
                                                        Posted: 2 Days Ago
                                                    </div>
                                                    <div className="pb-1 text-dark">
                                                        <span className="fz17 fw500">$95k – $150k</span> Hourly
                                                    </div>
                                                    <h5 className="fz18">
                                                        Sr. Executive / Executive, Cradit Realization
                                                    </h5>
                                                    <p className="job-des">
                                                        If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't anything embarrassing hidden
                                                        in the middle of text. All the Lorem Ipsum generators on
                                                        the Internet tend.
                                                    </p>
                                                    <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
                                                        <div>
                                                            <span className="fw500 text-dark">1-5</span> Days
                                                        </div>
                                                        <span className="vr" />
                                                        <div>Expensive</div>
                                                        <span className="vr" />
                                                        <div>
                                                            Total Biding:{" "}
                                                            <span className="fw500 text-dark">200</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="countdown"
                                                        className="countdown-wrap end-0 top-0"
                                                    >
                                                        <ul className="d-flex gap-3 list-unstyled mb-sm-0 p-0">
                                                            <li className="text-center">
                                                                <div
                                                                    id="days"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    229
                                                                </div>
                                                                <div className="fz12">days</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="hours"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    13
                                                                </div>
                                                                <div className="fz12">Hours</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="minutes"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    9
                                                                </div>
                                                                <div className="fz12">Minutes</div>
                                                            </li>
                                                            <li className="text-center">
                                                                <div
                                                                    id="seconds"
                                                                    className={`${orbitron.className} fw600 fz19 text-dark font-orbitron`}
                                                                >
                                                                    45
                                                                </div>
                                                                <div className="fz12">Seconds</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-warning fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Edit"
                                                        >
                                                            <i className="fa-solid fa-pen" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-primary fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Delete"
                                                        >
                                                            <i className="fa-solid fa-trash" />
                                                        </button>
                                                        <Link
                                                            className="btn-soft-primary fw-semibold fz14 px-3 py-2 rounded-2 ud-btn"
                                                            href="/freelancer-list"
                                                        >
                                                            See Bidding
                                                        </Link>
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
                                    <div
                                        className="tab-pane fade fz15 text"
                                        id="nav-item2"
                                        role="tabpanel"
                                        aria-labelledby="nav-item2-tab"
                                    >
                                        <div>
                                            <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3 shadow">
                                                <div className="details">
                                                    <div className="bottom-0 end-0 mb-1 mb-2 me-3 position-absolute small">
                                                        Posted: 2 Days Ago
                                                    </div>
                                                    <div className="pb-1 text-dark">
                                                        <span className="fz17 fw500">$95k – $150k</span> Hourly
                                                    </div>
                                                    <h5 className="fz18">
                                                        Sr. Executive / Executive, Cradit Realization
                                                    </h5>
                                                    <p className="job-des">
                                                        If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't anything embarrassing hidden
                                                        in the middle of text. All the Lorem Ipsum generators on
                                                        the Internet tend.
                                                    </p>
                                                    <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
                                                        <div>
                                                            <span className="fw500 text-dark">1-5</span> Days
                                                        </div>
                                                        <span className="vr" />
                                                        <div>Expensive</div>
                                                        <span className="vr" />
                                                        <div>
                                                            Total Biding:{" "}
                                                            <span className="fw500 text-dark">200</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-warning fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Edit"
                                                        >
                                                            <i className="fa-solid fa-pen" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-primary fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Delete"
                                                        >
                                                            <i className="fa-solid fa-trash" />
                                                        </button>
                                                        <Link
                                                            className="btn-soft-primary fw-semibold fz14 px-3 py-2 rounded-2 ud-btn"
                                                            href="/freelancer-list"
                                                        >
                                                            See Bidding
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3 shadow">
                                                <div className="details">
                                                    <div className="bottom-0 end-0 mb-1 mb-2 me-3 position-absolute small">
                                                        Posted: 2 Days Ago
                                                    </div>
                                                    <div className="pb-1 text-dark">
                                                        <span className="fz17 fw500">$95k – $150k</span> Hourly
                                                    </div>
                                                    <h5 className="fz18">
                                                        Sr. Executive / Executive, Cradit Realization
                                                    </h5>
                                                    <p className="job-des">
                                                        If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't anything embarrassing hidden
                                                        in the middle of text. All the Lorem Ipsum generators on
                                                        the Internet tend.
                                                    </p>
                                                    <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
                                                        <div>
                                                            <span className="fw500 text-dark">1-5</span> Days
                                                        </div>
                                                        <span className="vr" />
                                                        <div>Expensive</div>
                                                        <span className="vr" />
                                                        <div>
                                                            Total Biding:{" "}
                                                            <span className="fw500 text-dark">200</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-warning fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Edit"
                                                        >
                                                            <i className="fa-solid fa-pen" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-primary fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Delete"
                                                        >
                                                            <i className="fa-solid fa-trash" />
                                                        </button>
                                                        <Link
                                                            className="btn-soft-primary fw-semibold fz14 px-3 py-2 rounded-2 ud-btn"
                                                            href="/freelancer-list"
                                                        >
                                                            See Bidding
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="align-items-start bdr1 d-xl-flex job-list-style1 mb-3 shadow">
                                                <div className="details">
                                                    <div className="bottom-0 end-0 mb-1 mb-2 me-3 position-absolute small">
                                                        Posted: 2 Days Ago
                                                    </div>
                                                    <div className="pb-1 text-dark">
                                                        <span className="fz17 fw500">$95k – $150k</span> Hourly
                                                    </div>
                                                    <h5 className="fz18">
                                                        Sr. Executive / Executive, Cradit Realization
                                                    </h5>
                                                    <p className="job-des">
                                                        If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't anything embarrassing hidden
                                                        in the middle of text. All the Lorem Ipsum generators on
                                                        the Internet tend.
                                                    </p>
                                                    <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
                                                        <div>
                                                            <span className="fw500 text-dark">1-5</span> Days
                                                        </div>
                                                        <span className="vr" />
                                                        <div>Expensive</div>
                                                        <span className="vr" />
                                                        <div>
                                                            Total Biding:{" "}
                                                            <span className="fw500 text-dark">200</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-warning fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Edit"
                                                        >
                                                            <i className="fa-solid fa-pen" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn-icon btn-soft-primary fw-medium fz14 p-0 rounded-2 ud-btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Delete"
                                                        >
                                                            <i className="fa-solid fa-trash" />
                                                        </button>
                                                        <Link
                                                            className="btn-soft-primary fw-semibold fz14 px-3 py-2 rounded-2 ud-btn"
                                                            href="/freelancer-list"
                                                        >
                                                            See Bidding
                                                        </Link>
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
                        </div>
                    </div>
                </div>
            </section>
        </WebLayout>
    )
}