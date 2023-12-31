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
          <p className="friend__quantity">
            Número de pájaros: {friend.parrotsOwned.length}
          </p>
          <p className="friend__fav-quote">
            Cita favorita sobre pájaros: {friend.favBirdQuote}
          </p>
        </div>
      </div>

      <button
        className="button button_type_back"
        onClick={() => history.goBack()}
      ></button>
    </div>
  );
}

export default Friend;
