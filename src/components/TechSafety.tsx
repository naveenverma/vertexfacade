export default function TechSafety() {
  const specs = [
    { label: "Flight Time", value: "25 min", icon: "⏱️" },
    { label: "Payload Capacity", value: "15 kg", icon: "📦" },
    { label: "Coverage Rate", value: "50+ m²/min", icon: "📐" },
    { label: "Wind Resistance", value: "Up to 35 km/h", icon: "💨" },
  ];

  const safetyChecklist = [
    "DGCA registered aircraft with valid UIN",
    "Digital Sky flight authorization obtained",
    "Municipal & police notifications completed",
    "Safety exclusion zones established",
    "Trained spotters positioned on-site",
    "Emergency protocols in place",
    "Full liability insurance active",
    "Weather conditions verified",
  ];

  return (
    <section id="tech-safety" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Technology & Safety
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional-Grade Equipment & Compliance
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Our fleet uses industry-leading Sherpa-class drones with specialized 
            payloads for cleaning and painting operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              Drone Specifications
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="bg-slate-medium/30 border border-slate-light/10 rounded-xl p-4"
                >
                  <div className="text-2xl mb-2">{spec.icon}</div>
                  <div className="text-2xl font-bold text-white">{spec.value}</div>
                  <div className="text-sm text-gray-400">{spec.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-medium/30 border border-slate-light/10 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-4">Payload Systems</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Cleaning System</div>
                    <div className="text-sm text-gray-400">
                      Low/high pressure pump, rotating brush, eco-friendly solutions
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Paint Sprayer</div>
                    <div className="text-sm text-gray-400">
                      Controlled nozzle with swath control, non-flammable formulations
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Camera & Sensors</div>
                    <div className="text-sm text-gray-400">
                      4K FPV, thermal imaging, LiDAR for mapping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Safety & Compliance Checklist
            </h3>

            <div className="bg-slate-medium/30 border border-slate-light/10 rounded-xl p-6 mb-6">
              <div className="space-y-3">
                {safetyChecklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-accent/10 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    DGCA & Digital Sky Compliance
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">
                    All our aircraft are registered on Digital Sky with valid UIN. 
                    Our pilots meet DGCA training standards and hold recognized certifications.
                  </p>
                  <a
                    href="https://digitalsky.dgca.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
                  >
                    Learn about Digital Sky
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-slate-medium/30 border border-slate-light/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">🛡️</div>
                <div className="text-white font-medium">Fully Insured</div>
                <div className="text-xs text-gray-400">Commercial liability coverage</div>
              </div>
              <div className="bg-slate-medium/30 border border-slate-light/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">👨‍✈️</div>
                <div className="text-white font-medium">Certified Pilots</div>
                <div className="text-xs text-gray-400">DGCA recognized training</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
