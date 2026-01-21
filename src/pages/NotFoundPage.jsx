import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-brand-bg flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                {/* 404 Graphic */}
                <div className="relative mb-8">
                    <div className="text-[150px] lg:text-[200px] font-black text-brand-orange/10 leading-none">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 lg:w-32 lg:h-32 bg-brand-orange rounded-full flex items-center justify-center animate-pulse">
                            <svg viewBox="0 0 24 24" className="w-12 h-12 lg:w-16 lg:h-16 text-white fill-current">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl lg:text-4xl font-black text-brand-dark mb-4">
                    Oops! Page not found
                </h1>
                <p className="text-brand-grey mb-8 lg:text-lg">
                    Looks like this connection didn't work out. Let's get you back to finding love.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-brand-orange/20"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-brand-orange-light transition-all border border-brand-orange/10"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
