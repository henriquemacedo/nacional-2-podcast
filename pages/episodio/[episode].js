import matter from "gray-matter";

import Layout from "@components/Layout";
import Episode from "@components/Episode";

export default function BlogPost({
  title,
  description,
  keywords,
  frontmatter,
  markdownBody,
}) {
  if (!frontmatter) return <></>;

  return (
    <Layout
      pageTitle={`${title} | ${frontmatter.title}`}
      pageDescription={description}
      pageKeywords={
        frontmatter.keywords ? `${keywords}, ${frontmatter.keywords}` : keywords
      }
    >
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
  const content = await import(
    `../../episodes/${episode.substring(0, 3)}/${episode}.md`
  );
  const configData = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      keywords: configData.default.keywords,
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
