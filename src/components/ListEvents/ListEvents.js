import React from "react";
import { useSelector } from "react-redux";

import CardEvent from "../CardEvent";

import styles from "./styles.module.scss";

export default function ListEvents() {
  const listEvents = useSelector((state) => state.repo.listEvent);

  return (
    <div className={styles.list}>
      {listEvents?.map((item) => (
        <CardEvent item={item} key={item.id} />
      ))}
    </div>
  );
}
