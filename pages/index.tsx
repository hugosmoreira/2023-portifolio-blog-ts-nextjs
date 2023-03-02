import type { GetStaticProps, NextPage } from 'next'
import Link from "next/link";
import { join } from 'path';
import { PortfolioList } from '../components/portifolios';
import { BlogList } from '@components/blogs';
import { BaseLayout } from '@components/layouts';
import { getBlogs } from '@lib/blogs';
import { Blog } from '@interfaces/Blog';
import { saveSearchData } from '@lib/md';
import { getPortfolios } from '@lib/portfolios';
import { Portfolio } from '@interfaces/Portfolio';



type Props = {
  blogs: Blog[];
  portfolios: Portfolio[]
}

const Home: NextPage<Props> = ({blogs, portfolios}) => {
  return (
    <>
        <BaseLayout >
          <div className="page-layout mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8">
            <h2 
              className="text-2xl font-bold tracking-tight text-gray-900">
                Software Development
                <Link legacyBehavior  href="/blogs">
                  <a className='text-sm ml-1 text-indigo-600'>
                    (See All)
                  </a>
                </Link>
            </h2>

            {/* Blog List Starts */}
            <BlogList blogs={blogs} />
            {/* Blog List Ends */}

            <br></br>

            <h2 
              className="text-2xl font-bold tracking-tight text-gray-900">
                CyberSecurity & Tech
                <Link legacyBehavior  href="/portfolios">
                  <a className='text-sm ml-1 text-indigo-600'>
                    (See All)
                  </a>
                </Link>
            </h2>
            
            {/* Portfolio List Starts */}
            <PortfolioList portfolios={portfolios} />
            {/* Portfolio List Ends */}
          </div>
        </BaseLayout>
      
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlogs();
  const portfolios = getPortfolios();

  console.log(portfolios);


  const content = {
    blogs,
    portfolios
  }

  saveSearchData(content);
  

  return {
    props: {
      blogs: blogs.slice(0, 4), 
      portfolios: portfolios.slice(0, 4)
    }
  }
}

export default Home