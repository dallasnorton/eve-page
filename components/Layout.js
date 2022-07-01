import React, { useState, useEffect } from 'react';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Loading from './Loading';
import Logos from './Logos';
import dynamic from 'next/dynamic';
import { getToken } from '../utils/apiToken';
// import * as dotenv from 'dotenv';
// dotenv.config();

const ReactJson = dynamic(
  () => {
    return import('react-json-view');
  },
  { ssr: false }
);

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverInfo, setServerInfo] = useState();
  const [options, setOptions] = useState([]);
  const [links, setLinks] = useState([]);
  const [branch, setBranch] = useState('');
  const [repo, setRepo] = useState('');

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const token = await getToken();
        const hostname = process.env.NEXT_PUBLIC_HOST_NAME;
        const infoRes = await fetch(`${hostname}/api/v1/deployments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const infoData = await infoRes.json();

        if (infoData) {
          setServerInfo(infoData);
          const routes = [...infoData.routes];
          routes.shift();
          const deployedLinks = routes.map((route) => {
            const link = route.action.share.split('/')[3];
            return { ref: `/${link}/`, name: link };
          });
          setLinks(deployedLinks);
        }
      } catch (e) {
        console.warn(e);
      }
    };

    fetchInfo();
  }, []);

  useEffect(() => {
    const fetchBranches = async () => {
      const domainParts = repo.split('.com/');
      if (domainParts.length === 2) {
        const [owner, repoPart] = domainParts[1]?.split('/');
        const infoRes = await fetch(
          `https://api.github.com/repos/${owner}/${repoPart}/branches`
        );
        const infoData = await infoRes.json();
        if (infoData.length) {
          const options = infoData.map((datum) => datum.name);
          setOptions(options);
          setBranch(options[0]);
        } else {
          setOptions([]);
        }
      }
    };

    if (repo) {
      fetchBranches();
    }
  }, [repo]);

  const onClick = async () => {
    try {
      setIsLoading(true);
      // setLinks([...links, { ref: `/${branch}/`, name: branch }]);

      const resp = await fetch('/api/v1/pull', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ branch, dest: `/unitapps/app/${branch}`, repo }),
      });

      const data = await resp.json();
      console.log({ data });

      // const infoRes = await fetch('/api/v1/info');
      // const infoData = await infoRes.json();
      // setServerInfo(infoData);

      const infoRes = await fetch('/api/v1/info');
      const infoData = await infoRes.json();
      if (infoData) {
        setServerInfo(infoData);
        const routes = [...infoData.routes];
        routes.shift();
        const deployedLinks = routes.map((route) => {
          const link = route.action.share.split('/')[3];
          return { ref: `/${link}/`, name: link };
        });
        setLinks(deployedLinks);
      }

      setIsLoading(false);
    } catch (error) {
      console.warn(error);
      setIsLoading(false);
    }
  };

  const onDelete = async (index) => {
    const linksCopy = [...links];
    linksCopy.splice(index, 1);
    setLinks(linksCopy);
  };

  return (
    <div className="mx-auto max-w-6xl">
      <section className="w-full text-black">
        <div className="my-8 p-4 text-black">
          <div className="mx-auto flex max-w-7xl flex-col items-start bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-8 lg:py-24">
            <div className="mb-4 flex w-full items-center justify-between lg:px-12">
              <h2 className="text-2xl font-bold leading-tight lg:text-4xl">
                App Lab Console
              </h2>
              <Logos />
            </div>
            <div className="flex w-full flex-col lg:flex-row">
              <div className="flex flex-col pl-0 lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="Repository"
                    className="text-md block h-8 font-medium leading-8 text-gray-700"
                  >
                    Repository
                  </label>
                  <input
                    type="text"
                    name="Repository"
                    id="Repository"
                    onChange={(e) => setRepo(e.target.value)}
                    className="
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
                  />
                </div>
                <div className="mb-4 flex w-full">
                  <div className="flex-1">
                    <label
                      htmlFor="branch"
                      className="text-md block font-medium leading-8 text-gray-700"
                    >
                      Branch
                    </label>
                    <select
                      className="form-select w-1/2 rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed"
                      onChange={(e) => setBranch(e.target.value)}
                      disabled={options.length === 0}
                    >
                      {options.map((option, index) => (
                        <option key={index}>{option}</option>
                      ))}
                    </select>
                    <button
                      className="ml-4 inline-flex h-10 items-center rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                      onClick={onClick}
                      disabled={branch.length === 0 || repo.length === 0}
                    >
                      Deploy
                      {isLoading && <Loading />}
                    </button>
                  </div>
                </div>
                {links.length > 0 && (
                  <div className="flex w-full flex-col">
                    <p className="text-md block font-medium leading-8 text-gray-700">
                      Active Apps
                    </p>
                    <div className="flex flex-col items-start">
                      {links.map((link, index) => (
                        <div
                          key={index}
                          className="mt-2 flex h-6 w-full items-center justify-between md:w-1/2"
                        >
                          <a
                            href={link.ref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            flex
                            items-center
                            justify-center
                            truncate
                            text-lg
                            font-bold
                            text-blue-700
                            underline
                            hover:text-blue-500
                          "
                          >
                            <div className="w-full truncate">{link.name}</div>
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
                          <button
                            className="ml-4 cursor-pointer text-blue-700 hover:text-blue-500"
                            onClick={() => onDelete(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="w-4/7 mt-8 lg:mt-0 lg:w-2/5 lg:pr-12">
                <div className="flex items-center">
                  <img src={'nginx/logo.png'} alt={''} className="h-8 w-8" />
                  <p className="text-md block font-medium text-gray-700">
                    NGINX Unit Configuration
                  </p>
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
                    minHeight: 130,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
