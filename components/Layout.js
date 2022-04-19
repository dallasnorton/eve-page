import React, { useState, useEffect } from 'react';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Loading from './Loading';
import Logos from './Logos';
import dynamic from 'next/dynamic';

const ReactJson = dynamic(
  () => {
    return import('react-json-view');
  },
  { ssr: false }
);

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverInfo, setServerInfo] = useState();
  const [links, setLinks] = useState([]);
  const [branch, setBranch] = useState('');
  const [repo, setRepo] = useState('');

  useEffect(() => {
    const fetchInfo = async () => {
      const infoRes = await fetch('/eve/api/v1/info');
      const infoData = await infoRes.json();
      setServerInfo(infoData);
    };

    fetchInfo();
  }, []);

  const onClick = async () => {
    try {
      setIsLoading(true);
      setLinks([...links, { ref: `/${branch}/out`, name: branch }]);

      const resp = await fetch('/eve/api/v1/pull', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ branch, dest: `/unitapps/app/${branch}`, repo }),
      });

      const data = await resp.json();
      console.log({ data });

      const infoRes = await fetch('/eve/api/v1/info');
      const infoData = await infoRes.json();
      setServerInfo(infoData);

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
          <div className="max-w-9xl mx-auto flex flex-col items-start bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
            <div className="flex flex-col items-center pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
              <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
                Eve Console
              </h2>
              <div className="mb-4 flex w-full">
                <div className="flex-1">
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
                    placeholder="main, master, dev, ..."
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
                  htmlFor="Repository"
                  className="text-md block font-medium text-gray-700"
                >
                  Repository
                </label>
                <input
                  type="text"
                  name="Repository"
                  id="Repository"
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
              <div className="flex">
                <button
                  className="h-10 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                  onClick={onClick}
                >
                  Deploy
                </button>
                <div className="flex flex-col items-start">
                  {links.map((link, index) => (
                    <div key={index} className="flex h-6 items-center">
                      {index === links.length - 1 && isLoading ? (
                        <Loading />
                      ) : (
                        <a
                          href={link.ref}
                          target="_blank"
                          rel="noopener noreferrer"
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
                          {link.name}
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
                  ))}
                </div>
              </div>
            </div>
            <div className="w-4/7 pr-12 lg:w-2/5">
              <div className="flex justify-end">
                <Logos />
              </div>
              <ReactJson
                src={serverInfo}
                enableClipboard={false}
                displayObjectSize={false}
                displayDataTypes={false}
                collapsed={true}
                style={{
                  background: 'white',
                  borderRadius: '6px',
                  border: '1px solid rgb(209, 213, 219)',
                  padding: 12,
                  marginTop: 48,
                  minHeight: 130,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
