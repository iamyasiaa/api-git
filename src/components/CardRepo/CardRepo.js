import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export default function CardRepo({ item }) {
  const navigate = useNavigate();

  const onClickItem = () => {
    navigate(`/${item.actor.login}`);
  };

  return (
    <div className={styles.item} onClick={onClickItem}>
      <img className={styles.img} src={item?.actor?.avatar_url} />
    </div>
  );
}
