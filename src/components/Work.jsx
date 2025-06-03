import React from "react";

const Work = ({ sectionId }) => {
  return (
    <section
      id={sectionId}
      className="relative flex flex-col bg-gray-100 dark:bg-gray-900 justify-center overflow-hidden py-10 px-4"
    >
      <div className="max-w-5xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>

        {/* Job Card Component */}
        <div className="space-y-8">
          {/* ZM QR Code Services */}
          <div className="border border-gray-600 rounded-2xl p-6 bg-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold">
              Software Engineer – ZM QR CODE SERVICES, Guntur
            </h3>
            <p className="text-sm text-gray-400 mb-2">Aug 2024 – Feb 2025</p>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Developed a dynamic admin dashboard using React, Redux, Node.js, and MySQL with JWT-based authentication and role-specific dashboards, reducing admin tasks by 25%.</li>
              <li>Built an employee attendance system using FullCalendar.js, improving attendance tracking accuracy by 15%.</li>
              <li>Designed full-stack apps for data collection with QR code generation and AWS S3 integration, handling over 10,000 records.</li>
              <li>Integrated Razorpay for streamlined payments, increasing success rate by 20%.</li>
              <li>Focused on responsive design, increasing mobile and desktop engagement by 30%.</li>
            </ul>
          </div>

          {/* Rakuten – Associate */}
          <div className="border border-gray-600 rounded-2xl p-6 bg-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold">
              Associate Software Engineer – Rakuten India, Bengaluru
            </h3>
            <p className="text-sm text-gray-400 mb-2">June 2022 – May 2023</p>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Led development of a status box and notification system using React and Redux, improving communication by 30% and reducing response time by 20%.</li>
              <li>Optimized frontend code, reducing load times by 18% and improving retention by 15%.</li>
              <li>Designed and implemented RESTful APIs, cutting response time by 25%.</li>
              <li>Built dynamic UI components, reducing latency by 15% and enhancing observability tools.</li>
              <li>Authored Jest unit tests with 95% coverage, cutting bugs by 10%.</li>
            </ul>
          </div>

          {/* Rakuten – Intern */}
          <div className="border border-gray-600 rounded-2xl p-6 bg-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold">
              Engineering Intern – Rakuten India, Bengaluru
            </h3>
            <p className="text-sm text-gray-400 mb-2">Jan 2022 – June 2022</p>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Developed secure JWT login forms, reducing unauthorized access by 40%.</li>
              <li>Wrote 50+ test cases with React Testing Library, improving stability and code quality.</li>
              <li>Implemented Java-based URL validator, reducing production URL errors by 30%.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
