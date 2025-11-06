import React, { useState, useEffect, useRef, useCallback } from 'react';
import anime from 'animejs';
import Section from '../Section';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../constants';
import type { BlogPost, NavItem } from '../../types';

const POSTS_PER_PAGE = 10;

const NewspaperIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
    </svg>
);

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const titleAnimatedRef = useRef(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const allFilteredPosts = activeCategory === 'Todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);
  
  const visiblePosts = allFilteredPosts.slice(0, currentPage * POSTS_PER_PAGE);

  const categories: readonly NavItem[] = [{ name: 'Todos', href: '#' }, ...BLOG_CATEGORIES];
  
  const handleCategoryClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const { category } = e.currentTarget.dataset;
    if (category) {
        setActiveCategory(category);
    }
  }, []);
  
  const handleLoadMore = useCallback(() => {
    setCurrentPage(prev => prev + 1);
  }, []);

  // Animate the section title and cards on view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const titleObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !titleAnimatedRef.current) {
            // FIX: Cast to 'any' to bypass incorrect type definitions for animejs.
            (anime as any)({
                targets: section.querySelectorAll('.blog-title > *'),
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 800,
                delay: anime.stagger(200),
                easing: 'easeOutExpo',
            });
            titleAnimatedRef.current = true;
            titleObserver.unobserve(section);
        }
    }, { threshold: 0.2 });

    titleObserver.observe(section);
    
    return () => { titleObserver.disconnect(); };
  }, []);


  // Animate blog cards when they become visible or when the list changes
  useEffect(() => {
    const cardsToAnimate = document.querySelectorAll('.blog-card-main:not(.animated)');
    
    if (cardsToAnimate.length === 0) return;

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // FIX: Cast to 'any' to bypass incorrect type definitions for animejs.
          (anime as any)({
            targets: entry.target,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutExpo',
          });
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cardsToAnimate.forEach(card => cardObserver.observe(card));

    return () => {
      cardObserver.disconnect();
    };
  }, [visiblePosts]);

  return (
    <Section ref={sectionRef} id="blog" className="bg-slate-950/50">
      <div className="text-center blog-title">
        <div className="flex justify-center items-center gap-x-3">
            <NewspaperIcon className="h-8 w-8 text-rose-400" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Desde Nuestro Blog</h2>
        </div>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Mantente al día con las últimas tendencias en tecnología, marketing y crecimiento empresarial.
        </p>
      </div>

      <div className="mt-8 flex justify-center items-center flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.name}
            data-category={category.name}
            onClick={handleCategoryClick}
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
        {visiblePosts.map((post: BlogPost) => (
          <div key={post.title} className="blog-card-main bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 flex flex-col transition-all duration-300 hover:scale-105 hover:border-cyan-400">
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

      {visiblePosts.length < allFilteredPosts.length && (
        <div className="mt-12 text-center">
          <button 
            onClick={handleLoadMore}
            className="inline-block px-8 py-3 text-base font-medium text-center text-cyan-300 bg-slate-800/50 border border-slate-700 rounded-md hover:bg-slate-800 transition-colors duration-300"
          >
            Cargar más
          </button>
        </div>
      )}
    </Section>
  );
};

export default BlogSection;