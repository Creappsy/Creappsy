import React, { useState, useEffect, useRef, useCallback } from 'react';
import anime from 'animejs';
import Section from '../components/Section';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../constants';
import type { BlogPost, NavItem } from '../types';

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredPosts = activeCategory === 'Todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const categories: readonly NavItem[] = [{ name: 'Todos', href: '#' }, ...BLOG_CATEGORIES];

  const handleCategoryClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const { category } = e.currentTarget.dataset;
    if (category) {
        setActiveCategory(category);
    }
  }, []);

  useEffect(() => {
    // FIX: Cast to 'any' to bypass incorrect type definitions for animejs.
    const tlHero = (anime as any).timeline({ easing: 'easeOutExpo' });
    tlHero.add({
        targets: "#blog-hero h1",
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800
    }).add({
        targets: "#blog-hero p",
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600
    }, "-=400");
  }, []);

  useEffect(() => {
    if (gridRef.current) {
        // FIX: Cast to 'any' to bypass incorrect type definitions for animejs.
        (anime as any)({
            targets: gridRef.current.children,
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 600,
            easing: 'easeOutExpo',
        });
    }
  }, [activeCategory]);


  return (
    <>
        <Section id="blog-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Nuestro Blog</h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                    Ideas, tendencias y conocimientos del mundo digital, directamente de nuestro equipo de expertos.
                </p>
            </div>
        </Section>

        <Section id="blog-posts">
            <div className="flex justify-center items-center flex-wrap gap-2 mb-12">
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

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </>
  );
};

export default BlogPage;