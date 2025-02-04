// import React, { useState } from 'react';
// import { Menu, X, Rocket } from 'lucide-react';
// import { ModeToggle } from './toggle';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className=" w-full backdrop-blur-sm shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Rocket className="h-8 w-8 text-indigo-600" />
//             <span className="ml-2 text-xl font-bold text-gray-800">RocketApp</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center justify-center flex-1">
//             <div className="flex space-x-8">
//               {['Home', 'About', 'Product', 'Features'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className=" hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
          
//           </div>

//           {/* Sign In Button */}
//           <div className="hidden md:flex items-center">
//             <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
//               Sign In
//             </button>
//           </div>

//           <div className=' px-10  '><ModeToggle/></div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none"
//             >
//               {isOpen ? (
//                 <X className="block h-6 w-6" />
//               ) : (
//                 <Menu className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//       {/* <div className={`md:hidden ${isOpen ? '!block' : 'hidden'}`}> */}

//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-sm">
//           {['Home', 'About', 'Product', 'Features'].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               {item}
//             </a>
//           ))}
//           <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors mt-2">
//             Sign In
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;











'use client';

import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { ModeToggle } from './toggle';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full top-0 z-50 bg-transparent backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-[#5f43b2] dark:[#5f43b2]" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
              ZEPPS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-14">
            {['Home', 'About', 'Product', 'Features'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-gray-800 dark:text-gray-200 hover:text-[#5f43b2] dark:hover:text-[#5f43b2] transition-all"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5f43b2] dark:bg-[#5f43b2] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="px-5 py-2 rounded-md text-sm font-medium bg-[#5f43b2] text-white hover:bg-black hover:border border-white hover:border-0.2 transition-all">
              <Link href='/login'> Sign In </Link>
            </button>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-800 dark:text-[#5f43b2] hover:text-[#5f43b2] dark:hover:text-[#5f43b2] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 backdrop-blur-lg shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {['Home', 'About', 'Product', 'Features'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-800 dark:text-gray-200 hover:text-[#5f43b2] dark:hover:text-[#5f43b2] transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-[#5f43b2] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#5f43b2] transition-all">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
