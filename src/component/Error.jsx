import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold lg:text-[#38bb43] lg:text-[15rem]">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight lg:text-[#38bb43] sm:text-5xl lg:mt-[8rem]">
          Page not found
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            class="rounded-md bg-[#38bb43] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3e7242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link to="/" class="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Error;
