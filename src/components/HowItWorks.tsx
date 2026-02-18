export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Plan & Survey",
      description: "Remote LiDAR / photogrammetry scan → building asset map, material & paint spec → risk assessment & work plan.",
      details: "48–72 hours initial survey",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-400",
    },
    {
      number: "02",
      title: "Permits & Safety",
      description: "Digital Sky flight authorizations, municipal/no-fly checks, police & HOA notifications, safety exclusion zones setup.",
      details: "DGCA / Digital Sky compliant",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-400",
    },
    {
      number: "03",
      title: "Drone Operation",
      description: "Autonomous flight path + manual pilot oversight. Cleaning pump or paint sprayer payloads with live QA video feed.",
      details: "FPV & telemetry monitoring",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      color: "from-accent to-orange-400",
    },
    {
      number: "04",
      title: "QA & Handover",
      description: "Automated inspection & hi-res photo report, QA sign-off, maintenance schedule & warranty registry.",
      details: "Complete documentation",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: "from-purple-500 to-pink-400",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            A streamlined 4-step process from initial survey to project handover. 
            Full transparency and documentation at every stage.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-light/20 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-medium/50 border border-slate-light/20 rounded-2xl p-6 card-hover h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-slate-light/30">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{step.details}</span>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-6 bg-slate-dark rounded-full border-2 border-accent items-center justify-center -translate-y-1/2 z-10">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-accent/10 via-slate-medium/50 to-accent/10 rounded-2xl p-8 border border-accent/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">2-3</div>
              <div className="text-gray-400">Crew Members Per Job</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">50+ m²/min</div>
              <div className="text-gray-400">Coverage Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">25 min</div>
              <div className="text-gray-400">Flight Time Per Battery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
