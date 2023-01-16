import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Body, ListRepo, Edit } from "../components";
import { getListRepo } from "../actions/actionRepo";
import { useInterval } from "../customHooks/useInterval";

export default function Main() {
  const [loadList, setLoadList] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [timer, setTimer] = useState(false);
  const isLoading = useSelector((state) => state.repo.repoList.loading);
  const dispatch = useDispatch();
  useInterval(callbackInterval, loadList, 60000);

  const onClickEdit = useCallback(() => {
    dispatch(getListRepo());
    setTimer(true);
  }, []);

  window.addEventListener("scroll", function () {
    setLoadList(window.pageYOffset ? null : uuidv4());
  });

  function callbackInterval() {
    dispatch(getListRepo());
  }

  useEffect(() => {
    if (timer) {
      setRefresh(false);
      let id = setTimeout(() => {
        setRefresh(true);
        setTimer(false);
      }, 15000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [timer]);

  useEffect(() => {
    dispatch(getListRepo());
    setTimer(true);
  }, []);

  return (
    <Body>
      {isLoading && <div>Loading...</div>}
      <ListRepo />
      {refresh && <Edit onClick={onClickEdit} />}
    </Body>
  );
}
