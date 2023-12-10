/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */

const FOOTERFORM = () => {
  return (
    <>
      <div>
        <form className="mx-auto w-full ">
          <div className="mb-5 mr-5">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-card-color   footerFrm focus:outline-none
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com  "
              required
            />
          </div>
          <div className=" flex w-full">
            <div className="mb-5 w-1/2">
              <label
                htmlFor="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-card-color   footerFrm focus:outline-none
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5 ml-5  w-1/2 mr-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                phone Number
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-card-color   footerFrm focus:outline-none 
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
          </div>
          <div className="mb-5 mr-6">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Message
            </label>
            <input
              type="email"
              aria-braillelabel="br"
              id="email"
              className="shadow-sm text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-card-color   footerFrm focus:outline-none
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light  "
              required
            />
          </div>
          <div className="mb-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Are You Sure
            </label>
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
          <br /> <br />
          {/* Closing div was here, removed it */}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sumbit Now
          </button>
        </form>
      </div>
    </>
  );
};

export default FOOTERFORM;
