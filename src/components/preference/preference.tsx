import { Card } from "./sections/card";
import styles from "./styles/preference.module.css";

export const Preference = () => {
  const tips = [10, 45, 25, 50, 25];
  const opacityVal = [0.05, 0.1, 0.2, 0.4, 1];

  return (
    <section
      className={styles.main}
      aria-label="Income boost and messaging efficiency benefits"
    >
      <div className={styles.header}>
        <h1 className={styles.header_text}>
          Boost your income — not your screen time
        </h1>
        <h2 className={styles.header_description}>
          With NeuroLover, creators{" "}
          <span className={styles.header_description_highlighted}>
            save up to 80%
          </span>{" "}
          of their messaging time and{" "}
          <span className={styles.header_description_highlighted}>
            see up to 65% more
          </span>{" "}
          in tips and sales.
        </h2>
      </div>
      <div className={styles.body}>
        <div className={styles.texts}>
          <div className={styles.cards} role="list">
            <Card
              headPercent="-80%"
              headText="DM Time"
              description="Let AI handle the repetitive replies so you don’t have to."
            />
            <Card
              headPercent="+35%"
              headText="Tips & Sales"
              description="Faster replies and playful nudges = more fans spending."
            />
            <Card
              headPercent="x3"
              headText="Conversations"
              description="AI keeps fans engaged — no dead ends, no ghosting."
            />
            <Card
              headPercent="-60%"
              headText="Response Time"
              description="Instant replies = happier, tipping fans."
            />
          </div>
        </div>

        <aside className={styles.tips} aria-label="Tips received by creators">
          {tips.map((amount, index) => (
            <p style={{ opacity: `${opacityVal[index]}` }} key={index}>
              💬 ${amount} tips received
            </p>
          ))}

          <div>
            <p className={styles.tipsText}>
              “I doubled my tips in just two weeks.”
            </p>
            <p className={styles.highlightedWords}>Verified Creator</p>
          </div>
        </aside>
      </div>
    </section>
  );
};
