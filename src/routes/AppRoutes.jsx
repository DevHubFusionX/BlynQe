import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Features from '../pages/Features';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import PricingPage from '../pages/PricingPage';
import SafetyPage from '../pages/SafetyPage';
import FAQPage from '../pages/FAQPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'features', element: <Features /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'safety', element: <SafetyPage /> },
      { path: 'faq', element: <FAQPage /> }
    ]
  }
]);
