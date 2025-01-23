import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Carlos",
  lastName: "Galicia",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computational Technologies Engineering Student",
  avatar: "/images/profile_image.jpg",
  location: "Queretaro/Mexico",
  languages: ["English", "Spanish"],
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/carlosagalicia",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/carlos-galicia-775b01281/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:alexsilvag82@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Computational Technologies Engineering Student</>,
  subline: (
    <>
      Hi my name is Carlos Galicia, an ITESM student passionate about programming, with an interest in the development of web and mobile applications, data structures, and databases.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Carlos is a computational technologies engineer with a passion for takling complex technology challenges
        and learning about diverse digital solutions. His work spans agent-based simulations, mobile and web platforms, computer vision projects, and the use of deep learning models for fun.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience",
    experiences: [
      {
        company: "Servicios Natura del Bajío",
        timeframe: "2023 - Present",
        role: "Junior Database Developer",
        achievements: [
          <>
            Designed and implemented a relational database to manage inventory and sales for the company's container products, ensuring accurate and continuously updated records.
          </>,
          <>
            Improved overall data retrieval efficiency by 50% through the development and use of SQL queries for data extraction and recording, as well as report generation.
          </>,
        ],
        images: [],
      },
      {
        company: "Servicios Natura del Bajío",
        timeframe: "2022 - 2023",
        role: "Junior Data Analyst",
        achievements: [
          <>
            Developed and implemented a predictive model in Python to anticipate container demand, optimizing inventory flow by 25% and reducing storage costs by 15%.
          </>,
          <>
            Utilized trend analysis to identify patterns in key production and sales periods, generating detailed reports on findings and recommendations to improve current sales trends.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Monterrey Institute of Technology and Higher Education",
        description: <>Studied Computational Technologies Engineering.</>,
      },  
    ],
  },
  technical: {
    display: false,
    title: "Skills",
    skills: [
      {
        title: "Technical skills",
        description: <>Python C++, C, SQL, Javascript, HTML, CSS, Kotlin</>,
        images: [],
      },
      {
        title: "Tools",
        description: <>VS Code, PyCharm, IntelliJ IDEA, Android Studio, Git, GitHub, PostMan, Firebase, MongoDB Compass</>,
        images: [],
      },
    ],
  },
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};


export { person, social, home, about, work};
