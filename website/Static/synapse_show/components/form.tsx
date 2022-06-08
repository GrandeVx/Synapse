import { motion, AnimatePresence , useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

function FormBlock() {
    
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const FormVariants = {
        visible: { opacity:1, transition: { duration: 1.2 } },
        hidden: { opacity:0 }
      };


    useEffect(() => {
    if (inView) {
        controls.start("visible");
    }
    }, [controls, inView]);

    return (
        <motion.section className="grid grid-row-2 place-items-center pb-20" ref={ref} animate={controls} initial="hidden" variants={FormVariants}>
            
        <section className="pb-6">

            <p className="text-center font-bold text-3xl pb-2">Request a Quote</p>
            <p className="text-center text-gray-400 text-xs pb-3">Leave your email here and one of our experts will reach out to you.</p>

        </section>  

        <section className="flex-row">

            <input className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-60 py-2 px-4 mr-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Enter your email."></input>
            <a href="#" className="inline-block text-sm px-9 py-4 leading-none border rounded-lg text-purple-500 border-purple-500
            transition-colors ease-in-out mt-4 lg:mt-0">
              Get start
            </a>


        </section>


    </motion.section>      
    );
}

export default FormBlock;