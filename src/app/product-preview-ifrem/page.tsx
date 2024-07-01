export default function ProductPreviewIfrem() {
    return (
        <div className="d-flex flex-column vh-100">
            <main className="bg-dark flex-fill">
                <iframe
                    className="iframe-preview border-0 position-absolute w-100"
                    width="100%"
                    src="https://muffingroup.com/betheme/?die=1"
                />
            </main>
            <nav className="bg-white fixed-top navbar navbar-preview">
                <div className="container-fluid d-flex justify-content-between align-items-center w-100">
                    <a href="#" className="navbar-preview-logo">
                        <img src="images/logo.png" alt="Header Logo" />
                    </a>
                    <ul className="nav nav-preview d-none d-md-flex" role="tablist">
                        <li className="nav-item">
                            <a
                                className="nav-link btn-iframe-to-desktop-trigger active"
                                data-bs-toggle="tab"
                                href="#home"
                                role="tab"
                                aria-expanded="true"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-monitor"
                                >
                                    <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
                                    <line x1={8} y1={21} x2={16} y2={21} />
                                    <line x1={12} y1={17} x2={12} y2={21} />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link nav-link--small btn-iframe-to-mobile-trigger"
                                data-bs-toggle="tab"
                                href="#profile"
                                role="tab"
                                aria-expanded="false"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-smartphone"
                                >
                                    <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
                                    <line x1={12} y1={18} x2="12.01" y2={18} />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="align-items-center d-flex gap-2">
                        <a
                            href="packmycode-user-payment.html"
                            className="align-items-center btn-thm d-flex gap-2 rounded-2 ud-btn"
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
                            <span className="btn-text">Buy Now</span>
                        </a>
                        <a href="https://muffingroup.com/betheme/?die=1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-x-lg"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </div>

    )
}