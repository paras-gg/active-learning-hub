import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Lightbulb, Heart, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import { getFeaturedProducts } from '@/data/products';
import { testimonials } from '@/data/testimonials';
import heroIllustration from '@/assets/hero-illustration.jpg';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const featuredTestimonials = testimonials.slice(0, 3);

  const handleWhatsApp = () => {
    const message = 'Halo Active, saya ingin bertanya tentang produk edukasi untuk anak.';
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative py-12 md:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-current" />
                Produk Edukasi Terpercaya
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Belajar Jadi Seru,{' '}
                <span className="gradient-text">Anak Tumbuh Maju</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Ebook dan worksheet edukatif berkualitas untuk anak usia 6-8 tahun. 
                Belajar sambil bermain dengan metode yang menyenangkan!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="rounded-full text-lg px-8 shadow-button">
                  <Link to="/produk">
                    Lihat Produk
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-8"
                >
                  Konsultasi Gratis
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 justify-center lg:justify-start pt-4">
                {[
                  { value: '500+', label: 'Orang Tua Puas' },
                  { value: '6+', label: 'Produk Edukasi' },
                  { value: '100%', label: 'Digital Download' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroIllustration}
                  alt="Anak-anak belajar dengan gembira bersama Active"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl shadow-lg font-bold animate-float">
                ⭐ Belajar Seru!
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card text-foreground px-4 py-2 rounded-2xl shadow-lg font-bold animate-float" style={{ animationDelay: '1s' }}>
                📚 100+ Aktivitas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Kenapa Memilih Active?</h2>
            <p className="section-subtitle">
              Produk edukasi yang dirancang khusus untuk anak Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Metode Menyenangkan',
                description: 'Belajar tidak harus membosankan! Semua produk kami dirancang dengan pendekatan bermain sambil belajar.',
                color: 'bg-secondary/20 text-secondary-foreground'
              },
              {
                icon: BookOpen,
                title: 'Materi Berkualitas',
                description: 'Konten disusun oleh tim yang berpengalaman di bidang pendidikan anak usia dini.',
                color: 'bg-primary/10 text-primary'
              },
              {
                icon: Heart,
                title: 'Ramah Orang Tua',
                description: 'Panduan lengkap untuk orang tua dalam mendampingi proses belajar anak di rumah.',
                color: 'bg-accent/10 text-accent'
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="section-title text-left mb-4">Produk Unggulan</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Pilihan produk terbaik untuk memulai perjalanan belajar anak
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full self-start md:self-auto">
              <Link to="/produk">
                Lihat Semua
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Cara Pembelian</h2>
            <p className="section-subtitle">
              Proses mudah dan cepat untuk mendapatkan produk edukatif
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { step: '1', title: 'Pilih Produk', desc: 'Jelajahi katalog dan pilih produk yang sesuai' },
              { step: '2', title: 'Hubungi WhatsApp', desc: 'Klik tombol beli dan hubungi kami via WhatsApp' },
              { step: '3', title: 'Transfer Pembayaran', desc: 'Lakukan pembayaran ke rekening yang diberikan' },
              { step: '4', title: 'Download Produk', desc: 'Terima link download dan mulai belajar!' },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-extrabold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="section-title text-left mb-4">Kata Mereka</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Ribuan orang tua sudah merasakan manfaat produk Active
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full self-start md:self-auto">
              <Link to="/testimoni">
                Lihat Semua
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Siap Memulai Petualangan Belajar?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Dapatkan produk edukasi berkualitas untuk si kecil sekarang juga!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full text-lg px-8"
            >
              <Link to="/produk">
                Lihat Katalog Produk
              </Link>
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="rounded-full text-lg px-8 btn-whatsapp"
            >
              Chat via WhatsApp
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-primary-foreground/80">
            {[
              'Produk Digital Berkualitas',
              'Pembayaran Aman',
              'Respon Cepat',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
