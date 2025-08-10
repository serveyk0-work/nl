import styles from "../styles/tools_info.module.css";

type toolsInfoProps = {
  head: string;
  desciption: string;
  onClick: () => void;
  isActive: boolean;
};

export const ToolsInfo = ({
  head,
  desciption,
  onClick,
  isActive,
}: toolsInfoProps) => {
  return (
    <div
      className={`${styles.toolsInfo} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <h2 className={styles.header}>{head}</h2>
      <p className={styles.desciption}>{desciption}</p>
    </div>
  );
};
