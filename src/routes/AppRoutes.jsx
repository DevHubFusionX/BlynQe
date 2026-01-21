import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Features from '../pages/Features';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PricingPage from '../pages/PricingPage';
import SafetyPage from '../pages/SafetyPage';
import FAQPage from '../pages/FAQPage';
import PrivacyPage from '../pages/PrivacyPage';
import TermsPage from '../pages/TermsPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'features', element: <Features /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'safety', element: <SafetyPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]);
