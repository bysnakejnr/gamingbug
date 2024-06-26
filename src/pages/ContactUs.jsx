import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer.jsx";
import PhoneInput from 'react-phone-number-input'
import Input from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'

const photos = import.meta.env.MODE === "development" ? "http://localhost:5173/public/" : "https://main--gamingbug.netlify.app/";

const ContactUs = () =>{
    const [showModal, setShowModal] = useState(false);
    const [showModalError, setShowModalError] = useState(false);
    useEffect(() => emailjs.init("BfSJv0_bhkMAL7S1Q"), []);
    const emailRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_wb6we5a";
        const templateId = "template_psnvoq8";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                message: messageRef.current.value
            });
            setShowModal(true)
        } catch (error) {
            console.log(error);
            setShowModalError(true)
        } finally {
            setLoading(false);
        }
    };

    return(
        <>


            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Message sent successfully!
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        Thanks for reaching out, your message is very important to us. We'll get back to you as soon as we can!
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-white bg-black rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Done
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}


            {showModalError ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Message was not delivered!
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModalError(false)}
                                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        We know your message is important, sorry it wasn't delivered at this time. Please try again later.
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-white bg-red-900 rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModalError(false)}
                                    >
                                        Okay
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}



            <div>
                <a href="/"> <img src={`${photos}/gbugicon-black.png`}
                                  className="sm:w-1/6 md:w-1/6 lg:w-1/12 w-24 mx-auto justify-center items-center self-center content-center"
                                  alt="logo"/></a></div>
            <motion.div animate={{x: [800, 0]}}
                        transition={{type: "spring", stiffness: 100, ease: "easeOut", duration: 0.5}}

                        className="min-h-svh lg:-my-32 mx-auto justify-center items-center self-center content-center">

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
                                        <img src={`${photos}contactusimage.png`}
                                             alt="ContactUs-bg"
                                             className="w-full h-full object-cover lg:rounded-l-2xl rounded-2xl bg-blend-multiply"
                                             style={{backgroundColor: '#C6DBCF'}}/>
                                        <h1 className="font-manrope text-black text-4xl font-bold leading-10 absolute top-11 left-11 heavy-font">Contact
                                            us</h1>
                                        <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                            <div className="bg-white rounded-lg p-2 sm:p-6 md:p-6 lg:p-6 xl:p-6 block">

                                                <a href="#" className="flex items-center mb-6">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                                                            stroke="#000000" strokeWidth="2"
                                                            strokeLinecap="round"/>
                                                    </svg>
                                                    <h5 className="text-black sm:text-base md:text-base lg:text-base xl:text-base text-sm font-normal leading-6 ml-5">gamingbug@support.co</h5>
                                                </a>
                                                <a href="#" className="flex items-center">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                                                            stroke="#000000" strokeWidth="2"/>
                                                        <path
                                                            d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
                                                            stroke="#000000" strokeWidth="2"/>
                                                    </svg>
                                                    <h5 className="text-black sm:text-base md:text-base lg:text-base xl:text-base text-sm font-normal leading-6 ml-5">Gaming
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
                                <form onSubmit={handleSubmit}>
                                    <input ref={nameRef} type="text"
                                           className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                                           placeholder="Name*" required/>
                                    <input ref={emailRef} type="email" required
                                           className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                                           placeholder="Email*"/>
                                    {/*<input ref={phoneRef} type="tel" id="phone" name="phone"*/}
                                    {/*       pattern="[0-9]{3}[0-9]{3}[0-9]{4}"*/}
                                    {/*       className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"*/}
                                    {/*       placeholder="Phone"/>*/}

                                    <Input ref={phoneRef}
                                        initialvalueformat="national"
                                        value={phone}
                                           placeholder="Phone"
                                           maxLength="17"
                                        onChange={setPhone} className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"/>

                                    <input ref={messageRef} type="text"
                                           className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                                           placeholder="Message*" required/>


                                    <button type="submit" disabled={loading}
                                            className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-black shadow-sm">Send
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </motion.div>

            <Footer />
        </>
    )
}

export default ContactUs;