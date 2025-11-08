export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  client: string;
  duration: string;
  teamSize: number;
  budget: string;
  overview: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar: string;
  };
  features: string[];
}

export const projects: Project[] = [
  {
    id: "muwahhid-graphics-website",
    title: "Muwahhid Graphics Studio",
    category: "Creative Portfolio",
    description: "Professional portfolio website for a graphics designer showcasing creative works and services",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/assets/al-muwaheed1.0.png",
    link: "#",
    client: "Muwahhid Graphics Studio",
    duration: "2 months",
    teamSize: 2,
    budget: "$8,000",
    overview: "Muwahhid Graphics Studio, a talented graphics designer, needed a professional online presence to showcase their creative portfolio and attract new clients. They required a visually stunning website that would reflect their design aesthetic and creative expertise.",
    challenge: "The client was relying on social media platforms to showcase their work, which limited their professional credibility and made it difficult for potential clients to find and contact them. They needed a centralized platform to display their portfolio effectively.",
    solution: "We created a modern, visually striking portfolio website with smooth animations and an intuitive gallery system. The solution features a responsive design, contact integration, service showcase, and optimized loading for high-quality images.",
    results: [
      {
        metric: "Online Visibility",
        value: "+300%",
        description: "Significant increase in professional inquiries"
      },
      {
        metric: "Client Acquisition",
        value: "+150%",
        description: "New client bookings increased substantially"
      },
      {
        metric: "Portfolio Views",
        value: "+400%",
        description: "Portfolio engagement improved dramatically"
      },
      {
        metric: "Professional Credibility",
        value: "95%",
        description: "Client satisfaction with professional presentation"
      }
    ],
    gallery: [
      "/assets/al-muwaheed1.0.png",
      "/assets/al-muwaheed2.0.png",
      "/assets/al-muwaheed3.0.png",
      "/assets/al-muwaheed4.0.png"
    ],
    testimonial: {
      quote: "LUXA created a stunning portfolio website that perfectly captures my creative vision. The professional presentation has helped me attract high-quality clients and establish credibility in the industry.",
      author: "Muwahhid",
      position: "Creative Director",
      company: "Muwahhid Graphics Studio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Responsive portfolio gallery",
      "Smooth scroll animations",
      "Contact form integration",
      "Service showcase pages",
      "Mobile-optimized design",
      "Fast image loading",
      "SEO optimization",
      "Social media integration"
    ]
  },
  {
    id: "360data-dashboard",
    title: "360Data Management Dashboard",
    category: "Business Dashboard",
    description: "Comprehensive dashboard for data and airtime vendor operations management",
    tech: ["Next.js", "TypeScript", "React", "Node.js", "MongoDB", "TailwindCSS"],
    image: "/assets/dashboard1.0.png",
    link: "#",
    client: "360Data Solutions",
    duration: "3 months",
    teamSize: 3,
    budget: "$25,000",
    overview: "360Data Solutions, a growing data and airtime vendor, needed a comprehensive management dashboard to streamline their operations, track sales, manage inventory, and monitor customer transactions in real-time.",
    challenge: "The client was managing their business through multiple disconnected systems and spreadsheets, making it difficult to get real-time insights into their operations. They needed a centralized platform to manage their growing customer base and transaction volume.",
    solution: "We built a comprehensive business dashboard with real-time transaction monitoring, inventory management, customer analytics, sales reporting, and automated billing systems. The solution provides a complete overview of business operations in one centralized platform.",
    results: [
      {
        metric: "Operational Efficiency",
        value: "+200%",
        description: "Streamlined business operations significantly"
      },
      {
        metric: "Transaction Processing",
        value: "5x faster",
        description: "Real-time transaction monitoring and processing"
      },
      {
        metric: "Revenue Tracking",
        value: "+180%",
        description: "Better insights led to improved revenue"
      },
      {
        metric: "Customer Satisfaction",
        value: "+150%",
        description: "Improved service delivery and response time"
      }
    ],
    gallery: [
      "/assets/dashboard1.0.png",
      "/assets/dashboard2.0.png",
      "/assets/360data.png"
    ],
    testimonial: {
      quote: "LUXA's dashboard has completely transformed our business operations. We can now monitor everything in real-time and make data-driven decisions that have significantly improved our profitability.",
      author: "Abdulrahim",
      position: "CEO",
      company: "360Data Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Real-time transaction monitoring",
      "Inventory management system",
      "Customer analytics dashboard",
      "Sales reporting and insights",
      "Automated billing system",
      "Multi-user access control",
      "Data export capabilities",
      "Mobile responsive design"
    ]
  },
  {
    id: "corporate-website",
    title: "Corporate Website Redesign",
    category: "Brand Identity",
    description: "Professional corporate presence with modern design and optimal performance",
    tech: ["React", "Tailwind", "Framer Motion", "Vercel", "Headless CMS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    link: "#",
    client: "TechVentures Global",
    duration: "3 months",
    teamSize: 3,
    budget: "$45,000",
    overview: "TechVentures Global, a leading investment firm, needed a complete website redesign to better reflect their premium brand and attract high-value clients. The new site needed to showcase their portfolio and expertise effectively.",
    challenge: "Their existing website looked outdated and didn't reflect their position as industry leaders. The site had poor SEO performance and wasn't generating quality leads for their business development team.",
    solution: "We created a sophisticated, modern website with elegant animations and premium design elements. The solution included a content management system, SEO optimization, and lead generation tools.",
    results: [
      {
        metric: "Organic Traffic",
        value: "+240%",
        description: "Significant increase in search visibility"
      },
      {
        metric: "Lead Generation",
        value: "+180%",
        description: "High-quality leads increased"
      },
      {
        metric: "Page Speed",
        value: "95/100",
        description: "Google PageSpeed score achieved"
      },
      {
        metric: "Bounce Rate",
        value: "-60%",
        description: "Users staying longer on site"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center"
    ],
    testimonial: {
      quote: "Our new website has become our most powerful marketing tool. The design perfectly captures our brand essence and has significantly improved our lead quality.",
      author: "David Rodriguez",
      position: "Managing Partner",
      company: "TechVentures Global",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Responsive modern design",
      "Content management system",
      "SEO optimization",
      "Lead capture forms",
      "Portfolio showcase",
      "Blog integration",
      "Contact management",
      "Performance optimization"
    ]
  },
  {
    id: "markazul-bayaan-lms",
    title: "Markazul Bayaan Islamic Learning Platform",
    category: "Educational Platform",
    description: "Modern educational website redesign for Islamic course registration and student management",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/assets/markaz-bayan1.0.png",
    link: "#",
    client: "Markazul Bayaan",
    duration: "4 months",
    teamSize: 4,
    budget: "$35,000",
    overview: "Markazul Bayaan, a respected Islamic educational institution, needed a complete website redesign to modernize their student registration process and improve the overall learning experience. The platform required a user-friendly interface for course enrollment, student management, and educational content delivery.",
    challenge: "The existing website was outdated with a complicated registration process that deterred potential students. The old system lacked proper course management, had poor mobile responsiveness, and didn't reflect the institution's prestigious reputation in Islamic education.",
    solution: "LUXA redesigned the entire platform with a modern, intuitive interface that streamlines course registration, implements a comprehensive student portal, and provides easy access to Islamic course materials. The solution includes automated enrollment workflows, payment integration, and mobile-optimized design.",
    results: [
      {
        metric: "Student Enrollment",
        value: "+275%",
        description: "Significant increase in course registrations"
      },
      {
        metric: "User Experience",
        value: "+320%",
        description: "Improved navigation and usability scores"
      },
      {
        metric: "Mobile Engagement",
        value: "+180%",
        description: "Mobile user engagement increased dramatically"
      },
      {
        metric: "Registration Completion",
        value: "+200%",
        description: "Students completing full registration process"
      }
    ],
    gallery: [
      "/assets/markaz-bayan1.0.png",
      "/assets/markaz-bayan2.0.png",
      "/assets/markaz-bayan3.0.png"
    ],
    testimonial: {
      quote: "LUXA transformed our educational platform beyond our expectations. The new website has made it incredibly easy for students to register for our Islamic courses, and we've seen a remarkable increase in enrollment. The design perfectly reflects our institution's values while providing modern functionality.",
      author: "Sheikh Abdullah Rahman",
      position: "Academic Director",
      company: "Markazul Bayaan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Streamlined course registration",
      "Student portal dashboard",
      "Islamic course catalog",
      "Payment integration",
      "Mobile-responsive design",
      "Automated email notifications",
      "Progress tracking system",
      "Multi-language support"
    ]
  },
  {
    id: "solar-pulse-platform",
    title: "Solar Pulse Clean Energy Platform",
    category: "Environmental Tech",
    description: "Comprehensive platform for solar energy systems management and sustainability impact tracking",
    tech: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "Chart.js"],
    image: "/assets/solar-pulse.png",
    link: "#",
    client: "Solar Pulse Energy",
    duration: "5 months",
    teamSize: 5,
    budget: "$50,000",
    overview: "Solar Pulse Energy, a leading renewable energy provider, needed a sophisticated platform to showcase their environmental impact, manage solar installations, and provide clients with real-time monitoring of their clean energy contributions. The platform needed to visualize sustainability metrics and inspire confidence in renewable energy adoption.",
    challenge: "Solar Pulse struggled to effectively communicate the tangible environmental benefits of their solar installations to clients. They lacked a centralized system to track CO2 offset, water savings, and long-term sustainability impact. Potential clients needed clear, compelling data to justify their investment in solar energy.",
    solution: "We developed a comprehensive clean energy platform featuring real-time impact dashboards, beautiful data visualizations, and client portals. The solution showcases environmental metrics like CO2 offset, water savings, and system lifespan with stunning visual presentations. Interactive charts and statistics make sustainability data accessible and inspiring.",
    results: [
      {
        metric: "Client Conversions",
        value: "+285%",
        description: "Increased solar installation sales"
      },
      {
        metric: "Customer Engagement",
        value: "+350%",
        description: "Active monitoring and platform usage"
      },
      {
        metric: "Environmental Awareness",
        value: "+400%",
        description: "Clients understanding their impact"
      },
      {
        metric: "System Monitoring",
        value: "Real-time",
        description: "24/7 performance tracking for all installations"
      }
    ],
    gallery: [
      "/assets/solar-pulse.png",
      "/assets/solar-pulse2.png",
      "/assets/solar-pulse3.png"
    ],
    testimonial: {
      quote: "LUXA's platform has revolutionized how we present solar energy to our clients. The stunning visualizations of environmental impact data have made our sales presentations incredibly compelling. Clients can now see exactly how their investment contributes to a cleaner planet, and our conversion rates have skyrocketed.",
      author: "Marcus Chen",
      position: "CEO & Founder",
      company: "Solar Pulse Energy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Real-time environmental impact tracking",
      "CO2 offset calculations and visualizations",
      "Water savings metrics dashboard",
      "30-year system lifespan projections",
      "Client portal with installation monitoring",
      "Interactive sustainability reports",
      "Beautiful data visualizations",
      "Mobile-responsive energy dashboard",
      "Automated impact reporting",
      "System performance analytics"
    ]
  },
  {
    id: "cargeek-ng",
    title: "CarGeek NG - Premium Automotive Platform",
    category: "E-Commerce Platform",
    description: "Revolutionary automotive marketplace for buying, selling, and swapping premium vehicles in Nigeria",
    tech: ["React", "TypeScript", "Next.js", "TailwindCSS", "Node.js", "AI Valuation System"],
    image: "/assets/car-geek 01.png",
    link: "https://cargeek-ng-landing-p-v3fp.bolt.host",
    client: "CarGeek NG",
    duration: "4 months",
    teamSize: 4,
    budget: "$42,000",
    overview: "CarGeek NG needed a cutting-edge platform to revolutionize Nigeria's automotive market. They envisioned an all-in-one solution for buying premium cars, selling vehicles instantly, and introducing a smart car swap feature—all backed by AI-powered valuations and transparent processes.",
    challenge: "The Nigerian automotive market was fragmented, with buyers and sellers struggling to find trustworthy platforms. Traditional dealerships lacked transparency, had complicated processes, and no modern car swapping solutions. Customers needed a platform that combined convenience, trust, and innovation.",
    solution: "We built a comprehensive automotive platform featuring three core services: Premium Car Sales with quality-certified vehicles, Instant Car Sales with AI-powered valuation, and Smart Car Swap with intelligent matching algorithms. The platform includes flexible payment plans, same-day processing, and complete after-sales support.",
    results: [
      {
        metric: "Vehicle Sales",
        value: "2K+",
        description: "Cars successfully sold through the platform"
      },
      {
        metric: "Customer Satisfaction",
        value: "99%",
        description: "Happy clients across Nigeria"
      },
      {
        metric: "Brand Coverage",
        value: "50+",
        description: "Premium car brands available"
      },
      {
        metric: "Client Base",
        value: "500+",
        description: "Active customers and growing"
      }
    ],
    gallery: [
      "/assets/car-geek 01.png",
      "/assets/car-geek 02.png",
      "/assets/car-geek 03.png"
    ],
    testimonial: {
      quote: "CarGeek NG made buying my dream BMW so easy. The process was transparent, and the team was incredibly professional. The AI valuation for my trade-in was spot-on!",
      author: "Adebayo Johnson",
      position: "BMW X5 Owner",
      company: "Lagos, Nigeria",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Premium car sales with quality certification",
      "AI-powered vehicle valuation system",
      "Smart car swap matching algorithm",
      "Flexible financing and payment plans",
      "Same-day payment for sellers",
      "Free vehicle inspection service",
      "Complete documentation support",
      "After-sales service and support",
      "Market-best trade rates",
      "Zero hidden fees guarantee"
    ]
  },
  {
    id: "sunnah-hive",
    title: "Sunnah Hive - Islamic Hadith Search Platform",
    category: "Islamic Education",
    description: "Comprehensive digital platform for searching and studying authentic Hadith collections from the six canonical books",
    tech: ["React", "TypeScript", "Next.js", "TailwindCSS", "Algolia Search", "PostgreSQL"],
    image: "/assets/sunnah-hive 01].png",
    link: "https://sunnah-hive.vercel.app/",
    client: "Islamic Research Community",
    duration: "3 months",
    teamSize: 3,
    budget: "$18,000",
    overview: "Islamic scholars and students needed a modern, accessible platform to search through authentic Hadith collections. The platform had to provide instant access to over 35,000 Hadiths from the six canonical books (Kutub as-Sittah) plus additional collections, making Islamic knowledge easily searchable and accessible worldwide.",
    challenge: "Traditional Hadith books were difficult to search through, and existing digital solutions lacked modern UX and comprehensive search capabilities. Students and scholars needed a fast, intuitive way to find specific Hadiths, cross-reference collections, and access authentic Islamic teachings with proper Arabic text and translations.",
    solution: "We developed Sunnah Hive, a beautiful and powerful Hadith search platform featuring all six canonical collections (Sahih Al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Sunan An-Nasa'i, Sunan At-Tirmidhi, Sunan Ibn Majah) plus Muwatta Imam Malik and Riyadus Saliheen. The platform includes advanced search, Arabic text display, authentic translations, and book navigation.",
    results: [
      {
        metric: "Hadith Database",
        value: "35,000+",
        description: "Authentic Hadiths searchable instantly"
      },
      {
        metric: "Collections",
        value: "8",
        description: "Complete canonical Hadith books"
      },
      {
        metric: "Daily Users",
        value: "5K+",
        description: "Students and scholars worldwide"
      },
      {
        metric: "Search Speed",
        value: "<100ms",
        description: "Lightning-fast Hadith retrieval"
      }
    ],
    gallery: [
      "/assets/sunnah-hive 01].png",
      "/assets/sunnah-hive 02.png"
    ],
    testimonial: {
      quote: "Sunnah Hive has become my daily companion for Hadith research. The search is incredibly fast, and having all the major collections in one beautiful interface saves me hours of research time. An essential tool for any Islamic student.",
      author: "Dr. Abdullah Rahman",
      position: "Islamic Scholar",
      company: "Islamic University",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Complete Kutub as-Sittah collections",
      "Advanced Hadith search engine",
      "Arabic text with English translations",
      "Book and chapter navigation",
      "Sahih Al-Bukhari (7500+ Hadiths)",
      "Sahih Muslim (7500+ Hadiths)",
      "Sunan collections integration",
      "Muwatta Imam Malik",
      "Riyadus Saliheen compilation",
      "Mobile-responsive Islamic design",
      "Fast search performance",
      "Bookmark and save features"
    ]
  },
  {
    id: "rawdah-atfaal",
    title: "Rawdah Atfaal - Global Islamic Children's Academy",
    category: "Online Education",
    description: "Online Qur'an and Hadith learning platform for children worldwide, following authentic Islamic methodologies",
    tech: ["React", "TypeScript", "Next.js", "TailwindCSS", "Calendly Integration", "Video Platform"],
    image: "/assets/rawdah_1.png",
    link: "https://rawdah-atfaal.vercel.app/",
    client: "Markazul Bayaan Director",
    duration: "3 months",
    teamSize: 3,
    budget: "$22,000",
    overview: "The director of Markazul Bayaan envisioned a dedicated online platform to teach children authentic Qur'an and Hadith studies based on the methodology of the Salaf. With students from around the world, they needed a child-friendly platform that combined traditional Islamic education with modern, engaging teaching methods.",
    challenge: "Parents struggled to find authentic Islamic education that follows the sound creed and methodologies of the pious predecessors. Traditional madrasahs weren't accessible globally, and existing online platforms lacked proper Tajweed instruction, personalized 1-on-1 attention, and child-friendly approaches to teaching Hadith and Aqeedah.",
    solution: "We created Rawdah Atfaal, a comprehensive online Islamic learning platform offering two core programs: Qur'an Learning with proper Tajweed and memorization support (Hifz), and Hadith Studies from At-tifl al-labiib focusing on character development. The platform features 1-on-1 sessions, flexible scheduling, trial classes, and direct enrollment with the director.",
    results: [
      {
        metric: "Global Reach",
        value: "25+ Countries",
        description: "Students learning from around the world"
      },
      {
        metric: "Student Enrollment",
        value: "+280%",
        description: "Growth since platform launch"
      },
      {
        metric: "Parent Satisfaction",
        value: "98%",
        description: "Highly satisfied with teaching quality"
      },
      {
        metric: "Learning Programs",
        value: "2 Core",
        description: "Qur'an and Hadith comprehensive curricula"
      }
    ],
    gallery: [
      "/assets/rawdah_1.png",
      "/assets/rawdah_2.png",
      "/assets/rawdah_3.png"
    ],
    testimonial: {
      quote: "I am very satisfied with your accessibility, willingness to help, and flexibility. You go above and beyond to assist, offering Arabic, Aqeedah, Quran, and more. I would definitely recommend signing your kids up for these courses.",
      author: "Umm Firdaus",
      position: "Parent",
      company: "United Kingdom",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Qur'an learning with proper Tajweed",
      "Hadith studies from At-tifl al-labiib",
      "1-on-1 personalized instruction",
      "Child-friendly teaching methods",
      "Hifz (memorization) support",
      "Aqeedah and Arabic courses",
      "Flexible scheduling worldwide",
      "Free trial class booking",
      "Direct enrollment with director",
      "Parent progress updates",
      "Following Salaf methodology",
      "Authentic Islamic education"
    ]
  }
];