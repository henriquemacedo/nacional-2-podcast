import Link from "next/link";
import styled from "styled-components";

import Content from "@components/design/content";
import Icon from "@components/design/icon";
import channels from "@utils/channels";

const Wrapper = styled.footer`
  background-color: var(--secondary);
  padding: 5vw;
  color: var(--light);

  p {
    margin-top: 15px;
    max-width: 900px;
  }

  ul {
    max-width: max-content;
    margin-top: 50px;

    li {
      &:not(last-child) {
        margin-bottom: 5px;
      }

      a {
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
          width: auto;
          height: 50px;
        }
      }
    }
  }
`;

const Copyright = styled.div`
  background-color: var(--light);
  padding: 30px 0;
  text-align: center;
`;

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Content>
          <h2>
            Subscreve o<br /> Podcast
          </h2>
          <p>
            Cada novo episódio do Nacional <span>2</span> Podcast entregue
            automaticamente através dos serviços:
          </p>

          <ul>
            {Array.isArray(channels) &&
              channels.length > 0 &&
              channels.map((channel, index) => (
                <li key={index}>
                  <Link href={channel.url} passHref>
                    <a target="_blank">
                      <Icon icon={channel.icon} fill="var(--light)" />{" "}
                      <span>{channel.label}</span>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </Content>
      </Wrapper>
      <Copyright>
        <span>
          {[
            "Copyright ",
            new Date().getFullYear(),
            " © Todos os direitos reservados.",
          ]}
        </span>
      </Copyright>
    </>
  );
}
