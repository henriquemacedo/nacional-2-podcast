import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import Content from "@components/design/content";
import { device } from "@utils/breakpoints";

const Wrapper = styled.div`
  padding: 5vw;

  h3 {
    margin: 20px 0 10px 0;
  }

  span {
    font-size: 1rem;
  }

  a {
    color: var(--secondary);
    transition-duration: 0.3s;

    &:hover {
      color: var(--primary);
    }
  }

  .player {
    margin: 20px 0;
    height: 98px;
  }

  @media ${device.m} {
    h1 {
      margin-bottom: 10px;
    }

    h3 {
      margin: 50px 0 10px 0;
    }

    span {
      font-size: 1.5rem;
    }

    .player {
      margin: 50px 0;
    }
  }

  @media (min-width: 771px) {
    .player {
      height: 161px;
    }
  }
`;

const Episode = ({ title, date, anchor, content }) => (
  <Wrapper>
    <Content>
      <article>
        <h1>{title}</h1>
        <span>{date}</span>
        <div className="player">
          <iframe
            src={`https://anchor.fm/nacional2podcast/embed/episodes/${anchor}`}
            width="100%"
            height="161px"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div>
          <ReactMarkdown source={content} />
        </div>
      </article>
    </Content>
  </Wrapper>
);

export default Episode;
