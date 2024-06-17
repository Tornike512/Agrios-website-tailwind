import { v4 as uuidv4 } from "uuid";

import searchIcon from "/src/assets/search-icon.svg";
import cartIcon from "/src/assets/cart-icon.svg";

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
    <nav className="h-[80px] w-full bg-[#F4F4F3] flex items-center justify-center">
      <ul className="max-w-[1200px] w-full flex justify-between items-center">
        <li className="w-full max-w-[800px] px-[35px] py-0; flex justify-between">
          {headerNavigation.map((nav) => {
            return (
              <a
                className="text-[#878680] text-base cursor-pointer hover:text-[#000000]"
                key={uuidv4()}
                href="#"
              >
                {nav.nav}
              </a>
            );
          })}
        </li>
        <li className="flex justify-center items-center pl-[20px] border-l-2 lborder-solid border-[#E4E2D7] cursor-pointer">
          <img src={searchIcon} alt="Search Logo" />
          <img src={cartIcon} alt="Cart Logo" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
