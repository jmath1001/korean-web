import { projects } from '@/lib/data/portfolio';
import PortfolioCard from '../ui/PortfolioCard';
import FadeInSection from '../ui/FadeInSection';

export default function PortfolioGrid() {
  return (
    <section 
      id="projects" 
      className="py-32 px-6 relative"
    >
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 -z-10 bg-[#0a0a0a] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-4xl mx-auto"> {/* Narrower max-width makes single column look better */}
        <FadeInSection>
          <div className="text-left mb-24 border-l-4 border-white pl-8">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
              Project
              <br />
              <span className="text-slate-600">Archive</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-xl">
              A selection of web platforms and interfaces I've built, focusing on clean code and functional design.
            </p>
          </div>
        </FadeInSection>

        {/* Single Column Grid */}
        <div className="grid grid-cols-1 gap-24"> 
          {projects.map((project, i) => (
            <FadeInSection key={project.id} delay={i * 50}>
              <div className="group">
                <PortfolioCard {...project} />
                {/* Optional: Add a custom project number for that gallery feel */}
                <div className="mt-4 text-xs font-mono text-slate-500 tracking-widest uppercase">
                  Project No. 0{i + 1}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}