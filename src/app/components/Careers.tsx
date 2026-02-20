import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, DollarSign, Search, Filter, ChevronRight, Building2, Zap, Cpu, Users } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { JobApplicationModal } from '@/app/components/JobApplicationModal';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  vertical: 'public-services' | 'energy' | 'technology' | 'human-capital';
  postedDate: string;
}

const jobsData: Job[] = [
  {
    id: '1',
    title: 'Senior Investment Analyst',
    department: 'Investment Operations',
    location: 'New York, USA',
    type: 'Full-time',
    salary: '$120,000 - $180,000',
    description: 'Lead investment analysis and due diligence for portfolio companies across multiple verticals.',
    responsibilities: [
      'Conduct comprehensive financial analysis and market research',
      'Evaluate investment opportunities and prepare detailed reports',
      'Monitor portfolio company performance and provide strategic recommendations',
      'Collaborate with senior management on investment strategy'
    ],
    qualifications: [
      '5+ years of experience in investment banking or private equity',
      'MBA or CFA preferred',
      'Strong financial modeling and analytical skills',
      'Excellent communication and presentation abilities'
    ],
    vertical: 'public-services',
    postedDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'Energy Transition Consultant',
    department: 'Energy & Climate',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£80,000 - £110,000',
    description: 'Drive strategic initiatives in renewable energy and climate technology investments.',
    responsibilities: [
      'Develop and implement energy transition strategies',
      'Assess renewable energy projects and technologies',
      'Build relationships with government agencies and energy companies',
      'Lead sustainability reporting and ESG initiatives'
    ],
    qualifications: [
      '3+ years in energy consulting or renewable energy sector',
      'Knowledge of climate policy and carbon markets',
      'Strong project management skills',
      'Engineering or environmental science background preferred'
    ],
    vertical: 'energy',
    postedDate: '2024-01-20'
  },
  {
    id: '3',
    title: 'Technology Investment Manager',
    department: 'Technology & Innovation',
    location: 'San Francisco, USA',
    type: 'Full-time',
    salary: '$140,000 - $200,000',
    description: 'Identify and evaluate technology investment opportunities in AI, blockchain, and emerging tech.',
    responsibilities: [
      'Source and evaluate technology startup investments',
      'Conduct technical due diligence on AI/ML and blockchain projects',
      'Build relationships with tech founders and venture capital firms',
      'Monitor technology trends and emerging opportunities'
    ],
    qualifications: [
      '5+ years in venture capital or technology investing',
      'Technical background in computer science or engineering',
      'Deep understanding of emerging technologies',
      'Strong network in the tech startup ecosystem'
    ],
    vertical: 'technology',
    postedDate: '2024-01-18'
  },
  {
    id: '4',
    title: 'Public Policy Advisor',
    department: 'Public Services',
    location: 'Washington DC, USA',
    type: 'Full-time',
    salary: '$100,000 - $140,000',
    description: 'Advise on government relations and public policy strategy across our portfolio companies.',
    responsibilities: [
      'Monitor and analyze policy developments affecting our investments',
      'Build relationships with government officials and regulatory bodies',
      'Provide strategic policy guidance to portfolio companies',
      'Represent FIVA in industry associations and policy forums'
    ],
    qualifications: [
      '4+ years in government, policy advisory, or public affairs',
      'Strong understanding of regulatory frameworks',
      'Excellent written and verbal communication skills',
      'Masters degree in public policy or related field preferred'
    ],
    vertical: 'public-services',
    postedDate: '2024-01-22'
  },
  {
    id: '5',
    title: 'Human Capital Strategy Manager',
    department: 'Human Capital & Society',
    location: 'Dubai, UAE',
    type: 'Full-time',
    salary: '$90,000 - $130,000',
    description: 'Lead talent development and organizational transformation initiatives across portfolio companies.',
    responsibilities: [
      'Design and implement talent development programs',
      'Advise portfolio companies on organizational strategy',
      'Conduct leadership assessments and coaching',
      'Drive diversity, equity, and inclusion initiatives'
    ],
    qualifications: [
      '5+ years in HR consulting or organizational development',
      'Experience with change management and transformation',
      'Strong coaching and facilitation skills',
      'Professional HR certification (SHRM, CIPD) preferred'
    ],
    vertical: 'human-capital',
    postedDate: '2024-01-25'
  },
  {
    id: '6',
    title: 'Financial Controller',
    department: 'Finance',
    location: 'Singapore',
    type: 'Full-time',
    salary: '$95,000 - $135,000',
    description: 'Oversee financial reporting, compliance, and controls for FIVA\'s Asia-Pacific operations.',
    responsibilities: [
      'Manage financial reporting and month-end close processes',
      'Ensure compliance with accounting standards and regulations',
      'Coordinate external audits and regulatory filings',
      'Lead financial planning and analysis activities'
    ],
    qualifications: [
      '7+ years in accounting or financial control roles',
      'CPA or CA qualification required',
      'Experience in investment management or financial services',
      'Strong knowledge of IFRS and local regulations'
    ],
    vertical: 'public-services',
    postedDate: '2024-01-28'
  }
];

const verticalIcons = {
  'public-services': { icon: Building2, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  'energy': { icon: Zap, color: 'text-green-500', bg: 'bg-green-500/10' },
  'technology': { icon: Cpu, color: 'text-blue-600', bg: 'bg-blue-600/10' },
  'human-capital': { icon: Users, color: 'text-orange-500', bg: 'bg-orange-500/10' }
};

export function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Check if filter matches position title or department
    const matchesFilter = selectedFilter === 'all' || 
                          job.title.toLowerCase() === selectedFilter.toLowerCase() ||
                          job.department.toLowerCase() === selectedFilter.toLowerCase();
    
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation);
    return matchesSearch && matchesFilter && matchesLocation;
  });

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setIsApplicationModalOpen(true);
  };

  const locations = Array.from(new Set(jobsData.map(job => job.location.split(',')[1]?.trim() || job.location.split(',')[0])));

  // Get unique positions and departments
  const positions = Array.from(new Set(jobsData.map(job => job.title)));
  const departments = Array.from(new Set(jobsData.map(job => job.department)));

  return (
    <section id="careers" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            <Briefcase className="h-5 w-5 relative z-10 text-amber-600 dark:text-amber-400 drop-shadow-[0_0_8px_rgba(217,119,6,0.4)] dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            <span className="text-sm font-medium relative z-10 text-blue-950 dark:text-foreground">Join Our Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-[#115E67] dark:from-[#115E67] dark:to-primary bg-clip-text text-[rgb(15,23,42)] dark:text-white text-[72px]">
              Careers at FIVA
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build your career at the intersection of investment, innovation, and impact. We're looking for talented individuals to join our global team.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="backdrop-blur-sm bg-card/60 border border-border rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Vertical Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="all">All Positions & Departments</option>
                  {positions.map(position => (
                    <option key={position} value={position}>{position}</option>
                  ))}
                  {departments.map(department => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="all">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'}
            </div>
          </div>
        </motion.div>

        {/* Infinite Horizontal Scrolling Jobs */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <motion.div
            className="flex gap-6 py-4"
            animate={isHovering ? {} : {
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* First set of jobs */}
            {[...filteredJobs, ...filteredJobs].map((job, index) => {
              const VerticalIcon = verticalIcons[job.vertical].icon;
              return (
                <div
                  key={`${job.id}-${index}`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="relative group flex-shrink-0 w-[400px] cursor-pointer"
                >
                  {/* Clean Card Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1E40AF]/20 via-[#f0b51d]/15 to-[#1E40AF]/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-card border border-border rounded-2xl p-6 group-hover:border-[#f0b51d]/50 transition-all duration-500 h-full flex flex-col group-hover:shadow-xl">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`p-3 rounded-xl ${verticalIcons[job.vertical].bg} transition-all duration-300`}>
                          <VerticalIcon className={`h-6 w-6 ${verticalIcons[job.vertical].color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-[#f0b51d] transition-colors duration-300">
                            {job.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{job.department}</p>
                        </div>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="flex flex-col gap-2.5 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-[#f0b51d]/10 flex items-center justify-center flex-shrink-0">
                          <DollarSign className="h-3.5 w-3.5 text-[#f0b51d]" />
                        </div>
                        <span className="font-medium">{job.salary}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        {new Date(job.postedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApply(job);
                        }}
                        className="bg-gradient-to-r from-[#f0b51d] to-[#d9a019] hover:from-[#d9a019] hover:to-[#c28f15] text-white shadow-md hover:shadow-lg transition-all duration-300 group/btn"
                      >
                        <span className="flex items-center gap-2">
                          Apply Now
                          <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Briefcase className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-xl font-semibold mb-2">No positions found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </motion.div>
        )}

        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="backdrop-blur-sm bg-card/60 border border-border rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-6">Why Join FIVA?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'Global Impact',
                  description: 'Work on projects that shape the future of industries and communities worldwide',
                  icon: '🌍'
                },
                {
                  title: 'Career Growth',
                  description: 'Continuous learning opportunities and clear paths for professional development',
                  icon: '📈'
                },
                {
                  title: 'Competitive Benefits',
                  description: 'Comprehensive compensation packages, health benefits, and work-life balance',
                  icon: '⭐'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Job Application Modal */}
      {selectedJob && (
        <JobApplicationModal
          job={selectedJob}
          isOpen={isApplicationModalOpen}
          onClose={() => {
            setIsApplicationModalOpen(false);
            setSelectedJob(null);
          }}
        />
      )}
    </section>
  );
}