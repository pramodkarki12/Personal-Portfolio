// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
};

//Home Page
const greeting = {
  title: 'Hello 👋.',
  title2: 'Pramod Karki',
  logo_name: 'pramodkarki',
  nickname: 'pramod / ',
  full_name: 'Pramod Karki',
  subTitle: 'Full Stack MERN Developer, AI/ML Enthusiast 🔥 Always learning.',
  resumeLink:
    'https://docs.google.com/document/d/1A_jWRG74Rst427tg1izLa6vRXclS9_9F856jWJPJlDY/edit?usp=sharing',
  mail: 'mailto:hkanani191@gmail.com',
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: 'https://github.com/harikanani',
  linkedin: 'https://www.linkedin.com/in/harikrushn-kanani/',
  gmail: 'hkanani191@gmail.com',
  gitlab: 'https://gitlab.com/harikanani',
  facebook: 'https://www.facebook.com/harikrishan.kanani/',
  twitter: 'https://twitter.com/Harikrushn9',
  instagram: 'https://www.instagram.com/hari_kanani_/',
};

const skills = {
  data: [
    {
      title: 'Full Stack MERN Development',
      fileName: 'FullStackImg',
      skills: [
        '⚡ Develop highly interactive UI for your web and mobile applications',
        '⚡ Building responsive website front end using ReactJS and NextJS',
        '⚡ Developing mobile applications using React Native and Android',
        '⚡ Creating application backend in Node, Express & Django',
        '⚡ Integration of third party services such as Firebase and AWS',
      ],
      softwareSkills: [
        {
          skillName: 'HTML5',
          fontAwesomeClassname: 'simple-icons:html5',
          style: {
            color: '#E34F26',
          },
        },
        {
          skillName: 'CSS3',
          fontAwesomeClassname: 'fa-css3',
          style: {
            color: '#1572B6',
          },
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'simple-icons:javascript',
          style: {
            backgroundColor: '#FFFFFF',
            color: '#F7DF1E',
          },
        },
        {
          skillName: 'ReactJS',
          fontAwesomeClassname: 'simple-icons:react',
          style: {
            color: '#61DAFB',
          },
        },
        {
          skillName: 'NodeJS',
          fontAwesomeClassname: 'simple-icons:node-dot-js',
          style: {
            color: '#339933',
          },
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'simple-icons:npm',
          style: {
            color: '#CB3837',
          },
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'simple-icons:mongodb',
          style: {
            color: '#439743',
          },
        },
        {
          skillName: 'Android',
          fontAwesomeClassname: 'simple-icons:android',
          style: {
            color: '#3DDC84',
          },
        },
        {
          skillName: 'Java',
          fontAwesomeClassname: 'simple-icons:java',
          style: {
            color: '#f89820',
          },
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassname: 'simple-icons:mysql',
          style: {
            color: '#4479A1',
          },
        },
        {
          skillName: 'jQuery',
          fontAwesomeClassname: 'simple-icons:jquery',
          style: {
            color: '#0865A6',
          },
        },
        {
          skillName: 'Git',
          fontAwesomeClassname: 'simple-icons:git',
          style: {
            color: '#E94E32',
          },
        },
        {
          skillName: 'C/C++',
          fontAwesomeClassname: 'simple-icons:cplusplus',
          style: {
            color: '#E94E32',
          },
        },
        {
          skillName: 'Python',
          fontAwesomeClassname: 'simple-icons:python',
          style: {
            color: '#3776AB',
          },
        },
      ],
    },

    {
      title: 'Data Science & AI',
      fileName: 'DataScienceImg',
      skills: [
        '⚡ Developing highly scalable production ready models using ML/DL Algorithms',
        '⚡ Experience of working with Computer Vision and NLP projects',
        '⚡ Complex quantitative modelling for dynamic forecasting and time series analysis',
      ],
      softwareSkills: [
        {
          skillName: 'Tensorflow',
          fontAwesomeClassname: 'logos-tensorflow',
          style: {
            backgroundColor: 'transparent',
          },
        },
        {
          skillName: 'Keras',
          fontAwesomeClassname: 'simple-icons:keras',
          style: {
            backgroundColor: 'white',
            color: '#D00000',
          },
        },
        {
          skillName: 'PyTorch',
          fontAwesomeClassname: 'logos-pytorch',
          style: {
            backgroundColor: 'transparent',
          },
        },
        {
          skillName: 'Python',
          fontAwesomeClassname: 'ion-logo-python',
          style: {
            backgroundColor: 'transparent',
            color: '#3776AB',
          },
        },
      ],
    },

    {
      title: 'Cloud Infra-Architecture',
      fileName: 'CloudInfraImg',
      skills: [
        '⚡ Experience working on multiple cloud platforms',
        '⚡ Experience hosting and managing websites',
        '⚡ Experience with Continuous Integration',
      ],
      softwareSkills: [
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'simple-icons:amazonaws',
          style: {
            color: '#FF9900',
          },
        },
        {
          skillName: 'Netlify',
          fontAwesomeClassname: 'simple-icons:netlify',
          style: {
            color: '#38AFBB',
          },
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'simple-icons:heroku',
          style: {
            color: '#6863A6',
          },
        },
        {
          skillName: 'Firebase',
          fontAwesomeClassname: 'simple-icons:firebase',
          style: {
            color: '#FFCA28',
          },
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'simple-icons:postgresql',
          style: {
            color: '#336791',
          },
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'simple-icons:mongodb',
          style: {
            color: '#47A248',
          },
        },
        {
          skillName: 'Docker',
          fontAwesomeClassname: 'simple-icons:docker',
          style: {
            color: '#1488C6',
          },
        },
        {
          skillName: 'GitHub Actions',
          fontAwesomeClassname: 'simple-icons:githubactions',
          style: {
            color: '#5b77ef',
          },
        },
      ],
    },

    {
      title: 'UI/UX Design',
      fileName: 'DesignImg',
      skills: [
        '⚡ Designing highly attractive user interface for mobile and web applications',
        '⚡ Customizing logo designs and building logos from scratch',
        '⚡ Creating the flow of application functionalities to optimize user experience',
      ],
      softwareSkills: [
        {
          skillName: 'Adobe XD',
          fontAwesomeClassname: 'simple-icons:adobexd',
          style: {
            color: '#FF2BC2',
          },
        },
        {
          skillName: 'Figma',
          fontAwesomeClassname: 'simple-icons:figma',
          style: {
            color: '#F24E1E',
          },
        },
        {
          skillName: 'Adobe Illustrator',
          fontAwesomeClassname: 'simple-icons:adobeillustrator',
          style: {
            color: '#FF7C00',
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: 'Herald College',
      subtitle: 'Bachelor in Information Technology (Hons.)',
      logo_path: 'college.png',
      alt_name: 'HeraldCollege',
      duration: '2019 - Present',
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Information Technology.",
        '⚡ I have studied core subjects like AI/ML, Data Structures, DBMS, Web Development, Web Security.',
        '⚡ I have also completed various online courses for Backend, Web , Mobile App Development, etc.',
        "⚡ I have implemented several projects based on what I've leart during my semester course. ",
      ],
      website_link: 'https://heraldcollege.edu.np/',
    },
    {
      title: 'G.Venkataswamy Naidu College',
      subtitle: 'Major in Science and Computer Science',
      logo_path: 'gvn.png',
      alt_name: 'gvn',
      duration: '2017 - 2019',
      descriptions: [
        '⚡ Completed my +2 level education',
        '⚡ Majoring in Science and Computer Science',
      ],
      website_link: 'https://www.gvnschool.edu.np/',
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: 'M0001: MongoDB Basics',
      subtitle: 'MongoDB University',
      logo_path: 'mongo.png',
      certificate_link:
        'https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing',
      alt_name: 'MongoDB University',
      // color_code: "#2AAFED",
      color_code: '#47A048',
    },
    {
      title: 'Hackathon',
      subtitle: 'Hack The Mountains',
      logo_path: 'hackathon1.svg',
      certificate_link:
        'https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing',
      alt_name: 'hackathon',
      color_code: '#E2405F',
    },
    {
      title: 'A300: Atlas Security',
      subtitle: 'MongoDB University',
      logo_path: 'mongo.png',
      certificate_link:
        'https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing',
      alt_name: 'MongoDB University',
      color_code: '#47A048',
    },
    {
      title: 'Cyber Security & Cyber Forensics',
      subtitle: 'Workshop at IIT Bombay',
      logo_path: 'iit.png',
      certificate_link:
        'https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing',
      alt_name: 'Workshop',
      color_code: '#2AAFED',
    },
    {
      title: 'MLH Local Hack Day: Build',
      subtitle: 'Major League Hacking',
      logo_path: 'mlh-logo.svg',
      certificate_link:
        'https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing',
      alt_name: 'Google',
      color_code: '#fe0037',
    },
    {
      title: 'Hack20',
      subtitle: 'Flutter International Hackathon',
      logo_path: 'flutter.png',
      certificate_link:
        'https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing',
      alt_name: 'Flutter International Hackathon',
      color_code: '#2AAFED',
    },
    {
      title: 'Postman Student Expert',
      subtitle: 'Postman',
      logo_path: 'postman.png',
      certificate_link:
        'https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g',
      alt_name: 'Postman',
      color_code: '#fffbf3',
    },
  ],
};

// Experience Page
const experience = {
  title: 'Experience',
  subtitle: 'Work, Internship and Volunteership',
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: 'experience.svg',
  sections: [
    {
      title: 'Work Experience',
      experiences: [
        {
          title: 'Full Stack Developer (Intern)',
          company: 'M&R Solution',
          company_url: 'https://mrsolution.com.np/',
          logo_path: 'm&r.png',
          duration: 'April 2021 - June 2021',
          location: 'Office',
          description: `Train, manage and provide guidance to junior software development staff.
          Work closely with the Project Manager and Team Leads on change request functions.
          Develops new and maintains existing applications.
          We primarily used MERN Stack. 80% of my work was doing backend development and the remaining 20% was Frontend related tasks.
          `,
          color: '#0071C5',
        },
      ],
    },
    {
      title: 'Volunteerships and Activities',
      experiences: [
        {
          title: 'Member of Herald DevCorps AI Learners Community',
          company: 'devCorps',
          company_url: 'https://www.facebook.com/groups/414464819194468',
          logo_path: 'devcorps.png',
          duration: 'Dec 2020 - Present',
          location: 'College',
          description:
            'Organize community meetings, raise funds, and book guest speakers. Showcasing the community with different events, and workshops from the industry-level professionals',
          color: '#4285F4',
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: 'Projects',
  description:
    'My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.',
  avatar_image_path: 'projects_image.svg',
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: 'Contact Me',
    profile_image_path: 'harikrushn.jpg',
    description:
      'You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ',
  },
  blogSection: {
    title: 'Blogs',
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: 'https://twitter.com/Harikrushn9',
    avatar_image_path: 'blogs_image.svg',
  },
};

const projects = {
  data: [
    {
      id: '0',
      name: 'AutomateInstaPyBot',
      url: 'https://github.com/harikanani/AutomateInstaPyBot',
      description:
        'This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo',
      languages: [
        {
          name: 'Python',
          iconifyClass: 'logos-python',
        },
      ],
    },
    {
      id: '1',
      name: 'react-twitter-clone',
      url: 'https://github.com/harikanani/react-twitter-clone',
      description:
        'A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.',
      languages: [
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html',
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css',
        },
        {
          name: 'React',
          iconifyClass: 'logos-react',
        },
        {
          name: 'Firebase',
          iconifyClass: 'logos-firebase',
        },
      ],
    },
    {
      id: '2',
      name: 'node-blockchain',
      url: 'https://github.com/harikanani/node-blockchain',
      description:
        'A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).',
      languages: [
        {
          name: 'NodeJS',
          iconifyClass: 'logos-nodejs',
        },
        {
          name: 'TypeScript',
          iconifyClass: 'logos-typescript',
        },
      ],
    },
    {
      id: '3',
      name: 'top-crypto-gainers',
      url: 'https://github.com/harikanani/top-crypto-gainers',
      description:
        'A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.',
      languages: [
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html',
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css',
        },
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'ReactJS',
          iconifyClass: 'logos-react',
        },
      ],
    },
    {
      id: '4',
      name: 'personal-portfolio',
      url: 'https://github.com/harikanani/personal-portfolio',
      description:
        'A simple command line interface based quiz app to know more about me :).',
      languages: [
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'NodeJS',
          iconifyClass: 'logos-nodejs',
        },
      ],
    },
    {
      id: '3',
      name: 'node_express_crud_api_starter',
      url: 'https://github.com/harikanani/node_express_crud_api_starter',
      description: 'Simple NodeJS Express CRUD Operations API starter.',
      languages: [
        {
          name: 'NodeJS',
          iconifyClass: 'logos-nodejs',
        },
      ],
    },
    {
      id: '4',
      name: 'node-web-scrapper',
      url: 'https://github.com/harikanani/node-web-scrapper',
      description:
        'A Simple web scrapper that scrap the information of amazon products such as price.It also scrap Wikipedia Data such as birthdate.',
      languages: [
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html',
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css',
        },
        {
          name: 'NodeJs',
          iconifyClass: 'logos-nodejs',
        },
      ],
    },
    {
      id: '5',
      name: 'harikanani.github.io',
      url: 'https://github.com/harikanani/harikanani.github.io',
      description:
        'A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.',
      languages: [
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html',
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css',
        },
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'SCSS',
          iconifyClass: 'vscode-icons:file-type-scss2',
        },
      ],
    },
    {
      id: '6',
      name: 'Automate Attendace',
      url: 'https://github.com/harikanani/Node_Python',
      description: 'Automation of Online Attendance using node js and python',
      languages: [
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'Python',
          iconifyClass: 'logos-python',
        },
      ],
    },
    {
      id: '7',
      name: 'Automate Discord Bot',
      url: 'https://github.com/harikanani/AutomateDiscordBot',
      description:
        'A Discord Bot to send Automatic messages to serer channel in regular time difference.',
      languages: [
        {
          name: 'Python',
          iconifyClass: 'logos-python',
        },
        {
          name: 'Python Selenium',
          iconifyClass: 'logos-selenium',
        },
        {
          name: 'Chromium Browser',
          iconifyClass: 'openmoji-chromium',
        },
      ],
    },
    {
      id: '8',
      name: 'Flask Blog',
      url: 'https://github.com/harikanani/flask_blog',
      description: 'A Simple Blog Web Application made using Flask Framework',
      languages: [
        {
          name: 'Python',
          iconifyClass: 'logos-python',
        },
        {
          name: 'Flask',
          iconifyClass: 'cib-flask',
        },
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html',
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css',
        },
      ],
    },
    {
      id: '9',
      name: 'Netflix top series',
      url: 'https://github.com/harikanani/netflix-top-series',
      description: 'List of Top Netflix Series which is deployed to vercel.',
      languages: [
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'ReactJS',
          iconifyClass: 'logos-react',
        },
        {
          name: 'HTML5',
          iconifyClass: 'logos-html-5',
        },
        {
          name: 'CSS3',
          iconifyClass: 'logos-css-3',
        },
      ],
    },
    {
      id: '10',
      name: 'COVID-19 Tracker',
      url: 'https://github.com/harikanani/Covid19TrackerReact',
      description:
        'Simple Covid-19 Tracker made using React and deployed to Vercel.',
      languages: [
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'ReactJS',
          iconifyClass: 'logos-react',
        },
        {
          name: 'HTML5',
          iconifyClass: 'logos-html-5',
        },
        {
          name: 'CSS3',
          iconifyClass: 'logos-css-3',
        },
      ],
    },
    {
      id: '11',
      name: 'Food Order Static Website',
      url: 'https://github.com/harikanani/food-order-website',
      description:
        'A simple static website related to food restaurants service. this is reasponsive as well.',
      languages: [
        {
          name: 'HTML5',
          iconifyClass: 'logos-html-5',
        },
        {
          name: 'CSS3',
          iconifyClass: 'logos-css-3',
        },
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'PHP',
          iconifyClass: 'logos-php',
        },
      ],
    },
    {
      id: '12',
      name: 'NFT Launchpad',
      url: 'https://deliquescent-cents.000webhostapp.com/',
      description: 'NFT Launchpad crypto site portfolio',
      languages: [
        {
          name: 'HTML5',
          iconifyClass: 'logos-html-5',
        },
        {
          name: 'CSS3',
          iconifyClass: 'logos-css-3',
        },
        {
          name: 'JavaScript',
          iconifyClass: 'logos-javascript',
        },
        {
          name: 'ReactJS',
          iconifyClass: 'logos-react',
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
