"use client";

import React, { useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

const UploadYearbook = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("This functionality is not yet available.");
  };

  return (
    <div className="dark:bg-slate-900 dark:text-gray-100">
      <div className="container mx-auto max-w-lg dark:bg-slate-900 dark:text-gray-100 px-4 py-4">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mt-4">
          Upload Yearbook
        </h2>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-1 gap-4">
            <label
              htmlFor="file"
              className="text-gray-700 dark:text-gray-300 font-bold flex items-center"
            >
              <AiOutlineFilePdf className="mr-2" /> Select PDF file:
            </label>
            <input
              type="file"
              id="file"
              className="p-2 rounded-md border border-slate-300 dark:border-slate-700 focus:border-yellow-400 focus:outline-none dark:bg-gray-800"
              required
            />
            <label
              htmlFor="year"
              className="text-gray-700 dark:text-gray-300 font-bold"
            >
              Year:
            </label>
            <input
              type="number"
              id="year"
              className="p-2 rounded-md border border-slate-300 dark:border-slate-700 focus:border-yellow-400 focus:outline-none dark:bg-gray-800"
              required
            />
            <label
              htmlFor="description"
              className="text-gray-700 dark:text-gray-300 font-bold"
            >
              Description:
            </label>
            <textarea
              id="description"
              className="p-2 rounded-md border border-slate-300 dark:border-slate-700 focus:border-yellow-400 focus:outline-none resize-none dark:bg-gray-800"
              rows={5}
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
            >
              Upload Yearbook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadYearbook;
