"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./styles/intro.module.css";
import { PreregistrationModal } from "../modal/PreregistrationModal";

export const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className={styles.intro}
      aria-label="AI Messaging for OnlyFans and Fansly"
    >
      <Image
        src="block_1.svg"
        alt="Woman using AI messaging tool"
        className={styles.image}
        width={710}
        height={710}
        priority
      />
      <div className={styles.info_block}>
        <h1 className={styles.head}>
          Turn More Chats into Cash — <br className={styles.spacer} />
          AI Messaging for OnlyFans & Fansly
        </h1>
        <p className={styles.info}>
          Trusted by top 1% creators to boost revenue and save time. Our AI
          assistant keeps fans engaged, increases tips, and drives sales — all
          through seamless Chrome extension integration.
        </p>
        <div className={styles.bttn_info}>
          <button className={styles.bttn} onClick={handleOpenModal}>
            Get Early Access
          </button>
          <p className={styles.bttn_description}>
            Beta access is limited — reserve your spot now.
          </p>
        </div>
      </div>
      <div className={styles.bttn_info_mobile}>
        <button className={styles.bttn} onClick={handleOpenModal}>
          Get Early Access
        </button>
        <p className={styles.bttn_description}>
          Beta access is limited — reserve your spot now.
        </p>
      </div>

      <PreregistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};
