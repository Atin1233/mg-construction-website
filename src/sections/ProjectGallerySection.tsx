'use client';

import { useState } from 'react';

import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

type ProjectCategory = 'all' | 'commercial' | 'foundations' | 'municipal';

const projectCategories: { id: ProjectCategory; name: string }[] = [
  { id: 'all', name: 'All Projects' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'foundations', name: 'Foundations' },
  { id: 'municipal', name: 'Municipal' },
];

const projects = [
  {
    id: 1,
    title: 'Commercial Development Foundation',
    category: 'foundations' as ProjectCategory,
    description: 'Large-scale foundation work for commercial development',
    image: '/assets/images/project-1.jpg',
  },
  {
    id: 2,
    title: 'Municipal Sidewalk Installation',
    category: 'municipal' as ProjectCategory,
    description: 'Concrete sidewalk and curb installation for city project',
    image: '/assets/images/project-2.jpg',
  },
  {
    id: 3,
    title: 'Retail Center Concrete Work',
    category: 'commercial' as ProjectCategory,
    description: 'Complete concrete work for new retail center',
    image: '/assets/images/project-3.jpg',
  },
  {
    id: 4,
    title: 'Office Building Foundation',
    category: 'foundations' as ProjectCategory,
    description: 'Block foundation installation for multi-story office',
    image: '/assets/images/project-4.jpg',
  },
  {
    id: 5,
    title: 'Municipal Infrastructure Project',
    category: 'municipal' as ProjectCategory,
    description: 'Public infrastructure concrete work',
    image: '/assets/images/project-5.jpg',
  },
  {
    id: 6,
    title: 'Shopping Center Paving',
    category: 'commercial' as ProjectCategory,
    description: 'Large-scale concrete paving for shopping center',
    image: '/assets/images/project-6.jpg',
  },
];

const ProjectGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Section title="Our Recent Projects" yPadding="py-16">
      <div className="mx-auto max-w-7xl">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-3 font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-gray-200 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              {/* Image placeholder with gradient overlay */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600">
                {/* Placeholder pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                  }}
                ></div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

                {/* Project info */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 text-white transition-transform group-hover:translate-y-0">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>

                {/* Category badge */}
                <div className="absolute right-4 top-4 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                  {project.category.charAt(0).toUpperCase() +
                    project.category.slice(1)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Interested in seeing more of our work?
          </p>
          <a
            href={`tel:${AppConfig.company.phone.replace(/[^0-9]/g, '')}`}
            className="inline-block rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-primary-700 hover:shadow-xl"
          >
            Contact Us for More Examples
          </a>
        </div>
      </div>
    </Section>
  );
};

export { ProjectGallerySection };
