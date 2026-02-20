import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
}

interface JobApplicationModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
}

export function JobApplicationModal({ job, isOpen, onClose }: JobApplicationModalProps) {
  const [step, setStep] = useState<'form' | 'submitting' | 'success'>('form');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    currentCompany: '',
    yearsExperience: '',
    coverLetter: '',
    howDidYouHear: '',
    availability: '',
    expectedSalary: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('submitting');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setStep('success');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleClose = () => {
    setStep('form');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedIn: '',
      portfolio: '',
      currentCompany: '',
      yearsExperience: '',
      coverLetter: '',
      howDidYouHear: '',
      availability: '',
      expectedSalary: ''
    });
    setResumeFile(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-background border border-border rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              {step === 'form' && (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-border">
                    <div>
                      <h3 className="text-2xl font-bold">Apply for Position</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {job.title} • {job.department}
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[calc(90vh-180px)]">
                    <div className="p-6 space-y-6">
                      {/* Personal Information */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Personal Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="Doe"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="john.doe@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              LinkedIn Profile
                            </label>
                            <input
                              type="url"
                              value={formData.linkedIn}
                              onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="https://linkedin.com/in/johndoe"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Portfolio/Website
                            </label>
                            <input
                              type="url"
                              value={formData.portfolio}
                              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="https://johndoe.com"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Professional Background */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Professional Background</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Current/Most Recent Company
                            </label>
                            <input
                              type="text"
                              value={formData.currentCompany}
                              onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="Company Name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Years of Experience <span className="text-red-500">*</span>
                            </label>
                            <select
                              required
                              value={formData.yearsExperience}
                              onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                            >
                              <option value="">Select...</option>
                              <option value="0-2">0-2 years</option>
                              <option value="3-5">3-5 years</option>
                              <option value="6-10">6-10 years</option>
                              <option value="10+">10+ years</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Availability <span className="text-red-500">*</span>
                            </label>
                            <select
                              required
                              value={formData.availability}
                              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                            >
                              <option value="">Select...</option>
                              <option value="immediate">Immediate</option>
                              <option value="2weeks">2 weeks notice</option>
                              <option value="1month">1 month</option>
                              <option value="2months">2-3 months</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Expected Salary
                            </label>
                            <input
                              type="text"
                              value={formData.expectedSalary}
                              onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="$100,000 - $120,000"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Resume Upload */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Resume/CV <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            required
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            id="resume-upload"
                          />
                          <label
                            htmlFor="resume-upload"
                            className="flex items-center justify-center gap-3 w-full px-4 py-8 bg-muted/50 border-2 border-dashed border-border rounded-lg hover:border-primary/50 hover:bg-muted transition-all cursor-pointer"
                          >
                            {resumeFile ? (
                              <>
                                <FileText className="h-6 w-6 text-primary" />
                                <div className="text-sm">
                                  <p className="font-medium">{resumeFile.name}</p>
                                  <p className="text-muted-foreground">
                                    {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                <Upload className="h-6 w-6 text-muted-foreground" />
                                <div className="text-sm text-center">
                                  <p className="font-medium">Click to upload resume</p>
                                  <p className="text-muted-foreground">PDF, DOC, DOCX (max 5MB)</p>
                                </div>
                              </>
                            )}
                          </label>
                        </div>
                      </div>

                      {/* Cover Letter */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Cover Letter <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          value={formData.coverLetter}
                          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                          rows={6}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                          placeholder="Tell us why you're a great fit for this role and what excites you about joining FIVA..."
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          {formData.coverLetter.length} / 1000 characters
                        </p>
                      </div>

                      {/* Additional Information */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          How did you hear about this position?
                        </label>
                        <select
                          value={formData.howDidYouHear}
                          onChange={(e) => setFormData({ ...formData, howDidYouHear: e.target.value })}
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select...</option>
                          <option value="website">Company Website</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="referral">Employee Referral</option>
                          <option value="jobboard">Job Board</option>
                          <option value="recruiter">Recruiter</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-4 p-6 border-t border-border bg-muted/30">
                      <p className="text-xs text-muted-foreground">
                        By submitting, you agree to our privacy policy and terms of service.
                      </p>
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleClose}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="bg-primary hover:bg-primary/90"
                        >
                          Submit Application
                        </Button>
                      </div>
                    </div>
                  </form>
                </>
              )}

              {step === 'submitting' && (
                <div className="flex flex-col items-center justify-center p-16 text-center">
                  <Loader2 className="h-16 w-16 text-primary animate-spin mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Submitting your application...</h3>
                  <p className="text-muted-foreground">Please wait while we process your information</p>
                </div>
              )}

              {step === 'success' && (
                <div className="flex flex-col items-center justify-center p-16 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                  >
                    <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                  <p className="text-muted-foreground mb-2">
                    Thank you for applying to <strong>{job.title}</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    We've received your application and will review it carefully. You'll hear from us within 5-7 business days.
                  </p>
                  <Button
                    onClick={handleClose}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Close
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}