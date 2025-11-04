import React, { ReactNode } from 'react';
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { FaDocker, FaPython, FaStripe } from 'react-icons/fa';
import { SiPytorch, SiScikitlearn } from 'react-icons/si';
import { FiTriangle } from "react-icons/fi";
import { FaImage } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";


import {
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandTailwind,
} from 'react-icons/tb';

export type OneSkillObjectType = {
  name: string;
  icon: ReactNode;
};

export type AllSkillsObjectType = {
  [index: string]: OneSkillObjectType;
};

export const allSkills: AllSkillsObjectType = {
  typescript: {
    name: 'Typescript',
    icon: <BiLogoTypescript />,
  },
  tailwindcss: {
    name: 'TailwindCss',
    icon: <TbBrandTailwind />,
  },
  docker: {
    name: 'Docker',
    icon: <FaDocker />,
  },
  python: {
    name: 'Python',
    icon: <FaPython />,
  },
  cpp:{
    name: 'C++',
    icon: <TbBrandCpp />,
  },
  fluxAImodel: {
    name: 'Flux AI Model',
    icon: <FaImage />,
  },
  paymentIntegration: {
    name: 'Stripe Integration',
    icon: <FaStripe />,
  },
  reactjs: {
    name: 'ReactJs',
    icon: <TbBrandReact />,
  },
  nextjs: {
    name: 'Nextjs',
    icon: <TbBrandNextjs />,
  },
  nodejs: {
    name: 'Nodejs',
    icon: <TbBrandNodejs />,
  },
  javascript: {
    name: 'JavaScript',
    icon: <BiLogoJavascript />,
  },
  pytorch: {
    name: 'Pytorch',
    icon: <SiPytorch />,
  },
  scikitLearn: {
    name: 'ScikitLearn',
    icon: <SiScikitlearn />,
  },
  prisma: {
    name: 'Prisma',
    icon: <FiTriangle />,
  }
};
export default function useSkills() {
  return {
    allSkills,
  };
}
