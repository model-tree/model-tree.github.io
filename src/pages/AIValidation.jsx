function AIValidation() {
  const layers = [
    {
      title: "Govern",
      text: "AI policy, risk appetite, accountability, committees, model inventory and ownership.",
    },
    {
      title: "Classify",
      text: "Use-case tiering by materiality, customer impact, degree of autonomy, regulatory exposure and third-party reliance.",
    },
    {
      title: "Validate",
      text: "Independent testing of data, conceptual soundness, performance, robustness, explainability, fairness and security.",
    },
    {
      title: "Control",
      text: "Access and permissions, human oversight, performance limits, monitoring, fallback and incident response.",
    },
    {
      title: "Assure",
      text: "Effective challenge, control testing, audit evidence, periodic revalidation and reporting to senior management.",
    },
  ];

  const validationScope = [
    "Data quality, lineage and representativeness",
    "Conceptual soundness and suitability for the intended use",
    "Performance, stability and backtesting",
    "Robustness and sensitivity to changes in inputs",
    "Explainability of model outputs and decisions",
    "Bias and fairness across customer groups",
    "Implementation, change control and reproducibility",
    "Human oversight and override processes",
    "Ongoing monitoring, drift detection and thresholds",
    "For GenAI and LLM-based tools: output quality, hallucination, prompt injection, data leakage and tool permissions",
  ];

  const services = [
    {
      title: "AI Model Risk Diagnostic",
      text: "Inventory of AI, machine learning and GenAI use across the organisation, risk classification, and gap analysis against your model risk management framework and applicable regulation.",
      deliverables: "Executive report, AI model inventory, remediation roadmap.",
    },
    {
      title: "Independent AI / ML Model Validation",
      text: "Independent validation of a machine learning or GenAI model, following the same standards applied to traditional risk models, documented in your templates or ours.",
      deliverables: "Validation report, findings and recommendations, agreed remediation plan.",
    },
    {
      title: "AI Governance Operating Model",
      text: "Extending your existing model risk management framework to AI: policies, roles and responsibilities, tiering, approval procedures, monitoring and escalation.",
      deliverables: "Framework and policy pack, RACI, templates, training for first and second line.",
    },
  ];

  const useCases = [
    "Credit scoring and origination",
    "Underwriting and pricing",
    "Fraud and AML detection",
    "Customer analytics",
    "GenAI in documentation and risk reporting",
  ];

  const standards = [
    "SR 11-7",
    "PRA SS1/23",
    "EU AI Act",
    "ISO/IEC 42001",
    "NIST AI RMF",
    "NIST Generative AI Profile",
    "OWASP Top 10 for LLM Applications",
  ];

  const card = "bg-white dark:bg-black rounded-lg p-6 border border-gray-200 dark:border-gray-700";
  const sectionTitle = "text-2xl font-bold text-gray-900 dark:text-white mb-6";

  return (
    <div className="py-12 slide-in-right">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            AI Model Validation
          </h1>

          {/* Intro */}
          <div className={`${card} mb-12`}>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We help regulated financial institutions deploy AI and machine learning models with the same rigour expected of traditional risk models: independent validation, robust governance, clear accountability and ongoing monitoring.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We validate the model, the data pipeline, the implementation, the controls and the human oversight, not only the algorithm.
            </p>
          </div>

          {/* Framework */}
          <h2 className={sectionTitle}>Our approach</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {layers.map((layer, i) => (
              <div
                key={layer.title}
                className={`${card} w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]`}
              >
                <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-1">{i + 1}</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{layer.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{layer.text}</p>
              </div>
            ))}
          </div>

          {/* Validation scope */}
          <h2 className={sectionTitle}>What we validate</h2>
          <div className={`${card} mb-12`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-600 dark:text-gray-300 leading-relaxed">
              {validationScope.map((item, i) => (
                <p key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Services */}
          <h2 className={sectionTitle}>Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div key={service.title} className={`${card} flex flex-col`}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-1">{service.text}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Deliverables: </span>
                  {service.deliverables}
                </p>
              </div>
            ))}
          </div>

          {/* Use cases and standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className={card}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Typical use cases</h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                {useCases.map((item, i) => (
                  <p key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className={card}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Aligned with</h2>
              <div className="flex flex-wrap gap-2">
                {standards.map((standard) => (
                  <span
                    key={standard}
                    className="px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIValidation;
