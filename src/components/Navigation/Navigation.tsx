import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import searchIcon from "/src/assets/search-icon.svg";
import cartIcon from "/src/assets/cart-icon.svg";

export function Navigation() {
  const [navigation, setNavigation] = useState<string>("");

  const navigate = useNavigate();

  const headerNavigation = [
    { nav: "Home" },
    { nav: "About" },
    { nav: "Services" },
    { nav: "Projects" },
    { nav: "Shop" },
    { nav: "Contact" },
  ];

  const handleNavigation = (page: string) => {
    setNavigation(page);

    if (page !== "Home") {
      navigate(`/${page}`);
    } else if (page === "Home") {
      navigate("/");
    }
  };

  console.log(navigation);

  return (
    <nav className="h-[80px] w-full bg-[#F4F4F3] flex items-center justify-center">
      <ul className="max-w-[1200px] w-full flex justify-between items-center md:justify-normal">
        <li className="w-full max-w-[800px] px-[35px] py-0; flex justify-between md:overflow-x-scroll">
          {headerNavigation.map((nav) => {
            return (
              <a
                className="text-[#878680] text-base cursor-pointer hover:text-[#000000] md:mr-[40px]"
                key={uuidv4()}
                onClick={() => {
                  handleNavigation(nav.nav);
                }}
              >
                {nav.nav}
              </a>
            );
          })}
        </li>
        <li className="flex justify-center items-center pl-[20px] pr-[35px] border-l-2 lborder-solid border-[#E4E2D7] cursor-pointer md:hidden">
          <img src={searchIcon} alt="Search Logo" />
          <img src={cartIcon} alt="Cart Logo" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
