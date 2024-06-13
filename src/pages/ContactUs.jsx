import { motion } from "framer-motion"


const photos = import.meta.env.MODE === "development" ? "http://localhost:5173/public/" : "https://main--gamingbug.netlify.app/";

const ContactUs = () =>{



    return(
        <>
            <div>
                <a href="/"> <img src={`${photos}/gbugicon-black.png`} className="sm:w-1/6 md:w-1/6 lg:w-1/12 w-24 mx-auto justify-center items-center self-center content-center" alt="logo"/></a></div>
            <motion.div animate={{x: [800, 0]}}
                        transition={{type: "spring", stiffness: 100, ease: "easeOut", duration: 0.5}}

                        className="h-screen lg:-my-32 mx-auto justify-center items-center self-center content-center">

                <section className="content-center">

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-row justify-between">
                            <div className="">
                                <a href="/" className="ms-2 mt-10 sm:text-lg">
                                    <i className="bi bi-arrow-bar-left me-2"></i>Go back to main page</a>
                            </div>
                        </div>
                        <div className="grid mt-2 lg:grid-cols-2 grid-cols-1">
                            <div className="lg:mb-0 mb-10">
                                <div className="group w-full h-full">
                                    <div className="relative h-full">
                                        <img src="../../public/contactusimage.png"
                                             alt="ContactUs tailwind section"
                                             className="w-full h-full object-contain lg:rounded-l-2xl rounded-2xl bg-blend-multiply"
                                             style={{backgroundColor: '#C6DBCF'}}/>
                                        <h1 className="font-manrope text-black text-4xl font-bold leading-10 absolute top-11 left-11 heavy-font">Contact
                                            us</h1>
                                        <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                            <div className="bg-white rounded-lg p-6 block">

                                                <a href="javascript:" className="flex items-center mb-6">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                                                            stroke="#000000" strokeWidth="2"
                                                            strokeLinecap="round"/>
                                                    </svg>
                                                    <h5 className="text-black text-base font-normal leading-6 ml-5">gamingbug@support.co</h5>
                                                </a>
                                                <a href="javascript:" className="flex items-center">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                                                            stroke="#000000" strokeWidth="2"/>
                                                        <path
                                                            d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
                                                            stroke="#000000" strokeWidth="2"/>
                                                    </svg>
                                                    <h5 className="text-black text-base font-normal leading-6 ml-5">Gaming
                                                        bug Adresi</h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                transition={{
                                    delay: 1,
                                    ease: "linear",
                                    duration: 2,
                                    x: {duration: 1}
                                }}
                                className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                                <h2 className=" heavy-font font-manrope text-4xl font-semibold leading-10 mb-11 text-black">Send
                                    us a message!</h2>
                                <input type="text"
                                       className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                                       placeholder="Name"/>
                                <input type="text"
                                       className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                                       placeholder="Email"/>
                                <input type="text"
                                       className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                                       placeholder="Phone"/>

                                <input type="text"
                                       className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                                       placeholder="Message"/>
                                <button
                                    className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-black shadow-sm">Send
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </motion.div>

        </>
    )
}

export default ContactUs;