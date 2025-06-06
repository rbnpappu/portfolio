import React from 'react'

const Skills = () => {
  return (
<section
  id="education"
  className="relative flex flex-col bg-gray-900 justify-center overflow-hidden py-10 px-4"
>
  <div className="max-w-5xl mx-auto text-white">
    <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
    <div className="border border-gray-600 rounded-2xl p-6 bg-gray-800 shadow-lg">
      <h3 className="text-xl font-semibold mb-2">
        Bachelor of Technology in Computer Science Engineering
      </h3>
      <p className="text-gray-300 mb-1">
        <strong>College:</strong> Saroj Mohan Institute of Technology, Kolkata
      </p>
      <p className="text-gray-300 mb-1">
        <strong>GPA:</strong> 8.77
      </p>
      <p className="text-gray-300">
        <strong>Duration:</strong> June 2018 – July 2022
      </p>
    </div>
  </div>
</section>

  )
}

export default Skills
