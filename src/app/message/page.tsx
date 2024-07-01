import WebLayout from "../web-layout/layout";

export default function Page() {
    return (
        <WebLayout>
            <section className="py-4">
                <div className="container">
                    <div className="chat-container m-0 overflow-hidden position-relative rounded-3 bdr1 row shadow">
                        <div className="chat-list__sidebar p-0">
                            <div className="chat-list__search position-relative">
                                <form className="form-inline position-relative">
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="People Groups and Messages"
                                    />
                                    <button type="button" className="btn btn-link loop">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="bi bi-search"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                    </button>
                                </form>
                                {/* <button class="btn create" data-bs-toggle="modal" data-bs-target="#startnewchat">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                              </svg>
                          </button> */}
                            </div>
                            {/*/.chat list search*/}
                            <ul
                                className="chat-list__sidebar-tabs nav nav-tabs"
                                id="sidebarTab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        id="chat-tab"
                                        data-bs-toggle="tab"
                                        href="#chat"
                                        role="tab"
                                        aria-controls="chat"
                                        aria-selected="true"
                                    >
                                        <div className="position-relative">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={21}
                                                height={21}
                                                fill="currentColor"
                                                className="bi bi-chat-square-text"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                            </svg>
                                            <div className="counts">5</div>
                                        </div>
                                        <span className="d-block fz13 fw-semibold text-truncate">
                                            Initiated
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="phone-tab"
                                        data-bs-toggle="tab"
                                        href="#phone"
                                        role="tab"
                                        aria-controls="phone"
                                        aria-selected="true"
                                    >
                                        <div className="position-relative">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={21}
                                                height={21}
                                                fill="currentColor"
                                                className="bi bi-people"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                            </svg>
                                        </div>
                                        <span className="d-block fz13 fw-semibold text-truncate">
                                            Hired
                                        </span>
                                    </a>
                                </li>
                                {/* <li class="nav-item">
                              <a class="nav-link" id="contacts-tab" data-bs-toggle="tab" href="#contacts" role="tab" aria-controls="contacts" aria-selected="false">
                                  <div class="position-relative">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                                      </svg>
                                  </div><span class="d-block fz14 fw-semibold text-truncate">Contacts</span>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" id="notifications-tab" data-bs-toggle="tab" href="#notifications" role="tab" aria-controls="notifications" aria-selected="false">
                                  <div class="position-relative">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                      </svg>
                                      <div class="counts">3</div>
                                  </div><span class="d-block fz14 fw-semibold text-truncate">Notifications</span>
                              </a>
                          </li> */}
                            </ul>
                            {/*/.chat list sidebar tabs*/}
                            <div className="tab-content" id="sidebarTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="chat"
                                    role="tabpanel"
                                    aria-labelledby="chat-tab"
                                >
                                    <div className="chat-list__in position-relative">
                                        <h2>Recent Chat</h2>
                                        <div className="nav chat-list" role="tablist">
                                            <a
                                                className="item-list item-list__chat d-flex align-items-start unseen active"
                                                id="list-item1-tab"
                                                data-bs-toggle="tab"
                                                href="#list-item1"
                                                role="tab"
                                                aria-controls="list-item1"
                                                aria-selected="true"
                                            >
                                                <div className="avatar">
                                                    <img src="images/team/client-2.png" alt="avatar" />
                                                    <div className="status online" />
                                                    <div className="new bg-yellow">
                                                        <span>9</span>{" "}
                                                    </div>
                                                </div>
                                                <div className="info-text">
                                                    <h5>Alexander Kaminski</h5>
                                                    <span>Sat</span>
                                                    <p>A new feature has been updated to your...</p>
                                                </div>
                                            </a>
                                            {/*/.chat list item*/}
                                            <a
                                                className="item-list item-list__chat d-flex align-items-start unseen"
                                                id="list-item2-tab"
                                                data-bs-toggle="tab"
                                                href="#list-item2"
                                                role="tab"
                                                aria-controls="list-item2"
                                                aria-selected="true"
                                            >
                                                <div className="avatar">
                                                    <img src="images/team/client-1.png" alt="avatar" />
                                                    <div className="status online" />
                                                    <div className="new bg-pink">
                                                        <span>+10</span>
                                                    </div>
                                                </div>
                                                <div className="info-text">
                                                    <h5>Edwin Martins</h5>
                                                    <span>10:05PM</span>
                                                    <p>How can i improve my chances of getting a deposit?</p>
                                                </div>
                                            </a>
                                            {/*/.chat list item*/}
                                            <a
                                                className="item-list item-list__chat d-flex align-items-start seen"
                                                id="list-item3-tab"
                                                data-bs-toggle="tab"
                                                href="#list-item3"
                                                role="tab"
                                                aria-controls="list-item3"
                                                aria-selected="true"
                                            >
                                                <div className="avatar">
                                                    <img src="images/team/client-3.png" alt="avatar" />
                                                    <div className="status ofline" />
                                                </div>
                                                <div className="info-text">
                                                    <h5>Gabriel North</h5>
                                                    <span>Tus</span>
                                                    <p>
                                                        Hey Chris, could i ask you to help me out with
                                                        variation...
                                                    </p>
                                                </div>
                                            </a>
                                            {/*/.chat list item*/}
                                            <a
                                                href="#"
                                                className="item-list item-list__chat d-flex align-items-start seen"
                                            >
                                                <div className="avatar">
                                                    <img src="images/team/client-6.png" alt="avatar" />
                                                    <div className="status online" />
                                                </div>
                                                <div className="info-text">
                                                    <h5>Ethan Blackwood</h5>
                                                    <span>1/22/2019</span>
                                                    <p>By injected humour, or randomised words which...</p>
                                                </div>
                                            </a>
                                            {/*/.chat list item*/}
                                            <a
                                                href="#"
                                                className="item-list item-list__chat d-flex align-items-start seen"
                                            >
                                                <div className="avatar">
                                                    <img src="images/team/client-1.png" alt="avatar" />
                                                    <div className="status ofline" />
                                                    <div className="new bg-pink">
                                                        <span>10</span>
                                                    </div>
                                                </div>
                                                <div className="info-text">
                                                    <h5>Alexander Steele</h5>
                                                    <span>1/18/2019</span>
                                                    <p>No more running out of the office at 4pm on Fridays!</p>
                                                </div>
                                            </a>
                                            {/*/.chat list item*/}
                                            <a
                                                href="#"
                                                className="item-list item-list__chat d-flex align-items-start seen"
                                            >
                                                <div className="avatar">
                                                    <img src="images/team/client-2.png" alt="avatar" />
                                                    <div className="status ofline" />
                                                </div>
                                                <div className="info-text">
                                                    <h5>Marcus Knight</h5>
                                                    <span>1/09/2019</span>
                                                    <p>
                                                        All your favourite books at your reach! We are now mobile.
                                                    </p>
                                                </div>
                                            </a>
                                            {/*/.chat list item*/}
                                            <a
                                                href="#"
                                                className="item-list item-list__chat d-flex align-items-start unseen"
                                            >
                                                <div className="avatar">
                                                    <img src="images/team/client-1.png" alt="avatar" />
                                                    <div className="status" />
                                                    <div className="new bg-gray">
                                                        <span>?</span>
                                                    </div>
                                                </div>
                                                <div className="info-text">
                                                    <h5>Alexander Kaminski</h5>
                                                    <span>Feb 10</span>
                                                    <p>Hi Keith, I'd like to add you as a contact.</p>
                                                </div>
                                            </a>
                                            {/*/.chat list item*/}
                                            <a
                                                href="#"
                                                className="item-list item-list__chat d-flex align-items-start seen"
                                            >
                                                <div className="avatar">
                                                    <img src="images/team/client-3.png" alt="avatar" />
                                                    <div className="status" />
                                                </div>
                                                <div className="info-text">
                                                    <h5>Pranoti Deshpande</h5>
                                                    <span>Feb 9</span>
                                                    <p>Dear Deborah, your Thai massage is today at 5pm.</p>
                                                </div>
                                            </a>
                                            {/*/.chat list item*/}
                                            <a
                                                href="#"
                                                className="item-list item-list__chat d-flex align-items-start unseen"
                                            >
                                                <div className="avatar">
                                                    <img src="images/team/client-6.png" alt="avatar" />
                                                    <div className="status" />
                                                    <div className="new bg-green">
                                                        <span>+10</span>
                                                    </div>
                                                </div>
                                                <div className="info-text">
                                                    <h5>Edwin Martins</h5>
                                                    <span>Thu</span>
                                                    <p>Unfortunately your session today has been cancelled!</p>
                                                </div>
                                            </a>
                                            {/*/.chat list item*/}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="phone"
                                    role="tabpanel"
                                    aria-labelledby="phone-tab"
                                >
                                    <div className="chat-list__in position-relative">
                                        <h2>Online Users</h2>
                                        <div className="online-visitor">
                                            <a
                                                href="#"
                                                className="visitor-history"
                                                data-bs-toggle="popover"
                                                data-trigger="hover"
                                                data-placement="right"
                                                title="User Info"
                                                data-content="<div class='chat-user__info chat-user__info-popover user-info d-flex align-items-center'><div class='avatar'><img src='assets/dist/img/avatar/avatar-5.png' alt='avatar'><div class='status online'></div></div><div class='info-text'><table class='table m-0'><tbody><tr><td class='user-info-first'>Name</td><td class='text-muted'>Edwin Martins</td></tr><tr><td class='user-info-first'>ID</td><td class='text-muted'>123</td></tr><tr><td class='user-info-first'>E-mail</td><td class='text-muted'>example@email.com</td></tr><tr><td class='user-info-first'>URL</td><td class='text-muted'><a href='#' class='text-muted'>https://easital.com/</a></td></tr></tbody></table></div></div>"
                                            >
                                                <div>
                                                    <span className="visitor-id">visitor.75327</span>
                                                    <span className="source-link">https://easital.com/</span>
                                                </div>
                                            </a>
                                            {/*/.visitor history*/}
                                            <a
                                                href="#"
                                                className="visitor-history"
                                                data-bs-toggle="popover"
                                                data-trigger="hover"
                                                data-placement="right"
                                                title="User Info"
                                                data-content="<div class='chat-user__info chat-user__info-popover user-info d-flex align-items-center'><div class='avatar'><img src='assets/dist/img/avatar/avatar-5.png' alt='avatar'><div class='status online'></div></div><div class='info-text'><table class='table m-0'><tbody><tr><td class='user-info-first'>Name</td><td class='text-muted'>Edwin Martins</td></tr><tr><td class='user-info-first'>ID</td><td class='text-muted'>123</td></tr><tr><td class='user-info-first'>E-mail</td><td class='text-muted'>example@email.com</td></tr><tr><td class='user-info-first'>URL</td><td class='text-muted'><a href='#' class='text-muted'>https://easital.com/</a></td></tr></tbody></table></div></div>"
                                            >
                                                <div>
                                                    <span className="visitor-id">Pawel</span>
                                                    <span className="source-link">https://easital.com/</span>
                                                </div>
                                            </a>
                                            {/*/.visitor history*/}
                                            <a
                                                href="#"
                                                className="visitor-history"
                                                data-bs-toggle="popover"
                                                data-trigger="hover"
                                                data-placement="right"
                                                title="User Info"
                                                data-content="<div class='chat-user__info chat-user__info-popover user-info d-flex align-items-center'><div class='avatar'><img src='assets/dist/img/avatar/avatar-5.png' alt='avatar'><div class='status online'></div></div><div class='info-text'><table class='table m-0'><tbody><tr><td class='user-info-first'>Name</td><td class='text-muted'>Edwin Martins</td></tr><tr><td class='user-info-first'>ID</td><td class='text-muted'>123</td></tr><tr><td class='user-info-first'>E-mail</td><td class='text-muted'>example@email.com</td></tr><tr><td class='user-info-first'>URL</td><td class='text-muted'><a href='#' class='text-muted'>https://easital.com/</a></td></tr></tbody></table></div></div>"
                                            >
                                                <div>
                                                    <span className="visitor-id">Visitor.13150</span>
                                                    <span className="source-link">https://easital.com/</span>
                                                </div>
                                            </a>
                                            {/*/.visitor history*/}
                                            <a
                                                href="#"
                                                className="visitor-history"
                                                data-bs-toggle="popover"
                                                data-trigger="hover"
                                                data-placement="right"
                                                title="User Info"
                                                data-content="<div class='chat-user__info chat-user__info-popover user-info d-flex align-items-center'><div class='avatar'><img src='assets/dist/img/avatar/avatar-5.png' alt='avatar'><div class='status online'></div></div><div class='info-text'><table class='table m-0'><tbody><tr><td class='user-info-first'>Name</td><td class='text-muted'>Edwin Martins</td></tr><tr><td class='user-info-first'>ID</td><td class='text-muted'>123</td></tr><tr><td class='user-info-first'>E-mail</td><td class='text-muted'>example@email.com</td></tr><tr><td class='user-info-first'>URL</td><td class='text-muted'><a href='#' class='text-muted'>https://easital.com/</a></td></tr></tbody></table></div></div>"
                                            >
                                                <div>
                                                    <span className="visitor-id">visitor.65652</span>
                                                    <span className="source-link">https://easital.com/</span>
                                                </div>
                                            </a>
                                            {/*/.visitor history*/}
                                            <a
                                                href="#"
                                                className="visitor-history"
                                                data-bs-toggle="popover"
                                                data-trigger="hover"
                                                data-placement="right"
                                                title="User Info"
                                                data-content="<div class='chat-user__info chat-user__info-popover user-info d-flex align-items-center'><div class='avatar'><img src='assets/dist/img/avatar/avatar-5.png' alt='avatar'><div class='status online'></div></div><div class='info-text'><table class='table m-0'><tbody><tr><td class='user-info-first'>Name</td><td class='text-muted'>Edwin Martins</td></tr><tr><td class='user-info-first'>ID</td><td class='text-muted'>123</td></tr><tr><td class='user-info-first'>E-mail</td><td class='text-muted'>example@email.com</td></tr><tr><td class='user-info-first'>URL</td><td class='text-muted'><a href='#' class='text-muted'>https://easital.com/</a></td></tr></tbody></table></div></div>"
                                            >
                                                <div>
                                                    <span className="visitor-id">visitor.75327</span>
                                                    <span className="source-link">https://easital.com/</span>
                                                </div>
                                            </a>
                                            {/*/.visitor history*/}
                                            <a
                                                href="#"
                                                className="visitor-history"
                                                data-bs-toggle="popover"
                                                data-trigger="hover"
                                                data-placement="right"
                                                title="User Info"
                                                data-content="<div class='chat-user__info chat-user__info-popover user-info d-flex align-items-center'><div class='avatar'><img src='assets/dist/img/avatar/avatar-5.png' alt='avatar'><div class='status online'></div></div><div class='info-text'><table class='table m-0'><tbody><tr><td class='user-info-first'>Name</td><td class='text-muted'>Edwin Martins</td></tr><tr><td class='user-info-first'>ID</td><td class='text-muted'>123</td></tr><tr><td class='user-info-first'>E-mail</td><td class='text-muted'>example@email.com</td></tr><tr><td class='user-info-first'>URL</td><td class='text-muted'><a href='#' class='text-muted'>https://easital.com/</a></td></tr></tbody></table></div></div>"
                                            >
                                                <div>
                                                    <span className="visitor-id">visitor.95343</span>
                                                    <span className="source-link">https://easital.com/</span>
                                                </div>
                                            </a>
                                            {/*/.visitor history*/}
                                            <a
                                                href="#"
                                                className="visitor-history"
                                                data-bs-toggle="popover"
                                                data-trigger="hover"
                                                data-placement="right"
                                                title="User Info"
                                                data-content="<div class='chat-user__info chat-user__info-popover user-info d-flex align-items-center'><div class='avatar'><img src='assets/dist/img/avatar/avatar-5.png' alt='avatar'><div class='status online'></div></div><div class='info-text'><table class='table m-0'><tbody><tr><td class='user-info-first'>Name</td><td class='text-muted'>Edwin Martins</td></tr><tr><td class='user-info-first'>ID</td><td class='text-muted'>123</td></tr><tr><td class='user-info-first'>E-mail</td><td class='text-muted'>example@email.com</td></tr><tr><td class='user-info-first'>URL</td><td class='text-muted'><a href='#' class='text-muted'>https://easital.com/</a></td></tr></tbody></table></div></div>"
                                            >
                                                <div>
                                                    <span className="visitor-id">Visitor.13150</span>
                                                    <span className="source-link">https://easital.com/</span>
                                                </div>
                                            </a>
                                            {/*/.visitor history*/}
                                            <a
                                                href="#"
                                                className="visitor-history"
                                                data-bs-toggle="popover"
                                                data-trigger="hover"
                                                data-placement="right"
                                                title="User Info"
                                                data-content="<div class='chat-user__info chat-user__info-popover user-info d-flex align-items-center'><div class='avatar'><img src='assets/dist/img/avatar/avatar-5.png' alt='avatar'><div class='status online'></div></div><div class='info-text'><table class='table m-0'><tbody><tr><td class='user-info-first'>Name</td><td class='text-muted'>Edwin Martins</td></tr><tr><td class='user-info-first'>ID</td><td class='text-muted'>123</td></tr><tr><td class='user-info-first'>E-mail</td><td class='text-muted'>example@email.com</td></tr><tr><td class='user-info-first'>URL</td><td class='text-muted'><a href='#' class='text-muted'>https://easital.com/</a></td></tr></tbody></table></div></div>"
                                            >
                                                <div>
                                                    <span className="visitor-id">visitor.65652</span>
                                                    <span className="source-link">https://easital.com/</span>
                                                </div>
                                            </a>
                                            {/*/.visitor history*/}
                                        </div>
                                        {/*/.online visitor*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/.chat list sidebar*/}
                        <div className="tab-content chat-panel p-0">
                            <div className="tab-pane fade" id="list-item-empty" role="tabpanel">
                                <div className="message-content app-empty-page empty">
                                    <div className="no-messages">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-chat-left-quote"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                            <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                                        </svg>
                                        <p>
                                            Seems people are shy to start the chat. Break the ice send the
                                            first message.
                                        </p>
                                    </div>
                                </div>
                                {/*App empty page*/}
                            </div>
                            <div
                                className="tab-pane"
                                id="list-item1"
                                role="tabpanel"
                                aria-labelledby="list-item1-tab"
                            >
                                <div className="chat-header d-flex align-items-center">
                                    <button
                                        type="button"
                                        className="btn chat-sidebar-collapse d-block d-xl-none"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-grid"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                                        </svg>
                                    </button>
                                    {/*chat list sidebar collapse button*/}
                                    {/*<a href="#" class="position-relative">
                      <img src="assets/dist/img/avatar.png" data-bs-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Keith">
                      <div class="status online"></div>
                  </a>*/}
                                    <div className="meta-info data">
                                        <h5>
                                            <a href="#">Alexander Kaminski</a>
                                        </h5>
                                        <span>Last seen 12hour ago</span>
                                    </div>
                                    <button
                                        className="btn d-md-block d-none"
                                        title="Start a voice call"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-telephone-outbound"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-md-block d-none"
                                        title="Start a video call"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-camera-video"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-md-block d-none"
                                        title="Conversation information"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-info-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-md-block d-none search-btn"
                                        title="Search in conversation"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-search"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-block d-lg-none chat-settings-collapse"
                                        title="Settings"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-sliders"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
                                            />
                                        </svg>
                                    </button>
                                    <div className="dropdown">
                                        <button
                                            className="btn me-0"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={21}
                                                height={21}
                                                fill="currentColor"
                                                className="bi bi-three-dots-vertical"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                            </svg>
                                        </button>
                                        <div className="dropdown-menu">
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-telephone-forward"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                Voice Call
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-camera-video"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                                                    />
                                                </svg>
                                                Video Call
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-x-circle"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                                </svg>
                                                Clear History
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-ban"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M15 8a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                                                </svg>
                                                Block Contact
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-trash3"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                </svg>
                                                Delete Contact
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="messenger-dialog row m-0">
                                    <div className="messenger-dialog__area p-0">
                                        <div className="conversation-search">
                                            <div className="d-flex">
                                                <div
                                                    className="btn-group"
                                                    role="group"
                                                    aria-label="Basic example"
                                                >
                                                    <button type="button" className="btn">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            fill="currentColor"
                                                            className="bi bi-arrow-up"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button type="button" className="btn">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            fill="currentColor"
                                                            className="bi bi-arrow-down"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="input-group">
                                                    <div className="search__icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            fill="currentColor"
                                                            className="bi bi-search"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Recipient's username"
                                                        aria-label="Recipient's username"
                                                        aria-describedby="button-addon2"
                                                    />
                                                    <button
                                                        className="btn btn-outline-secondary close-search"
                                                        type="button"
                                                        id="button-addon2"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.conversation search */}
                                        <div className="align-items-center d-flex empty justify-content-center message-content overflow-y-auto p-0 position-relative">
                                            <div className="no-messages">
                                                <img
                                                    src="assets/dist/img/message.png"
                                                    alt=""
                                                    height={150}
                                                    className="mb-3"
                                                />
                                                <p className="mb-0">
                                                    This chat is empty.
                                                    <br /> Be the first one to start it.
                                                </p>
                                            </div>
                                        </div>
                                        {/*/.tab content*/}
                                        <div className="chat-area-bottom d-flex align-items-center">
                                            {/* <form class="position-relative w-100">
                                          <button type="submit" class="align-items-center btn d-flex start-0 justify-content-center p-0 position-absolute send top-0">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                                              </svg>
                                          </button>
                                          <textarea class="form-control" placeholder="Type a message here..." rows="1"></textarea>
                                          <button type="submit" class="align-items-center btn d-flex end-0 justify-content-center p-0 position-absolute send top-0">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                              </svg>
                                          </button>
                                      </form> */}
                                            <form className="position-relative w-100">
                                                <textarea
                                                    className="form-control emojionearea"
                                                    placeholder="Type a message here..."
                                                    rows={1}
                                                    defaultValue={""}
                                                />
                                                {/*<button class="btn emoticons"><i class="material-icons">insert_emoticon</i></button>*/}
                                                <button type="submit" className="btn send">
                                                    <i className="material-icons">send</i>
                                                </button>
                                            </form>
                                            <label>
                                                <input type="file" />
                                                <span className="align-items-center attach btn-thm d-flex justify-content-center ms-3 p-0 rounded-circle text-white ud-btn">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        fill="currentColor"
                                                        className="bi bi-paperclip"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                        {/*/.chat area bottom*/}
                                    </div>
                                    <div className="chat-list__sidebar--right">
                                        <div className="chat-user__info d-flex align-items-center">
                                            <div className="avatar">
                                                <img src="images/team/client-2.png" alt="avatar" />
                                                <div className="status online" />
                                            </div>
                                            <div className="info-text">
                                                <h5 className="m-0">Alexander Kaminski</h5>
                                                <p className="writing">Alexander typing a message</p>
                                            </div>
                                        </div>
                                        <div className="chatting_indicate card-body">
                                            <h5>Conversation With Auto bot or manual</h5>
                                            <p>Everyone in this conversation will see this.</p>
                                            <div className="d-flex align-items-center">
                                                <label className="toggler toggler--is-active" id="autobot">
                                                    Auto bot
                                                </label>
                                                <div className="toggle">
                                                    <input type="checkbox" id="switcher" className="check" />
                                                    <b className="toggle-switch" />
                                                </div>
                                                <label className="toggler" id="manual">
                                                    Manual
                                                </label>
                                            </div>
                                            <h5>About Buyer</h5>
                                            <div className="user-info">
                                                <div className="table-responsive">
                                                    <table className="table border">
                                                        <tbody>
                                                            <tr>
                                                                <td className="user-info-first">Name</td>
                                                                <td>Alexander Kaminski</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="user-info-first">ID</td>
                                                                <td>123</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="user-info-first">E-mail</td>
                                                                <td>example@email.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="user-info-first">URL</td>
                                                                <td>
                                                                    <a href="#">https://easital.com/</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="user-info-first">Browser</td>
                                                                <td>Chrome</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="accordion" className="accordion">
                                            <div className="">
                                                <div className="accordion-header" id="headingThree">
                                                    <h5 className="card-header__title mb-0">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree"
                                                            aria-expanded="false"
                                                            aria-controls="collapseThree"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={19}
                                                                height={19}
                                                                fill="currentColor"
                                                                className="bi bi-person-check"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                                                <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                                            </svg>
                                                            User Details
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div
                                                    id="collapseThree"
                                                    className="collapse"
                                                    aria-labelledby="headingThree"
                                                    data-parent="#accordion"
                                                >
                                                    <div className="card-body">
                                                        <div className="user-info">
                                                            <div className="table-responsive">
                                                                <table className="table border">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="user-info-first">Name</td>
                                                                            <td>Alexander Kaminski</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="user-info-first">ID</td>
                                                                            <td>123</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="user-info-first">E-mail</td>
                                                                            <td>example@email.com</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="user-info-first">URL</td>
                                                                            <td>
                                                                                <a href="#">https://easital.com/</a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="user-info-first">Browser</td>
                                                                            <td>Chrome</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="accordion-header" id="headingOne">
                                                    <h5 className="card-header__title mb-0">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne"
                                                            aria-expanded="false"
                                                            aria-controls="collapseOne"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="bi bi-pen"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                                            </svg>
                                                            Edit name
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div
                                                    id="collapseOne"
                                                    className="collapse"
                                                    aria-labelledby="headingOne"
                                                    data-parent="#accordion"
                                                >
                                                    <div className="card-body">
                                                        <h5>Edit Nickname for Alexander Kaminski</h5>
                                                        <p>Everyone in this conversation will see this.</p>
                                                        <div className="mb-3">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="exampleInputEmail1"
                                                                placeholder="Alexander Kaminski"
                                                            />
                                                        </div>
                                                        <div className="action-btn text-end">
                                                            <a href="#">Save</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="accordion-header" id="headingTwo">
                                                    <h5 className="card-header__title mb-0">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className=""
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo"
                                                            aria-expanded="true"
                                                            aria-controls="collapseTwo"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={18}
                                                                height={18}
                                                                fill="currentColor"
                                                                className="bi bi-palette"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                                <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7" />
                                                            </svg>
                                                            Change color
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div
                                                    id="collapseTwo"
                                                    className="collapse show"
                                                    aria-labelledby="headingTwo"
                                                    data-parent="#accordion"
                                                >
                                                    <div className="card-body">
                                                        <h5>Pick a color for this conversation</h5>
                                                        <p>Everyone in this conversation will see this.</p>
                                                        <div className="radio-list change-bg-color">
                                                            <input type="radio" name="color" id="red" />
                                                            <label htmlFor="red" data-color="red">
                                                                <span className="red" />
                                                            </label>
                                                            <input
                                                                type="radio"
                                                                name="color"
                                                                id="green"
                                                                defaultChecked=""
                                                            />
                                                            <label htmlFor="green" data-color="green">
                                                                <span className="green" />
                                                            </label>
                                                            <input type="radio" name="color" id="yellow" />
                                                            <label htmlFor="yellow" data-color="yellow">
                                                                <span className="yellow" />
                                                            </label>
                                                            <input type="radio" name="color" id="olive" />
                                                            <label htmlFor="olive" data-color="olive">
                                                                <span className="olive" />
                                                            </label>
                                                            <input type="radio" name="color" id="orange" />
                                                            <label htmlFor="orange" data-color="orange">
                                                                <span className="orange" />
                                                            </label>
                                                            <input type="radio" name="color" id="teal" />
                                                            <label htmlFor="teal" data-color="teal">
                                                                <span className="teal" />
                                                            </label>
                                                            <input type="radio" name="color" id="blue" />
                                                            <label htmlFor="blue" data-color="blue">
                                                                <span className="blue" />
                                                            </label>
                                                            <input type="radio" name="color" id="violet" />
                                                            <label htmlFor="violet" data-color="violet">
                                                                <span className="violet" />
                                                            </label>
                                                            <input type="radio" name="color" id="purple" />
                                                            <label htmlFor="purple" data-color="purple">
                                                                <span className="purple" />
                                                            </label>
                                                            <input type="radio" name="color" id="pink" />
                                                            <label htmlFor="pink" data-color="pink">
                                                                <span className="pink" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="accordion-header" id="headingFour">
                                                    <h5 className="card-header__title mb-0">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseFour"
                                                            aria-expanded="false"
                                                            aria-controls="collapseFour"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={18}
                                                                height={18}
                                                                fill="currentColor"
                                                                className="bi bi-bell"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                                            </svg>
                                                            Notifications
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div
                                                    id="collapseFour"
                                                    className="collapse"
                                                    aria-labelledby="headingFour"
                                                    data-parent="#accordion"
                                                >
                                                    <div className="card-body">
                                                        <h5>Conversation Notifications</h5>
                                                        <p>Everyone in this conversation will see this.</p>
                                                        <div className="mb-3 mb-4">
                                                            <span className="switch switch-sm">
                                                                <input
                                                                    type="checkbox"
                                                                    className="switch"
                                                                    id="switch1"
                                                                />
                                                                <label htmlFor="switch1">
                                                                    Receive notifications for new messages
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="mb-3">
                                                            <span className="switch switch-sm">
                                                                <input
                                                                    type="checkbox"
                                                                    className="switch"
                                                                    id="switch2"
                                                                />
                                                                <label htmlFor="switch2">
                                                                    Receive notifications for reactions
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="action-btn text-end">
                                                            <a href="#">Done</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/.chat list sidebar right*/}
                                </div>
                            </div>
                            <div
                                className="tab-pane show active"
                                id="list-item2"
                                role="tabpanel"
                                aria-labelledby="list-item2-tab"
                            >
                                <div className="chat-header d-flex align-items-center">
                                    <button
                                        type="button"
                                        className="btn chat-sidebar-collapse d-block d-xl-none"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-grid"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                                        </svg>
                                    </button>
                                    <div className="meta-info data">
                                        <h5>
                                            <a href="#">Edwin Martins</a>
                                        </h5>
                                        <span>Last seen 12hour ago</span>
                                    </div>
                                    <button
                                        className="btn d-md-block d-none"
                                        title="Start a voice call"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-telephone-outbound"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-md-block d-none"
                                        title="Start a video call"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-camera-video"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-md-block d-none"
                                        title="Conversation information"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-info-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-md-block d-none search-btn"
                                        title="Search in conversation"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-search"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-block d-lg-none chat-settings-collapse"
                                        title="Settings"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-sliders"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
                                            />
                                        </svg>
                                    </button>
                                    <div className="dropdown">
                                        <button
                                            className="btn me-0"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={21}
                                                height={21}
                                                fill="currentColor"
                                                className="bi bi-three-dots-vertical"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                            </svg>
                                        </button>
                                        <div className="dropdown-menu">
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-telephone-forward"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                Voice Call
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-camera-video"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                                                    />
                                                </svg>
                                                Video Call
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-x-circle"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                                </svg>
                                                Clear History
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-ban"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M15 8a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                                                </svg>
                                                Block Contact
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-trash3"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                </svg>
                                                Delete Contact
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="messenger-dialog row m-0">
                                    <div className="messenger-dialog__area p-0">
                                        <div className="chatbot_body--reconnecting">Reconnecting…</div>
                                        <div className="conversation-search">
                                            <div className="d-flex">
                                                <div
                                                    className="btn-group"
                                                    role="group"
                                                    aria-label="Basic example"
                                                >
                                                    <button type="button" className="btn">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            fill="currentColor"
                                                            className="bi bi-arrow-up"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button type="button" className="btn">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            fill="currentColor"
                                                            className="bi bi-arrow-down"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="input-group">
                                                    <div className="search__icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            fill="currentColor"
                                                            className="bi bi-search"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Recipient's username"
                                                        aria-label="Recipient's username"
                                                        aria-describedby="button-addon4"
                                                    />
                                                    <button
                                                        className="btn btn-outline-secondary close-search"
                                                        type="button"
                                                        id="button-addon4"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.conversation search */}
                                        <div className="message-content message-content-scroll bg-text-green">
                                            <div className="message-content-inner">
                                                <div className="date">
                                                    <hr />
                                                    <span>Yesterday</span>
                                                    <hr />
                                                </div>
                                                <div className="message">
                                                    <img
                                                        className="avatar"
                                                        src="images/team/client-2.png"
                                                        data-bs-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        alt="avatar"
                                                        data-original-title="Keith"
                                                    />
                                                    <div className="text-main">
                                                        <div className="text-group">
                                                            <div className="d-flex align-items-center gap-1 text-wrap">
                                                                <div className="text">
                                                                    <p>Hello there! 👋 It's nice to meet you!</p>
                                                                    <div className="text-sending-time">3:05 PM</div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#deleteMessageModal"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1 text-wrap">
                                                                <div className="text">
                                                                    <p>
                                                                        Here are the things I can help you with today: 📣
                                                                        "Subscribe" to new content and announcements 🗣
                                                                        "Get Support" for direct human support Or, try
                                                                        asking a question about Flow XO (say "ask
                                                                        question" for suggestions).
                                                                    </p>
                                                                    <div className="text-sending-time">3:05 PM</div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1 text-wrap">
                                                                <div className="text">
                                                                    <p>
                                                                        What brings you here today? Please use the
                                                                        navigation below or ask me anything about ChatBot
                                                                        product. 🪄
                                                                    </p>
                                                                    <div className="text-sending-time">3:05 PM</div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Replay message */}
                                                            <div className="d-flex align-items-center gap-1 text-wrap">
                                                                <div className="text">
                                                                    <div className="replay-text">
                                                                        <h6 className="fw-semibold fz14 mb-1 text-primary">
                                                                            You
                                                                        </h6>
                                                                        <p>
                                                                            Dinner sounds good to me! What did you have in
                                                                            mind?
                                                                        </p>
                                                                    </div>
                                                                    <p>
                                                                        Well, I was thinking we could try that new Mexican
                                                                        place downtown that everyone has been raving
                                                                        about. Their tacos are supposed to be amazing.
                                                                    </p>
                                                                    <div className="text-sending-time">3:05 PM</div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1 text-wrap">
                                                                {/* Player */}
                                                                <div
                                                                    className="audio-player"
                                                                    data-url="https://upload.wikimedia.org/wikipedia/commons/8/81/Audio_test_german.ogg"
                                                                >
                                                                    <div className="player">
                                                                        <button type="button" className="btn-play">
                                                                            <span className="material-icons icon-play">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={36}
                                                                                    height={36}
                                                                                    fill="currentColor"
                                                                                    className="bi bi-play-fill"
                                                                                    viewBox="0 0 16 16"
                                                                                >
                                                                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                                                                </svg>
                                                                            </span>
                                                                            <span className="material-icons icon-pause">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={36}
                                                                                    height={36}
                                                                                    fill="currentColor"
                                                                                    className="bi bi-pause-fill"
                                                                                    viewBox="0 0 16 16"
                                                                                >
                                                                                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
                                                                                </svg>
                                                                            </span>
                                                                            <span className="material-icons icon-loop">
                                                                                loop
                                                                            </span>
                                                                        </button>
                                                                        <div className="timeline">
                                                                            <div className="line">
                                                                                <input
                                                                                    dir="ltr"
                                                                                    type="range"
                                                                                    min={0}
                                                                                    max={100}
                                                                                    defaultValue={0}
                                                                                />
                                                                            </div>
                                                                            <div className="data">
                                                                                <div className="current-time" />
                                                                                <div className="time" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="user">
                                                                        <img src="images/team/client-2.png" />
                                                                        <span className="material-icons">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                fill="currentColor"
                                                                                className="bi bi-mic-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                                                                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                {/* Fim player */}
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Download</div>
                                                                                    <div>
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
                                                                                            className="feather feather-download"
                                                                                        >
                                                                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                                                            <polyline points="7 10 12 15 17 10" />
                                                                                            <line x1={12} y1={15} x2={12} y2={3} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Player */}
                                                            {/* <div class="audio-player mine" data-url="https://upload.wikimedia.org/wikipedia/commons/2/24/Sahan_Test_Audio.ogg">
                                                          <div class="user">
                                                              <img src="https://avatars.githubusercontent.com/u/3522573?&v=4" />
                                                              <span class="material-icons">mic</span>
                                                          </div>
                                                          <div class="player">
                                                              <button type="button" class="btn-play">
                                                                  <span class="material-icons icon-play">play_arrow</span>
                                                                  <span class="material-icons icon-pause">pause</span>
                                                                  <span class="material-icons icon-loop">loop</span>
                                                              </button>
                                                              <div class="timeline">
                                                                  <div class="line">
                                                                      <input dir="ltr" type="range" min="0" max="100" value="0">
                                                                  </div>
                                                                  <div class="data">
                                                                      <div class="current-time"></div>
                                                                      <div class="time">
                                                                          <span class="material-icons">done_all</span>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div> */}
                                                            {/* Fim player */}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message me">
                                                    <div className="text-main">
                                                        <div className="text-group me">
                                                            <div className="align-items-center d-flex flex-row-reverse gap-1 text-wrap">
                                                                <div className="text me">
                                                                    <p>
                                                                        👋 Hey there friend, Innue here. I'm a bot that
                                                                        can help you to get info and access services. 😀
                                                                    </p>
                                                                    <div className="text-sending-time seen">
                                                                        3:05 PM
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={16}
                                                                            height={16}
                                                                            fill="currentColor"
                                                                            className="bi bi-check2-all"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                                                                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#deleteMessageMeModal"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Replay message me */}
                                                            <div className="align-items-center d-flex flex-row-reverse gap-1 text-wrap">
                                                                <div className="text me">
                                                                    <div className="replay-text me">
                                                                        <h6 className="fw-semibold fz14 mb-1 text-primary">
                                                                            Alexander Kaminski
                                                                        </h6>
                                                                        <p>
                                                                            Well, I was thinking we could try that new
                                                                            Mexican place downtown that everyone has been
                                                                            raving about. Their tacos are supposed to be
                                                                            amazing.
                                                                        </p>
                                                                    </div>
                                                                    <p>
                                                                        👋 Hey there friend, Innue here. I'm a bot that
                                                                        can help you to get info and access services. 😀
                                                                    </p>
                                                                    <div className="text-sending-time seen">
                                                                        3:05 PM
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={16}
                                                                            height={16}
                                                                            fill="currentColor"
                                                                            className="bi bi-check2-all"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                                                                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#deleteMessageMeModal"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="align-items-center d-flex flex-row-reverse gap-1 text-wrap">
                                                                <div className="text me">
                                                                    <p>
                                                                        Here are the things I can help you with today:
                                                                    </p>
                                                                    <p>
                                                                        📣 "Subscribe" to new content and announcements
                                                                        <br />
                                                                        🗣 "Get Support" for direct human support
                                                                    </p>
                                                                    <p>
                                                                        Or, try asking a question about Flow XO (say "ask
                                                                        question" for suggestions).
                                                                    </p>
                                                                    <div className="text-sending-time">
                                                                        3:05 PM
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={16}
                                                                            height={16}
                                                                            fill="currentColor"
                                                                            className="bi bi-check2-all"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                                                                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#deleteMessageMeModal"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="align-items-center d-flex flex-row-reverse gap-1 text-wrap">
                                                                <div className="text me">
                                                                    <div className="package">
                                                                        <div className="align-items-center d-block d-xl-flex listi-style2 listing-style1 mb-3 border-0">
                                                                            <div className="list-thumb flex-shrink-0">
                                                                                <img
                                                                                    src="images/listings/g-1.jpg"
                                                                                    width={150}
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="flex-grow-1 list-content p-2">
                                                                                <p className="fz12 list-text mb-1 text-muted">
                                                                                    Web &amp; App Design
                                                                                </p>
                                                                                <h5 className="list-title mb-2 fz16">
                                                                                    <a href="packmycode-product-details.html">
                                                                                        I will design modern websites in figma or
                                                                                        adobe xd
                                                                                    </a>
                                                                                </h5>
                                                                                <div className="align-items-center d-flex fz13 gap-1 review-meta">
                                                                                    <i className="fas fa-star review-color" />
                                                                                    <div className="dark-color">4.82</div>
                                                                                    <div className="text-muted">94 reviews</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h6>Shopify Full Stack Developer</h6>
                                                                        <p className="border-bottom pb-3 mb-3">
                                                                            We are seeking an experienced Shopify Developer
                                                                            to join our team for an exciting e-commerce
                                                                            project. The ideal candidate will have a strong
                                                                            background in Shopify development, a deep
                                                                            understanding of e-commerce best practices, and
                                                                            a passion for creating seamless online shopping
                                                                            experiences.And a passion for creating seamless
                                                                            online{" "}
                                                                        </p>
                                                                        <div className="border-bottom d-flex fz14 gap-3 justify-content-between mb-2 pb-2">
                                                                            <div className="fw-medium">Price</div>
                                                                            <div className="text-end">$4655</div>
                                                                        </div>
                                                                        <div className="border-bottom d-flex fz13 gap-3 justify-content-between mb-2 pb-2">
                                                                            <div className="fw-medium">Category</div>
                                                                            <div className="text-end">Shopify</div>
                                                                        </div>
                                                                        <div className="border-bottom d-flex fz13 gap-3 justify-content-between mb-2 pb-2">
                                                                            <div className="fw-medium">
                                                                                Experience Label
                                                                            </div>
                                                                            <div className="text-end">Intermediate</div>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between gap-3">
                                                                            <div className="fw-medium">Delivery Time</div>
                                                                            <div className="text-end">12 Hours</div>
                                                                        </div>
                                                                        <div className="d-flex gap-2 mt-3 mb-2">
                                                                            <button
                                                                                type="button"
                                                                                className="btn-soft-primary ud-btn w-100"
                                                                            >
                                                                                Reject
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                className="ud-btn btn-thm w-100"
                                                                            >
                                                                                Accept
                                                                            </button>
                                                                        </div>
                                                                        <div className="text-sending-time">
                                                                            3:05 PM
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={16}
                                                                                height={16}
                                                                                fill="currentColor"
                                                                                className="bi bi-check2-all"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                                                                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#deleteMessageMeModal"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="align-items-center d-flex flex-row-reverse gap-1 text-wrap">
                                                                <div className="text me">
                                                                    <h6>Shopify Full Stack Developer</h6>
                                                                    <p className="border-bottom pb-3 mb-3">
                                                                        We are seeking an experienced Shopify Developer to
                                                                        join our team for an exciting e-commerce project.
                                                                        The ideal candidate will have a strong background
                                                                        in Shopify development, a deep understanding of
                                                                        e-commerce best practices, and a passion for
                                                                        creating seamless online shopping experiences.And
                                                                        a passion for creating seamless online{" "}
                                                                    </p>
                                                                    <div className="border-bottom d-flex fz14 gap-3 justify-content-between mb-2 pb-2">
                                                                        <div className="fw-medium">Price</div>
                                                                        <div className="text-end">$4655</div>
                                                                    </div>
                                                                    <div className="border-bottom d-flex fz13 gap-3 justify-content-between mb-2 pb-2">
                                                                        <div className="fw-medium">Category</div>
                                                                        <div className="text-end">Shopify</div>
                                                                    </div>
                                                                    <div className="border-bottom d-flex fz13 gap-3 justify-content-between mb-2 pb-2">
                                                                        <div className="fw-medium">Experience Label</div>
                                                                        <div className="text-end">Intermediate</div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-between gap-3">
                                                                        <div className="fw-medium">Delivery Time</div>
                                                                        <div className="text-end">12 Hours</div>
                                                                    </div>
                                                                    <div className="d-flex gap-2 mt-3 mb-2">
                                                                        <button
                                                                            type="button"
                                                                            className="btn-soft-primary ud-btn w-100"
                                                                        >
                                                                            Withdraw Custom Offer
                                                                        </button>
                                                                        {/* <button type="button" class="ud-btn btn-thm w-100">Accept</button> */}
                                                                    </div>
                                                                    <div className="text-sending-time">
                                                                        3:05 PM
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={16}
                                                                            height={16}
                                                                            fill="currentColor"
                                                                            className="bi bi-check2-all"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                                                                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#deleteMessageMeModal"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="choices">
                                                            <div className="choice">Sales questions</div>
                                                            <div className="choice">Support questions</div>
                                                            <div className="choice">Talk to agent</div>
                                                            <div className="choice">Free trial</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="date">
                                                    <hr />
                                                    <span>Today</span>
                                                    <hr />
                                                </div>
                                                {/*/.date*/}
                                                <div className="message">
                                                    <img
                                                        className="avatar"
                                                        src="images/team/client-2.png"
                                                        data-bs-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        alt="avatar"
                                                        data-original-title="Keith"
                                                    />
                                                    <div className="text-main">
                                                        <div className="text-group">
                                                            <div className="d-flex align-items-center gap-1 text-wrap">
                                                                <div className="text">
                                                                    <p>
                                                                        The point of using Lorem Ipsum is that it has a
                                                                        more-or-less normal distribution.
                                                                    </p>
                                                                    <div className="text-sending-time">3:05 PM</div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#deleteMessageModal"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message me">
                                                    <div className="text-main">
                                                        <div className="text-group me">
                                                            <div className="align-items-center d-flex flex-row-reverse gap-1 text-wrap">
                                                                <div className="text me">
                                                                    <div className="message-gallery zoom-gallery mb-1">
                                                                        <div className="row gx-2">
                                                                            <div className="col">
                                                                                <a href="images/chat-01.jpg">
                                                                                    <img
                                                                                        className="img-fluid rounded"
                                                                                        src="images/chat-01.jpg"
                                                                                        data-action="zoom"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                            <div className="col">
                                                                                <a href="images/chat-02.jpg">
                                                                                    <img
                                                                                        className="img-fluid rounded"
                                                                                        src="images/chat-02.jpg"
                                                                                        data-action="zoom"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                            <div className="col">
                                                                                <a href="images/chat-03.jpg">
                                                                                    <img
                                                                                        className="img-fluid rounded"
                                                                                        src="images/chat-03.jpg"
                                                                                        data-action="zoom"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-sending-time">
                                                                        3:05 PM
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={16}
                                                                            height={16}
                                                                            fill="currentColor"
                                                                            className="bi bi-check2-all"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                                                                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#deleteMessageMeModal"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message">
                                                    <img
                                                        className="avatar"
                                                        src="images/team/client-2.png"
                                                        data-bs-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        alt="avatar"
                                                        data-original-title="Keith"
                                                    />
                                                    <div className="text-main">
                                                        <div className="text-group">
                                                            <div className="d-flex align-items-center gap-1 text-wrap">
                                                                <div className="text">
                                                                    <p>
                                                                        {" "}
                                                                        Various versions have evolved over the years,
                                                                        sometimes by accident, sometimes on purpose
                                                                        (injected humour and the like).!
                                                                    </p>
                                                                    <div className="text-sending-time">3:05 PM</div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#deleteMessageModal"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1 text-wrap">
                                                                <div className="text">
                                                                    <div className="align-items-center attachment d-flex gap-2">
                                                                        <button className="align-items-center attach bgc-thm btn d-flex justify-content-center p-0 rounded-circle text-white">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={16}
                                                                                height={16}
                                                                                fill="currentColor"
                                                                                className="bi bi-download"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                                                            </svg>
                                                                        </button>
                                                                        <div className="file">
                                                                            <h5>
                                                                                <a href="#">Documentations.pdf</a>
                                                                            </h5>
                                                                            <span>21kb Document</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-sending-time">3:05 PM</div>
                                                                </div>
                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="icon text-muted"
                                                                            href="#"
                                                                            role="button"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
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
                                                                                className="feather feather-more-vertical"
                                                                            >
                                                                                <circle cx={12} cy={12} r={1} />
                                                                                <circle cx={12} cy={5} r={1} />
                                                                                <circle cx={12} cy={19} r={1} />
                                                                            </svg>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Edit</div>
                                                                                    <div>
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
                                                                                            className="feather feather-edit-3"
                                                                                        >
                                                                                            <path d="M12 20h9" />
                                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    href="#"
                                                                                >
                                                                                    <div className="me-auto fz14">Reply</div>
                                                                                    <div>
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
                                                                                            className="feather feather-corner-up-left"
                                                                                        >
                                                                                            <polyline points="9 14 4 9 9 4" />
                                                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item d-flex align-items-center text-danger"
                                                                                    href="#"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#deleteMessageModal"
                                                                                >
                                                                                    <div className="me-auto fz14">Delete</div>
                                                                                    <div>
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
                                                                                            className="feather feather-trash-2"
                                                                                        >
                                                                                            <polyline points="3 6 5 6 21 6" />
                                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message me">
                                                    <div className="align-items-center d-flex flex-row-reverse gap-1 text-wrap">
                                                        <div className="text me">
                                                            <p>
                                                                If you are going to use a passage of Lorem Ipsum, you
                                                                need to be sure there isn't anything embarrassing!
                                                            </p>
                                                            <div className="text-sending-time seen">
                                                                3:05 PM
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={16}
                                                                    height={16}
                                                                    fill="currentColor"
                                                                    className="bi bi-check2-all"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                                                                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="message-action">
                                                            <div className="dropdown">
                                                                <a
                                                                    className="icon text-muted"
                                                                    href="#"
                                                                    role="button"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-expanded="false"
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
                                                                        className="feather feather-more-vertical"
                                                                    >
                                                                        <circle cx={12} cy={12} r={1} />
                                                                        <circle cx={12} cy={5} r={1} />
                                                                        <circle cx={12} cy={19} r={1} />
                                                                    </svg>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item d-flex align-items-center"
                                                                            href="#"
                                                                        >
                                                                            <div className="me-auto fz14">Edit</div>
                                                                            <div>
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
                                                                                    className="feather feather-edit-3"
                                                                                >
                                                                                    <path d="M12 20h9" />
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                                                </svg>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item d-flex align-items-center"
                                                                            href="#"
                                                                        >
                                                                            <div className="me-auto fz14">Reply</div>
                                                                            <div>
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
                                                                                    className="feather feather-corner-up-left"
                                                                                >
                                                                                    <polyline points="9 14 4 9 9 4" />
                                                                                    <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                                                                </svg>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <hr className="dropdown-divider" />
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item d-flex align-items-center text-danger"
                                                                            href="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#deleteMessageMeModal"
                                                                        >
                                                                            <div className="me-auto fz14">Delete</div>
                                                                            <div>
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
                                                                                    className="feather feather-trash-2"
                                                                                >
                                                                                    <polyline points="3 6 5 6 21 6" />
                                                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                    <line x1={10} y1={11} x2={10} y2={17} />
                                                                                    <line x1={14} y1={11} x2={14} y2={17} />
                                                                                </svg>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message">
                                                    <img
                                                        className="avatar"
                                                        src="images/team/client-2.png"
                                                        data-bs-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        alt="avatar"
                                                        data-original-title="Keith"
                                                    />
                                                    <div className="text-main">
                                                        <div className="text-group">
                                                            <div className="text typing">
                                                                <div className="wave">
                                                                    <span className="dot" />
                                                                    <span className="dot" />
                                                                    <span className="dot" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                            </div>
                                        </div>
                                        <div className="chat-area-bottom">
                                            {/* Replay comment box */}
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="replay-box">
                                                    <h6 className="fw-semibold fz14 mb-1 text-primary">
                                                        Alexander Kaminski
                                                    </h6>
                                                    <p>
                                                        Well, I was thinking we could try that new Mexican place
                                                        downtown that everyone has been raving about. Their tacos
                                                        are supposed to be amazing.
                                                    </p>
                                                </div>
                                                <a href="#" className="replay-box-close">
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
                                            <div className="d-flex align-items-center">
                                                <form className="position-relative w-100">
                                                    <textarea
                                                        className="form-control emojionearea"
                                                        placeholder="Type a message here..."
                                                        rows={1}
                                                        defaultValue={""}
                                                    />
                                                    {/*<button class="btn emoticons"><i class="material-icons">insert_emoticon</i></button>*/}
                                                    <div className="d-flex end-0 me-1 position-absolute top-0">
                                                        <button
                                                            type="button"
                                                            className="d-flex align-items-center justify-content-center btn p-0 send"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Microphone"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={21}
                                                                height={21}
                                                                fill="currentColor"
                                                                className="bi bi-mic"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                                                                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                                                            </svg>
                                                        </button>
                                                        <div className="chat-form-dropdown dropup-center dropup">
                                                            <button
                                                                className="d-flex align-items-center justify-content-center btn p-0 send"
                                                                type="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <div
                                                                    className="h-100 position-absolute stretched-link top-0 w-100"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    data-bs-title="More Options"
                                                                />
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={21}
                                                                    height={21}
                                                                    fill="currentColor"
                                                                    className="bi bi-plus-circle"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                                                </svg>
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li>
                                                                    <a className="dropdown-item" href="#">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            fill="currentColor"
                                                                            className="bi bi-paperclip text-primary"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                                                                        </svg>
                                                                        Attachment
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={20}
                                                                            height={20}
                                                                            fill="currentColor"
                                                                            className="bi bi-camera text-info"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
                                                                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                                                                        </svg>
                                                                        Camera
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#customOfferModal"
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            fill="currentColor"
                                                                            className="bi bi-percent text-success"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                                                        </svg>
                                                                        Custom Offer
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </form>
                                                <label>
                                                    {/* <input type="file"> */}
                                                    <button
                                                        type="submit"
                                                        className="align-items-center attach btn-thm d-flex justify-content-center ms-3 p-0 rounded-circle ud-btn"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={21}
                                                            height={21}
                                                            fill="currentColor"
                                                            className="bi bi-send"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                                                        </svg>
                                                    </button>
                                                </label>
                                            </div>
                                        </div>
                                        {/*/.chat area bottom*/}
                                    </div>
                                    <div className="chat-list__sidebar--right">
                                        <div className="chat-user__info card-body mb15">
                                            {/* <h5>General Info</h5> */}
                                            <div className="text-center">
                                                <div className="avatar mx-auto mb-2">
                                                    <img src="images/team/client-2.png" alt="avatar" />
                                                    <div className="status online" />
                                                </div>
                                                <div className="info-text">
                                                    <h5 className="m-1">Edwin Martins</h5>
                                                    <p className="writing">Edwin Martins typing a message</p>
                                                    <a
                                                        href="#"
                                                        className="d-inline-block fw-medium fz12 mt-2 profile-view rounded-5"
                                                    >
                                                        View Buyer Profile
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mt-2 text-dark fz14">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={14}
                                                    height={14}
                                                    fill="currentColor"
                                                    className="bi bi-clock"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                                </svg>
                                                3.33 PM local time
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mt-1 text-dark fz14">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-geo-alt"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                                </svg>
                                                1123 Fictional St, San Francisco, CA 94103
                                            </div>
                                        </div>
                                        <div className="profile-tabs_wrap mb15">
                                            <ul
                                                className="nav profile-tabs nav-tabs mx-0 mb15"
                                                id="myTab"
                                                role="tablist"
                                            >
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="nav-link active"
                                                        id="profile-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#profile-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="profile-tab-pane"
                                                        aria-selected="true"
                                                    >
                                                        Profile
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="nav-link"
                                                        id="media-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#media-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="media-tab-pane"
                                                        aria-selected="false"
                                                    >
                                                        Media
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="nav-link"
                                                        id="links-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#links-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="links-tab-pane"
                                                        aria-selected="false"
                                                    >
                                                        Links
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="nav-link"
                                                        id="docs-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#docs-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="docs-tab-pane"
                                                        aria-selected="false"
                                                    >
                                                        Docs
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="profile-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="profile-tab"
                                                    tabIndex={0}
                                                >
                                                    <h5 className="fz14 fw-bold">About Buyer</h5>
                                                    <div className="row fz13 mb-1 g-2">
                                                        <div className="col-auto">Member Since:</div>
                                                        <div className="col fw-medium text-dark">12/02/2023</div>
                                                    </div>
                                                    <div className="row fz13 mb-1 g-2">
                                                        <div className="col-auto">Total Job Post:</div>
                                                        <div className="col fw-medium text-dark">65</div>
                                                    </div>
                                                    <div className="row fz13 mb-1 g-2">
                                                        <div className="col-auto">Hire Rate:</div>
                                                        <div className="col fw-medium text-dark">92%</div>
                                                    </div>
                                                    <div className="row fz13 mb-1 g-2">
                                                        <div className="col-auto">Total Expense:</div>
                                                        <div className="col fw-medium text-dark">$65K</div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="media-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="media-tab"
                                                    tabIndex={0}
                                                >
                                                    <div className="row row-cols-3 g-1 py-6 zoom-gallery">
                                                        <div className="col">
                                                            <a href="images/chat-01.jpg">
                                                                <img
                                                                    className="img-fluid rounded"
                                                                    src="images/chat-01.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col">
                                                            <a href="images/chat-02.jpg">
                                                                <img
                                                                    className="img-fluid rounded"
                                                                    src="images/chat-02.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col">
                                                            <a href="images/chat-03.jpg">
                                                                <img
                                                                    className="img-fluid rounded"
                                                                    src="images/chat-03.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col">
                                                            <a href="images/chat-04.jpg">
                                                                <img
                                                                    className="img-fluid rounded"
                                                                    src="images/chat-04.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col">
                                                            <a href="images/chat-05.jpg">
                                                                <img
                                                                    className="img-fluid rounded"
                                                                    src="images/chat-05.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col">
                                                            <a href="images/chat-06.jpg">
                                                                <img
                                                                    className="img-fluid rounded"
                                                                    src="images/chat-06.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col">
                                                            <a href="images/chat-07.jpg">
                                                                <img
                                                                    className="img-fluid rounded"
                                                                    src="images/chat-07.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col">
                                                            <a href="images/chat-08.jpg">
                                                                <img
                                                                    className="img-fluid rounded"
                                                                    src="images/chat-08.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col">
                                                            <a href="images/chat-09.jpg">
                                                                <img
                                                                    className="img-fluid rounded"
                                                                    src="images/chat-09.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="links-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="links-tab"
                                                    tabIndex={0}
                                                >
                                                    <div className="link-group bdr1 rounded-3 mb-2">
                                                        <div className="d-flex mb-2">
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
                                                                className="feather feather-link"
                                                            >
                                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                            </svg>
                                                            <div className="flex-grow-1">
                                                                <h5 className="fz14 mb-1">Jquery Template</h5>
                                                                <h6 className="mb-0">12:05 PM Today </h6>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="https://themeforest.net/item/endless-react-admin-template/25365098"
                                                            className="text-primary fz13"
                                                        >
                                                            https://themeforest.net/item/endless-react-admin-template
                                                        </a>
                                                        <div className="d-flex mt-2 rounded-4">
                                                            <img
                                                                className="img-fluid"
                                                                src="images/media-link-01.png"
                                                                alt="media-img"
                                                            />
                                                            <div className="flex-grow-1">
                                                                <h5 className="fz14 mb-1">React Template</h5>
                                                                <h6 className="mb-0">
                                                                    Functionality integration project.
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="link-group bdr1 rounded-3 mb-2">
                                                        <div className="d-flex mb-2">
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
                                                                className="feather feather-link"
                                                            >
                                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                            </svg>
                                                            <div className="flex-grow-1">
                                                                <h5 className="fz14 mb-1">Jquery Template</h5>
                                                                <h6 className="mb-0">12:05 PM Today </h6>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="https://themeforest.net/item/endless-react-admin-template/25365098"
                                                            className="text-primary fz13"
                                                        >
                                                            https://themeforest.net/item/endless-react-admin-template
                                                        </a>
                                                        <div className="d-flex mt-2 rounded-4">
                                                            <img
                                                                className="img-fluid"
                                                                src="images/media-link-01.png"
                                                                alt="media-img"
                                                            />
                                                            <div className="flex-grow-1">
                                                                <h5 className="fz14 mb-1">React Template</h5>
                                                                <h6 className="mb-0">
                                                                    Functionality integration project.
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="link-group bdr1 rounded-3">
                                                        <div className="d-flex mb-2">
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
                                                                className="feather feather-link"
                                                            >
                                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                            </svg>
                                                            <div className="flex-grow-1">
                                                                <h5 className="fz14 mb-1">Multikart Template</h5>
                                                                <h6 className="mb-0">12:05 PM Today </h6>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="https://themeforest.net/item/multikart-responsive-template"
                                                            className="text-primary fz13"
                                                        >
                                                            https://themeforest.net/item/multikart-responsive-template
                                                        </a>
                                                        <div className="d-flex mt-2 rounded-4">
                                                            <img
                                                                className="img-fluid"
                                                                src="images/media-link-02.png"
                                                                alt="media-img"
                                                            />
                                                            <div className="flex-grow-1">
                                                                <h5 className="fz14 mb-1">Multipurpose Vuejs.</h5>
                                                                <h6 className="mb-0">
                                                                    Multipurpose Vuejs. Template is a multi-use Vue
                                                                    template.
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="docs-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="docs-tab"
                                                    tabIndex={0}
                                                >
                                                    <div className="docs">
                                                        <div className="align-items-center bdrb1 d-flex gap-2 mb10 pb10">
                                                            <div>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={30}
                                                                    height={30}
                                                                    fill="currentColor"
                                                                    className="bi bi-file-earmark-pdf text-primary"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                                    <path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <h5 className="fz15 mb-0">messenger.html</h5>
                                                                <div className="docs-date">2, octomber 2023</div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <button className="align-items-center btn btn-gray btn-icon d-flex justify-content-center p-0 rounded-circle ud-btn">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={16}
                                                                        height={16}
                                                                        fill="currentColor"
                                                                        className="bi bi-download"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="align-items-center bdrb1 d-flex gap-2 mb10 pb10">
                                                            <div>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={30}
                                                                    height={30}
                                                                    fill="currentColor"
                                                                    className="bi bi-file-earmark-word text-success"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M5.485 6.879a.5.5 0 1 0-.97.242l1.5 6a.5.5 0 0 0 .967.01L8 9.402l1.018 3.73a.5.5 0 0 0 .967-.01l1.5-6a.5.5 0 0 0-.97-.242l-1.036 4.144-.997-3.655a.5.5 0 0 0-.964 0l-.997 3.655L5.485 6.88z" />
                                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <h5 className="fz15 mb-0">Salary.xlsx</h5>
                                                                <div className="docs-date">2, octomber 2023</div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <button className="align-items-center btn btn-gray btn-icon d-flex justify-content-center p-0 rounded-circle ud-btn">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={16}
                                                                        height={16}
                                                                        fill="currentColor"
                                                                        className="bi bi-download"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="align-items-center bdrb1 d-flex gap-2 mb10 pb10">
                                                            <div>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={30}
                                                                    height={30}
                                                                    fill="currentColor"
                                                                    className="bi bi-file-zip text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 0 1-.03-.243z" />
                                                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <h5 className="fz15 mb-0">Document.zip</h5>
                                                                <div className="docs-date">2, octomber 2023</div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <button className="align-items-center btn btn-gray btn-icon d-flex justify-content-center p-0 rounded-circle ud-btn">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={16}
                                                                        height={16}
                                                                        fill="currentColor"
                                                                        className="bi bi-download"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="align-items-center bdrb1 d-flex gap-2 mb10 pb10">
                                                            <div>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={30}
                                                                    height={30}
                                                                    fill="currentColor"
                                                                    className="bi bi-file-earmark-music text-info"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.6 2.6 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377s.974-.134 1.338-.377c.36-.24.662-.628.662-1.123V8.89l2-.5z" />
                                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <h5 className="fz15 mb-0">Chapter1.MP4</h5>
                                                                <div className="docs-date">2, octomber 2023</div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <button className="align-items-center btn btn-gray btn-icon d-flex justify-content-center p-0 rounded-circle ud-btn">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={16}
                                                                        height={16}
                                                                        fill="currentColor"
                                                                        className="bi bi-download"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chatting_indicate card-body">
                                            <h5>Conversation With Auto bot or manual</h5>
                                            <p>Everyone in this conversation will see this.</p>
                                            <div className="d-flex align-items-center">
                                                <label className="toggler toggler--is-active" id="autobot2">
                                                    Auto bot
                                                </label>
                                                <div className="toggle">
                                                    <input type="checkbox" id="switcher2" className="check" />
                                                    <b className="toggle-switch" />
                                                </div>
                                                <label className="toggler" id="manual2">
                                                    Manual
                                                </label>
                                            </div>
                                        </div>
                                        <a
                                            href="#"
                                            className="align-items-center d-flex fw-medium fz14 gap-1 lh0 mt-3 text-primary"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-trash-2"
                                            >
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line x1={10} y1={11} x2={10} y2={17} />
                                                <line x1={14} y1={11} x2={14} y2={17} />
                                            </svg>
                                            Delete Chat
                                        </a>
                                    </div>
                                    {/*/.chat list sidebar right*/}
                                </div>
                            </div>
                            <div
                                className="tab-pane"
                                id="list-item3"
                                role="tabpanel"
                                aria-labelledby="list-item3-tab"
                            >
                                <div className="chat-header d-flex align-items-center">
                                    <button
                                        type="button"
                                        className="btn chat-sidebar-collapse d-block d-xl-none"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-grid"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                                        </svg>
                                    </button>
                                    <div className="meta-info data mr-auto">
                                        <h5>
                                            <a href="#">Gabriel North</a>
                                        </h5>
                                        <span>Last seen 12hour ago</span>
                                    </div>
                                    <button
                                        className="btn d-md-block d-none"
                                        title="Start a voice call"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-telephone-outbound"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-md-block d-none"
                                        title="Start a video call"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-camera-video"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-md-block d-none"
                                        title="Conversation information"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-info-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-md-block d-none search-btn"
                                        title="Search in conversation"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-search"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                    </button>
                                    <button
                                        className="btn d-block d-lg-none chat-settings-collapse"
                                        title="Settings"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={21}
                                            height={21}
                                            fill="currentColor"
                                            className="bi bi-sliders"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
                                            />
                                        </svg>
                                    </button>
                                    <div className="dropdown">
                                        <button
                                            className="btn me-0"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={21}
                                                height={21}
                                                fill="currentColor"
                                                className="bi bi-three-dots-vertical"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                            </svg>
                                        </button>
                                        <div className="dropdown-menu">
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-telephone-forward"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                Voice Call
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-camera-video"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                                                    />
                                                </svg>
                                                Video Call
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-x-circle"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                                </svg>
                                                Clear History
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-ban"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M15 8a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                                                </svg>
                                                Block Contact
                                            </button>
                                            <button className="dropdown-item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-trash3"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                </svg>
                                                Delete Contact
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="messenger-dialog row m-0">
                                    <div className="messenger-dialog__area p-0">
                                        <div className="conversation-search">
                                            <div className="d-flex">
                                                <div
                                                    className="btn-group"
                                                    role="group"
                                                    aria-label="Basic example"
                                                >
                                                    <button type="button" className="btn">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            fill="currentColor"
                                                            className="bi bi-arrow-up"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button type="button" className="btn">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            fill="currentColor"
                                                            className="bi bi-arrow-down"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="input-group">
                                                    <div className="search__icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            fill="currentColor"
                                                            className="bi bi-search"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Recipient's username"
                                                        aria-label="Recipient's username"
                                                        aria-describedby="button-addon5"
                                                    />
                                                    <button
                                                        className="btn btn-outline-secondary close-search"
                                                        type="button"
                                                        id="button-addon5"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.conversation search */}
                                        <div className="message-content message-content-scroll bg-text-green">
                                            <div className="position-relative">
                                                <div className="date">
                                                    <hr />
                                                    <span>Yesterday</span>
                                                    <hr />
                                                </div>
                                                <div className="message">
                                                    <img
                                                        className="avatar"
                                                        src="images/team/client-3.png"
                                                        data-bs-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        alt="avatar"
                                                        data-original-title="Keith"
                                                    />
                                                    <div className="text-main">
                                                        <span className="time-ago">09:46 AM</span>
                                                        <div className="text-group">
                                                            <div className="text">
                                                                <p>
                                                                    It is a long established fact that a reader will be.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message me">
                                                    <div className="text-main">
                                                        <span className="time-ago">11:32 AM</span>
                                                        <div className="text-group me">
                                                            <div className="text me">
                                                                <p>
                                                                    {" "}
                                                                    By the readable content of a page when looking at
                                                                    its?
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message">
                                                    <img
                                                        className="avatar"
                                                        src="images/team/client-3.png"
                                                        data-bs-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        alt="avatar"
                                                        data-original-title="Keith"
                                                    />
                                                    <div className="text-main">
                                                        <span className="time-ago">02:56 PM</span>
                                                        <div className="text-group">
                                                            <div className="text">
                                                                <p>
                                                                    The point of using Lorem Ipsum is that it has a
                                                                    more-or-less normal distribution.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message me">
                                                    <div className="text-main">
                                                        <span className="time-ago">10:21 PM</span>
                                                        <div className="text-group me">
                                                            <div className="text me">
                                                                <p>Roger that boss!</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-group me">
                                                            <div className="text me">
                                                                <p>
                                                                    Many desktop publishing packages and web page
                                                                    editors now use Lorem Ipsum as their!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message">
                                                    <img
                                                        className="avatar"
                                                        src="images/team/client-3.png"
                                                        data-bs-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        alt="avatar"
                                                        data-original-title="Keith"
                                                    />
                                                    <div className="text-main">
                                                        <span className="time-ago">11:07 PM</span>
                                                        <div className="text-group">
                                                            <div className="text">
                                                                <p>
                                                                    {" "}
                                                                    Various versions have evolved over the years,
                                                                    sometimes by accident, sometimes on purpose
                                                                    (injected humour and the like).!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="date">
                                                    <hr />
                                                    <span>Today</span>
                                                    <hr />
                                                </div>
                                                {/*/.date*/}
                                                <div className="message">
                                                    <img
                                                        className="avatar"
                                                        src="images/team/client-3.png"
                                                        data-bs-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        alt="avatar"
                                                        data-original-title="Keith"
                                                    />
                                                    <div className="text-main">
                                                        <span>11:07 PM</span>
                                                        <div className="text-group">
                                                            <div className="text">
                                                                <div className="align-items-center attachment d-flex gap-2">
                                                                    <button className="align-items-center attach btn btn-primary d-flex justify-content-center p-0">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={21}
                                                                            height={21}
                                                                            fill="currentColor"
                                                                            className="bi bi-hdd"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                                                                            <path d="M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198zM3.655 4.26 1.592 8.043C1.724 8.014 1.86 8 2 8h12c.14 0 .276.014.408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                                                                        </svg>
                                                                    </button>
                                                                    <div className="file">
                                                                        <h5>
                                                                            <a href="#">Documentations.pdf</a>
                                                                        </h5>
                                                                        <span>21kb Document</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message me">
                                                    <div className="text-main">
                                                        <span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="bi bi-check2-all"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                                                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                                                            </svg>
                                                            10:21 PM
                                                        </span>
                                                        <div className="text-group me">
                                                            <div className="text me">
                                                                <p>
                                                                    {" "}
                                                                    If you are going to use a passage of Lorem Ipsum,
                                                                    you need to be sure there isn't anything
                                                                    embarrassing!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                                <div className="message">
                                                    <img
                                                        className="avatar"
                                                        src="images/team/client-3.png"
                                                        data-bs-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        alt="avatar"
                                                        data-original-title="Keith"
                                                    />
                                                    <div className="text-main">
                                                        <div className="text-group">
                                                            <div className="text typing">
                                                                <div className="wave">
                                                                    <span className="dot" />
                                                                    <span className="dot" />
                                                                    <span className="dot" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*/.message*/}
                                            </div>
                                        </div>
                                        {/*/.tab content*/}
                                        <div className="chat-area-bottom d-flex align-items-center">
                                            <form className="position-relative w-100">
                                                <button
                                                    type="submit"
                                                    className="align-items-center btn d-flex start-0 justify-content-center p-0 position-absolute send top-0"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        fill="currentColor"
                                                        className="bi bi-emoji-smile"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                                                    </svg>
                                                </button>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Type a message here..."
                                                    rows={1}
                                                    defaultValue={""}
                                                />
                                                <button
                                                    type="submit"
                                                    className="align-items-center btn d-flex end-0 justify-content-center p-0 position-absolute send top-0"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        fill="currentColor"
                                                        className="bi bi-send"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </form>
                                            <label>
                                                <input type="file" />
                                                <span className="align-items-center attach btn btn-primary d-flex justify-content-center ms-3 p-0 rounded-circle text-white">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        fill="currentColor"
                                                        className="bi bi-paperclip"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                        {/*/.chat area bottom*/}
                                    </div>
                                    <div className="chat-list__sidebar--right">
                                        <div className="chat-user__info d-flex align-items-center">
                                            <div className="avatar">
                                                <img src="images/team/client-3.png" alt="avatar" />
                                                <div className="status online" />
                                            </div>
                                            <div className="info-text">
                                                <h5 className="m-0">Gabriel North</h5>
                                                <p className="writing">Tuhin typing a message</p>
                                            </div>
                                        </div>
                                        <div className="chatting_indicate card-body">
                                            <h5>Conversation With Auto bot or manual</h5>
                                            <p>Everyone in this conversation will see this.</p>
                                            <div className="d-flex align-items-center">
                                                <label className="toggler toggler--is-active" id="autobot3">
                                                    Auto bot
                                                </label>
                                                <div className="toggle">
                                                    <input type="checkbox" id="switcher3" className="check" />
                                                    <b className="toggle-switch" />
                                                </div>
                                                <label className="toggler" id="manual3">
                                                    Manual
                                                </label>
                                            </div>
                                        </div>
                                        <div id="accordion3" className="accordion">
                                            <div className="">
                                                <div className="accordion-header" id="headingThree3">
                                                    <h5 className="card-header__title mb-0">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree3"
                                                            aria-expanded="false"
                                                            aria-controls="collapseThree3"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={19}
                                                                height={19}
                                                                fill="currentColor"
                                                                className="bi bi-person-check"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                                                <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                                            </svg>
                                                            User Details
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div
                                                    id="collapseThree3"
                                                    className="collapse"
                                                    aria-labelledby="headingThree3"
                                                    data-parent="#accordion3"
                                                >
                                                    <div className="card-body">
                                                        <div className="user-info">
                                                            <div className="table-responsive">
                                                                <table className="table border">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="user-info-first">Name</td>
                                                                            <td>Alexander Kaminski</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="user-info-first">ID</td>
                                                                            <td>123</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="user-info-first">E-mail</td>
                                                                            <td>example@email.com</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="user-info-first">URL</td>
                                                                            <td>
                                                                                <a href="#">https://easital.com/</a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="user-info-first">Browser</td>
                                                                            <td>Chrome</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="accordion-header" id="headingOne3">
                                                    <h5 className="card-header__title mb-0">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne3"
                                                            aria-expanded="false"
                                                            aria-controls="collapseOne3"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="bi bi-pen"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                                            </svg>
                                                            Edit name
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div
                                                    id="collapseOne3"
                                                    className="collapse"
                                                    aria-labelledby="headingOne3"
                                                    data-parent="#accordion3"
                                                >
                                                    <div className="card-body">
                                                        <h5>Edit Nickname for Alexander Kaminski</h5>
                                                        <p>Everyone in this conversation will see this.</p>
                                                        <div className="mb-3">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="exampleInputEmail3"
                                                                placeholder="Alexander Kaminski"
                                                            />
                                                        </div>
                                                        <div className="action-btn text-end">
                                                            <a href="#">Save</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="accordion-header" id="headingTwo3">
                                                    <h5 className="card-header__title mb-0">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className=""
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo3"
                                                            aria-expanded="true"
                                                            aria-controls="collapseTwo3"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={18}
                                                                height={18}
                                                                fill="currentColor"
                                                                className="bi bi-palette"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                                <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7" />
                                                            </svg>
                                                            Change color
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div
                                                    id="collapseTwo3"
                                                    className="collapse show"
                                                    aria-labelledby="headingTwo3"
                                                    data-parent="#accordion3"
                                                >
                                                    <div className="card-body">
                                                        <h5>Pick a color for this conversation</h5>
                                                        <p>Everyone in this conversation will see this.</p>
                                                        <div className="radio-list change-bg-color">
                                                            <input type="radio" name="color" id="red3" />
                                                            <label htmlFor="red3" data-color="red">
                                                                <span className="red" />
                                                            </label>
                                                            <input
                                                                type="radio"
                                                                name="color"
                                                                id="green3"
                                                                defaultChecked=""
                                                            />
                                                            <label htmlFor="green3" data-color="green">
                                                                <span className="green" />
                                                            </label>
                                                            <input type="radio" name="color" id="yellow3" />
                                                            <label htmlFor="yellow3" data-color="yellow">
                                                                <span className="yellow" />
                                                            </label>
                                                            <input type="radio" name="color" id="olive3" />
                                                            <label htmlFor="olive3" data-color="olive">
                                                                <span className="olive" />
                                                            </label>
                                                            <input type="radio" name="color" id="orange3" />
                                                            <label htmlFor="orange3" data-color="orange">
                                                                <span className="orange" />
                                                            </label>
                                                            <input type="radio" name="color" id="teal3" />
                                                            <label htmlFor="teal3" data-color="teal">
                                                                <span className="teal" />
                                                            </label>
                                                            <input type="radio" name="color" id="blue3" />
                                                            <label htmlFor="blue3" data-color="blue">
                                                                <span className="blue" />
                                                            </label>
                                                            <input type="radio" name="color" id="violet3" />
                                                            <label htmlFor="violet3" data-color="violet">
                                                                <span className="violet" />
                                                            </label>
                                                            <input type="radio" name="color" id="purple3" />
                                                            <label htmlFor="purple3" data-color="purple">
                                                                <span className="purple" />
                                                            </label>
                                                            <input type="radio" name="color" id="pink3" />
                                                            <label htmlFor="pink3" data-color="pink">
                                                                <span className="pink" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="accordion-header" id="headingFour3">
                                                    <h5 className="card-header__title mb-0">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseFour3"
                                                            aria-expanded="false"
                                                            aria-controls="collapseFour3"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={18}
                                                                height={18}
                                                                fill="currentColor"
                                                                className="bi bi-bell"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                                            </svg>
                                                            Notifications
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div
                                                    id="collapseFour3"
                                                    className="collapse"
                                                    aria-labelledby="headingFour3"
                                                    data-parent="#accordion3"
                                                >
                                                    <div className="card-body">
                                                        <h5>Conversation Notifications</h5>
                                                        <p>Everyone in this conversation will see this.</p>
                                                        <div className="mb-3 mb-4">
                                                            <span className="switch switch-sm">
                                                                <input
                                                                    type="checkbox"
                                                                    className="switch"
                                                                    id="switch5"
                                                                />
                                                                <label htmlFor="switch5">
                                                                    Receive notifications for new messages
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="mb-3">
                                                            <span className="switch switch-sm">
                                                                <input
                                                                    type="checkbox"
                                                                    className="switch"
                                                                    id="switch6"
                                                                />
                                                                <label htmlFor="switch6">
                                                                    Receive notifications for reactions
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="action-btn text-end">
                                                            <a href="#">Done</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/.chat list sidebar right*/}
                                </div>
                            </div>
                        </div>
                        <div className="chat-overlay" />
                    </div>
                    {/*/.chat container*/}
                </div>
            </section>
            {/* Delete Message Modal */}
            <div
                className="modal fade"
                id="deleteMessageModal"
                tabIndex={-1}
                aria-labelledby="deleteMessageModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <h6 className="mb-4">Delete Message</h6>
                            <div className="d-flex flex-wrap gap-2 justify-content-end">
                                <button
                                    type="button"
                                    className="ud-btn btn-soft-primary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" className="ud-btn btn-thm">
                                    Delete for me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Delete Message Me Modal */}
            <div
                className="modal fade"
                id="deleteMessageMeModal"
                tabIndex={-1}
                aria-labelledby="deleteMessageModalMeLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <h6 className="mb-4">Delete Message</h6>
                            <div className="d-flex flex-column gap-2 text-end">
                                <div>
                                    <button type="button" className="ud-btn btn-soft-primary">
                                        Delete for everyone
                                    </button>
                                </div>
                                <div>
                                    <button type="button" className="ud-btn btn-soft-primary">
                                        Delete for me
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="ud-btn btn-soft-primary"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Custom Offer Modal */}
            <div
                className="modal"
                id="customOfferModal"
                tabIndex={-1}
                aria-labelledby="customOfferModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="customOfferModalLabel">
                                Create Custom Offer
                            </h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body p-sm-4">
                            <div className="mb-3">
                                <label className="form-label fw500 dark-color mb-1 fz14 required">
                                    Select Your Service
                                </label>
                                <select className="form-select select2">
                                    <option selected="">
                                        I will write optimized fiverr gig description, fiverr gig SEO,
                                        profile,title,free image
                                    </option>
                                    <option>
                                        I will design modern websites in figma or adobe xd
                                    </option>
                                    <option value={1}>
                                        I will create modern flat design illustration
                                    </option>
                                    <option value={2}>
                                        I will build a fully responsive design in HTML,CSS, bootstrap,
                                    </option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw500 dark-color mb-1 fz14 required">
                                    Add Description
                                </label>
                                <textarea
                                    cols={30}
                                    rows={5}
                                    className="form-control"
                                    placeholder="Click here to add job details"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw500 dark-color mb-1 fz14">
                                    Price
                                </label>
                                <input type="text" className="form-control" placeholder="$" />
                            </div>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label fw500 dark-color mb-1 fz14">
                                        Delivery Days
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Write delivery days"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw500 dark-color mb-1 fz14">
                                        Revisions
                                    </label>
                                    <select className="form-select select2">
                                        <option selected="" />
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>Unlimited</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="ud-btn btn-soft-primary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button type="button" className="ud-btn btn-thm">
                                Send Offer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}