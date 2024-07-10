
import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
       <header className="shadow sticky z-50 top-0">
            <nav className="bg-slate-400 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to='/'className="flex items-center">
                  <img src="" className="mr-3 h-12" alt="logo" />
                  </Link>

                  <div className="flex items-center">
                <ul className="flex space-x-8 text-gray-900">
                    <li>
                        <Link to='/' className="hover:text-blue-600">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className="hover:text-blue-600">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact' className="hover:text-blue-600">
                            Contact Us
                        </Link>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
       </header>
    )
}
export default Header