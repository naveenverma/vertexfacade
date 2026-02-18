"use client";

import { useState, useCallback } from "react";

export default function CostEstimator() {
  const [floors, setFloors] = useState(10);
  const [area, setArea] = useState(500);
  const [serviceType, setServiceType] = useState<"cleaning" | "painting">("cleaning");

  const calculateEstimate = useCallback(() => {
    const baseRatePerSqm = serviceType === "cleaning" ? 50 : 150;
    const heightMultiplier = floors <= 6 ? 1 : floors <= 15 ? 1.3 : 1.6;
    const totalArea = area * floors * 0.3;
    
    const baseCost = totalArea * baseRatePerSqm * heightMultiplier;
    const minCost = Math.round(baseCost * 0.85);
    const maxCost = Math.round(baseCost * 1.15);
    
    const hoursPerFloor = serviceType === "cleaning" ? 0.5 : 1.5;
    const totalHours = Math.round(floors * hoursPerFloor);
    
    const crewSize = floors <= 6 ? 2 : floors <= 15 ? 3 : 4;
    
    const daysRequired = Math.ceil(totalHours / 6);

    return {
      minCost,
      maxCost,
      totalHours,
      crewSize,
      daysRequired,
      totalArea: Math.round(totalArea),
    };
  }, [floors, area, serviceType]);

  const estimate = calculateEstimate();

  const formatCurrency = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <section id="estimator" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Project Cost Estimator
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Get an instant estimate for your drone facade cleaning or painting project. 
            Adjust the parameters to see real-time pricing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-medium/50 border border-slate-light/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Service Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setServiceType("cleaning")}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                        serviceType === "cleaning"
                          ? "gradient-accent text-white"
                          : "bg-slate-light/20 text-gray-300 hover:bg-slate-light/30"
                      }`}
                    >
                      Cleaning
                    </button>
                    <button
                      onClick={() => setServiceType("painting")}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                        serviceType === "painting"
                          ? "gradient-accent text-white"
                          : "bg-slate-light/20 text-gray-300 hover:bg-slate-light/30"
                      }`}
                    >
                      Painting
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Number of Floors: <span className="text-accent">{floors}</span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="30"
                    value={floors}
                    onChange={(e) => setFloors(Number(e.target.value))}
                    className="w-full h-2 bg-slate-light/30 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3 floors</span>
                    <span>30 floors</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Floor Area (m²): <span className="text-accent">{area}</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-2 bg-slate-light/30 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>100 m²</span>
                    <span>2000 m²</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-dark/50 rounded-xl p-6 border border-slate-light/10">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Estimated Project Details
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-light/10">
                    <span className="text-gray-400">Facade Area</span>
                    <span className="text-white font-medium">
                      ~{estimate.totalArea.toLocaleString("en-IN")} m²
                    </span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-slate-light/10">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-medium">
                      {estimate.daysRequired} day{estimate.daysRequired > 1 ? "s" : ""} ({estimate.totalHours} hrs)
                    </span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-slate-light/10">
                    <span className="text-gray-400">Crew Size</span>
                    <span className="text-white font-medium">
                      {estimate.crewSize} members
                    </span>
                  </div>

                  <div className="pt-2">
                    <div className="text-gray-400 text-sm mb-2">Estimated Cost</div>
                    <div className="text-3xl font-bold text-gradient">
                      {formatCurrency(estimate.minCost)} – {formatCurrency(estimate.maxCost)}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-gray-300">
                      This is an estimate only. Final pricing depends on site survey, 
                      building condition, and specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white gradient-accent rounded-full hover:opacity-90 transition-opacity"
              >
                Get Accurate Quote
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
