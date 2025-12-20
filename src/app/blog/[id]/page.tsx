import { newsService } from '@/services/news-service';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProfessionalImagePlaceholder } from "@/components/elements/professional-image-placeholder";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
  ArrowLeft,
  Globe,
  TrendingUp,
  Eye,
  ChevronRight,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon
} from "lucide-react";

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const article = await newsService.getArticleById(params.id);
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for could not be found.'
    };
  }
  
  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
    }
  };
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const article = await newsService.getArticleById(params.id);
  
  if (!article) {
    notFound();
  }

  const handleShare = async (platform: string) => {
    // This would be handled client-side in a real implementation
    console.log(`Sharing to ${platform}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0F172A]">
      {/* Article Header with Modern Design */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-transparent to-transparent"></div>
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              className="mb-6 text-[#2563EB] hover:text-[#1D4ED8] hover:bg-[#2563EB]/10 group"
              asChild
            >
              <Link href="/blog">
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </Badge>
              {article.isPremium && (
                <Badge className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white px-4 py-2 rounded-full text-sm font-medium">
                  PREMIUM
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-[#E2E8F0]">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image with Modern Styling */}
      <div className="container px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#64748B]/30">
            <ProfessionalImagePlaceholder 
              width={1200} 
              height={600} 
              title={article.title}
              category={article.category}
              variant="default"
            />
          </div>
        </div>
      </div>

      {/* Article Content with Modern Layout */}
      <div className="container px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-invert max-w-none text-[#E2E8F0] prose-headings:text-white prose-p:text-lg prose-p:leading-relaxed prose-a:text-[#2563EB] prose-a:hover:text-[#1D4ED8] prose-strong:text-white prose-em:text-[#E2E8F0] prose-li:marker:text-[#2563EB]">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
              
              {/* Tags */}
              <div className="mt-16 pt-8 border-t border-[#64748B]/30">
                <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {article.tags && article.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-[#2563EB]/20 text-[#2563EB] hover:bg-[#2563EB]/30 px-4 py-2 rounded-full text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* FAQ Section - New Addition */}
              {article.faqs && article.faqs.length > 0 && (
                <div className="mt-16 pt-8 border-t border-[#64748B]/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    {article.faqs.map((faq: any, index: number) => (
                      <div key={index} className="bg-[#0F172A]/50 backdrop-blur-lg border border-[#64748B]/30 rounded-2xl p-6">
                        <h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
                        <p className="text-[#E2E8F0]">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Engagement Actions */}
              <div className="mt-16 flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10 rounded-full px-6 py-3"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Like (0)
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10 rounded-full px-6 py-3"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Comment (0)
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10 rounded-full px-6 py-3"
                >
                  <Bookmark className="h-5 w-5 mr-2" />
                  Bookmark
                </Button>
                
                <div className="relative group">
                  <Button 
                    variant="outline" 
                    className="border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10 rounded-full px-6 py-3"
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </Button>
                  
                  {/* Share Dropdown */}
                  <div className="absolute right-0 mt-2 w-48 bg-[#0F172A] border border-[#64748B]/30 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    <button 
                      onClick={() => handleShare('twitter')}
                      className="flex items-center w-full px-4 py-3 text-[#E2E8F0] hover:bg-[#2563EB]/10 rounded-t-2xl"
                    >
                      <Twitter className="h-5 w-5 mr-3 text-[#1DA1F2]" />
                      Twitter
                    </button>
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="flex items-center w-full px-4 py-3 text-[#E2E8F0] hover:bg-[#2563EB]/10"
                    >
                      <Facebook className="h-5 w-5 mr-3 text-[#4267B2]" />
                      Facebook
                    </button>
                    <button 
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center w-full px-4 py-3 text-[#E2E8F0] hover:bg-[#2563EB]/10"
                    >
                      <Linkedin className="h-5 w-5 mr-3 text-[#0077B5]" />
                      LinkedIn
                    </button>
                    <button 
                      onClick={() => handleShare('copy')}
                      className="flex items-center w-full px-4 py-3 text-[#E2E8F0] hover:bg-[#2563EB]/10 rounded-b-2xl"
                    >
                      <LinkIcon className="h-5 w-5 mr-3" />
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar with Modern Design */}
            <div className="lg:col-span-1">
              {/* About the Author */}
              <div>
                <Card className="bg-[#0F172A]/50 backdrop-blur-lg border border-[#64748B]/30 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      About the Author
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#8B5CF6] flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">
                          {article.author.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{article.author.name}</h4>
                        <p className="text-[#E2E8F0] text-sm">Senior Technology Correspondent</p>
                      </div>
                    </div>
                    <p className="text-[#E2E8F0] text-sm">{article.author.bio}</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Related Articles */}
              <div className="mt-6">
                <Card className="bg-[#0F172A]/50 backdrop-blur-lg border border-[#64748B]/30 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Related Articles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {article.relatedArticles && article.relatedArticles.map((related: any, index: number) => (
                      <Link href={`/blog/${related.id}`} key={index} className="block group">
                        <div className="flex items-start p-3 rounded-xl hover:bg-[#2563EB]/10 transition-colors">
                          <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#0F172A] border border-[#64748B]/30 mr-3 flex-shrink-0">
                            <ProfessionalImagePlaceholder 
                              title={related.title}
                              category={article.category}
                              variant="default"
                              width={80}
                              height={80}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-white text-sm mb-1 line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                              {related.title}
                            </h4>
                            <p className="text-[#94A3B8] text-xs">{related.date} · {related.readTime}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-[#94A3B8] group-hover:text-[#2563EB] flex-shrink-0 ml-2" />
                        </div>
                      </Link>
                    ))}
                    
                    {!article.relatedArticles && (
                      <>
                        <Link href="#" className="block group">
                          <div className="flex items-start p-3 rounded-xl hover:bg-[#2563EB]/10 transition-colors">
                            <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#0F172A] border border-[#64748B]/30 mr-3 flex-shrink-0">
                              <ProfessionalImagePlaceholder 
                                title="Related Article 1"
                                category="Technology"
                                variant="default"
                                width={80}
                                height={80}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-white text-sm mb-1 line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                                The Future of AI in Luxury Retail
                              </h4>
                              <p className="text-[#94A3B8] text-xs">Dec 18, 2025 · 8 min read</p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-[#94A3B8] group-hover:text-[#2563EB] flex-shrink-0 ml-2" />
                          </div>
                        </Link>
                        
                        <Link href="#" className="block group">
                          <div className="flex items-start p-3 rounded-xl hover:bg-[#2563EB]/10 transition-colors">
                            <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#0F172A] border border-[#64748B]/30 mr-3 flex-shrink-0">
                              <ProfessionalImagePlaceholder 
                                title="Related Article 2"
                                category="Business"
                                variant="market"
                                width={80}
                                height={80}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-white text-sm mb-1 line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                                Sustainable Practices in High-End Fashion
                              </h4>
                              <p className="text-[#94A3B8] text-xs">Dec 17, 2025 · 10 min read</p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-[#94A3B8] group-hover:text-[#2563EB] flex-shrink-0 ml-2" />
                          </div>
                        </Link>
                        
                        <Link href="#" className="block group">
                          <div className="flex items-start p-3 rounded-xl hover:bg-[#2563EB]/10 transition-colors">
                            <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#0F172A] border border-[#64748B]/30 mr-3 flex-shrink-0">
                              <ProfessionalImagePlaceholder 
                                title="Related Article 3"
                                category="Technology"
                                variant="science"
                                width={80}
                                height={80}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-white text-sm mb-1 line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                                Blockchain Authentication in Luxury Goods
                              </h4>
                              <p className="text-[#94A3B8] text-xs">Dec 16, 2025 · 12 min read</p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-[#94A3B8] group-hover:text-[#2563EB] flex-shrink-0 ml-2" />
                          </div>
                        </Link>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <Card className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-[#64748B]/30 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
                    <p className="text-[#E2E8F0] text-sm mb-4">
                      Get the latest premium insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-3 bg-[#0A0A0F] border border-[#64748B]/30 rounded-xl text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      />
                      <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl py-3">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}