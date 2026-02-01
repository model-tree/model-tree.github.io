function Home() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col py-20 slide-in-right">
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <div className="max-w-4xl mx-auto text-center mb-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            Risk Management and Modelling Services
          </h1>
        </div>

        {/* Contact Footer */}
        <footer className="mt-auto pt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg shadow-xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-slate-300">6 Ing. Giulini Str.</p>
                        <p className="text-slate-300">Bucharest, Romania</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:0738846868" className="text-slate-300 hover:text-white transition">
                          0738.846.868
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:radu.popescu@model-tree.net" className="text-slate-300 hover:text-white transition">
                          radu.popescu@model-tree.net
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <a href="https://www.linkedin.com/company/modeltree/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                          https://www.linkedin.com/company/modeltree/
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img 
                    src="/model_tree_03_transparent_background.png" 
                    alt="Model Tree Logo" 
                    className="h-48 w-auto opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
