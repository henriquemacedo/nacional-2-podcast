import styled from "styled-components";

import EpisodesList from "@components/EpisodesList";
import Content from "@components/design/content";

const Wrapper = styled.div`
  padding: 5vw;

  .player {
    display: none;
  }
`;

const Archive = ({ episodes }) => (
  <Wrapper>
    <Content>
      <EpisodesList episodes={episodes} />
    </Content>
  </Wrapper>
);

export default Archive;
