import Link from "next/link";

export default function Services() {
  const packages = [
    {
      name: "Starter",
      tagline: "Drone Clean",
      description: "Perfect for single cleaning jobs on smaller buildings",
      price: "₹25,000 – ₹70,000",
      priceNote: "per job",
      features: [
        "Exterior window cleaning up to 6 floors",
        "Facade spot cleaning",
        "1 pilot + 1 technician",
        "Pre-flight survey included",
        "Before/after photo documentation",
        "1-2 day turnaround",
      ],
      highlighted: false,
      cta: "Get Started",
    },
    {
      name: "Pro",
      tagline: "Maintenance Plan",
      description: "Recurring maintenance for medium-rise buildings",
      price: "₹70,000 – ₹2,50,000",
      priceNote: "per quarter",
      features: [
        "Quarterly cleaning for 7-15 floor buildings",
        "Priority booking & scheduling",
        "Automated inspection reports",
        "Minor paint touch-ups included",
        "2 pilots + spare batteries",
        "On-call engineer support",
        "Dedicated account manager",
      ],
      highlighted: true,
      cta: "Most Popular",
    },
    {
      name: "Enterprise",
      tagline: "Full Facade Repaint",
      description: "Complete restoration for large commercial buildings",
      price: "₹5 Lakh – ₹50 Lakh+",
      priceNote: "project-based",
      features: [
        "Full-surface preparatory cleaning",
        "Paint specification & color matching",
        "Multi-coat paint application",
        "Ground finishing for edges",
        "Scaffold-free operation",
        "Long-term warranty included",
        "Project timeline: weeks",
        "Custom crew size",
      ],
      highlighted: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Service Packages
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Flexible options for every building size and budget. All packages include 
            DGCA compliance, insurance coverage, and professional documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 card-hover ${
                pkg.highlighted
                  ? "bg-gradient-to-b from-accent/20 to-slate-medium border-2 border-accent"
                  : "bg-slate-medium/50 border border-slate-light/20"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="text-sm text-accent font-medium mb-1">
                  {pkg.tagline}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-white">{pkg.price}</div>
                <div className="text-sm text-gray-400">{pkg.priceNote}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.highlighted ? "text-accent" : "text-green-400"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block w-full py-3 text-center font-semibold rounded-full transition-all ${
                  pkg.highlighted
                    ? "gradient-accent text-white hover:opacity-90"
                    : "bg-slate-light/30 text-white hover:bg-slate-light/50"
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Prices are starting estimates. Final quotes based on site survey, building 
            height, surface area, and complexity.{" "}
            <span className="text-accent">Up to 80% savings</span> compared to traditional 
            scaffolding methods.
          </p>
        </div>
      </div>
    </section>
  );
}
