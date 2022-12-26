import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import Body from "../components/Body";
import ListRepo from "../components/ListRepo";
import { getListRepo } from "../actions/actionRepo";
import Edit from "../components/Edit";

export default function Main() {
  const [timer, setTimer] = useState(0);
  const [loadList, setLoadList] = useState({
    active: true,
    timer: "",
  });
  const dispatch = useDispatch();

  const onClickEdit = useCallback(() => {
    dispatch(getListRepo());
    setTimer(0);
  }, []);

  window.addEventListener("scroll", function () {
    if (window.pageYOffset) {
      setLoadList(Object.assign({}, loadList, { active: false }));
    } else {
      setLoadList(Object.assign({}, loadList, { active: true }));
    }
  });

  useMemo(() => {
    if (loadList.active) {
      clearInterval(loadList.timer);
      loadList.timer = setInterval(() => {
        setTimer(0);
        dispatch(getListRepo());
      }, 60000);
    } else {
      clearInterval(loadList.timer);
    }
  }, [loadList.active]);

  useEffect(() => {
    dispatch(getListRepo());
  }, []);

  useEffect(() => {
    if (timer < 15) {
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }
  }, [timer]);

  return (
    <Body>
      <ListRepo />
      {timer >= 15 && <Edit onClick={onClickEdit} />}
    </Body>
  );
}
