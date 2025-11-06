
import React, { useState } from 'react';
import Section from '../Section';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../constants';
import type { BlogPost, NavItem } from '../../types';

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredPosts = activeCategory === 'Todos'
    ? BLOG_POSTS.slice(0, 6) // Show latest 6 posts for "All"
    : BLOG_POSTS.filter(post => post.category === activeCategory).slice(0, 6);

  const categories: readonly NavItem[] = [{ name: 'Todos', href: '#' }, ...BLOG_CATEGORIES];

  return (
    <Section id="blog" className="bg-slate-950/50">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Desde Nuestro Blog</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Mantente al día con las últimas tendencias en tecnología, marketing y crecimiento empresarial.
        </p>
      </div>

      <div className="mt-8 flex justify-center items-center flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeCategory === category.name
                ? 'bg-cyan-500 text-slate-900'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post: BlogPost) => (
          <div key={post.title} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 flex flex-col">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm font-semibold text-cyan-400">{post.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-200 flex-grow">
                  {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{post.excerpt}</p>
              <div className="mt-4 pt-4 border-t border-slate-700 text-xs text-slate-500 flex justify-between items-center">
                <span>Por {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BlogSection;
