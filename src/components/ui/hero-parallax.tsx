"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
// import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 300]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[80vh] sm:h-[250vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-3xl relative text-center mx-auto py-6 sm:py-10 md:py-20 px-4 w-full left-0 top-0">
      <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-cormorant dark:text-white tracking-wide md:tracking-widest">
        WE BUILD <br /> WEBSITES THAT <br />
        <span className="text-[#5f43b2]">CONVERT</span>
      </h1>
      <p className="max-w-2xl mx-auto text-md sm:text-2xl md:text-xl mt-3 sm:mt-4 md:mt-8 dark:text-neutral-200 font-cormorant">
        Custom-built websites tailored to your business needs. We specialize in
        modern, scalable, and high-performing web solutions.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
     
    </motion.div>
  );
};



// "use client";
// import React from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   MotionValue,
// } from "framer-motion";
// import Image from "next/image";

// export const HeroParallax = ({
//   products,
// }: {
//   products: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   }[];
// }) => {
//   const firstRow = products.slice(0, 5);
//   const secondRow = products.slice(5, 10);
//   const thirdRow = products.slice(10, 15);
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

//   const translateX = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, 1000]),
//     springConfig
//   );
//   const translateXReverse = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, -1000]),
//     springConfig
//   );
//   const rotateX = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
//     springConfig
//   );
//   const opacity = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
//     springConfig
//   );
//   const rotateZ = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
//     springConfig
//   );
//   const translateY = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [-700, 300]),
//     springConfig
//   );

//   return (
//     <div
//       ref={ref}
//       className="h-[300vh] md:h-[250vh] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
//     >
//       <Header />
//       <motion.div
//         style={{
//           rotateX,
//           rotateZ,
//           translateY,
//           opacity,
//         }}
//         className="px-4 md:px-0"
//       >
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 mb-10 md:mb-20">
//           {firstRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row mb-10 md:mb-20 space-x-4 md:space-x-20">
//           {secondRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateXReverse}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20">
//           {thirdRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export const Header = () => {
//   return (
//     <div className="max-w-3xl relative text-center mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
//       <h1 className="text-4xl md:text-7xl font-bold font-cormorant dark:text-white tracking-wide md:tracking-widest">
//         WE BUILD <br /> WEBSITES THAT <br />
//         <span className="text-[#5f43b2]">CONVERT</span>
//       </h1>
//       <p className="max-w-2xl mx-auto text-sm md:text-xl mt-4 md:mt-8 dark:text-neutral-200 font-cormorant">
//         Custom-built websites tailored to your business needs. We specialize in
//         modern, scalable, and high-performing web solutions.
//       </p>
//     </div>
//   );
// };

// export const ProductCard = ({
//   product,
//   translate,
// }: {
//   product: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   };
//   translate: MotionValue<number>;
// }) => {
//   return (
//     <motion.div
//       style={{
//         x: translate,
//       }}
//       whileHover={{
//         y: -20,
//       }}
//       key={product.title}
//       className="group/product h-48 md:h-96 w-40 md:w-[30rem] relative flex-shrink-0"
//     >
//       <Image
//         src={product.thumbnail}
//         height="600"
//         width="600"
//         className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
//         alt={product.title}
//       />
//     </motion.div>
//   );
// };

// export default function Home() {
//   const products = [
//     {
//       title: "Moonbeam",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       title: "Cursor",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//     },
//     {
//       title: "Rogue",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       title: "Editorially",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
//     },
//     {
//       title: "Editrix AI",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
//     },
//     {
//       title: "Pixel Perfect",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       title: "Algochurn",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       title: "Aceternity UI",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       title: "Tailwind Master Kit",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
//     },
//     {
//       title: "SmartBridge",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1579547621869-0ddb5f237392?q=80&w=2039&auto=format&fit=crop",
//     },
//     {
//       title: "Firebase UI",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop",
//     },
//     {
//       title: "Nexus",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
//     },
//     {
//       title: "Velocity",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1579547621869-0ddb5f237392?q=80&w=2039&auto=format&fit=crop",
//     },
//     {
//       title: "Aurora",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop",
//     },
//     {
//       title: "Quantum",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
//     },
//   ];

//   return <HeroParallax products={products} />;
// }







// "use client";
// import React from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   MotionValue,
// } from "framer-motion";
// import Image from "next/image";

// export const HeroParallax = ({
//   products,
// }: {
//   products: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   }[];
// }) => {
//   const firstRow = products.slice(0, 5);
//   const secondRow = products.slice(5, 10);
//   const thirdRow = products.slice(10, 15);
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

//   const translateX = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, 400]),
//     springConfig
//   );
//   const translateXReverse = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, -400]),
//     springConfig
//   );
//   const rotateX = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
//     springConfig
//   );
//   const opacity = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
//     springConfig
//   );
//   const rotateZ = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
//     springConfig
//   );
//   const translateY = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [-300, 100]),
//     springConfig
//   );

//   return (
//     <div
//       ref={ref}
//       className="h-[100vh] sm:h-[250vh] md:h-[250vh] py-8 sm:py-12 md:py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
//     >
//       <Header />
//       <motion.div
//         style={{
//           rotateX,
//           rotateZ,
//           translateY,
//           opacity,
//         }}
//         className="px-2 sm:px-4 md:px-0"
//       >
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 sm:space-x-4 md:space-x-12 lg:space-x-20 mb-4 sm:mb-8 md:mb-20">
//           {firstRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row mb-4 sm:mb-8 md:mb-20 space-x-2 sm:space-x-4 md:space-x-12 lg:space-x-20">
//           {secondRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateXReverse}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 sm:space-x-4 md:space-x-12 lg:space-x-20">
//           {thirdRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export const Header = () => {
//   return (
//     <div className="max-w-3xl relative text-center mx-auto py-6 sm:py-10 md:py-20 px-4 w-full left-0 top-0">
//       <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-cormorant dark:text-white tracking-wide md:tracking-widest">
//         WE BUILD <br /> WEBSITES THAT <br />
//         <span className="text-[#5f43b2]">CONVERT</span>
//       </h1>
//       <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-xl mt-3 sm:mt-4 md:mt-8 dark:text-neutral-200 font-cormorant">
//         Custom-built websites tailored to your business needs. We specialize in
//         modern, scalable, and high-performing web solutions.
//       </p>
//     </div>
//   );
// };

// export const ProductCard = ({
//   product,
//   translate,
// }: {
//   product: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   };
//   translate: MotionValue<number>;
// }) => {
//   return (
//     <motion.div
//       style={{
//         x: translate,
//       }}
//       whileHover={{
//         y: -10,
//       }}
//       key={product.title}
//       className="group/product h-24 sm:h-40 md:h-60 lg:h-96 w-20 sm:w-32 md:w-48 lg:w-[30rem] relative flex-shrink-0"
//     >
//       <Image
//         src={product.thumbnail}
//         height={200}
//         width={200}
//         sizes="(max-width: 640px) 80px, (max-width: 768px) 128px, (max-width: 1024px) 192px, 480px"
//         className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
//         alt={product.title}
//         priority
//       />
//     </motion.div>
//   );
// };

// export default function Home() {
//   const products = [
//     {
//       title: "Moonbeam",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       title: "Cursor",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//     },
//     {
//       title: "Rogue",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       title: "Editorially",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
//     },
//     {
//       title: "Editrix AI",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
//     },
//     {
//       title: "Pixel Perfect",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       title: "Algochurn",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       title: "Aceternity UI",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       title: "Tailwind Master Kit",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
//     },
//     {
//       title: "SmartBridge",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1579547621869-0ddb5f237392?q=80&w=2039&auto=format&fit=crop",
//     },
//     {
//       title: "Firebase UI",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop",
//     },
//     {
//       title: "Nexus",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
//     },
//     {
//       title: "Velocity",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1579547621869-0ddb5f237392?q=80&w=2039&auto=format&fit=crop",
//     },
//     {
//       title: "Aurora",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop",
//     },
//     {
//       title: "Quantum",
//       link: "#",
//       thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
//     },
//   ];

//   return <HeroParallax products={products} />;
// }