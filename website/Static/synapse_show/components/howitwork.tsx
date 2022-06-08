import { motion, AnimatePresence , useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

import Hiw_Cards from './hiw_cards';

function HowitWorkBlock() {
    
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const HiwVariants = {
        visible: { opacity:1, transition: { duration: 1.2 } },
        hidden: { opacity:0 }
      };


    useEffect(() => {
    if (inView) {
        controls.start("visible");
    }
    }, [controls, inView]);

    return (
        <motion.section className="grid grid-row-2" id='tecnology' ref={ref} animate={controls} initial="hidden" variants={HiwVariants}>

        <section className=" pt-13 pb-13">
          <p className="text-center text-4xl font-semibold text-black"> How it works </p>
          <p className=" text-gray-400 text-center text-base break-all pt-5"> To any user who urges to keep track of water level</p>
          <p className=" text-gray-400 text-center text-base break-all pt-1"> or any depth, our products are just made for you.</p>
        </section>

        <Hiw_Cards />

      </motion.section>
    );
}

export default HowitWorkBlock;