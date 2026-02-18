export default function Solution() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "4× Faster",
      description: "Complete projects in days, not weeks",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "80% Savings",
      description: "Eliminate scaffolding & lift rental costs",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Zero Risk",
      description: "No workers at height, fully insured operations",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "HD Reports",
      description: "Detailed inspection & before/after documentation",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Professional Drone Fleet for{" "}
              <span className="text-gradient">Facade Services</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our specialized drone fleet equipped with cleaning pumps, paint sprayers, 
              and high-resolution cameras delivers professional facade maintenance 
              without the traditional hassles. DGCA compliant drone services with 
              certified pilots and comprehensive insurance coverage.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-slate-medium/30 rounded-xl"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-slate-medium/50 rounded-full text-sm text-gray-300">
                Window Cleaning
              </span>
              <span className="px-3 py-1 bg-slate-medium/50 rounded-full text-sm text-gray-300">
                Facade Washing
              </span>
              <span className="px-3 py-1 bg-slate-medium/50 rounded-full text-sm text-gray-300">
                Exterior Painting
              </span>
              <span className="px-3 py-1 bg-slate-medium/50 rounded-full text-sm text-gray-300">
                Thermal Inspection
              </span>
              <span className="px-3 py-1 bg-slate-medium/50 rounded-full text-sm text-gray-300">
                Maintenance Plans
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-medium/30 rounded-3xl overflow-hidden border border-slate-light/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full p-8"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="droneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff6b35" />
                      <stop offset="100%" stopColor="#ff8c42" />
                    </linearGradient>
                  </defs>
                  
                  <rect x="50" y="100" width="300" height="200" rx="8" fill="#252a33" stroke="#3a4150" strokeWidth="2" />
                  <rect x="70" y="120" width="80" height="60" rx="4" fill="#3a4150" />
                  <rect x="160" y="120" width="80" height="60" rx="4" fill="#3a4150" />
                  <rect x="250" y="120" width="80" height="60" rx="4" fill="#3a4150" />
                  <rect x="70" y="200" width="80" height="60" rx="4" fill="#3a4150" />
                  <rect x="160" y="200" width="80" height="60" rx="4" fill="#3a4150" />
                  <rect x="250" y="200" width="80" height="60" rx="4" fill="#3a4150" />
                  
                  <g className="animate-float">
                    <ellipse cx="200" cy="80" rx="40" ry="15" fill="url(#droneGradient)" opacity="0.3" />
                    <rect x="180" y="50" width="40" height="20" rx="4" fill="url(#droneGradient)" />
                    <line x1="160" y1="60" x2="140" y2="50" stroke="url(#droneGradient)" strokeWidth="3" />
                    <line x1="240" y1="60" x2="260" y2="50" stroke="url(#droneGradient)" strokeWidth="3" />
                    <circle cx="140" cy="50" r="15" fill="none" stroke="url(#droneGradient)" strokeWidth="2" strokeDasharray="4 2" />
                    <circle cx="260" cy="50" r="15" fill="none" stroke="url(#droneGradient)" strokeWidth="2" strokeDasharray="4 2" />
                    <line x1="200" y1="70" x2="200" y2="120" stroke="#ff6b35" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="200" cy="130" r="8" fill="#ff6b35" opacity="0.5" />
                  </g>
                  
                  <text x="200" y="350" textAnchor="middle" fill="#9ca3af" fontSize="14" fontFamily="Inter, sans-serif">
                    Drone Facade Cleaning in Action
                  </text>
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-slate-medium border border-slate-light/20 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Live Monitoring</div>
                  <div className="text-sm text-gray-400">Real-time video feed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
