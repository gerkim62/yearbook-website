import React from "react";

const Footer = () => {
  return (
    <footer className=" text-center py-4 bg-white border-gray-200 dark:bg-gray-900 shadow">
      <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700" />

      <p className="text-slate-900 dark:text-gray-100">
        &copy; {new Date().getFullYear()} University of Eastern Africa, Baraton
      </p>

      <p className="mt-2 text-sm text-slate-500 dark:text-gray-400">
        Designed by developer.gerison
      </p>
    </footer>
  );
};

export default Footer;
