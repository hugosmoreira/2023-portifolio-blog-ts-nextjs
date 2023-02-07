import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import searchIndex from "@content/search/index.json";
import * as JsSearch from "js-search";
import { useEffect } from "react";
import contentIndexer from "@lib/client/ContentIndexer";



const ContentSearch = () => {  

  const buildIndex = () => {
    const searchEngine = new JsSearch.Search("slug");

    searchEngine.addIndex("title");
    searchEngine.addIndex("description");

    searchEngine.addDocuments(searchIndex);

    const results1 = contentIndexer.search("nft marketplace");
    const results2 = contentIndexer.search("Practical");
    const results3 = contentIndexer.search("mark");
    const results4 = contentIndexer.search("Siemens");
    const results5 = contentIndexer.search("notexisting value");
  }

  useEffect(() => {
    buildIndex();
  }, [])
  
  return (
    <>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          id="search-input"
          autoComplete="off"
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search for anything"
        />
      </div>
      { false &&
        <ul
          className="w-80 border-solid border rounded-md z-10 bg-white max-h-80 overflow-auto absolute select is-multiple"
          role="listbox">
          <li
            onClick={() =>{}}
            className={`hover:bg-indigo-600 hover:text-white p-3 relative cursor-pointer`}>
            <div className="font-bold text-sm truncate">Found Blog Title 1</div>
            <p className="truncate text-sm">Found Blog Desc 1</p>
            <span 
              className="mt-2 text-xs text-white bg-gray-800 px-2 py-1 rounded-xl">blogs
            </span>
          </li>
          <li
            onClick={() =>{}}
            className={`hover:bg-indigo-600 hover:text-white p-3 relative cursor-pointer`}>
            <div className="font-bold text-sm truncate">Found Blog Title 2</div>
            <p className="truncate text-sm">Found Blog Desc 2</p>
            <span 
              className="mt-2 text-xs text-white bg-gray-800 px-2 py-1 rounded-xl">portfolios
            </span>
          </li>
        </ul>
      }
    </>
  )
}

export default ContentSearch;