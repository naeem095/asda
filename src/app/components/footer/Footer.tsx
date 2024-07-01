export default function Footer() {
    return (
        <section
            className="footer-style1 at-home2 pb-0 pt40">
            <div className="white-bdrb1 pb30 mb50">
                <div className="container">
                    <div className="align-items-center row g-4">
                        <div className="col-sm">
                            <h4 className="text-white">
                                Want to sell service with your themes and templates ?
                            </h4>
                            <p className="mb-0">
                                Explore packmycode where you can highlight your service along with
                                your products.
                            </p>
                        </div>
                        <div className="col-sm-auto">
                            <a
                                className="ud-btn btn-thm double-border bdrs60"
                                href="page-service-v1.html"
                            >
                                Join Here
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-4">
                        <div className="footer-widget mb-4 mb-lg-5">
                            <a className="footer-logo" href="index.html">
                                <img
                                    className="mb20"
                                    src="images/logo-white.png"
                                    alt=""
                                    height={30}
                                />
                            </a>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since.
                            </p>
                            <div className="mt50">
                                <div className="app-widget at-home9">
                                    <h5 className="title text-white mb20">Get In Touch</h5>
                                    <div className="newsletter position-relative mt-4">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                        />
                                        <button
                                            type="button"
                                            className="ud-btn btn-thm search-btn position-absolute top-50 d-inline-flex hstack gap-2"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>
                                <div className="social-widget mt20">
                                    <div className="d-flex gap-2 social-style1">
                                        <a href="">
                                            <i className="fab fa-facebook-f list-inline-item" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter list-inline-item" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-instagram list-inline-item" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-linkedin-in list-inline-item" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-2">
                        <div className="footer-widget mb-4 mb-lg-5">
                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <div className="link-style1 mb-3">
                                        <h6 className="text-white mb25">About</h6>
                                        <div className="link-list">
                                            <a href="">Careers</a>
                                            <a href="">Press &amp; News</a>
                                            <a href="">Partnerships</a>
                                            <a href="">Privacy Policy</a>
                                            <a href="">Privacy Policy</a>
                                            <a href="">Terms of Service</a>
                                            <a href="">Investor Relations</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="link-style1 mb-3">
                                        <h6 className="text-white mb25">Categories</h6>
                                        <div className="link-list">
                                            <a href="">Graphics &amp; Design</a>
                                            <a href="">Digital Marketing</a>
                                            <a href="">Writing &amp; Translation</a>
                                            <a href="">Video &amp; Animation</a>
                                            <a href="">Video &amp; Animation</a>
                                            <a href="">Music &amp; Audio</a>
                                            <a href="">Programming &amp; Tech</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="link-style1 mb-3">
                                        <h6 className="text-white mb25">Contacts</h6>
                                        <div className="">
                                            <a className="email-link d-block fw-medium mb-1" href="#">
                                                <i className="fa-solid fa-phone me-2" />
                                                <span>(123) 456-7890</span>
                                            </a>
                                            <a className="email-link d-block fw-medium" href="#">
                                                <i className="fa-solid fa-envelope me-2" />
                                                <span>support@JobFindo.com</span>
                                            </a>
                                            <a className="email-link d-block fw-medium" href="#">
                                                <i className="fa-solid fa-location-dot me-2" />
                                                <span>Dhaka, Bangladesh</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container white-bdrt1 py-4">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="text-center text-lg-start">
                            <p className="copyright-text mb-2 mb-md-0 text-white-light ff-heading">
                                © Packmycode Ltd. 2023 All rights reserved.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="footer_bottom_right_btns at-home9 text-center text-lg-end">
                            <ul className="p-0 m-0">
                                <li className="list-inline-item">
                                    <select className="selectpicker show-tick">
                                        <option>US$ USD</option>
                                        <option>Euro</option>
                                        <option>Pound</option>
                                    </select>
                                </li>
                                <li className="list-inline-item">
                                    <select className="selectpicker show-tick">
                                        <option>English</option>
                                        <option>Frenc</option>
                                        <option>Italian</option>
                                        <option>Spanish</option>
                                        <option>Turkey</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}