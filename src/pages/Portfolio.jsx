function Portfolio() {
  const projects = [
    {
      title: "Model Validation - Large European Bank",
      description: "We performed model validation and issue closure work for IFRS 9 models for a Large European IRB Bank. We used their internal policies and proposed solutions when the internal policies where not detailed enough. Implementation calculations in SAS."
    },
    {
      title: "Model Validation – Top 3 European Bank",
      description: "We are currently on a long term contract with one of the largest European banks to help them with their validation of the models, including methodology review and IT implementation testing, alongside with other high profile connected works (ECB issue closure work). Work is submitted to the internal and external regulators."
    },
    {
      title: "ECL model validation – Major Romanian Bank",
      description: "We performed the initial validation of the ECL modelling framework covering all the modelling components (e.g. PD, Macro and FLI, SICR, LGD, CCF, Maturity) from data inputs, mathematical models and estimations, output, compliance and reporting.",
      subPoints: [
        "a. Validation report, findings and recommendations",
        "b. Validation manual : identification of all the controls that will ensure model soundness and compliance with IFRS 9 standards, and detailed instructions on how to execute them at the next validation"
      ]
    },
    {
      title: "PD models validation – Major Romanian Bank",
      description: "We performed the initial validation of the PD models suite, discussed and agreed findings and changes. Model control framework was improved, notably by formulating a validation manuals containing controls that will ensure an effective validation of the models (e.g. covering data, mathematical soundness, performance monitoring, compliance).",
      subPoints: [
        "a. Validation reports: PD models Corporates and Retail for their usage for origination, IFRS 9 reporting, stress testing and, capital calculation",
        "b. Validation manual for PD models used for origination, capital, and IFRS 9 reporting"
      ]
    },
    {
      title: "IRRBB modelling - Major Romanian Bank",
      description: "Developed a complete calculation model for the balance sheet of the bank, to be used for quarterly reporting and weekly for internal analysis of changes. The modelling takes into account the EBA Guidelines on IRRBB, and current thinking for CSRBB, and is split into several intertwining modules:",
      subPoints: [
        "a. Curves and scenario modules, including an IRCC projection curve to evaluate the growing portfolio of clients who switched to this benchmark",
        "b. Cash Flows, EVE, and NII data bases for credit (fixed, floating, hybrids), deposits (ON, TD), bonds (including CSRBB calculation), taking into account prepayment risk, and other financial instruments with rates optionality.",
        "c. Data quality module to ensure correct calculation and reporting of data issues from the balance sheet of the bank.",
        "d. Comparison module for weekly change attribution to volumes and rates.",
        "e. Compliance and Validation module containing reimplementation in Excel of each type of item, for the dual purpose of correctness and compliance with guidelines."
      ]
    },
    {
      title: "Macroeconomic projection process - Major Romanian Bank",
      description: "We have performed twice the validation of the macroeconomic projections process used on one side to inform business decisions and for IFRS 9 reporting (as an input into the Forward Looking Adjustment of the PDs). We examined implementation, mathematical soundness, constructed challenger models, considered compliance with regulation and best practices, we examined the role of expert judgment, backtested the end-to-end process and communicated the result; we identified, discussed and agreed issues and action plans with the Bank and External Audit."
    },
    {
      title: "Calculation and reporting tool - Bulgarian Bank",
      description: "Development of a calculation tool for CCR and CVA risks according to regulations. The tool is used for calculation and reporting to the national regulator (using the EBA template)."
    },
    {
      title: "ECL framework model's audit - Major Romanian Bank",
      description: "We designed and executed the client's first model's audit covering the IFRS 9 reporting. We followed best practices in Internal Audit, mapped all processes, spelled out the quantitative controls covering the main submodules (PD, LGD, EAD, SICR) and performed their evaluation. When reliance could not be placed on a previous line 2 control, for example if validation had not been performed before, a brief validation was also done."
    },
    {
      title: "Model development IFRS 9 - Large European Bank - Romanian Leasing division",
      description: "We developed modelling components for estimation of prepayment, overdue factor, PD curve constructions, stability analysis. We also performed backtesting and stability analysis for various leasing portfolios (both retail and corporates), answering to weaknesses identified internally. We closes the issues with the internal stakeholders (i.e. model validation)."
    },
    {
      title: "Model development: Credit Origination Scorecard - Important Romanian Bank",
      description: "We developed the scorecard model used by one important provider in the Romanian banking landscape. The model covers uncollateralized lending. An added complexity comes from the fact that it is used for origination using a mobile phone application, leading to a hierarchy of trust among variables. We worked with the client to establish the usage of the model and provided them with documentation for the regulator."
    },
    {
      title: "IFRS 9 modelling - Moldovan Bank",
      description: "Comprehensive review of the IFRS9 modelling framework with redevelopment of PD approach, and development of LGD, CCF and Maturity estimation models, taken into account feedback from external audit. Several options were examined, new software tools were developed to automatize and lower operational risk due to data manipulation. The project is ongoing."
    },
    {
      title: "ESG/Sustainability Advisory - Global Cybersecurity Company",
      description: "We are advising a global cybersecurity company in elaborating their third sustainability report, with the work on the third one being ongoing. We helped the client formulate its priorities, collect information from the stakeholders, benchmark itself to other companies in terms of governance and controls, and formulate a roadmap for the future development in the ESG area. We advised them on their risk management and control framework stemming from legal obligations with global IT providers. We provided an integrated control framework to cover the 1100 data points contained in ESRS."
    },
    {
      title: "Model Validation Lead – Global Financial Services Group (FTSE 100), London",
      description: "Following acquisition of a global financial data provider, our client has tasked us with leading the validation of a pricing library used by all major banks for valuation benchmarking for structured products. As such we both perform and coordinate validation activities, including testing, conceptual challenge, report writing, and agreement of action plans with issue owners. We covered a large number of models (Black-Scholes, Dupire, Heston, LV w. Jumps, Hull-White 1f, 2f, LMM 1f, 2f, Jarrow-Yildirim, Gabillon) and products (auto-callable, dual accrual redemption notes, inflation liked notes, hybrid products). We identified issues, common themes, discussed with model owners, agreed action plans, and reported progress to senior management. We also proposed changes to the current model risk management framework based on the lessons learned in validation."
    },
    {
      title: "Scorecard development - Romanian Tier 1 Bank",
      description: "Development of retail scorecard to be used for origination and for IFRS 9 ECL calculation: input data exploration, cleaning and transformation, selection of mathematical models, validation and backtesting procedures, alongside with documentation and templates for the national regulators."
    }
  ]

  return (
    <div className="py-12 slide-in-right">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">
            Selected Projects
          </h1>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-black rounded-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold text-white mb-4">{project.title}</h2>
                <p className="text-gray-300 leading-relaxed mb-3">{project.description}</p>
                {project.subPoints && (
                  <div className="mt-4 space-y-2">
                    {project.subPoints.map((point, pointIndex) => (
                      <p key={pointIndex} className="text-gray-300 text-sm ml-4">
                        {point}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
