import Head from 'next/head'
import Image from 'next/legacy/image'
import { FunctionComponent, PropsWithChildren } from 'react';

import Footer from '../../../components/common/footer';
import Header from '../../../components/common/header';
import Navbar from '../../../components/common/navbar';


const BaseLayout: FunctionComponent<PropsWithChildren> = ({children}) => {

    return (
        <>
      <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8">
        <Head>
          <title>Web Studio Labs Blog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="relative">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
           <Navbar />

            {/* Header Starts */}
            <Header />
            {/* Header Ends */}

          </div>
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              priority
              layout="fill"
              alt=""
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>        
        </div>

        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          { children }
        </div>
      </div>
      <Footer />
    </>
    )
}

export default BaseLayout