import TeamMember from '../components/TeamMember'

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

          {/* Team Member Section */}
          <div className="mt-20">
            <TeamMember
              image="/who_we_are_5.webp"
              name="Radu Popescu"
              phone="+40 738 846 868"
              email="radu.popescu@model-tree.net"
              linkedin="https://www.linkedin.com/in/raduvpopescu/"
              background={[
                "A former director at UBS in London, Radu has founded Model Tree and assembled a team in Romania to leverage his experience and local talent to provide solutions to clients.",
                "Radu has Ph.D. in Mathematics (Univ. Lyon, France) and is an certified Financial Risk Manager (FRM).",
                "Radu has a track record of proposing effective solutions to new problems, many arising from regulatory changes.",
                "Radu enjoys giving both technical and softs trainings, and continues research in pure mathematics and in finance.",
                "He collaborates with other mathematicians from IMAR on various technical issues (e.g. defining new statistical measures to respond the need of a particular situation)"
              ]}
              skills={[
                "Quantitative Modelling (Valuation, Risk, Stress Testing, Capital Modelling, Fraud, Data quality)",
                "Risk Management (from framework design to control execution)",
                "Audit/Control Framework",
                "Board Projection",
                "Deep understanding of Machine Learning/AI stemming from the underlying mathematical models"
              ]}
              experience={[
                "20+ years of banking, consulting and academic experience in quantitative topics; as a banker he held modelling and model risk management positions at UBS, RBS and Barclays in London. Since 2018, he has been serving clients in Romania, and gained experience of their needs.",
                "Validated a wide range of models for several leading global banks in London, assessed compliance with regulations and represented his employer in dialogues with regulators (FED, Finma, ECB, Bank of England).",
                "Credit Risk: built or validated IFRS 9 frameworks and their modelling components, PD, LGD, CCF, covering a wide range of portfolios; assessed their control framework and provided actions plans and solutions to mitigate weaknesses, both for Romanian and international banks.",
                "Business decision models: Radu lead the development of scorecards for various purposes (PD, Collection, AML) using classical or ML techniques.",
                "Market Risk (Banking Book): Radu built a tool from first principles, including a solution for validation and audit, to be used primarily for IRRBB, but also for Budgeting, and Stress Testing for ICAAP. Previously, he lead the implementation of a Model Risk Framework for Treasury models with processes adapted to specific Treasury activities.",
                "Models audit: designed, lead and execute front to back models audit for pricing and risk models for RBS and UBS in London. Recently, he performed a similar task as required by the National Bank in Romania.",
                "ICAAP/ILAAP: designed or reviewed the capital/liquidity adequacy process from regulatory principles to models and controls.",
                "Stress testing: reviewed stress testing framework and stress testing models(e.g. CCAR submission)."
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
