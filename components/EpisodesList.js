import styled from "styled-components";

import Link from "next/link";
import Icon from "@components/design/icon";
import { device } from "@utils/breakpoints";

const Wrapper = styled.div`
  h2 {
    position: relative;
    color: var(--secondary);
    cursor: pointer;

    svg {
      position: absolute;
      margin: -4px 0 0 5px;
      width: auto;
      height: 40px;
      fill: var(--secondary);
    }
  }

  ul {
    margin: 10px 0 0 0;
    height: 50px;
    display: flex;

    li {
      width: 50px;
      height: 50px;
      cursor: pointer;

      svg {
        width: auto;
        height: 50px;
      }
    }
  }

  p {
    margin-top: 10px;
  }

  > div {
    .player {
      margin-top: 25px;
      height: 98px;
    }

    &:not(last-child) {
      margin-bottom: 5vw;
    }
  }

  @media ${device.s} {
    h2 {
      svg {
        margin: 2px 0 0 15px;
        height: 50px;
      }
    }
  }

  @media (min-width: 771px) {
    > div {
      .player {
        height: 161px;
      }
    }
  }
`;

export default function EpisodesList({ episodes }) {
  if (episodes === "undefined") return null;

  return (
    <Wrapper>
      {!episodes && <div>No episodes!</div>}
      {episodes &&
        episodes.map((episode) => {
          return (
            <div key={episode.slug}>
              <Link href={{ pathname: `/episodio/${episode.slug}` }}>
                <a>
                  <h2>
                    {episode.frontmatter.title}
                    <Icon icon="arrow-right" />
                  </h2>
                </a>
              </Link>

              <span>{episode.frontmatter.date}</span>

              <ul>
                {episode.frontmatter.spotify && (
                  <li>
                    <Link href={episode.frontmatter.spotify}>
                      <Icon icon="spotify" />
                    </Link>
                  </li>
                )}
                {episode.frontmatter.apple && (
                  <li>
                    <Link href={episode.frontmatter.apple}>
                      <Icon icon="apple" />
                    </Link>
                  </li>
                )}

                {episode.frontmatter.google && (
                  <li>
                    <Link href={episode.frontmatter.google}>
                      <Icon icon="google" />
                    </Link>
                  </li>
                )}
                {episode.frontmatter.youtube && (
                  <li>
                    <Link href={episode.frontmatter.youtube}>
                      <Icon icon="youtube" />
                    </Link>
                  </li>
                )}
              </ul>

              <p>{episode.frontmatter.subject}</p>

              {episode.frontmatter.anchor && (
                <div className="player">
                  <iframe
                    src={`https://anchor.fm/nacional2podcast/embed/episodes/${episode.frontmatter.anchor}`}
                    width="100%"
                    height="161px"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
              )}
            </div>
          );
        })}
    </Wrapper>
  );
}
