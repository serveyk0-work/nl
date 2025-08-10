import { Card } from "@/components/short_description/sections/card";
import styles from "./styles/short_description.module.css";
import Image from "next/image";

export const ShortDescription = () => {
  return (
    <section
      className={styles.body}
      aria-label="Common challenges creators face"
    >
      <div className={styles.main}>
        <div className={styles.main_info}>
          <h1 className={styles.header}>
            Tired of replying to the same messages?
          </h1>
          <p className={styles.description}>
            Managing multiple fans at once is exhausting. NeuroLover helps you
            save time, reduce burnout, and never leave money on the table.
          </p>

          <Image
            className={styles.main_img_mobile}
            src="block_2.svg"
            alt="Woman using NeuroLover app"
            width={699}
            height={464}
            priority
          />

          <div className={styles.card_collection}>
            <Card title="😩 Broken energy" />
            <Card title="⏳ Wasted time" />
            <Card title="💸 Missed tips" />
            <Card title="😮‍💨 DM burnout" />
          </div>
        </div>

        <div>
          <Image
            className={styles.main_img}
            src="block_2.svg"
            alt="Woman using NeuroLover app"
            width={699}
            height={464}
            priority
          />
        </div>
      </div>
    </section>
  );
};
