import { DateTime } from "luxon";
import { useState } from "react";

import { JobsQuery } from "../../../generated/graphql";

import styles from "./styles.module.css";

type Props = Omit<JobsQuery["jobs"][number], "__typename">;

export function Card({ status, createdAt, name }: Props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <article className={styles.container}>
      <h1
        className={isHovering ? styles.title : styles.truncedTitle}
        title={name}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {name}
      </h1>
      <div className={styles.subtitle}>
        {new Intl.DateTimeFormat(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(DateTime.fromISO(createdAt).toJSDate())}
      </div>
      <div>{status}</div>
    </article>
  );
}
