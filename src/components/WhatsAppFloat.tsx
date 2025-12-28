import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleClick = () => {
    const message = 'Halo Active, saya ingin bertanya tentang produk edukasi untuk anak.';
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-primary-foreground text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat via WhatsApp
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </button>
  );
};

export default WhatsAppFloat;
