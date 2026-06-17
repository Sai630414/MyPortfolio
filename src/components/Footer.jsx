import { FaReact, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-muted text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Sai KondaReddy. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted">
          <span>Built with</span>
          <FaReact className="text-[#61DAFB] animate-spin-slow" />
          <span>and</span>
          <FaHeart className="text-red-500" />
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
