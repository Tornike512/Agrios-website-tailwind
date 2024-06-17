import { v4 as uuidv4 } from "uuid";

export function Navigation() {
  const headerNavigation = [
    { nav: "Home" },
    { nav: "About" },
    { nav: "Services" },
    { nav: "Projects" },
    { nav: "News" },
    { nav: "Shop" },
    { nav: "Contact" },
  ];

  return (
    <section>
      <nav>
        {headerNavigation.map((nav) => {
          return (
            <a key={uuidv4()} href="#">
              {nav.nav}
            </a>
          );
        })}
      </nav>
      <nav>
        <img src="" alt="Search Logo" />
        <img src="" alt="Cart Logo" />
      </nav>
    </section>
  );
}

export default Navigation;
