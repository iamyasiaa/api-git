import React from "react";
import { useSelector } from "react-redux";

import { CardRepo } from "../CardRepo";

import styles from "./styles.module.scss";

export default function ListRepo() {
  const listRepo = useSelector((state) => state.repo.repoList.data);

  return (
    <div className={styles.list}>
      {listRepo?.map((item) => (
        <CardRepo item={item} key={item.id} />
      ))}
    </div>
  );
}
