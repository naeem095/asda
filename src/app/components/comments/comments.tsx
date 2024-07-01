
'use client'
import { useEffect } from 'react';


export default function Comments() {
    useEffect(() => {
        // Get references to all reply open buttons and reply forms
        const replyOpenBtns = document.querySelectorAll('.reply-open');
        const replyCloseBtns = document.querySelectorAll('.reply-close-btn');
        const replyForms = document.querySelectorAll('.reply-form');

        // Add event listeners for all reply open buttons
        replyOpenBtns.forEach(function (btn, index) {
            btn.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default link behavior
                replyForms[index].classList.add('show'); // Show the corresponding reply form
            });
        });

        // Add event listeners for all reply close buttons
        replyCloseBtns.forEach(function (btn, index) {
            btn.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default link behavior
                replyForms[index].classList.remove('show'); // Hide the corresponding reply form
            });
        });
    }, []);
    return (
        <>
            {/* start reviews section */}
            <div className="mb-4 mt-5">
                <div className="row mb-4">
                    <div className="col-sm">
                        <h4 className="fz20 mb-0">
                            <span className="fw-bold">26122</span> comments
                            found.
                        </h4>
                    </div>
                    <div className="col-sm-auto">
                        <div className="page_control_shorting">
                            <div className="pcs_dropdown dark-color text-center text-md-end">
                                <span className="me-1">Sort by</span>
                                <select className="selectpicker show-tick">
                                    <option>Newest first</option>
                                    <option>Oldest first</option>
                                </select>
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
                        <div className="comment-header mb-3">
                            <h4 className="fz16 mb-0">- Ethan Blackwood</h4>
                            <div className="comment-datetime fz13 text-muted">
                                25 Oct 2023 at 12.27 pm
                            </div>
                        </div>
                        <div className="fs-15">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which.
                        </div>
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <a
                                href="#"
                                className="align-items-center bg-white d-inline-flex fw-medium gap-1 px-3 py-1 rounded-pill ud-btn"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={15}
                                    height={15}
                                    fill="currentColor"
                                    className="bi bi-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                                <span>0</span>
                            </a>
                            {/* Riplay open button */}
                            <a
                                href="#"
                                className="fz12 fw-semibold l-spacing-1 reply-open text-uppercase"
                            >
                                Reply
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="currentColor"
                                    className="bi bi-arrow-return-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                                    />
                                </svg>
                            </a>
                        </div>
                        {/* Riplay form */}
                        <div className="reply-form">
                            <div className="d-flex justify-content-between mb-2 mt-4">
                                <h4 className="fz16 mb-0">
                                    Reply to Ethan Blackwood
                                </h4>
                                {/* Riplay close button */}
                                <a
                                    href="#"
                                    className="reply-close-btn"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                >
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
                            <form>
                                {/* start form group */}
                                <div className="mb-4">
                                    <textarea
                                        className="form-control"
                                        rows={7}
                                        placeholder="Your comment"
                                        defaultValue={""}
                                    />
                                </div>
                                {/* end /. form group */}
                                <button type="submit" className="ud-btn btn-thm">
                                    Leave a comment
                                </button>
                            </form>
                        </div>
                        {/* end /. review */}
                        <div className="d-flex mt-4 border-top pt-4">
                            <div className="flex-shrink-0">
                                <img
                                    src="images/blog/comments-2.png"
                                    alt="..."
                                    height={50}
                                    width={50}
                                    className="object-fit-cover rounded-circle"
                                />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                                    <div>
                                        <h4 className="fz16 mb-0">- Gabriel North</h4>
                                        <div className="comment-datetime fz13 text-muted">
                                            25 Oct 2023 at 12.27 pm
                                        </div>
                                    </div>
                                </div>
                                <div className="fs-15">
                                    {" "}
                                    This is some content from a media component. You
                                    can replace this with any content and adjust it
                                    as needed.
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <a
                                        href="#"
                                        className="align-items-center bg-white d-inline-flex fw-medium gap-1 px-3 py-1 rounded-pill ud-btn"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={15}
                                            height={15}
                                            fill="currentColor"
                                            className="bi bi-heart"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                        </svg>
                                        <span>0</span>
                                    </a>
                                    {/* Riplay open button */}
                                    <a
                                        href="#"
                                        className="fz12 fw-semibold l-spacing-1 reply-open text-uppercase"
                                    >
                                        Reply
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-arrow-return-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                {/* Riplay form */}
                                <div className="reply-form show">
                                    <div className="d-flex justify-content-between mb-2 mt-4">
                                        <h4 className="fz16 mb-0">
                                            Reply to Gabriel North
                                        </h4>
                                        {/* Riplay close button */}
                                        <a
                                            href="#"
                                            className="reply-close-btn"
                                            data-bs-toggle="collapse"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >
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
                                    <form>
                                        {/* start form group */}
                                        <div className="mb-4">
                                            <textarea
                                                className="form-control"
                                                rows={7}
                                                placeholder="Your comment"
                                                defaultValue={""}
                                            />
                                        </div>
                                        {/* end /. form group */}
                                        <button
                                            type="submit"
                                            className="ud-btn btn-thm"
                                        >
                                            Leave a comment
                                        </button>
                                    </form>
                                </div>
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
                    <div className="flex-grow-1 ms-3">
                        <div className="comment-header mb-3">
                            <h4 className="fz16 mb-0">- Pranoti Deshpande</h4>
                            <div className="comment-datetime fz13 text-muted">
                                25 Oct 2023 at 12.27 pm
                            </div>
                        </div>
                        <div className="fs-15">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.{" "}
                        </div>
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <a
                                href="#"
                                className="align-items-center bg-white d-inline-flex fw-medium gap-1 px-3 py-1 rounded-pill ud-btn"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={15}
                                    height={15}
                                    fill="currentColor"
                                    className="bi bi-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                                <span>0</span>
                            </a>
                            {/* Riplay open button */}
                            <a
                                href="#"
                                className="fz12 fw-semibold l-spacing-1 reply-open text-uppercase"
                            >
                                Reply
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="currentColor"
                                    className="bi bi-arrow-return-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                                    />
                                </svg>
                            </a>
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
                    <div className="flex-grow-1 ms-3">
                        <div className="comment-header mb-3">
                            <h4 className="fz16 mb-0">- Marcus Knight</h4>
                            <div className="comment-datetime fz13 text-muted">
                                25 Oct 2023 at 12.27 pm
                            </div>
                        </div>
                        <div className="fs-15">
                            {" "}
                            This is some content from a media component. You can
                            replace this with any content and adjust it as
                            needed.
                        </div>
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <a
                                href="#"
                                className="align-items-center bg-white d-inline-flex fw-medium gap-1 px-3 py-1 rounded-pill ud-btn"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={15}
                                    height={15}
                                    fill="currentColor"
                                    className="bi bi-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                                <span>0</span>
                            </a>
                            {/* Riplay open button */}
                            <a
                                href="#"
                                className="fz12 fw-semibold l-spacing-1 reply-open text-uppercase"
                            >
                                Reply
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="currentColor"
                                    className="bi bi-arrow-return-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}