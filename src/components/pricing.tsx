// import React from 'react'

// import { Check } from 'lucide-react';


// export default function Pricing() {
//   return (
//     <div className="min-h-screen text-white py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
//           <p className="text-gray-400">Choose the plan that's right for you</p>
//         </div>
        
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {/* Starter Pack */}
//           <div className="bg-gray-800 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
//             <h3 className="text-xl font-semibold mb-2">Starter Pack</h3>
//             <p className="text-gray-400 text-sm mb-6">Perfect for individuals and small projects.</p>
//             <div className="mb-6">
//               <span className="text-4xl font-bold">$49</span>
//               <span className="text-gray-400">/month</span>
//             </div>
//             <div className="space-y-4 mb-8">
//               {['Up to 5 Pages: Custom design tailored to your brand', 'Responsive Design: Optimized for desktop, tablet, and mobile', 'SEO Optimization: Basic on-page SEO setup', 'Free Domain & Hosting: For the first year'].map((feature, index) => (
//                 <div key={index} className="flex items-center">
//                   <Check className="h-5 w-5 text-purple-500 mr-2" />
//                   <span className="text-gray-300 text-sm">{feature}</span>
//                 </div>
//               ))}
//             </div>
//             <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
//               Get Started
//             </button>
//           </div>

//           {/* Small Business */}
//           <div className="bg-gray-800 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 relative">
//             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//               <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm">
//                 Most Popular
//               </span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Small Business</h3>
//             <p className="text-gray-400 text-sm mb-6">For growing businesses looking to expand their online presence.</p>
//             <div className="mb-6">
//               <span className="text-4xl font-bold">$99</span>
//               <span className="text-gray-400">/month</span>
//             </div>
//             <div className="space-y-4 mb-8">
//               {['Up to 15 Pages: Professional design with advanced features', 'Custom Design & Branding: Tailored to your business needs', 'SEO Optimization: Advanced on-page SEO & Google Analytics setup', '2 Revisions: Two rounds of revisions', 'Free Domain & Hosting: For the first year'].map((feature, index) => (
//                 <div key={index} className="flex items-center">
//                   <Check className="h-5 w-5 text-purple-500 mr-2" />
//                   <span className="text-gray-300 text-sm">{feature}</span>
//                 </div>
//               ))}
//             </div>
//             <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
//               Get Started
//             </button>
//           </div>

//           {/* Enterprise */}
//           <div className="bg-gray-800 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
//             <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
//             <p className="text-gray-400 text-sm mb-6">The ideal solution for large businesses with complex requirements.

// </p>
//             <div className="mb-6">
//               <span className="text-4xl font-bold">$199</span>
//               <span className="text-gray-400">/month</span>
//             </div>
//             <div className="space-y-4 mb-8">
//               {['Unlimited Pages: Tailored, scalable web development', 'Custom Features: Advanced functionalities and integrations', 'SEO Optimization: Full SEO audit and strategy implementation', 'CMS Integration: Content Management System setup for easy website management', 'Multiple Revisions: Unlimited revisions to ensure perfection', 'Premium Hosting: Dedicated server and enhanced security features', 'Priority Support: 24/7 dedicated support team'].map((feature, index) => (
//                 <div key={index} className="flex items-center">
//                   <Check className="h-5 w-5 text-purple-500 mr-2" />
//                   <span className="text-gray-300 text-sm">{feature}</span>
//                 </div>
//               ))}
//             </div>
//             <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
//               Contact Sales
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }






// import React from 'react'
// import { Check } from 'lucide-react';

// export default function Pricing() {
//   return (
//     <div className="min-h-screen py-12 px-4  transition-colors">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
//           <p className="text-gray-600 dark:text-gray-400">Choose the plan that's right for you</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {/* Pricing Card Component */}
//           {[
//             {
//               title: 'Starter Pack',
//               price: '$49',
//               description: 'Perfect for individuals and small projects.',
//               features: [
//                 'Up to 5 Pages: Custom design tailored to your brand',
//                 'Responsive Design: Optimized for desktop, tablet, and mobile',
//                 'SEO Optimization: Basic on-page SEO setup',
//                 'Free Domain & Hosting: For the first year',
//               ],
//               buttonText: 'Get Started',
//             },
//             {
//               title: 'Small Business',
//               price: '$99',
//               description: 'For growing businesses looking to expand their online presence.',
//               features: [
//                 'Up to 15 Pages: Professional design with advanced features',
//                 'Custom Design & Branding: Tailored to your business needs',
//                 'SEO Optimization: Advanced on-page SEO & Google Analytics setup',
//                 '2 Revisions: Two rounds of revisions',
//                 'Free Domain & Hosting: For the first year',
//               ],
//               buttonText: 'Get Started',
//               popular: true,
//             },
//             {
//               title: 'Enterprise',
//               price: '$199',
//               description: 'The ideal solution for large businesses with complex requirements.',
//               features: [
//                 'Unlimited Pages: Tailored, scalable web development',
//                 'Custom Features: Advanced functionalities and integrations',
//                 'SEO Optimization: Full SEO audit and strategy implementation',
//                 'CMS Integration: Content Management System setup',
//                 'Multiple Revisions: Unlimited revisions',
//                 'Premium Hosting: Dedicated server and enhanced security features',
//                 'Priority Support: 24/7 dedicated support team',
//               ],
//               buttonText: 'Contact Sales',
//             },
//           ].map((plan, index) => (
//             <div key={index} className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 shadow-lg">
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <span className="bg-[#5f43b2] text-white px-4 py-1 rounded-full text-sm">
//                     Most Popular
//                   </span>
//                 </div>
//               )}
//               <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
//               <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{plan.description}</p>
//               <div className="mb-6">
//                 <span className="text-4xl font-bold text-[#5f43b2]">{plan.price}</span>
//                 <span className="text-gray-600 dark:text-gray-400">/month</span>
//               </div>
//               <div className="space-y-4 mb-8">
//                 {plan.features.map((feature, idx) => (
//                   <div key={idx} className="flex items-center">
//                     <Check className="h-5 w-5 text-[#5f43b2] mr-2" />
//                     <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//               <button className="w-full py-3 px-4 bg-[#5f43b2] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
//                 {plan.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from 'react'
// import { Check } from 'lucide-react';

// export default function Pricing() {
//   return (
//     <div className="min-h-screen py-12 px-4 transition-colors">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
//           <p className="text-gray-600 dark:text-gray-400">Choose the plan that&apos;s right for you</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//           {/* Pricing Card Component */}
//           {[  
//             {
//               title: 'Starter Pack',
//               price: '$49',
//               description: 'Perfect for individuals and small projects.',
//               features: [
//                 'Up to 5 Pages: Custom design tailored to your brand',
//                 'Responsive Design: Optimized for desktop, tablet, and mobile',
//                 'SEO Optimization: Basic on-page SEO setup',
//                 'Free Domain & Hosting: For the first year',
//               ],
//               buttonText: 'Get Started',
//             },
//             {
//               title: 'Small Business',
//               price: '$99',
//               description: 'For growing businesses looking to expand their online presence.',
//               features: [
//                 'Up to 15 Pages: Professional design with advanced features',
//                 'Custom Design & Branding: Tailored to your business needs',
//                 'SEO Optimization: Advanced on-page SEO & Google Analytics setup',
//                 '2 Revisions: Two rounds of revisions',
//                 'Free Domain & Hosting: For the first year',
//               ],
//               buttonText: 'Get Started',
//               popular: true,
//             },
//             {
//               title: 'Enterprise',
//               price: '$199',
//               description: 'The ideal solution for large businesses with complex requirements.',
//               features: [
//                 'Unlimited Pages: Tailored, scalable web development',
//                 'Custom Features: Advanced functionalities and integrations',
//                 'SEO Optimization: Full SEO audit and strategy implementation',
//                 'CMS Integration: Content Management System setup',
//                 'Multiple Revisions: Unlimited revisions',
//                 'Premium Hosting: Dedicated server and enhanced security features',
//                 'Priority Support: 24/7 dedicated support team',
//               ],
//               buttonText: 'Contact Sales',
//             },
//           ].map((plan, index) => (
//             <div key={index} className="relative bg-transparent dark:bg-transparent rounded-2xl p-8 hover:scale-105 transition-transform duration-300 shadow-lg dark:shadow-lg dark:shadow-[#5f43b2]/30 shadow-[#5f43b2]/40 flex flex-col justify-between h-full">
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <span className="bg-[#5f43b2] text-white px-4 py-1 rounded-full text-sm">
//                     Most Popular
//                   </span>
//                 </div>
//               )}
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{plan.description}</p>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-[#5f43b2]">{plan.price}</span>
//                   <span className="text-gray-600 dark:text-gray-400">/month</span>
//                 </div>
//                 <div className="space-y-4 mb-8">
//                   {plan.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center">
//                       <Check className="h-5 w-5 text-[#5f43b2] mr-2" />
//                       <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <button className="w-full py-3 px-4 bg-[#5f43b2] text-white rounded-lg font-medium hover:opacity-90 transition-opacity mt-auto">
//                 {plan.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from 'react'
// import { Check } from 'lucide-react';

// export default function Pricing() {
//   return (
//     <div className="min-h-screen py-12 px-4 sm:px-6 transition-colors">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
//           <p className="text-gray-600 dark:text-gray-400">Choose the plan that&apos;s right for you</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto">
//           {/* Pricing Card Component */}
//           {[  
//             {
//               title: 'Starter Pack',
//               price: '$49',
//               description: 'Perfect for individuals and small projects.',
//               features: [
//                 'Up to 5 Pages: Custom design tailored to your brand',
//                 'Responsive Design: Optimized for desktop, tablet, and mobile',
//                 'SEO Optimization: Basic on-page SEO setup',
//                 'Free Domain & Hosting: For the first year',
//               ],
//               buttonText: 'Get Started',
//             },
//             {
//               title: 'Small Business',
//               price: '$99',
//               description: 'For growing businesses looking to expand their online presence.',
//               features: [
//                 'Up to 15 Pages: Professional design with advanced features',
//                 'Custom Design & Branding: Tailored to your business needs',
//                 'SEO Optimization: Advanced on-page SEO & Google Analytics setup',
//                 '2 Revisions: Two rounds of revisions',
//                 'Free Domain & Hosting: For the first year',
//               ],
//               buttonText: 'Get Started',
//               popular: true,
//             },
//             {
//               title: 'Enterprise',
//               price: '$199',
//               description: 'The ideal solution for large businesses with complex requirements.',
//               features: [
//                 'Unlimited Pages: Tailored, scalable web development',
//                 'Custom Features: Advanced functionalities and integrations',
//                 'SEO Optimization: Full SEO audit and strategy implementation',
//                 'CMS Integration: Content Management System setup',
//                 'Multiple Revisions: Unlimited revisions',
//                 'Premium Hosting: Dedicated server and enhanced security features',
//                 'Priority Support: 24/7 dedicated support team',
//               ],
//               buttonText: 'Contact Sales',
//             },
//           ].map((plan, index) => (
//             <div 
//               key={index} 
//               className="relative bg-transparent dark:bg-transparent rounded-2xl p-6 sm:p-8 
//                 hover:scale-105 transition-transform duration-300 
//                 shadow-lg dark:shadow-lg dark:shadow-[#5f43b2]/30 shadow-[#5f43b2]/40 
//                 flex flex-col justify-between h-full
//                 w-[85%] mx-auto sm:w-full max-w-sm"
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <span className="bg-[#5f43b2] text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
//                     Most Popular
//                   </span>
//                 </div>
//               )}
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-6">{plan.description}</p>
//                 <div className="mb-4 sm:mb-6">
//                   <span className="text-4xl font-bold text-[#5f43b2]">{plan.price}</span>
//                   <span className="text-gray-600 dark:text-gray-400">/month</span>
//                 </div>
//                 <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
//                   {plan.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-start">
//                       <Check className="h-5 w-5 text-[#5f43b2] mr-2 flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <button className="w-full py-3 px-4 bg-[#5f43b2] text-white rounded-lg font-medium 
//                 hover:opacity-90 transition-opacity mt-auto
//                 active:scale-95 transform transition-transform duration-150">
//                 {plan.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




import React from 'react'
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-600 dark:text-gray-400">Choose the plan that&apos;s right for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-6 max-w-5xl mx-auto">
          {/* Pricing Card Component */}
          {[  
            {
              title: 'Starter Pack',
              price: '$49',
              description: 'Perfect for individuals and small projects.',
              features: [
                'Up to 5 Pages: Custom design tailored to your brand',
                'Responsive Design: Optimized for desktop, tablet, and mobile',
                'SEO Optimization: Basic on-page SEO setup',
                'Free Domain & Hosting: For the first year',
              ],
              buttonText: 'Get Started',
            },
            {
              title: 'Small Business',
              price: '$99',
              description: 'For growing businesses looking to expand their online presence.',
              features: [
                'Up to 15 Pages: Professional design with advanced features',
                'Custom Design & Branding: Tailored to your business needs',
                'SEO Optimization: Advanced on-page SEO & Google Analytics setup',
                '2 Revisions: Two rounds of revisions',
                'Free Domain & Hosting: For the first year',
              ],
              buttonText: 'Get Started',
              popular: true,
            },
            {
              title: 'Enterprise',
              price: '$199',
              description: 'The ideal solution for large businesses with complex requirements.',
              features: [
                'Unlimited Pages: Tailored, scalable web development',
                'Custom Features: Advanced functionalities and integrations',
                'SEO Optimization: Full SEO audit and strategy implementation',
                'CMS Integration: Content Management System setup',
                'Multiple Revisions: Unlimited revisions',
                'Premium Hosting: Dedicated server and enhanced security features',
                'Priority Support: 24/7 dedicated support team',
              ],
              buttonText: 'Contact Sales',
            },
          ].map((plan, index) => (
            <div 
              key={index} 
              className="relative bg-transparent dark:bg-transparent rounded-2xl p-6 sm:p-8 
                hover:scale-105 transition-transform duration-300 
                shadow-lg dark:shadow-lg dark:shadow-[#5f43b2]/30 shadow-[#5f43b2]/40 
                flex flex-col justify-between h-full
                w-[85%] mx-auto sm:w-full max-w-sm
                mb-8 md:mb-0"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#5f43b2] text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-6">{plan.description}</p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl font-bold text-[#5f43b2]">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-[#5f43b2] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full py-3 px-4 bg-[#5f43b2] text-white rounded-lg font-medium 
                hover:opacity-90 transition-opacity mt-auto
                active:scale-95 transform transition-transform duration-150">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}