function WhatWeDo() {
  const cards = [
    {
      title: "Model validation",
      items: [
        "We perform validation in line with clients' internal governance of models and the riskiness of the models validated.",
        "We document using either our own documentation or using clients' templates.",
        "We reimplement/benchmark models.",
        "We test for compliance with regulations (e.g., IFRS 9, EBA, ECB, BCBS, SS 3/18, SR 11-7).",
      ],
    },
    {
      title: "Model development",
      items: [
        "We develop primary/benchmark models, alongside with detailed documentation.",
        "For regulatory models, we include tests models to pass compliance with regulations (e.g., MoC calculations, reimplementation, uncertainty estimation, sensitivity to assumptions).",
        "We document models either following client's templates, or we provide our own documentation to match client's level of detail.",
      ],
    },
    {
      title: "On-going processes",
      items: [
        "Rerun of models (e.g., quarterly calculation).",
        "On-going monitoring tests and reports.",
      ],
    },
    {
      title: "Model governance",
      items: [
        "We perform model performance tests.",
        "We review model documentation, provide templates, and review control process.",
        "We review or help our clients formulate internal policies for Model Risk Management.",
      ],
    },
    {
      title: "Internal Audit",
      items: [
        "We perform model audits (stand alone), or parts of model's audit (e.g., testing).",
        "We help our clients formulate internal procedures for quantitative audits.",
      ],
    },
  ];

  return (
    <div className="py-12 slide-in-right">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">
            What We Do
          </h1>

          <div className="space-y-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-black rounded-lg p-6 border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  {card.title}
                </h2>
                <div className="space-y-2 text-gray-300 leading-relaxed">
                  {card.items.map((item, i) => (
                    <p key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
