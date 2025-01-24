import React from 'react';
import NavigationBar2 from "../components/NavigationBar2";
import BlogHero from '../components/BlogHero';
import BlogSection from '../components/BlogSection';
import RelatedArticles from '../components/RelatedArticles';
import DownloadAppSection from '../components/DownloadAppSection';
import Footer from '../components/Footer';

const BlogHeader = () => {
  return (
    <div className="overflow-hidden">

    <header className="h-[30rem] bg-[#030637]">
      <NavigationBar2 />
      <BlogHero />
    </header>
    <BlogSection />
    <RelatedArticles />
    <DownloadAppSection />
    <Footer />
    </div>
    
  );
};

export default BlogHeader;
