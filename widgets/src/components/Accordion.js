import React from "react";
import { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((i, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={i.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"> </i>
          {i.title}
        </div>
        <div className={`content ${active}`}>
          <p>{i.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
