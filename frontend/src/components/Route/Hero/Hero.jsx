import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import "./hero.css"
import MinPro from "./MinPro";
const Hero = () => {
  return (
    <>
 <div class="banner">

<div class="container">

  <div class="slider-container has-scrollbar">

    <div class="slider-item">

      <img src="https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg" alt="women's latest fashion sale" class="banner-img"/>

      <div class="banner-content">

        <p class="banner-subtitle">Trending item</p>

        <h2 class="banner-title">Women's latest fashion sale</h2>

        <p class="banner-text">
          starting at &dollar; <b>20</b>.00
        </p>

        <a href="/products" class="banner-btn">Shop now</a>

      </div>

    </div>

    <div class="slider-item">

      <img src="https://themes.rslahmed.dev/rafcart/assets/images/banner-1.jpg" alt="modern sunglasses" class="banner-img"/>

      <div class="banner-content">

        <p class="banner-subtitle">Trending accessories</p>

        <h2 class="banner-title">Modern Home ITEMS</h2>

        <p class="banner-text">
          starting at &dollar; <b>15</b>.00
        </p>

        <a href="/products" class="banner-btn">Shop now</a>

      </div>

    </div>

    <div class="slider-item">

      <img src="https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg" alt="new fashion summer sale" class="banner-img"/>

      <div class="banner-content">

        <p class="banner-subtitle">Sale Offer</p>

        <h2 class="banner-title">New fashion summer sale</h2>

        <p class="banner-text">
          starting at &dollar; <b>29</b>.99
        </p>

        <a href="/products" class="banner-btn">Shop now</a>

      </div>

    </div>

  </div>

</div>

</div>






<div class="category">

<div class="container">

  <div class="category-item-container has-scrollbar">

    <div class="category-item">

      <div class="category-img-box">
        <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/dress.svg" alt="dress & frock" width="30"/>
      </div>

      <div class="category-content-box">

        <div class="category-content-flex">
          <h3 class="category-item-title">Dress & frock</h3>

          <p class="category-item-amount">(53)</p>
        </div>

        <a href="/products" class="category-btn">Show all</a>

      </div>

    </div>

    <div class="category-item">

      <div class="category-img-box">
        <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/coat.svg" alt="winter wear" width="30"/>
      </div>

      <div class="category-content-box">

        <div class="category-content-flex">
          <h3 class="category-item-title">Winter wear</h3>

          <p class="category-item-amount">(58)</p>
        </div>

        <a href="/products" class="category-btn">Show all</a>

      </div>

    </div>

    <div class="category-item">

      <div class="category-img-box">
        <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/glasses.svg" alt="glasses & lens" width="30"/>
      </div>

      <div class="category-content-box">

        <div class="category-content-flex">
          <h3 class="category-item-title">Glasses & lens</h3>

          <p class="category-item-amount">(68)</p>
        </div>

        <a href="/products" class="category-btn">Show all</a>

      </div>

    </div>

    <div class="category-item">

      <div class="category-img-box">
        <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/shorts.svg" alt="shorts & jeans" width="30"/>
      </div>

      <div class="category-content-box">

        <div class="category-content-flex">
          <h3 class="category-item-title">Shorts & jeans</h3>

          <p class="category-item-amount">(84)</p>
        </div>

        <a href="/products" class="category-btn">Show all</a>

      </div>

    </div>

    <div class="category-item">

      <div class="category-img-box">
        <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/tee.svg" alt="t-shirts" width="30"/>
      </div>

      <div class="category-content-box">

        <div class="category-content-flex">
          <h3 class="category-item-title">T-shirts</h3>

          <p class="category-item-amount">(35)</p>
        </div>

        <a href="/products" class="category-btn">Show all</a>

      </div>

    </div>

    <div class="category-item">

      <div class="category-img-box">
        <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/jacket.svg" alt="jacket" width="30"/>
      </div>

      <div class="category-content-box">

        <div class="category-content-flex">
          <h3 class="category-item-title">Jacket</h3>

          <p class="category-item-amount">(16)</p>
        </div>

        <a href="/products" class="category-btn">Show all</a>

      </div>

    </div>

    <div class="category-item">

      <div class="category-img-box">
        <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/watch.svg" alt="watch" width="30"/>
      </div>

      <div class="category-content-box">

        <div class="category-content-flex">
          <h3 class="category-item-title">Watch</h3>

          <p class="category-item-amount">(27)</p>
        </div>

        <a href="/products" class="category-btn">Show all</a>

      </div>

    </div>

    <div class="category-item">

      <div class="category-img-box">
        <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/hat.svg" alt="hat & caps" width="30"/>
      </div>

      <div class="category-content-box">

        <div class="category-content-flex">
          <h3 class="category-item-title">Hat & caps</h3>

          <p class="category-item-amount">(39)</p>
        </div>

        <a href="/products" class="category-btn">Show all</a>

      </div>

    </div>

  </div>

</div>

</div>



<MinPro/>

      <div
        className={`relative min-h-[70vh] 800px:min-h-[80vh]  bg-center bg-no-repeat ${styles.noramlFlex}`}
      >
        <div
          className={`${styles.section} w-[90%] 800px:w-[60%] flex justify-between items-center`}
        >
          <div className="w-full md:w-[70%] p-6 text-black">
            <h1
              className="text-3xl md:text-3xl  mb-4 text-justify"
             
            >
              <span class="custom-quotes" style={{ fontFamily: "monospace",color:"blue" }}>
                &ldquo;ShopDot !&rdquo;
              </span>{" "}
              is a digital marketplace that enables businesses to sell products
              and services online to a global customer base.
            </h1>

            <Link to="/products" className="inline-block mt-6">
              <button className="py-2 px-6 bg-[#2b2bff] text-black text-lg font-semibold rounded-full hover:bg-[#1e1eb7] transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>

          <div className="hidden md:block md:w-[30%]"></div>
        </div>
        <div className="w-full md:w-[50%] md:mr-10">
          <video
            preload="none"
            playsinline=""
            loop="loop"
            muted="muted"
            className="font-space-grotesk text-base font-normal text-white outline-none box-border relative flex-grow-0 flex-shrink-0 border-2 rounded-[8px] rounded-tl-[50px] rounded-br-[50px] mr-4"
            autoplay=""
          >
            <source
              src="https://res.cloudinary.com/drk8b0kev/video/upload/v1698248359/yuoibqklgn5aoqs57orj.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Hero;
