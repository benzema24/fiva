import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      component={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      sx={{
        position: 'relative',
        width: 40,
        height: 40,
        borderRadius: 2,
        bgcolor: 'action.hover',
        '&:hover': {
          bgcolor: 'action.selected',
        },
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{ duration: 0.2 }}
        style={{ position: 'absolute' }}
      >
        <Brightness4 />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
          rotate: theme === 'light' ? 0 : -180,
        }}
        transition={{ duration: 0.2 }}
        style={{ position: 'absolute' }}
      >
        <Brightness7 />
      </motion.div>
    </IconButton>
  );
}