import { useIslg } from "@/hooks/utils";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface JobItem {
  project: string;
  category: string;
  year: string;
  skills: string[];
  image: string[];
  desc: string;
}

interface ListJobsProps {
  listJob: JobItem;
  onClick: (project: string) => void;
  isActive: boolean;
  custom: number;
  isInView: boolean;
}

const ListJobs: React.FC<ListJobsProps> = ({
  listJob,
  onClick,
  isActive,
  custom,
  isInView,
}) => {
  const useIsLarge = useIslg();
  const [hover, setHover] = useState(false);

  const slideUp = {
    initial: {
      width: "0%",
    },
    open: (i: any) => ({
      width: "100%",
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i },
    }),
    closed: {
      width: "0%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        initial="initial"
        variants={slideUp}
        animate={isInView ? "open" : "closed"}
        className="lg:border-t-2 border-t-[1px]"
        custom={custom}
      ></motion.div>
      <motion.div
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        animate={{ color: hover ? "#000000" : "#ffffff" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        onClick={() => onClick(listJob.project)}
        className="grid grid-cols-3 justify-between items-center w-full lg:px-8 border-white py-4 relative z-10 overflow-hidden text-black cursor-pointer"
      >
        <p className="relative z-10 ">{listJob.project}</p>
        <p className="ml-[30%] relative z-10 ">{listJob.category}</p>
        <p className="justify-self-end relative z-10 ">{listJob.year}</p>
        <motion.div
          animate={{ top: useIsLarge ? (hover ? "0%" : "-100%") : "-100%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="absolute z-0 bg-white h-full w-full "
        ></motion.div>
      </motion.div>
      <motion.div
        className="lg:px-8"
        transition={{
          duration: isActive ? 0.8 : 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        animate={{ height: isActive ? "auto" : "0" }}
      >
        <div className="lg:py-20 py-10 flex flex-col lg:gap-20 gap-10">
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-6 justify-between">
            <h2 className="lg:text-3xl text-lg leading-normal lg:w-[65%] w-full text-white">
              {listJob.desc}
            </h2>
            <div className="lg:w-[20%] w-full flex flex-col items-start gap-4 text-white">
              <div>
                <h3 className="lg:text-xl text-base pb-1">Instruments</h3>
                <motion.div
                  animate={{ width: isActive ? "100%" : "0" }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className="lg:border-b-2 border-b-[1px] w-min"
                ></motion.div>
              </div>
              <ul className="text-start list-disc flex flex-col gap-2">
                {listJob.skills.map((skill, index) => (
                  <li key={index} className="list-inside">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-4">
            {listJob.image.map((image, index) => (
              <div key={index}>
                <Image
                  className="object-contain w-full h-full p-2 bg-1B1B1B"
                  width={600}
                  height={500}
                  unoptimized
                  alt="Picture of the author"
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Index() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleItemClick = (project: string) => {
    setActiveProject((prev) => (prev === project ? null : project));
  };

  const data = [
    {
      project: "Ayo Belajar Asuransi",
      category: "UI/UX Design & Development",
      year: "2023",
      skills: ["React JS", "Tailwind CSS", "Zustand", "AOS", "Figma"],
      image: [
        "https://i.postimg.cc/JzrtYTZJ/asuransi1.jpg",
        "https://i.postimg.cc/4NTYV43W/asuransi2.jpg",
        "https://i.postimg.cc/dtmLBMkw/asuransi3.jpg",
      ],
      desc: "With an appealing design and intuitive layout, this insurance agent website efficiently conveys sales messages. The responsive design ensures an optimal user experience, enhancing conversion potential and providing a positive experience for visitors.",
    },
    {
      project: "Village of English Learners",
      category: "UI/UX Design",
      year: "2023",
      skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      image: [
        "https://i.postimg.cc/3xCTD7qQ/vel1.jpg",
        "https://i.postimg.cc/52MJ0jnm/vel2.jpg",
        "https://i.postimg.cc/jjxrHmVw/vel3.jpg",
      ],
      desc: "Village of English Learners provides language learning services specifically designed to prepare individuals for the TOEFL examination. The service focuses on enhancing English language skills to ensure effective performance in the TOEFL test.",
    },
    {
      project: "Pamper Me",
      category: "UI/UX Design & Development",
      year: "2022",
      skills: ["PHP", "Codeigniter", "Tailwind CSS", "AOS", "Figma"],
      image: [
        "https://i.postimg.cc/ZqVV1DWd/pamper1.jpg",
        "https://i.postimg.cc/tTcDgZtR/pamper2.jpg",
        "https://i.postimg.cc/ZqTwsh5m/pamper3.jpg",
      ],
      desc: "Pamper Me is a service that offers specialized spa treatments for children and provides playground facilities to create a relaxing and enjoyable experience for them. This service establishes a safe and enjoyable space for children to indulge in spa treatments tailored to their needs while enjoying the provided playground amenities.",
    },
    {
      project: "Golden Gorilla",
      category: "UI/UX Design & Development",
      year: "2022",
      skills: ["Wordpress", "Figma", "Adobe Photoshop", "Adobe Illustrator"],
      image: [
        "https://i.postimg.cc/v8j5xdRB/gg1.jpg",
        "https://i.postimg.cc/WbkgMfj7/gg2.jpg",
        "https://i.postimg.cc/4xRtwbxR/gg3.jpg",
      ],
      desc: "Golden Gorilla offers premium hair cutting services exclusively tailored for men, providing a specialized grooming experience. The service ensures high-quality haircuts with a focus on meeting the unique preferences and needs of male clients.",
    },
    {
      project: "Best Hostels Indonesia",
      category: "UI/UX Design",
      year: "2022",
      skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      image: [
        "https://i.postimg.cc/vBxHpk0q/bhi1.jpg",
        "https://i.postimg.cc/fy4TZCFw/bhi2.jpg",
        "https://i.postimg.cc/tJhRgPQF/bhi3.jpg",
      ],
      desc: "Best Hostels Indonesia is a service that specializes in providing affordable accommodation options with a focus on hostels. The service ensures budget-friendly prices while offering a range of hostel accommodations to cater to diverse traveler needs.",
    },
    {
      project: "Pesona Pucaksari",
      category: "UI/UX Design",
      year: "2021",
      skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      image: [
        "https://i.postimg.cc/SKvtnvmp/pucuk1.jpg",
        "https://i.postimg.cc/d3MHBZ7H/pucuk2.jpg",
        "https://i.postimg.cc/j5n3P4jn/pucuk3.jpg",
      ],
      desc: "Pesona Pucaksari is a service that introduces the beauty and natural richness of a village named Pucak Sari. This service aims to showcase the natural charm and uniqueness of the Pucak Sari village to visitors.",
    },
  ];

  const description = useRef(null);
  const [view, setView] = useState(false);

  const isInView = useInView(description);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setView(isInView);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [isInView]);

  return (
    <div className="bg-[#1B1B1B] min-h-screen py-40 w-full relative z-10 lg:text-base text-xs">
      <div className="lg:px-20 px-10 justify-start flex w-full h-full flex-col items-start gap-20 relative z-10">
        <h3 className="text-2xl font-medium text-white">RECENT WORK</h3>
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-3 justify-between items-center w-full lg:px-8 py-4 text-white">
            <p>PROJECT</p>
            <p className="ml-[30%]">CATEGORY</p>
            <p className="justify-self-end">YEAR</p>
          </div>
          <div ref={description}>
            {data.map((item, key) => (
              <ListJobs
                isInView={view}
                key={key}
                custom={key}
                listJob={item}
                onClick={handleItemClick}
                isActive={activeProject === item.project}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
