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
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
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
    link: `mailto:${person.email}`,
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
  title: `About – ${person.name}`,
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
    display: true, // set to false to hide this section
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
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Colegio De Montalban, 2022 - 2026",
        description: <>Bachelor of Science in Computer Engineering.</>,
      },

       {
        name: "Thesis Project - AquaSense, 2026 ",
        description: "Hardware & Software Engineer, UI Tester",
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
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
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
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
