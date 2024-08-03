import Navbar from "./Navbar.jsx";

export default function Layout({ children, activePage }: { children: any; activePage: string }) {
  return (
    <html>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <meta name="viewport" content="width=300, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Ajesh Jhalli</title>
      </head>
      <body className="flex flex-col bg-base-200 items-center" data-theme="cyberpunk">
        <Navbar activePage={activePage} />
        <main className="h-full p-10 lg:p-20 max-w-[1000px]">
          {children}
        </main>
      </body>
    </html>
  );
}
