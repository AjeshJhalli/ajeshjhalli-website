import Layout from "./Layout.tsx";

export default function Projects() {
  return (
    <Layout activePage="projects">
      <PersonalProjects />
      <WorkProjects />
    </Layout>
  );
}

function PersonalProjects() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-10">Personal Projects</h1>
      <div className="ml-10">
        <h1 className="text-2xl font-semibold mb-6">
          Multi-tenant CRUD App
        </h1>
        <p>
          Bigshelf is a multi-tenant CRUD app that stores customer information.
          It was developed using Deno.js, is hosted on Deno Deploy, and uses
          Azure AD B2C for authentication. It uses Deno KV as its database,
          which is a NoSQL key-value database built into the Deno runtime. It
          uses HTMX on the frontend rather than React or other popular frontend
          frameworks, since most of the functionality is CRUD-based, which HTMX
          is better-suited for.
        </p>
        <div className="mt-4 flex gap-x-3">
          <a className="btn btn-primary" href="https://bigshelf.deno.dev">
            Project Website
          </a>
          <a
            className="btn btn-primary"
            href="https://github.com/AjeshJhalli/bigshelf"
          >
            Source Code
          </a>
        </div>
      </div>
    </section>
  );
}

function WorkProjects() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-10 mt-16">Work Projects</h1>
      <div className="ml-10">
        <h1 className="text-2xl font-semibold mb-6">
          TravelPort Smartpoint Plugin
        </h1>
        <div className="flex flex-col gap-y-6">
          <p>
            I worked on a C# plugin for TravelPort Smartpoint. The plugin
            connected to a Microsoft SQL Server database and allowed for
            passenger profile information to be retrieved from the database,
            allowing users to automatically add passenger data into bookings in
            Smartpoint without the need to manually copy information from one
            system to another.
          </p>
          <p>
            One of the features I implemented for this plugin an automatic
            filtering of passengers that showed up in the search results based
            on the company that was already selected for the booking. This
            improved performance and user efficiency.
          </p>
        </div>
        <h1 className="text-2xl font-semibold mb-6 mt-10">
          Travel Agency System
        </h1>
        <p>
          I have added several features and improved existing functionality for
          a travel agency's internal Claris FileMaker system. I developed a PNR
          import process for this system, which imported PNRs from a GDS (global
          distribution system) into the tables in the travel agency's internal
          database, and generated tasks for users where certain business logic
          conditions were met.
        </p>
        <h1 className="text-2xl font-semibold mb-6 mt-10">
          Customer Portal Invoices Module
        </h1>
        <p>
          I built the invoices module for a customer portal written in Next.js.
          I set up a QuickBooks webhook to sync invoices to Azure Table Storage,
          so that they could be retrieved from Azure Table Storage in the
          Next.js app and displayed to users.
        </p>
      </div>
    </section>
  );
}
