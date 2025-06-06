import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col bg-gray-900 justify-center overflow-hidden py-10 px-4"
    >
      <div className="max-w-5xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <div className="border border-gray-600 rounded-2xl p-6 bg-gray-800 shadow-lg space-y-4">
          <p className="text-gray-300">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:pappu.thakur1103@gmail.com"
              className="text-blue-400 hover:underline"
            >
              pappu.thakur1103@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+918013683515"
              className="text-blue-400 hover:underline"
            >
              +91 8013683515
            </a>
          </p>
          <p className="text-gray-300">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/rbnpappu?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/rbnpappu
            </a>
          </p>
          <p className="text-gray-300">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/pappu-thakur-a05412172/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/papputhakur
            </a>
          </p>
          <p className="text-gray-300">
            <strong>Location:</strong> 2 No. Shadeb Nagar, Kolkata – 700083,
            India
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
