import { useLocation } from "react-router-dom";
import { track } from "../utils/analytics.js";

function TrackedContactLink({ eventName, tracking = {}, onClick, ...props }) {
  const { pathname } = useLocation();

  function handleClick(event) {
    track(eventName, { route: pathname, ...tracking });
    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}

export default TrackedContactLink;
