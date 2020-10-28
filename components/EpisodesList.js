import Link from "next/link";

export default function EpisodesList({ episodes }) {
  if (episodes === "undefined") return null;

  return (
    <div>
      {!episodes && <div>No episodes!</div>}
      <ul>
        {episodes &&
          episodes.map((episode) => {
            return (
              <li key={episode.slug}>
                <Link href={{ pathname: `/episodio/${episode.slug}` }}>
                  <a>{episode.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
