// import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
// import { Button } from "./ui/button";
import { AnimatedTooltipPreview } from "./ui/Faces-tooltip";

export function WhyChooseUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-40 ">
      <div className="max-w-5xl mb-20 px-6 sm:px-6">
        <h2 className="text-3xl">WHY CHOOSE US</h2>
        <h2 className="text-4xl font-semibold pt-5"> Bring Your Vision to Life</h2>
        <p className="mt-10">
          At Zeps, we create websites that not only look great but perform
          flawlessly. Whether you’re a startup or an established business, we
          design custom solutions to help you succeed online. Let us help you
          build a strong digital presence that drives results.
        </p>
        <div className="mt-5 flex items-center justify-start">
          <button className="px-5 w-30 py-2 rounded-md text-sm font-medium bg-[#5f43b2] text-black border border-white hover:bg-transparent hover:border-0.2 hover:border-black transition-all dark:text-white dark:border-gray-700 dark:hover:bg-transparent">
            View work
          </button>
          <AnimatedTooltipPreview /> {/* Adjust margin if needed */}
        </div>
      </div>
      <BentoGrid className="max-w-5xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
const items = [
  {
    title: "Tailored Solutions",
    description:
      "We take the time to understand your business and design a solution that aligns with your vision and goals.",
    header: "/images/tailoredSolutions.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We’re not happy until you’re happy. Our client-first approach means we work closely with you at every stage of the project.",
    header: "/images/customerCentric.png",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "On-Time Delivery",
    description:
      "We understand the importance of timelines. You can count on us to deliver your project on time, without compromising on quality.",
    header: "/images/onTimeDelivery.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Expert Team",
    description:
      "Our team consists of experienced developers, designers, and digital strategists, ensuring a smooth development process and high-quality output.",
    header: "/images/expertTeam.png",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ongoing Support",
    description:
      "Our commitment doesn’t end after launch. We offer continuous support and maintenance to ensure your website remains up-to-date and fully functional.",
    header: "/images/ongoingSupport.png",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Affordable and Scalable Solutions",
    description:
      "We offer competitive pricing and scalable solutions to fit any budget. As your business grows, we can easily expand and enhance your website to meet your evolving needs.",
    header: "/images/affordableAndScalable.png",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We use the latest tools, technologies, and best practices to ensure your website is fast, secure, and scalable.",
    header: "/images/cuttingEdgeTechnology.png",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
