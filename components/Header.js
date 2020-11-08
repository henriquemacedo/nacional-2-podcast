import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

import Icon from "@components/design/icon";
import { device } from "@utils/breakpoints";

const Wrapper = styled.div`
  background-color: var(--primary);
  padding: 5vw;

  @media ${device.s} {
    padding: 2vw 5vw;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 15px;
    width: auto;
    min-height: 80px;
    height: 6vw;
    max-height: 150px;
  }

  ul {
    --margin: 3vw;

    margin: 0;
    padding: 0;
    display: flex;

    li {
      list-style: none;
      position: relative;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: var(--extraBold);

      &:not(:last-child) {
        margin-right: var(--margin);
      }

      &.active:after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: var(--secondary);
      }
    }
  }

  @media ${device.s} {
    margin: 0;
    flex-direction: row;

    ul {
      margin: 0 0 0 var(--margin);
    }
  }
`;

const Channels = styled.div`
  display: none;

  @media ${device.s} {
    --margin: 2vw;

    display: flex;
    align-items: center;

    ul {
      margin: 0;
      padding: 0;
      display: flex;

      li {
        list-style: none;
        font-size: 1rem;

        &.active:after {
          left: 10px;
        }

        svg {
          width: auto;
          height: 50px;
        }
      }
    }
  }
`;

export default function Header() {
  const router = useRouter();

  const menu = [
    {
      label: "Início",
      url: "/",
    },
    {
      label: "Episódios",
      url: "/episodios",
    },
    {
      label: "Sobre",
      url: "/sobre",
    },
  ];

  const n2Channels = [
    {
      icon: "spotify",
      url: "#0",
    },
    {
      icon: "apple",
      url: "#0",
    },
    {
      icon: "google",
      url: "#0",
    },
    {
      icon: "youtube",
      url: "#0",
    },
    {
      icon: "rss",
      url: "#0",
    },
  ];

  return (
    <Wrapper>
      <Nav>
        <Menu>
          <img src="/n2-logo.svg" alt="Nacional 2" />
          <ul>
            {menu.map((item, index) => (
              <li
                key={index}
                className={router.pathname == item.url ? "active" : ""}
              >
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </Menu>

        <Channels>
          <ul>
            {n2Channels.map((channel, index) => (
              <li key={index}>
                <Link href={channel.url}>
                  <Icon icon={channel.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </Channels>
      </Nav>
    </Wrapper>
  );
}
