import { useState } from "react";

function XFollowCard({ userNameX, name, userNameGithub, children }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "x-followCard-button is-following"
    : "x-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="x-followCard">
      <header className="x-followCard-header">
        <img
          className="x-followCard-avatar"
          src={`https://unavatar.io/github/${userNameGithub}`}
          alt="Avatar de chirii"
        />
        <div className="x-followCard-info">
          <strong>{name || children}</strong>
          <span className="x-followCard-infoUserName">{`@${userNameX}`}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="x-followCard-text">{text}</span>
          <span className="x-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

export default XFollowCard;
