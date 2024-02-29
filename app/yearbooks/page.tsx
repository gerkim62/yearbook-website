import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Yearbooks = () => {
  const yearbooks = [
    {
      year: 2021,
      url: "https://example.com/yearbook-2021.pdf",
      description:
        "The 2021 UEAB Baraton yearbook captures the memories and achievements of the academic year 2020-2021. It features photos, stories, and information about students, faculty, and events.",
    },
    {
      year: 2022,
      url: "https://example.com/yearbook-2022.pdf",
      description:
        "The 2022 UEAB Baraton yearbook documents the academic year 2021-2022. It highlights student achievements, faculty contributions, and campus events, offering a glimpse into the vibrant life of the university.",
    },
    {
      year: 2023,
      url: "https://example.com/yearbook-2023.pdf",
      description:
        "Relive the moments of the 2022-2023 academic year with the 2023 UEAB Baraton yearbook. Explore photos of student life, academic activities, and special events, and reconnect with the university community.",
    },
  ];

  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 px-4 py-8">
      <h2 className="text-3xl font-bold text-yellow-400 lg:text-center text-left ">
        UEAB Yearbooks Download
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-left mt-4 max-w-5xl mx-auto">
        Welcome to the UEAB Baraton Yearbook archive! Here, you can find and
        download yearbooks from past academic years. Relive your memories,
        reconnect with old friends and classmates, and browse through photos,
        stories, and other information documented in these yearbooks.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-5xl mx-auto">
        {yearbooks.map((yearbook) => (
          <div
            key={yearbook.year}
            className="p-4 bg-slate-200 dark:bg-gray-700 rounded-md shadow flex flex-col items-center"
          >
            <h3 className="text-lg font-bold text-orange-400 uppercase">
              {yearbook.year} Yearbook
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 ">
              {yearbook.description}
            </p>
            <a
              href={yearbook.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300 "
            >
              Download Now<AiOutlineDownload className="ml-2" size={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yearbooks;
