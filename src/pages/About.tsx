import Layout from "./Layout.tsx";

export default function About() {
  return (
    <Layout activePage="about">
      <h1 className="text-2xl font-semibold mb-6">About Me</h1>
      <p>
        I am a fullstack software engineer who specialises in web development
        and relational databases.
      </p>
    </Layout>
  );
}
