import styles from "../styles/card.module.css";
import Image from "next/image";

export const Card = (props: { title: string }) => {
  return (
    <article className={styles.card}>
      <Image
        className={styles.cross}
        src="red_cros.svg"
        alt="Red cross icon"
        width={24}
        height={24}
      />
      <span>{props.title}</span>
    </article>
  );
};
