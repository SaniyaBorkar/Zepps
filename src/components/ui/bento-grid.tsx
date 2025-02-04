// import { cn } from "@/lib/utils";
// import Image from "next/image";

// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon,
// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   header?: string; // Change type to string (image URL)
//   icon?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "row-span-1 rounded-xl group/bento transition duration-200 p-4 flex flex-col",
//         "border border-transparent shadow-input dark:shadow-none bg-white dark:bg-black dark:border-white/[0.2]",
//         "hover:shadow-[0_4px_20px_#5f43b2] overflow-hidden",
//         className
//       )}
//     >
//       {/* Image Covering Entire Top */}
//       {header && (
//         <div className="relative w-full h-40">
//           <Image
//             src={header}
//             alt={title?.toString() || "Header Image"}
//             layout="fill" // Make the image cover the div
//             objectFit="cover" // Ensure it covers the area without distortion
//             className="rounded-t-xl"
//           />
//         </div>
//       )}

//       {/* Content Section */}
//       <div className="p-4 flex flex-col">
//         {icon}
//         <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
//           {title}
//         </div>
//         <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// };



import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string; // Change type to string (image URL)
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200 p-4 flex flex-col",
        "border border-transparent shadow-input dark:shadow-none bg-white dark:bg-black dark:border-white/[0.2]",
        "hover:shadow-[0_4px_20px_#5f43b2] dark:hover:shadow-[0_4px_20px_#5f43b2] overflow-hidden", "w-[90%] mx-auto md:w-full",// Add dark mode hover shadow
        className
      )}
    >
      {/* Image Covering Entire Top */}
      {header && (
        <div className="relative w-full h-40">
          <Image
            src={header}
            alt={title?.toString() || "Header Image"}
            layout="fill" // Make the image cover the div
            objectFit="cover" // Ensure it covers the area without distortion
            className="rounded-t-xl"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 flex flex-col">
        
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};



// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon,
// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   header?: React.ReactNode;
//   icon?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "row-span-1 rounded-xl group/bento transition duration-200 p-4 justify-between flex flex-col space-y-4",
//   "border border-transparent shadow-input dark:shadow-none bg-white dark:bg-black dark:border-white/[0.2]",
//   "hover:shadow-[0_4px_20px_#5f43b2] ",
//         className
//       )}
//     >
//       <div>{icon && (
//           <Image 
//             src={header} 
//             alt={title?.toString() || "Icon"} 
//             width={100} 
//             height={40} 
//             className="mb-2"
//           />
//         )}</div>
      
//       <div className="group-hover/bento:translate-x-2 transition duration-200">
//         {icon}
//         <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
//           {title}
//         </div>
//         <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// };