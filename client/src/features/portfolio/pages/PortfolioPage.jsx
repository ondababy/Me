import { motion } from 'framer-motion';
import { Container, Box, Typography } from '@mui/material';
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
        background: '#fafafa',
      }}
    >
      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        {/* Profile Header */}
        <ProfileHeader data={portfolioData} />

        {/* Main Grid Layout */}
        <Box
          sx={{
            mt: { xs: 4, sm: 5 },
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}
        >
          {/* Stacked Sections with Connected Borders */}
          <AboutSection bio={portfolioData.personal.bio} />
          <ExperienceTimeline experience={portfolioData.experience} />
          <TechStack techStack={portfolioData.techStack} />
          <CertificationsSection certifications={portfolioData.certifications} />
          {portfolioData.recommendations.length > 0 && (
            <RecommendationsSection recommendations={portfolioData.recommendations} />
          )}
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
          <Box
            sx={{
              mt: 0,
              py: 4,
              border: '2px solid',
              borderTop: 'none',
              borderColor: '#1a1a1a',
              background: '#ffffff',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                textAlign: 'center',
                color: 'text.secondary',
                fontWeight: 500,
              }}
            >
              © {new Date().getFullYear()} {portfolioData.personal.name}
            </Typography>
          </Box>
        </motion.footer>
      </Container>

      {/* Floating Chat Button */}
      <FloatingChat />
    </Box>
  );
};

export default PortfolioPage;
