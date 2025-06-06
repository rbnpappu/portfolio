import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = ({ sectionId }) => {
  return (
    <section
      id={sectionId}
      className="relative flex flex-col bg-gray-900 justify-center overflow-hidden py-10 px-4 gap-6"
    >
      <div className="max-w-5xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        <div className="space-y-8">
          {/* Example Project Card */}
          <div className="border border-gray-600 rounded-2xl p-6 bg-gray-800 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">
                Smart QR-Based Asset Manager
              </h3>
              <a
                href="https://github.com/rbnpappu/zmqrcodefrontenddone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white flex items-center"
              >
                <GitHubIcon className="mr-1" />
                View Code
              </a>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Status: Not hosted yet (code available on GitHub)
            </p>
            <p className="text-gray-200 mb-2">
              A full-stack QR code-based platform for asset management and data
              collection, built for a real client during my time at ZM QR Code
              Services.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Tech Stack: React, Redux, Node.js, Express, MySQL, AWS S3</li>
              <li>JWT-secured login system with role-based access control</li>
              <li>Employee attendance calendar using FullCalendar.js</li>
              <li>QR code generation for user and asset management</li>
              <li>Razorpay integration for online payments</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto text-white ">
        <div className="space-y-8">
          <div className="border border-gray-600 rounded-2xl p-6 bg-gray-800 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">
                Admin Dashboard – Employee & Salary Manager
              </h3>
              <a
                href="https://github.com/rbnpappu/admindashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white flex items-center"
              >
                <GitHubIcon className="mr-1" />
                View Code
              </a>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Status: In development (code available on GitHub)
            </p>
            <p className="text-gray-200 mb-2">
              A full-featured admin dashboard to manage employee attendance,
              salaries, and leave requests. Designed with secure login and
              scalable role-based controls.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>
                Tech Stack: React, Redux, Node.js, Express, MySQL,
                FullCalendar.js, JWT
              </li>
              <li>Secure JWT-based authentication with role-specific access</li>
              <li>
                Integrated FullCalendar.js for real-time attendance tracking
              </li>
              <li>
                Leave request system with admin approval and access pausing
              </li>
              <li>
                Salary calculator based on total attendance days and approval
                status
              </li>
              <li>
                Mobile-responsive layout and modular backend routes for
                scalability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
