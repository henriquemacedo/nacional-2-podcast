import matter from "gray-matter";

import Layout from "@components/Layout";
import Archive from "@components/Archive";

const Index = ({ title, description, episodes, ...props }) => {
  return (
    <Layout pageTitle={`${title} — Episódios`} description={description}>
      <main>
        <Archive episodes={episodes} />
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
  })(require.context("../episodes", true, /\.md$/));

  return {
    props: {
      episodes: episodes.reverse(),
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
