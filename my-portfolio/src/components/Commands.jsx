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
  projects: () => (
    <div className="space-y-4">
      <h2 className="font-bold text-lg">🚀 Projects</h2>

      <div>
        <h3 className="font-semibold">1. Food delivery website</h3>
        <p>allows users to browse a variety of restaurants and dishes</p>
        <p>🛠️ Technologies: Reactjs, Java Script, API</p>
        <a
          href="https://food-delivery-website-v8uo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          🔗 Visit Project
        </a>
      </div>

      <div>
        <h3 className="font-semibold">2. E-commerce platform</h3>
        <p>provides a seamless shopping experience for fashion enthusiasts</p>
        <p>🛠️ Technologies: Java Script, Tailwind CSS, Node.js</p>
        <a
          href="https://masomo-net.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          🔗 Visit Project
        </a>
      </div>

      <div>
        <h3 className="font-semibold">3. Lishebora (Supported by Microsoft for Startups)</h3>
        <p>AI meal planner generating personalized plans based on health details</p>
        <p>🛠️ Technologies: Next.js, Tailwind CSS, Azure, Cosmos DB, OpenAI API</p>
        <a
          href="http://lishebora.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          🔗 Visit Project
        </a>
      </div>

      <div>
        <h3 className="font-semibold">4. Charge24 Africa Payment Portal</h3>
        <p>Payment system for power bank dispensing machines serving 3,000+ customers</p>
        <p>🛠️ Technologies: Next.js, AWS S3, Amazon Lightsail, PostgreSQL, Daraja API</p>
        <a
          href="https://charge24.africa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          🔗 Visit Project
        </a>
      </div>

      <p className="mt-4">👉 Type <strong>'contact'</strong> to discuss collaborations!</p>
    </div>
  ),
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