import { useState } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function Navbar() {

    return (
        <>
            <Disclosure as="nav" className="bg-transparent">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src="../../public/GB-B-2048.png"
                                            alt="Gamingbug"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="navbar flex space-x-4">

                                            <a href="#"
                                               className='relative group text-black text-gray-100 transition-all duration-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium
                                                  dark:text-black text-gray-100
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                            ><span
                                                className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full group-hover:transition-all group-hover:duration-100 ease-in-out hover:transition-all dark:transition-all hover:duration-300 dark:duration-300"></span>
                                                Homepage
                                            </a>
                                            <a href="#" className=
                                                'text-black text-gray-300 hover:bg-gray-700
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium
                                                  dark:text-black font-bold text-gray-300 hover:bg-gray-700
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                            >
                                                About Us
                                            </a>
                                            <a href="#" className=
                                                'text-black text-gray-300 hover:bg-gray-700
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium
                                                  dark:text-black text-gray-300 hover:bg-gray-700
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                            >
                                                Our Games
                                            </a>
                                            <a href="#" className=
                                                'bg-gray-300 text-black text-gray-300 hover:bg-gray-700
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium
                                                  dark:bg-gray-900 dark:text-white text-gray-300 hover:bg-gray-700
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                            >
                                                Our Team
                                            </a>
                                            <a href="#" className=
                                                'bg-gray-300 text-black text-gray-300 hover:bg-gray-700
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium
                                                  dark:bg-gray-900 dark:text-white text-gray-300 hover:bg-gray-700
                                                  hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                            >
                                                Contact Us
                                            </a>

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>

                                        </div>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                            HELLO
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}

export default Navbar