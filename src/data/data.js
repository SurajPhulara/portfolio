import { uxicon, figma, muicon, html, css, js, reacticon, tailwind, nodejs, mongodb, bootstrap, githubicon, cplusplus, cicon, serenestone, designIcon, newtab, githubicon2, googleformscloneImage, canvassplashimage } from '../assets';

export const data = {
  skills: [
    {
      image: uxicon,
      name: "UX/UI DESIGN",
    },
    {
      image: figma,
      name: "FIGMA",
    },
    {
      image: muicon,
      name: "MATERIAL UI",
    },
    {
      image: html,
      name: "HTML",
    },
    {
      image: css,
      name: "CSS",
    },
    {
      image: js,
      name: "JAVASCRIPT",
    },
    {
      image: reacticon,
      name: "React Js",
    },
    {
      image: tailwind,
      name: "TAILWIND CSS",
    },
    {
      image: nodejs,
      name: "NODE Js",
    },
    {
      image: mongodb,
      name: "mongoDB",
    },
    {
      image: bootstrap,
      name: "BOOTSTRAP",
    },
    // {
    //   image: githubicon,
    //   name: "GITHUB",
    // },
    {
      image: cplusplus,
      name: "C++",
    },
    {
      image: cicon,
      name: "C",
    },
  ],

  projects: [
    {
      image: serenestone,
      scroll: true,
      name: "Jwely Ecommerce Website (Frontend)",
      link: "https://serenestones.netlify.app",
      description: "This frontend project showcases a jewelry website interface. The website offers an immersive experience with a curated selection of high-quality jewelry pieces. Utilizing responsive design, the website ensures compatibility across all devices.",
      technologies: ["React Js", "Tailwind CSS"],
      externalresources: [
        {
          name: "Design",
          icon: designIcon,
          link: "https://app.visily.ai/projects/b10b0489-f6a6-45ea-8e59-a2965e06dd3f/boards/517363"
        },{
          name: "Code",
          icon: githubicon2 ,
          link: "https://github.com/SurajPhulara/jwelry-store"
        },
        {
          name: "Live Demo",
          icon: newtab,
          link: "https://serenestones.netlify.app"
        },
      ]
    },{
      image: googleformscloneImage,
      scroll: false,
      name: "Google Forms Clone (Full Stack)",
      link: "https://googleformsclone.netlify.app",
      description: "This full stack web application replicates the functionality of Google Forms. It allows the users to create and share custom forms and surveys and enables users to gather responses and insights effortlessly.",
      technologies: ["React Js", "Material UI", "Node Js", "Express Js", "MongoDB"],
      externalresources: [
        {
          name: "Inspiration",
          icon: designIcon,
          link: "https://docs.google.com/forms"
        },{
          name: "Code",
          icon: githubicon2 ,
          link: "https://github.com/SurajPhulara/Google-Forms-Clone"
        },
        {
          name: "Live Demo",
          icon: newtab,
          link: "https://googleformsclone.netlify.app"
        },
      ]
    },{
      image: canvassplashimage,
      scroll: false,
      name: "Collaborative whiteboard App (Full Stack)",
      link: "https://canvassplash.netlify.app",
      description: "This full stack web application is a dynamic platform that allows real-time drawing and collaboration. It enables users to create shared whiteboard sessions, making it perfect for remote teamwork and interactive learning. With a user-friendly interface and real-time updates, it enhances creativity and efficient communication.",
      technologies: ["React Js", "Node Js", "Express Js", "MongoDB", "Socket.IO"],
      externalresources: [
        {
          name: "Code",
          icon: githubicon2 ,
          link: "https://github.com/SurajPhulara/SplashCanvas"
        },
        {
          name: "Live Demo",
          icon: newtab,
          link: "https://canvassplash.netlify.app"
        },
      ]
    }
  ]

}
