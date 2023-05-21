import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/style.scss";
import {
  faSearch,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Message = () => {
  const [offer, openOffer] = useState(false);
  const setOffer = () => {
    openOffer(true);
  };

  const unSetOffer = () => {
    openOffer(false);
  };
  return (
    <div id="frame">
      <div id="sidepanel">
        <div id="profile">
          <p>INBOX</p>
        </div>
        <div id="search">
          <label htmlFor="">
            <FontAwesomeIcon
              icon={faSearch}
              style={{ width: "20px", position: "absolute", top: "11px" }}
            />
          </label>
          <input type="text" placeholder="Search Sellers..." />
        </div>
        <div id="contacts">
          <ul>
            <li className="contact">
              <div className="wrap">
                <div className="sellerProfile">
                  <span className="contact-status online" />
                  <img
                    src="https://source.unsplash.com/160x160/?mobile"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <p className="name">Seller 1</p>
                  <p className="preview">
                    <span>Seller: </span>Hello!! Wanna Purchase
                  </p>
                </div>
              </div>
            </li>
            <li className="contact active">
              <div className="wrap">
                <div className="sellerProfile">
                  <span className="contact-status busy" />
                  <img
                    src="https://source.unsplash.com/160x160/?phone"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <p className="name">Seller</p>
                  <p className="preview">
                    <span>Seller: </span>Lets's Finalize the Deal
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <div className="sellerProfile">
                  <span className="contact-status away" />
                  <img src="https://source.unsplash.com/160x160/?car" alt="" />
                </div>
                <div className="meta">
                  <p className="name">Seller 2</p>
                  <p className="preview">
                    <span>Seller: </span>I can't Decrease price more this is the
                    limit
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <div className="sellerProfile">
                  <span className="contact-status online" />
                  <img
                    src="https://source.unsplash.com/160x160/?house"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <p className="name">Seller 3</p>
                  <p className="preview">
                    <span>Seller: </span>Want to buy it at Rs1000
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <div className="sellerProfile">
                  <span className="contact-status busy" />
                  <img
                    src="https://source.unsplash.com/160x160/?furniture"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <p className="name">Seller 4</p>
                  <p className="preview">
                    <span>Seller: </span>Don't Waste my time
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <div className="sellerProfile">
                  <span className="contact-status" />
                  <img src="https://source.unsplash.com/160x160/?tv" alt="" />
                </div>
                <div className="meta">
                  <p className="name">Seller 5</p>
                  <p className="preview">
                    <span>You: </span>Thanks Man great deal
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <div className="sellerProfile">
                  <span className="contact-status" />
                  <img
                    src="https://source.unsplash.com/160x160/?speaker"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <p className="name">Seller 6</p>
                  <p className="preview">
                    <span>Seller: </span>This is a new piece...
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <div className="sellerProfile">
                  <span className="contact-status busy" />
                  <img
                    src="https://source.unsplash.com/160x160/?laptop"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <p className="name">Seller 7</p>
                  <p className="preview">
                    {" "}
                    <span>Seller: </span>You can come over and check it out
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <div className="sellerProfile">
                  <span className="contact-status" />
                  <img
                    src="https://source.unsplash.com/160x160/?mobile phone"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <p className="name">Seller 8</p>
                  <p className="preview">
                    <span>Seller:</span> Let's Meet up if you want to see its
                    condition
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <div className="sellerProfile">
                  <span className="contact-status" />
                  <img src="https://source.unsplash.com/160x160/?bike" alt="" />
                </div>
                <div className="meta">
                  <p className="name">Seller 9</p>
                  <p className="preview">
                    <span>You:</span> I can only pay Rs1000
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="contact-profile">
          <div className="content-heading">
            <img src="https://source.unsplash.com/160x160/?phone" alt="" />

            <p>Seller</p>
          </div>
          <div className="social-media">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-w4DG7"
                d="M746.086 916.070c-67.994 0-258.253-16.589-427.213-185.549-205.619-205.414-185.344-442.573-184.32-452.608l1.229-12.083 100.352-125.747h178.176l103.629 103.629v170.803l-74.547 74.752c11.878 18.432 29.901 43.622 51.814 65.536 22.118 22.118 47.514 40.346 65.946 52.019l74.547-72.090 192.512 0.205 79.872 101.99v178.586l-124.314 98.714-12.083 1.229c-1.638-0.205-10.65 0.614-25.6 0.614zM215.45 296.96c-1.229 45.875 5.734 219.955 161.382 375.603 155.443 155.443 329.318 162.611 375.808 161.382l73.523-58.368v-110.797l-37.888-48.538h-119.603l-94.618 91.341-26.214-13.722c-2.458-1.229-62.054-32.973-110.797-81.715s-80.282-108.339-81.715-110.797l-14.131-26.624 94.413-94.618v-103.014l-55.706-55.706h-104.858l-59.597 75.571zM776.602 333.619l72.704-72.704v-106.291l-56.934-56.934h-116.531l-55.501 55.501v90.726h81.92v-56.73l7.578-7.578h48.742l9.011 9.011v38.502l-72.704 72.704v80.691h81.92v-46.899zM776.602 421.683h-81.92v73.318h81.92v-73.318z"
              ></path>
            </svg>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-w4DG7"
                d="M878.336 85.333l-366.336 366.315-366.336-366.315h-60.331v60.331l366.336 366.336-366.336 366.336v60.331h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-366.315-366.336 366.315-366.336v-60.331z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="messages">
          <div className="messagesOption">
            <div className="messageSelect">
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                className=""
                fillRule="evenodd"
              >
                <path
                  className="rui-w4DG7"
                  d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
                ></path>
              </svg>
            </div>
            <div className="messagelower">
              <div className="messageQuestion">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  className=""
                  fillRule="evenodd"
                  style={
                    offer
                      ? { fill: "rgba(0, 0, 0, 0.493)" }
                      : { fill: "rgba(0, 0, 0)" }
                  }
                >
                  <path
                    className="rui-w4DG7"
                    d="M598.704 473.683h69.193v-66.653h-69.193v66.653zM656.853 230.616c-17.973 0-33.136 3.195-45.412 9.581-12.276 6.425-21.283 15.009-27.015 25.824-5.812 10.777-8.352 22.589-7.736 35.367h65.732c0-4.232 1.001-7.62 3.003-10.237 1.961-2.617 4.964-3.924 8.927-3.924 3.157 0 5.697 1.041 7.697 3.157 2 2.077 3.003 4.927 3.003 8.468 0 6.503-3.233 11.161-9.736 14.045-6.501 2.771-16.049 4.232-28.635 4.232h-26.4v66.615h65.385v-22.32c13.24-0.193 24.937-3.003 35.252-8.315 10.276-5.349 18.243-12.7 23.86-22.051 5.735-9.273 8.507-20.127 8.507-32.519 0-22.436-6.888-39.329-20.744-50.8-13.855-11.391-32.365-17.125-55.687-17.125v0zM855.547 352.071c0-101.253-81.855-183.608-182.491-183.608h-49.375c-100.597 0-182.452 82.355-182.452 183.608v223.863l79.969-40.216h151.857c100.636 0 182.491-82.395 182.491-183.647v0zM935.324 352.071c0 145.277-117.645 263.424-262.269 263.424h-132.924l-105.1 52.877-73.583-45.759v-270.543c0-145.239 117.607-263.424 262.231-263.424h49.375c144.621 0 262.269 118.185 262.269 263.424v0zM627.299 653.903l14.855 14.816v189.879l-72.117 44.795-101.253-50.916h-127.073c-139.503 0-253.032-114.031-253.032-254.151 0-140.159 104.176-254.189 243.72-254.189v79.777c-95.556 0-163.944 78.239-163.944 174.411s77.737 174.411 173.256 174.411h146.009l74.62 37.483v-141.508l14.855-14.816h50.107z"
                  ></path>
                </svg>
                <span
                  onClick={unSetOffer}
                  style={
                    offer
                      ? { color: "rgba(0, 0, 0, 0.493)" }
                      : { color: "rgba(0, 0, 0)" }
                  }
                >
                  QUESTIONS
                </span>
              </div>

              <div className="messageOffer">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  className=""
                  fillRule="evenodd"
                  style={
                    offer
                      ? { fill: "rgba(0, 0, 0)" }
                      : { fill: "rgba(0, 0, 0, 0.493)" }
                  }
                >
                  <path
                    className="rui-w4DG7"
                    d="M395.709 281.288l379.236 1.825 0.935-191.933-379.236-1.825-0.935 191.933zM350.698 370.243l-44.388-44.833 1.336-281.021 44.833-44.388 468.413 2.226 44.344 44.833-1.336 281.066-44.789 44.388-468.413-2.271zM881.219 565.515l-32.946-32.902-188.55 156.405h-275.812v-92.65h202.707l-0.134-50.799h-329.773l-164.063 183.296v162.059l64.378-0.401 90.735-90.869 32.768-13.579h380.216l220.472-220.561zM979.478 598.239l-266.774 266.908-32.813 13.579h-380.171l-90.602 90.691-32.456 13.624-130.003 0.846-46.659-46.347v-226.393l11.798-30.898 189.663-211.923 34.549-15.449h396.689l46.347 46.258 0.134 51.556 143.048-116.335 61.974 3.206 95.277 95.143v65.536zM659.857 186.591c-0.178 40.915-33.525 73.906-74.44 73.728-40.915-0.223-73.906-33.525-73.728-74.44 0.223-40.915 33.525-73.906 74.44-73.728 40.915 0.223 73.906 33.525 73.728 74.44z"
                  ></path>
                </svg>
                <span
                  onClick={setOffer}
                  style={
                    offer
                      ? { color: "rgba(0, 0, 0)" }
                      : { color: "rgba(0, 0, 0, 0.493)" }
                  }
                >
                  MAKE OFFER
                </span>
              </div>
            </div>
          </div>
        </div>
        {offer ? (
          <>
            <div className="sendOffer">
              <span>₹</span>
              <input type="number" name="" id="" placeholder="...." />
              <button>Send</button>
            </div>
            <div className="message-input">
              <div
                className="wrap"
                style={{
                  backgroundColor: "#f5f5f5",
                  width: "84vw",
                  height: "8vh",
                  position: "absolute",
                  top: "2vh",
                }}
              ></div>
            </div>
          </>
        ) : (
          <div className="message-input">
            <div className="wrap">
              <input type="text" placeholder="Type a message..." />
              <FontAwesomeIcon
                icon={faPaperclip}
                className="attachment"
                style={{ width: "20px", height: "20px" }}
              />
              <button className="submit">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
