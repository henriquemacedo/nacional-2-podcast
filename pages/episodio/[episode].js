import Link from "next/link";
import matter from "gray-matter";

import Layout from "@components/Layout";
import Episode from "@components/Episode";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      {/* <Link href="/episodios">
        <a>👈 Voltar à lista</a>
      </Link> */}
      <Episode
        title={frontmatter.title}
        date={frontmatter.date}
        anchor={frontmatter.anchor}
        content={markdownBody}
      />
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { episode } = ctx.params;

  const content = await import(`../../episodes/${episode}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      return slug;
    });
    return data;
  })(require.context("../../episodes", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/episodio/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
