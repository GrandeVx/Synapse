import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/solid'

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
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:translate-y-1 mr-10">
                  Tecnology
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:translate-y-1  mr-10">
                  Example
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:translate-y-1  mr-10">
                  Features
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:translate-y-1  ">
                  Platform
                </a>
              </div>
              <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded-lg text-black border-white transition-colors ease-in-out hover:border-transparent  hover:text-white hover:bg-black mt-4 lg:mt-0 mr-3">Log in</a>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded-lg text-white border-black bg-black transition-colors ease-in-out  hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">Sing up</a>
              </div>
            </div>
          </section>      
          {/* FINE NAVBAR */}

          {/* HEADER */}
          <section className="grid grid-cols-2 bg-red-300">

              {/* Area Destra */}
              <section className="col-span-1 bg-gray-100 pl-13 pt-18 pb-18">
                <span className="flex items-center gap-3 pt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className=" text-gray-800 text-base "> 30 Days free trial </p>
                </span>
                <p className=" text-black text-7xl font-bold pt-4"> Sense The </p>
                <p className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-purple-600 to-pink-400 text-7xl font-bold pt-2"> Change.</p>

                <span className="absolute left-1/3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-102" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                </span>

                <p className=" text-gray-600 text-base break-all pt-6"> keep track of water level with </p>
                <p className=" text-gray-600 text-base break-all pt-1"> our versatile efficent </p>
                <p className=" text-gray-600 text-base break-all pt-1 pb-8"> hand-sized kit.</p>
                <a href="#" className="inline-block text-sm px-9 py-4 leading-none border rounded-lg text-white border-black bg-gray-900 transition-colors ease-in-out  hover:border-transparent mt-4 lg:mt-0">
                  Contact Us
                </a>
              </section>
              
              {/* Modello 3D - Area Sinistra */}
              <section className="col-span-1 bg-gradient-to-br from-purple-400 via-purple-600 to-pink-400">
                    <svg width="500px" height="600px" viewBox="-90 0 400 480" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>humaaans/standing-2</title>
                        <desc>Created with Sketch.</desc>
                        <g id="humaaans/standing-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="humaaan-8" transform="translate(34.000000, 18.000000)">
                                <g id="Head/Front/Short-Beard" transform="translate(85.439497, 0.000000)">
                                    <g id="Head" stroke-width="1" transform="translate(56.316359, 32.329762)" fill="#57331F">
                                        <path d="M8.61668863,35.9695996 C3.8111203,30.3288374 0.558611141,23.4160055 1.10210733,15.6699789 C2.66807119,-6.64848056 33.7361385,-1.73870383 39.7795208,9.52573796 C45.8229031,20.7901798 45.1047922,49.3633705 37.294259,51.3766405 C34.1794292,52.1795298 27.5439155,50.2127726 20.7905107,46.1421897 L25.0294931,76.1313749 L0,76.1313749 L8.61668863,35.9695996 Z"></path>
                                    </g>
                                    <path d="M78.3582753,50.4645986 C79.3163667,63.8107169 81.8507719,70.483776 85.9614908,70.483776 C92.1279303,70.483776 97.359716,66.5691118 100.065402,66.5691118 C102.037755,66.5691118 101.597389,69.0373288 100.29001,70.8673362 C99.2113805,72.3771512 93.9585452,73.8324324 93.9585452,76.1731527 C93.9585452,78.513873 98.1087207,76.7029867 98.1087207,78.0912222 C98.1087207,80.387533 98.8381079,84.7050081 94.8526266,84.7050081 C90.8191864,84.7050081 79.2545993,83.2351452 77.2727423,77.2488084 C75.9937098,73.3854017 75.1667233,65.3797003 74.791783,53.2317043 C74.5471015,53.2026292 74.2980893,53.1876728 74.0455838,53.1876728 C70.5897319,53.1876728 67.7882105,55.9891943 67.7882105,59.4450461 C67.7882105,61.1994241 68.5101986,62.7851726 69.6732598,63.9213769 C68.2253885,65.9650374 66.6027401,68.0999144 64.7433583,70.30283 C57.7580639,66.1119375 52.5745782,53.8436242 59.4038373,42.0581819 C61.291466,36.2846769 65.5647933,33.2008309 70.6116956,31.7689022 C74.6999466,30.0587738 78.9439381,29.8659553 82.5264713,30.8911619 C89.5492284,31.4935304 95.8202137,33.6349595 97.5974613,34.9067015 C97.5974613,41.5553945 96.3091825,43.5280422 85.3055242,43.3541606 C82.6017471,44.7820767 80.5232196,47.2409466 78.3582753,50.4645986 Z" id="Hair" fill="#191847"></path>
                                </g>
                                <g id="Bottom/Standing/Baggy-Pants" transform="translate(0.000000, 194.763541)">
                                    <polygon id="Leg" fill="#3D2216" points="139.748003 0 190.935026 129.55569 225.266375 239.084106 238.82308 239.084106 186.337993 5.30873359e-13"></polygon>
                                    <path d="M129.440679,0 C128.89561,45.5267591 120.946508,106.821151 119.676509,109.659057 C118.829844,111.550995 89.6015778,135.610279 31.9917121,181.836909 L41.328982,191.828889 C109.303286,152.195353 144.863197,129.735517 148.008713,124.44938 C152.726988,116.520175 168.088064,43.5545895 180.420929,0 L129.440679,0 Z" id="Leg" fill="#57331F"></path>
                                    <g id="Accessories/Shoe/Flat-Sneaker" transform="translate(53.709121, 197.107258) rotate(50.000000) translate(-53.709121, -197.107258) translate(21.900806, 176.249347)" fill="#E4E4E4">
                                        <path d="M2.79301173,26.4915537 C1.62626761,29.6061473 1.04289555,31.9365831 1.04289555,33.4828611 C1.04289555,35.3635003 1.35619618,38.1078205 1.98279745,41.7158218 C4.16447086,41.7158218 23.7715371,41.7158218 60.8039962,41.7158218 C62.3325506,36.662479 61.4501804,33.9343419 58.1568854,33.5314103 C54.8635904,33.1284788 52.1277943,32.7646639 49.9494971,32.4399656 L22.6099678,20.2518671 C22.0839009,20.0173438 21.4673207,20.2536867 21.2327974,20.7797536 C21.2287854,20.7887531 21.2249011,20.7978091 21.2211457,20.8069187 L19.4637818,25.069848 C16.415052,26.4923128 13.9376425,27.2035452 12.0315534,27.2035452 C10.4829012,27.2035452 8.34419941,26.5780944 5.61544804,25.3271928 L5.61545374,25.3271803 C4.56828164,24.8471405 3.33023177,25.3068921 2.85019196,26.3540642 C2.82950154,26.3991988 2.81042931,26.4450579 2.79301173,26.4915537 Z" id="shoe"></path>
                                    </g>
                                    <g id="Accessories/Shoe/Flat-Sneaker" transform="translate(216.922274, 207.536214)" fill="#E4E4E4">
                                        <path d="M2.79301173,26.4915537 C1.62626761,29.6061473 1.04289555,31.9365831 1.04289555,33.4828611 C1.04289555,35.3635003 1.35619618,38.1078205 1.98279745,41.7158218 C4.16447086,41.7158218 23.7715371,41.7158218 60.8039962,41.7158218 C62.3325506,36.662479 61.4501804,33.9343419 58.1568854,33.5314103 C54.8635904,33.1284788 52.1277943,32.7646639 49.9494971,32.4399656 L22.6099678,20.2518671 C22.0839009,20.0173438 21.4673207,20.2536867 21.2327974,20.7797536 C21.2287854,20.7887531 21.2249011,20.7978091 21.2211457,20.8069187 L19.4637818,25.069848 C16.415052,26.4923128 13.9376425,27.2035452 12.0315534,27.2035452 C10.4829012,27.2035452 8.34419941,26.5780944 5.61544804,25.3271928 L5.61545374,25.3271803 C4.56828164,24.8471405 3.33023177,25.3068921 2.85019196,26.3540642 C2.82950154,26.3991988 2.81042931,26.4450579 2.79301173,26.4915537 Z" id="shoe"></path>
                                    </g>
                                    <polygon id="Pant" fill="#69A1AC" points="174.163556 227.802687 238.619157 220.807401 190.849885 2.84217094e-14 133.119435 2.84217094e-14"></polygon>
                                    <path d="M45.3241967,165.716602 L87.6032259,215.760447 C132.134816,167.123971 158.09685,135.388661 165.489326,120.554518 C172.881803,105.720376 179.527263,65.5355363 185.425707,0 L120.431644,0 C117.209615,57.6553062 115.037743,87.824451 113.916028,90.5074345 C112.794313,93.1904181 89.9303694,118.260141 45.3241967,165.716602 Z" id="Pant" fill="#89C5CC"></path>
                                </g>
                                <g id="Body/Turtle-Neck" transform="translate(22.922792, 85.404334)">
                                    <path d="M208.05049,96.4264709 L237.593535,125.246913 C246.189472,128.913537 253.232618,132.96223 258.722973,137.392992 C259.957672,138.882321 261.301842,141.735954 255.492647,140.458995 C249.683451,139.182035 243.51562,138.100126 242.423792,139.989319 C241.331964,141.878512 244.549124,144.773427 242.531291,147.245895 C241.186069,148.894206 236.661982,143.651249 228.959029,131.517023 L198.23817,113.404764 L208.05049,96.4264709 Z M63.5851244,70.3429744 L86.4218168,70.4286792 C69.0286645,126.780295 59.7958213,156.285108 58.7232874,158.943118 C56.310086,164.92364 61.4167446,174.031872 63.6005545,178.926567 C56.4879584,182.109242 57.2458131,170.322498 48.2734645,174.496753 C40.0839207,178.30682 33.8541551,185.210406 24.3923206,179.372164 C23.2290437,178.654386 21.9542817,175.951824 25.0342679,173.839915 C32.7076367,168.578378 43.7654261,159.369741 45.2595076,156.338647 C47.2969546,152.205209 53.4054935,123.539985 63.5851244,70.3429744 Z" id="Skin" fill="#57331F"></path>
                                    <path d="M128.034485,10.1306715 L136.883403,7.80379352 C155.412229,56.5919162 231.108674,84.3302469 237.20857,102.640803 C239.445563,109.355767 234.813051,113.25446 237.545421,115.120335 L226.616186,124.690045 C224.436927,122.555935 220.586363,127.145365 211.515828,124.964276 C202.445292,122.783187 133.216904,69.3659982 128.034485,10.1306715 Z" id="Clothes-Back" fill="#191847" transform="translate(182.937715, 66.686121) rotate(5.000000) translate(-182.937715, -66.686121) "></path>
                                    <path d="M148.342201,12.2369815 C147.302484,78.7209619 185.73535,95.6799933 177.174669,122.350676 C170.105401,144.374885 102.440846,168.050817 90.7319125,146.461894 C85.9922857,137.722973 83.8418975,127.153867 83.5979093,115.662964 C80.6053511,124.490999 78.23857,132.090879 76.4975635,138.462612 C73.4940838,149.454743 61.8502342,151.201991 61.8502342,155.436554 L46.5096267,151.201991 C47.550144,145.449161 40.318211,142.647875 42.2572808,129.795552 C50.9454523,72.2095922 74.289004,30.4673399 112.287936,4.56879469 L112.681054,-1.05305731 C112.841766,-3.35134635 114.83518,-5.08419489 117.133469,-4.92348287 L145.223057,-2.95926754 C147.521346,-2.79855552 149.254195,-0.805141294 149.093483,1.49314774 L148.342201,12.2369815 Z" id="Clothes-Front" fill="#2F3676"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
              </section>


          </section>  
          {/* FINE HEADER */}    

          {/* HOW IT WORK */}
          <section className="bg-violet-300 p-9">

          </section>
          {/* FINE HOW IT WORK */}  

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
