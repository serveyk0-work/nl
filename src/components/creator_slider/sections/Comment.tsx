import styles from "../styles/comment.module.css";

type commentProps = {
  creator: string;
  creatorPosition: string;
  comment: string;
  isActive: boolean;
};

export const Comment = (props: commentProps) => {
  return (
    <article
      className={styles.comment}
      style={{
        borderRadius: "32px",
        gap: "12px",
        backgroundColor: props.isActive ? "#fff" : "#ffffff00",
        border: "3px solid #fff",
        boxShadow: props.isActive ? "0 0 10px rgba(255, 255, 255, 0)" : "none",
        transform: `${props.isActive ? "scale(1)" : "scale(0.8)"}`,
        opacity: "0.8",
      }}
      aria-live={props.isActive ? "polite" : undefined}
    >
      <div className={styles.head}>
        <h2 className={styles.creator}>{props.creator}</h2>
        <h3 className={styles.creatorPosition}>{props.creatorPosition}</h3>
      </div>
      <p
        className={styles.commentText}
        style={{
          WebkitLineClamp: 2,
        }}
      >
        {props.comment}
      </p>
    </article>
  );
};
