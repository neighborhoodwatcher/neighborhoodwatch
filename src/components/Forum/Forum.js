import React, { useContext } from "react";

import UserContext from "../../context/userContext";
import "./Forum.scss";

const Forum = () => {
  const userContext = useContext(UserContext);
  const { setRoute } = userContext;

  return (
    <div className="forum__container">
      <div className="forum__container--top">
        <div className="forum__header">
          <div>
            <span className="forum__header--title">Forums</span>
          </div>
          <button
            className="forum__header--button"
            onClick={() => setRoute("createPost")}
          >
            Create a Post
          </button>
        </div>
      </div>

      <div className="forum__container--bottom">
        <div className="forum__overview">
          <div className="forum__overview--topic">
            <h3 className="forum__overview--header">#General</h3>
            <hr className="forum__overview--line" />
            <div className="forum__overview--post">this is a post</div>
            <div className="forum__overview--post">
              this should be its own component
            </div>
            <div className="forum__overview--post">another post</div>
          </div>
          <div className="forum__overview--topic">
            <h3 className="forum__overview--header">#Music</h3>
            <hr className="forum__overview--line" />
            <div className="forum__overview--post">this is a post</div>
            <div className="forum__overview--post">
              this should be its own component
            </div>
            <div className="forum__overview--post">another post</div>
          </div>
          <div className="forum__overview--topic">
            <h3 className="forum__overview--header">#Recreational</h3>
            <hr className="forum__overview--line" />
            <div className="forum__overview--post">this is a post</div>
            <div className="forum__overview--post">
              this should be its own component
            </div>
            <div className="forum__overview--post">another post</div>
          </div>
          <div className="forum__overview--topic">
            <h3 className="forum__overview--header">#Fitness</h3>
            <hr className="forum__overview--line" />
            <div className="forum__overview--post">this is a post</div>
            <div className="forum__overview--post">
              this should be its own component
            </div>
            <div className="forum__overview--post">another post</div>
          </div>
        </div>
        <div className="forum__topicList">
          <h3 className="forum__topicList--header">Topic List</h3>
          <hr className="forum__topicList--line" />
          <div className="forum__topicList--topic">
            <h3>#General</h3>
            <h3>#Music</h3>
            <h3>#Recreational</h3>
            <h3>#Fitness</h3>
            <h3>#Tech</h3>
            <h3>#Other</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
