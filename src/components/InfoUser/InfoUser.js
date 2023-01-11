import React from "react";

import { useSelector } from "react-redux";

import styles from "./styles.module.scss";

export default function InfoUser() {
  const userInfo = useSelector(
    (state) => state.repo.eventsList?.data[0]?.actor
  );

  return (
    <div className={styles.item}>
      <img className={styles.img} src={userInfo?.avatar_url} />
      <div>
        <div>
          <span>Логин: {userInfo?.login}</span>
        </div>
        <div>
          <span>URL: {userInfo?.url}</span>
        </div>
      </div>
    </div>
  );
}
