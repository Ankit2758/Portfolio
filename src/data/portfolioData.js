export const portfolioData = {
  personal: {
    name: "Ankit Verma",
    title: "Computer Science & Engineering Student",
    subTitle: "C++ Developer | Data Analyst | Web Developer",
    location: "Sangam Vihar, New Delhi 110080",
    phone: "+91 8383860610",
    email: "ankitayush2758@gmail.com",
    github: "https://github.com/Ankit2758",
    githubUser: "Ankit2758",
    linkedin: "https://linkedin.com/in/Ankit-Verma",
    bio: "Computer Science undergraduate at Lovely Professional University with a passion for C++ problem solving, Python data analytics, Power BI dashboarding, and modern web application development. Skilled in building data-driven applications and efficient software systems.",
    availability: "Open for Internships & Projects",
    resumeLink: "https://github.com/Ankit2758/Cv/blob/main/Ankit%20General%20CV%20(2).pdf",
    resumeRawLink: "https://raw.githubusercontent.com/Ankit2758/Cv/main/Ankit%20General%20CV%20(2).pdf"
  },

  stats: [
    { label: "B.Tech CSE", value: "2024–2028", detail: "LPU Punjab" },
    { label: "Core Expertise", value: "C++ & Python", detail: "Data & Algorithms" },
    { label: "Certifications", value: "Infosys", detail: "C++ & DBMS" },
    { label: "Projects", value: "IPL Analytics", detail: "Power BI & Python" }
  ],

  education: [
    {
      id: "lpu",
      institution: "Lovely Professional University (LPU)",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2024 – 2028",
      location: "Phagwara, Punjab, India",
      score: "CGPA: 6.80",
      type: "University",
      about: "Lovely Professional University (LPU) is one of India's premier multi-disciplinary universities, accredited NAAC A++ grade. Known for its massive 600+ acre modern campus, cutting-edge computing labs, global exposure, and industry-oriented computer science curriculum.",
      highlights: [
        "Specializing in Core Computer Science, Software Engineering, and Data Analytics.",
        "Comprehensive coursework in Data Structures & Algorithms in C++, DBMS, Operating Systems, and Web Technologies.",
        "Active member of CSE student coding circles, hackathons, and technical workshops.",
        "Developing hands-on projects in Power BI dashboarding, Python exploratory data analysis, and React JS."
      ],
      courses: ["C++ OOP", "Data Structures & Algorithms", "Database Management Systems (DBMS)", "Python Data Analytics", "Web Architecture", "Linux OS"]
    },
    {
      id: "atal-adarsh",
      institution: "Atal Adarsh Vidyalaya",
      degree: "12th Senior Secondary (Science Stream - PCM)",
      period: "2022 – 2023",
      location: "Lodhi Estate, New Delhi, India",
      score: "Percentage: 68%",
      type: "High School",
      about: "Atal Adarsh Vidyalaya at Lodhi Estate is a renowned Delhi government model school offering high-standard STEM education with modern science laboratories, digital classrooms, and innovative Atal Tinkering Labs.",
      highlights: [
        "Specialized in Senior Secondary Science with Physics, Chemistry, and Mathematics (PCM).",
        "Engaged in hands-on physics and chemistry laboratory experiments and data analysis.",
        "Participated in school science exhibitions and inter-school technical quizzes."
      ],
      courses: ["Physics", "Chemistry", "Mathematics (PCM)", "English", "Computer Fundamentals"]
    },
    {
      id: "bal-niketan",
      institution: "Bal Niketan Public School",
      degree: "10th Secondary (Science & Computer Science)",
      period: "2020 – 2021",
      location: "Sangam Vihar, New Delhi, India",
      score: "Percentage: 62%",
      type: "Secondary School",
      about: "Bal Niketan Public School in Sangam Vihar, New Delhi, provides quality secondary education focused on holistic development, mathematical problem solving, and early digital literacy.",
      highlights: [
        "Developed strong fundamentals in Science, Algebra, Geometry, and Information Technology.",
        "Participated in computer lab practicals, sports events, and co-curricular competitions."
      ],
      courses: ["Science", "Mathematics", "Social Studies", "English", "Information Technology"]
    }
  ],

  skills: {
    languages: [
      { name: "C++", level: 90, category: "Core Language" },
      { name: "Python", level: 85, category: "Data Science & Scripting" },
      { name: "JavaScript", level: 80, category: "Web Development" },
      { name: "Java", level: 75, category: "Object Oriented" },
      { name: "C", level: 80, category: "Systems" }
    ],
    technologies: [
      { name: "Power BI", level: 90, category: "Analytics & BI" },
      { name: "DAX", level: 85, category: "Data Modeling" },
      { name: "Pandas & NumPy", level: 85, category: "Data Manipulation" },
      { name: "React JS", level: 80, category: "Frontend Framework" },
      { name: "Node JS", level: 75, category: "Backend Runtime" },
      { name: "Matplotlib & Seaborn", level: 80, category: "Data Visualization" }
    ],
    tools: [
      { name: "Git & GitHub", level: 88 },
      { name: "Ubuntu Linux", level: 80 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Responsive Web Design", level: 85 },
      { name: "Scripting & Automation", level: 82 }
    ]
  },

  projects: [
    {
      id: "ipl-power-bi",
      title: "IPL Ball-by-Ball Data Analysis Dashboard",
      period: "Oct '25 – Nov '25",
      category: "Power BI & Analytics",
      description: "Comprehensive Power BI dashboard visualizing IPL ball-by-ball match data, player consistency, and team statistics across multiple seasons.",
      techStack: ["Power BI", "DAX", "Data Cleaning", "Data Transformation", "Data Visualization"],
      highlights: [
        "Analysed IPL match datasets to uncover team, player, batting, and bowling trends.",
        "Cleaned and structured raw datasets for seamless BI ingestion.",
        "Implemented interactive slicers, drill-down filters, and performance KPIs using DAX formulas.",
        "Created comparative visual analytics for match outcome prediction and player form evaluation."
      ],
      github: "https://github.com/Ankit2758",
      featured: true
    },
    {
      id: "ipl-python-analysis",
      title: "IPL Statistical Analysis Using Python",
      period: "Oct '25 – Nov '25",
      category: "Python & Data Science",
      description: "Exploratory Data Analysis (EDA) on IPL ball-by-ball dataset using Python, Pandas, and visualization libraries to analyze scoring distributions and statistical outliers.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
      highlights: [
        "Executed statistical exploratory data analysis on IPL cricket data using Python.",
        "Processed raw datasets using Pandas and NumPy for aggregations and performance metrics.",
        "Generated box plots, histograms, bar charts, and scatter plots to detect trends and outliers.",
        "Delivered data-driven insights into scoring consistency, wickets, and run rates."
      ],
      github: "https://github.com/Ankit2758",
      featured: true
    }
  ],

  certifications: [
    {
      id: "cpp-infosys",
      title: "Programming Using C++",
      issuer: "Infosys Springboard",
      date: "August 30, 2025",
      issuedDate: "Sunday, August 31, 2025",
      status: "Completed & Verified",
      verifyUrl: "https://verify.onwingspan.com",
      pdfName: "cpp_certificate.pdf",
      description: "Comprehensive certification covering C++ syntax, Object-Oriented Programming (OOP), memory management, templates, pointers, and algorithm design.",
      skills: ["C++", "Object-Oriented Programming", "Data Structures", "Memory Management", "Algorithms"]
    },
    {
      id: "dbms-infosys",
      title: "Data Base Management System",
      issuer: "Infosys Springboard",
      date: "June 2026",
      status: "Certified",
      verifyUrl: "https://verify.onwingspan.com",
      description: "In-depth course on relational database principles, SQL querying, ER diagrams, normalization, indexing, and transaction management.",
      skills: ["DBMS", "SQL", "Database Design", "Normalization", "Relational Systems"]
    }
  ]
};
