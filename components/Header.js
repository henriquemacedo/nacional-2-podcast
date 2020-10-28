import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a>Início</a>
          </Link>{" "}
          -{" "}
          <Link href="/episodios">
            <a>Episódios</a>
          </Link>{" "}
          -{" "}
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </nav>
      </header>
    </>
  );
}
