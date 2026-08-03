import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiOutlineCircleStack,
  HiOutlineServerStack,
  HiOutlineCpuChip,
  HiOutlineComputerDesktop,
  HiOutlineWrenchScrewdriver,
  HiOutlineWifi,
  HiOutlineSignal,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiArduino,
  SiOpencv,
  SiGit,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
  // Programming
  typescript: SiTypescript,
  python: SiPython,
  cplusplus: SiCplusplus,
  sql: HiOutlineCircleStack,
  // Frontend
  react: SiReact,
  html5: SiHtml5,
  css3: SiCss3,
  tailwindcss: SiTailwindcss,
  // Backend
  nodejs: SiNodedotjs,
  express: SiExpress,
  restapi: HiOutlineServerStack,
  // Database
  postgresql: SiPostgresql,
  mysql: SiMysql,
  firebase: SiFirebase,
  // IoT & Embedded
  esp32: HiOutlineCpuChip,
  arduino: SiArduino,
  sensors: HiOutlineSignal,
  opencv: SiOpencv,
  // IT Support
  hardware: HiOutlineComputerDesktop,
  troubleshooting: HiOutlineWrenchScrewdriver,
  networking: HiOutlineWifi,
  // Tools
  git: SiGit,
  vscode: SiVisualstudiocode,
  postman: SiPostman,
  vercel: SiVercel,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;