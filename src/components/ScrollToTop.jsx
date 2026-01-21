import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 w-12 h-12 lg:w-14 lg:h-14 bg-brand-orange text-white rounded-full shadow-xl shadow-brand-orange/20 flex items-center justify-center hover:scale-110 transition-all"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
