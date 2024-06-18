import '../assets/404.css';

const photos = import.meta.env.MODE === "development" ? "http://localhost:5173/public/" : "https://main--gamingbug.netlify.app/";


const ErrorPage = () =>{



    return(
        <div className="bgerror flex flex-col h-screen items-center justify-center">


            <div className="justify-center flex"><img src={`${photos}public/404e.png`} className="w-1/2" alt="404 image"/></div>
               <div className="mt-12"> <h1 className="heavy-font text-white text-4xl">OUT OF EXISTENCE</h1></div>
            <div><p className="text-white mt-2">Sorry! This page doesn't exist. </p></div>
            <div>
                <a href="/"
                    className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span
    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Go to Home Page
</span>
                </a>

            </div>
        </div>


    )
}

export default ErrorPage;