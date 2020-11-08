import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  background-color: var(--primary);
  padding: 2vw 5vw;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  img {
    width: auto;
    min-height: 80px;
    height: 6vw;
    max-height: 150px;
  }

  ul {
    --margin: 2vw;

    margin: 0 0 0 var(--margin);
    padding: 0;
    display: flex;

    li {
      list-style: none;
      position: relative;
      text-transform: uppercase;
      font-weight: var(--extraBold);

      &:not(:last-child) {
        margin-right: var(--margin);
      }

      &.active:after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 10px;
        width: 100%;
        height: 5px;
        background-color: var(--secondary);
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

  return (
    <>
      <Wrapper className="header">
        <Nav>
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
        </Nav>
      </Wrapper>
    </>
  );
}
