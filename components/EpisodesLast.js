import styled from "styled-components";

import EpisodesList from "@components/EpisodesList";
import Content from "@components/design/content";

const Wrapper = styled.div`
  padding: 5vw;

  > div > h2 {
    margin-bottom: 2.5vw;

    + div {
      ul {
        display: none;
      }
    }
  }
`;

function EpisodesLast({ episodes }) {
  return (
    <Wrapper>
      <Content>
        <h2>
          Últimos
          <br />
          Episódios
        </h2>
        <EpisodesList
          episodes={episodes}
          seasonLinkPath="episodios/s02"
          seasonLinkValue="Ver mais"
        />
      </Content>
    </Wrapper>
  );
}

export default EpisodesLast;
