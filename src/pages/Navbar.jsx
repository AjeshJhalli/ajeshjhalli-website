import classNames from "https://deno.land/x/classnames@0.1.1/index.ts";

export default function Navbar({ activePage }) {
  return (
    <nav className="navbar">
      <ul className="menu menu-horizontal flex w-full justify-center">
        <NavLinks activePage={activePage} />
      </ul>
    </nav>
  );
}

function NavLinks({ activePage }) {
  const links = [
    {
      name: "home",
      displayName: "Home",
      href: "/home",
    },
    {
      name: "about",
      displayName: "About Me",
      href: "/about",
    },
    {
      name: "projects",
      displayName: "Projects",
      href: "/projects",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <li>
          <a
            className={classNames("min-w-24 flex items-center justify-center", {
              active: activePage === link.name,
            })}
            href={link.href}
          >
            {link.displayName}
          </a>
        </li>
      ))}
    </>
  );
}
