"use client";
import cx from "classnames";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/header.module.css";
import { Urls } from "@/utils/Urls";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (menuOpen) {
      body.style.position = "fixed";
    } else {
      body.style.position = "";
    }
    return () => {
      body.style.position = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <Image src="/logo.svg" width={200} height={44} alt="Logo" />

      <nav className={styles.header_nav}>
        <a href={Urls.PLUGIN} className={styles.bttn_link}>
          <button className={styles.header_bttn}>Plugin</button>
        </a>
        <a href={Urls.PRICING} className={styles.bttn_link}>
          <button className={styles.header_bttn}>Pricing</button>
        </a>
        <button className={cx(styles.header_bttn, styles.header_bttn_sign_up)}>
          Sign Up
        </button>
      </nav>

      {/* mobile */}
      <div
        className={styles.mobile_menu_icon}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src="/mob_menu.svg" width={12} height={12} alt="Menu" />
      </div>

      {menuOpen && (
        <div className={styles.mobile_fullscreen_menu}>
          <div className={styles.mobile_menu_header}>
            <Image
              src="/logo_white.svg"
              width={200}
              height={44}
              alt="Logo"
              className={styles.close_button}
            />
            <button
              className={styles.close_button}
              onClick={() => setMenuOpen(false)}
            >
              <Image src="/close.svg" width={60} height={28} alt="Menu" />
            </button>
          </div>

          <nav className={styles.mobile_menu_content}>
            <a
              href={Urls.PLUGIN}
              onClick={() => setMenuOpen(false)}
              className={styles.mobile_link}
            >
              Plugin
            </a>
            <a
              href={Urls.PRICING}
              onClick={() => setMenuOpen(false)}
              className={styles.mobile_link}
            >
              Pricing
            </a>
            <a
              href={Urls.SING_UP}
              className={styles.mobile_sign_up}
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
