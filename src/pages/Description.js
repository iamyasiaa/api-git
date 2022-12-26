import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getRepo } from "../actions/actionRepo";
import ListEvents from "../components/ListEvents";
import Body from "../components/Body";
import InfoUser from "../components/InfoUser";

export default function Description() {
  const dispatch = useDispatch();
  const location = useLocation();
  const userName = location.pathname.slice(1);

  useEffect(() => {
    dispatch(getRepo(userName));
  }, []);

  return (
    <Body>
      <InfoUser />
      <ListEvents />
    </Body>
  );
}
