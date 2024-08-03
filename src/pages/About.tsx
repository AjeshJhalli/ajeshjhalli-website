import Layout from "./Layout.tsx";

export default function About() {
  return (
    <Layout activePage="about">
      <h1 className="text-2xl font-semibold mb-6">About Me</h1>
      <div className="flex flex-col gap-y-6">
        <p>
          Hi, I'm Ajesh, a passionate software engineer specialising in web
          development. I excel at creating dynamic, user-friendly applications
          and possess a strong proficiency in relational database design and
          management.
        </p>
        <h1 className="text-2xl font-semibold">Professional Background</h1>
        <Timeline />
        <p>
          With several years of experience in the software industry, I have
          honed my skills in a wide range of technologies and frameworks. My
          primary focus is on web development, where I leverage tools like
          Next.js, React, and Node.js to create seamless, interactive user
          experiences and robust, scalable backend systems. Additionally, I have
          extensive experience integrating systems with Microsoft Azure
          services, including Azure AD B2C and Azure App Services, to enhance
          security and scalability.
        </p>
        <p>
          One of my standout skills is my expertise in relational databases. I
          have significant experience with Claris FileMaker, which has given me
          a deep understanding of database design and management. While
          FileMaker might not be as widely recognised, the principles and
          techniques I've mastered are universally applicable to other database
          technologies.
        </p>
      </div>
    </Layout>
  );
}

function Timeline() {
  const items = [
    {
      time: "Sept 2024",
      text: "Apprentice Software Engineer at MaJic Solutions Ltd",
    },
    {
      time: "Feb 2024",
      text: "Software Engineer at MaJic Solutions Ltd",
    },
  ];

  return (
    <ul className="timeline timeline-vertical">
      {items.map((item, index) => (
        <li>
          {index !== 0 && <hr />}
          <time className="timeline-start">{item.time}</time>
          <div className="timeline-middle">
            <Point />
          </div>
          <div className="timeline-end timeline-box">
            {item.text}
          </div>
          {index !== items.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
}

function Point() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
