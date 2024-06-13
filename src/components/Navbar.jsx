import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from "react-router-dom";



const photos = import.meta.env.MODE === "development" ? "http://localhost:5173/public/" : "https://main--gamingbug.netlify.app/";



function Navbar() {

    return (
        <>
            <Disclosure as="nav" className="bg-transparent">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-20 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                                    <div className="flex flex-shrink-0 items-center">
                                        <a href="/">
                                        <img
                                            className="navlogo h-10 w-auto"
                                            src={`${photos}/GB-B-2048.png`}
                                            alt="Gamingbug"
                                        /></a>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="navbar flex space-x-4">

                                            <a href="/"
                                               className='text-lg relative group text-black text-gray-100 transition-all duration-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium
                                                  dark:text-black text-gray-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                            ><span
                                                className="absolute bottom-0 left-0 w-0 h-1
                                                bg-white group-hover:w-full group-hover:transition-all
                                                group-hover:duration-100 ease-in-out hover:transition-all
                                                dark:transition-all hover:duration-300 dark:duration-300"></span>
                                                Homepage
                                            </a>
                                            <a href="#about"
                                               className='text-lg relative group text-black text-gray-100 transition-all duration-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium
                                                  dark:text-black text-gray-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                            ><span
                                                className="absolute bottom-0 left-0 w-0 h-1
                                                bg-white group-hover:w-full group-hover:transition-all
                                                group-hover:duration-100 ease-in-out hover:transition-all
                                                dark:transition-all hover:duration-300 dark:duration-300"></span>
                                                About Us
                                            </a>
                                            <a href="#games"
                                               className='text-lg relative group text-black text-gray-100 transition-all duration-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium
                                                  dark:text-black text-gray-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                            ><span
                                                className="absolute bottom-0 left-0 w-0 h-1
                                                bg-white group-hover:w-full group-hover:transition-all
                                                group-hover:duration-100 ease-in-out hover:transition-all
                                                dark:transition-all hover:duration-300 dark:duration-300"></span>
                                                Our Games
                                            </a>
                                            <a href="#team"
                                               className='text-lg relative group text-black text-gray-100 transition-all duration-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium
                                                  dark:text-black text-gray-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                            ><span
                                                className="absolute bottom-0 left-0 w-0 h-1
                                                bg-white group-hover:w-full group-hover:transition-all
                                                group-hover:duration-100 ease-in-out hover:transition-all
                                                dark:transition-all hover:duration-300 dark:duration-300"></span>
                                                Our Team
                                            </a>
                                            <Link to="/contactus"
                                               className='text-lg relative group text-black text-gray-100 transition-all duration-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium
                                                  dark:text-black text-gray-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                            ><span
                                                className="absolute bottom-0 left-0 w-0 h-1
                                                bg-white group-hover:w-full group-hover:transition-all
                                                group-hover:duration-100 ease-in-out hover:transition-all
                                                dark:transition-all hover:duration-300 dark:duration-300"></span>
                                                Contact Us
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-16 pt-2">
                                <a href="/"
                                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Homepage</a>
                                <a href="#about"
                                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About
                                    Us</a>
                                <a href="#games"
                                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Our
                                    Games</a>
                                <a href="#team"
                                   className="z-auto block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Our
                                    Team</a>
                                <a href="#contact"
                                   className="z-auto block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</a>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}

export default Navbar