// REACT DEPENDENCIES
import React from "react";

// STYLES DEPENDENCIES
import "./index.scss";

type PrimarySubProps = {
  children: string;
};

export const PrimaySub = ({ children }: PrimarySubProps): JSX.Element => {
  const textArray = children.split(" ");

  function handleHover(
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ): void {
    const eventTarget = e.target as HTMLDivElement;
    const eventTargetParent = eventTarget.parentNode as HTMLDivElement;
    if (eventTarget.classList.contains("primary-sub__top")) {
      eventTargetParent.classList.add("primary-sub__word--active");
      window.setTimeout(() => {
        eventTargetParent.classList.remove("primary-sub__word--active");
      }, 2000);
    }
  }

  return (
    <sub className="primary-sub">
      {textArray.map((word) => (
        <div className="primary-sub__word" key={word} onMouseOver={handleHover}>
          <div className="primary-sub__top">{word}</div>
          <div className="primary-sub__bottom">{word}</div>
        </div>
      ))}
    </sub>
  );
};
