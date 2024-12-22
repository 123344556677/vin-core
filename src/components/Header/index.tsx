"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { getUser } from "@/app/api/api";
import { UserDetails } from "@/types/auth";
import { FiFileText, FiLogOut, FiSettings } from "react-icons/fi";

const Header = () => {
  // Navbar toggle
  //  const id = localStorage.getItem("id" as string);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState<UserDetails>();
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Access localStorage inside useEffect
        // const id = localStorage.getItem("id");
        // console.log(id,"going id in api")

        const response = await getUser();
        console.log(response, "user response--->")
        setUserData(response?.user);

      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = () => {
    // Clear the token and user details
    localStorage.clear();
    window.location.href = '/';
    // Redirect to sign-in page
    // router.push("/signin");
  };

  console.log(userData, "userData-------->")

  const usePathName = usePathname();

  return (
    <>
      {
        usePathName === '/' ?
          <header
            className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
              ? "bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
              : "absolute bg-transparent"
              }`}
          >
            <div className="container">
              <div className="relative -mx-4 flex items-center justify-between">
                <div className="w-60 max-w-full px-4 xl:mr-12">
                  <Link
                    href="/"
                    className='header-logo block w-full'
                  >
                    <Image
                      src="/images/hero/logo5.png"
                      alt="logo"
                      width={140}
                      height={30}
                      className="w-full"
                    />
                  </Link>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                  <div>
                    <button
                      onClick={navbarToggleHandler}
                      id="navbarToggler"
                      aria-label="Mobile Menu"
                      className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                    >
                      <span
                        className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
                          }`}
                      />
                      <span
                        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-white ${navbarOpen ? "opacity-0 " : " "
                          }`}
                      />
                      <span
                        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                          }`}
                      />
                    </button>
                    <nav
                      id="navbarCollapse"
                      className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 px-6 py-4 duration-300 border-body-color/20 bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                        ? "visibility top-full opacity-100"
                        : "invisible top-[120%] opacity-0"
                        }`}
                    >
                      <ul className="block lg:flex lg:space-x-12">
                        {menuData.map((menuItem, index) => (
                          <li key={index} className="group relative">
                            {menuItem.path ? (
                              <Link
                                href={menuItem.path}
                                className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                                  ? "text-primary dark:text-white"
                                  : "hover:text-primary text-white/70 dark:hover:text-white"
                                  }`}
                              >
                                {menuItem.title}
                              </Link>
                            ) : (
                              <>
                                <p
                                  onClick={() => handleSubmenu(index)}
                                  className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                                >
                                  {menuItem.title}
                                  <span className="pl-3">
                                    <svg width="25" height="24" viewBox="0 0 25 24">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                </p>
                                <div
                                  className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                    }`}
                                >
                                  {menuItem.submenu.map((submenuItem, index) => (
                                    <Link
                                      href={submenuItem.path}
                                      key={index}
                                      className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                    >
                                      {submenuItem.title}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="flex items-center justify-end pr-16 lg:pr-0">
                    {!userData ? (
                      <>
                        <Link
                          href="/signin"
                          className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/signup"
                          className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                        >
                          Sign Up
                        </Link>
                      </>
                    ) : (
                      <div className="relative">
                        <button
                          onClick={handleDropdownToggle}
                          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium border border-blue-500 rounded-lg hover:bg-gray-100"
                        >
                          <span>{userData?.fname}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fill="currentColor"
                              d="M10 12L6 8H14L10 12Z"
                            />
                          </svg>
                        </button>
                        {dropdownOpen && (
                          <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
                            <ul className="py-4">
                              <li className="group py-2">
                                <button
                                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                                  onClick={() => (window.location.href = "/landing")}
                                >
                                  <FiFileText className="mr-2 text-gray-400 group-hover:text-blue-600" />
                                  Report
                                </button>
                                <hr className="border-t border-gray-200" />
                              </li>
                               <li className="group py-2">
                                <button
                                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                                  onClick={() => (window.location.href = "/information")}
                                >
                                  <FiSettings className="mr-2 text-gray-400 group-hover:text-blue-600" />
                                  Settings
                                </button>
                                <hr className="border-t border-gray-200" />
                              </li>
                              <li className="group py-2">
                                <button
                                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                                  onClick={() => handleSignOut()}
                                >
                                  <FiLogOut className="mr-2 text-gray-400 group-hover:text-blue-600" />
                                  Sign Out
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                    <div>
                      <ThemeToggler />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          :
          <header
            className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
              ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
              : "absolute bg-transparent"
              }`}
          >
            <div className="container">
              <div className="relative -mx-4 flex items-center justify-between">
                <div className="w-60 max-w-full px-4 xl:mr-12">
                  <Link
                    href="/"
                    className='header-logo block w-full'
                  >
                    <Image
                      src="/images/hero/logo5.png"
                      alt="logo"
                      width={140}
                      height={30}
                      className="w-full dark:hidden"
                    />
                    <Image
                      src="/images/hero/logo5.png"
                      alt="logo"
                      width={140}
                      height={30}
                      className="hidden w-full dark:block"
                    />
                  </Link>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                  <div>
                    <button
                      onClick={navbarToggleHandler}
                      id="navbarToggler"
                      aria-label="Mobile Menu"
                      className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                    >
                      <span
                        className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
                          }`}
                      />
                      <span
                        className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "
                          }`}
                      />
                      <span
                        className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                          }`}
                      />
                    </button>
                    <nav
                      id="navbarCollapse"
                      className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                        ? "visibility top-full opacity-100"
                        : "invisible top-[120%] opacity-0"
                        }`}
                    >
                      <ul className="block lg:flex lg:space-x-12">
                        {menuData.map((menuItem, index) => (
                          <li key={index} className="group relative">
                            {menuItem.path ? (
                              <Link
                                href={menuItem.path}
                                className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                                  ? "text-primary dark:text-white"
                                  : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                                  }`}
                              >
                                {menuItem.title}
                              </Link>
                            ) : (
                              <>
                                <p
                                  onClick={() => handleSubmenu(index)}
                                  className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                                >
                                  {menuItem.title}
                                  <span className="pl-3">
                                    <svg width="25" height="24" viewBox="0 0 25 24">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                </p>
                                <div
                                  className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                    }`}
                                >
                                  {menuItem.submenu.map((submenuItem, index) => (
                                    <Link
                                      href={submenuItem.path}
                                      key={index}
                                      className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                    >
                                      {submenuItem.title}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="flex items-center justify-end pr-16 lg:pr-0">
                    {!userData ? (
                      <>
                        <Link
                          href="/signin"
                          className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/signup"
                          className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                        >
                          Sign Up
                        </Link>
                      </>
                    ) : (
                      <div className="relative">
                        <button
                          onClick={handleDropdownToggle}
                          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium border border-blue-500 rounded-lg hover:bg-gray-500"
                        >
                          <span>{userData?.fname}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fill="currentColor"
                              d="M10 12L6 8H14L10 12Z"
                            />
                          </svg>
                        </button>
                        {dropdownOpen && (
                          <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
                            <ul className="py-4">
                              <li className="group py-2">
                                <button
                                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                                  onClick={() => (window.location.href = "/landing")}
                                >
                                  <FiFileText className="mr-2 text-gray-400 group-hover:text-blue-600" />
                                  Report
                                </button>
                                <hr className="border-t border-gray-200" />
                              </li>
                               <li className="group py-2">
                                <button
                                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                                  onClick={() => (window.location.href = "/information")}
                                >
                                  <FiSettings className="mr-2 text-gray-400 group-hover:text-blue-600" />
                                  Settings
                                </button>
                                <hr className="border-t border-gray-200" />
                              </li>
                              <li className="group py-2">
                                <button
                                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                                  onClick={() => handleSignOut()}
                                >
                                  <FiLogOut className="mr-2 text-gray-400 group-hover:text-blue-600" />
                                  Sign Out
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                    <div>
                      <ThemeToggler />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
      }
    </>
  );
};

export default Header;
