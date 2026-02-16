function WhoWeAre() {
  return (
    <div className="py-12 slide-in-right">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">
            Who We Are
          </h1>
          
          {/* First Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="flex-shrink-0 w-full md:w-1/5 flex justify-center">
              <img 
                src="/who_we_are_1.webp" 
                alt="Who we are" 
                className="w-full max-w-[200px] rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-4/5">
              <p className="text-lg text-gray-300 leading-relaxed">
                We are a one stop shop for modelling and model risk management, bringing together experience and technical talent to develop solutions for current problems.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="flex-shrink-0 w-full md:w-1/5 flex justify-center">
              <img 
                src="/who_we_are_2.webp" 
                alt="Who we are" 
                className="w-full max-w-[200px] rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-4/5">
              <p className="text-lg text-gray-300 leading-relaxed">
                Our delivery ranges from small pieces of code to fit client's needs to complex model risk management framework design, including model development, validation, models' audit and compliance assessments, alongside with regulatory training for the board. We use classical and Machine Learning methods with implementations meeting client's need (e.g. Excel, R, SAS, Python).
              </p>
            </div>
          </div>

          {/* Third Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="flex-shrink-0 w-full md:w-1/5 flex justify-center">
              <img 
                src="/who_we_are_3.webp" 
                alt="Who we are" 
                className="w-full max-w-[200px] rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-4/5">
              <p className="text-lg text-gray-300 leading-relaxed">
                We also advice clients on financial and non-financial reporting, and general risk frameworks(Op. Risk, ICT, Sustainability) stemming from compliance or internal governance development needs
              </p>
            </div>
          </div>

          {/* Models, Activity, and Stakeholders Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {/* Models Section */}
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Models</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Business</h3>
                  <p className="text-gray-300">origination (PD), collection</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Risk</h3>
                  <p className="text-gray-300">Credit (ECL), IRRBB, Market Risk, Stress Testing, ICLAAP</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Detection</h3>
                  <p className="text-gray-300">Data Quality, Fraud</p>
                </div>
              </div>
            </div>

            {/* Activity Section */}
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Activity</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Development</h3>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Validation/ Monitoring</h3>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Compliance & Model Risk Management</h3>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Audit</h3>
                </div>
              </div>
            </div>

            {/* Stakeholders & Benefits Section */}
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Stakeholders & Benefits</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Business</h3>
                  <p className="text-gray-300">Increased efficiency and profitability</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Risk & Audit</h3>
                  <p className="text-gray-300">model and manage risk; demonstrate compliance</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Senior management</h3>
                  <p className="text-gray-300">ability to demonstrate regulatory compliance</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
