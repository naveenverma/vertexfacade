import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-background to-slate-medium">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero-drone.webp"
            alt="Drone cleaning high-rise building facade in Chandigarh"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 opacity-10 animate-float">
        <svg viewBox="0 0 200 200" className="w-full h-full text-accent">
          <path
            fill="currentColor"
            d="M100 20L120 60H80L100 20ZM60 80L100 60L140 80L100 100L60 80ZM40 100L60 80V120L40 100ZM160 100L140 80V120L160 100ZM60 140L100 120L140 140L100 180L60 140Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-medium/80 rounded-full text-xs text-gray-300">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            DGCA Compliant
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-medium/80 rounded-full text-xs text-gray-300">
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Fully Insured
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-medium/80 rounded-full text-xs text-gray-300">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Certified Pilots
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Safe. Fast. Cost-Effective
          <br />
          <span className="text-gradient">High-Rise Cleaning & Painting</span>
          <br />
          — By Drone.
        </h1>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
          Cut scaffolding costs, remove risks, and complete jobs up to{" "}
          <span className="text-accent font-semibold">4× faster</span>. 
          Professional drone building cleaning and drone painting services for 
          high-rise facade cleaning in Chandigarh, Punjab, Haryana & Delhi NCR.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white gradient-accent rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-accent/30"
          >
            Get a Free Quote
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-slate-light rounded-full hover:border-accent hover:text-accent transition-all"
          >
            Request Pilot Demo
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">80%</div>
            <div className="text-sm text-gray-400">Cost Savings vs Lifts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">4×</div>
            <div className="text-sm text-gray-400">Faster Completion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">100+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">0</div>
            <div className="text-sm text-gray-400">Safety Incidents</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#problem" aria-label="Scroll to learn more">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
