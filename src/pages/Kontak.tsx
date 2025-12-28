import { MessageCircle, Mail, Phone, Clock, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Kontak = () => {
  const handleWhatsApp = (message?: string) => {
    const defaultMessage = 'Halo Active, saya ingin bertanya tentang produk edukasi untuk anak.';
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message || defaultMessage)}`, '_blank');
  };

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Hubungi <span className="gradient-text">Kami</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Cara tercepat untuk menghubungi kami</p>
              <Button
                onClick={() => handleWhatsApp()}
                className="w-full rounded-full btn-whatsapp"
              >
                Chat Sekarang
              </Button>
            </div>

            {/* Email */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Untuk pertanyaan detail</p>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full"
              >
                <a href="mailto:hello@active.edu">
                  hello@active.edu
                </a>
              </Button>
            </div>

            {/* Phone */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 text-secondary-foreground flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Telepon</h3>
              <p className="text-muted-foreground mb-4">Hubungi langsung via telepon</p>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full"
              >
                <a href="tel:+6281234567890">
                  +62 812-3456-7890
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8 text-center">
                Cara Pemesanan
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary" />
                    Langkah Pemesanan
                  </h3>
                  <ol className="space-y-4">
                    {[
                      'Pilih produk yang Anda inginkan dari katalog',
                      'Klik tombol "Beli via WhatsApp"',
                      'Konfirmasi pesanan dengan tim kami',
                      'Lakukan pembayaran ke rekening yang diberikan',
                      'Kirim bukti transfer via WhatsApp',
                      'Terima link download dalam hitungan menit',
                    ].map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="space-y-6">
                  {/* Jam Operasional */}
                  <div className="bg-muted/50 rounded-2xl p-5">
                    <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Jam Operasional
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="flex justify-between">
                        <span>Senin - Jumat</span>
                        <span className="font-semibold text-foreground">08:00 - 21:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Sabtu</span>
                        <span className="font-semibold text-foreground">09:00 - 17:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Minggu</span>
                        <span className="font-semibold text-foreground">10:00 - 15:00</span>
                      </p>
                    </div>
                  </div>

                  {/* Lokasi */}
                  <div className="bg-muted/50 rounded-2xl p-5">
                    <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Lokasi
                    </h3>
                    <p className="text-muted-foreground">
                      Jakarta, Indonesia<br />
                      <span className="text-sm">(Produk digital - tidak ada toko fisik)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Siap Memulai?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Hubungi kami sekarang dan dapatkan produk edukasi terbaik untuk anak Anda!
          </p>
          <Button
            onClick={() => handleWhatsApp()}
            size="lg"
            className="rounded-full text-lg px-8 btn-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat via WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
};

export default Kontak;
