"use client";

import { useState } from "react";
import { Comment } from "./sections/Comment";
import styles from "./styles/creator_slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles/swiper-overrides.css";

export const CreatorSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      creator: "Jax",
      creatorPosition: "Verified Fansly Creator",
      comment:
        "“I doubled my tips in two weeks. This thing flirts better than I do.”",
    },
    {
      creator: "Aria V.",
      creatorPosition: "Full-time Creator",
      comment:
        "“Honestly a game-changer. I finally have time to focus on my content again.”",
    },
    {
      creator: "Mia",
      creatorPosition: "Top 2% OnlyFans",
      comment:
        "“It sounds exactly like me — fans didn’t even notice I wasn’t typing!”",
    },
    {
      creator: "222",
      creatorPosition: "Top 2% OnlyFans",
      comment:
        "“It sounds exactly like me — fans didn’t even notice I wasn’t typing!”",
    },
    {
      creator: "222",
      creatorPosition: "Top 2% OnlyFans",
      comment:
        "“It sounds exactly like me — fans didn’t even notice I wasn’t typing!”",
    },
  ];

  return (
    <section
      className={styles.main}
      aria-label="Testimonials from top creators"
    >
      <h1 className={styles.head}>Loved by top 1% creators</h1>
      <div className={styles.slyderBody}>
        <Swiper
          centeredSlides={false}
          slidesPerView="auto"
          spaceBetween={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className={styles.slider}
          role="list"
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={styles.slide}
              role="listitem"
              aria-current={index === activeIndex ? "true" : "false"}
            >
              <Comment
                creator={slide.creator}
                creatorPosition={slide.creatorPosition}
                comment={slide.comment}
                isActive={index === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
