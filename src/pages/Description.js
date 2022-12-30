import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getRepo } from "../actions/actionRepo";
import { ListEvents, InfoUser, Body } from "../components";

export default function Description() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoading = useSelector((state) => state.repo.isLoadingEvent);
  const userName = location.pathname.slice(1);

  useEffect(() => {
    dispatch(getRepo(userName));
  }, []);

  return (
    <Body>
      {isLoading && <div>Loading...</div>}
      <InfoUser />
      <ListEvents />
    </Body>
  );
}
