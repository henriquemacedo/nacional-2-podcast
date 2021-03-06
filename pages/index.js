import matter from "gray-matter";

import Layout from "@components/Layout";
import Intro from "@components/Intro";
import EpisodesLast from "@components/EpisodesLast";

const Index = ({ title, description, keywords, episodes, ...props }) => {
  return (
    <Layout
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
    >
      <Intro description={description} />
      <main>
        <EpisodesLast episodes={episodes} />
      </main>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const episodes = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../episodes/s02", true, /\.md$/));

  return {
    props: {
      episodes: episodes.slice(Math.max(episodes.length - 3, 0)).reverse(),
      title: configData.default.title,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
}
