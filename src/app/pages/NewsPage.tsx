import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Calendar, Clock, ArrowRight, Search, Filter, Newspaper } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import image_7d64ea8d758e5c097c388ec85a229d3c61a66841 from '@/assets/7d64ea8d758e5c097c388ec85a229d3c61a66841.png';
import burkinaFasoImage from '@/assets/0f4ce765636b7e561f4de33472fe4d572f67a84b.png';

type NewsCategory = 'All' | 'Company' | 'Partnerships' | 'Innovation' | 'Expansion';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const newsArticles: NewsArticle[] = [
  {
    id: '5',
    title: 'FIVA Investment at TechEx Global: Shaping the Future of Digital Transformation',
    excerpt: 'FIVA Investment participated in TechEx Global, one of the leading international events dedicated to AI, Big Data, IoT, cybersecurity, cloud, and digital transformation. During the event, the Group\'s Chairman and leadership team engaged with a wide range of global technology companies, innovators, and solution providers.',
    category: 'Innovation',
    date: '2026-02-01',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1763854021314-d7bbbe5212dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjB0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzcwNzM4OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '3',
    title: 'A Strategic Milestone for Smart City Development in Albania',
    excerpt: 'A significant milestone has been achieved in the Smart City journey of Albania with the formal signing of a strategic agreement delivered in collaboration with a trusted technology partner. This signing ceremony marks an important step forward in the implementation of integrated Smart City solutions designed to enhance urban management, digital governance, and service efficiency.',
    category: 'Partnerships',
    date: '2025-12-19',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1763122034240-640bf69a3e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJhbmlhJTIwc21hcnQlMjBjaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA3Mzg0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '6',
    title: 'High-Level Meeting with the Vice President of Equatorial Guinea',
    excerpt: 'FIVA Investment held a high-level meeting with H.E. Teodoro Nguema Obiang Mangue, Vice President of Equatorial Guinea, to discuss strategic cooperation opportunities in digital transformation and national development. The meeting focused on exploring innovative solutions that support governance modernization, infrastructure development, and technology-enabled public services.',
    category: 'Partnerships',
    date: '2025-04-05',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBnb3Zlcm5tZW50JTIwZGlnaXRhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc3MDczOTY5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '4',
    title: 'Strategic Engagements in Benghazi Supporting Digital and Institutional Development',
    excerpt: 'FIVA Investment conducted strategic meetings in Benghazi with senior officials and institutional stakeholders as part of ongoing regional development initiatives. The discussions focused on digital governance frameworks, secure infrastructure, and technology-driven solutions aimed at strengthening institutional capacity and operational efficiency.',
    category: 'Partnerships',
    date: '2025-03-11',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1639722944824-b62d94878ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJ5YSUyMGRpZ2l0YWwlMjBpbmZyYXN0cnVjdHVyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MDczODg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '2',
    title: 'Driving Digital Transformation and Smart City Development in Burkina Faso',
    excerpt: 'FIVA Investment had the honor of engaging with senior government leaders in Burkina Faso to discuss transformative digitalization and Smart City programs. Productive exchanges took place with key institutions, including the Ministry of Development, the General Secretariat of the Presidency, the Ministry of State, the Ministry of Health, the Ministry of Energy and Mining, and the Ministry of Security and Interior.',
    category: 'Partnerships',
    date: '2025-03-04',
    readTime: '5 min read',
    image: burkinaFasoImage,
    featured: true,
  },
  {
    id: '1',
    title: 'Advancing Smart City and e-Visa Initiatives in Senegal',
    excerpt: 'FIVA Investment recently held high-level discussions with the Government of Senegal as part of ongoing efforts to support the country\'s digital transformation agenda. The delegation met with H.E. Alioune Sall, Minister of Digitalization, alongside H.E. Ahmadou Alhaminou Lo, Minister of State, to explore the implementation of strategic Smart City initiatives and a national e-Visa system.',
    category: 'Partnerships',
    date: '2025-02-28',
    readTime: '5 min read',
    image: image_7d64ea8d758e5c097c388ec85a229d3c61a66841,
    featured: true,
  },
];

const categories: NewsCategory[] = ['All', 'Company', 'Partnerships', 'Innovation', 'Expansion'];

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter((article) => article.featured);
  const regularArticles = filteredArticles.filter((article) => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(17,94,103,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,94,103,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm relative overflow-hidden group
                           bg-gradient-to-r from-blue-950/10 via-amber-500/5 to-blue-950/10 
                           dark:from-amber-600/20 dark:via-blue-600/15 dark:to-amber-600/20
                           border-blue-900/20 dark:border-amber-500/40
                           shadow-lg shadow-blue-900/10 dark:shadow-amber-500/20">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000
                                bg-gradient-to-r from-transparent via-amber-500/10 to-transparent
                                dark:via-amber-400/20" 
                />
                <Newspaper className="h-5 w-5 relative z-10 text-amber-600 dark:text-amber-400 drop-shadow-[0_0_8px_rgba(217,119,6,0.4)] dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                <span className="text-sm font-medium relative z-10 text-blue-950 dark:text-foreground">Latest Updates</span>
              </div>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#001D37] to-[#115E67] bg-clip-text text-[rgb(15,23,42)] dark:bg-none dark:text-white">
                News & Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest news, partnerships, and innovations from FIVA Investment
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white dark:text-primary-foreground shadow-lg shadow-primary/30'
                      : 'bg-card border border-border hover:border-primary/50 text-foreground hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-2">Corporate Highlights</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-cyan-400 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-[#001D37] text-white text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80 p-0 h-auto font-medium group/btn"
                      onClick={() => navigate(`/news/${article.id}`)}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      {regularArticles.length > 0 && (
        <section className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-2">All Articles</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-cyan-400 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-[#001D37] text-white text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-primary/80 p-0 h-auto font-medium text-sm group/btn"
                        onClick={() => navigate(`/news/${article.id}`)}
                      >
                        Read More
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredArticles.length === 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Clear Filters
              </Button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}