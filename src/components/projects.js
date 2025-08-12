import dashboard from "../assets/dashboard-ajl.png";
import invenmatrix from "../assets/invenmatrix.png";
import cryptoImg from "../assets/cryypto.jpeg";
import rideFusion from "../assets/ride-fusion.jpg";

export const allProjects = [
  {
    projectImage: dashboard,
    projectTitle: "Full-Fledged Admin Dashboard",
    description2:
      "This is a full-stack web application designed for efficient team and organization management. It enables admins to add team members via email invitations, assign roles, and implement access restrictions based on authorization levels. The platform also provides analytics to monitor performance, track activities, and support data-driven decision-making. Built with a focus on usability, scalability, and a seamless user experience.",
    technology: ["Next.js", "MongoDB", "Tailwind CSS"],
    sourceCode: "https://github.com/kennyegun24/test_dashboard",
    liveDemo: "https://test-dashboard-lilac-two.vercel.app/",
    data1: "fade-up",
    data2: "fade-right",
    class: "",
  },
  {
    projectImage: invenmatrix,
    projectTitle: "Invenmatrix",
    description2:
      "Invenmatrix is a cloud-based inventory management SaaS platform designed to help businesses efficiently organize, track, and manage their products. It allows users to create and manage folders, add products with detailed attributes, monitor stock levels, and categorize items for easy retrieval. The platform also supports team collaboration through role-based access control and provides analytics for sales, stock movements, and overall performance metrics.",
    technology: ["Next.js", "firebase", "Tailwind CSS", "Node.js", "MongoDB"],
    sourceCode: "https://github.com/kennyegun24/invenmatrix-crm",
    liveDemo: "https://invenmatrix-crm.vercel.app/",
    data1: "fade-right",
    data2: "fade-up",
    class: "reverse",
  },
  //   {
  //     projectImage: cryptoImg,
  //     projectTitle: "Crypto price tracker",
  //     description2:
  //       "A live crypto currency tracking web app that provide real time data, historical info and every details on several cryptocurrencies. The web app was built using react and the data is being consumed from a third party api (coingecko's api). Redux was used as a state management tool and the app waas also tested inorder to make sure it give users 100% satisfaction",
  //     technology: ["React.js", "CSS", "javaScript", "Jest", "Redux"],
  //     sourceCode: "https://github.com/kennyegun24/cryptocurrency-app",
  //     liveDemo: "https://kennys-cryptohub.netlify.app",
  //     data1: "fade-up",
  //     data2: "fade-right",
  //     class: "",
  //   },
  {
    projectImage: rideFusion,
    projectTitle: "Ride Fusion",
    description2:
      "Ride Fusion is a mobile application that connects car owners with drivers looking to rent vehicles. Drivers can browse available cars, request rentals, and communicate directly with owners through a real-time chat messaging system. Each user has a profile, and both drivers and car owners can be rated and reviewed based on their interactions. The platform supports a smooth rental process while fostering trust and transparency through feedback and communication features. (I can send you a demo of the app in action, on request)",
    technology: [
      "TypeScript",
      "React Native",
      "Expo",
      "MongoDB",
      "Node.js",
      "Firebase",
      "Sockets",
      "AsyncStorage",
    ],
    sourceCode: "https://github.com/kennyegun24/ride-fusion",
    data1: "fade-up",
    data2: "fade-up",
    // class: "reverse",
  },
];
