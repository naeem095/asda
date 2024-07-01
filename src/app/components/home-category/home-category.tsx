"use client";

import Link from "next/link";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

export default function HomeCategory() {

  const options = {
    type: "slide",
    gap: "2rem",
    // arrows: false,
    perPage: 6,
    perMove: 1,
    // pagination: false,
    // paginationDirection: 'ttb',
    breakpoints: {
      600: {
        perPage: 2.7,
        gap: "1rem",
      },
    },

  };


  return (
    <>
      {/* Talent by category */}
      <section className="pb40-md">
        <div className="container">



          <div
            className="row align-items-center wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title mb-0">Browse talent by category</h2>
                <p className="paragraph">Get some Inspirations from 1800+ skills</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4 mb-lg-2">
                <Link className="ud-btn2" href="all-category-list">
                  All Categories
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>

          <Splide
            className="category-slider-home10 navi_pagi_bottom_center slider-7-grid"
            options={options}
            aria-label="My Favorite Images">
            <SplideSlide>
              <div className="bgc-gray-3 iconbox-style1 mb-0 p-4">
                <div className="icon">
                  <span className="flaticon-developer" />
                </div>
                <div className="details mt20">
                  <p className="text mb5">1.853 skills</p>
                  <h5 className="title">Development &amp; IT</h5>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bgc-gray-3 iconbox-style1 mb-0 p-4">
                <div className="icon">
                  <span className="flaticon-web-design-1" />
                </div>
                <div className="details mt20">
                  <p className="text mb5">1.853 skills</p>
                  <h5 className="title">Design &amp; Creative</h5>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bgc-gray-3 iconbox-style1 mb-0 p-4">
                <div className="icon">
                  <span className="flaticon-digital-marketing" />
                </div>
                <div className="details mt20">
                  <p className="text mb5">1.853 skills</p>
                  <h5 className="title">Digital Marketing</h5>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bgc-gray-3 iconbox-style1 mb-0 p-4">
                <div className="icon">
                  <span className="flaticon-translator" />
                </div>
                <div className="details mt20">
                  <p className="text mb5">1.853 skills</p>
                  <h5 className="title">Writing &amp; Translation</h5>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bgc-gray-3 iconbox-style1 mb-0 p-4">
                <div className="icon">
                  <span className="flaticon-microphone" />
                </div>
                <div className="details mt20">
                  <p className="text mb5">1.853 skills</p>
                  <h5 className="title">Music &amp; Audio</h5>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bgc-gray-3 iconbox-style1 mb-0 p-4">
                <div className="icon">
                  <span className="flaticon-video-file" />
                </div>
                <div className="details mt20">
                  <p className="text mb5">1.853 skills</p>
                  <h5 className="title">Video &amp; Animation</h5>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bgc-gray-3 iconbox-style1 mb-0 p-4">
                <div className="icon">
                  <span className="flaticon-video-file" />
                </div>
                <div className="details mt20">
                  <p className="text mb5">1.853 skills</p>
                  <h5 className="title">Video &amp; Animation</h5>
                </div>
              </div>
            </SplideSlide>

          </Splide>











         
        </div>
      </section>
    </>
  )
}