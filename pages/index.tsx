import type { GetStaticProps, NextPage } from 'next'
import Link from "next/link";

import { PortfolioList } from '../components/portifolios';
import { BlogList } from '../components/blogs';
import { BaseLayout } from '../components/layouts';
import { getFileNames } from '../lib/md';
import { getDir } from '../lib/md';




const  Home: NextPage = () => {
  return (
    <>
        <BaseLayout >
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 
              className="text-2xl font-bold tracking-tight text-gray-900">
                Newest Blogs
                <Link legacyBehavior  href="/blogs">
                  <a className='text-sm ml-1 text-indigo-600'>
                    (See All)
                  </a>
                </Link>
            </h2>

            {/* Blog List Starts */}
            <BlogList />   
            {/* Blog List Ends */}

            <br></br>

            <h2 
              className="text-2xl font-bold tracking-tight text-gray-900">
                Portfolios
                <Link legacyBehavior  href="/portfolios">
                  <a className='text-sm ml-1 text-indigo-600'>
                    (See All)
                  </a>
                </Link>
            </h2>
            
            {/* Portfolio List Starts */}
          <PortfolioList />
            {/* Portfolio List Ends */}
          </div>
        </BaseLayout>
      
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const blogDir = getDir("/content/blogs");
  const blogFileNames = getFileNames(blogDir);

  console.log(blogFileNames);

  return {
    props: {}
  }
}

export default Home