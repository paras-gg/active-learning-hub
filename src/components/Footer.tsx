import { Link } from 'react-router-dom';
import { BookOpen, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold">Active</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Belajar Jadi Seru, Anak Tumbuh Maju. Menyediakan produk edukasi digital berkualitas untuk anak usia 6-8 tahun.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/active.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Menu</h4>
            <ul className="space-y-3">
              {[
                { name: 'Beranda', path: '/' },
                { name: 'Tentang Kami', path: '/tentang' },
                { name: 'Produk', path: '/produk' },
                { name: 'Testimoni', path: '/testimoni' },
                { name: 'FAQ', path: '/faq' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Produk</h4>
            <ul className="space-y-3">
              {[
                'Ebook Stimulasi Anak',
                'Ebook Persiapan SD',
                'Worksheet Membaca',
                'Worksheet Menulis',
                'Worksheet Berhitung',
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/produk"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70">WhatsApp</p>
                  <a
                    href="https://wa.me/6281234567890"
                    className="text-sm font-semibold hover:text-primary transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Email</p>
                  <a
                    href="mailto:hello@active.edu"
                    className="text-sm font-semibold hover:text-primary transition-colors"
                  >
                    hello@active.edu
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Lokasi</p>
                  <p className="text-sm font-semibold">Jakarta, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Active. Semua hak dilindungi.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Dibuat dengan ❤️ untuk pendidikan anak Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
