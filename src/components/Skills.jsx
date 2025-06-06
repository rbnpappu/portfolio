import React from 'react'

const Skills = () => {
  return (
    <section
  id="skills"
  className="relative flex flex-col bg-gray-900 justify-center overflow-hidden py-10 px-4"
>
  <div className="max-w-5xl mx-auto text-white">
    <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
    <div className="border border-gray-600 rounded-2xl p-6 bg-gray-800 shadow-lg">
      <ul className="list-disc list-inside space-y-2 text-gray-200">
        <li><strong>Languages:</strong> JavaScript, HTML5, CSS3, Java</li>
        <li><strong>Frontend Technologies:</strong> React, Redux, React Native, Flutter, Axios, GraphQL</li>
        <li><strong>Backend Technologies:</strong> Node.js, Express, JWT, Java, Python, Microservices, REST APIs</li>
        <li><strong>Databases:</strong> MySQL, MongoDB</li>
        <li><strong>Cloud & Server Management:</strong> AWS S3, AWS Deployment, cPanel</li>
        <li><strong>Coding & DSA:</strong> Solved more than 700 problems on LeetCode</li>
        <li><strong>Frameworks & Tools:</strong> Git (CI/CD), Jira, Slack</li>
        <li><strong>Developer Tools & Software:</strong> VS Code, Eclipse IDE</li>
      </ul>
    </div>
  </div>
</section>
  )
}

export default Skills
