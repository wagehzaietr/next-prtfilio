import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const DATA = {
  name: "Wageh Zaiter",
  initials: "DV",
  url: "https://dillion.io",
  location: "Damascus Syria",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I’m a frontend developer and UI/UX designer with over 3 years of experience delivering high-quality, user-focused digital products that combine visual appeal with reliable functionality.",
  summary:
    "[My work blends technical expertise with creative design principles](), enabling me to create solutions that are not only visually refined but also [optimized for performance, accessibility, and an exceptional user experience.]() I specialize in modern web technologies including [React,Next js, TypeScript, and Tailwind CSS, with a strong focus on developing smooth, interactive interfaces]() ",
  avatarUrl: "/",
  skills: [
    '/js.svg',
    '/typescript.svg',
    '/react.svg',
    '/nodejs.svg',
    '/tailwindcss.svg',
    '/shadcn-ui-dark.svg',
    '/nextjs2-dark.svg',
    '/motion.svg',
    '/git.svg',
    '/chatgpt-dark.svg',
    

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/wagehzaietr/wagehzaietr",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Frontend Developer",
      href: "https://uwaterloo.ca",
      degree: "Built responsive and interactive web interfaces for e-commerce and SaaS platforms.",
      logoUrl: "/waterloo.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Junior Web Developer",
      href: "https://wlu.ca",
      degree: "Developed and maintained websites and web applications for early-stage startups using react js",
      logoUrl: "/laurier.png",
      start: "2024",
      end: "2023",
    },
    {
      school: "Self-Taught Web Development",
      href: "https://ibo.org",
      degree: "Completed online courses and projects in HTML, CSS, JavaScript, and React. Built personal projects and freelance websites",
      logoUrl: "/ib.png",
      start: "2023",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Neo Chat",
      href: "https://chatcollect.com",
      dates: "aug 2025",
      active: true,
      description:
        "Next-gen chat meets AI magic—create and launch your own smart chatbot in just minutes.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Ai"
      ],
      links: [
        {
          type: "Website",
          href: "https://neochat-ai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/neoChatDemo.webm",
    },
    {
      title: "VetPet",
      href: "https://magicui.design",
      dates: "aug 2025 - Present",
      active: true,
      description:
        "vetpet is a chatbot web app made with next js and ai to check pet health from images analysis or chat with ai made for my love for pet to alawys keep them in good health",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Ai Sdk"
      ],
      links: [
        {
          type: "Website",
          href: "https://vetpet-ai-anaysis.vercel.app/en",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/wagehzaietr/vetpet-ai-anaysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/vertpet.webm",
    },
    {
      title: "Luxury Fragrances",
      href: "https://llm.report",
      dates: "",
      active: true,
      description:
        "Almahairi Fragrances is an elegant e-commerce platform showcasing handcrafted perfumes. Built with React vite, it features bilingual support, lazy loading for optimal performance, and SEO optimization.",
      technologies: [
        "vite.js",
        "JavaScript",
        "TailwindCSS",
        "Shadcn UI",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://almahairi.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/mahairy.webm",
    },
    {
      title: "Car Rent Damas",
      href: "https://automatic.chat",
      dates: "March 2024",
      active: true,
      description:
        "a modern car rent website built with react and tailwind css and google maps api based in syria",
      technologies: [
        "vite.js",
        "JavaScript",
        "TailwindCSS",
        "Google Maps"
      ],
      links: [
        {
          type: "Website",
          href: "https://carrent-damas.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "CarRent.webm",
    },
  ],
  hackathons: [
    {
      title: "Bgremover with Ai",
      dates: "",
      location: "",
      description:
        "BG Remover is a web application that leverages IMG.LYs AI technology to automatically remove backgrounds from images.",
      image:
        "bg-remove.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
         {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
          {
          title: "Website",
          href: "https://bgremoverwz.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
    },
    {
      title: "Modern Gym Management Dashboard",
      dates: "",
      location: "",
      description:
        "A sleek, multilingual dashboard for managing gym members, trainers, schedules, and reports. Built with React, Supabase, Clerk, and Tailwind CSS for a clean and responsive UI.",
      image:
        "https://media.istockphoto.com/id/1151603235/vector/stopwatch-flat-icon-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=ODuWOfrYHsbGhH0sFvxyEnmaBaxVWMH32ZSkvYXGIkA=",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
        {
          title: "Website",
          href: "https://gympro-dashboard.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Pixelgramm Social Platform",
      dates: "",
      location: "",
      description:
        "Pixelgramm is a comprehensive social media platform that replicates the core functionality of Instagram. Built with modern web technologies, it features user authentication",
      icon: "public",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlEam9RIoImBVqMqYWMwW5anO2fhx7-DPLg&s",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
        {
          title: "Website",
          href: "https://pixelgramm.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "QUWA-قوة",
      dates: "",
      location: "",
      description:
        "An AI-powered app I created out of my love for fitness. As someone who enjoys working out, I often struggled to find calorie information for traditional Syrian dishes",
      image:
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/295750184_417189310427994_5822511154008900485_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=c8LCnc5gGl4Q7kNvwE0Hkg5&_nc_oc=Adn6ZeBymzrBOWD-h89F_jdfTK9XfjSwuNuwzzyTnpQ4ehL9oiJGUtoQFJcWSObe1wM&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=1IEh6folQlQM9qZVjl7_1A&oh=00_AfbuXBIfM_VoU0T_BvRNqEp_4D4psAWm6_Lv5n-btY4daw&oe=68BF4319",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
        {
          title: "Website",
          href: "https://quwa.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "RapidQr",
      dates: "",
      location: "",
      description:
        "An AI-powered app I created out of my love for fitness. As someone who enjoys working out, I often struggled to find calorie information for traditional Syrian dishes",
      image:
        "https://static.vecteezy.com/system/resources/previews/047/759/339/non_2x/icon-qr-code-symbol-barcode-and-qr-code-elements-icons-in-glyph-style-good-for-prints-posters-logo-advertisement-infographics-etc-vector.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
        {
          title: "Website",
          href: "https://rapidqcode.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
