export type IProject = {
  name: string;
  img: string;
  technologies: string[];
  about: string;
  demoUrl: string;
  codeUrl: string;
};

export const projectsData: readonly IProject[] = [
  {
    name: "MR NEWS",
    img: require("./projectImages/mr-news.png"),
    technologies: ["HTML & CSS", "Tachyons", "JavaScript", "React", "Redux"],
    about: `Mr News is a website where you can read about what is happening around the world. By making use of the New York Times API, we can show you the latest news, from the best writers in the world.

    For this project I worked with things like The New York Times API, UI & UX, and I used React and Redux to make the project a Single Page Application.`,
    demoUrl: "https://andresclm.github.io/news-room/",
    codeUrl: "https://github.com/andresclm/news-room/",
  },
  {
    name: "Andrew Hill",
    img: require("./projectImages/andrew-hill.jpg"),
    technologies: ["HTML & CSS", "BEM", "SASS", "PostCSS", "JavaScript"],
    about: `This is a landing page for one of the best neighborhoods in Sydney, Australia. Customers come and see what sets Andrew Hill apart from the competition and then, they can easily continue the home buying process with just two clicks away.

    This is a Multi Page Application and is built using plain HTLM and JavaScript, along with SASS and the BEM methodology.`,
    demoUrl: "https://andresclm.github.io/real-estate/index.html",
    codeUrl: "https://github.com/andresclm/real-estate",
  },
];
