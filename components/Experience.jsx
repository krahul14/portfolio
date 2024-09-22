import React from "react"

const experienceData = [
  {
    date: "May 2024-September 2024",
    jobTitle: "Full Stack Developer Intern",
    companyName: "HashedTokens",
    companyWebsite: "https://www.hashedtokens.com",
    description: [
      "Transformed design prototypes into functional web components in collaboration with cross-functional teams.",
      "Integrated APIs into the frontend using Redux Toolkit for efficient state management.",
      "Improved the user experience by implementing responsive and interactive UI elements.",
    ],
  },
  {
    date: "Jun 2024-August 2024",
    jobTitle: "Software Engineer Intern",
    companyName: "El Nova Labs",
    companyWebsite: "https://www.elnovalabs.com",
    description: [
      "Developed and maintained responsive web applications.",
      "Collaborated with backend developers to integrate APIs.",
      "Optimized performance and ensured cross-browser compatibility.",
    ],
  },
]

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4 mb-16 text-gray-500">My Professional Journey</h2>
        <div className="timeline-container flex flex-col space-y-12">
          {experienceData.map((experience, index) => (
            <div key={index} className="timeline-item flex">
              <div className="timeline-date w-1/4 text-right pr-8 text-gray-300">
                <p className="text-md font-semibold">{experience.date}</p>
              </div>
              <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300 w-full">
                <h3 className="text-lg font-bold text-gray-100">
                  {experience.jobTitle}
                </h3>
                <p className="text-sm italic text-gray-600">
                  <a
                    href={experience.companyWebsite}
                    className="text-[#5651e5] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.companyName}
                  </a>
                </p>
                <ul className="mt-2 text-gray-200">
                  {experience.description.map((item, index) => (
                    <li key={index} className="list-disc list-inside">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
