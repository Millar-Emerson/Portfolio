import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    django,
    tailwind,
    mysql,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    coto,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React + Django",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Barista",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2022 - February 2023",
      points: [
        "As a Barista at Starbucks, I provided exceptional customer service while crafting and serving a variety of high-quality beverages and food items to guests.",
        "My responsibilities included taking orders, preparing beverages according to Starbucks standards, operating various equipment, and maintaining cleanliness and organization in the store.",
        "also worked collaboratively with team members to ensure a smooth and efficient workflow.",
        "Working at Starbucks was a rewarding experience where I learned the importance of teamwork, customer satisfaction, and delivering excellence",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Freelancer",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Cashier",
      company_name: "Coto",
      icon: coto,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "As a cashier at COTO, my job involves efficiently and accurately processing customer purchase transactions. Additionally,",
        "I am responsible for handling cash payments, credit and debit cards, as well as providing friendly and attentive customer service.",
        "I also ensure that the cashier area is clean and organized, and I assist in resolving any transaction or payment-related issues that may arise.",
        "In summary, as a cashier at COTO, I play a crucial role in the customer shopping experience, ensuring prompt and courteous service at the point of sale.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "My website to showcase my skills and projects. This platform serves as a comprehensive showcase of my work, allowing visitors to explore my portfolio, learn about my expertise, and get in touch.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Millar-Emerson/Portfolio/",
    },
    {
      name: "Ecommerce",
      description:
        "Developed a fully functional and customized e-commerce store. This platform allows users to conveniently and securely browse and purchase a wide range of products from the comfort of their homes.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Millar-Emerson/ecommerce",
    },
    {
      name: "Linkedin",
      description:
        "Developed a fully functional and customized e-commerce store. This platform allows users to conveniently and securely browse and purchase a wide range of products from the comfort of their homes.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Linkedin",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.linkedin.com/in/millar-emerson/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };