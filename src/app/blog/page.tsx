"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Tag, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ProfessionalImagePlaceholder } from "@/components/elements/professional-image-placeholder";
import { newsService } from "@/services/news-service";

// Define types for our blog posts
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
    bio: string;
  };
  date: string;
  readTime: string;
  image?: string;
  tags: string[];
  isBreaking?: boolean;
  isPremium?: boolean;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("newest");

  // Load blog posts
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const articles = await newsService.getArticles();
        setPosts(articles);
        setFilteredPosts(articles);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Filter and sort posts
  useEffect(() => {
    let result = [...posts];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    // Apply sorting
    switch (sortOption) {
      case "newest":
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "popular":
        // For demo purposes, we'll sort by title length as a proxy for popularity
        result.sort((a, b) => b.title.length - a.title.length);
        break;
    }
    
    setFilteredPosts(result);
  }, [searchTerm, selectedCategory, sortOption, posts]);

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(posts.map(post => post.category)))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0F172A] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <p className="text-[#E2E8F0]">Loading premium content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0F172A]">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-transparent to-transparent"></div>
        <div className="container relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white hover:from-[#2563EB]/90 hover:to-[#8B5CF6]/90">
              PREMIUM BLOG
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Insights & <span className="bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">Analysis</span>
            </h1>
            <p className="text-xl text-[#E2E8F0] mb-10 max-w-2xl mx-auto">
              Curated perspectives from industry experts, thought leaders, and our editorial team. 
              Premium content for discerning readers.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748B] h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full bg-[#0F172A]/50 border border-[#64748B]/30 text-white placeholder:text-[#64748B] focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters and Categories */}
      <div className="container px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-[#2563EB] text-white hover:bg-[#2563EB]/90"
                    : "border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Sort Options */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10">
                <Filter className="h-4 w-4 mr-2" />
                Sort By: {sortOption === "newest" ? "Newest" : sortOption === "oldest" ? "Oldest" : "Popular"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#0F172A] border-[#64748B]/30">
              <DropdownMenuItem 
                onClick={() => setSortOption("newest")}
                className="text-[#E2E8F0] focus:bg-[#2563EB]/10"
              >
                Newest First
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setSortOption("oldest")}
                className="text-[#E2E8F0] focus:bg-[#2563EB]/10"
              >
                Oldest First
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setSortOption("popular")}
                className="text-[#E2E8F0] focus:bg-[#2563EB]/10"
              >
                Most Popular
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container px-4 pb-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-[#E2E8F0] mb-6">Try adjusting your search or filter criteria</p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={`/articles/${post.id}`} className="block h-full">
                  <div className="rounded-2xl overflow-hidden bg-[#0F172A]/50 backdrop-blur-lg border border-[#64748B]/30 hover:border-[#2563EB]/50 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative w-full h-48">
                      <ProfessionalImagePlaceholder 
                        title={post.title}
                        category={post.category}
                        variant={
                          post.category.includes("Market") || post.category.includes("Economics") || post.category.includes("Business") 
                            ? "market" 
                            : post.category.includes("Event") 
                              ? "event" 
                              : post.category.includes("Science") || post.category.includes("Technology")
                                ? "science"
                                : "default"
                        }
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {post.isBreaking && (
                          <Badge className="bg-[#F59E0B] text-[#0A0A0F] hover:bg-[#F59E0B]/90">
                            BREAKING
                          </Badge>
                        )}
                        {post.isPremium && (
                          <Badge className="bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90">
                            PREMIUM
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-3">
                        <Badge className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90">
                          {post.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 flex-grow">
                        {post.title}
                      </h3>
                      
                      <p className="text-[#E2E8F0] mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="bg-[#2563EB]/20 text-[#2563EB] hover:bg-[#2563EB]/30 text-xs"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Meta Info */}
                      <div className="mt-auto pt-4 border-t border-[#64748B]/30">
                        <div className="flex items-center justify-between text-sm text-[#E2E8F0]">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            <span>{post.author.name}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center mt-2 text-sm text-[#E2E8F0]">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="container px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A0A0F] to-[#1A1A2E] p-8 md:p-12 border border-[#2563EB]/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-transparent to-transparent"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay Ahead with Premium Insights</h2>
            <p className="text-lg md:text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
              Join our community of informed readers. Get curated analysis and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex h-12 w-full rounded-full border border-[#64748B]/30 bg-[#0F172A] px-6 py-3 text-lg text-white placeholder:text-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-3 text-lg rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}