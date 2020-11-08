import React from "react";
import PropTypes from "prop-types";

import icons from "@utils/icons";

const Icon = (props) => (
  <svg viewBox="0 0 32 32">
    <path style={{ fill: props.fill }} d={icons[props.icon]} />
  </svg>
);

Icon.defaulProps = {
  fill: "#2C2C2C",
};

Icon.propTypes = {
  fill: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default Icon;
