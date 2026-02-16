import { useState } from 'react'

function TeamMemberCard({
  image,
  name,
  role,
  shortDescription,
  phone,
  email,
  linkedin,
  background,
  skills,
  experience,
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-black/80 rounded-xl border border-gray-700/80 overflow-hidden backdrop-blur-sm w-full">
      {/* Visible Section (Small Card) */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_250px] gap-8">
          
          {/* Column 1: Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-48 h-48 rounded-xl overflow-hidden shadow-lg bg-gray-800/50 ring-1 ring-gray-700/50">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 2: Name, Role, Short Description */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-1">{name}</h2>
            {role && (
              <p className="text-blue-400 font-medium text-lg mb-4">{role}</p>
            )}
            <p className="text-gray-300 text-base leading-relaxed">
              {shortDescription}
            </p>
          </div>

          {/* Column 3: Get in touch */}
          <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-700/80 pt-6 md:pt-0 md:pl-8">
            <h3 className="text-lg font-bold text-white mb-4 text-center md:text-left">Get in touch</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <svg className="w-4 h-4 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${email}`} className="hover:text-white transition break-all">
                  {email}
                </a>
              </li>
              {phone && (
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <svg className="w-4 h-4 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition whitespace-nowrap">
                    {phone}
                  </a>
                </li>
              )}
              {linkedin && (
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <svg className="w-4 h-4 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="group flex items-center gap-2 px-6 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-all duration-300 text-sm font-medium text-white border border-gray-700 hover:border-gray-600"
          >
            {expanded ? 'Show Less' : 'View Full Profile'}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Hidden Section (Expanded) */}
        {expanded && (
          <div className="mt-8 pt-8 border-t border-gray-700/80 animate-fadeIn">
            <div className="grid grid-cols-1 gap-8">
              {/* Background */}
              {background && background.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                    Background
                  </h3>
                  <div className="space-y-3 pl-4">
                    {background.map((item, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed text-sm md:text-base flex items-start gap-3">
                        <span className="text-blue-500 mt-1.5">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {skills && skills.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                    Skills
                  </h3>
                  <div className="space-y-2 pl-4">
                    {skills.map((skill, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed text-sm md:text-base flex items-start gap-3">
                        <span className="text-blue-500 mt-1.5">•</span>
                        <span>{skill}</span>
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Professional Experience */}
              {experience && experience.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                    Professional Experience
                  </h3>
                  <div className="space-y-3 pl-4">
                    {experience.map((item, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed text-sm md:text-base flex items-start gap-3">
                        <span className="text-blue-500 mt-1.5">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamMemberCard
