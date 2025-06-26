import './App.css';
import resume from './resume.pdf';
import linkedin from './icons/linkedin.svg';
import github from './icons/github.svg';
import react from './icons/react.svg';
import Slide from 'react-reveal/Slide';
import airQualityImg from './images/air_quality.jpeg';
import navigationAssistantImg from './images/navigation_assistant.jpg';

function Project(project) {
  return (
    <div className = "project-card">
        <h1 className = "project-name">{project.name}</h1>
        <p className = "project-description">{project.description}</p>
        {project.image && <img src={project.image} alt={project.name} className="project-image" />}
        <a href={project.link} target="_blank" rel="noreferrer">
          <button className = "project-link">Link</button>
        </a>
    </div>
  )
}
function ProjectsSection({projectsData}) {
  return (
    <section className="projects-list">
      <div className="project-list">
        {projectsData.map((project) => (
          <Slide right>
            <Project {...project} />
          </Slide>
        ))}
      </div>
    </section>
  );
}
function HardwareSection({hardwareData}) {
  return (
    <section className="hardware-list">
      <h1 className="header">Hardware</h1>
      <div className="project-list">
        {hardwareData.map((project) => (
          <Slide right>
            <Project {...project} />
          </Slide>
        ))}
      </div>
    </section>
  );
}
function App() {
  const projectsData = [
    {
      name: "BlockBrain",
      description:"A full-stack blockchain learning platform that incentivizes users with NFTs. Uses Cohere AI to grade answers that test user's understanding of content. Built using React, ChakraUI, Express, and MongoDB.",
      link: "https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwd3yico0ca5uc01z93z8sn3/idea"
    },
    {
      name: "Grocery Run",
      description: "Need groceries to cook your next meal but don't know where to get the cheapest ingredients? We made a react app that tells you where to get the cheapest groceries in a time effecient way.",
      link: "https://devpost.com/software/grocery-run-jzobac",

    },
    {
      name: "Sort the 6ix",
      description: "What if you could find out where to throw your household waste using the camera of your phone? Used React Native, the Google Cloud AI Api, Hugging Face AI's Semantic Search, and City of Toronto's open data",
      //image: "project1.jpg",
      link: "https://devpost.com/software/sorting-the-6ix",
    },
    {
      name: "Posicise",
      description: "Created a simple Android fitness App using Java and Android Studio",
      //image: "project2.jpg",
      link: "https://devpost.com/software/posicise",
    },
    {
      name: "Youthfi",
      description: "An experimental site that taught financial basics. Built to experiment with React. ",
      link: "https://github.com/nohyp3/youthfi",

    },

    // Add more projects as needed
  ];
  const hardwareData = [
    {
      name: "Solar Powered Air Quality Monitor",
      description: "An IoT device that reports air quality data from a BME680 sensor and sends it to a web dashboard. Used a Raspberry Pi Pico to read sensor data and host the dashboard locally. Utilized a solar panel, two rechargeable batteries, and a TP4056 battery charge board to power the Pico and the Sensor.",
      link: "https://github.com/nohyp3/homeMonitor",
      image: airQualityImg
    },
    {
      name: "Navigation Assistant for Visually Impaired",
      description: "Helped created a system to help the visually impaired navigate their surroundings. The system integrates an ESP32-CAM, ultrasonic sensors, and Google Gemini AI to provide real-time scene descriptions and obstacle detection via a Flask web server.",
      link: "https://github.com/nohyp3/ultravision",
      //image: navigationAssistantImg
    },
    // Add more hardware projects as needed
  ];
  return (
    <div className="App">
      <div className="hero-home">
        <div className="main-header">
          <h1>Hello! My name is Andre.<span className="blink">|</span></h1>
          <h2>Systems Design Engineering Student @ uWaterloo</h2>
          <div className = "icons">
            <a href="https://www.linkedin.com/in/andre-ke/" target="_blank" rel="noreferrer"><img className = "icon" src={linkedin} alt="linkedin logo" width='50em' height='50em'></img></a>
            <a href="https://github.com/nohyp3"target="_blank" rel="noreferrer"><img className = "icon" src={github} alt="github logo" width='50em' height='50em'></img></a>
            <a className = "icon" href={resume} target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div> 
      </div>
      <div className="projects">
        <h1 className="header">Projects</h1>
        <ProjectsSection projectsData={projectsData} />
        <HardwareSection hardwareData={hardwareData} />
      </div>
      <div className="footer">
        <p>Built With</p> <img src={react}></img>
      </div>
    </div>
  );
}

export default App;
