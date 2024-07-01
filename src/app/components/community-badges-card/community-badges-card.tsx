
export default function CommunityBadgesCard() {
    return (
        <div className="mb20 p20 position-relative rounded-3 shadow">
            <div className="d-flex">
                <div className="thumb position-relative">
                    <img
                        className="rounded-2 mx-auto"
                        src="images/team/logo.jpg"
                        alt=""
                        height={60}
                        width={60}
                    />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h5 className="fw-bold fz19 mb-0">
                        27collective
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            fill="currentColor"
                            className="bi bi-patch-check-fill text-success"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                    </h5>
                    <p className="mb-0">Member since May 2011</p>
                    <div className="community-badges d-flex gap-2 flex-wrap mt-2">
                        <img
                            src="images/badge/author_level_16.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/collector_level_5.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/community_health.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/exclusive.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/feedback_guru.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/had_trending_item.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/one_billion_milestone.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/power_elite.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/veteran_level_12.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/was_featured.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/was_top_monthly_author.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/country_us.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/attended_community_meetup.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/super_sheriff.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/beta_tester.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                        <img
                            src="images/badge/won_a_competition.svg"
                            alt=""
                            height={34}
                            width={30}
                        />
                    </div>
                </div>
            </div>
            {/* <button type="button" class="btn btn-primary-soft w-100 mt-3 fw-semibold">View Profile</button> */}
            <a
                href="packmycode-seller-profile.html"
                className="ud-btn btn-soft-primary w-100 mt-4"
            >
                View Profile
                <i className="fal fa-arrow-right-long ms-2" />
            </a>
        </div>
    )
}