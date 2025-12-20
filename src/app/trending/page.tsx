"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, TrendingUp, Eye, Heart, MessageCircle, Filter } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";
import { ProfessionalImagePlaceholder } from "@/components/elements/professional-image-placeholder";
import Link from "next/link";

export default function TrendingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [timeRange, setTimeRange] = useState("today");

  // Professional trending articles targeted at high CPM countries (USA, UK, Germany)
  const articles = [
    {
      id: "us-tech-sector-adds-50000-jobs-in-november-record-low-unemployment",
      title: "US Tech Sector Adds 50,000 Jobs in November, Record Low Unemployment",
      excerpt: "Technology companies drive employment growth as unemployment hits historic lows in key metropolitan areas.",
      category: "Business",
      author: "Sarah Mitchell, Washington Bureau Chief",
      date: "Dec 18, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: true,
      views: "24.5K",
      likes: 1842,
      comments: 127,
      trendScore: 98
    },
    {
      id: "california-approves-largest-renewable-energy-project-in-state-history",
      title: "California Approves Largest Renewable Energy Project in State History",
      excerpt: "Governor signs off on $12 billion solar and wind initiative that will power 2 million homes by 2030.",
      category: "Environment",
      author: "Michael Torres, San Francisco Energy Correspondent",
      date: "Dec 18, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: true,
      views: "19.7K",
      likes: 1653,
      comments: 98,
      trendScore: 96
    },
    {
      id: "federal-reserve-holds-interest-rates-steady-amid-inflation-concerns",
      title: "Federal Reserve Holds Interest Rates Steady Amid Inflation Concerns",
      excerpt: "Central bank maintains current rate levels as consumer price indicators show signs of stabilization.",
      category: "Politics",
      author: "Robert Chen, Financial Policy Reporter",
      date: "Dec 18, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: false,
      views: "32.1K",
      likes: 2105,
      comments: 156,
      trendScore: 94
    },
    {
      id: "new-york-city-implements-congestion-pricing-plan-effective-january",
      title: "New York City Implements Congestion Pricing Plan Effective January",
      excerpt: "Manhattan drivers will pay fees ranging from $9-$23 during peak hours to reduce traffic congestion.",
      category: "Politics",
      author: "Jennifer Walsh, New York Bureau",
      date: "Dec 18, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: true,
      views: "28.3K",
      likes: 1421,
      comments: 243,
      trendScore: 92
    },
    {
      id: "tesla-announces-breakthrough-in-solid-state-battery-technology",
      title: "Tesla Announces Breakthrough in Solid-State Battery Technology",
      excerpt: "Electric vehicle maker claims new battery design will triple range and cut charging time to 10 minutes.",
      category: "Technology",
      author: "Dr. Amanda Foster, Tech Innovation Correspondent",
      date: "Dec 18, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: true,
      views: "42.7K",
      likes: 3201,
      comments: 187,
      trendScore: 99
    },
    {
      id: "florida-passes-groundbreaking-legislation-on-ai-regulation",
      title: "Florida Passes Groundbreaking Legislation on AI Regulation",
      excerpt: "New law requires transparency disclosures for AI-generated content and establishes ethical guidelines for government use.",
      category: "Politics",
      author: "Robert Williams, Tallahassee Bureau",
      date: "Dec 18, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: false,
      views: "15.8K",
      likes: 987,
      comments: 142,
      trendScore: 88
    },
    {
      id: "amazon-expands-healthcare-services-to-ten-additional-states",
      title: "Amazon Expands Healthcare Services to Ten Additional States",
      excerpt: "Online retail giant's healthcare division now serves 25 states, offering primary care and prescription delivery.",
      category: "Health",
      author: "Dr. Sarah Kim, Healthcare Economics Reporter",
      date: "Dec 18, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: true,
      views: "18.9K",
      likes: 1256,
      comments: 89,
      trendScore: 91
    },
    {
      id: "chicago-records-highest-holiday-shopping-sales-in-five-years",
      title: "Chicago Records Highest Holiday Shopping Sales in Five Years",
      excerpt: "Retailers report 15% increase in downtown sales compared to pre-pandemic levels during Black Friday weekend.",
      category: "Business",
      author: "Emma Richardson, Chicago Business Correspondent",
      date: "Dec 18, 2025",
      readTime: "4 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: false,
      views: "12.4K",
      likes: 843,
      comments: 67,
      trendScore: 85
    },
    {
      id: "boston-emerges-as-leading-hub-for-biotech-startups-nationwide",
      title: "Boston Emerges as Leading Hub for Biotech Startups Nationwide",
      excerpt: "Cambridge biotech cluster attracts $2.3 billion in venture capital investment, creating 3,000 new jobs.",
      category: "Business",
      author: "Dr. Michael Chen, Boston Innovation Bureau",
      date: "Dec 18, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: true,
      views: "16.7K",
      likes: 1102,
      comments: 78,
      trendScore: 89
    },
    {
      id: "atlanta-selected-as-host-city-for-2028-international-climate-summit",
      title: "Atlanta Selected as Host City for 2028 International Climate Summit",
      excerpt: "City chosen for commitment to renewable energy and sustainable urban development initiatives.",
      category: "Environment",
      author: "Patricia Williams, Atlanta Environmental Desk",
      date: "Dec 18, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: false,
      views: "21.3K",
      likes: 1567,
      comments: 134,
      trendScore: 93
    }
  ];

  const categories = ["All", "International", "Science", "Trade", "Events", "Environment", "Regulations", "Economy"];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="container py-12">
      {/* Hero Section with Premium Design */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#F59E0B] text-[#0A0A0F] hover:bg-[#F59E0B]/90 text-lg py-2 px-6">
          TRENDING NOW
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">
          What's Hot in News
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Discover the most talked-about stories from around the globe. Our trending algorithm surfaces 
          the most engaging content based on reader interactions and social buzz.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-12">
        <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#F59E0B]/10 ${
                    timeRange === "today" ? "bg-[#F59E0B]/20 border-[#F59E0B]" : ""
                  }`}
                  onClick={() => setTimeRange("today")}
                >
                  Today
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#F59E0B]/10 ${
                    timeRange === "week" ? "bg-[#F59E0B]/20 border-[#F59E0B]" : ""
                  }`}
                  onClick={() => setTimeRange("week")}
                >
                  This Week
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#F59E0B]/10 ${
                    timeRange === "month" ? "bg-[#F59E0B]/20 border-[#F59E0B]" : ""
                  }`}
                  onClick={() => setTimeRange("month")}
                >
                  This Month
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className={`border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#2563EB]/10 ${
                      selectedCategory === category ? "bg-[#2563EB]/20 border-[#2563EB]" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trending Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {filteredArticles.map((article, index) => (
          <Link key={article.id} href={`/articles/${article.id}`} className="block">
            <AnimatedCard 
              className="overflow-hidden rounded-2xl border border-[#64748B]/30 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <div className="w-full h-64">
                  <ProfessionalImagePlaceholder 
                    title={article.title}
                    category={article.category}
                    variant={
                      article.category.includes("Market") || article.category.includes("Economics") || article.category.includes("Business") 
                        ? "market" 
                        : article.category.includes("Event") 
                          ? "event" 
                          : article.category.includes("Science") || article.category.includes("Technology")
                            ? "science"
                            : "default"
                    }
                  />
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {article.isBreaking && (
                    <Badge className="bg-[#F59E0B] text-[#0A0A0F] hover:bg-[#F59E0B]/90">
                      BREAKING
                    </Badge>
                  )}
                  {article.isPremium && (
                    <Badge className="bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90">
                      PREMIUM
                    </Badge>
                  )}
                  <div className="flex items-center bg-black/50 rounded-full px-2 py-1">
                    <TrendingUp className="h-4 w-4 text-[#F59E0B] mr-1" />
                    <span className="text-white text-sm font-medium">#{index + 1}</span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <Badge className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-[#E2E8F0] flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-2xl mb-3 text-white">{article.title}</CardTitle>
                <CardDescription className="text-[#E2E8F0]">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-[#E2E8F0] mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#64748B]/30">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[#E2E8F0]">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">{article.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#E2E8F0]">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{article.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#E2E8F0]">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{article.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-[#F59E0B]" />
                    <span className="text-sm font-medium text-[#F59E0B]">{article.trendScore}/100</span>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </Link>
        ))}
      </div>

      {/* Trending Topics */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Trending Topics</h2>
        <div className="flex flex-wrap gap-4">
          {["Sustainability", "Trade Policies", "Food Technology", "Renewable Energy", "Economic Growth", "Artisan Products", "Climate Change", "Global Markets"].map((topic, index) => (
            <Badge 
              key={index} 
              className="text-lg py-3 px-6 bg-gradient-to-r from-[#F59E0B]/20 to-[#D97706]/20 text-white border border-[#F59E0B]/30 hover:from-[#F59E0B]/30 hover:to-[#D97706]/30 transition-all duration-300 cursor-pointer"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      {/* Premium Subscription CTA */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0A0A0F] to-[#1A1A2E] p-12 border border-[#F59E0B]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F59E0B]/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <Badge className="mb-6 bg-[#F59E0B] text-[#0A0A0F] text-lg py-2 px-4">STAY AHEAD OF THE CURVE</Badge>
          <h2 className="text-4xl font-bold mb-6 text-white">Never Miss a Trending Story</h2>
          <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
            Subscribe to LuminaPress Premium for exclusive access to our trending algorithm and early alerts on breaking stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#0A0A0F] px-8 py-4 text-lg rounded-full">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10 px-8 py-4 text-lg rounded-full">
              View Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}