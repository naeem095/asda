
'use client'
import { useEffect } from 'react';
import Link from 'next/link';
import WebLayout from '../web-layout/layout';


export default function Page() {

    useEffect(() => {
        const radioButtons = document.querySelectorAll<HTMLInputElement>('input[name="form-check-radio"]');
        const actionButton = document.getElementById('actionButton') as HTMLButtonElement;
        const formCheckRadios = document.querySelectorAll<HTMLDivElement>('.form-check-radio');

        // Handle radio button changes
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                if (actionButton) {
                    actionButton.disabled = false;
                    const clientRadio = document.getElementById('client') as HTMLInputElement;
                    const sellerRadio = document.getElementById('seller') as HTMLInputElement;
                    if (clientRadio?.checked) {
                        actionButton.textContent = "Join as a Client";
                    } else if (sellerRadio?.checked) {
                        actionButton.textContent = "Apply as a Seller";
                    }
                }
            });
        });

        // Handle form-check-radio click events
        formCheckRadios.forEach(item => {
            item.addEventListener('click', function () {
                formCheckRadios.forEach(el => {
                    el.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    }, []);

    return (
        <WebLayout>
            <div className="container">
                <section className="align-items-center auth-wrap d-flex">
                    <div className="auth-inner flex-grow-1">
                        <h4 className="auth-title fw-bold mb50 text-center">
                            Join as a client or seller
                        </h4>
                        <div className="auth-box">
                            <div className="auth-form">
                                <div className="g-4 justify-content-center row">
                                    <div className="col-sm-6 col-md-4">
                                        <div className="form-check-radio bg-white border position-relative ps-0 rounded">
                                            <input
                                                type="radio"
                                                id="client"
                                                name="form-check-radio"
                                                className="form-check-input"
                                            />
                                            <label className="custom-control-label p-3" htmlFor="client">
                                                <svg
                                                    className="mx-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                    data-name="Layer 1"
                                                    viewBox="0 0 24 24"
                                                    role="img"
                                                >
                                                    <path
                                                        fill="none"
                                                        vectorEffect="non-scaling-stroke"
                                                        stroke="var(--icon-color, #001e00)"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M19.28 21h-6.9a1.6 1.6 0 01-1.73-1.5v-4a1.6 1.6 0 011.73-1.5h6.9A1.59 1.59 0 0121 15.5v4a1.66 1.66 0 01-1.72 1.5z"
                                                    />
                                                    <path
                                                        fill="none"
                                                        vectorEffect="non-scaling-stroke"
                                                        stroke="var(--icon-color, #001e00)"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M16.9 12h-2.15a.65.65 0 00-.72.66V14h3.59v-1.34a.65.65 0 00-.72-.66z"
                                                    />
                                                    <line
                                                        x1="10.65"
                                                        x2={21}
                                                        y1="17.29"
                                                        y2="17.29"
                                                        fill="none"
                                                        vectorEffect="non-scaling-stroke"
                                                        stroke="var(--icon-color, #001e00)"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                    />
                                                    <circle
                                                        cx="10.04"
                                                        cy="5.73"
                                                        r="2.73"
                                                        fill="none"
                                                        vectorEffect="non-scaling-stroke"
                                                        stroke="var(--icon-color, #001e00)"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                    />
                                                    <path
                                                        fill="none"
                                                        vectorEffect="non-scaling-stroke"
                                                        stroke="var(--icon-color, #001e00)"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M3 18.45v-.9a7 7 0 017-7h.09a6.73 6.73 0 011.91.27"
                                                    />
                                                </svg>
                                                <span className="d-block fw-medium fz21 lh-sm text-dark">
                                                    I’m a client, hiring for a project
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="form-check-radio bg-white border position-relative ps-0 rounded">
                                            <input
                                                type="radio"
                                                id="seller"
                                                name="form-check-radio"
                                                className="form-check-input"
                                            />
                                            <label className="custom-control-label p-3" htmlFor="seller">
                                                <svg
                                                    className="mx-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                    data-name="Layer 1"
                                                    viewBox="0 0 24 24"
                                                    role="img"
                                                >
                                                    <polygon
                                                        fill="none"
                                                        vectorEffect="non-scaling-stroke"
                                                        stroke="var(--icon-color, #001e00)"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        points="19.38 21 8.38 21 10 14 21 14 19.38 21"
                                                    />
                                                    <circle
                                                        cx="14.69"
                                                        cy="17.5"
                                                        r=".5"
                                                        fill="var(--icon-color, #001e00)"
                                                        vectorEffect="non-scaling-stroke"
                                                        stroke="var(--icon-color, #001e00)"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <line
                                                        x1="9.43"
                                                        x2="5.99"
                                                        y1={21}
                                                        y2={21}
                                                        fill="none"
                                                        vectorEffect="non-scaling-stroke"
                                                        stroke="var(--icon-color, #001e00)"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                    />
                                                    <circle
                                                        cx="10.04"
                                                        cy="5.73"
                                                        r="2.73"
                                                        fill="none"
                                                        vectorEffect="non-scaling-stroke"
                                                        stroke="var(--icon-color, #001e00)"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                    />
                                                    <path
                                                        fill="none"
                                                        vectorEffect="non-scaling-stroke"
                                                        stroke="var(--icon-color, #001e00)"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M3 18.45v-.9a7 7 0 017-7h.09a6.94 6.94 0 013.79 1.12"
                                                    />
                                                </svg>
                                                <span className="d-block fw-medium fz21 lh-sm text-dark">
                                                    I’m a seller, I will sell my products
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt30 text-center">
                            <button
                                type="button"
                                className="ud-btn btn-thm"
                                id="actionButton"
                                disabled
                            >
                                Create Account
                            </button>
                        </div>
                        <div className="mt20 text-center auth-text fz15">
                            Already have an account?{" "}
                            <Link
                                href="/auth/sign-in"
                                className="fw-medium text-decoration-underline text-primary"
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </WebLayout>
    )
}