function Papers() {
  const publications = [
    {
      title: 'Glancing Back',
      source: 'The Actuary, July 2020',
      href: '/papers/20-22 GLANCING BACK_The Actuary July 2020_The Actuary.pdf',
    },
  ]

  return (
    <div className="py-12 slide-in-right">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Publications
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Here is a list of selected publications by our team members.
          </p>

          <div className="space-y-6">
            {publications.map((paper, index) => (
              <a
                key={index}
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white dark:bg-black rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <svg className="w-8 h-8 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{paper.title}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{paper.source}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Papers
