import React from "react";
import { AiFillBook, AiOutlineUser } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-yellow-400">
              University of Eastern Africa, Baraton Yearbooks
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              A yearbook is a commemorative publication that captures the
              memories and achievements of a school or university community for
              a specific academic year. It typically includes photos, stories,
              and other information about students, faculty, and events.
            </p>
            <a
              href="/yearbooks"
              className="inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 mt-4"
            >
              Explore Yearbooks <FaArrowRight className="ml-2" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <AiFillBook
              size={100}
              className="text-yellow-400 md:block hidden"
            />
          </div>
        </div>

        {/* Added section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-200 dark:bg-gray-700 rounded-md shadow">
            <h3 className="text-lg font-bold text-orange-400 uppercase">
              Relive Memories
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Browse through past yearbooks and reminisce about your time at
              UEAB Baraton. Find photos of your classmates, professors, and
              favorite events.
            </p>
            <a
              href="/yearbooks"
              className="inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md transicion-colors duration-300 mt-10 "
            >
              Explore Yearbooks <FaArrowRight className="ml-2" />
            </a>
          </div>
          <div className="p-4 bg-slate-200 dark:bg-gray-700 rounded-md shadow">
            <h3 className="text-lg font-bold text-orange-400 uppercase">
              Connect with Alumni
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Yearbooks can be a great way to reconnect with old friends and
              classmates. Use the information in the yearbooks to reach out and
              catch up on each other&apos;s lives.
            </p>
            <a
              href="/yearbooks"
              className="inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 mt-4 "
            >
              Explore Yearbooks <FaArrowRight className="ml-2" />
            </a>
            <AiOutlineUser
              className="text-orange-400 float-right mt-2"
              size={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

// import React from 'react';
// import { AiFillBook } from 'react-icons/ai';

// const LandingPage = () => {
//   return (
//     <div className="dark:bg-slate-900 dark:text-gray-100">
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-8 md:mb-0">
//             <h1 className="text-4xl font-bold text-yellow-400">
//               UEAB Baraton Yearbooks
//             </h1>
//             <p className="text-gray-700 dark:text-gray-300 mt-4">
//               A yearbook is a commemorative publication that captures the memories
//               and achievements of a school or university community for a specific
//               academic year. It typically includes photos, stories, and other
//               information about students, faculty, and events.
//             </p>
//             <button
//               className="mt-4 bg-orange-400 text-white font-bold py-2 px-4 rounded-md shadow hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
//             >
//               Explore Yearbooks
//             </button>
//           </div>
//           <div className="flex items-center justify-center">
//             <AiFillBook size={100} className="text-yellow-400" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const LandingPage = () => {
//   return (
//     <div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex justify-center items-center">
//       <div className="max-w-xl p-8 bg-white dark:bg-slate-900 shadow-lg rounded-lg">
//         <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
//           What is a Yearbook?
//         </h1>
//         <p className="text-gray-700 dark:text-gray-300 mb-6">
//           A yearbook is a book published annually by an educational institution,
//           typically a school or college, that serves as a record and keepsake of
//           the events, activities, achievements, and personalities of that
//           institution over the course of the academic year.
//         </p>
// <a
//   href="/yearbooks"
//   className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
// >
//   Explore Yearbooks <FaArrowRight className="ml-2" />
// </a>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
