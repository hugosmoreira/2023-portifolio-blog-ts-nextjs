import type { GetStaticProps, NextPage } from 'next'
import Link from "next/link";
import { join } from 'path';
import { PortfolioList } from '../components/portifolios';
import { BlogList } from '@components/blogs';
import { BaseLayout } from '@components/layouts';
import { getBlogs } from '@lib/blogs';
import { Blog } from '@interfaces/Blog';
import { getDir } from '@lib/md';
import { SearchContent } from '@interfaces/Markdown';
import fs from "fs";

type Props = {
  blogs: Blog[]
}

const Home: NextPage<Props> = ({blogs}) => {
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
            <BlogList blogs={blogs} />
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
  const blogs = getBlogs();
  const searchFile = getDir("/content/search/index.json");
  const searchItemList: SearchContent[] = [];

  blogs.forEach((blog) => {
    const searchItem: SearchContent = {
      slug: blog.slug,
      title: blog.title,
      description: blog.description,
      category: "blogs"
    };

    searchItemList.push(searchItem);
  });

  fs.writeFileSync(searchFile, JSON.stringify(searchItemList, null, 2));
  

  return {
    props: {blogs}
  }
}

export default Home