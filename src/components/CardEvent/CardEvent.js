import React from "react";

import styles from "./styles.module.scss";

export default function CardEvent({ item }) {
  return (
    <div className={styles.item}>
      <div>
        <span>Тип: </span>
        <span>{item?.type}</span>
      </div>
      <div>
        <span>Название репозитория: </span>
        <span>{item?.repo?.name}</span>
      </div>
      <div>
        <span>URL репозитория: </span>
        <span>{item?.repo?.url}</span>
      </div>
    </div>
  );
}
