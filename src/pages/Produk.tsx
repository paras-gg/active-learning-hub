import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Produk = () => {
  const [filter, setFilter] = useState<'all' | 'ebook' | 'worksheet'>('all');

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Katalog <span className="gradient-text">Produk</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Temukan produk edukasi terbaik untuk mendukung perjalanan belajar anak Anda
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          {/* Filter */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter:</span>
            {[
              { value: 'all', label: 'Semua Produk' },
              { value: 'ebook', label: 'Ebook' },
              { value: 'worksheet', label: 'Worksheet' },
            ].map((f) => (
              <Button
                key={f.value}
                variant={filter === f.value ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
                onClick={() => setFilter(f.value as typeof filter)}
              >
                {f.label}
              </Button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada produk ditemukan</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                  Butuh Bantuan Memilih?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Tidak yakin produk mana yang cocok untuk anak Anda? Tim kami siap membantu 
                  memberikan rekomendasi berdasarkan usia dan kebutuhan belajar anak.
                </p>
                <Button
                  className="rounded-full btn-whatsapp"
                  onClick={() => {
                    const message = 'Halo Active, saya butuh bantuan untuk memilih produk yang cocok untuk anak saya.';
                    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Konsultasi Gratis via WhatsApp
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: '📚', text: 'Ebook interaktif dengan gambar menarik' },
                  { emoji: '✏️', text: 'Worksheet bisa dicetak berkali-kali' },
                  { emoji: '💡', text: 'Metode belajar menyenangkan' },
                  { emoji: '📱', text: 'Akses digital selamanya' },
                ].map((item) => (
                  <div key={item.text} className="bg-muted/50 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">{item.emoji}</div>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Produk;
