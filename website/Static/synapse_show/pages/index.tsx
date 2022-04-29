import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (

      <div className="grid grid-row-6 bg-blue-200">

          {/* NAVBAR */}
          <section className="flex items-center justify-between flex-wrap bg-white p-6">

            <div className="flex items-center flex-shrink-0 text-black mr-6">
              <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
              <span className="font-semibold text-xl tracking-tight">Synapse</span>
            </div>

            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-black  hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            
            <div className="w-full block flex-grow lg:flex lg:items-center lg:text-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-10">
                  Docs
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-10">
                  Examples
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-10">
                  Blog
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
                  Blog
                </a>
              </div>
              <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded-lg text-black border-white transition-colors ease-in-out hover:border-transparent  hover:text-white hover:bg-black mt-4 lg:mt-0 mr-3">Log in</a>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded-lg text-white border-black bg-black transition-colors ease-in-out  hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">Sing up</a>
              </div>
            </div>
          {/* FINE NAVBAR */}

          </section>      

          <section className="bg-red-300 p-9">

          </section>      

          <section className="bg-violet-300 p-9">

          </section>      

          <section className="bg-orange-300 p-9">

          </section>      

          <section className="bg-yellow-300 p-9">

          </section>      


          <section className="bg-rose-500 p-9">

          </section>      

          <section className="bg-cyan-500 p-9">

</section>      



      </div>

  )
}

export default Home
