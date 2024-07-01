'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import "../navbar/navbar.css";

export function Navbar() {
    const pathname = usePathname()

    return (
        <>
            {/* Main Header Nav */}
            <header className="header-nav nav-innerpage-style bg-transparent main-menu">
                {/* Ace Responsive Menu */}
                <nav className="posr">
                    <div className="container posr">
                        <div className="row align-items-center justify-content-between">
                            <div className="col">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="logos">
                                        <Link className="header-logo logo1" href="/">
                                            <img src="images/logo.png" alt="Header Logo" height={20} />
                                        </Link>
                                    </div>
                                    <a
                                        className="login-info d-xl-none"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                        role="button"
                                    >
                                        <span className="flaticon-loupe" />
                                    </a>
                                    <div className="header-search input-group ml20 d-none d-xl-flex">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search what are you looking for?"
                                            aria-label="Search what are you looking for?"
                                            aria-describedby="button-addon2"
                                        />
                                        <button className="btn" type="button" id="button-addon2">
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
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                {/* Responsive Menu Structure*/}
                                <ul
                                    id="respMenu"
                                    className="ace-responsive-menu"
                                    data-menu-style="horizontal"
                                >
                                    {/* <li> <a class="list-item pe-0" href="#">Support</a></li> */}
                                    <li>
                                        <Link
                                            className={`list-item pe-0 ${pathname === '/job-list' ? 'active' : ''}`}
                                            href="/job-list"
                                        >
                                            Jobs
                                        </Link>
                                    </li>
                                    {/*<li> <a class="list-item pe-0" href="#">My Services</a></li> */}
                                    <li>
                                        <Link
                                            className={`list-item pe-0 ${pathname === '/product-list' ? 'active' : ''}`}
                                            href="/product-list"
                                        >
                                            Themes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`list-item pe-0 ${pathname === '/order-list' ? 'active' : ''}`}
                                            href="/order-list"
                                        >
                                            Order
                                        </Link>
                                    </li>
                                    <li className="visible_list notification_list">
                                        <a className="list-item" href="#">
                                            <i className="fa-solid fa-cart-shopping" />
                                        </a>
                                    </li>
                                    <li>
                                        <Link className="list-item pe-0 btn-join" href="/auth">
                                            Join
                                        </Link>
                                    </li>
                                </ul>
                                {/* <div class="d-flex align-items-center">
                        <a class="login-info mx15-xl mx30" href="page-become-seller.html"><span class="d-none d-xl-inline-block">Become a</span> Seller</a>
                        <a class="login-info mr15-xl mr10 ud-btn btn-dark add-joining bdrs12 dark-color bg-transparent" href="page-login.html">Sign in</a>
                        <a class="ud-btn btn-thm add-joining bdrs12 text-white" href="page-register.html">Join</a>
                    </div> */}
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Category Nav */}
                <div className="Category-nav">
                    <div className="container">
                        <section className="categories_list_section overflow-hidden">
                            <div className="listings_category_nav_list_menu">
                                <ul className="mb0 d-flex ps-0">
                                    <li>
                                        <Link className={`${pathname === '/product-list' ? 'active' : ''}`} href="/product-list">All Categories</Link>
                                    </li>
                                    <li>
                                        <Link href="/product-list">Graphics &amp; Design</Link>
                                    </li>
                                    <li>
                                        <Link href="/product-list">
                                            Digital Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/product-list">Writing &amp; Translation</Link>
                                    </li>
                                    <li>
                                        <Link href="/product-list">Video &amp; Animation</Link>
                                    </li>
                                    <li>
                                        <Link href="/product-list">Music &amp; Audio</Link>
                                    </li>
                                    <li>
                                        <Link href="/product-list">Programming &amp; Tech</Link>
                                    </li>
                                    <li>
                                        <Link href="/product-list">Business</Link>
                                    </li>
                                    <li>
                                        <Link href="/product-list">Lifestyle</Link>
                                    </li>
                                    <li>
                                        <Link href="/product-list">Trending</Link>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </header>
            {/* Mobile Nav  */}
            <div id="page" className="mobilie_header_nav stylehome1">
                <div className="mobile-menu">
                    <div className="header bdrb1">
                        <div className="menu_and_widgets">
                            <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                                <a className="mobile_logo" href="#">
                                    <img src="images/logo.png" alt="" height={20} />
                                </a>
                                <div className="right-side text-end">
                                    <a className="mobile_logo" href="#"></a>
                                    <Link className="" href="/auth">
                                        join
                                    </Link>
                                    <a className="menubar ml20" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                                        <img src="images/mobile-dark-nav-icon.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="posr">
                            <div className="mobile_menu_close_btn">
                                <span className="far fa-times" />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex={-1}
                    id="offcanvasMenu"
                    aria-labelledby="offcanvasMenuLabel"
                >
                    <div className="border-bottom offcanvas-header p-4">
                        <Link className="header-logo" href="/">
                            <img src="images/logo.png" alt="Header Logo" height={20} />
                        </Link>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body p-4">
                        <nav className="navbar p-0">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle active"
                                        href="#"
                                        aria-current="page"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        aria-expanded="false"
                                    >
                                        Home
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item active" href="index.html">
                                                Home (Main)
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="home-classic.html">
                                                Home (Classic)
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="home-rounded.html">
                                                Home (Rounded)
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="home-map.html">
                                                Home (Map)
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="home-grid.html">
                                                Home (Grid)
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="home-waves.html">
                                                Home (Waves)
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="home-car.html">
                                                Home (Car)&nbsp;
                                                <span className="badge text-bg-primary fw-semibold">New</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="home-restaurant.html">
                                                Home (Restaurant)&nbsp;
                                                <span className="badge text-bg-primary fw-semibold">New</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle material-ripple"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="typcn typcn-weather-stormy top-menu-icon" />
                                        Dashboard
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="dashboard/dashboard.html">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/bookings.html">
                                                Bookings
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/messages.html">
                                                Message
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/wallet.html">
                                                Wallet
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/profile.html">
                                                Edit Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/add-listing.html">
                                                Add listing
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/my-listing.html">
                                                My listing
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/bookings.html">
                                                Bookings
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/reviews.html">
                                                Reviews
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/bookmark.html">
                                                Bookmark
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/setting-app.html">
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="dashboard/invoice.html">
                                                Invoice
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        aria-expanded="false"
                                    >
                                        Listing
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                List View
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="listings-list-left.html">
                                                        Left Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="listings-list-right.html">
                                                        Right Sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Grid View 1
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="listings-grid-1-left.html">
                                                        Left Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="listings-grid-1-right.html"
                                                    >
                                                        Right Sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Grid View 2
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="listings-grid-2-left.html">
                                                        Left Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="listings-grid-2-right.html"
                                                    >
                                                        Right Sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Half Map + Sidebar
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="listings-map.html">
                                                        Half Map List
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="listings-map-car.html">
                                                        Half Map List (Car)&nbsp;
                                                        <span className="badge text-bg-primary fw-semibold">
                                                            New
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="listings-map-grid-1.html">
                                                        Half Map Grid 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="listings-map-grid-2.html">
                                                        Half Map Grid 2
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Listing Details
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="listing-details.html">
                                                        Listing Details 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="listing-details-2.html">
                                                        Listing Details 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="listing-details-car.html">
                                                        Listing Details Car{" "}
                                                        <span className="badge text-bg-primary fw-semibold">
                                                            New
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="listings-map-grid-1.html">
                                        Explore
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        aria-expanded="false"
                                    >
                                        Template
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                About
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="about.html">
                                                        About us 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="about-2.html">
                                                        About us 2
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Agent
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="agent.html">
                                                        Agent
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="agent-details.html">
                                                        Agent Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="blog.html"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Blog
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="blog.html">
                                                        Blog
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog-details.html">
                                                        Blog Standard
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog-post-galary.html">
                                                        Blog Galary
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog-post-video.html">
                                                        Blog Video
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog-post-audio.html">
                                                        Blog Audio
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog-archive.html">
                                                        Blog Archive
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="add-listing.html">
                                                Add Listing
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="submit-rider.html">
                                                Submit Rider
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="contact.html">
                                                Contact
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="pricing.html">
                                                Pricing
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Authentication
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="sign-in.html">
                                                        Sign In
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="sign-up.html">
                                                        Sign Up
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="forgot-password.html">
                                                        Forgot Password
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="two-factor-auth.html">
                                                        Two factor authentication
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Specialty
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="404.html">
                                                        404 Page
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Help Center
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="faq.html">
                                                        Faq Page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="terms-conditions.html">
                                                        Terms &amp; Conditions
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="style-guide.html">
                                                Style Guide
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}