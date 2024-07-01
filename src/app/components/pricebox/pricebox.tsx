export default function PriceBox() {
    return (
        <div className="mb20 p20 position-relative rounded-3 shadow">
            <div className="price-content">
                {/* After download notification */}
                <div className="border download-item mb-3 p-3 rounded-4 shadow-xs">
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <svg
                                width={40}
                                height={45}
                                viewBox="0 0 44 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.1461 46.2126H8.92226V9.17619C10.561 8.59499 11.7381 7.03002 11.7381 5.19453C11.7381 2.86551 9.84334 0.970703 7.51432 0.970703C5.1853 0.970703 3.29049 2.86551 3.29049 5.19453C3.29049 7.03002 4.46763 8.59499 6.10638 9.17619V46.2126H1.88255C1.10499 46.2126 0.474609 46.843 0.474609 47.6205C0.474609 48.3981 1.10499 49.0285 1.88255 49.0285H13.1461C13.9236 49.0285 14.554 48.3981 14.554 47.6205C14.554 46.843 13.9236 46.2126 13.1461 46.2126Z"
                                    fill="#EFA507"
                                />
                                <path
                                    d="M10.7383 33.7993L26.6124 29.2638C26.9066 29.1799 27.1654 29.0023 27.3497 28.7581C27.5339 28.5139 27.6336 28.2162 27.6336 27.9103V16.6468C27.6336 16.0179 27.2168 15.466 26.6124 15.2933L10.7383 10.7578V33.7993Z"
                                    fill="#EFA507"
                                />
                                <path
                                    d="M43.0254 26.4584L29.715 22V27.8204C29.715 29.7328 28.4368 31.4365 26.6061 31.962L24 32.7105V33.5633C24 34.5523 24.9673 35.2331 25.8802 34.9253L43.0254 29.1824C44.3233 28.7484 44.3265 26.8935 43.0254 26.4584Z"
                                    fill="#EFA507"
                                />
                            </svg>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h6>You have bought this item.</h6>
                            <div className="d-flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    className="btn-thm fz13 px-3 py-2 text-nowrap ud-btn rounded-3 fw-medium flex-fill"
                                >
                                    Hire Freelancer
                                </button>
                                <div className="dropdown flex-fill">
                                    <button
                                        className="ud-btn btn-soft-primary fz13 px-3 py-2 rounded-3 fw-medium dropdown-toggle w-100"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Download
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                All Files &amp; Documentation
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                License Certificate &amp; Purchase Code (PDF)
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                License Certificate &amp; Purchase code (text)
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="align-items-center d-flex mt-2 review-meta fz14">
                                <span className="me-2">Your Review:</span>
                                <div className="d-flex align-items-center text-primary rating-stars me-1">
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon half" />
                                    <i className="fa-star-icon none" />
                                </div>
                                <div className="mb-0 text-muted">
                                    <span className="dark-color fw-medium">(4.82)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="align-items-center d-flex flex-wrap gap-2 justify-content-between">
                    {/* License dropdown */}
                    <div className="dropdown license-dropdown">
                        <button
                            id="license-button"
                            className="dropdown-toggle px-3 py-2 rounded-2 ud-btn btn-soft-primary"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Regular License
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item d-block license-item"
                                    href="#"
                                    data-type="Regular License"
                                    data-price={269}
                                    data-old-price={369}
                                    data-extend-support-old-price="9.63"
                                    data-extend-support-current-price="4.13"
                                >
                                    <div className="d-flex align-items-center gap-1 mb-2">
                                        <h5 className="fz16 fw-bold mb-0">
                                            Regular License
                                        </h5>
                                        <span className="badge text-bg-success selected-badge">
                                            Selected
                                        </span>
                                        <div className="fw-bold fz21 ms-auto">
                                            <sup>$</sup>269
                                        </div>
                                    </div>
                                    <p className="fz14 lh-base text-body mb-0">
                                        Use, by you or one client, in a single end product
                                        which end users <strong>are not</strong> charged
                                        for. The total price includes the item price and a
                                        buyer fee.
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-block license-item"
                                    href="#"
                                    data-type="Extended License"
                                    data-price={2950}
                                    data-old-price=""
                                    data-extend-support-old-price="19.26"
                                    data-extend-support-current-price="8.26"
                                >
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h5 className="fz16 fw-bold mb-0">
                                            Extended License
                                        </h5>
                                        <span
                                            className="badge text-bg-success selected-badge"
                                            style={{ display: "none" }}
                                        >
                                            Selected
                                        </span>
                                        <div className="fw-bold fz21">
                                            <sup>$</sup>2950
                                        </div>
                                    </div>
                                    <p className="fz14 lh-base text-body mb-0">
                                        {" "}
                                        by you or one client, in a single end product
                                        which end users <strong>can be</strong> charged
                                        for. The total price includes the item price and a
                                        buyer fee.
                                    </p>
                                </a>
                            </li>
                            <li>
                                <div className="text-center">
                                    <a
                                        href="licenses.html"
                                        className="fw-medium fz14 text-primary"
                                    >
                                        View license details
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={15}
                                            height={15}
                                            fill="currentColor"
                                            className="bi bi-chevron-double-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Product Price */}
                    <div className="price d-flex align-items-center gap-2 mb-0">
                        <div
                            id="old-price"
                            className="fw-normal fz19 text-black-50 text-decoration-line-through"
                        >
                            <sup>$</sup>369
                        </div>
                        <span
                            id="current-price"
                            className="text-active fz32 fw-bold"
                        >
                            <sup>$</sup>269
                        </span>
                    </div>
                </div>
                <hr className="opacity-100 mb20 mt10" />
                <div className="h5 mb-2">High-converting Landing Pages</div>
                <p className="text fz14">
                    Customize the whole website with your images and content.
                    Change the whole website theme matching with your business
                    color. Additionally, full SEO optimization.{" "}
                </p>
                <hr className="opacity-100 mb20" />
                <div className="list-style1">
                    <ul className="">
                        <li className="mb10">
                            <i className="bgc-thm4 fa-solid fa-check text-thm3" />
                            Quality checked by PACKMYCODE
                        </li>
                        <li className="mb10">
                            <i className="bgc-thm4 fa-solid fa-check text-thm3" />
                            Future updates
                        </li>
                        <li className="mb10">
                            <i className="bgc-thm4 fa-solid fa-check text-thm3" />6
                            months support from &nbsp;
                            <a href="#" className="text-primary">
                                easital_tech
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="opacity-100 mb20" />
                {/* Extend support */}
                <div className="extend-support form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="extendSupport"
                    />
                    <label
                        className="align-items-center d-flex form-check-label fw-medium gap-2 lh-1 text-dark"
                        htmlFor="extendSupport"
                    >
                        <span>Extend support to 12 months</span>
                        <span className="align-items-end d-flex gap-2 ms-auto">
                            <span
                                id="extend-support-old-price"
                                className="text-black-50 text-decoration-line-through"
                            >
                                $9.63
                            </span>
                            <span
                                id="extend-support-current-price"
                                className="fw-bold fz19 "
                            >
                                $8.26
                            </span>
                        </span>
                    </label>
                </div>
                <div className="d-grid gap-2">
                    <a href="" className="ud-btn btn-thm">
                        Add To Cart
                        <i className="fa-solid fa-cart-plus ms-2" />
                    </a>
                </div>
                <div className="font-monospace fst-italic fz13 mt-1 text-center">
                    Price is in US dollars and excludes tax and handling fees
                </div>
            </div>
        </div>
    )
}