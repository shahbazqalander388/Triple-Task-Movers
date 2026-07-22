import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { NAV_LINKS, COMPANY } from '../../constants/data';
import { cn } from '../../utils/cn';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll detection for navbar header background styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Scroll-Spy for Home page sections
  useEffect(() => {
    if (location.pathname !== '/') {
      const currentPath = location.pathname.replace('/', '');
      setActiveSection(currentPath || 'home');
      return;
    }

    const sectionIds = ['home', 'about', 'services', 'gallery', 'contact'];

    const handleScrollSpy = () => {
      // Check if scrolled near bottom of page -> set active to contact
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 160; // offset threshold for sticky header

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  // Scroll to section on hash change or direct link
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(id);
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (id, path, e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
        window.history.pushState(null, '', `#${id}`);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      }
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
      navigate(`/#${id}`);
    }
  };

  const navBg = scrolled
    ? 'bg-gray-950/90 backdrop-blur-lg border-b border-white/10 shadow-xl py-3'
    : 'bg-transparent py-5';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          navBg
        )}
        role="banner"
      >
        <nav
          className="container-custom flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick('home', '/', e)}
            className="flex items-center gap-3 group"
            aria-label="Triple Task Movers - Home"
          >
            <img
              src={COMPANY.logo}
              alt="Triple Task Movers Logo"
              className="w-10 h-10 rounded-xl object-cover border-2 border-primary-500/40 shadow-glow-primary transition-all duration-300 group-hover:scale-110"
            />
            <div>
              <span className="font-display text-xl font-bold block leading-tight text-white group-hover:text-primary-400 transition-colors">
                Triple Task
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase block leading-tight text-secondary-400">
                Movers
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-2" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`/#${link.id}`}
                    onClick={(e) => handleNavClick(link.id, link.path, e)}
                    className={cn(
                      'relative px-5 py-2 font-semibold text-sm rounded-full transition-all duration-300 block',
                      isActive
                        ? 'text-white font-bold'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full -z-0 shadow-glow-primary"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-primary-500 to-primary-700 hover:scale-105 transition-all duration-300 shadow-glow-primary"
              aria-label="Call Triple Task Movers"
            >
              <FaPhone className="text-xs" />
              {COMPANY.phone}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[99] bg-gray-950 flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={COMPANY.logo}
                  alt="Triple Task Movers Logo"
                  className="w-9 h-9 rounded-xl object-cover border border-primary-500/40"
                />
                <span className="font-display text-white text-lg font-bold">Triple Task Movers</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close mobile menu"
                className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
              >
                <FaTimes />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={`/#${link.id}`}
                      onClick={(e) => handleNavClick(link.id, link.path, e)}
                      className={cn(
                        'block text-3xl font-display font-bold py-4 border-b border-white/10 transition-colors duration-200',
                        isActive ? 'text-primary-400' : 'text-white hover:text-primary-300'
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom contact */}
            <div className="p-8 space-y-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl
                  bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold text-lg"
              >
                <FaPhone /> Call Now
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl
                  bg-[#25D366] text-white font-semibold text-lg"
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
