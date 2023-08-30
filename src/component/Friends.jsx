import React from "react";
import "./friends.css";
import { Link, useRouteMatch } from "react-router-dom/cjs/react-router-dom";

function Friends(props) {
  let { path } = useRouteMatch();
  let { friends } = props.serverData;

  return (
    <div className="friends">
      <ul className="friends__list">
        {friends.map((friend) => {
          return (
            <li className="friend-preview" key={friend.id}>
              <Link to={`${path}/${friend.id}`}>
                <img
                  className="friend-preview__image"
                  src={friend.profilePicDark}
                  alt="PicDark"
                />
                <span className="friend-preview__name"> {friend.name} </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Friends;
