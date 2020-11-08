import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

const Content = ({ children }) => <Wrapper>{children}</Wrapper>;

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
