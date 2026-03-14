import {
  electronics,
  software,
  creator,
  mechanical,
  javascript,
  e3,
  pinna,
  ocado,
  series600,
  botcommsGif,
  Twincathmi,
  OcadoPick,
  ClickCollect,
  solidworks,
  onshape,
  altium,
  gitlab,
  twincat,
  python,
  cProg,
  ies,
  fusion360,
  linux,
  java,
  jira,
  autocad,
  pinnaPDF,
  bristol,
  bestStudent,
  peerAward
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mechanical Engineering",
    icon: mechanical,
  },
  {
    title: "Electronics & Testing",
    icon: electronics,
  },
  {
    title: "Software Development",
    icon: software,
  },
  {
    title: "Product Design",
    icon: creator,
  },
];

const awards = [
  {
    name: "Bristol",
    icon: bristol,
  },
  {
    name: "Best Student",
    icon: bestStudent,
  },
  {
    name: "Peer Award",
    icon: peerAward,
  },
];

const technologies = [
  {
    name: "Onshape",
    icon: onshape,
  },
  {
    name: "Solidworks",
    icon: solidworks,
  },
  {
    name: "Altium",
    icon: altium,
  },
  {
    name: "C",
    icon: cProg,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "twincat",
    icon: twincat,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "gitlab",
    icon: gitlab,
  },
  {
    name: "jira",
    icon: jira,
  },
  {
    name: "ies",
    icon: ies,
  },
  {
    name: "fusion360",
    icon: fusion360,
  },
  {
    name: "Autocad",
    icon: autocad,
  },
];

const experiences = [
    {
    title: " Mechanical Engineer",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Present",
    points: [
      "Served as the lead mechanical engineer in the design and upgrade of legacy electro-mechanical subsystems for a key material handling station. Facilitated prototype builds, UX and safety-critical testing, and successfully released all designs to manufacture within four-months to meet a high-priority install deadline.",
      "A core member of the design team developing a first-of-its-kind, public-facing grocery collection station. Collaborating across multiple disciplines we utilised concept generation, UX research, DFMEA, CAD, rapid prototyping and iteration to ensure seamless integration of hardware and software systems on-site.",
       {
        label: "Key skills:",
        value: "Leadership, Electro-Mechanical Design, SOLIDWORKS, Onshape, DfM/DfA, GD&T, Design Methodologies, UX Design, Problem-Solving, Jira",
      },
    ],
  },
    {
    title: "Mechatronics Engineer",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Sep 2025",
    points: [
      "Coordinated a test bench investigation of alternative sensors for the Ocado 600 series bot, delivering key findings through a detailed report and departmental presentation.",
      "Designed and built multiple programmable test rigs to simulate bot behaviour for testing cable harnessing and sensors.",
      "Supported mechanical, electronics and software development for the 600 series cost down initiative.",
      {
        label: "Key skills:",
        value: "Onshape, 3D printing, Java, C/C++, Arduino, Raspberry Pi, Linux, GitLab, Data Analysis, Collaboration",
      },
    ],
  },
  {
    title: "Hardware Engineer",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Mar 2025",
    points: [
      "Led testing efforts for a cutting-edge bot radio system by designing connectivity test cases and scaling test capabilities from a 150-client testbed to a 400-client testbed.",
      "Developed and maintained network-level scripts for embedded systems to simulate production scenarios and troubleshoot connectivity issues.",
      "Analysed large datasets using Python and presented key findings to the team that played a central role in de-risking the product deployment timeline.",
      {
        label: "Key skills:",
        value: "Python, Bash, Linux, GitLab, Excel, Embedded Systems, Data Analysis, Wireless Technology, Leadership, Teamwork",
      },
    ],
  },
  {
    title: "PLC Software Engineer",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Sep 2024",
    points: [
      "Spearheaded the development of a Human Machine Interface (HMI) used for testing and commisioning peripheral machines.",
      "Implemented a modular design, adding interface features using continuous integration methods, and demonstrated scalability across two prototypes.",
      "Successfully integrated the HMI with Ocado’s software stack and documented the application architecture to enable future development.",
      {
        label: "Key skills:",
        value: "TwinCAT PLC, User Interface Design, JavaScript, HTML/CSS, GitLab, APIs, Communication",
      },     
    ],
  },
  {
    title: "Product Engineer",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Mar 2024",
    points: [
      "Coordinated the design and test of a prototype to limit oversized cardboard entering the waste conveyor at a client site.",
      "Reviewed waste conveyor, plenum fan and tote conveyor designs to proivde technical guidance to suppliers in line with Ocado standards.",
      "Managed the end of life process for metal totes at Erith CFC, organising displosal on site and logging damage reports.",
      {
        label: "Key skills:",
        value: "Onshape, BIM360, SCADA, Product Standards, On-Site Experience, Communication",
      },
    ],
  },
  {
    title: "Assistant Engineer",
    company_name: "E3 Consulting Engineers",
    icon: e3,
    iconBg: "#6B8C48",
    date: "Jun 2020 - Jul 2021",
    points: [
      "Collaborated in team meetings and technical reviews, developing the ability to contribute to a small, dynamic engineering team.", 
      "Simulated thermal and energy performance of buildings using architectural data, and produced detailed mechanical and electrical drawings in AutoCAD.", 
      "Attended site visits to review progress of construction and understand the handover process of mechanical and electrical services to clients.",
      {
        label: "Key skills:",
        value: "AutoCAD, IES VE, Simulation, Excel, Communication, Time Management, On-site Experience",
      },
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mark was a core contributor to the very successful concept de-risk phase of a new cost down radio product for 600s bots. As I write this today the radio system is live in production, and Mark's test framework is still in use.",
    name: "Chris Roff",
    designation: "Senior Engineering Manager",
    company: "Ocado Technology",
  },
  {
    testimonial:
      "Mark's ability to learn new concepts and skills, to collaborate effectively with other team members and to work autonomously with minimum guidance has been beyond my expectations.",
    name: "Di Kong",
    designation: "Engineering Manager",
    company: "Ocado Technology",
  },
  {
    testimonial:
      "Mark quickly adapted to the Continuous Integration methodology. He not only learned the necessary tools but also proposed meaningful improvements - significantly contributing to the project's success.",
    name: "Nicola Zippo",
    designation: "Staff Software Engineer",
    company: "Ocado Technology",
  },
];

const projects = [
    {
    name: "600 Series Bot Harnessing",
    description:
      "I developed a patented cable harness design for the cost-down 600 Series Bot, utilising design reviews, rapid prototyping, test rigs builds and accelerated life testing with automated data collection to verify performance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: series600,
    source_code_link: "https://www.ocadogroup.com/newsroom/news/ocado-groups-additive-first-bot",
  },
  {
    name: "Inventory Handling Station",
    description:
      "I served as the Lead Mechanical Engineer for new design and upgrade work to Ocado's Inventory Handling Station. I managed the design release of four electromechanical subsystems on an accelerated timeline.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: OcadoPick,
    source_code_link: "https://ocadointelligentautomation.com/systems/workstations/pick-store",
  },
  {
    name: "Bot Radio Test Framework",
    description:
      "I coordinated the testing of a new Bot radio system on a large-scale wireless testbed - the Skyrack. By designing test cases, executing production scenarios, and analysing results, I enhanced the test framework and enabled multi-team testing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: botcommsGif,
    source_code_link: "https://careers.ocadogroup.com/blogs/hello-robot",
  }, 
  {
    name: "TwinCAT HMI",
    description:
      "I led development of a Human Machine Interface (HMI) critical for diagnosing material handling stations in a warehouse environment. The HMI integrated with the Ocado's software stack and was utilised for testing and commisioning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Twincathmi,
    source_code_link: "https://www.beckhoff.com/en-en/products/automation/twincat-3-hmi/",
  },
  {
    name: "Active Robotic Pinna",
    description:
      "Academic research on a novel robotic ear with soft, silent fluidic actuation designed to improve sound localisation in robots. I designed, built and tested this bioinspired proof of concept, and my research was submitted for publishing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pinna,
    source_code_link: "",
    pdf_link: pinnaPDF
  },
  {
    name: "Click & Collect",
    description:
      "An industry pioneering grocery click & collect station fully integrated with an automated storage and retrieval system. I am one of the core Mechanical Design Engineers trusted to execute this project successfully.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ClickCollect,
    source_code_link: "https://www.linkedin.com/posts/ocadogroup_ocado-store-based-automation-sba-activity-7434912460639395841-5Q5Z",
  },
];

export { services, awards, technologies, experiences, testimonials, projects };