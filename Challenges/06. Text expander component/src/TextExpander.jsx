import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expanded: PropTypes.bool,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  className: PropTypes.string,
};

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expanded = false,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  className = "",
  buttonColor,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const handleBtnClick = () => setIsExpanded((cur) => !cur);
  const shownText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ");
  return (
    <div className={className}>
      <p>{shownText}</p>
      <button onClick={handleBtnClick} style={{ background: buttonColor }}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
