import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return (
        <footer className="bg-slate-500 border-t border-gray-200 py-6">
    <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="flex flex-wrap justify-between items-center">
            <span className="text-sm text-white sm:text-center">
                © 2024 Your Company. All Rights Reserved.
            </span>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
                <ul>
                    <li>
                    <Link to='/' className="text-white hover:text-blue-600">
                    Home
                </Link> 
                    </li>
                    <li>
                    <Link to='/about' className="text-white hover:text-blue-600">
                    About
                </Link>
                    </li>
                    <li>
                    <Link to='/contact' className="text-white hover:text-blue-600">
                    Contact Us
                </Link>
                    </li>
                </ul>
                
                
               
                
            </div>
        </div>
    </div>
</footer>

    )
}
export default Footer