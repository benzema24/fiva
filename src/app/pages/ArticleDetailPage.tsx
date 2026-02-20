import image_186b95442cd7a0aedb91cefb8c3dbfe523417d58 from '@/assets/186b95442cd7a0aedb91cefb8c3dbfe523417d58.png';
import image_7d64ea8d758e5c097c388ec85a229d3c61a66841 from '@/assets/7d64ea8d758e5c097c388ec85a229d3c61a66841.png';
import burkinaFasoImage2 from '@/assets/21746d858c735957c9a2c771de12e94f3064a1c2.png';
import burkinaFasoImage3 from '@/assets/9707ec31375c0099d9458cf27994ebbd672dda49.png';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

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
  fullContent?: string;
  gallery?: string[];
}

// Same articles data as NewsPage
const newsArticles: NewsArticle[] = [
  {
    id: '5',
    title: 'FIVA Investment at TechEx Global: Shaping the Future of Digital Transformation',
    excerpt: 'FIVA Investment participated in TechEx Global, one of the leading international events dedicated to AI, Big Data, IoT, cybersecurity, cloud, and digital transformation. During the event, the Group\'s Chairman and leadership team engaged with a wide range of global technology companies, innovators, and solution providers.',
    category: 'Innovation',
    date: '2026-02-01',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1763854021314-d7bbbe5212dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjB0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzcwNzM4OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullContent: `
      <p>FIVA Investment participated in TechEx Global, one of the leading international events dedicated to AI, Big Data, IoT, cybersecurity, cloud, and digital transformation.</p>
      
      <p>During the event, the Group's Chairman and leadership team engaged with a wide range of global technology companies, innovators, and solution providers. These meetings focused on identifying emerging technologies, partnership opportunities, and scalable solutions relevant to government and large-scale infrastructure projects.</p>
      
      <p>Participation in TechEx Global reflects FIVA Investment's commitment to remaining at the forefront of technological innovation and to translating global expertise into actionable, high-impact solutions for public and institutional clients worldwide.</p>
      
      <p>The event provided a unique platform to explore cutting-edge advancements in artificial intelligence, machine learning, cloud computing, and cybersecurity. FIVA Investment's team evaluated technologies and solutions that could enhance the digital transformation initiatives currently being deployed across multiple regions and sectors.</p>
      
      <p>Through strategic dialogues with industry leaders and technology innovators, FIVA Investment continues to build a network of global partners capable of delivering world-class solutions that meet the complex demands of modern government infrastructure and institutional development projects.</p>
    `,
  },
  {
    id: '3',
    title: 'A Strategic Milestone for Smart City Development in Albania',
    excerpt: 'A significant milestone has been achieved in the Smart City journey of Albania with the formal signing of a strategic agreement delivered in collaboration with a trusted technology partner. This signing ceremony marks an important step forward in the implementation of integrated Smart City solutions designed to enhance urban management, digital governance, and service efficiency.',
    category: 'Partnerships',
    date: '2025-12-19',
    readTime: '6 min read',
    image: image_186b95442cd7a0aedb91cefb8c3dbfe523417d58,
    fullContent: `
      <p>A significant milestone has been achieved in the Smart City journey of Albania with the formal signing of a strategic agreement delivered in collaboration with a trusted technology partner. This signing ceremony marks an important step forward in the implementation of integrated Smart City solutions designed to enhance urban management, digital governance, and service efficiency.</p>
      
      <p>Beyond the agreement itself, this achievement reflects months of coordination, technical planning, and cross-institutional collaboration. It underscores a shared commitment to professionalism, execution excellence, and long-term impact.</p>
      
      <p>For FIVA Investment, this milestone is not an endpoint but the foundation for scalable deployment, innovation, and sustainable urban transformation aligned with international best practices.</p>
      
      <p>The Smart City initiative in Albania represents a comprehensive approach to modernizing urban infrastructure through advanced technology integration. The solutions will encompass intelligent traffic management systems, enhanced public safety networks, environmental monitoring capabilities, and citizen-centric digital services that will transform daily life for residents and visitors alike.</p>
      
      <p>This strategic partnership demonstrates Albania's forward-thinking vision for digital transformation and positions the country as a regional leader in Smart City development. The project will serve as a model for sustainable urban innovation throughout the Balkans and beyond.</p>
    `,
  },
  {
    id: '6',
    title: 'High-Level Meeting with the Vice President of Equatorial Guinea',
    excerpt: 'FIVA Investment held a high-level meeting with H.E. Teodoro Nguema Obiang Mangue, Vice President of Equatorial Guinea, to discuss strategic cooperation opportunities in digital transformation and national development. The meeting focused on exploring innovative solutions that support governance modernization, infrastructure development, and technology-enabled public services.',
    category: 'Partnerships',
    date: '2025-04-05',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBnb3Zlcm5tZW50JTIwZGlnaXRhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc3MDczOTY5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullContent: `
      <p>FIVA Investment held a high-level meeting with H.E. Teodoro Nguema Obiang Mangue, Vice President of Equatorial Guinea, to discuss strategic cooperation opportunities in digital transformation and national development.</p>
      
      <p>The meeting focused on exploring innovative solutions that support governance modernization, infrastructure development, and technology-enabled public services. Discussions emphasized long-term value creation, institutional strengthening, and sustainable impact.</p>
      
      <p>This engagement reflects FIVA Investment's approach of working closely with senior leadership to design tailored, high-impact programs aligned with national priorities and development objectives.</p>
      
      <p>The high-level discussions covered a wide range of strategic areas, including digital governance frameworks, smart infrastructure deployment, and the integration of advanced technologies to enhance public service delivery. Both parties explored opportunities for partnership that would leverage international best practices while respecting local contexts and priorities.</p>
      
      <p>FIVA Investment's engagement with Equatorial Guinea demonstrates its commitment to fostering meaningful public-private partnerships that drive sustainable development and create lasting value for nations and their citizens.</p>
    `,
  },
  {
    id: '4',
    title: 'Strategic Engagements in Benghazi Supporting Digital and Institutional Development',
    excerpt: 'FIVA Investment conducted strategic meetings in Benghazi with senior officials and institutional stakeholders as part of ongoing regional development initiatives. The discussions focused on digital governance frameworks, secure infrastructure, and technology-driven solutions aimed at strengthening institutional capacity and operational efficiency.',
    category: 'Partnerships',
    date: '2025-03-11',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1639722944824-b62d94878ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJ5YSUyMGRpZ2l0YWwlMjBpbmZyYXN0cnVjdHVyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MDczODg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullContent: `
      <p>FIVA Investment conducted strategic meetings in Benghazi with senior officials and institutional stakeholders as part of ongoing regional development initiatives.</p>
      
      <p>The discussions focused on digital governance frameworks, secure infrastructure, and technology-driven solutions aimed at strengthening institutional capacity and operational efficiency.</p>
      
      <p>These engagements reinforce FIVA Investment's commitment to supporting stable, scalable, and resilient development programs through structured public–private collaboration and international expertise.</p>
      
      <p>The meetings in Benghazi addressed critical areas including digital transformation, infrastructure modernization, and capacity building initiatives. Both parties emphasized the importance of sustainable approaches that leverage technology to enhance public services while ensuring long-term institutional stability.</p>
      
      <p>FIVA Investment's presence in Benghazi demonstrates its dedication to working with regional stakeholders to design and implement solutions that align with local priorities and international best practices, fostering development that is both impactful and enduring.</p>
    `,
  },
  {
    id: '2',
    title: 'Driving Digital Transformation and Smart City Development in Burkina Faso',
    excerpt: 'FIVA Investment had the honor of engaging with senior government leaders in Burkina Faso to discuss transformative digitalization and Smart City programs. Productive exchanges took place with key institutions, including the Ministry of Development, the General Secretariat of the Presidency, the Ministry of State, the Ministry of Health, the Ministry of Energy and Mining, and the Ministry of Security and Interior.',
    category: 'Partnerships',
    date: '2025-03-04',
    readTime: '5 min read',
    image: image_7d64ea8d758e5c097c388ec85a229d3c61a66841,
    featured: true,
    fullContent: `
      <p>FIVA Investment had the honor of engaging with senior government leaders in Burkina Faso to discuss transformative digitalization and Smart City programs.</p>
      
      <p>Productive exchanges took place with key institutions, including the Ministry of Development, the General Secretariat of the Presidency, the Ministry of State, the Ministry of Health, the Ministry of Energy and Mining, and the Ministry of Security and Interior.</p>
      
      <p>These strategic discussions centered on deploying digital solutions to improve public services, strengthen urban infrastructure, and foster sustainable development. Particular emphasis was placed on interoperability, data-driven governance, and long-term capacity building.</p>
      
      <p>FIVA Investment views this engagement as a major milestone in supporting Burkina Faso's vision for smarter, more efficient, and inclusive urban and governmental systems, paving the way for impactful public–private collaboration.</p>
    `,
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
    fullContent: `
      <p>FIVA Investment recently held high-level discussions with the Government of Senegal as part of ongoing efforts to support the country's digital transformation agenda.</p>
      
      <p>The delegation met with H.E. Alioune Sall, Minister of Digitalization, alongside H.E. Ahmadou Alhaminou Lo, Minister of State, to explore the implementation of strategic Smart City initiatives and a national e-Visa system. These projects aim to strengthen public service delivery, improve mobility, and enhance digital governance.</p>
      
      <p>The discussions focused on leveraging advanced digital platforms, secure identity systems, and scalable infrastructure to accelerate administrative efficiency while supporting economic development and international attractiveness.</p>
      
      <p>FIVA Investment, together with its partners and technical teams, is committed to delivering integrated, future-ready solutions aligned with national priorities. These initiatives represent a concrete step toward modern, resilient, and citizen-centric digital ecosystems in Senegal.</p>
    `,
  },
];

export function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = newsArticles.find((a) => a.id === id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  if (!article) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Button onClick={() => navigate('/news')}>Back to News</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(17,94,103,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,94,103,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigate('/news')}
              className="mb-6 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to News
            </Button>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{article.readTime}</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Featured Image */}
          <div className="relative aspect-video overflow-hidden rounded-2xl mb-12 shadow-2xl">
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
                       prose-headings:text-foreground prose-headings:font-bold
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                       prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                       prose-ul:text-muted-foreground prose-ul:my-6
                       prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: article.fullContent || article.excerpt }}
          />

          {/* Photo Gallery - Only for Burkina Faso article */}
          {article.id === '2' && (
            <div className="my-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Event Photos</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img src={burkinaFasoImage2} alt="Strategic discussion meeting" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img src={burkinaFasoImage3} alt="Government leaders meeting" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="my-12 border-t border-border"></div>

          {/* Back to News */}
          <div className="text-center">
            <Button
              onClick={() => navigate('/news')}
              className="bg-gradient-to-r from-[#f0b51d] to-[#D97706] hover:from-[#d9a01a] hover:to-[#b86605] text-white shadow-lg shadow-[#f0b51d]/30"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All News
            </Button>
          </div>
        </motion.div>
      </article>
    </div>
  );
}