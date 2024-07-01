import Link from "next/link"
import ProductPreview from "../components/product-preview/layout"
import PriceBox from "../components/pricebox/pricebox"
import CommunityBadgesCard from "../components/community-badges-card/community-badges-card"
import Comments from "../components/comments/comments"
import Reviews from "../components/reviews/reviews"
import WebLayout from "../web-layout/layout"

export default function ProductDetails() {
    return (
        <WebLayout>
            {/* Service Details */}
            <section className="pt30 pb90 pb30-md">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8 pe-xxl-5">
                            <div className="">
                                <div className="row mb20">
                                    <div className="col-xl-12">
                                        <div className="position-relative">
                                            <h2>
                                                Bridge - Creative Elementor and WooCommerce WordPress Theme
                                            </h2>
                                            <div className="align-items-center d-flex flex-wrap gap-2 gap-sm-3">
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
                                                <div className="fz14">
                                                    <i className="flaticon-file-1 vam fz20 me-2" />
                                                    <span className="dark-color fw-bold">210,027</span> sales
                                                </div>
                                                {/* <ddiv class="fz14"><i class="flaticon-website vam fz20 me-2"></i> 902 Views</ddiv> */}
                                                <div className="align-items-center d-flex review-meta">
                                                    <div className="d-flex align-items-center text-primary rating-stars me-2">
                                                        <i className="fa-star-icon" />
                                                        <i className="fa-star-icon" />
                                                        <i className="fa-star-icon" />
                                                        <i className="fa-star-icon half" />
                                                        <i className="fa-star-icon none" />
                                                    </div>
                                                    <div className="mb-0 text-muted fz14">
                                                        <span className="dark-color fw-medium me-2">
                                                            (4.82)
                                                        </span>
                                                        94 reviews
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <hr class="opacity-100 mb30 mt30"> */}
                                <ProductPreview />
                                <div className="service-about">
                                    <div className="mb-4 mb-lg-5">
                                        {/* <nav>
                                            <div class="nav nav-tabs mb20" id="nav-tab2" role="tablist">
                                                <button class="nav-link active fw600" id="nav-item1-tab" data-bs-toggle="tab" data-bs-target="#nav-item1" type="button" role="tab" aria-controls="nav-item1" aria-selected="true">Item Details</button>
                                                <button class="nav-link fw600" id="nav-item2-tab" data-bs-toggle="tab" data-bs-target="#nav-item2" type="button" role="tab" aria-controls="nav-item2" aria-selected="false">
                                                    Comments
                                                    <span class="badge text-bg-primary">456</span>
                                                </button>
                                                <button class="nav-link fw600" id="nav-item3-tab" data-bs-toggle="tab" data-bs-target="#nav-item3" type="button" role="tab" aria-controls="nav-item3" aria-selected="false">
                                                    <div class="d-flex align-items-center gap-1">
                                                        <div class="review-meta d-flex align-items-center">
                                                            <i class="fas fa-star fz10 review-color me-2"></i>
                                                            <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                                                        </div>
                                                        <span class="badge text-bg-primary">56</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </nav> */}
                                        <ul
                                            className="item-details-tabs border-0 flex-nowrap mb50 nav nav-tabs rounded-2 table-responsive"
                                            role="tablist"
                                        >
                                            <li className="nav-item w-100" role="presentation">
                                                <button
                                                    className="align-items-center d-flex gap-2 h-100 justify-content-center nav-link p-3 w-100 active"
                                                    id="home-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#home-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="home-tab-pane"
                                                    aria-selected="true"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-blockquote-right"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm10.113-5.373a7 7 0 0 0-.445-.275l.21-.352q.183.111.452.287.27.176.51.428.234.246.398.562.164.31.164.692 0 .54-.216.873-.217.328-.721.328-.322 0-.504-.211a.7.7 0 0 1-.188-.463q0-.345.211-.521.205-.182.569-.182h.281a1.7 1.7 0 0 0-.123-.498 1.4 1.4 0 0 0-.252-.37 2 2 0 0 0-.346-.298m-2.168 0A7 7 0 0 0 10 6.352L10.21 6q.183.111.452.287.27.176.51.428.234.246.398.562.164.31.164.692 0 .54-.216.873-.217.328-.721.328-.322 0-.504-.211a.7.7 0 0 1-.188-.463q0-.345.211-.521.206-.182.569-.182h.281a1.8 1.8 0 0 0-.117-.492 1.4 1.4 0 0 0-.258-.375 2 2 0 0 0-.346-.3z" />
                                                    </svg>
                                                    Item Details
                                                </button>
                                            </li>
                                            <li className="nav-item w-100" role="presentation">
                                                <button
                                                    className="align-items-center d-flex gap-2 h-100 justify-content-center nav-link p-3 w-100"
                                                    id="profile-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#profile-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="profile-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-chat"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                                                    </svg>
                                                    Comments
                                                    <span className="badge bg-white lh-sm text-primary rounded-4">
                                                        456
                                                    </span>
                                                </button>
                                            </li>
                                            <li className="nav-item w-100" role="presentation">
                                                <button
                                                    className="align-items-center d-flex gap-2 h-100 justify-content-center nav-link p-3 w-100"
                                                    id="contact-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#contact-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="contact-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    {/* <div class="d-flex align-items-center gap-1">
                                                        <div class="review-meta d-flex align-items-center">
                                                            <i class="fas fa-star fz10 review-color me-2"></i>
                                                            <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                                                        </div>
                                                        <span class="badge text-bg-primary">56</span>
                                                    </div> */}
                                                    <div className="align-items-center d-flex review-meta">
                                                        <div className="d-flex align-items-center text-primary rating-stars me-2">
                                                            <i className="fa-star-icon" />
                                                            <i className="fa-star-icon" />
                                                            <i className="fa-star-icon" />
                                                            <i className="fa-star-icon half" />
                                                            <i className="fa-star-icon none" />
                                                        </div>
                                                        <div>
                                                            <span className="me-2">(4.82)</span>94 reviews
                                                        </div>
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade show active"
                                                id="home-tab-pane"
                                                role="tabpanel"
                                                aria-labelledby="home-tab"
                                                tabIndex={0}
                                            >
                                                <div className="theme-description">
                                                    <p>
                                                        Introducing Mizzle, your top-tier choice for Bootstrap 5
                                                        HTML theme. This exceptional theme seamlessly combines
                                                        flexibility, responsiveness, and a sleek design.
                                                        Effortlessly use its ready-to-go pages or let your
                                                        creativity shine through customization. Tailored for a
                                                        range of purposes, including business, corporate,
                                                        agency, SaaS, mobile app, landing page, digital agency,
                                                        product showcases, and shops, Mizzle is your premium
                                                        solution for a polished online presence.
                                                    </p>
                                                    <h4>Developer friendly</h4>
                                                    <p>
                                                        Mizzle has been designed with coding practices aligned
                                                        to the Bootstrap core, ensuring a seamless customization
                                                        experience akin to working with Bootstrap itself.
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Streamlined code architecture for fast, responsive UI
                                                            development.
                                                        </li>
                                                        <li>
                                                            Fewer third-party dependencies for a leaner codebase.
                                                        </li>
                                                        <li>
                                                            Automated workflow with Gulp for boosted production.
                                                        </li>
                                                        <li>
                                                            Dynamic color schemes via SASS for efficient
                                                            customization.
                                                        </li>
                                                        <li>
                                                            Well-commented code structure for easy manipulation.
                                                        </li>
                                                        <li>
                                                            Professional support via the online ticket system.
                                                        </li>
                                                        <li>
                                                            Detailed documentation for clear theme setup and
                                                            customization.
                                                        </li>
                                                    </ul>
                                                    <h4>Feature list</h4>
                                                    <ul>
                                                        <li>Crafted with the latest Bootstrap 5</li>
                                                        <li>No jQuery dependency</li>
                                                        <li>
                                                            RTL support for right-to-left language display –{" "}
                                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                                View Demo
                                                            </a>
                                                        </li>
                                                        <li>Dark mode with a live toggle switch</li>
                                                        <li>Multiple home page demos for varied designs</li>
                                                        <li>Dedicated account pages for user interfaces</li>
                                                        <li>
                                                            General-purpose pages, including about us, contact,
                                                            blog, pricing, authentication, 404, and more
                                                        </li>
                                                        <li>
                                                            Diverse header and footer styles for customization
                                                        </li>
                                                        <li>
                                                            Extensive collection of Font Awesome, Bootstrap icons,
                                                            and{" "}
                                                            <a
                                                                title="Iconstica Icon Library"
                                                                href="#"
                                                                target="_blank"
                                                                rel="noopener"
                                                            >
                                                                Iconstica Library
                                                            </a>
                                                        </li>
                                                        <li>
                                                            Lightbox feature for effortless image and video
                                                            pop-ups
                                                        </li>
                                                        <li>
                                                            Integration of background videos for a dynamic user
                                                            experience
                                                        </li>
                                                        <li>
                                                            Assured lifetime free updates to keep your theme
                                                            current
                                                        </li>
                                                        <li>
                                                            100% money-back guarantee if your satisfaction isn’t
                                                            met
                                                        </li>
                                                    </ul>
                                                    <h4>Premium Figma file included</h4>
                                                    <p>
                                                        Upon buying the template, kindly contact us via the
                                                        support portal and attach a copy of your purchase
                                                        confirmation. We’ll send the file over to you ASAP.
                                                    </p>
                                                    <h4>Support</h4>
                                                    <p>
                                                        Rest assured, you can always rely on our friendly
                                                        support team to assist you with any queries or
                                                        questions. Utilize our convenient{" "}
                                                        <a
                                                            title="Support portal"
                                                            href="#"
                                                            target="_blank"
                                                            rel="noopener"
                                                        >
                                                            Support portal
                                                        </a>{" "}
                                                        for a seamless and easy resolution process. &nbsp;
                                                    </p>
                                                    <h4>Notes:</h4>
                                                    <ul>
                                                        <li>
                                                            This theme is exclusively built on Bootstrap 5 and
                                                            tailored for HTML5, distinct from WordPress or any
                                                            other CMS. It lacks back-end functionality.
                                                        </li>
                                                        <li>
                                                            Please note that the images showcased in the theme
                                                            preview are not part of the Download Package. They are
                                                            solely used for demonstration purposes.
                                                        </li>
                                                        <li>
                                                            If Gulp/SASS is unfamiliar to you, feel free to opt
                                                            for a simpler CSS method.
                                                        </li>
                                                    </ul>
                                                    <hr className="opacity-100 mb60" />
                                                    <img src="images/product-details/01.jfif" className="img-fluid mb-2" />
                                                    <img src="images/product-details/02.jfif" className="img-fluid mb-2" />
                                                    <img src="images/product-details/03.jfif" className="img-fluid mb-2" />
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="profile-tab-pane"
                                                role="tabpanel"
                                                aria-labelledby="profile-tab"
                                                tabIndex={0}
                                            >
                                                <Comments />
                                                {/* end /. reviews section */}
                                                <hr className="my-5 opacity-100" />
                                                {/* start comment form section */}
                                                <div className="mb-4 mb-lg-0">
                                                    <h4 className="fz20 mb-4">Leave a Reply</h4>
                                                    <form>
                                                        {/* start form group */}
                                                        <div className="mb-4">
                                                            <label className="form-label fw500 dark-color mb-1 fz14 required">
                                                                Comment
                                                            </label>
                                                            <textarea
                                                                className="form-control"
                                                                rows={7}
                                                                placeholder="Leave a Reply"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        {/* end /. form group */}
                                                        <button type="submit" className="ud-btn btn-thm">
                                                            Leave a comment
                                                        </button>
                                                    </form>
                                                </div>
                                                {/* end /. comment form section */}
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="contact-tab-pane"
                                                role="tabpanel"
                                                aria-labelledby="contact-tab"
                                                tabIndex={0}
                                            >
                                                <Reviews />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ps-xxl-5">
                            <div className="">
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
                                                    <Link href="/" data-bs-toggle="modal" data-bs-target="#shareButtonModal">
                                                        <i className="fa-solid fa-share-nodes" />
                                                    </Link>
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
                                    <PriceBox />
                                    <CommunityBadgesCard />
                                    <div className="mb20 p20 position-relative rounded-3 shadow">
                                        <table className="fz14 table table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <th>Last Update</th>
                                                    <td>
                                                        <time dateTime="2024-03-20T01:44:05+11:00">
                                                            20 March 2024
                                                        </time>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Published</th>
                                                    <td>
                                                        <span>16 August 2012</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Gutenberg Optimized</th>
                                                    <td>
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            Yes
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>High Resolution</th>
                                                    <td>
                                                        <span>Yes</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Widget Ready</th>
                                                    <td>
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            Yes
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Compatible Browsers</th>
                                                    <td>
                                                        <Link rel="nofollow" className="text-primary" href="#">
                                                            Firefox
                                                        </Link>
                                                        ,{" "}
                                                        <Link rel="nofollow" className="text-primary" href="#">
                                                            Safari
                                                        </Link>
                                                        ,{" "}
                                                        <Link rel="nofollow" className="text-primary" href="#">
                                                            Opera
                                                        </Link>
                                                        ,{" "}
                                                        <Link rel="nofollow" className="text-primary" href="#">
                                                            Chrome
                                                        </Link>
                                                        ,{" "}
                                                        <Link rel="nofollow" className="text-primary" href="#">
                                                            Edge
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Compatible With</th>
                                                    <td>
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            bbPress 2.6.x
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            Easy Digital Downloads
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            Events Calendar
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            Events Calendar Pro
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            Gravity Forms
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WooCommerce 8.x.x
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WooCommerce 7.x.x
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WPML
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Software Version</th>
                                                    <td>
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WordPress 6.4.x
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WordPress 6.3.x
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WordPress 6.2.x
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WordPress 6.1.x
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WordPress 6.0.x
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WordPress 5.9.x
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WordPress 5.8.x
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            WordPress 5.7.x
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>ThemeForest Files Included</th>
                                                    <td>
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            Layered PSD
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            PHP Files
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            CSS Files
                                                        </a>
                                                        ,{" "}
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            JS Files
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Columns</th>
                                                    <td>
                                                        <span>4+</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Documentation</th>
                                                    <td>
                                                        <a rel="nofollow" className="text-primary" href="#">
                                                            Well Documented
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Layout</th>
                                                    <td>
                                                        <span>Responsive</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Tags</th>
                                                    <td>
                                                        <a
                                                            className="text-primary"
                                                            title="blog"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            blog
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="business"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            business
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="clean"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            clean
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="corporate"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            corporate
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="creative"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            creative
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="ecommerce"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            ecommerce
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="gallery"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            gallery
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="multipurpose"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            multipurpose
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="one page"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            one page
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="photography"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            photography
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="portfolio"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            portfolio
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="responsive"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            responsive
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="shop"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            shop
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="woocommerce"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            woocommerce
                                                        </a>
                                                        ,{" "}
                                                        <a
                                                            className="text-primary"
                                                            title="wordpress"
                                                            rel="nofollow"
                                                            href="#"
                                                        >
                                                            wordpress
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
        </WebLayout>
    )
}