import { motion } from 'framer-motion';
import { Container, Box, Typography, Divider } from '@mui/material';
import {
  ProfileHeader,
  AboutSection,
  ExperienceTimeline,
  TechStack,
  ProjectsSection,
  CertificationsSection,
  RecommendationsSection,
  SocialLinks,
  GallerySection,
  FloatingChat,
} from '../components';
import { portfolioData } from '../../../data/portfolioData';

const PortfolioPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #fafbfc 0%, #ffffff 100%)',
      }}
    >
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        {/* Profile Header */}
        <ProfileHeader data={portfolioData} />

        {/* Main Grid Layout */}
        <Box
          sx={{
            mt: { xs: 4, sm: 5 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 3, sm: 4 },
          }}
        >
          {/* Left Column */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 4 } }}>
            <AboutSection bio={portfolioData.personal.bio} />
            <TechStack techStack={portfolioData.techStack} />
          </Box>

          {/* Right Column */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 4 } }}>
            <ExperienceTimeline experience={portfolioData.experience} />
            <CertificationsSection certifications={portfolioData.certifications} />
            {portfolioData.recommendations.length > 0 && (
              <RecommendationsSection recommendations={portfolioData.recommendations} />
            )}
          </Box>
        </Box>

        {/* Full Width Sections */}
        <Box sx={{ mt: { xs: 4, sm: 5 }, display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 4 } }}>
          <ProjectsSection projects={portfolioData.projects} />
          <SocialLinks data={portfolioData} />
          <GallerySection gallery={portfolioData.gallery} />
        </Box>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Divider sx={{ mt: 6, mb: 3 }} />
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              textAlign: 'center',
              color: 'text.secondary',
              pb: 4,
            }}
          >
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </Typography>
        </motion.footer>
      </Container>

      {/* Floating Chat Button */}
      <FloatingChat />
    </Box>
  );
};

export default PortfolioPage;
