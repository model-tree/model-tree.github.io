import TeamMemberCard from '../components/TeamMemberCard'

function Team() {
  const teamMembers = [
    {
      image: '/team_radu_169.webp',
      name: 'Radu Popescu',
      role: 'Director & Owner',
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
      image: '/team_jonathan_169.JPG',
      name: 'Jonathan Davidson',
      role: 'Director',
      shortDescription: 'PhD in Applied Maths (Cambridge). A discreet, safe pair of hands trusted by senior management. Keen on Number Theory, AI, and running.',
      location: 'London',
      phone: '+44 7980 860 367',
      email: 'jonathan.davidson@model-tree.net',
      linkedin: 'https://www.linkedin.com/in/jonathan-davidson-052b4a/',
      background: [
        'Former VP at JP Morgan in Model Governance for VaR and Market Risk Capital.',
        'Former Senior Manager at Deloitte providing model validation for both trading and banking books.',
        'Broad experience working for a range of financial entities from Hedge Funds to Investment banks and Retail banks.',
        'Jonathan has a Ph.D. in Applied Mathematics (University of Cambridge, UK).',
        'Experienced, discrete and a safe pair of hands. Trusted by senior management.',
      ],
      skills: [
        'Quantitative Modelling (Valuation, Model Risk, Stress Testing, Capital Modelling)',
        'Model Governance for VaR and Market Risk Capital',
        'Deep understanding of financial mathematics',
        'Programming skills: Excel, Matlab, C/C++, Python',
        'Interest in applying Machine Learning/AI in model validation',
      ],
      experience: [
        'Model validation, testing and benchmarking experience developed over 20+ years.',
        'Developed statistical arbitrage models for a hedge fund.',
        'Validated derivative models for audit and provided consulting for a range of investment and retail banking clients.',
        'Model validation and optimization of the Loss Forecast Model (IRB approach based on PD, LGD, EAD, maturity) that provided UK government figures for post credit crisis bad debt.',
        'Model Governance for market risk VaR and capital models.',
      ],
    },
    {
      image: '/team_vlad_169.JPG',
      name: 'Vlad Barnaure',
      role: 'Senior Manager',
      shortDescription: 'PhD in Economics (Glasgow). Specialises in macroeconomic, time series and ML modelling at top-tier banks. Chess International Master.',
      location: 'London',
      phone: '+44 7775 963 377',
      email: 'vlad.barnaure@model-tree.net',
      linkedin: 'https://www.linkedin.com/in/barnaure/',
      background: [
        'Vlad specializes in macro-financial modelling for stress testing and policy analysis, risk management and predictive analytics. He holds a Ph.D. in Economics from the University of Glasgow and is a CFA Level III candidate.',
        'Vlad began his career at the International Monetary Fund, where he advised on banking supervision, financial stability and monetary policy during Romania\'s 2013-2015 Stand-By Arrangement. He subsequently served in quant roles at UBS and Barclays in London, progressing to Vice President.',
        'Vlad\'s lifelong passion for chess, which culminated in winning the Romanian National Championship in 2014, has shaped his analytical rigor, strategic thinking and attention to detail.',
      ],
      skills: [
        'Quantitative Modelling (stress testing, capital modelling, forecasting, econometrics, valuation)',
        'Model Risk Management (validation, governance, controls)',
        'Policy and Regulation (financial stability, prudential regulation, banking supervision, macroprudential policies, CCAR, monetary economics)',
        'Programming skills (Python, R, SQL, Matlab)',
      ],
      experience: [
        'IMF field economist during the 2013-2015 Stand-By Arrangement; regular liaison with the Romanian authorities on banking supervision, financial stability and monetary policy. Built and nurtured executive relationships across central banks, regulators and international institutions.',
        'Model development lead for scenario generation (CCAR, PRA, EBA, IFRS 9, CECL) at Barclays and UBS, delivering forecasts for 1,000+ macro-financial variables. Successfully designed and deployed internal models to production across seven validation cycles.',
        'Architected automated solutions (model risk management, data processing, ML-based output plausibility) that materially improved model development efficiency and secured clean validation approvals.',
        'Established data governance frameworks to ensure accuracy, completeness, and BCBS 239 compliance. Resolved data quality issues with source system owners and maintained production pipelines.',
        'Directed the delivery of large-scale change initiatives (Libor decommissioning, annual review submissions, IHC-Group model integration, data platform migration); coordinated cross-functional teams and coached junior quants to meet critical regulatory deadlines.',
      ],
    },
    {
      image: '/team_aurel_169.JPG',
      name: 'Aurel Totolici',
      role: 'Senior Consultant',
      shortDescription: 'PhD in Economics with extensive audit and risk management experience at financial institutions in London and Madrid. Certified Information Systems Auditor and Project Administrator.',
      location: 'Bucharest',
      phone: '+40 759 674 094',
      email: 'aurel.totolici@model-tree.net',
      linkedin: '',
      background: [
        'With extensive experience in audit, risk management and project management at various financial institutions and consultancy firms in London and Madrid, Aurel is a project manager and risk expert with a proven track record of delivering projects on time and within budget.',
        'Aurel holds a doctorate in Economics, a master\'s in Business Communication and Information Security, and is certified as an Information Systems Auditor and Project Administrator.',
        'Aurel has strong communication skills, demonstrated through interactions with senior roles in organisations such as CEO, COO, CAO, CRO, heads of information security departments (CISO), and sales/trading departments.',
        'Aurel firmly believes in progress through knowledge sharing and actively engages in mentoring programmes and courses for students.',
      ],
      skills: [],
      experience: [],
    },
    {
      image: '/team_daniel_169.jpeg',
      name: 'Daniel Suciu',
      role: 'Senior Consultant',
      shortDescription: 'Banking and insurance consultant with an actuarial background, experienced at top-tier international financial institutions.',
      location: 'Bucharest',
      phone: '+40 764 211 666',
      email: 'daniel.suciu@model-tree.net',
      linkedin: 'https://www.linkedin.com/in/stefan-daniel-suciu-b72837111/',
      background: [
        'Modelling consultant with 9 years experience working in Bucharest in the financial industry, most of the time being an actuary.',
        'Daniel has a BSc in Finance and Banking, with a MSc in Actuarial Science from Bucharest Academy of Economic Studies and his experience is split between working as an actuary for insurance companies (Allianz Technology and NN Insurance Romania) and as a financial consultant for a Big4 consultancy at EY.',
        'Daniel also has several exams passed (5 exams) at the Institute and Faculty of Actuaries (IFoA). The institute is the only one from UK which is chartered in educating actuaries based in the UK and internationally.',
        'He has published one paper in The Actuary. The Actuary magazine is the monthly newspaper for IFoA (Institute and Faculty of Actuaries).',
      ],
      skills: [
        'Quantitative Modelling (Valuation, Risk, Stress Testing, Capital Modelling)',
        'Model Risk Management',
        'External Audit',
        'Solvency II reporting',
        'Programming skills (R and Python)',
        'Machine Learning',
      ],
      experience: [
        'Participated in the development of the backtesting methodology for a large UK insurance company. Developed the implementation solution in R, including statistical analysis reports (Kupiec tests, correlation estimation etc.), data visualization and formulation of the conclusions to be included in the final report to the board and regulator (Bank of England).',
        'Developed the R-implementation of an IRRBB solution for the Romanian branch of a large European Bank (data model, excel benchmark models, testing reports, code documentation, output visualization).',
        'Developed a model in R for operational risk for a Romanian bank using an advance modelling approach (AMA).',
        'Developed a regression model in R for several banks in Romania used to forecast the probability of default.',
        'Performed IAS 19 Employee Benefit provision calculation.',
        'Performed actuarial audit for 2 insurance companies, both life and non-life segments.',
        'Performed quarterly actuarial valuation reports and analysis (under Solvency II for Allianz Re Germany) after producing VNB (Value of New Business), TP (Technical Provisions) and MCEV (Market Consistent Embedded Value).',
        'Maintained and ran internal models for quarterly reporting; developed solutions to solve various data quality issues arising from the use of the models.',
        'Improved several processes by creating big data software tools (e.g., Quantitative Reporting Templates, increase the granularity levels, implement new reporting requirements as required at group level).',
        'Acted as point of contact for the external auditor; provided action plans and resolutions of the findings.',
      ],
    },
    {
      image: '/team_maria_169.JPG',
      name: 'Maria Mihailescu',
      role: 'Senior Consultant',
      shortDescription: 'Banking and insurance consultant with actuarial studies in the UK. Entrepreneur in bio agriculture in Romania.',
      location: 'Bucharest',
      phone: '+40 747 069 553',
      email: 'maria.mihailescu@model-tree.net',
      linkedin: '',
      background: [
        'Modelling consultant with 10 years experience in London in projects in insurance and banking, covering model development, model validation including the establishment of model controls, compliance with specific regulation, model calibration and periodic monitoring.',
        'Maria has a BSc in Actuarial Science from City University and has worked for investment banks (Morgan Stanley) as well as big4 consultancies (EY and PWC).',
      ],
      skills: [
        'Quantitative Modelling (Valuation, Risk, Stress Testing, Capital Modelling)',
        'Model Risk Management',
        'Solvency II modelling',
        'Capital markets',
      ],
      experience: [
        'Delivered independent model validation projects for credit risk for large UK insurance companies, as well as whole partial internal models.',
        'Delivered projects on the restructuring of equity release mortgages for annuity portfolios, including aspects related to valuation, structuring options, capital treatment and internal credit rating frameworks.',
        'Main role in the intermediation of alternative assets from banks to insurers, with a focus on loans and mortgages.',
        'Have contracted with several UK clients helping with re-calibrations of credit risk models and identification of effects on final capital calculations.',
        'Involvement in Strategic Asset Allocation projects, ranging from economic scenarios generation to modelling clients\' financial statements, constraints and targets, in order to optimize the asset mix.',
        'Central role in economic capital modelling and preparing pitch books on Solvency II efficient hedge solutions in the fixed income space for UK and European insurance companies (e.g.: credit index tranches).',
        'Main role in the development and modelling of Solvency II capital arbitrage solutions for real estate and infrastructure investments for European clients.',
      ],
    },
    {
      image: '/team_rares_169.PNG',
      name: 'Rares Stan',
      role: 'Consultant',
      shortDescription: 'PhD in Maths (Bucharest). Specialises in statistical, ML and AI modelling with a background in IT and banking consultancy.',
      location: 'Bucharest',
      phone: '+40 769 159 135',
      email: 'rares.stan@model-tree.net',
      linkedin: 'https://www.linkedin.com/in/dr-rares-anghel-stan-679340174/',
      background: [
        'Researcher in Mathematics with 4 years of experience as IT and banking consultant.',
        'Rares has a PhD in Mathematics and 3 papers published in top rated international journals.',
        'He won various medals at mathematical Olympiads, both national and international.',
        'He likes to learn and understand new concepts and then use those concepts to solve real world problems while continuing his interest in mathematics.',
      ],
      skills: [
        'Quantitative Modelling (Valuation, Risk)',
        'Hands on experience with IFRS9 modelling and reporting',
        'Credit Risk Modelling (PD, LGD, CCF, IFRS 9)',
        'Model Risk Management',
        'ML and AI',
        'Programming skills (Python, SAS, SQL, JavaScript, R)',
      ],
      experience: [
        'Performed the necessary data transformation and the ensuing rerun of IFRS 9 model for reporting of a Leasing company in Romania.',
        'Built an Excel tool for computing and reporting CCR and CVA for a Bulgarian bank. The tool was specialized in FX Swaps and is used for EBA reporting to the national regulator.',
        'Integrated several statistical tests in a server for evaluating results yielded by an AI model.',
        'Built several artificial intelligence models for measuring distances, volumes and detecting defects on wood boards from images.',
        'Built a pipeline which automatically updates a trading server with the latest financial data such as trades, spreads, fees and so on.',
        'Managed and improved several trading systems, adapting to the unpredictable nature of the trading environment.',
        'For a personal project, Rares co-managed a team of five members, playing a key role in the successful launch of a website on which medical school graduates in Romania can prepare for their final exams. The website attracted approximately 1000 users annually and processed over 100 successful payments.',
      ],
    },
    {
      image: '/team_alexandra_169.JPG',
      name: 'Alexandra Vultureanu',
      role: 'Consultant',
      shortDescription: 'PhD in Computer Science (Craiova), specialising in Machine Learning, AI, and Recommender Systems. Teaching assistant with research in knowledge graphs and reinforcement learning.',
      location: 'Craiova, Romania',
      phone: '+40 766 648 123',
      email: 'alexandra.vultureanu@edu.ucv.ro',
      linkedin: 'https://www.linkedin.com/in/alexandra-vultureanu-albisi',
      background: [
        'PhD in Computer Science from the Doctoral School Constantin Belea, Faculty of Automation, Computers and Electronics, University of Craiova. Thesis on Explainable Context-Aware Recommender Systems using Knowledge Graphs and Reinforcement Learning, graduated summa cum laude.',
        'Master\'s degree in Methods and Models of Artificial Intelligence (Computer Science, University of Craiova). Thesis on Data Analysis in Python.',
        'Bachelor\'s degree in Computer Science, Faculty of Sciences, University of Craiova.',
        'Teaching Assistant at the Faculty of Automation, Computers and Electronics and the Faculty of Sciences, University of Craiova, since 2019.',
        'Research areas include Machine Learning, Artificial Intelligence, Recommender Systems, Reinforcement Learning, Federated Learning, Data Mining, Deep Learning, and Human-Computer Interaction.',
      ],
      skills: [
        'Programming Languages: Python, C, Prolog, Matlab',
        'ML/AI Frameworks: TensorFlow, PyTorch, Scikit-learn, XGBoost/LightGBM',
        'Web Technologies: HTML, CSS, PHP, JavaScript, Bootstrap',
        'Database Systems: Microsoft SQL Server, Oracle',
        'Teaching: Computer Graphics, Information Retrieval, Applied Informatics, Artificial Intelligence, Algorithms Design, Web Technologies, Databases',
      ],
      experience: [
        'Teaching assistant for a wide range of undergraduate courses including Computer Graphics, Information Retrieval, Applied Informatics, Artificial Intelligence, Algorithms Design, Computer Programming, Web Technologies, and Databases.',
        'Reviewer for IEEE Conference on Artificial Intelligence (CAI) 2026, IEEE International Conference on Systems, Man, and Cybernetics (SMC) 2025, INISTA 2024-2025, and ICSTCC 2024-2025.',
        'Technical Program Committee member for INISTA 2024-present, AIBThings 2024-present, and ICCIDA 2022.',
        'Participated in multiple Erasmus+ Blended Intensive Programs on AI and underwater applications as teaching staff in Thessaloniki.',
        'Member of the Erasmus Project 2021-2023 "Bridging the Gap — An AI-enabled versatile skill matching tool to assist the less privileged" (Greece, Romania, Bulgaria).',
        'Data Analysis internship at Oltenia Regional Meteorological Center using IDL (Interactive Data Language).',
        'Recipient of QForIT doctoral scholarship and Entrepreneurial doctoral fellowship funded by the European Social Fund.',
      ],
    },
    {
      image: '/team_claudiu_169.JPG',
      name: 'Claudiu Mindrila',
      role: 'Consultant',
      shortDescription: 'PhD in Mathematics (Charles University, Prague). Postdoctoral researcher at BCAM Bilbao, specialising in PDEs and fluid dynamics. Gold medallist at SEEMOUS and National Mathematical Olympiad.',
      location: 'Bilbao, Spain',
      email: 'cmindrila@bcamath.org',
      linkedin: '',
      background: [
        'Postdoctoral researcher at the Basque Center for Applied Mathematics (BCAM) in Bilbao, with previous research positions at ISMMA Bucharest and Charles University Prague.',
        'PhD in Mathematics from Charles University, Prague (2024). MSc in Mathematics from the University of Bonn, Germany. BSc in Mathematics from the University of Bucharest.',
        'Gold Medal and Bronze Medal at SEEMOUS (2014, 2015). Honourable Mention and Gold Medal at the National Mathematical Olympiad (2012, 2013).',
        'Three peer-reviewed publications in journals including SIAM Journal on Mathematical Analysis and Nonlinearity, plus three preprints on ArXiv.',
      ],
      skills: [
        'Partial differential equations (existence, uniqueness, regularity of weak solutions)',
        'Fluid dynamics: fluid-structure interactions, (in)compressible (non-)Newtonian flows',
        'Harmonic analysis methods in analysis of PDEs',
        'Programming: Python (Numpy, Scipy), C++, Matlab',
      ],
      experience: [],
    },
  ]

  return (
    <div className="py-12 slide-in-right">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
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
