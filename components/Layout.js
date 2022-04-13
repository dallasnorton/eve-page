import React, { useState } from 'react';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState();
  const [linkName, setLinkName] = useState('Go');
  const [branch, setBranch] = useState('');
  const [dest, setDest] = useState('');
  const [repo, setRepo] = useState('');

  const onClick = async () => {
    try {
      setIsLoading(true);
      console.log({ branch }, { dest }, { repo });

      const resp = await fetch('/eve/api/v1/pull', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ branch, dest: `/unitapps/app/${dest}`, repo }),
      });

      const data = await resp.json();
      console.log({ data });

      setLinkName(branch);
      setLink(`${repo}/unitapps/app/${dest}/${branch}`);
      setIsLoading(false);
    } catch (error) {
      console.warn(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black">
        <div className="my-8 p-4 text-black">
          <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
            <div className="flex flex-col items-center pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
              <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
                Eve Console
              </h2>
              <div className="mb-4 flex w-full">
                <div className="mr-4 flex-1">
                  <label
                    htmlFor="branch"
                    className="text-md block font-medium text-gray-700"
                  >
                    Branch
                  </label>
                  <input
                    type="text"
                    name="branch"
                    id="branch"
                    onChange={(e) => setBranch(e.target.value)}
                    className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="dest"
                    className="text-md block font-medium text-gray-700"
                  >
                    Dest
                  </label>
                  <input
                    type="text"
                    name="dest"
                    id="dest"
                    onChange={(e) => setDest(e.target.value)}
                    className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="repo"
                  className="text-md block font-medium text-gray-700"
                >
                  Repo
                </label>
                <input
                  type="text"
                  name="repo"
                  id="repo"
                  onChange={(e) => setRepo(e.target.value)}
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                  onClick={onClick}
                >
                  Deploy
                </button>
                {isLoading && (
                  <svg
                    className="ml-3 h-5 w-5 animate-spin text-blue-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {link && (
                  <a
                    href={link}
                    className="
                  ml-3
                  flex
                  items-center
                  justify-center
                  text-base
                  font-bold
                  text-blue-700
                  underline
                  hover:text-blue-500
                "
                  >
                    {linkName}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <div className="w-4/7 pr-12 lg:w-2/5">
              <img
                src="images/action.jpeg"
                className="hidden object-cover object-center lg:inline-block"
                alt="image"
              />
              <img
                src="images/action.jpeg"
                className="inline-block object-cover object-center lg:hidden"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
          <div className="lg:w-3/6">
            <h2 className="inline-block max-w-xl text-3xl font-bold leading-none text-black lg:text-[4.2em]">
              EVE
            </h2>

            <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
              Serverless compute with Unit on Volterra
            </p>
          </div>
          <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
            <img src="images/eve.jpeg" alt="Hero" />
          </div>
          <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
            <img src="images/eve.jpeg" alt="image" />
          </div>
        </div>
        <div className="mt-0 bg-white">
          <div className="mx-auto">
            <div className="mx-auto px-5 py-12 lg:px-12">
              <div className="my-10 flex w-full flex-col text-center">
                <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                  Explore a serverless service using nginx unit and volterra
                  with a facade API to facilitate serverless deployment.
                </h2>
              </div>
              <div
                className="
                grid grid-cols-2
                gap-16
                text-center
                lg:grid-cols-4"
              >
                <div className="hidden items-center justify-center text-xl lg:inline-block">
                  Scott Van Kalken
                </div>
                <div className="hidden items-center justify-center text-xl lg:inline-block">
                  Mudit Tyagi
                </div>
                <div className="hidden items-center justify-center text-xl lg:inline-block">
                  Shain Singh
                </div>
                <div className="hidden items-center justify-center text-xl lg:inline-block">
                  Time Stark
                </div>
              </div>
              <div className="my-12 flex w-full flex-col pl-8 text-center">
                <a
                  href="https://f5.sharepoint.com/sites/InnovateF5/SitePages/Project-Akira.aspx"
                  className="
                  underline-blue
                  mb-8
                  mt-6
                  text-xl
                  font-bold
                  text-black
                "
                >
                  Project Eve
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-black">
          <div className="mx-auto flex flex-col items-center px-5 pt-10 lg:flex-row">
            <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
              <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                Rationale
              </h2>
              <div className="font-3xl mb-8 font-semibold leading-relaxed">
                <ul>
                  <li>
                    Provide developers an option to focus on deploying
                    applications rather than managing infrastructure.
                  </li>
                  <li>
                    ​Remove the need for image build / push / deploy time lag
                    when using kubernetes or knative.
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-full lg:max-w-2xl">
              <img src="images/rationale.jpeg" alt="img" />
            </div>
          </div>
          <div className="mt-10">
            <div className="mx-auto flex flex-col px-5 py-24 text-left lg:flex-row">
              <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
                <img src="images/explore.jpeg" alt="img" />
              </div>
              <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
                <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                  Technical Exploration
                </h2>
                <div className="mb-8 font-semibold leading-relaxed text-black">
                  <ul>
                    <li>
                      ​Provide Instant rolling over of applications the app is
                      deployed and the service (unit backed) is reconfigured.
                    </li>
                    <li>
                      ​No changes to developer&#39;s code (i.e. no messing with
                      entrypoints and other “infra” stuff (that developers do
                      not care about)
                    </li>
                    <li>
                      ​Multi site deployment of serverless code (underlying tech
                      is volterra vk8s).
                    </li>
                  </ul>
                </div>
              </div>
              <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
                <img src="images/explore.jpeg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
