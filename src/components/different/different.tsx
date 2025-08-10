"use client";

import { Banner } from "./sections/banner";
import styles from "./styles/different.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Different = () => {
  const banners = [
    {
      head: "Context-Aware Messaging",
      description:
        "NeuroLover remembers the chat so replies always make sense. It picks up where you left off, keeping convos smooth and personal.",
      imgPath: "/banners/banner_1.svg",
      bgColor: "var(--Bento-Blue, #090337)",
    },
    {
      head: "Versatile Dialogue Options",
      description:
        "Seven quick-reply buttons cover everything—from casual hellos to flirty sexts and playful dominance. “Tip Me” makes asking feel fun.",
      imgPath: "/banners/banner_2.svg",
      bgColor: "linear-gradient(180deg, #1D003E 0%, #240048 100%)",
    },
    {
      head: "Safe & Reliable",
      description:
        "NeuroLover uses strong security and smart failover to keep things smooth and private.",
      imgPath: "/banners/banner_3.svg",
      bgColor: "#110025",
    },
    {
      head: "Personalized Suggestions",
      description:
        "Your fans’ names are auto-inserted, and messages are tailored to fit. Edit if you like, or just tap and send.",
      imgPath: "/banners/banner_4.svg",
      bgColor: "linear-gradient(180deg, #000527 0%, #000E3F 100%)",
    },
  ];

  return (
    <section
      className={styles.body}
      aria-label="Features that make NeuroLover different"
    >
      <div className={styles.header_texts}>
        <h1 className={styles.head}>What makes NeuroLover different</h1>
        <p className={styles.subHead}>
          If you’re looking to get some good donations, Neurolover is a
          no-brainer. It will save you some serious time and hassle. But that’s
          not all it’s good for.
        </p>
      </div>

      <div className={styles.banners} role="list">
        {banners.map((banner) => (
          <Banner
            key={banner.head}
            head={banner.head}
            description={banner.description}
            imgPath={banner.imgPath}
            bgColor={banner.bgColor}
          />
        ))}
      </div>

      <div className={styles.slider}>
        <Swiper
          className={styles.swiperSlider}
          slidesPerView="auto"
          spaceBetween={10}
          role="list"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index} className={styles.slide} role="listitem">
              <Banner
                head={banner.head}
                description={banner.description}
                imgPath={banner.imgPath}
                bgColor={banner.bgColor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
