import Link from "next/link"
import ProductCardListData from "@/app/data/product-card.json"
export default function ProductCardList() {
    return (
        <>
            {
                ProductCardListData.map((cardData) => {
                    return (
                        <div className="product-card border-0 card mb-4 overflow-hidden rounded-4 shadow" key={cardData.id}>
                            <Link
                                href="/product-details"
                                className="stretched-link"
                            />
                            {/* Ribbon */}
                            <div className="corner-ribbon position-absolute start-0 top-0 z-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-lightning-charge-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                                </svg>
                            </div>
                            <div className="card-body p-0">
                                <div className="g-0 row">
                                    <div className="bg-white col-lg-5 col-md-6 col-xl-4 position-relative">
                                        <div className="card-image-hover overflow-hidden position-relative h-100">
                                            {/* Start Image */}
                                            <img
                                                src={cardData.img}
                                                alt=""
                                                className="h-100 w-100 object-fit-cover"
                                            />
                                            {/* /. End Image */}
                                        </div>
                                    </div>
                                    <div className="bg-white col-lg-7 col-md-6 col-xl-5 p-3 p-lg-4 p-md-3 p-sm-4">
                                        <div className="fz14 mb-1 text-black-50 fst-italic">
                                            by{" "}
                                            <a href="#" className="fw-medium fst-normal">
                                                {cardData.author}
                                            </a>{" "}
                                            in{" "}
                                            <a href="#" className="fw-medium fst-normal">
                                                {cardData.category}
                                            </a>
                                        </div>
                                        <h4 className="fz17 mb-2">
                                            {cardData.title}
                                        </h4>
                                        <div className="mt-3 text-muted">
                                            {cardData.description}
                                        </div>
                                        <div className="align-items-center d-flex mt-3 review-meta">
                                            <div className="d-flex align-items-center text-primary rating-stars me-2">
                                                <i className="fa-star-icon" />
                                                <i className="fa-star-icon" />
                                                <i className="fa-star-icon" />
                                                <i className="fa-star-icon half" />
                                                <i className="fa-star-icon none" />
                                            </div>
                                            <div className="mb-0 text-muted fz14">
                                                <span className="dark-color fw-medium me-2">({cardData.review})</span>
                                                {cardData.reviews} reviews
                                            </div>
                                        </div>
                                    </div>
                                    <div className="align-self-center border-start col-lg-12 col-md-12 col-xl-3 p-2 p-3 p-md-3 p-sm-4 p-xxl-4">
                                        <a
                                            href=""
                                            className="end-0 me-4 mt-3 position-absolute text-black-50 top-0 d-none d-md-block"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-heart-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                                                />
                                            </svg>
                                        </a>
                                        <div className="row h-100 align-items-center justify-content-center gap-3">
                                            <div className="col col-xl-12">
                                                <div className="align-items-sm-center d-sm-flex d-xl-block">
                                                    <div className="d-flex justify-content-center align-items-end card-property-price flex-row gap-1">
                                                        <h2 className="m-0 fw-semibold fz21">${cardData.price}</h2>
                                                    </div>
                                                    <div className="flex-grow-1 mt-2 ms-sm-3 ms-xl-0 mt-xl-2 text-center text-muted">
                                                        <div className="small fw-semibold">{cardData.sales} Sales</div>
                                                        <div className="small">Last updated: {cardData.updateDate}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Start button */}
                                            <div className="col-auto d-flex gap-2 justify-content-center position-relative z-1">
                                                <Link
                                                    className="btn-thm-border fz14 rounded-1 ud-btn cart-btn d-flex align-items-center justify-content-center p-0"
                                                    href="/auth/sign-in"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Add to Cart"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-shopping-cart"
                                                    >
                                                        <circle cx={9} cy={21} r={1} />
                                                        <circle cx={20} cy={21} r={1} />
                                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                    </svg>
                                                </Link>
                                                <Link
                                                    className="btn-thm-border fz14 px-3 py-2 rounded-1 ud-btn"
                                                    target="_blank"
                                                    href="/product-preview-ifrem"
                                                >
                                                    Live Preview
                                                </Link>
                                            </div>
                                            {/* /.End button */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}