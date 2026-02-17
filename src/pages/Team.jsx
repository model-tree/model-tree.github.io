import TeamMemberCard from '../components/TeamMemberCard'

function Team() {
  const teamMembers = [
    {
      image: '/team_radu.webp',
      name: 'Radu Popescu',
      role: 'Founder',
      shortDescription: 'PhD in Maths (Lyon), former Director at Big Four and top-tier banks. Founded Model Tree and pursues pure maths research.',
      location: 'Bucharest',
      phone: '+40 738 846 868',
      email: 'radu.popescu@model-tree.net',
      linkedin: 'https://www.linkedin.com/in/raduvpopescu/',
      background: [
        'A former director at UBS in London, Radu has founded Model Tree and assembled a team in Romania to leverage his experience and local talent to provide solutions to clients.',
        'Radu has Ph.D. in Mathematics (Univ. Lyon, France) and is an certified Financial Risk Manager (FRM).',
        'Radu has a track record of proposing effective solutions to new problems, many arising from regulatory changes.',
        'Radu enjoys giving both technical and softs trainings, and continues research in pure mathematics and in finance.',
        'He collaborates with other mathematicians from IMAR on various technical issues (e.g. defining new statistical measures to respond the need of a particular situation)',
      ],
      skills: [
        'Quantitative Modelling (Valuation, Risk, Stress Testing, Capital Modelling, Fraud, Data quality)',
        'Risk Management (from framework design to control execution)',
        'Audit/Control Framework',
        'Board Projection',
        'Deep understanding of Machine Learning/AI stemming from the underlying mathematical models',
      ],
      experience: [
        '20+ years of banking, consulting and academic experience in quantitative topics; as a banker he held modelling and model risk management positions at UBS, RBS and Barclays in London. Since 2018, he has been serving clients in Romania, and gained experience of their needs.',
        'Validated a wide range of models for several leading global banks in London, assessed compliance with regulations and represented his employer in dialogues with regulators (FED, Finma, ECB, Bank of England).',
        'Credit Risk: built or validated IFRS 9 frameworks and their modelling components, PD, LGD, CCF, covering a wide range of portfolios; assessed their control framework and provided actions plans and solutions to mitigate weaknesses, both for Romanian and international banks.',
        'Business decision models: Radu lead the development of scorecards for various purposes (PD, Collection, AML) using classical or ML techniques.',
        'Market Risk (Banking Book): Radu built a tool from first principles, including a solution for validation and audit, to be used primarily for IRRBB, but also for Budgeting, and Stress Testing for ICAAP. Previously, he lead the implementation of a Model Risk Framework for Treasury models with processes adapted to specific Treasury activities.',
        'Models audit: designed, lead and execute front to back models audit for pricing and risk models for RBS and UBS in London. Recently, he performed a similar task as required by the National Bank in Romania.',
        'ICAAP/ILAAP: designed or reviewed the capital/liquidity adequacy process from regulatory principles to models and controls.',
        'Stress testing: reviewed stress testing framework and stress testing models(e.g. CCAR submission).',
      ],
    },
    {
      image: '/team_placeholder.svg',
      name: 'Jonathan Davidson',
      role: 'Consultant',
      shortDescription: 'PhD in Applied Maths (Cambridge). A discreet, safe pair of hands trusted by senior management. Keen on Number Theory, AI, and running.',
      location: 'London',
      email: '',
      linkedin: '',
      background: [],
      skills: [],
      experience: [],
    },
    {
      image: '/team_placeholder.svg',
      name: 'Vlad Barnaure',
      role: 'Consultant',
      shortDescription: 'PhD in Economics (Glasgow). Specialises in macroeconomic, time series and ML modelling at top-tier banks. Chess International Master.',
      location: 'London',
      email: '',
      linkedin: '',
      background: [],
      skills: [],
      experience: [],
    },
    {
      image: '/team_placeholder.svg',
      name: 'Rares Stan',
      role: 'Consultant',
      shortDescription: 'PhD in Maths (Bucharest). Specialises in statistical, ML and AI modelling with a background in IT and banking consultancy.',
      location: 'Bucharest',
      email: '',
      linkedin: '',
      background: [],
      skills: [],
      experience: [],
    },
    {
      image: '/team_placeholder.svg',
      name: 'Daniel Suciu',
      role: 'Consultant',
      shortDescription: 'Banking and insurance consultant with an actuarial background, experienced at top-tier international financial institutions.',
      location: 'Bucharest',
      email: '',
      linkedin: '',
      background: [],
      skills: [],
      experience: [],
    },
    {
      image: '/team_placeholder.svg',
      name: 'Maria Mihailescu',
      role: 'Consultant',
      shortDescription: 'Banking and insurance consultant with actuarial studies in the UK. Entrepreneur in bio agriculture in Romania.',
      location: 'Bucharest',
      email: '',
      linkedin: '',
      background: [],
      skills: [],
      experience: [],
    },
  ]

  return (
    <div className="py-12 slide-in-right">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">
            Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                image={member.image}
                name={member.name}
                role={member.role}
                shortDescription={member.shortDescription}
                location={member.location}
                phone={member.phone}
                email={member.email}
                linkedin={member.linkedin}
                background={member.background}
                skills={member.skills}
                experience={member.experience}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
