import { motion, AnimatePresence , useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
function Hiw_Cards() {
    
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const Cards_1 = {
        visible: { opacity:1, transition: { duration: 1.2 } },
        hidden: { opacity:0 }
      };

    const Cards_2 = {
        visible: { opacity:1, transition: { duration: 1.9 }, delay: 0.5 },
        hidden: { opacity:0 }
      };

    const Cards_3 = {
    visible: { opacity:1, transition: { duration: 2 }, delay: 0.7 },
    hidden: { opacity:0 }
    };

    useEffect(() => {
    if (inView) {
        controls.start("visible");
    }
    }, [controls, inView]);

    return (

    <section className="grid grid-cols-3 place-items-center text-center pb-20">      

        <motion.section className="col-span-1 " ref={ref} animate={controls} initial="hidden" variants={Cards_1}>
            <span className="">
              <svg className="" width="250" height="150" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="transparent" d="M0 0h900v600H0z"/><path d="M719.09 254.716c16.478-54.327-71.008-88.851-71.008-88.851s-104.085 48.007-120.783 40.258c-16.698-7.749 80.982-58.427 80.982-58.427-28.191-21.667-127.661-32.723-127.661-32.723s-54.49 97.878-68.767 86.256c-14.278-11.621 52.671-84.209 52.671-84.209-34.483-9.449-82.777 7.479-82.777 7.479-68.385 33.976-21.226 120.039-21.226 120.039s-19.614 33.515-63.553 58.543c0 0-8.943 4.102-21.017 13.033l7.913 4.952a88.553 88.553 0 0 1 5.99-4.796.09.09 0 0 1 .042-.028c.034-.021.055-.042.09-.063a476.24 476.24 0 0 1 5.474-3.646l.007-.007.007-.007c5.38-3.228 9.206-5.696 11.811-7.574l.02-.021c16.546-10.332 39.095-23.165 48.596-22.868 0 0-.107-1.78.573-4.691-.179 1.496-.38 3.055-.573 4.691-4.613 37.51 60.116 84.729 102.708 100.595 42.591 15.866 32.799-5.071 23.278-35.064-9.521-29.994-54.955-52.077-63.295-66.721-8.341-14.643 14.28-9.917 38.243 7.76 23.949 17.676 20.8 50.714 59.026 80.012 38.227 29.299 117.032-27.795 117.032-27.795-33.52-8.842-74.163-55.82-70.048-66.705 4.122-10.892 78.046 36.695 91.471 41.053 13.446 4.366 48.296-6.148 64.774-60.475z" fill="url(#a)"/><path d="M248.409 206.096c0-20.767 16.835-37.602 37.603-37.602h296.641c20.767 0 37.602 16.835 37.602 37.602v230.837c0 20.768-16.835 37.603-37.602 37.603H286.012c-20.768 0-37.603-16.835-37.603-37.603V206.096z" fill="#9333ea"/><circle cx="291.756" cy="199.307" r="7.834" fill="#fff"/><circle cx="318.914" cy="199.307" r="7.834" fill="#fff"/><circle cx="346.071" cy="199.307" r="7.834" fill="#fff"/><rect x="283.923" y="376.352" width="253.816" height="16.712" rx="8.356" fill="#fff"/><rect x="283.923" y="327.26" width="236.06" height="17.757" rx="8.878" fill="#fff"/><rect x="283.923" y="277.123" width="265.306" height="16.712" rx="8.356" fill="#fff"/><path d="M184.149 528.778c-.823-2.231 13.535-59.574 15.453-61.506 1.923-1.923 63.874-3.116 63.874-3.116s27.915-26.31 50.997-39.046c9.103-5.031 21.248-8.048 22.792-3.437.959 2.857-3.259 8.384-8.622 13.954-.012.018-.031.034-.049.05-7.466 7.747-17.106 15.542-18.013 16.274-.051.035-.07.051-.07.051s50.928.738 58.464 1.37c7.54.619 17.48 1.053 17.677 6.278.185 4.801-13.353 6.737-14.158 6.851.84-.007 18.56-.115 19.353 6.72.588 5.084-18.813 9.205-19.386 9.318.457.004 9.163.052 8.993 4.127-.282 6.7-19.942 9.239-20.745 9.346.427.01 7.419.229 6.944 3.893-1.178 9.074-68.596 17.036-89.04 18.881-20.463 1.833-93.634 12.226-94.464 9.992z" fill="#F8AE9D"/><path fill="url(#b)" d="M653.68 405.598h69.982v68.938H653.68z"/><rect x="671.437" y="387.841" width="69.982" height="68.938" rx="10.445" fill="#c084fc"/><rect x="706.266" y="182.419" width="34.352" height="34.352" rx="10.445" transform="rotate(45 706.266 182.419)" fill="#c084fc"/><circle r="7.834" transform="matrix(1 0 0 -1 661.514 238.998)" fill="#E1E4E5"/><path d="M207.56 423.953s13.687-63.444-4.948-110.475c-2.475-6.249-11.454-5.881-13.51.534-.034.106-.07.216-.103.328-3.327 11.01 15.771 68.807 18.561 109.613zm-6.766 18.747s-4.847-86.811-46.261-138.644c-2.524-3.16-7.156-3.91-10.411-1.489-2.117 1.579-3.857 4.579-4.002 10.145-.38 14.85 43.221 80.184 60.674 129.988z" fill="#c084fc"/><path clip-rule="evenodd" d="m176.86 285.479-13.056-12.534 13.056-12.534 13.057 12.534-13.057 12.534zm491.965 81.472-13.056-13.056 13.056-13.057 13.057 13.057-13.057 13.056z" stroke="#E1E4E5" stroke-width="5.313" stroke-linecap="round" stroke-linejoin="round"/><path d="M319.869 131.248c-4.348 6.329-1.292 15.985-1.292 15.985s10.104-.61 14.448-6.943c4.348-6.328 1.296-15.981 1.296-15.981s-10.104.611-14.452 6.939z" fill="#E1E4E5"/><path d="M769.147 340.327c-20.625 20.993-59.193 16.567-59.193 16.567s-5.104-38.462 15.54-59.441c20.625-20.992 59.175-16.579 59.175-16.579s5.104 38.461-15.522 59.453z" fill="url(#c)"/><path d="M654.247 138.617c-6.255 6.367-17.953 5.024-17.953 5.024s-1.548-11.665 4.713-18.029c6.256-6.367 17.948-5.028 17.948-5.028s1.548 11.666-4.708 18.033z" fill="url(#d)"/><path d="M224.827 218.317c9.18 16.217 4.824 40.791 4.824 40.791s-26.27-7.227-35.451-23.445c-9.18-16.217-9.767-33.24-1.316-38.034 8.464-4.798 22.763 4.471 31.943 20.688z" fill="url(#e)"/><path d="M696.108 272.945h-.251c-1.483 21.016-17.109 21.339-17.109 21.339s17.231.337 17.231 24.62c0-24.283 17.232-24.62 17.232-24.62s-15.62-.323-17.103-21.339z" fill="#E1E4E5"/><defs><linearGradient id="a" x1="199.058" y1="541.055" x2="919.128" y2="-168.449" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient><linearGradient id="b" x1="690.163" y1="513.186" x2="688.069" y2="330.605" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient><linearGradient id="c" x1="686.857" y1="412.032" x2="835.965" y2="178.292" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient><linearGradient id="d" x1="629.288" y1="160.365" x2="674.514" y2="89.47" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EE"/></linearGradient><linearGradient id="e" x1="247.335" y1="217.02" x2="152.186" y2="243.155" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient></defs></svg>
            </span>
            <p className='text-black text-xl pt-2 font-bold '> Information </p>
            <p className=" text-gray-400 text-base break-all pt-5"> Enter your information</p>
            <p className=" text-gray-400 text-base break-all "> ensure your details</p>
            <p className=" text-gray-400 text-base break-all"> safe and more secure</p>
        </motion.section>

        <motion.section className="col-span-1" ref={ref} animate={controls} initial="hidden" variants={Cards_2}>
            <svg width="250" height="150" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="transparent" d="M0 0h900v600H0z"/><path d="M595.217 171.902c-16.578-54.111-159.87-123.95-273.075-37.131-52.65 40.38-36.308 69.36-66.622 126.569-18.07 34.098-50.077 66.61-47.939 105.757 1.839 33.793 19.52 64.354 43.439 79.678 53.795 34.463 139.025 40.313 183.582-61.412 44.557-101.724 203.357-73.9 160.615-213.461z" fill="url(#a)"/><path d="M722.095 300.865c-22.715-23.307-57.379-18.058-109.899 1.601-39.497 14.792-75.66 27.738-110.288 60.714-24.239 23.069-41.101 50.012-52.055 74.726-11.871 26.776-29.942 58.546-11.095 80.248 25.897 29.811 130.265 32.796 211.443-39.57 89.169-79.51 94.108-154.943 71.894-177.719z" fill="url(#b)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M646.557 170.996H489.963a24.177 24.177 0 0 1-20.013-10.627l-34-50.1a24.172 24.172 0 0 0-19.989-10.602H307.766c-26.741 0-48.399 21.714-48.399 48.523v291.14c0 26.81 21.658 48.524 48.399 48.524h338.791c26.741 0 48.399-21.714 48.399-48.524V219.519c0-26.785-21.658-48.523-48.399-48.523z" fill="#9333ea"/><path d="M476.978 384.196v-65.092" stroke="#fff" stroke-width="40.893" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M476.86 270.561c-13.106 0-23.743 10.637-23.648 23.744 0 13.106 10.637 23.743 23.743 23.743 13.106 0 23.743-10.637 23.743-23.743 0-13.107-10.637-23.744-23.838-23.744z" fill="#fff"/><path d="M476.86 270.561c-13.106 0-23.743 10.637-23.648 23.744 0 13.106 10.637 23.743 23.743 23.743 13.106 0 23.743-10.637 23.743-23.743 0-13.107-10.637-23.744-23.838-23.744" stroke="#fff" stroke-width="40.893" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M726.526 177.509v3.812h3.808a2.91 2.91 0 0 1 2.896 2.899 2.91 2.91 0 0 1-2.896 2.898h-3.808v3.812a2.91 2.91 0 0 1-2.896 2.898 2.91 2.91 0 0 1-2.896-2.898v-3.796h-3.825a2.91 2.91 0 0 1-2.896-2.899 2.91 2.91 0 0 1 2.896-2.898h3.809v-3.828a2.913 2.913 0 0 1 2.912-2.898 2.91 2.91 0 0 1 2.896 2.898zm-27.434-39.888v5.337h5.586c2.331 0 4.247 1.83 4.247 4.058 0 2.227-1.916 4.057-4.247 4.057h-5.586v5.337c0 2.227-1.916 4.058-4.248 4.058-2.331 0-4.247-1.831-4.247-4.058v-5.315h-5.609c-2.332 0-4.248-1.83-4.248-4.057 0-2.228 1.916-4.058 4.248-4.058h5.586v-5.359c0-2.227 1.916-4.057 4.27-4.057 2.332 0 4.248 1.83 4.248 4.057zm-49.919-22.523v8.132h8.126c3.391 0 6.178 2.789 6.178 6.183 0 3.394-2.787 6.183-6.178 6.183h-8.126v8.133c0 3.394-2.787 6.183-6.178 6.183s-6.178-2.789-6.178-6.183v-8.099h-8.159c-3.391 0-6.178-2.789-6.178-6.183 0-3.394 2.787-6.183 6.178-6.183h8.125v-8.166c0-3.394 2.787-6.183 6.212-6.183 3.391 0 6.178 2.789 6.178 6.183z" fill="#c084fc"/><path d="M731.157 235.519h-16.806M739 219.273h-24.649m14.566 32.492h-14.566" stroke="#E1E4E5" stroke-width="5.028" stroke-linecap="round" stroke-linejoin="round"/><circle r="7.687" transform="matrix(1 0 0 -1 222.214 248.279)" fill="#E1E4E5"/><path d="M168.828 175.407c9.092 31.463 49.198 47.529 49.198 47.529s25.34-34.96 16.222-66.422c-9.092-31.463-49.172-47.532-49.172-47.532s-25.341 34.961-16.248 66.425z" fill="url(#c)"/><rect width="37.587" height="4.379" rx="2.19" transform="scale(-1 1) rotate(-55.644 -40.936 453.28)" fill="#fff"/><rect width="37.587" height="4.379" rx="2.19" transform="scale(-1 1) rotate(-55.644 -28.523 429.757)" fill="#fff"/><rect width="37.587" height="4.379" rx="2.19" transform="scale(-1 1) rotate(-55.644 -16.11 406.235)" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M584.115 419.845h4.846c1.172 0 2.115.953 2.115 2.115v4.846a2.117 2.117 0 0 1-2.115 2.115h-4.846a2.124 2.124 0 0 1-2.115-2.115v-4.846a2.11 2.11 0 0 1 2.115-2.115zm16.799 0h4.846c1.162 0 2.115.953 2.115 2.115v4.846a2.117 2.117 0 0 1-2.115 2.115h-4.846a2.123 2.123 0 0 1-2.115-2.115v-4.846c0-1.162.953-2.115 2.115-2.115zm16.812 0h4.845c1.162 0 2.116.953 2.116 2.115v4.846a2.118 2.118 0 0 1-2.116 2.115h-4.845a2.123 2.123 0 0 1-2.115-2.115v-4.846a2.11 2.11 0 0 1 2.115-2.115zm16.801 0h4.846c1.162 0 2.115.953 2.115 2.115v4.846a2.117 2.117 0 0 1-2.115 2.115h-4.846a2.126 2.126 0 0 1-2.125-2.115v-4.846a2.139 2.139 0 0 1 2.125-2.115zm16.802 0h4.846c1.172 0 2.125.953 2.125 2.115v4.846a2.12 2.12 0 0 1-2.125 2.115h-4.846a2.123 2.123 0 0 1-2.115-2.115v-4.846c0-1.162.953-2.115 2.115-2.115zm-49.797 18.32h4.846c1.162 0 2.115.953 2.115 2.115v4.856a2.123 2.123 0 0 1-2.115 2.115h-4.846a2.117 2.117 0 0 1-2.115-2.115v-4.846a2.113 2.113 0 0 1 2.115-2.125zm16.8 0h4.845c1.162 0 2.115.953 2.115 2.115v4.856a2.123 2.123 0 0 1-2.115 2.115h-4.845a2.123 2.123 0 0 1-2.115-2.115v-4.846a2.112 2.112 0 0 1 2.115-2.125zm16.801 0h4.846c1.172 0 2.125.953 2.125 2.115v4.856a2.125 2.125 0 0 1-2.125 2.115h-4.846a2.123 2.123 0 0 1-2.115-2.115v-4.846c0-1.172.953-2.125 2.115-2.125zm-17.407-38.001h4.845c1.162 0 2.116.953 2.116 2.115v4.845a2.118 2.118 0 0 1-2.116 2.116h-4.845a2.124 2.124 0 0 1-2.115-2.116v-4.845a2.11 2.11 0 0 1 2.115-2.115zm16.801 0h4.846c1.162 0 2.115.953 2.115 2.115v4.845a2.116 2.116 0 0 1-2.115 2.115h-4.846a2.126 2.126 0 0 1-2.125-2.115v-4.845a2.139 2.139 0 0 1 2.125-2.115z" fill="#fff"/><path d="M210.092 373.327h-.228c-1.35 17.931-15.574 18.207-15.574 18.207s15.685.287 15.685 21.006c0-20.719 15.686-21.006 15.686-21.006s-14.219-.276-15.569-18.207z" fill="#E1E4E5"/><defs><linearGradient id="a" x1="354.609" y1="-100.649" x2="481.628" y2="845.886" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient><linearGradient id="b" x1="570.951" y1="150.866" x2="598.899" y2="803.028" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient><linearGradient id="c" x1="211.478" y1="289.142" x2="189.106" y2="-18.593" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient></defs></svg>
            <p className='text-black text-xl pt-2 font-bold text-center'> Data Secure </p>
            <p className=" text-gray-400 text-center text-base break-all pt-5"> Sending money faster &</p>
            <p className=" text-gray-400 text-center text-base break-all "> easier with end to end</p>
            <p className=" text-gray-400 text-center text-base break-all"> encryption</p>
        </motion.section>

        <motion.section className="col-span-1" ref={ref} animate={controls} initial="hidden" variants={Cards_3}>
            <svg width="250" height="150" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="transparent" d="M0 0h900v600H0z"/><path d="M596.686 201.361c-16.103-52.558-155.282-120.393-265.239-36.065-51.139 39.221-35.266 67.369-64.71 122.937-17.551 33.119-48.64 64.698-46.563 102.722 1.786 32.822 18.96 62.507 42.193 77.391 52.25 33.474 135.034 39.156 178.313-59.649 43.278-98.806 197.521-71.78 156.006-207.336z" fill="url(#a)"/><path d="M662.122 312.523c-19.073-19.57-48.178-15.162-92.276 1.344-33.162 12.419-63.526 23.29-92.601 50.977-20.353 19.37-34.511 41.992-43.708 62.744-9.967 22.482-25.14 49.157-9.316 67.379 21.744 25.03 109.376 27.537 177.536-33.225 74.87-66.759 79.017-130.096 60.365-149.219z" fill="url(#b)"/><mask id="c" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M589.651 177.646c75.979 68.096 75.979 178.501 0 246.597-75.979 68.097-199.164 68.097-275.143 0-75.979-68.096-75.979-178.501 0-246.597 75.979-68.097 199.164-68.097 275.143 0z"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M589.651 177.646c75.979 68.096 75.979 178.501 0 246.597-75.979 68.097-199.164 68.097-275.143 0-75.979-68.096-75.979-178.501 0-246.597 75.979-68.097 199.164-68.097 275.143 0z" fill="#fff"/><path d="M586.981 180.624c74.205 66.507 74.205 174.134 0 240.641l5.34 5.957c77.752-69.686 77.752-182.869 0-252.555l-5.34 5.957zm0 240.641c-74.459 66.734-195.344 66.734-269.803 0l-5.34 5.957c77.498 69.458 202.985 69.458 280.483 0l-5.34-5.957zm-269.803 0c-74.205-66.507-74.205-174.134 0-240.641l-5.34-5.957c-77.752 69.686-77.752 182.869 0 252.555l5.34-5.957zm0-240.641c74.459-66.734 195.344-66.734 269.803 0l5.34-5.957c-77.498-69.458-202.985-69.458-280.483 0l5.34 5.957z" fill="#c084fc" mask="url(#c)"/><path d="M260.645 301.505c0-8.127 3.071-16.262 9.173-23.864 32.112-40.003 103.545-66.087 182.822-66.087s150.71 26.084 182.821 66.087c6.103 7.602 9.174 15.737 9.174 23.864s-3.071 16.262-9.174 23.864c-32.111 40.004-103.544 66.087-182.821 66.087s-150.71-26.083-182.822-66.087c-6.102-7.602-9.173-15.737-9.173-23.864z" fill="#fff" stroke="#E1E4E5" stroke-width="4"/><mask id="d" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M517.884 236.573c35.921 35.912 35.921 94.21 0 130.183-35.92 35.911-94.233 35.911-130.215 0-35.92-35.912-35.92-94.21 0-130.183 35.982-35.972 94.264-35.972 130.215 0z"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M517.884 236.573c35.921 35.912 35.921 94.21 0 130.183-35.92 35.911-94.233 35.911-130.215 0-35.92-35.912-35.92-94.21 0-130.183 35.982-35.972 94.264-35.972 130.215 0z" fill="#fff"/><path d="m517.884 366.756 2.828 2.829.003-.003-2.831-2.826zm-130.215 0-2.828 2.829.003.002 2.825-2.831zm0-130.183-2.828-2.828-.002.002 2.83 2.826zm127.387 2.829c34.357 34.348 34.36 90.115-.002 124.527l5.661 5.653c37.478-37.533 37.482-98.363-.003-135.837l-5.656 5.657zm0 124.525c-34.357 34.348-90.14 34.352-124.561-.002l-5.651 5.662c37.541 37.468 98.385 37.472 135.868-.002l-5.656-5.658zm-124.559 0c-34.356-34.348-34.36-90.115.003-124.527l-5.661-5.653c-37.479 37.533-37.482 98.363.002 135.838l5.656-5.658zm0-124.525c34.421-34.412 90.17-34.41 124.558-.001l5.659-5.655c-37.514-37.537-98.33-37.535-135.873-.001l5.656 5.657z" fill="#E1E4E5" mask="url(#d)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M505.565 302.235a52.197 52.197 0 0 1-15.287 36.909 52.198 52.198 0 0 1-89.104-36.909 52.195 52.195 0 1 1 104.391 0z" fill="#9333ea"/><circle cx="442.539" cy="283.539" r="17.539" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M266.483 432.885h-3.665a1.6 1.6 0 0 0-1.599 1.6v3.665c0 .886.721 1.6 1.599 1.6h3.665c.879 0 1.6-.721 1.6-1.6v-3.665a1.596 1.596 0 0 0-1.6-1.6zm-12.708 0h-3.665c-.878 0-1.599.721-1.599 1.6v3.665c0 .886.721 1.6 1.599 1.6h3.665c.879 0 1.6-.721 1.6-1.6v-3.665c0-.879-.721-1.6-1.6-1.6zm-12.713 0h-3.665c-.879 0-1.6.721-1.6 1.6v3.665c0 .886.721 1.6 1.6 1.6h3.665c.878 0 1.599-.721 1.599-1.6v-3.665a1.596 1.596 0 0 0-1.599-1.6zm-12.708 0h-3.665c-.879 0-1.6.721-1.6 1.6v3.665c0 .886.721 1.6 1.6 1.6h3.665c.886 0 1.607-.721 1.607-1.6v-3.665a1.617 1.617 0 0 0-1.607-1.6zm-12.707 0h-3.665c-.887 0-1.607.721-1.607 1.6v3.665c0 .886.721 1.6 1.607 1.6h3.665c.878 0 1.599-.721 1.599-1.6v-3.665c0-.879-.721-1.6-1.599-1.6zm37.665 13.857h-3.665c-.879 0-1.6.721-1.6 1.6v3.672c0 .879.721 1.6 1.6 1.6h3.665c.886 0 1.6-.721 1.6-1.6v-3.665a1.599 1.599 0 0 0-1.6-1.607zm-12.709 0h-3.665c-.879 0-1.6.721-1.6 1.6v3.672c0 .879.721 1.6 1.6 1.6h3.665c.879 0 1.6-.721 1.6-1.6v-3.665a1.599 1.599 0 0 0-1.6-1.607zm-12.708 0h-3.665c-.886 0-1.607.721-1.607 1.6v3.672c0 .879.721 1.6 1.607 1.6h3.665c.879 0 1.6-.721 1.6-1.6v-3.665c0-.886-.721-1.607-1.6-1.607zM241.062 418h-3.665c-.879 0-1.6.721-1.6 1.6v3.665c0 .886.721 1.6 1.6 1.6h3.665c.878 0 1.599-.721 1.599-1.6V419.6a1.596 1.596 0 0 0-1.599-1.6zm-12.708 0h-3.665c-.879 0-1.6.721-1.6 1.6v3.665c0 .886.721 1.6 1.6 1.6h3.665c.886 0 1.607-.721 1.607-1.6V419.6a1.617 1.617 0 0 0-1.607-1.6z" fill="#c084fc"/><path d="M630.395 469.424c-6.742 1.983-15.728 5.974-20.568 13.248-4.839 7.274 1.554 9.02 9.789 7.249s16.234-6.876 19.235-13.642c3.002-6.765-2.923-8.482-8.456-6.855z" fill="#E1E4E5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M670.063 241.552v4.671h4.889c2.041 0 3.718 1.602 3.718 3.551 0 1.95-1.677 3.552-3.718 3.552h-4.889v4.671c0 1.95-1.677 3.552-3.718 3.552s-3.718-1.602-3.718-3.552v-4.652h-4.909c-2.041 0-3.718-1.602-3.718-3.551 0-1.95 1.677-3.552 3.718-3.552h4.889v-4.69c0-1.95 1.677-3.552 3.738-3.552 2.041 0 3.718 1.602 3.718 3.552zm-20.429-65.647v6.45h6.89c2.875 0 5.238 2.213 5.238 4.905s-2.363 4.904-5.238 4.904h-6.89v6.451c0 2.692-2.363 4.905-5.239 4.905-2.875 0-5.238-2.213-5.238-4.905v-6.424h-6.918c-2.876 0-5.239-2.212-5.239-4.904 0-2.693 2.363-4.905 5.239-4.905h6.889v-6.477c0-2.692 2.363-4.905 5.267-4.905 2.876 0 5.239 2.213 5.239 4.905zm-59.462-30.846v9.565h9.779c4.082 0 7.436 3.28 7.436 7.272 0 3.992-3.354 7.272-7.436 7.272h-9.779v9.565c0 3.992-3.354 7.272-7.435 7.272-4.081 0-7.435-3.28-7.435-7.272v-9.525h-9.82c-4.081 0-7.435-3.281-7.435-7.272 0-3.992 3.354-7.273 7.435-7.273h9.779v-9.604c0-3.992 3.354-7.272 7.476-7.272 4.081 0 7.435 3.28 7.435 7.272z" fill="#E1E4E5"/><circle r="5.878" transform="matrix(-1 0 0 1 218.548 244.587)" fill="#c084fc"/><circle r="5.222" transform="scale(1 -1) rotate(-75 -81.789 -305.804)" fill="#E1E4E5"/><circle r="6.947" transform="matrix(-1 0 0 1 237.522 198.012)" fill="#E1E4E5"/><path d="M264.995 144.515h.241c1.425 20.525 16.448 20.841 16.448 20.841s-16.566.329-16.566 24.045c0-23.716-16.565-24.045-16.565-24.045s15.016-.316 16.442-20.841z" fill="#E1E4E5"/><path d="M459.907 176.434c-5.636 5.736-16.175 4.527-16.175 4.527s-1.395-10.51 4.246-16.243c5.636-5.736 16.17-4.53 16.17-4.53s1.395 10.51-4.241 16.246z" fill="url(#e)"/><path d="M694.311 437.477c-11.341 11.542-32.548 9.108-32.548 9.108s-2.806-21.147 8.545-32.683c11.341-11.542 32.537-9.116 32.537-9.116s2.806 21.148-8.534 32.691z" fill="url(#f)"/><circle cx="392.132" cy="178.209" r="11.259" fill="#E1E4E5"/><path d="M204.82 288.049H188m35.883-8.971H188m15.699 18.502H188" stroke="#E1E4E5" stroke-width="4.046" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="a" x1="362.982" y1="-63.369" x2="486.356" y2="856.003" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient><linearGradient id="b" x1="535.216" y1="186.578" x2="558.682" y2="734.158" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient><linearGradient id="e" x1="437.421" y1="196.027" x2="478.165" y2="132.157" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient><linearGradient id="f" x1="649.063" y1="476.903" x2="731.05" y2="348.382" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient></defs></svg>
            <p className='text-black text-xl pt-2 font-bold text-center'> Add Cards </p>
            <p className=" text-gray-400 text-center text-base break-all pt-5"> Add multiple cards and track</p>
            <p className=" text-gray-400 text-center text-base break-all ">your daily expense with quality</p>
            <p className=" text-gray-400 text-center text-base break-all">interface</p>                
        </motion.section>
    </section>
    );
}

export default Hiw_Cards;