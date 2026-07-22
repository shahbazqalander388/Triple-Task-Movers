import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/common/LoadingScreen';
import ScrollProgress from './components/common/ScrollProgress';
import ScrollToTop from './components/common/ScrollToTop';
import AnimatedCursor from './components/common/AnimatedCursor';
import FloatingButtons from './components/common/FloatingButtons';
import PageTransition from './components/common/PageTransition';

// Code-split pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Minimal fallback while lazy page chunks load
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary-200 border-t-primary-600 animate-spin" />
        <p className="text-gray-400 text-sm">Loading…</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Global UI overlays */}
        <LoadingScreen />
        <ScrollProgress />
        <AnimatedCursor />
        <FloatingButtons />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageLoader />}>
                  <PageTransition><Home /></PageTransition>
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<PageLoader />}>
                  <PageTransition><About /></PageTransition>
                </Suspense>
              }
            />
            <Route
              path="services"
              element={
                <Suspense fallback={<PageLoader />}>
                  <PageTransition><Services /></PageTransition>
                </Suspense>
              }
            />
            <Route
              path="gallery"
              element={
                <Suspense fallback={<PageLoader />}>
                  <PageTransition><Gallery /></PageTransition>
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <PageTransition><Contact /></PageTransition>
                </Suspense>
              }
            />
          </Route>

          {/* 404 — outside main layout */}
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <PageTransition><NotFound /></PageTransition>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
