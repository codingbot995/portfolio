import React from "react";

const commands = {
  contact: () => 
  `👤 Get In Touch:

  Email: waguthijane61@gmail.com
  Phone: +254719337576
  GitHub: @codingbot995
  X : @JWaguthi53843

  Feel free to reach out!,
  `,

  help: () =>
    "Available commands: help, about, certification,education,contact,experience,skills,projects, clear",

  about: () =>
    `👋Hello, I'm Jane mathenge.
  I'm a Sotware Engineer with expertise in full stack development,AI intergration and clound computing
  I specialize in backend development, APIs, and technical writing.`,
  projects: () =>
    `1.LearnWithAxes (https://learnwithaxes.com) Nairobi, Kenya
  -	Successfully developed a hosted web platform (React) for an EdTech company focused on teaching tech-related skills.
  -	Demonstrated proficiency in web development by creating an innovative platform that met the company's needs and objectives.
  2.Opion Website (https:/alikograce.github.io)
	  -Demonstrated expertise in web development by creating a responsive website for a tech startup.
    -Ensured a seamless user experience across devices by implementing responsive design principles.


`,
education: () =>
    `🎓 Education:
        
    Bachelor's in Information Technology:
      -Focused on software engineering, AI, and data structures
      -Relevant coursework: Algorithms, Database Systems, Computer Networks, AI/ML
    Certificate in Software Engineering:
        -Focused on full-stack software engineering, backend development, and cloud computing
        -Hands-on experience with algorithms, data structures, databases, APIs, and DevOps
        -Collaborated on real-world projects (e.g., AirBnB Clone, API development, Flask/Gunicorn deployment)
      
    Additional learning:
      - Continuous professional development through certifications
      - Self-guided study in cloud technologies and artificial intelligence
      - Regular participation in hackathons and coding challenges`,
    skills: () =>
    `💻 Technical Skills.'\n

    Programming languages:
      -Java script/Typescript
      -c#
      -Python

      Frontend:
        -Reactjs/Nextjs
        -Redux
        -Material UI
        -Tailwind CSS

      Backend:
        -Nodejs/Expressjs
        -SQL(postgress)
        -Flask/Fast API

      Clond & Devops:
        - Docke/kubernets
        -AWS
        -Azure

      Machine learning & Tools:
        -Git/Github
        -Bash scripting
      `,
 certification: () => (
  <span>
    🏆 Certifications:

    <br/>
        Technical Certification
    <ul className="list-disc list-inside mt-2">
      <li>
        Cisco Networking Academy (Introduction to Cybersecurity):{" "}
        <a
          href="https://www.credly.com/badges/7747559c-628b-48d3-adfa-b4d55f3755bd/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400"
        >
          Link
        </a>
      </li>
      <li>
        Cisco Networking Academy(Operating System Certification):{" "}
        <a
          href="https://www.credly.com/badges/76718924-cc08-472a-92c1-2d077aac5ccc/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400"
        >
          Link
        </a>
      </li>
    </ul>
    <br/>
    📚 Other Programs & Achievements:
    <ul className="list-disc list-inside mt-2">
      <li>AWS Community Builders (Amazon clone using HTML, CSS & JavaScript)</li>
      <li>AWS Community Builders (JavaScript & React from A-Z)</li>
      <li>DevTown in collaboration with GIET University (JavaScript & React)</li>
    </ul>
  </span>
),
};

export default commands;