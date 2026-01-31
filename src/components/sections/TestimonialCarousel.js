'use client';
import { useEffect, useRef } from 'react';
import { testimonials } from '@/lib/data/testimonials';
import TestimonialCard from '../ui/TestimonialCard';

export default function TestimonialCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one set
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Triple the testimonials for seamless infinite scroll
  const multipliedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="text-center mb-16 px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          What Clients
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Are Saying
          </span>
        </h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        <div className="flex gap-6">
          {multipliedTestimonials.map((testimonial, i) => (
            <TestimonialCard key={`${testimonial.id}-${i}`} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}