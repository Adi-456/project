import "../Style/Productstyles.css";

import React, { useState, useEffect } from "react";

export default function Product() {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    setSlideIndex(slideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    const product = document.getElementsByClassName("product-image");
    const thumbnail = document.getElementsByClassName("thumbnail-image");
    const productLB = document.getElementsByClassName("product-image-lb");
    const thumbnailLB = document.getElementsByClassName("thumbnail-image-lb");

    if (n > product.length) {
      setSlideIndex(1);
    }

    if (n < 1) {
      setSlideIndex(product.length);
    }

    Array.from(product).forEach((element) => {
      element.style.display = "none";
    });

    Array.from(productLB).forEach((element) => {
      element.style.display = "none";
    });

    Array.from(thumbnail).forEach((element) => {
      element.classList.remove("active");
    });

    Array.from(thumbnailLB).forEach((element) => {
      element.classList.remove("active");
    });

    product[slideIndex - 1].style.display = "block";
    thumbnail[slideIndex - 1].classList.add("active");
    // productLB[slideIndex - 1].style.display = "block";
    // thumbnailLB[slideIndex - 1].classList.add("active");
  }

  const handleThumbnailClick = (slideNumber) => {
    setSlideIndex(slideNumber);
    showSlides(slideNumber);
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <div>
      <body>
        {/* <!-- Cart/Avatar Container ---------------------------------------------------> */}
        {/* 
        <div className="cart-avatar-container">
          <button className="cart-btn" id="cart-btn">
            <img
              src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/e6f54e15253b9446814d89e3709730eb174136bd/images/icon-cart.svg"
              alt="cart-icon"
              className="cart-icon"
            />
            <span className="cart-quantity" id="cart-quantity"></span>
          </button>

          <div className="cart-container" id="cart-container">
            <span className="cart-label">cart</span>

            <div className="cart-contents" id="cart-contents">
              <div className="cart-contents-subcontainer">
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/main/images/image-product-1-thumbnail.jpg"
                  alt="cart-thumbnail"
                  className="cart-thumbnail"
                />
                <div className="product-details">
                  <span className="product-name">
                    fall limited edition sneakers
                  </span>
                  <span>
                    $125.00 x <span id="product-quantity"></span>{" "}
                    <strong id="total"></strong>
                  </span>
                </div>

                <button className="delete-btn" id="delete-btn">
                  <img
                    src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/168180def66c040b9b9a60afc31a31f4658272ec/images/icon-delete.svg"
                    alt="delete-icon"
                    className="delete-icon"
                  />
                </button>
              </div>

              <button className="checkout-btn">checkout</button>
            </div>

            <div className="empty-cart" id="empty-cart">
              <span>Your cart is empty.</span>
            </div>
          </div>

          <div className="avatar"></div>
        </div> */}

        {/* <!-- Main ---------------------------------------------------> */}
        <div className="main-container">
          <section className="left">
            <div className="product-container" id="product-container">
              <div className="product-image">
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/main/images/image-product-1.jpg"
                  alt="product-img-1"
                  className="product-img"
                />
              </div>
              <div className="product-image">
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/main/images/image-product-2.jpg"
                  alt="product-img-2"
                  className="product-img"
                />
              </div>
              <div className="product-image">
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/main/images/image-product-3.jpg"
                  alt="product-img-3"
                  className="product-img"
                />
              </div>
              <div className="product-image">
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/main/images/image-product-4.jpg"
                  alt="product-img-4"
                  className="product-img"
                />
              </div>
            </div>

            {/* <!-- Thumbnails ---------------------------------------------------> */}

            <div className="thumbnail-container">
              <div
                className="thumbnail-image"
                onClick={() => handleThumbnailClick(1)}
              >
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/main/images/image-product-1-thumbnail.jpg"
                  alt="product-thumbnail-1"
                  className="product-thumbnail"
                />
              </div>
              <div
                className="thumbnail-image"
                onClick={() => handleThumbnailClick(2)}
              >
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/main/images/image-product-2-thumbnail.jpg"
                  alt="product-thumbnail-2"
                  className="product-thumbnail"
                />
              </div>
              <div
                className="thumbnail-image"
                onClick={() => handleThumbnailClick(3)}
              >
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/main/images/image-product-3-thumbnail.jpg"
                  alt="product-thumbnail-3"
                  className="product-thumbnail"
                />
              </div>
              <div
                className="thumbnail-image"
                onClick={() => handleThumbnailClick(4)}
              >
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/main/images/image-product-4-thumbnail.jpg"
                  alt="product-thumbnail-4"
                  className="product-thumbnail"
                />
              </div>
            </div>
          </section>

          {/* <!-- Product Description ---------------------------------------------------> */}
          <section class="right">
            <small>E-BARTER</small>
            <h1>fall limited edition sneakers</h1>

            <p>
              <span>
                These low-profile sneakers are your perfect casual wear{" "}
              </span>
              <span>
                companion. Featuring a durable rubber outer sole, they'll{" "}
              </span>
              withstand everything the weather can offer.
            </p>

            <div className="price">
              <div className="discounted-price">
                <strong className="current-price">$125.00</strong>
                <strong className="discount">50%</strong>
              </div>

              <s>$250.00</s>
            </div>

            {/* <!-- Cart Controls ---------------------------------------------------> */}
            <div className="add-to-cart">
              <button className="add-to-cart-btn" id="add-to-cart-btn">
                Call Seller
              </button>
            </div>
          </section>
        </div>
        {/* <!-- Lightbox ---------------------------------------------------> */}
        <div className="lightbox" id="lightbox">
          <div className="close-icon-container" id="close-icon-container">
            <img
              src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/168180def66c040b9b9a60afc31a31f4658272ec/images/icon-close.svg"
              alt="close-icon"
              className="close-icon"
            />
          </div>
        </div>

        {/* product images */}
      </body>
    </div>
  );
}
