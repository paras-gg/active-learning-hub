import { BookOpen, Heart, Target, Users, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Tentang = () => {
  const handleWhatsApp = () => {
    const message = 'Halo Active, saya ingin mengetahui lebih lanjut tentang produk edukasi kalian.';
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              Tentang Active
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Belajar Jadi Seru,{' '}
              <span className="gradient-text">Anak Tumbuh Maju</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Active adalah penyedia produk edukasi digital berkualitas untuk anak-anak Indonesia. 
              Kami percaya bahwa belajar harus menyenangkan dan dapat dilakukan di mana saja.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Active lahir dari keresahan sederhana: bagaimana membuat anak-anak 
                  bersemangat belajar tanpa merasa terbebani? Sebagai orang tua, kami 
                  memahami tantangan ini.
                </p>
                <p>
                  Berawal dari pembuatan worksheet untuk anak sendiri, kami melihat 
                  bagaimana metode belajar yang menyenangkan dapat mengubah sikap anak 
                  terhadap pembelajaran. Dari situ, Active berkembang menjadi penyedia 
                  berbagai produk edukasi digital.
                </p>
                <p>
                  Kini, kami telah membantu ratusan keluarga Indonesia dalam perjalanan 
                  edukasi anak-anak mereka. Setiap produk kami dibuat dengan cinta dan 
                  perhatian terhadap detail.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '500+', label: 'Keluarga Terbantu', icon: Users },
                    { value: '6+', label: 'Produk Edukasi', icon: BookOpen },
                    { value: '100%', label: 'Kepuasan Pelanggan', icon: Heart },
                    { value: '24/7', label: 'Dukungan Online', icon: Star },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-card rounded-2xl p-5 text-center shadow-card">
                      <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card border border-border/50">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Visi Kami</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi partner terpercaya bagi orang tua Indonesia dalam menyediakan 
                produk edukasi yang berkualitas, terjangkau, dan menyenangkan untuk 
                mendukung tumbuh kembang anak secara optimal.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card border border-border/50">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 text-secondary-foreground flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Misi Kami</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Menciptakan produk edukasi dengan metode bermain sambil belajar
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Menyediakan materi yang sesuai dengan kurikulum dan tahap perkembangan anak
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Mendukung orang tua dalam proses pendampingan belajar di rumah
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Memberikan layanan pelanggan yang ramah dan responsif
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Nilai-Nilai Kami</h2>
            <p className="section-subtitle">
              Prinsip yang kami pegang dalam setiap produk yang kami ciptakan
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Kualitas',
                desc: 'Setiap produk dibuat dengan standar kualitas tinggi',
                emoji: '⭐'
              },
              {
                title: 'Kreativitas',
                desc: 'Pendekatan belajar yang kreatif dan inovatif',
                emoji: '🎨'
              },
              {
                title: 'Kepedulian',
                desc: 'Mengutamakan kepentingan tumbuh kembang anak',
                emoji: '💝'
              },
              {
                title: 'Kemudahan',
                desc: 'Produk yang praktis dan mudah digunakan',
                emoji: '✨'
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 text-center shadow-card border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ada Pertanyaan?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Tim kami siap membantu Anda memilih produk yang tepat untuk si kecil
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="rounded-full text-lg px-8 btn-whatsapp"
          >
            Hubungi Kami via WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
};

export default Tentang;
