/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Memo's Folio",
    description: "Memo's Folio",
    tools: "NEXTJS, THREE.JS, TAILWIND",
    demoLink: " https://memosportfolio.vercel.app",
  },
  {
    id: 2,
    name: "Notes",
    description: "Memo's notes",
    tools: "REACTJS,TAILWIND,FIREBASE",
    demoLink: "https://notes.guillermo-projectmanagement.com",
  },
  {
    id: 3,
    name: "Project Management",
    description: "Project Management",
    tools: "NEXTJS, POSTGRES, AWS",
    demoLink: "https://app.guillermo-projectmanagement.com",
  },
  {
    id: 4,
    name: "ParLink",
    description: "Projet équipe",
    tools: "REACTJS,NESTJS,TS",
    demoLink: "https://parlink.vercel.app",
  },
  {
    id: 5,
    name: "Kanban",
    description: "Kanban",
    tools: "ANGULAR CDK",
    demoLink: "https://memo-kanban.vercel.app",
  },
  {
    id: 6,
    name: "Blog",
    description: "Memo's blog",
    tools: "REACTJS,TAILWIND,FIREBASE",
    demoLink: "https://blog-memo.vercel.app",
  },
  {
    id: 7,
    name: "Trott 'n Go",
    description: "Projet certification",
    tools: "WORDPRESS/WOOCOMMERCE",
    demoLink: "https://trottngo.guillermo-web.fr",
  },
  {
    id: 8,
    name: "HotelCop",
    description: "Projet binôme",
    tools: "HTML,CSS,JS",
    demoLink: "https://0memo.github.io/hotel/index.html",
  },
  {
    id: 9,
    name: "Jeu Robot",
    description: "Jeu ordinateur Robot Mission",
    tools: "C#,UNITY",
    demoLink: "https://guillermo-web.fr/jeu/robot_mission",
  },
  {
    id: 10,
    name: "Jeu Skeleton",
    description: "Jeu ordinateur Skeleton King",
    tools: "C#,UNITY",
    demoLink: "https://guillermo-web.fr/jeu/skeleton_king",
  },
  {
    id: 11,
    name: "Jeu Quest",
    description: "Jeu ordinateur Quest",
    tools: "C#,UNITY",
    demoLink: "https://guillermo-web.fr/jeu/quest",
  },
  {
    id: 12,
    name: "Jeu Shooter",
    description: "Jeu ordinateur Shooter",
    tools: "C#,UNITY",
    demoLink: "https://guillermo-web.fr/jeu/shooter",
  },
  {
    id: 13,
    name: "Jeu Zombies",
    description: "Jeu ordinateur Zombies",
    tools: "JS,PHASER",
    demoLink: "https://guillermo-web.fr/jeu/zombies",
  },
  {
    id: 14,
    name: "Jeu Pirates",
    description: "Jeu ordinateur Pirates",
    tools: "JS,PHASER",
    demoLink: "https://guillermo-web.fr/jeu/pirates",
  },
  {
    id: 15,
    name: "App Personnages",
    description: "App Personnages",
    tools: "HTML,CSS,JS,BOOTSTRAP,REACT",
    demoLink: "https://guillermo-web.fr/personnages",
  },
  {
    id: 16,
    name: "App Liste Pays",
    description: "App React Liste Pays",
    tools: "HTML,CSS,JS,REACT",
    demoLink: "https://guillermo-web.fr/liste",
  },
];

export const getBtnList = (t) => [
  { label: "menu.homepage", link: "/", icon: "home", newTab: false },
  { label: "menu.me", link: "/about", icon: "about", newTab: false },
  { label: "menu.projects", link: "/projects", icon: "projects", newTab: false },
  { label: "menu.contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "menu.Github",
    link: "https://github.com/0Memo",
    icon: "github",
    newTab: true,
  },
  {
    label: "menu.LinkedIn",
    link: t("menu.link"),
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "menu.2Dresume",
    link: "https://guillermo-web.fr/cv2D/",
    icon: "portfolio",
    newTab: true,
  },
  {
    label: "menu.PDFresume",
    link: t("menu.language"),
    icon: "resume",
    newTab: true,
  },
];