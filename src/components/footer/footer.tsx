"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./styles/footer.module.css";
import { Urls } from "@/utils/Urls";
import { PreregistrationModal } from "../modal/PreregistrationModal";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const logos: { [key: string]: string } = {
    "/footer/discord.svg": Urls.DISCORD,
    "/footer/instagram.svg": Urls.INSTAGRAM,
    "/footer/reddit.svg": Urls.REDDIT,
    "/footer/x.svg": Urls.X,
    "/footer/telegram.svg": Urls.TELEGRAM,
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.image}>
        <Image
          src="/footer/footer.svg"
          width={214}
          height={214}
          alt="Woman illustration"
        />
        <div className={styles.images_midle}>
          {Object.entries(logos).map(([iconPath, href], index) => (
            <a
              key={index}
              href={href}
              aria-label={`Link to ${href}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={iconPath}
                width={20}
                height={20}
                alt={`Social icon for ${href}`}
              />
            </a>
          ))}
        </div>
        <div className={styles.info_desciption_midle}>
          <div className={styles.resume}>
            <p className={styles.company_name}>© 2025 Neurolover</p>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.footer_header}>
          <div className={styles.access}>
            <p className={styles.access_text}>
              Beta access is limited — grab your spot today
            </p>
            <button className={styles.access_bttn} onClick={handleOpenModal}>
              Get Early Access
            </button>
          </div>
          <p className={styles.description}>
            No credit card required. Cancel anytime. Start growing your income
            with less effort.
          </p>
        </div>

        <div className={styles.social}>
          <nav
            className={styles.info_desciption}
            aria-label="Company information"
          >
            <div className={styles.resume}>
              <p className={styles.company_name}>© 2025 Neurolover</p>
            </div>
          </nav>

          <nav className={styles.link} aria-label="Footer navigation">
            <a href="/privacy-policy" className={styles.links}>
              Privacy Policy
            </a>
            <a href="/terms-of-service" className={styles.links}>
              Terms Of Service
            </a>
            <a href="/contact" className={styles.links}>
              Contact Us
            </a>
          </nav>

          <div className={styles.images}>
            {Object.entries(logos).map(([iconPath, href], index) => (
              <a
                key={index}
                href={href}
                aria-label={`Link to ${href}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={iconPath}
                  width={20}
                  height={20}
                  alt={`Social icon for ${href}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <PreregistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </footer>
  );
};
