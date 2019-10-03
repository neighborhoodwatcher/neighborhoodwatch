import React, { useContext } from "react";

import "./ActivityContainer.scss";
import UserContext from "../../context/userContext";
import Dashboard from "../Dashboard/Dashboard";
import LocalEvents from "../LocalEvents/LocalEvents";
import CreateEvent from "../CreateEvent/CreateEvent";
import CreatePost from "../CreatePost/CreatePost";
import Forum from "../Forum/Forum";
import ForumTopic from "../ForumTopic/ForumTopic";
import Settings from "../Settings/Settings";

const ActivityContainer = () => {
  const userContext = useContext(UserContext);
  const route = userContext.userState.route;
  const topic = userContext.userState.topic;

  return (
    <div className="activity-container">
      <Dashboard />
      {route === "homepage" ? <LocalEvents /> : ""}
      {route === "createEvent" ? <CreateEvent /> : ""}
      {route === "forum" ? <Forum /> : ""}
      {route === "forumTopic" ? <ForumTopic topic={topic} /> : ""}
      {route === "createPost" ? <CreatePost /> : ""}
      {route === "settings" ? <Settings /> : ""}
    </div>
  );
};

export default ActivityContainer;
