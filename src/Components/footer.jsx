const Footer = () => {
  return (
    //   This component comes with some `rtl` classNamees. Please remove them if they are not needed in your project.
    <>
      <footer className=" text-white footercolor  p-2  h-[60vh]">
        <div className="mt-0 grid grid-cols-1 gap-8  pt-16 md:grid-cols-4 lg:grid-cols-6  ml-7  font-bold ">
          <img
            src="https://s3-alpha-sig.figma.com/img/1606/8167/ee566bf94b0dd63cc4974bb219812a44?Expires=1702857600&Signature=KgU0RKAoS5Z~22KE0uR3CO-A2Zwb8Je4VbXDh7lLEqpMOtxqQnjp8UZ6RJHZfHF1yCLJ1bRyGM9X1rh85Iai2m6-Ov7MDhVyZ76YnV6Iwbxf3SBDBumE9LIP0g800J8zbCrL6Gx59cVv4dcJQXNoy7Cno4nKanG~jjy-68Z4FxRqt-2KzC-4QI21gZRns8fik7HjBYn8rm9w-A0GeTuWbZcXdcwCfi9yFJDQRKpY4-jbkI2EgFEUMvg~Kuuls3nCGtMM2Y2P0m2jVr~n7ghbxyVQiWVUgQmpYevq1a9d6taMMeAHl~e9P7IzhMBK0SyQGv5hScW-on3Y5MJG8L8KUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            width={110}
            className=" ml-7"
          />
          <div className="text-center sm:text-left  ">
            <p className="text-lg font-medium ">Company</p>

            <ul className="mt-8 space-y-4 text-sm ">
              <li>
                <a className=" transition hover:text-gray-700/75" href="/">
                  About Us
                </a>
              </li>

              <li>
                <a className=" hover:text-gray-700/75" href="/">
                  {" "}
                  {/* {" "} */}
                  Service
                </a>
              </li>

              <li>
                <a className=" transition hover:text-gray-700/75" href="/">
                  {" "}
                  Cources
                </a>
              </li>

              <li>
                <a className=" transition hover:text-gray-700/75" href="/">
                  {" "}
                  Contact Us{""}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium "> Services</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className=" transition hover:text-gray-700/75" href="/">
                  Web Development
                </a>
              </li>

              <li>
                <a className="transition hover:text-gray-700/75" href="/">
                  {" "}
                  Performing Marketing{" "}
                </a>
              </li>

              <li>
                <a className="transition hover:text-gray-700/75" href="/">
                  {" "}
                  Scocial Media Marketing
                </a>
              </li>

              <li>
                <a className="transition hover:text-gray-700/75" href="/">
                  {" "}
                  App devlopement{" "}
                </a>
              </li>
              <li>
                <a className=" transition hover:text-gray-700/75" href="/">
                  {" "}
                  Graphics Design{" "}
                </a>
              </li>
              <li>
                <a className=" transition hover:text-gray-700/75" href="/">
                  {" "}
                  UI/UX Design{" "}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Email Us</p>

              <ul className="mt-1  text-sm">
                <li>
                  <a className=" transition hover:text-gray-700/75" href="/">
                    {" "}
                    Ricoz1234@gmail.com{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium mt-4 "> Contact Us </p>

              <ul className="mt-1 space-y-4 text-sm">
                <li>
                  <a className=" transition hover:text-gray-700/75" href="/">
                    {" "}
                    +91 9098885099{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
            <p className="text-lg font-medium ">SUBSCRIBE TO NEWSLETTER</p>

            <div className="mx-auto mt-8 max-w-md sm:ms-0">
              <form className="mt-4">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    className="w-full rounded-full border-gray-200 px-6 py-3 shadow-sm"
                    type="email"
                    placeholder="Enter your email"
                  />

                  <button
                    className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                    type="submit"
                  >
                    →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
        <hr className=" mt-8" />
        <footer className="  text-white p-4 text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
      </footer>
    </>
  );
};
export default Footer;
