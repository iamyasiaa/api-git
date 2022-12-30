import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Body, ListRepo, Edit } from "../components";
import { clearTimer, getListRepo } from "../actions/actionRepo";
import { useInterval } from "../customHooks/useInterval";

export default function Main() {
  const [loadList, setLoadList] = useState({
    active: true,
  });
  const [refresh, setRefresh] = useState(false);
  const timer = useSelector((state) => state.repo.timer);
  const isLoading = useSelector((state) => state.repo.isLoadingRepo);
  const dispatch = useDispatch();
  useInterval(callbackInterval, loadList.active, 60000);

  const onClickEdit = useCallback(() => {
    dispatch(getListRepo());
  }, []);

  window.addEventListener("scroll", function () {
    if (window.pageYOffset) {
      setLoadList(Object.assign({}, loadList, { active: null }));
    } else {
      setLoadList(Object.assign({}, loadList, { active: uuidv4() }));
    }
  });

  function callbackInterval() {
    dispatch(getListRepo());
  }

  useEffect(() => {
    if (timer) {
      setRefresh(false);
      let id = setTimeout(() => {
        setRefresh(true);
        dispatch(clearTimer());
      }, 15000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [timer]);

  useEffect(() => {
    dispatch(getListRepo());
  }, []);

  return (
    <Body>
      {isLoading && <div>Loading...</div>}
      <ListRepo />
      {refresh && <Edit onClick={onClickEdit} />}
    </Body>
  );
}
