'use client';

import { useState } from 'react';

import { Section } from '../layout/Section';

type ITestimonial = {
  name: string;
  location: string;
  text: string;
  company?: string;
};

const testimonials: ITestimonial[] = [
  {
    name: 'Meryl Strassler',
    location: 'Morganville, NJ',
    text: 'I have used M.G. Construction Co. two times in the past 15 years and have virtually customized my house, top to bottom. I am a tremendous fan of their entire operation from planning stages through completion. I was pleased to see many familiar faces 14 years after my original addition, which speaks volumes for the quality control which is so much a part of their work. Their workmen are superior and enormously easy to have around the house. They are not invasive whatsoever but very pleasant when I had questions and/or any concerns. My house was cleaned nightly before the workmen finished for the day which offered clean work areas and peace of mind. I would recommend them for any project, small or large. They work quickly, efficiently, and stand behind their work 100 percent.',
  },
  {
    name: 'John Smith',
    location: 'Old Bridge, NJ',
    text: 'M.G. Construction Co. delivered exceptional concrete work for our commercial development project. Their attention to detail and professionalism throughout the entire process was outstanding. The foundation work was completed on time and exceeded our expectations. Highly recommended!',
    company: 'Commercial Developer',
  },
  {
    name: 'Sarah Johnson',
    location: 'Middlesex County, NJ',
    text: "We hired M.G. Construction Co. for a major foundation project and couldn't be happier with the results. The team was professional, knowledgeable, and kept us informed every step of the way. The quality of their work is second to none, and they truly stand behind what they do.",
  },
];

type ITestimonialsSectionProps = {
  title?: string;
};

const TestimonialsSection = (props: ITestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  if (!currentTestimonial) {
    return null;
  }

  return (
    <div className="bg-gray-50">
      <Section
        title={props.title || 'Client Testimonials'}
        yPadding="py-12 sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="rounded-lg bg-white shadow-lg">
              <div className="border-l-4 border-primary-500 p-6 sm:p-8 md:p-10">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  {/* Logo placeholder or company name */}
                  {currentTestimonial.company && (
                    <div className="shrink-0">
                      <div className="flex size-16 items-center justify-center rounded bg-primary-100 text-xl font-bold text-primary-600">
                        {currentTestimonial.company.charAt(0)}
                      </div>
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                          {currentTestimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 sm:text-base">
                          {currentTestimonial.location}
                          {currentTestimonial.company && (
                            <> • {currentTestimonial.company}</>
                          )}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      &ldquo;{currentTestimonial.text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 rounded bg-gray-200 p-3 text-gray-700 transition-colors hover:bg-gray-300 sm:-translate-x-12"
              aria-label="Previous testimonial"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full rounded bg-gray-200 p-3 text-gray-700 transition-colors hover:bg-gray-300 sm:translate-x-12"
              aria-label="Next testimonial"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`size-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export { TestimonialsSection };
