import styled from "styled-components";
import EpisodesList from "@components/EpisodesList";
import Content from "@components/design/content";

const Wrapper = styled.div`
  padding: 5vw;

  .player {
    display: none;
  }
`;

const Archive = (props) => {
  const { episodes, seasonLinkPath, seasonLinkValue } = props;

  return (
    <Wrapper>
      <Content>
        <EpisodesList
          episodes={episodes}
          seasonLinkPath={seasonLinkPath}
          seasonLinkValue={seasonLinkValue}
        />
      </Content>
    </Wrapper>
  );
};

export default Archive;
