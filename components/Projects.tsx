import Project from "./Project";

interface Projects {
  id: number;
  title: string;
  description: string;
  image: string;
  url_repo: string;
  technologies: string[];
  live_link: string;
}

const projects: Projects[] = [
  {
    id: 1,
    title: "Food Ordering App",
    description:
      "The successful creation of a stunning restaurant website using NextJS and the power of Tailwind CSS. One of the most exciting aspects of this project was implementing the CRUD operations.",
    image: "/images/foodapp.jpg",
    url_repo: "https://github.com/satyachiratla/NextJS-Food-App",
    technologies: ["NextJS,", "ReactJS,", "Tailwind CSS,", "Next Auth,", "Framer Motion,", "MongoDB"],
    live_link: "https://peddadameals.vercel.app/",
  },
  {
    id: 2,
    title: "Cricbuzz",
    description:
      "Fully built with NextJS and its core features like page pre-rendering. Once visiting this page the pages are pre-rendered so that the pages are loaded quickly as possible.",
    image: "/images/cricbuzz.png",
    url_repo: "https://github.com/satyachiratla/NextJS-Food-App",
    technologies: ["NextJS,", "ReactJS,", "Material UI"],
    live_link: "https://peddadameals.vercel.app/",
  },
  {
    id: 3,
    title: "Food App",
    description:
      "Build a Dynamic Single Page Application by managing the state with context API and integrated the backend with NodeJS, and ExpressJS.",
    image: "/images/foodorder.png",
    url_repo: "https://github.com/satyachiratla/NextJS-Food-App",
    technologies: ["ReactJS,", "Firebase,", "Redux"],
    live_link: "https://peddadameals.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="text-center text-3xl font-semibold text-cyan-500">
        Projects
      </h1>
      <ul className="mt-8 flex flex-col justify-center items-center">
        {projects.map((project: any): any => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            url_repo={project.url_repo}
            live_link={project.live_link}
            technologies={project.technologies}
          />
        ))}
      </ul>
    </section>
  );
}
