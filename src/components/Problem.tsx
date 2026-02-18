export default function Problem() {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Scaffolding Costs",
      description: "Expensive, slow, and intrusive. Traditional scaffolding can cost lakhs and takes weeks to install.",
      stat: "₹5-15 Lakh",
      statLabel: "Typical scaffolding cost",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Safety Hazards",
      description: "Manual rope access is risky and requires multiple permits. Worker safety is always a concern.",
      stat: "500+",
      statLabel: "Annual fall incidents in India",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Extended Downtime",
      description: "Business disruption and tenant complaints. Traditional methods can take weeks or months.",
      stat: "4-8 Weeks",
      statLabel: "Average project duration",
    },
  ];

  return (
    <section id="problem" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-red-500/10 text-red-400 text-sm font-medium rounded-full mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Traditional Facade Maintenance is{" "}
            <span className="text-red-400">Broken</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Building managers and facility owners face the same challenges every year — 
            expensive equipment, dangerous work conditions, and endless delays.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-slate-medium/50 border border-slate-light/20 rounded-2xl p-8 card-hover"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-400 mb-6">{problem.description}</p>
              <div className="pt-4 border-t border-slate-light/20">
                <div className="text-2xl font-bold text-red-400">{problem.stat}</div>
                <div className="text-sm text-gray-500">{problem.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
