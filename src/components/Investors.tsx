import Link from "next/link";

export default function Investors() {
  const metrics = [
    { label: "Avg. Revenue per 12-floor Job", value: "₹1.5 – 3 Lakh" },
    { label: "Gross Margin", value: "45 – 55%" },
    { label: "Break-even Timeline", value: "12 – 18 months" },
    { label: "Target Fleet Size", value: "5 – 10 drones" },
  ];

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Growing Market",
      description: "Large residential & commercial building pipeline across NCR & Punjab with recurring maintenance contracts.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Unit Economics",
      description: "Lower labor & equipment costs with faster turnaround. Up to 80% savings vs traditional methods.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Competitive Moat",
      description: "Pilot network, local permissions/insurances, predictive maintenance data driving recurring contracts.",
    },
  ];

  return (
    <section id="investors" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              For Investors
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Investor Snapshot
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">The Problem</h3>
                <p className="text-gray-400">
                  Traditional facade work is slow, hazardous & capital-heavy. Building 
                  owners face expensive scaffolding, safety risks, and extended project timelines.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Our Solution</h3>
                <p className="text-gray-400">
                  Drone fleet + specialized payloads for cleaning & painting — lower labor 
                  & equipment costs, faster turnaround, zero safety incidents.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">The Ask</h3>
                <p className="text-gray-400">
                  Seed funding of <span className="text-accent font-semibold">₹2 – 5 Crore</span> for 
                  fleet expansion (5-10 drones), pilot training, insurance, and go-to-market 
                  operations across North India.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-slate-medium/50 border border-slate-light/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Key Metrics
              </h3>

              <div className="space-y-4 mb-8">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-slate-light/10 last:border-0"
                  >
                    <span className="text-gray-400">{metric.label}</span>
                    <span className="text-white font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Download Investor Deck</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Get our detailed pitch deck with market analysis, financial projections, 
                  and growth strategy.
                </p>
                <a
                  href="/investor-deck.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 gradient-accent text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Download PDF
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>

              <Link
                href="#contact"
                className="block w-full py-3 text-center font-semibold text-white border-2 border-accent rounded-full hover:bg-accent transition-all"
              >
                Schedule Investor Call
              </Link>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                A child company of{" "}
                <span className="text-gray-400 font-medium">Vertex Aerial Systems</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
