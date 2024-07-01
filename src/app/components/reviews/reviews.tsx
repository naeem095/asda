export default function Reviews() {
    return (
        <>
            <div className="row mb-4">
                <div className="col">
                    <h4 className="fz20 mb-0">
                        <span className="fw-bold">6,811</span> Reviews.
                    </h4>
                </div>
                <div className="col-auto">
                    <div className="page_control_shorting">
                        <div className="pcs_dropdown dark-color text-center text-md-end">
                            <span className="me-1">Sort by</span>
                            <select className="selectpicker show-tick">
                                <option>Newest</option>
                                <option>Highest Rating</option>
                                <option>Lowest Rating</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="mb-5 border rounded-2 p-4 bgc-gray-4">
                    <div className="row g-4 align-items-center">
                        <div className="col-sm-auto">
                            <div className="text-center">
                                {/* start title */}
                                <h6 className="mb-4">Average user rating</h6>
                                {/* end /. title */}
                                {/* Start Rating Point */}
                                <div className="rating-point position-relative ml-auto mr-auto">
                                    {/* Start Svg Icon  */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={120}
                                        height={120}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth=".5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-star text-primary"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                            {" "}
                                        </polygon>
                                    </svg>
                                    {/* /.End Svg Icon  */}
                                    <h3 className="position-absolute mb-0 fs-18 text-primary">
                                        4.3
                                    </h3>
                                </div>
                                {/* End Rating Point */}
                                <span className="fz13">2,525 Ratings &amp;</span>
                                <br />
                                <span className="fz13">293 Reviews</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rating-position">
                                {/* start title */}
                                <h6 className="mb-4">Rating breakdown</h6>
                                {/* end /. title */}
                                {/* Start Rating Point */}
                                {/* start rating dimension */}
                                <div className="align-items-center d-flex mb-2 rating-dimension gap-2">
                                    {/* start rating quantity */}
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="fz14 fw-semibold rating-points">
                                            5
                                        </span>
                                        <div className="d-flex align-items-center text-primary rating-stars">
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon" />
                                        </div>
                                    </div>
                                    {/* end /. rating quantity */}
                                    {/* Start Progress */}
                                    <div className="progress flex-grow-1 me-2">
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: "90%" }}
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {/* /.End Progress */}
                                    {/* Start User Rating */}
                                    <div className="bg-dark fz11 fw-medium px-2 py-1 rounded-pill text-white user-rating">
                                        4.5
                                    </div>
                                    {/* /.End User Rating */}
                                </div>
                                {/* end /. rating dimension */}
                                {/* start rating dimension */}
                                <div className="align-items-center d-flex mb-2 rating-dimension gap-2">
                                    {/* start rating quantity */}
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="fz14 fw-semibold rating-points">
                                            5
                                        </span>
                                        <div className="d-flex align-items-center text-primary rating-stars">
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon half" />
                                            <i className="fa-star-icon none" />
                                        </div>
                                    </div>
                                    {/* end /. rating quantity */}
                                    {/* start progress */}
                                    <div className="progress flex-grow-1 me-2">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "80%" }}
                                            aria-valuenow={80}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {/* end /. progress */}
                                    {/* start user rating */}
                                    <div className="bg-dark fz11 fw-medium px-2 py-1 rounded-pill text-white user-rating">
                                        3.5
                                    </div>
                                    {/* end /. user rating */}
                                </div>
                                {/* end /. rating dimension */}
                                {/* start rating dimension */}
                                <div className="align-items-center d-flex mb-2 rating-dimension gap-2">
                                    {/* start rating quantity */}
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="fz14 fw-semibold rating-points">
                                            3
                                        </span>
                                        <div className="d-flex align-items-center text-primary rating-stars">
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon half" />
                                            <i className="fa-star-icon none" />
                                            <i className="fa-star-icon none" />
                                        </div>
                                    </div>
                                    {/* end /. rating quantity */}
                                    {/* start progress */}
                                    <div className="progress flex-grow-1 me-2">
                                        <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            style={{ width: "60%" }}
                                            aria-valuenow={60}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {/* end /. progress */}
                                    {/* start user rating */}
                                    <div className="bg-dark fz11 fw-medium px-2 py-1 rounded-pill text-white user-rating">
                                        1.5
                                    </div>
                                    {/* end /. user rating */}
                                </div>
                                {/* end /. rating dimension */}
                                {/* start rating dimension */}
                                <div className="align-items-center d-flex mb-2 rating-dimension gap-2">
                                    {/* start rating quantity */}
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="fz14 fw-semibold rating-points">
                                            3
                                        </span>
                                        <div className="d-flex align-items-center text-primary rating-stars">
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon half" />
                                            <i className="fa-star-icon none" />
                                            <i className="fa-star-icon none" />
                                            <i className="fa-star-icon none" />
                                        </div>
                                    </div>
                                    {/* end /. rating quantity */}
                                    {/* start progress */}
                                    <div className="progress flex-grow-1 me-2">
                                        <div
                                            className="progress-bar bg-info"
                                            role="progressbar"
                                            style={{ width: "40%" }}
                                            aria-valuenow={40}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {/* end /. progress */}
                                    {/* start user rating */}
                                    <div className="bg-dark fz11 fw-medium px-2 py-1 rounded-pill text-white user-rating">
                                        5.2
                                    </div>
                                    {/* end /. user rating */}
                                </div>
                                {/* end /. rating dimension */}
                                {/* start rating dimension */}
                                <div className="align-items-center d-flex mb-2 rating-dimension gap-2">
                                    {/* start rating quantity */}
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="fz14 fw-semibold rating-points">
                                            1
                                        </span>
                                        <div className="d-flex align-items-center text-primary rating-stars">
                                            <i className="fa-star-icon" />
                                            <i className="fa-star-icon none" />
                                            <i className="fa-star-icon none" />
                                            <i className="fa-star-icon none" />
                                            <i className="fa-star-icon none" />
                                        </div>
                                    </div>
                                    {/* end /. rating quantity */}
                                    {/* start progress */}
                                    <div className="progress flex-grow-1 me-2">
                                        <div
                                            className="progress-bar text-bg-danger"
                                            role="progressbar"
                                            style={{ width: "20%" }}
                                            aria-valuenow={20}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {/* end /. progress */}
                                    {/* start user rating */}
                                    <div className="bg-dark fz11 fw-medium px-2 py-1 rounded-pill text-white user-rating">
                                        6.9
                                    </div>
                                    {/* end /. user rating */}
                                </div>
                                {/* end /. rating dimension */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex mb-3 border rounded-2 p-4 bgc-gray-4">
                    <div className="flex-shrink-0">
                        <img
                            src="images/blog/comments-2.png"
                            alt="..."
                            height={60}
                            width={60}
                            className="object-fit-cover rounded-circle"
                        />
                    </div>
                    <div className="flex-grow-1 ms-4">
                        <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                            <div>
                                <h4 className="fz16 mb-0">- Ethan Blackwood</h4>
                                <div className="comment-datetime fz13 text-muted">
                                    25 Oct 2023 at 12.27 pm
                                </div>
                            </div>
                            {/* start rating */}
                            <div className="d-flex align-items-center gap-2 ms-auto">
                                <div className="d-flex align-items-center text-primary rating-stars">
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon half" />
                                    <i className="fa-star-icon none" />
                                </div>
                                <span className="fz14 fw-semibold rating-points">
                                    3.5/5
                                </span>
                            </div>
                            {/* end /. rating */}
                        </div>
                        <div className="fs-15">
                            TA big learning curve if you’re new, but once you
                            learn and find what you’re looking for — because
                            everything you need is really in this, but finding
                            features/settings, can involve a lot of hunting, but
                            worth it, and sooo much potential for real creative
                            design. I’d love to see an actual real-time,
                            up-to-date process flowchart and site map to all its
                            features. I’ve switched to using mainly this theme
                            for most clients. I don’t like the patchwork feel to
                            where features are located, and the nomenclature is
                            odd at times, likely because so many hats and heads
                            are building on and supporting this awesome theme.
                            It’s the master theme and always improving. Though
                            they have a limited choice of pre-built import
                            sites, it’s probably best for quality control. Love
                            this theme —— but I wish it could be lighter, and
                            faster, it’s heavy and slow — but I’m still lovin’
                            it.
                        </div>
                        {/* start review */}
                        <a
                            href="#"
                            className="bg-white d-inline-flex fw-normal fz14 gap-2 mt-4 px-3 py-2 rounded-pill ud-btn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-hand-thumbs-up"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                            </svg>
                            Helpful Review
                            <div className="vr d-none d-sm-inline-block" />
                            <span className="fw-semibold">16</span>
                        </a>
                        {/* end /. review */}
                    </div>
                </div>
                <div className="d-flex mb-3 border rounded-2 p-4 bgc-gray-4">
                    <div className="flex-shrink-0">
                        <img
                            src="images/blog/comments-2.png"
                            alt="..."
                            height={60}
                            width={60}
                            className="object-fit-cover rounded-circle"
                        />
                    </div>
                    <div className="flex-grow-1 ms-4">
                        <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                            <div>
                                <h4 className="fz16 mb-0">- Pranoti Deshpande</h4>
                                <div className="comment-datetime fz13 text-muted">
                                    25 Oct 2023 at 12.27 pm
                                </div>
                            </div>
                            {/* start rating */}
                            <div className="d-flex align-items-center gap-2 ms-auto">
                                <div className="d-flex align-items-center text-primary rating-stars">
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon half" />
                                    <i className="fa-star-icon none" />
                                </div>
                                <span className="fz14 fw-semibold rating-points">
                                    3.5/5
                                </span>
                            </div>
                            {/* end /. rating */}
                        </div>
                        <div className="fs-15">
                            Avada like everything else comes with a learning
                            curve, however I truly believe that it's a lot
                            easier than any alternatives. I have managed to
                            design beautiful and unique sites with the help of
                            their support. They have provided me with any
                            speciality coding that I needed. What makes Avada
                            special is that their design and support team are
                            all apart of the company working together to create
                            a great experience. I know all their support team
                            members as I have communicated so much and now
                            they're like my design family. I love Avada so much
                            that I recently got my friends to purchase Avada and
                            I most definitely recommend it to you.
                        </div>
                        {/* start review */}
                        <a
                            href="#"
                            className="bg-white d-inline-flex fw-normal fz14 gap-2 mt-4 px-3 py-2 rounded-pill ud-btn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-hand-thumbs-up"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                            </svg>
                            Helpful Review
                            <div className="vr d-none d-sm-inline-block" />
                            <span className="fw-semibold">16</span>
                        </a>
                        {/* end /. review */}
                    </div>
                </div>
                <div className="d-flex mb-3 border rounded-2 p-4 bgc-gray-4">
                    <div className="flex-shrink-0">
                        <img
                            src="images/blog/comments-2.png"
                            alt="..."
                            height={60}
                            width={60}
                            className="object-fit-cover rounded-circle"
                        />
                    </div>
                    <div className="flex-grow-1 ms-4">
                        <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                            <div>
                                <h4 className="fz16 mb-0">- Marcus Knight</h4>
                                <div className="comment-datetime fz13 text-muted">
                                    25 Oct 2023 at 12.27 pm
                                </div>
                            </div>
                            {/* start rating */}
                            <div className="d-flex align-items-center gap-2 ms-auto">
                                <div className="d-flex align-items-center text-primary rating-stars">
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon half" />
                                    <i className="fa-star-icon none" />
                                </div>
                                <span className="fz14 fw-semibold rating-points">
                                    3.5/5
                                </span>
                            </div>
                            {/* end /. rating */}
                        </div>
                        <div className="fs-15">
                            I had a problem which was mainly me being a complete
                            novice at website building. I couldn't even work out
                            how to find my way to the website builder. Abbas
                            replied to my support ticket and over the next few
                            hours sorted every problem I had. Patient,
                            understanding and very knowledgeable. Once I was in
                            it was a little tricky to begin with finding my way
                            around but after a little time and experimenting I
                            am now confident it falls into place. Its a great
                            system and I'm actually enjoying building a website
                            - something I never thought I'd say! Thank you!
                        </div>
                        {/* start review */}
                        <a
                            href="#"
                            className="bg-white d-inline-flex fw-normal fz14 gap-2 mt-4 px-3 py-2 rounded-pill ud-btn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-hand-thumbs-up"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                            </svg>
                            Helpful Review
                            <div className="vr d-none d-sm-inline-block" />
                            <span className="fw-semibold">16</span>
                        </a>
                        {/* end /. review */}
                    </div>
                </div>
                <div className="d-flex mb-3 border rounded-2 p-4 bgc-gray-4">
                    <div className="flex-shrink-0">
                        <img
                            src="images/blog/comments-2.png"
                            alt="..."
                            height={60}
                            width={60}
                            className="object-fit-cover rounded-circle"
                        />
                    </div>
                    <div className="flex-grow-1 ms-4">
                        <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                            <div>
                                <h4 className="fz16 mb-0">- Marcus Knight</h4>
                                <div className="comment-datetime fz13 text-muted">
                                    25 Oct 2023 at 12.27 pm
                                </div>
                            </div>
                            {/* start rating */}
                            <div className="d-flex align-items-center gap-2 ms-auto">
                                <div className="d-flex align-items-center text-primary rating-stars">
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon" />
                                    <i className="fa-star-icon half" />
                                    <i className="fa-star-icon none" />
                                </div>
                                <span className="fz14 fw-semibold rating-points">
                                    3.5/5
                                </span>
                            </div>
                            {/* end /. rating */}
                        </div>
                        <div className="fs-15">
                            I have been using the Avada theme for all of my
                            WordPress sites for over 10 years. I can tell you
                            without reservation that it is the very best theme
                            available for WordPress. Building websites means you
                            must deal with all types of support. Of all the
                            support groups I work with Avada is the best one,
                            they are far better than Google Support. I highly
                            recommend Avada to any individual or agency.
                        </div>
                        {/* start review */}
                        <a
                            href="#"
                            className="bg-white d-inline-flex fw-normal fz14 gap-2 mt-4 px-3 py-2 rounded-pill ud-btn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-hand-thumbs-up"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                            </svg>
                            Helpful Review
                            <div className="vr d-none d-sm-inline-block" />
                            <span className="fw-semibold">16</span>
                        </a>
                        {/* end /. review */}
                    </div>
                </div>
            </div>
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
                    1 – 20 of 300+ Review available
                </p>
            </div>
            <hr className="my-5 opacity-100" />
            <div className="bsp_reveiw_wrt">
                <h4 className="fz20 mb-4">Add a Review</h4>
                <h6>Your rating of this product</h6>
                <div className="d-flex">
                    <i className="fas fa-star review-color" />
                    <i className="far fa-star review-color ms-2" />
                    <i className="far fa-star review-color ms-2" />
                    <i className="far fa-star review-color ms-2" />
                    <i className="far fa-star review-color ms-2" />
                </div>
                <form className="comments_form mt30 mb30-md">
                    <div className="mb-4">
                        <label className="form-label fw500 dark-color mb-1 fz14 required">
                            Comment
                        </label>
                        <textarea
                            className="form-control"
                            rows={6}
                            placeholder="Leave a comment"
                            defaultValue={""}
                        />
                    </div>
                    <a href="" className="ud-btn btn-thm">
                        Send
                    </a>
                </form>
            </div>
        </>
    )
}