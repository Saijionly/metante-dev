import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Lemuel Louise",
  lastName: "Metante",
  name: `Lemuel Louise Metante`,
  role: "Computer Engineer | Software & Hardware Developer",
  avatar: "/images/avatar.jpg",
  email: "lemuelayaso1@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Saijionly",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lemuel-louise-metante-0ab693407",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/_heyesiuol",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@_heyesiuol",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Code. Hardware. Innovation.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4"></strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} {" "}
      <Text as="span" size="xl" weight="strong"></Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About — ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a {person.location.split("/")[1]?.replace("_", " ")}-based {person.role.toLowerCase()} passionate about building reliable, efficient, and
        innovative technology solutions. With a strong foundation in software development, hardware systems, and problem-solving, he enjoys creating practical applications
        that bridge the gap between technology and real-word needs.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "IntouchCX Philippines",
        timeframe: "Jul. 2025 - Sept. 2025",
        role: "IT Desktop Engineer Intern",
        achievements: [
          <>
            Experienced in assisting technical tasks, basic troubleshooting, and supporting
            hardware and software operations during my internship.
          </>,
          <>
            Assisted in technical support during my internship by managing and prioritizing IT support
            tickets for employees, ensuring timely resolution of technical issues.
          </>,
          <>
            Provided hands-on support for both hardware and software, including diagnosing problems,
            performing repairs, and replacing faulty components.
          </>,
          <>
            Gained proficiency in ticketing systems and remote desktop tools, strengthening my ability to
            provide efficient, clear, and reliable tech support across the team.
          </>,
          <>
            Delivered remote technical support, guiding employees through troubleshooting steps and
            ensuring minimal downtime.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 12,
            height: 12,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Colegio De Montalban, College Graduated 2022 - 2026",
        description: <>Bachelor of Science in Computer Engineering.</>,
      },
      {
        name: "ABE International Business College, Senior HS 2019 - 2021",
        description: <>Technical-Vocational-Livelihood - Information and Communications Technology.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming",
        description: <>Core languages I use for building software and solving problems.</>,
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Python", icon: "python" },
          { name: "C++", icon: "cplusplus" },
          { name: "SQL", icon: "sql" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: <>Crafting responsive, intuitive user interfaces.</>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "HTML", icon: "html5" },
          { name: "CSS", icon: "css3" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
        ],
        images: [],
      },
      {
        title: "Backend",
        description: <>Building and connecting the systems behind the interface.</>,
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "REST API", icon: "restapi" },
        ],
        images: [],
      },
      {
        title: "Database",
        description: <>Designing and managing data storage solutions.</>,
        tags: [
          { name: "Supabase", icon: "supabase" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "Firebase", icon: "firebase" },
        ],
        images: [],
      },
      {
        title: "IoT & Embedded",
        description: <>Bridging hardware and software for connected systems.</>,
        tags: [
          { name: "ESP32", icon: "esp32" },
          { name: "Arduino", icon: "arduino" },
          { name: "Sensors", icon: "sensors" },
          { name: "OpenCV", icon: "opencv" },
        ],
        images: [],
      },
      {
        title: "IT Support",
        description: <>Hands-on experience diagnosing and resolving technical issues.</>,
        tags: [
          { name: "Computer Hardware", icon: "hardware" },
          { name: "Troubleshooting", icon: "troubleshooting" },
          { name: "Networking", icon: "networking" },
        ],
        images: [],
      },
      {
        title: "Tools",
        description: <>Everyday tools that power my development workflow.</>,
        tags: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "VS Code", icon: "vscode" },
          { name: "Postman", icon: "postman" },
          { name: "Figma", icon: "figma" },
          { name: "Vercel", icon: "vercel" },
        ],
        images: [],
      },
    ],
  },
  projects: {
    display: true,
    title: "Projects",
    items: [
      {
        name: "AquaSense",
        timeframe: "2026",
        role: "Hardware & Software Engineer, UI Tester",
        description: [
          <>
            <strong>AquaSense:</strong> A Multi-Aquarium Stand-Type IoT-Based Automated Feeding and
            Water Quality Monitoring System with Machine Learning-Assisted Fish Activity Detection for
            Household and Small-Scale Aquaculture.
          </>,
          <>
            Is a stand-type, multi-aquarium IoT system designed to automate fish feeding and monitor water quality.
            The prototype consists of three aquariums, with the primary tank measuring temperature, pH, turbidity,
            and fish activity through machine learning-based image analysis, while the other two monitor temperature
            and pH. The system also features an automated feeder with food detection to confirm successful dispensing.
            All collected data are sent to a web-based dashboard, allowing users to track water conditions, feeding schedules,
            feeding history, and fish activity for more efficient aquarium management.
          </>,
          <>
            Responsible for testing and maintaining the system, ensuring proper function and
            troubleshooting connectivity issues.
          </>,
        ],
        images: [
          { src: "/images/projects/project-01/c1.jpg", alt: "Project screenshot 1", width: 12, height: 12 },
          { src: "/images/projects/project-01/c2.jpg", alt: "Project screenshot 2", width: 12, height: 12 },
          { src: "/images/projects/project-01/c3.jpg", alt: "Project screenshot 3", width: 12, height: 12 },
          { src: "/images/projects/project-01/c4.jpg", alt: "Project screenshot 4", width: 12, height: 12 },
          { src: "/images/projects/project-01/c5.jpg", alt: "Project screenshot 5", width: 12, height: 12 },
        ],
      },
    ],
  },
};
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects — ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery — ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };