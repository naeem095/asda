
import Link from "next/link";
import WebLayout from "../web-layout/layout";
import ProductCardList from "../components/product-cards/product-card-list";

export default function productList() {
    return (
        <WebLayout>
            {/* Search Input */}
            <div className="container">
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
                                                            checked
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
                                                        <input type="checkbox" checked />
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
                                                        <input type="checkbox" checked />
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
                                                        <input type="checkbox" checked />
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
                                                        <input type="checkbox" checked />
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
                                            <ul className="p-0 mb-0 text-center text-md-start list-unstyled">
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
                            <ProductCardList />
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