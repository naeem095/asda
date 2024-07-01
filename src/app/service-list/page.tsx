import WebLayout from "../web-layout/layout";

export default function Page() {
    return (
        <WebLayout>
            {/* Search Input */}
            <div className="container">
                <div className="bdrb1 pt30 pb30">
                    <h4 className="mb0">Design &amp; Creative</h4>
                    <p>Give your visitor a smooth online experience with a solid UX design</p>
                    <div className="advance-search-tab at-home6 bgc-white bdrs4 p10 position-relative zi2">
                        <div className="row">
                            <div className="col-md-9 col-lg-8 col-xl-10">
                                <div className="advance-search-field mb10-sm">
                                    <form className="form-search position-relative">
                                        <div className="box-search">
                                            <span className="icon far fa-magnifying-glass" />
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
                                                                <div className="item_title">
                                                                    mobile app development
                                                                </div>
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
                                                    Delivery Time
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
                                                <div className="radio-element">
                                                    <div className="form-check d-flex align-items-center mb10">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="flexRadioDefault1a"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexRadioDefault1a"
                                                        >
                                                            Express 24H
                                                        </label>
                                                        <span className="right-tags">(1,945)</span>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center mb10">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="flexRadioDefault2a"
                                                            defaultChecked="checked"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexRadioDefault2a"
                                                        >
                                                            Up to 3 days
                                                        </label>
                                                        <span className="right-tags">(8,136)</span>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center mb10">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="flexRadioDefault3a"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexRadioDefault3a"
                                                        >
                                                            Up to 7 days
                                                        </label>
                                                        <span className="right-tags">(917)</span>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="flexRadioDefault4a"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexRadioDefault4a"
                                                        >
                                                            Anytime
                                                        </label>
                                                        <span className="right-tags">(240)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent card mb20 pb0">
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
                                                    Budget
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
                                    <div className="bg-transparent card mb20 pb5">
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
                                                    Design Tool
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
                                                <div className="checkbox-style1 mb15">
                                                    <label className="custom_checkbox">
                                                        Adobe Photoshop
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(1,945)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Figma
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(8,136)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Sketch
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(917)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Adobe XD
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(240)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Balsamiq
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(2,460)</span>
                                                    </label>
                                                </div>
                                                <a className="text-thm" href="">
                                                    +20 more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent card mb20 pb5">
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
                                                    Location
                                                </button>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse3"
                                            className="collapse show"
                                            aria-labelledby="heading3"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body card-body px-0 pt-0">
                                                <div className="search_area mb15">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="What are you looking for?"
                                                    />
                                                    <label>
                                                        <span className="flaticon-loupe" />
                                                    </label>
                                                </div>
                                                <div className="checkbox-style1 mb15">
                                                    <label className="custom_checkbox">
                                                        United States
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(1,945)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        United Kingdom
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(8,136)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Canada
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(917)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Germany
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(240)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Turkey
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(2,460)</span>
                                                    </label>
                                                </div>
                                                <a className="text-thm" href="">
                                                    +20 more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent card mb20 pb5">
                                        <div className="card-header active" id="heading4">
                                            <h4>
                                                <button
                                                    className="btn btn-link ps-0"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse4"
                                                    aria-expanded="true"
                                                    aria-controls="collapse4"
                                                >
                                                    Speaks
                                                </button>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse4"
                                            className="collapse show"
                                            aria-labelledby="heading4"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body card-body px-0 pt-0">
                                                <div className="checkbox-style1 mb15">
                                                    <label className="custom_checkbox">
                                                        Turkish
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(1,945)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        English
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(8,136)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Italian
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(917)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Spanish
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(240)</span>
                                                    </label>
                                                </div>
                                                <a className="text-thm" href="">
                                                    +20 more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent card mb20 pb0">
                                        <div className="card-header active" id="heading5">
                                            <h4>
                                                <button
                                                    className="btn btn-link ps-0"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse5"
                                                    aria-expanded="true"
                                                    aria-controls="collapse5"
                                                >
                                                    Level
                                                </button>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse5"
                                            className="collapse show"
                                            aria-labelledby="heading5"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body card-body px-0 pt-0">
                                                <div className="checkbox-style1">
                                                    <label className="custom_checkbox">
                                                        Top Rated Seller
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(1,945)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Level Two
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(8,136)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        Level One
                                                        <input type="checkbox" />
                                                        <span className="checkmark" />
                                                        <span className="right-tags">(917)</span>
                                                    </label>
                                                    <label className="custom_checkbox">
                                                        New Seller
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
                            <div className="row align-items-center mb20">
                                <div className="col-md-6">
                                    <div className="text-center text-md-start">
                                        <p className="text mb-0 mb10-sm">
                                            <span className="fw500">5,512</span> services available
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="page_control_shorting d-md-flex align-items-center justify-content-center justify-content-md-end">
                                        <div className="dropdown-lists d-block d-lg-none me-2 mb10-sm">
                                            <ul className="p-0 mb-0 text-center text-md-start">
                                                <li>
                                                    {/* Advance Features modal trigger */}
                                                    <button
                                                        type="button"
                                                        className="open-btn filter-btn-left"
                                                    >
                                                        {" "}
                                                        <img
                                                            className="me-2"
                                                            src="images/icon/all-filter-icon.svg"
                                                            alt=""
                                                        />{" "}
                                                        All Filter
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pcs_dropdown dark-color text-center text-md-end">
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
                            <div className="row">
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img className="w-100" src="images/listings/g-1.jpg" alt="" />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Web &amp; App Design
                                            </p>
                                            <h5 className="list-title">
                                                <a href="page-services-single.html">
                                                    I will design modern websites in figma or adobe xd
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-1.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme owl-loaded owl-drag">
                                                <div className="owl-stage-outer">
                                                    <div
                                                        className="owl-stage"
                                                        style={{
                                                            transform: "translate3d(-668px, 0px, 0px)",
                                                            transition: "all 0s ease 0s",
                                                            width: 2672
                                                        }}
                                                    >
                                                        <div
                                                            className="owl-item cloned"
                                                            style={{ width: 304, marginRight: 30 }}
                                                        >
                                                            <div className="item">
                                                                <img
                                                                    className="w-100"
                                                                    src="images/listings/g-4.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="" className="listing-fav fz12">
                                                                    <span className="far fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="owl-item cloned"
                                                            style={{ width: 304, marginRight: 30 }}
                                                        >
                                                            <div className="item">
                                                                <img
                                                                    className="w-100"
                                                                    src="images/listings/g-5.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="" className="listing-fav fz12">
                                                                    <span className="far fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="owl-item active"
                                                            style={{ width: 304, marginRight: 30 }}
                                                        >
                                                            <div className="item">
                                                                <img
                                                                    className="w-100"
                                                                    src="images/listings/g-2.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="" className="listing-fav fz12">
                                                                    <span className="far fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="owl-item"
                                                            style={{ width: 304, marginRight: 30 }}
                                                        >
                                                            <div className="item">
                                                                <img
                                                                    className="w-100"
                                                                    src="images/listings/g-3.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="" className="listing-fav fz12">
                                                                    <span className="far fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="owl-item"
                                                            style={{ width: 304, marginRight: 30 }}
                                                        >
                                                            <div className="item">
                                                                <img
                                                                    className="w-100"
                                                                    src="images/listings/g-4.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="" className="listing-fav fz12">
                                                                    <span className="far fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="owl-item"
                                                            style={{ width: 304, marginRight: 30 }}
                                                        >
                                                            <div className="item">
                                                                <img
                                                                    className="w-100"
                                                                    src="images/listings/g-5.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="" className="listing-fav fz12">
                                                                    <span className="far fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="owl-item cloned"
                                                            style={{ width: 304, marginRight: 30 }}
                                                        >
                                                            <div className="item">
                                                                <img
                                                                    className="w-100"
                                                                    src="images/listings/g-2.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="" className="listing-fav fz12">
                                                                    <span className="far fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="owl-item cloned"
                                                            style={{ width: 304, marginRight: 30 }}
                                                        >
                                                            <div className="item">
                                                                <img
                                                                    className="w-100"
                                                                    src="images/listings/g-3.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="" className="listing-fav fz12">
                                                                    <span className="far fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-nav">
                                                    <button
                                                        type="button"
                                                        role="presentation"
                                                        className="owl-prev"
                                                    >
                                                        <i className="far fa-arrow-left-long" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        role="presentation"
                                                        className="owl-next"
                                                    >
                                                        <i className="far fa-arrow-right-long" />
                                                    </button>
                                                </div>
                                                <div className="owl-dots">
                                                    <button role="button" className="owl-dot active">
                                                        <span />
                                                    </button>
                                                    <button role="button" className="owl-dot">
                                                        <span />
                                                    </button>
                                                    <button role="button" className="owl-dot">
                                                        <span />
                                                    </button>
                                                    <button role="button" className="owl-dot">
                                                        <span />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Art &amp; Illustration
                                            </p>
                                            <h5 className="list-title">
                                                <a href="page-services-single.html">
                                                    I will create modern flat design illustration
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-2.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Ali Tufan</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img className="w-100" src="images/listings/g-3.jpg" alt="" />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Design &amp; Creative
                                            </p>
                                            <h5 className="list-title line-clamp2">
                                                <a href="page-services-single.html">
                                                    I will build a fully responsive design in HTML,CSS,
                                                    bootstrap, and javascript
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-3.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img className="w-100" src="images/listings/g-4.jpg" alt="" />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Web &amp; App Design
                                            </p>
                                            <h5 className="list-title">
                                                <a href="page-services-single.html">
                                                    I will do mobile app development for ios and android
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-4.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img className="w-100" src="images/listings/g-5.jpg" alt="" />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Web &amp; App Design
                                            </p>
                                            <h5 className="list-title">
                                                <a href="page-services-single.html">
                                                    I will design modern websites in figma or adobe xd
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-1.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img className="w-100" src="images/listings/g-6.jpg" alt="" />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Web &amp; App Design
                                            </p>
                                            <h5 className="list-title">
                                                <a href="page-services-single.html">
                                                    I will design modern websites in figma or adobe xd
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-2.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img className="w-100" src="images/listings/g-7.jpg" alt="" />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Design &amp; Creative
                                            </p>
                                            <h5 className="list-title line-clamp2">
                                                <a href="page-services-single.html">
                                                    I will build a fully responsive design in HTML,CSS,
                                                    bootstrap, and javascript
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-3.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img className="w-100" src="images/listings/g-8.jpg" alt="" />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Web &amp; App Design
                                            </p>
                                            <h5 className="list-title">
                                                <a href="page-services-single.html">
                                                    I will do mobile app development for ios and android
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-4.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img className="w-100" src="images/listings/g-9.jpg" alt="" />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Web &amp; App Design
                                            </p>
                                            <h5 className="list-title">
                                                <a href="page-services-single.html">
                                                    I will design modern websites in figma or adobe xd
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-1.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img
                                                className="w-100"
                                                src="images/listings/g-10.jpg"
                                                alt=""
                                            />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Web &amp; App Design
                                            </p>
                                            <h5 className="list-title">
                                                <a href="page-services-single.html">
                                                    I will design modern websites in figma or adobe xd
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-2.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img
                                                className="w-100"
                                                src="images/listings/g-11.jpg"
                                                alt=""
                                            />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Design &amp; Creative
                                            </p>
                                            <h5 className="list-title line-clamp2">
                                                <a href="page-services-single.html">
                                                    I will build a fully responsive design in HTML,CSS,
                                                    bootstrap, and javascript
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-3.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="listing-style1 shadow">
                                        <div className="list-thumb">
                                            <img
                                                className="w-100"
                                                src="images/listings/g-12.jpg"
                                                alt=""
                                            />
                                            <a href="" className="listing-fav fz12">
                                                <span className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="list-content">
                                            <p className="list-text body-color fz14 mb-1">
                                                Web &amp; App Design
                                            </p>
                                            <h5 className="list-title">
                                                <a href="page-services-single.html">
                                                    I will do mobile app development for ios and android
                                                </a>
                                            </h5>
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
                                            <hr className="my-2" />
                                            <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                                <a href="">
                                                    <span className="position-relative mr10">
                                                        <img
                                                            className="rounded-circle"
                                                            src="images/team/fl-s-4.png"
                                                            alt="Freelancer Photo"
                                                        />
                                                        <span className="online-badge" />
                                                    </span>
                                                    <span className="fz14">Wanda Runo</span>
                                                </a>
                                                <div className="budget">
                                                    <p className="mb-0 body-color">
                                                        Starting at
                                                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                                                    </p>
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
        </WebL>

    )
}