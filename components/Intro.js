import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "@utils/breakpoints";

import Content from "@components/design/content";

const Wrapper = styled.div`
  background-color: var(--primary);
  padding: 0 5vw 5vw 5vw;
  text-align: center;

  p {
    margin-top: 15px;
    max-width: 900px;
  }

  @media ${device.s} {
    text-align: left;
  }
`;

const Intro = ({ description }) => (
  <Wrapper>
    <Content>
      <h1>
        Nacional <span>2</span>
        <br />
        Podcast
      </h1>
      <p>
        {description}. I'm baby blue bottle sriracha brooklyn banjo synth
        waistcoat lyft activated charcoal cred bespoke taiyaki lumbersexual
        literally beard. Occupy chia meditation keytar.
      </p>
    </Content>
  </Wrapper>
);

Intro.propTypes = {
  description: PropTypes.string,
};

export default Intro;
