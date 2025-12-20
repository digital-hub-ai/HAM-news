"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Play, Bookmark, Volume2 } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";
import { ProfessionalImagePlaceholder } from "@/components/elements/professional-image-placeholder";
import { NeuralNetworkVisualization } from "@/components/sections/neural-network-visualization";
import { TimeCrystalTimeline } from "@/components/sections/time-crystal-timeline";
import { HolographicNewsMatrix } from "@/components/sections/holographic-news-matrix";
import { SentimentWeatherMap } from "@/components/sections/sentiment-weather-map";
import { BioLuminescentEcosystem } from "@/components/sections/bio-luminescent-ecosystem";
import { EmotionalWeatherSystem } from "@/components/sections/emotional-weather-system";
import { SymphonyOfTruth } from "@/components/sections/symphony-of-truth";
import { NewsAlchemy } from "@/components/sections/news-alchemy";
import Link from "next/link";

export default function Home() {
  // Professional featured articles targeted at high CPM countries (USA, UK, Germany)
  const featuredArticles = [
    {
      id: "federal-reserve-announces-emergency-rate-cut-amid-market-volatility",
      title: "Federal Reserve Announces Emergency Rate Cut Amid Market Volatility",
      excerpt: "Central bank slashes interest rates by 0.5% in surprise move to stabilize financial markets and boost economic growth.",
      category: "Business",
      author: "Robert Chen, Financial Policy Reporter",
      date: "Dec 19, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: true,
    },
    {
      id: "major-airlines-cancel-flights-due-to-severe-winter-storm",
      title: "Major Airlines Cancel Thousands of Flights Due to Severe Winter Storm",
      excerpt: "Over 5,000 flights grounded across North America as unprecedented winter weather disrupts holiday travel plans.",
      category: "National",
      author: "Jennifer Walsh, National Correspondent",
      date: "Dec 19, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: true,
    },
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
    },
  ];

  // Trending topics for high CPM countries
  const trendingTopics = [
    "Carbon-Neutral Production",
    "Artisanal European Imports",
    "Premium US Market Trends",
    "Organic Food Certification",
    "Premium Food vs Artisanal",
  ];

  // Professional secondary heroes targeted at high CPM countries
  const secondaryHeroes = [
    {
      id: 1,
      title: "Live: Premium Market Analysis",
      excerpt: "Real-time updates on premium food prices in USA, UK, and Germany",
      image: "/placeholder.svg?height=150&width=300",
      isLive: true,
    },
    {
      id: 2,
      title: "EU Approves New Food Labeling Standards",
      excerpt: "Strict authenticity requirements for premium food products",
      image: "/placeholder.svg?height=150&width=300",
      isLive: false,
    }
  ];

  // Trending news for today
  const trendingNews = [
    {
      id: "federal-reserve-announces-emergency-rate-cut-amid-market-volatility",
      title: "Federal Reserve Announces Emergency Rate Cut Amid Market Volatility",
      category: "Business",
      date: "Dec 19, 2025",
      isBreaking: true,
      isPremium: true,
    },
    {
      id: "major-airlines-cancel-flights-due-to-severe-winter-storm",
      title: "Major Airlines Cancel Thousands of Flights Due to Severe Winter Storm",
      category: "National",
      date: "Dec 19, 2025",
      isBreaking: true,
      isPremium: true,
    },
    {
      id: "us-tech-sector-adds-50000-jobs-in-november-record-low-unemployment",
      title: "US Tech Sector Adds 50,000 Jobs in November, Record Low Unemployment",
      category: "Business",
      date: "Dec 18, 2025",
      isBreaking: true,
      isPremium: false,
    },
    {
      id: "california-approves-largest-renewable-energy-project-in-state-history",
      title: "California Approves Largest Renewable Energy Project in State History",
      category: "Environment",
      date: "Dec 18, 2025",
      isBreaking: true,
      isPremium: true,
    },
    {
      id: "federal-reserve-holds-interest-rates-steady-amid-inflation-concerns",
      title: "Federal Reserve Holds Interest Rates Steady Amid Inflation Concerns",
      category: "Politics",
      date: "Dec 18, 2025",
      isBreaking: false,
      isPremium: false,
    },
    {
      id: "new-york-city-implements-congestion-pricing-plan-effective-january",
      title: "New York City Implements Congestion Pricing Plan Effective January",
      category: "Politics",
      date: "Dec 18, 2025",
      isBreaking: false,
      isPremium: true,
    },
    {
      id: "tesla-announces-breakthrough-in-solid-state-battery-technology",
      title: "Tesla Announces Breakthrough in Solid-State Battery Technology",
      category: "Technology",
      date: "Dec 18, 2025",
      isBreaking: true,
      isPremium: true,
    },
    {
      id: "florida-passes-groundbreaking-legislation-on-ai-regulation",
      title: "Florida Passes Groundbreaking Legislation on AI Regulation",
      category: "Politics",
      date: "Dec 18, 2025",
      isBreaking: false,
      isPremium: false,
    },
    {
      id: "amazon-expands-healthcare-services-to-ten-additional-states",
      title: "Amazon Expands Healthcare Services to Ten Additional States",
      category: "Health",
      date: "Dec 18, 2025",
      isBreaking: false,
      isPremium: true,
    },
    {
      id: "chicago-records-highest-holiday-shopping-sales-in-five-years",
      title: "Chicago Records Highest Holiday Shopping Sales in Five Years",
      category: "Business",
      date: "Dec 18, 2025",
      isBreaking: false,
      isPremium: false,
    }
  ];

  return (
    <div className="container py-8">
      {/* HERO ZONE - "The Event Horizon" */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Hero (60% width) */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] p-8 md:p-12 border border-[#2563EB]/30 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
              {/* Breaking News Badge */}
              <Badge className="mb-4 bg-[#F59E0B] text-[#0A0A0F] hover:bg-[#F59E0B]/90">BREAKING NEWS</Badge>
              
              {/* Main Hero Content */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                World's Largest <span className="bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">Premium News</span>
              </h1>
              
              <p className="text-xl text-[#E2E8F0] max-w-2xl mb-8 leading-relaxed">
                Premium international news coverage. Expert analysis from bureaus in Washington, London, and Berlin for discerning readers in high-value markets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-3 text-lg">
                  Subscribe Now
                </Button>
                <Button size="lg" variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 px-8 py-3 text-lg">
                  View Latest Articles
                </Button>
              </div>
              
              {/* Floating Action Buttons */}
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full bg-[#1A1A2E] hover:bg-[#2563EB] text-white w-12 h-12">
                  <Play className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-[#1A1A2E] hover:bg-[#EC4899] text-white w-12 h-12">
                  <Volume2 className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-[#1A1A2E] hover:bg-[#10B981] text-white w-12 h-12">
                  <Bookmark className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Secondary Heroes (40% width) */}
          <div className="space-y-6">
            {secondaryHeroes.map((hero) => (
              <div key={hero.id} className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1A2E] to-[#0F172A] p-6 border border-[#64748B]/30 hover:border-[#2563EB]/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  {hero.isLive && (
                    <Badge className="bg-[#F59E0B] text-[#0A0A0F] hover:bg-[#F59E0B]/90">
                      LIVE NOW
                    </Badge>
                  )}
                  <div className="text-right">
                    <Button variant="ghost" size="icon" className="rounded-full bg-[#0F172A] hover:bg-[#EC4899] text-white w-8 h-8 ml-auto">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{hero.title}</h3>
                    <p className="text-[#E2E8F0] text-sm mb-4">{hero.excerpt}</p>
                    <Button variant="ghost" className="p-0 text-[#2563EB] hover:text-[#2563EB]/80 h-auto font-medium">
                      Read More →
                    </Button>
                  </div>
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-[#0F172A] border border-[#64748B]/30">
                    <ProfessionalImagePlaceholder 
                      title={hero.title}
                      category="News"
                      variant="default"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Market Ticker */}
            <div className="rounded-2xl bg-gradient-to-br from-[#1A1A2E] to-[#0F172A] p-6 border border-[#64748B]/30">
              <h3 className="text-lg font-bold text-white mb-4">Premium Markets</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#E2E8F0]">US Premium Food (+)</span>
                  <span className="text-[#10B981] font-medium">↑ 3.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#E2E8F0]">EU Artisanal Index</span>
                  <span className="text-[#10B981] font-medium">↑ 2.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#E2E8F0]">Premium Demand</span>
                  <span className="text-[#F59E0B] font-medium">Strong</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending News Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Trending Today</h2>
          <Button variant="ghost" className="text-[#2563EB] hover:text-[#2563EB]/80">
            View All Trending →
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {trendingNews.map((article) => (
            <Link key={article.id} href={`/articles/${article.id}`} className="block">
              <AnimatedCard className="overflow-hidden rounded-2xl border border-[#64748B]/30 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 cursor-pointer h-full">
                <div className="relative">
                  <div className="w-full h-32">
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
                  <div className="absolute top-2 left-2 flex gap-1">
                    {article.isBreaking && (
                      <Badge className="bg-[#F59E0B] text-[#0A0A0F] hover:bg-[#F59E0B]/90 text-xs">
                        BREAKING
                      </Badge>
                    )}
                    {article.isPremium && (
                      <Badge className="bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-xs">
                        PREMIUM
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-3">{article.title}</h3>
                  <div className="flex items-center text-xs text-[#E2E8F0] mt-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{article.date}</span>
                  </div>
                </CardContent>
              </AnimatedCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles with Glass Morphism */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.id}`} className="block">
              <AnimatedCard className="overflow-hidden rounded-2xl border border-[#64748B]/30 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <div className="w-full h-48">
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
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90">{article.category}</Badge>
                    <span className="text-sm text-[#E2E8F0] flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">{article.title}</CardTitle>
                  <CardDescription className="text-[#E2E8F0]">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-[#E2E8F0]">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Topics with Holographic Effect */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Trending Topics</h2>
        <div className="flex flex-wrap gap-4">
          {trendingTopics.map((topic, index) => (
            <Badge 
              key={index} 
              className="text-lg py-3 px-6 bg-gradient-to-r from-[#2563EB]/20 to-[#8B5CF6]/20 text-white border border-[#2563EB]/30 hover:from-[#2563EB]/30 hover:to-[#8B5CF6]/30 transition-all duration-300 cursor-pointer"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </section>

      {/* Neural News Network - Unique Visualization */}
      <section className="mb-16">
        <NeuralNetworkVisualization />
      </section>
      
      {/* Holographic News Matrix */}
      <section className="mb-16">
        <HolographicNewsMatrix />
      </section>
      
      {/* Time Crystal Timeline */}
      <section className="mb-16">
        <TimeCrystalTimeline />
      </section>
      
      {/* Sentiment Weather Map */}
      <section className="mb-16">
        <SentimentWeatherMap />
      </section>
      
      {/* Bio-Luminescent News Ecosystem - The Living Interface */}
      <section className="mb-16">
        <BioLuminescentEcosystem />
      </section>
      
      {/* Emotional Weather System */}
      <section className="mb-16">
        <EmotionalWeatherSystem />
      </section>
      
      {/* Symphony of Truth - Audio-Visual Experience */}
      <section className="mb-16">
        <SymphonyOfTruth />
      </section>
      
      {/* News Alchemy - Transform Information */}
      <section className="mb-16">
        <NewsAlchemy />
      </section>
      
      {/* Newsletter Signup with Premium Design */}
      <section className="mb-16 rounded-3xl bg-gradient-to-r from-[#0A0A0F] to-[#1A1A2E] p-12 border border-[#2563EB]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-white">Premium International Coverage</h2>
          <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for expert analysis from Washington, London, and Berlin. Premium market insights for discerning readers in high-value markets.
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
      </section>
    </div>
  );
}
