import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/solid'

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";

import HeaderBlock from '../components/header';
import HowitWorkBlock from '../components/howitwork';
import ProtocolBlock from '../components/protocol';
import PlatformBlock from '../components/platform';
import FormBlock from '../components/form';
import FooterBlock from '../components/footer';
import NavbarBlock from '../components/navbar';

const Home: NextPage = () => {


  return (

      <div className="grid grid-row-6 scroll-smooth">

          {/* NAVBAR */}
            <NavbarBlock />
          {/* FINE NAVBAR */}

          {/* HEADER */}
            <HeaderBlock/>
          {/* FINE HEADER */}    

          {/* HOW IT WORK */}
            <HowitWorkBlock/>
          {/* FINE HOW IT WORK */}  

          {/* PROTOCOLLI */}
            <ProtocolBlock/>
          {/* FINE PROTOCOLLI */}
        
          {/* PIATTAFORMA */}
            <PlatformBlock/>
          {/* FINE PIATTAFORMA */} 

          {/* FORM */} 
            <FormBlock />
          {/* FINE FORM */} 

          {/* FOOTER */}
            <FooterBlock />
          {/* FINE FOOTER */}


      </div>
                    
  )
}

export default Home
