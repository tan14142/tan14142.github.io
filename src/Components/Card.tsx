import React from "react";

interface Card {
  image: {
    alt: string,
    src: string
  },
  col: string,
  title: string,
  content: string,
  reveal: string,
  fab?: () => void,
  fabIcon: string
}

export default function Card({ image: {alt, src}, col, title, content, reveal, fab, fabIcon }: Card) {
  return (
    <div className={"col " + col}>
      <div className="card">
        <div className="card-image waves-effect waves-block">
          <img alt={alt} className="activator" src={src.substr(0, 5) === "https"
            ? src
            : "https" + src.substr(4)
          } />
        </div>
        <div className="card-content" style={{
          height: "10rem",
          position: "relative"
        }}>
          <button
          className="btn-react btn-floating halfway-fab waves-effect red"
          onClick={fab}
          style={{
            position: "absolute",
            top: "-1.33rem",
            right: "2rem"
          }}>
            <i className="material-icons">{fabIcon}</i>
          </button>
          <span className="card-title activator grey-text text-darken-4">
            {title}
          </span>
          <p style={{
            bottom: "1rem",
            position: "absolute"
          }}>{content}</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {title}
            <i className="material-icons right">close</i>
          </span>
          <p>{reveal}</p>
        </div>
      </div>
    </div>
  );
};