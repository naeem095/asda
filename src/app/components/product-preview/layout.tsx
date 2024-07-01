"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import 'magnific-popup/dist/magnific-popup.css';
// import $ from 'jquery'; // Ensure jQuery is imported

export default function ProductPreview() {

    // useEffect(() => {
    //     // Initialize Magnific Popup on your gallery
    //     $('.grid-images-item-wrap').magnificPopup({
    //         type: 'image',
    //         gallery: {
    //             enabled: true
    //         }
    //     });
    //     $('.popup-youtube').magnificPopup({
    //         type: 'iframe',
    //     });
    //     $('#browse-gallery-link').on('click', function () {
    //         $('.grid-images-item-wrap').magnificPopup('open');
    //     });
    // }, []);

    return (
        <div className="bgc-dark mb10 p-2 p-sm-3 position-relative rounded-2">
            <div className="position-absolute start-0 trending-ribbon z-3">
                <div className="fw-bold position-relative text-white">
                    <i className="fa-bolt-lightning fa-solid position-absolute" />
                    <span className="d-block opacity-0 overflow-hidden text-nowrap">
                        Trending
                    </span>
                </div>
            </div>
            <div className="position-relative preview-image-thumb">
                <img src="../images/product-details/preview.avif" alt="" className="w-100" />
                <Link
                    href="/product-preview-ifrem"
                    target="_blank"
                    className="align-items-center d-flex h-100 justify-content-center opacity-0 position-absolute preview-overlay start-0 text-white top-0 w-100"
                >
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={80}
                            height={80}
                            fill="currentColor"
                            className="bi bi-columns ms-2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm8.5 0v8H15V2zm0 9v3H15v-3zm-1-9H1v3h6.5zM1 14h6.5V6H1z" />
                        </svg>
                        <div className="align-items-center d-flex gap-2 mt-2">
                            Live Preview
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-box-arrow-up-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </Link>
            </div>
            {/* preview image screenshots */}
            <div id="screenshots" className="d-none">
                <a href="images/preview.avif" />
                <a href="images/preview.avif" />
                <a href="images/preview.avif" />
            </div>
            <div className="d-flex flex-wrap gap-2 justify-content-center mt-2 mt-sm-3">
                <a
                    href="packmycode-product-preview-ifrem.html"
                    target="_blank"
                    className="btn-thm px-4 py-2 rounded-2 ud-btn"
                >
                    Live Preview
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        className="bi bi-columns ms-2"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm8.5 0v8H15V2zm0 9v3H15v-3zm-1-9H1v3h6.5zM1 14h6.5V6H1z" />
                    </svg>
                </a>
                <a
                    href="#screenshots"
                    className="ud-btn btn-soft-primary px-4 py-2 rounded-2 screenshots"
                >
                    Screenshots
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        className="bi bi-card-image ms-2"
                        viewBox="0 0 16 16"
                    >
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}