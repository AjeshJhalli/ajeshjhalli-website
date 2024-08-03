import Layout from "./Layout.tsx";

export default function Page404() {
  return (
    <Layout activePage="">
      <div className="flex flex-col gap-y-10 items-center">
        <p className="text-xl">
          The page you were looking for could not be found
        </p>
        <a className="btn btn-secondary px-10" href="/">Go to home</a>
      </div>
    </Layout>
  );
}
