function WhatWeDo() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
            What We Do
          </h1>
          
          <div className="space-y-8">
            {/* Internal Audit Section */}
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Internal Audit</h2>
              <div className="space-y-2 text-gray-300 leading-relaxed">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We perform model audits (stand alone), or parts of model's audit (e.g. testing).</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We help our clients formulate internal procedures for quantitative audits.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We perform model performance tests</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We review model documentation, provide templates, and</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Review control process</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We review or help our clients formulate internal policies for Model Risk Management</span>
                </p>
              </div>
            </div>

            {/* Model governance Section */}
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Model governance</h2>
              <div className="space-y-2 text-gray-300 leading-relaxed">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Rerun of models (e.g. quarterly calculation)</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>On-going monitoring tests and reports</span>
                </p>
              </div>
            </div>

            {/* On-going processes Section */}
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">On-going processes</h2>
              <div className="space-y-2 text-gray-300 leading-relaxed">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We develop primary/benchmark models, alongside with detailed documentation.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>For regulatory models, we include tests models to pass compliance with regulations e.g. MoC calculations, reimplementation, uncertainty estimation, sensitivity to assumptions)</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We document models either following client's templates, or we provide our own documentation to match client's level of detail.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We perform validation in line with clients' internal governance of models and the riskiness of the models validated.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We document using either our own documentation or using clients' templates.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We reimplement/benchmark models.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We test for Compliance with regulations (e.g. IFRS 9, BCBS IRRBB, SS 3/18, SR 11-7)</span>
                </p>
              </div>
            </div>

            {/* Model development Section */}
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Model development</h2>
              <div className="space-y-2 text-gray-300 leading-relaxed">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We develop primary/benchmark models, alongside with detailed documentation.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>For regulatory models, we include tests models to pass compliance with regulations e.g. MoC calculations, reimplementation, uncertainty estimation, sensitivity to assumptions)</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We document models either following client's templates, or we provide our own documentation to match client's level of detail.</span>
                </p>
              </div>
            </div>

            {/* Model validation Section */}
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Model validation</h2>
              <div className="space-y-2 text-gray-300 leading-relaxed">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We perform validation in line with clients' internal governance of models and the riskiness of the models validated.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We document using either our own documentation or using clients' templates.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We reimplement/benchmark models.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We test for Compliance with regulations (e.g. IFRS 9, BCBS IRRBB, SS 3/18, SR 11-7)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
