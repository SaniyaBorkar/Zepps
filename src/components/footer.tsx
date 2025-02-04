// 'use client';

// import { Mail, MessageCircle, Twitter } from 'lucide-react';
// import Link from 'next/link';
// import { Button } from './ui/button';

// export function Footer() {
//   return (
//     <footer className="bg-black text-gray-400 py-12 mt-auto">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="col-span-1 md:col-span-1 space-y-4">
//             <h2 className="text-2xl font-bold text-white mb-4">Logo</h2>
//             <p className="text-sm">
//               Want to make sure we fit in the right fit? Book a discovery call!
//             </p>
//             <div className="space-y-3">
//               <Button variant="outline" className="w-full md:w-auto">
//                 Book a call
//               </Button>
//               <Button variant="ghost" className="w-full md:w-auto">
//                 See our plans
//               </Button>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="space-y-4">
//             <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
//               Navigation
//             </h3>
//             <ul className="space-y-2">
//               {['Login', 'Subscribe', 'Features', 'Scope of work', 'Plans', 'FAQs'].map((item) => (
//                 <li key={item}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal */}
//           <div className="space-y-4">
//             <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
//               Legal Info
//             </h3>
//             <ul className="space-y-2">
//               {['Terms & Conditions', 'Privacy Policy'].map((item) => (
//                 <li key={item}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="space-y-4">
//             <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
//               Contact us
//             </h3>
//             <div className="space-y-2">
//               <a
//                 href="mailto:contact@example.com"
//                 className="flex items-center space-x-2 hover:text-white transition-colors"
//               >
//                 <Mail className="h-4 w-4" />
//                 <span>contact@example.com</span>
//               </a>
//               <div className="flex space-x-4 pt-4">
//                 <Button variant="ghost" size="icon" className="hover:text-white">
//                   <Twitter className="h-4 w-4" />
//                 </Button>
//                 <Button variant="ghost" size="icon" className="hover:text-white">
//                   <MessageCircle className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <p className="text-sm">Made by Example Studio</p>
//           <Button variant="ghost" size="sm" className="rounded-full">
//             Back to top
//           </Button>
//         </div>
//       </div>
//     </footer>
//   );
// }



'use client';

import { Mail, MessageCircle, Twitter, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="relative bg-white dark:bg-black text-black dark:text-gray-400 py-12 mt-auto border-t-1 border-[#5f43b2] shadow-[0_0_20px_#5f43b2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="col-span-1 md:col-span-1 space-y-4">
<div className="flex items-center">
            <Rocket className="h-8 w-8 text-[#5f43b2] dark:[#5f43b2]" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
              ZEPPS
            </span>
          </div>            <p className="text-sm">
              Want to make sure we fit in the right fit? Book a discovery call!
            </p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full md:w-auto border-[#5f43b2] text-[#5f43b2] hover:bg-[#5f43b2] hover:text-white">
                Book a call
              </Button>
              <Button variant="ghost" className="w-full md:w-auto text-[#5f43b2] hover:underline">
                See our plans
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#5f43b2] dark:text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {['Login', 'Subscribe', 'Features', 'Scope of work', 'Plans', 'FAQs'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#5f43b2] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#5f43b2] dark:text-white uppercase tracking-wider">
              Legal Info
            </h3>
            <ul className="space-y-2">
              {['Terms & Conditions', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#5f43b2] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#5f43b2] dark:text-white uppercase tracking-wider">
              Contact us
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:contact@example.com"
                className="flex items-center space-x-2 hover:text-[#5f43b2] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>zepps@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-4">
                <Button variant="ghost" size="icon" className="hover:text-[#5f43b2]">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-[#5f43b2]">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center md:space-y-0">
          <p className="text-sm">Made by Zepps</p>
          <Link href="/"><Button variant="ghost" size="sm" className="rounded-full hover:text-[#5f43b2]">
            Back to top
          </Button></Link>
        </div>
      </div>
    </footer>
  );
}
