
'use client'
import { useEffect } from 'react';
import Link from 'next/link';
import WebLayout from '@/app/web-layout/layout';

export default function Page() {
    useEffect(() => {
        const toggles = document.querySelectorAll<HTMLElement>(".toggle-password");

        toggles.forEach(toggle => {
            const handleClick = () => {
                console.log('Toggle clicked:', toggle);
                toggle.classList.toggle("fa-eye");
                toggle.classList.toggle("fa-eye-slash");

                const selector = toggle.getAttribute("data-toggle-password");
                if (selector) {
                    const input = document.querySelector<HTMLInputElement>(selector);
                    if (input) {
                        const inputType = input.getAttribute("type") === "password" ? "text" : "password";
                        input.setAttribute("type", inputType);
                    }
                }
            };

            toggle.addEventListener("click", handleClick);

            // Cleanup event listeners on component unmount
            return () => {
                toggle.removeEventListener("click", handleClick);
            };
        });
    }, []);

    return (
        <WebLayout>
            <div className="container">
                <section className="align-items-center auth-wrap d-flex">
                    <div className="end-0 position-absolute top-0 mt30">
                        <Link
                            className="auth-link d-inline fw-semibold fz12 text-uppercase"
                            href="/auth"
                        >
                            CREATE ACCOUNT
                        </Link>
                    </div>
                    <div className="auth-inner flex-grow-1">
                        <h4 className="auth-title fw-bold mb50 text-center">
                            Log into Packmycode
                        </h4>
                        <div className="auth-box">
                            <div className="auth-form d-flex">
                                <div className="auth-form-left">
                                    <form>
                                        <div className="mb30">
                                            <label className="auth-label">Email address</label>
                                            <input
                                                type="text"
                                                className="form-control auth-input"
                                                placeholder="name@example.com"
                                            />
                                        </div>
                                        <div className="mb30">
                                            <label className="auth-label">PASSWORD</label>
                                            <div className="position-relative">
                                                <input
                                                    id="password"
                                                    type="password"
                                                    className="form-control auth-input password"
                                                    placeholder="Password"
                                                    autoComplete="off"
                                                />
                                                <i
                                                    data-toggle-password="#password"
                                                    className="fa-solid fa-eye-slash toggle-password end-0"
                                                />
                                            </div>
                                        </div>
                                        <button type="button" className="rounded ud-btn w-100">
                                            Log in
                                        </button>
                                    </form>
                                </div>
                                <div className="align-items-center auth-devider d-flex">
                                    <div className="auth-devider-line" />
                                    <div className="auth-devider-text">
                                        <span>or</span>
                                    </div>
                                    <div className="auth-devider-line"> </div>
                                </div>
                                <div className="auth-form-right d-grid gap-2">
                                    <button className="auth-btn">
                                        <svg
                                            width={18}
                                            height={18}
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M17.476 7.364H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615 0-.639-.057-1.252-.164-1.841z"
                                                fill="#4285F4"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M14.956 15.82l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18c2.43 0 4.467-.806 5.956-2.18z"
                                                fill="#34A853"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332A5.41 5.41 0 013.682 9z"
                                                fill="#FBBC05"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.44 4.925l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58c1.321 0 2.508.454 3.44 1.345z"
                                                fill="#EA4335"
                                            />
                                        </svg>
                                        <span style={{ flexGrow: 1 }}>Continue with Google</span>
                                    </button>
                                    <button className="auth-btn">
                                        <svg
                                            width={16}
                                            height={20}
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.665 15.586a11.048 11.048 0 01-1.022 1.934c-.537.806-.976 1.364-1.315 1.674-.525.509-1.088.769-1.69.784-.434 0-.955-.13-1.563-.393-.609-.262-1.169-.391-1.681-.391-.537 0-1.113.13-1.729.391-.617.263-1.114.4-1.494.414-.578.026-1.154-.242-1.729-.805-.367-.337-.826-.915-1.376-1.733-.59-.874-1.075-1.888-1.455-3.044C.204 13.17 0 11.961 0 10.791c0-1.34.275-2.497.826-3.465a4.986 4.986 0 011.73-1.843 4.48 4.48 0 012.339-.695c.459 0 1.061.15 1.809.443.746.295 1.225.445 1.435.445.157 0 .689-.175 1.591-.524.853-.323 1.573-.457 2.163-.404 1.598.136 2.798.8 3.597 1.994-1.43.912-2.136 2.19-2.122 3.827.013 1.277.452 2.339 1.316 3.182.392.391.83.694 1.316.908-.105.323-.217.631-.335.927zM11.999.401c0 1-.347 1.934-1.038 2.798-.835 1.028-1.845 1.622-2.94 1.528a3.275 3.275 0 01-.022-.38c0-.96.397-1.987 1.102-2.827.352-.426.8-.78 1.342-1.061C10.986.18 11.498.027 11.98 0c.013.134.02.268.02.4z"
                                                fill="#000"
                                            />
                                        </svg>
                                        <span style={{ flexGrow: 1 }}>Continue with Apple</span>
                                    </button>
                                    <button className="auth-btn">
                                        <svg
                                            width={22}
                                            height={22}
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <path fill="url(#fbpattern0)" d="M0 0h22v22H0z" />
                                            <defs>
                                                <pattern
                                                    id="fbpattern0"
                                                    patternContentUnits="objectBoundingBox"
                                                    width={1}
                                                    height={1}
                                                >
                                                    <use
                                                        xlinkHref="#fbimage0"
                                                        transform="matrix(.00324 0 0 .00324 0 -.002)"
                                                    />
                                                </pattern>
                                                <image
                                                    id="fbimage0"
                                                    width={309}
                                                    height={310}
                                                    xlinkHref="data:image/png;base64,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"
                                                />
                                            </defs>
                                        </svg>
                                        <span style={{ flexGrow: 1 }}>Continue with Facebook</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt30 text-center">
                            <a
                                className="auth-link d-inline fw-semibold fz12 text-uppercase"
                                href="packmycode-recovery.html"
                            >
                                Can’t log in?
                            </a>
                        </div>
                        <div className="mt20 text-center auth-text fz13">
                            Secure Login with reCAPTCHA subject to Google{" "}
                            <a
                                target="_blank"
                                href="#"
                                className="fw-medium text-decoration-underline"
                            >
                                <br />
                                Terms
                            </a>{" "}
                            &amp;{" "}
                            <a
                                target="_blank"
                                href="#"
                                className="fw-medium text-decoration-underline"
                            >
                                Privacy
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </WebLayout>
    )
}