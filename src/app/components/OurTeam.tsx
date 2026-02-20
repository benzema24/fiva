import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users } from 'lucide-react';
import { useParallax } from '@/app/hooks/useParallax';
import { Button } from '@/app/components/ui/button';
import bernadineImage from '@/assets/a70bafd7b818f6beb93c7f2908a16667f49f62f4.png';
import blerinaImage from '@/assets/e2e57308bd5e3b62cd5f02c55e31941c61f3542e.png';
import fitimImage from '@/assets/16e025702f95de5f523338cdc30fd7698562e96f.png';
import hanaaImage from '@/assets/241a1ecf70938f84d6be0d850b2c4582d1eedb1e.png';
import izzatImage from '@/assets/c2954b65aebfa0dc6b75c521db1cea773825c30f.png';
import kontaImage from '@/assets/bd9c15ca9802b50c10715c73fdae11168aa2f189.png';
import liridonaImage from '@/assets/3ddd6ac703bde1e5ddd4d3a85d9da25d5754c84c.png';
import nabylayeImage from '@/assets/a6b780943ceb43bdbc73d3cdeb4ffa299d494542.png';
import shpendImage from '@/assets/3d559f8d87492341f9eadbfcc287495c88bcdabe.png';
import valonImage from '@/assets/ded83d5c05ba49a28bc8d6dda045f7e5cd681f3b.png';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  phone?: string;
  email?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Valon Lluka',
    role: 'Chairman of the Board',
    bio: `Valon Lluka is an accomplished entrepreneur and senior executive with extensive experience in investment management, banking, and international business leadership. As Chairman of the Board of FIVA Investment, he provides strategic direction, oversees corporate governance, and supports long-term value creation.

He has held senior executive and board-level roles across financial services, investments, and large-scale international projects in Europe, Africa, and the Middle East. His expertise includes strategic structuring, cross-border operations, and sustainable growth.

Mr. Lluka holds advanced academic qualifications, including an MBA, and is a published author. He co-authored Money, Banks, and Financial Markets, reflecting his deep expertise in global finance and institutional governance.`,
    image: valonImage,
    phone: '+383 49 123 456',
    email: 'valon.lluka@fivainvestment.com',
    linkedin: 'https://www.linkedin.com/in/valon-lluka',
  },
  {
    name: 'Fitim Pajaziti',
    role: 'Chief Executive Officer & Board Member',
    bio: `Fitim Pajaziti is a senior executive, entrepreneur, and board member with extensive experience in investment, technology, and large-scale international projects. As Chief Executive Officer, he leads corporate strategy, oversees operations, and drives long-term growth through innovation, execution, and strategic partnerships.

His career spans multiple industries and regions, with leadership roles across Europe, Africa, and the Middle East. He has led complex, high-impact initiatives, focusing on organizational scalability, project structuring, and the alignment of technology with institutional and national development objectives.

Recognized for his results-driven leadership style, Mr. Pajaziti combines strategic vision with operational discipline, working closely with boards, government stakeholders, and private partners to deliver sustainable growth and measurable outcomes.`,
    image: fitimImage,
    phone: '+383 49 234 567',
    email: 'fitim.pajaziti@fivainvestment.com',
    linkedin: 'https://www.linkedin.com/in/fitim-pajaziti',
  },
  {
    name: 'Liridona Lluka',
    role: 'Head of Finance & Administration Department',
    bio: `Liridona Lluka is a finance and administration professional with over 12 years of experience in financial management, budgeting, and organizational administration. She oversees financial reporting, internal controls, cash flow planning, and administrative operations, ensuring financial stability and regulatory compliance.

Her background includes five years in the banking sector and more than a decade in the private sector, with experience spanning finance, project management, and human resources. She brings strong expertise in financial planning, cost optimization, and process improvement.

Liridona holds a degree in Mathematics and has completed specialized training in finance and accounting, supporting her analytical approach to financial and operational performance.`,
    image: liridonaImage,
    phone: '+383 49 345 678',
    email: 'liridona.lluka@fivainvestment.com',
    linkedin: 'https://www.linkedin.com/in/liridona-lluka',
  },
  {
    name: 'Izzat Ali Izzat Alsalti',
    role: 'Head of Technology & Innovation Department',
    bio: `Izzat Ali Izzat Alsalti is Head of the Technology & Innovation Department, with over 20 years of experience leading digital transformation and technology-driven innovation across enterprise and government environments. He specializes in AI-enabled platforms, smart systems, advanced analytics, and secure digital infrastructure.

He has led complex multi-country technology programs, developed proof-of-concept initiatives, and built high-performing technical teams while establishing governance frameworks aligned with regulatory and cybersecurity requirements.

Combining deep technical expertise with strategic leadership, Izzat focuses on delivering resilient, scalable, and future-ready solutions that support operational excellence and long-term organizational growth.`,
    image: izzatImage,
    phone: '+971 50 456 7890',
    email: 'izzat.alsalti@fivainvestment.com',
    linkedin: 'https://www.linkedin.com/in/izzat-alsalti',
  },
  {
    name: 'Hanaa Chberreq',
    role: 'Head of Business Development',
    bio: `Hanaa Chberreq is an international business development executive with a multidisciplinary background combining engineering, digital strategy, and global market expansion. As Head of Business Development at FIVA Investment, she leads strategic growth initiatives, supports international market entry, and structures high-level partnerships across Europe, the Middle East, and Africa.

With over ten years of experience, she has held senior roles in international business development, digital marketing, and commercial operations within complex, multi-country environments. She has worked across France, Spain, Switzerland, Belgium, Germany, Austria, and the United Arab Emirates, engaging in cross-border projects involving both public and private stakeholders.

Hanaa holds a Master's degree in Hydraulic and Geotechnical Engineering and a second Master's in Urban Engineering and Intelligent Systems, enabling her to bridge technical expertise with strategic and commercial decision-making.`,
    image: hanaaImage,
    phone: '+971 50 345 6789',
    email: 'hanaa.chberreq@fivainvestment.com',
    linkedin: 'https://www.linkedin.com/in/hanaa-chberreq',
  },
  {
    name: 'Blerina Grajqevci',
    role: 'Head of Human Resources Department',
    bio: `Blerina Grajqevci serves as Head of the Human Resources Department at FIVA Investment Group, leading the Group's human capital strategy across its subsidiaries and international operations. She oversees talent management, organizational development, performance frameworks, and HR governance, ensuring alignment with corporate objectives and standards.

She brings solid experience in human resources and organizational management, having worked across diverse professional environments. Her expertise includes recruitment, employee relations, performance management, and HR operations, supported by a strong understanding of compliance and corporate governance.

With a people-centric yet structured approach, Blerina plays a key role in building sustainable, high-performing teams that support FIVA Investment Group's long-term growth and operational excellence.`,
    image: blerinaImage,
    phone: '+383 49 456 789',
    email: 'blerina.grajqevci@fivainvestment.com',
    linkedin: 'https://www.linkedin.com/in/blerina-grajqevci',
  },
  {
    name: 'KONTA ZHANG',
    role: 'Regional Manager – North Africa',
    bio: `Konta Zhang serves as Regional Manager for North Africa, bringing strong expertise in communications engineering and IT project delivery. He holds a Master's degree in Communications Engineering and has professional experience in telecom billing systems, video surveillance, and security solutions.

With over six years of experience in the IT industry, he has led cross-functional teams and managed complex projects with a strong focus on execution, coordination, and delivery. His background combines technical depth with leadership and communication skills, enabling him to translate operational requirements into effective solutions.

Konta is recognized for his results-driven approach and his ability to deliver measurable outcomes across regional and cross-border projects.`,
    image: kontaImage,
    phone: '+20 10 1234 5678',
    email: 'konta.zhang@fivainvestment.com',
    linkedin: 'https://www.linkedin.com/in/konta-zhang',
  },
  {
    name: 'Nabylaye Moussa Dramé',
    role: 'Regional Manager – West Africa',
    bio: `H.E. Ambassador Nabylaye Moussa Dramé is a senior international security and government advisory professional with decades of high-level experience in diplomatic, security, and institutional environments. He has served in key leadership roles, including senior security and protocol positions in the United Arab Emirates.

With a background in law, police sciences, and specialized security training, he has advised embassies, government institutions, and international organizations. He is recognized for his strategic insight, operational discipline, and ability to lead multinational teams.

Fluent in French, English, and Arabic, Ambassador Dramé brings a global perspective and strong execution capabilities to regional cooperation and institutional development initiatives.`,
    image: nabylayeImage,
    phone: '+221 77 123 4567',
    email: 'nabylaye.drame@fivainvestment.com',
    linkedin: 'https://www.linkedin.com/in/nabylaye-drame',
  },
  {
    name: 'Shpend Kusari',
    role: 'Head of Project Management Department',
    bio: `Shpend Kusari is a project controls and project management professional with over 15 years of combined experience across infrastructure, banking, and large-scale international programs. He has worked on multinational projects in Europe, the Middle East, and North Africa.

His expertise covers project controls, cost management, financial risk, governance, and reporting, supported by strong cross-functional coordination and stakeholder management skills. He brings a structured, data-driven approach to project delivery and operational oversight.

Shpend plays a key role in ensuring project performance, cost efficiency, and alignment with organizational objectives across complex programs.`,
    image: shpendImage,
    phone: '+383 49 567 890',
    email: 'shpend.kusari@fivainvestment.com',
    linkedin: 'https://www.linkedin.com/in/shpend-kusari',
  },
  {
    name: 'Bernadine Gandela',
    role: 'Executive Assistant',
    bio: `Bernadine Gandela serves as Executive Assistant to the CEO, providing high-level support in executive coordination and office operations. She manages complex schedules, organizes meetings, oversees correspondence, and ensures the smooth execution of daily administrative and executive activities.

With a professional background spanning the healthcare and insurance sectors, she brings strong organizational capabilities, attention to detail, and a high level of discretion in handling confidential matters. Her experience in fast-paced, client-oriented, and corporate environments enables her to maintain efficiency while supporting senior leadership priorities.

Known for her proactive mindset, clear communication, and problem-solving approach, Bernadine contributes to effective coordination across teams and overall operational continuity within the organization.`,
    image: bernadineImage,
    phone: '+383 49 678 901',
    email: 'bernadine.gandela@fivainvestment.com',
    linkedin: 'https://www.linkedin.com/in/bernadine-gandela',
  },
];

// Helper function to format names: first letter of each word capitalized, rest lowercase
const formatName = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export function OurTeam() {
  const scrollY = useParallax();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(17,94,103,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,94,103,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
          }}
        ></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm relative overflow-hidden group mb-6
                       bg-gradient-to-r from-blue-950/10 via-amber-500/5 to-blue-950/10 
                       dark:from-amber-600/20 dark:via-blue-600/15 dark:to-amber-600/20
                       border-blue-900/20 dark:border-amber-500/40
                       shadow-lg shadow-blue-900/10 dark:shadow-amber-500/20">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000
                            bg-gradient-to-r from-transparent via-amber-500/10 to-transparent
                            dark:via-amber-400/20" 
            />
            <Users className="h-5 w-5 relative z-10 text-amber-600 dark:text-amber-400 drop-shadow-[0_0_8px_rgba(217,119,6,0.4)] dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            <span className="text-sm font-medium relative z-10 text-blue-950 dark:text-foreground">Leadership Excellence</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-[rgb(15,23,42)] dark:text-white">Team</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders driving innovation and excellence across our global operations.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {teamMembers.map((member, index) => (
            <motion.button
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => setSelectedMember(member)}
              className="group relative text-left"
            >
              {/* Simple Card */}
              <div className="relative">
                {/* Image Container with Grayscale */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 ${
                      member.name === 'Hanaa Chberreq' ? 'object-[center_20%]' : 
                      member.name === 'Fitim Pajaziti' ? 'object-[center_15%]' :
                      member.name === 'Blerina Grajqevci' ? 'object-[center_10%]' :
                      'object-center'
                    }`}
                  />
                  
                  {/* Overlay on Hover - Only on Image */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">View Bio</span>
                  </div>
                </div>

                {/* Info - Centered */}
                <div className="text-center">
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors text-sm">
                    {formatName(member.name)}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#0F172A] border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-[#0F172A] border-b border-border p-6 flex items-start justify-between z-10">
                <div className="flex gap-6">
                  <div className="w-32 h-40 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 shadow-lg">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className={`w-full h-full object-cover ${
                        selectedMember.name === 'Hanaa Chberreq' ? 'object-[center_20%]' :
                        selectedMember.name === 'Fitim Pajaziti' ? 'object-[center_15%]' :
                        selectedMember.name === 'Blerina Grajqevci' ? 'object-[center_10%]' :
                        'object-center'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {formatName(selectedMember.name)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  {selectedMember.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-border p-6 flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setSelectedMember(null)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}