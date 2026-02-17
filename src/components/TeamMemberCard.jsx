import { useState, useEffect } from 'react'

function TeamMemberCard({
  image,
  name,
  role,
  shortDescription,
  location,
  phone,
  email,
  linkedin,
  background,
  skills,
  experience,
}) {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  return (
    <>
      {/* Compact Card */}
      <div className="bg-black/80 rounded-xl border border-gray-700/80 overflow-hidden backdrop-blur-sm flex flex-col h-full">
        {/* Photo */}
        <div className="w-full aspect-[16/9] overflow-hidden bg-gray-800/50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h2 className="text-lg font-bold text-white mb-0.5">{name}</h2>
          {role && (
            <p className="text-blue-400 font-medium text-sm mb-2">{role}</p>
          )}

          <p className="text-gray-300 text-xs leading-relaxed flex-1">
            {shortDescription}
          </p>

          {/* Location */}
          {location && (
            <div className="flex items-center gap-2 mt-3 text-gray-400 text-xs">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{location}</span>
            </div>
          )}

          {/* View Full Profile */}
          <button
            onClick={() => setModalOpen(true)}
            className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-1.5 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 text-xs font-medium text-white border border-gray-700 hover:border-gray-600 cursor-pointer"
          >
            View Full Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={() => setModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn" />

          {/* Centering wrapper */}
          <div className="fixed inset-0 flex items-center justify-center px-12 py-10">
            {/* Modal Content */}
            <div
              className="relative bg-gray-950 border border-gray-700/80 rounded-2xl w-full max-w-5xl max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl animate-modalIn"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-400 hover:text-white transition cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-8">
              {/* Header: Photo + Info + Contact */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Photo */}
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="w-36 h-36 rounded-xl overflow-hidden shadow-lg bg-gray-800/50 ring-1 ring-gray-700/50">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Info + Contact */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold text-white mb-1 text-center md:text-left">{name}</h2>
                  {role && (
                    <p className="text-blue-400 font-medium text-lg mb-2 text-center md:text-left">{role}</p>
                  )}
                  {location && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 justify-center md:justify-start">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{location}</span>
                    </div>
                  )}
                  <p className="text-gray-300 text-sm leading-relaxed text-center md:text-left">{shortDescription}</p>

                  {/* Contact row */}
                  <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                    {email && (
                      <a href={`mailto:${email}`} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="break-all">{email}</span>
                      </a>
                    )}
                    {phone && (
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{phone}</span>
                      </a>
                    )}
                    {linkedin && (
                      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Sections */}
              {((background && background.length > 0) || (skills && skills.length > 0) || (experience && experience.length > 0)) && (
                <div className="mt-8 pt-8 border-t border-gray-700/80 space-y-8">
                  {background && background.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                        Background
                      </h3>
                      <div className="space-y-3 pl-4">
                        {background.map((item, index) => (
                          <p key={index} className="text-gray-300 leading-relaxed text-sm md:text-base flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">&bull;</span>
                            <span>{item}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {skills && skills.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                        Skills
                      </h3>
                      <div className="space-y-2 pl-4">
                        {skills.map((skill, index) => (
                          <p key={index} className="text-gray-300 leading-relaxed text-sm md:text-base flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">&bull;</span>
                            <span>{skill}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {experience && experience.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                        Professional Experience
                      </h3>
                      <div className="space-y-3 pl-4">
                        {experience.map((item, index) => (
                          <p key={index} className="text-gray-300 leading-relaxed text-sm md:text-base flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">&bull;</span>
                            <span>{item}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TeamMemberCard
