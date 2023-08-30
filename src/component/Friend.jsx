import React from "react";
import "./friend.css";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";

function Friend(props) {
  let { id } = useParams();
  const history = useHistory();
  let { friends } = props.serverData;
  const friend = friends.find((f) => f.id === id);

  return (
    <div className="friend">
      <div className="friend__card">
        <img
          className="friend__userpic"
          src={friend.profilePicLight}
          alt={friend.name}
        />
        <div className="friend__details">
          <h3 className="friend__name"> {friend.name} </h3>
          <p className="friend__location"> Location: {friend.location} </p>
        </div>
      </div>
    </div>
  );
}

export default Friend;
