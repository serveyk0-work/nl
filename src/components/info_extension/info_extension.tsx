"use client";

import Image from "next/image";
import styles from "./styles/info_extentions.module.css";
import { ToolsInfo } from "./sections/tools_info";
import { Urls } from "@/utils/Urls";
import { useState } from "react";
import { InfoExtentionImg } from "@/utils/Urls";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cx from "classnames";

const toolList = [
  {
    head: "Tone Selector UI",
    desciption: "Pick the vibe from 7 different options",
    img: InfoExtentionImg.TONESELECTORUI,
  },
  {
    head: "📏 Message Length Control",
    desciption:
      "Choose short, long, or adaptive replies. NeuroLover remembers your preference.",
    img: InfoExtentionImg.MESSAGELENGTHCONTROL,
  },
  {
    head: "🧲 Floating Mode",
    desciption: "Move the panel anywhere. Collapse or expand it as you like.",
    img: InfoExtentionImg.FLOATINGMODE,
  },
  {
    head: "📌 Pinned Mode",
    desciption: "Pin the tool next to your input box — vertical or horizontal.",
    img: InfoExtentionImg.PINNEDMODE,
  },
  {
    head: "🌗 Light or Dark Mode",
    desciption: "Use whatever matches your vibe or screen setup.",
    img: InfoExtentionImg.LIGHTORDARKMODE,
  },
];

export const InfoExtension = () => {
  const [activeTool, setActiveTool] = useState(toolList[0].head);

  const currentImg =
    toolList.find((tool) => tool.head === activeTool)?.img || toolList[0].img;

  return (
    <section
      className={styles.main}
      aria-label="AI-powered tools for content creators"
    >
      <div className={styles.background} aria-hidden="true"></div>

      <div className={styles.head_block}>
        <h1 className={styles.head}>
          Let AI do the heavy lifting — you stay in control
        </h1>
        <p className={styles.subHead}>
          NeuroLover works directly inside your OnlyFans and Fansly page. No
          switching tabs, no setup — just smart, context-aware replies where you
          already work.
        </p>
      </div>

      {/* ---------------------1132px---------------------------------- */}
      <div className={styles.info_block_mobile}>
        <div className={styles.info_mobile}>
          <Swiper
            slidesPerView="auto"
            spaceBetween={4}
            className={`${styles.slider} ${styles.sliderShadow}`}
            role="list"
          >
            {toolList.map((tool, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className={cx(styles.mobile_bg, styles.swiperSlide)}
                  role="listitem"
                  aria-current={tool.head === activeTool ? "true" : "false"}
                >
                  <ToolsInfo
                    key={tool.head}
                    head={tool.head}
                    desciption={tool.desciption}
                    isActive={tool.head === activeTool}
                    onClick={() => setActiveTool(tool.head)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className={styles.img_mobile}>
          <Image
            src={currentImg}
            alt={`Image of the ${activeTool} tool`}
            width={1024}
            height={644}
            className={styles.toolImg_mobile}
            priority
          />
        </div>
      </div>

      {/* ---------------------default desktop---------------------------------- */}
      <div className={styles.info_block}>
        <div className={styles.info} role="list">
          {toolList.map((tool) => {
            return (
              <ToolsInfo
                key={tool.head}
                head={tool.head}
                desciption={tool.desciption}
                isActive={tool.head === activeTool}
                onClick={() => setActiveTool(tool.head)}
              />
            );
          })}
        </div>

        <div className={styles.img}>
          <Image
            src={currentImg}
            alt={`Image of the ${activeTool} tool`}
            width={1344}
            height={845}
            className={styles.toolImg}
            priority
          />
        </div>
      </div>

      <div className={styles.extension}>
        <a href={Urls.INSTALL_EXTENTION} target="_blank">
          <button className={styles.extention_bttn}>Install Extension</button>
        </a>
        <p className={styles.bttn_description}>
          Works with <span className={styles.browsers}>Chrome, dolphin</span>
        </p>
      </div>
    </section>
  );
};
