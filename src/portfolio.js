
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Mounir Missaoui",
  title: "Hi Y'all, I'm Mounir",
  subTitle: emoji("A passionate DevOps Engineer 🚀 having an experience of building, Monitoring Cloud Infrastructure and CI/CD pipelines on AWS, MS Azure, IBM Cloud and many other providers."),
  resumeLink: "https://drive.google.com/file/d/12hf72wOQ9hUF2IIyQl5NtABxMgNmOF8v/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/blastillroid",
  linkedin: "https://www.linkedin.com/in/mounir-missaoui/",
  gmail: "mounir.missaoui@esprit.tn",
  gitlab: "https://gitlab.com/M.missaoui",
  medium: "https://medium.com/@LordGoats",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY DEVOPS & CLOUD ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Install highly resilient and reactive monitoring infrastructure for almost any dev stack"),
    emoji("⚡ Infrastructute provisioning and configuration automation using Terraform and Ansible"),
    emoji("⚡ Architect and Implement infrastructures on Cloud providers such as Azure / AWS / OVH / IBM Cloud"),
    emoji("⚡ Insfrastructure and application monitoring with ELK / Prometheus / NetData"),
    emoji("⚡ Build optimized CICD pipelines on GitlabCI / CircleCI / TravisCI / Jinkens"),
    emoji("⚡ Manage and organize Git workflow and branching strategies"),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "IBM Cloud",
      fontAwesomeClassname: "fa fa-server"
    },
    {
      skillName: "Cloudflare",
      fontAwesomeClassname: "fa fa-cloudflare"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fa fa-dharmachakra"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "MS Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "ESPRIT Tunisia",
      logo: require("./assets/images/esprit.png"),
      subHeader: "BE in Computer Software Engineering",
      duration: "September 2014 - June 2019",
      desc: "FUTURA entrepreneurial club alumni and former Internal Affairs Moderator (IAM)",
    },
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "GitOps",
      progressPercentage: "80%"
    },
    {
      Stack: "SysOps",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Lead Engineer",
      company: "SlashUp Studio",
      companylogo: require("./assets/images/up.png"),
      date: "Nov 2020 – Present",
      desc: "Filling the position of a Cloud and DevSecOps lead holding and managing the DevOps process design and implementation ",
      descBullets: [
        // "Cloud",
        // "GitOps",
        // "DevOps",
        // "Security",
        // "Quality Assessment"
      ]
    },
    {
      role: "Cloud and DevOps Engineer / Instructor",
      company: "FivePoints The Talent Pool",
      companylogo: require("./assets/images/fivep.jpg"),
      date: "Jan 2019 – Nov 2020",
      desc: "Holding the position of a Cloud and DevOps Instructor ,coaching and managing a team developers who seek to transition from Dev Portfolios to DevOps administration"
    },
    {
      role: "BlockChain and Cloud Architect",
      company: "Inscrypt",
      companylogo: require("./assets/images/inscrypt.jpeg"),
      date: "Sep 2018 – Dec 2018",
      desc: "Design and Implementation of a Blockchain private ledger Ecosystem"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "blastillroid", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [

    {
      image: require("./assets/images/yallab.png"),
      link: "https://yallab.fivepoints.fr/"
    },
    
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216-29958376",
  email_address: "mounir.missaoui@esprit.tn"
};

//Twitter Section

const twitterDetails = {

  userName : ""//"twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
