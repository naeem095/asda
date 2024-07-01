import WebLayout from "../web-layout/layout"

export default function Page() {
    return (
        <WebLayout>
            <section>
                <div className="container">
                    <div className="justify-content-center row g-4">
                        <div className="col-lg-4 col-xl-3">
                            <div className="bdrs12 bg-white p-4 shadow">
                                <div
                                    className="mb-3 mx-auto position-relative thumb"
                                    style={{ height: 90, width: 90 }}
                                >
                                    <img
                                        className="rounded-circle mx-auto"
                                        src="images/team/fl-3.png"
                                        alt=""
                                    />
                                    <span className="online" />
                                </div>
                                {/*profile title*/}
                                <h4 className="profile-card__name fw500 text-center">Jenny Wilson</h4>
                                <div className="profile-card__txt text-center">
                                    I have worked as a freelancer for 4 years for several companies and
                                    design
                                </div>
                                <div className="align-items-center d-flex gap-3 justify-content-center text-center my-3">
                                    <div>
                                        <div className="fw600 fz19 text-dark">47,970</div>
                                        <span className="fz14">followers</span>
                                    </div>
                                    <div>
                                        <div className="fw600 fz19 text-dark">252</div>
                                        <span className="fz14">following</span>
                                    </div>
                                    <div>
                                        <div className="fw600 fz19 text-dark">1,736</div>
                                        <span className="fz14">likes</span>
                                    </div>
                                </div>
                                {/*profile socials*/}
                                <div className="card-social d-flex flex-wrap fs-19 gap-3 justify-content-center mb-4 mt-2">
                                    <a
                                        className="dribbble"
                                        target="_blank"
                                        href="https://dribbble.com/"
                                    >
                                        <i className="fab fa-dribbble" />
                                    </a>
                                    <a className="twitter" target="_blank" href="https://twitter.com/">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="github" target="_blank" href="https://github.com/">
                                        <i className="fab fa-github" />
                                    </a>
                                    <a
                                        className="spotify"
                                        target="_blank"
                                        href="https://www.spotify.com/"
                                    >
                                        <i className="fab fa-spotify" />
                                    </a>
                                    <a
                                        className="stack-overflow"
                                        target="_blank"
                                        href="https://stackoverflow.com/"
                                    >
                                        <i className="fab fa-stack-overflow" />
                                    </a>
                                </div>
                                <div className="">
                                    <div className="border-bottom border-top py-3 fs-15">
                                        <div className="align-items-center d-flex justify-content-between mb-2">
                                            <span className="text-muted">Address</span>
                                            <span className="fw500 text-dark">400 St.Petersburg</span>
                                        </div>
                                        <div className="align-items-center d-flex justify-content-between mb-2">
                                            <span className="text-muted">Languages</span>
                                            <span className="fw500 text-dark">English</span>
                                        </div>
                                        <div className="align-items-center d-flex justify-content-between mb-2">
                                            <span className="text-muted">English Level</span>
                                            <span className="fw500 text-dark">Fluent</span>
                                        </div>
                                    </div>
                                    <div className="py-3 fs-15">
                                        <div className="align-items-center d-flex justify-content-between mb-2">
                                            <span className="text-muted">Gender</span>
                                            <span className="fw500 text-dark">Male</span>
                                        </div>
                                        <div className="align-items-center d-flex justify-content-between mb-2">
                                            <span className="text-muted">Success Rate</span>
                                            <span className="fw500 text-dark">92%</span>
                                        </div>
                                        <div className="align-items-center d-flex justify-content-between mb-2">
                                            <span className="text-muted">Response Time</span>
                                            <span className="fw500 text-dark">Aug 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <a href="" className="ud-btn btn-thm w-100">
                                    Hire Jenny Wilson
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-9 ps-lg-4 ps-xl-5">
                            <div className="mb20">
                                <div className="row g-4">
                                    <div className="col-sm">
                                        <h3 className="mb-0">Jenny Wilson</h3>
                                        <div className="text-success mb-2">
                                            <span>
                                                <span className="fz13 text-success">Verified Expert</span> in
                                                Engineering
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={12}
                                                fill="currentColor"
                                                className="bi bi-patch-check-fill text-success"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                            </svg>
                                        </div>
                                        <div className="fz13">Software Developer</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <h4 className="mb0">90%</h4>
                                        <div
                                            className="progress"
                                            role="progressbar"
                                            aria-label="Success striped example"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-success"
                                                style={{ width: "90%" }}
                                            />
                                        </div>
                                        <p className="fz13 mb0">Job success</p>
                                    </div>
                                </div>
                                <div className="align-items-center d-flex gap-4 mt-3">
                                    <div>
                                        <div className="fz13">LOCATION</div>
                                        <div className="fw500 fz17 text-dark">
                                            New York, NY, United States
                                        </div>
                                    </div>
                                    <span className="vr" />
                                    <div>
                                        <div className="fz13">PACKMYCODE MEMBER SINCE</div>
                                        <div className="fw500 fz17 text-dark">January 8, 2016</div>
                                    </div>
                                </div>
                            </div>
                            <hr className="opacity-100 mb40 mt40" />
                            <h4>Description</h4>
                            <p className="text">
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                letters, as opposed to using 'Content here, content here', making it
                                look like readable English.{" "}
                            </p>
                            <p className="text">
                                Many desktop publishing packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search for 'lorem ipsum' will
                                uncover many web sites still in their infancy. Various versions have
                                evolved over the years, sometimes by accident, sometimes on purpose
                                (injected humour and the like).
                            </p>
                            <hr className="opacity-100 mb40 mt40" />
                            <div className="row justify-content-between">
                                <div className="col-md-5">
                                    <h4 className="mb30">Portfolio</h4>
                                    <div className="mb15">
                                        <a href="#" className="text-thm3">
                                            Self-employed
                                        </a>
                                        <div className="">
                                            jQuery, JavaScript, CSS, ZURB Foundation, Bootstrap, Ruby on
                                            Rails (RoR), Ruby
                                        </div>
                                    </div>
                                    <div className="mb15">
                                        <a href="#" className="text-thm3">
                                            Tanooki Labs
                                        </a>
                                        <div className="">JavaScript, Ruby on Rails (RoR), Ruby</div>
                                    </div>
                                    <div className="mb15">
                                        <a href="#" className="text-thm3">
                                            Ryan &amp; Carlos
                                        </a>
                                        <div className="">
                                            jQuery, JavaScript, CSS, ZURB Foundation, Bootstrap, Ruby on
                                            Rails (RoR), Ruby
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="mb30">Experience</h4>
                                    <div className="d-flex flex-wrap gap-2 tag-list2">
                                        <a href="">JavaScript - 10 years</a>
                                        <a href="">HTML5 - 10 years</a>
                                        <a href="">jQuery - 10 years</a>
                                        <a href="">CSS - 10 years</a>
                                        <a href="">Bootstrap - 5 years</a>
                                        <a href="">ZURB Foundation - 5 years</a>
                                        <a href="">Ruby on Rails (RoR) - 5 years</a>
                                        <a href="">Responsive Web Design (RWD) - 5 years</a>
                                    </div>
                                </div>
                            </div>
                            <hr className="opacity-100 mb40 mt40" />
                            <div className="row g-2">
                                <div className="col-md-4 d-flex">
                                    <div className="bdr1 bdrs8 bg-white flex-fill p20 w-100 card-body">
                                        <span className="flaticon-fifteen fz40 text-thm3" />
                                        <h4 className="fz17">Availability</h4>
                                        <p>Part-time</p>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <div className="bdr1 bdrs8 bg-white flex-fill p20 w-100 card-body">
                                        <span className="flaticon-goal fz40 text-thm3" />
                                        <h4 className="fz17">Preferred Environment</h4>
                                        <p>Git, Visual Studio Code (VS Code), MacOS</p>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <div className="bdr1 bdrs8 bg-white flex-fill p20 w-100 card-body">
                                        <span className="flaticon-target fz40 text-thm3" />
                                        <h4 className="fz17">The most amazing...</h4>
                                        <p>
                                            ...thing I've done is to build a Ruby on Rails consultancy that
                                            has helped startups collectively raise over 2 million dollars in
                                            funding.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="opacity-100 mb40 mt40" />
                            <div className="">
                                <h4 className="mb30">Work &amp; Experience</h4>
                                <div className="timeline">
                                    <div className="wrapper">
                                        <span className="tag mb20">2012 - 2014</span>
                                        <div className="mb20">
                                            <h5 className="mb-0">UX Designer</h5>
                                            <div>Dropbox</div>
                                        </div>
                                        <ul className="list-style-type-bullet">
                                            <li>
                                                Created mockups and wireframes of an application’s layout and
                                                user flow.
                                            </li>
                                            <li>
                                                Engineered static designs into gorgeous, dynamic web
                                                experiences built on maintainable code.
                                            </li>
                                            <li>
                                                Maintained SEO-friendly front-end code by adhering to best
                                                practices.
                                            </li>
                                            <li>
                                                Reduced page load times through standard techniques: spriting,
                                                caching, compression, etc.
                                            </li>
                                            <li>
                                                Provided the architecture, provisioning, management, and
                                                deployment of hosting environments.
                                            </li>
                                            <li>Coded complex UI logic according to business needs.</li>
                                        </ul>
                                        <div className="fz12">
                                            Technologies: jQuery, JavaScript, CSS, ZURB Foundation,
                                            Bootstrap, Ruby on Rails (RoR), Ruby
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline">
                                    <div className="wrapper">
                                        <span className="tag mb20">2008 - 2012</span>
                                        <div className="mb20">
                                            <h5 className="mb-0">Software Manager</h5>
                                            <div>Tanooki Labs</div>
                                        </div>
                                        <ul className="list-style-type-bullet">
                                            <li>
                                                Ran software projects within the Scrum framework, managing
                                                product and sprint backlogs of hundreds of stories over
                                                one-week sprints.
                                            </li>
                                            <li>
                                                Mediated between founders, designers, and developers to
                                                produce informed product roadmaps and functional and technical
                                                specs.
                                            </li>
                                            <li>
                                                Assembled development teams of up to seven for iteration
                                                planning, daily stand up, weekly retrospective, and release
                                                planning meetings.
                                            </li>
                                            <li>
                                                Reprioritized work, removed blockers, and aligned talent to
                                                task to facilitate the expedient shipment of features and bug
                                                fixes.
                                            </li>
                                            <li>
                                                Mapped out a UX interaction tree for a complex JavaScript trip
                                                planner, saving it from the sideline weeks before launch.
                                            </li>
                                        </ul>
                                        <div className="fz12">
                                            Technologies: JavaScript, Ruby on Rails (RoR), Ruby
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="opacity-100 mb40 mt40" />
                            <div className="">
                                <h4 className="mb30">Education</h4>
                                <div className="timeline">
                                    <div className="wrapper">
                                        <span className="tag">2012 - 2014</span>
                                        <h5 className="mt15">Bachlors in Fine Arts</h5>
                                        <h6 className="text-thm">Modern College</h6>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                                            ipsum tellus. Interdum et malesuada fames ac ante ipsum primis
                                            in faucibus.
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline">
                                    <div className="wrapper">
                                        <span className="tag">2008 - 2012</span>
                                        <h5 className="mt15">Computer Science</h5>
                                        <h6 className="text-thm">Harvartd University</h6>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                                            ipsum tellus. Interdum et malesuada fames ac ante ipsum primis
                                            in faucibus.
                                        </p>
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