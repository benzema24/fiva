import { BrowserRouter, Routes, Route } from 'react-router';
import { Box } from '@mui/material';
import { Toaster } from '@/app/components/ui/sonner';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { StickyContactButton } from '@/app/components/StickyContactButton';
import { InteractiveBackground } from '@/app/components/InteractiveBackground';
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { PublicServicesPage } from '@/app/pages/PublicServicesPage';
import { EnergyClimatePage } from '@/app/pages/EnergyClimatePage';
import { TechnologyInnovationPage } from '@/app/pages/TechnologyInnovationPage';
import { HumanCapitalPage } from '@/app/pages/HumanCapitalPage';
import { CareersPage } from '@/app/pages/CareersPage';
import { NewsPage } from '@/app/pages/NewsPage';
import { ArticleDetailPage } from '@/app/pages/ArticleDetailPage';
import { CompaniesPage } from '@/app/pages/CompaniesPage';
import { ContactPage } from '@/app/pages/ContactPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Box
          sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary',
            transition: 'color 0.3s, background-color 0.3s',
            position: 'relative',
          }}
        >
          <InteractiveBackground />
          <Box sx={{ position: 'relative', zIndex: 10 }}>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/companies" element={<CompaniesPage />} />
              <Route path="/services/public-services" element={<PublicServicesPage />} />
              <Route path="/services/energy-climate" element={<EnergyClimatePage />} />
              <Route path="/services/technology-innovation" element={<TechnologyInnovationPage />} />
              <Route path="/services/human-capital" element={<HumanCapitalPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<ArticleDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
            <StickyContactButton />
          </Box>
          <Toaster position="top-right" />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}