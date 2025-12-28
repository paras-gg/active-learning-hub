import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check, Download, FileText, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductBySlug, formatPrice, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { testimonials } from '@/data/testimonials';

const ProdukDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addToCart, isInCart } = useCart();

  if (!product) {
    return <Navigate to="/produk" replace />;
  }

  const inCart = isInCart(product.id);
  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
  const productTestimonials = testimonials.filter(t => t.product.toLowerCase().includes(product.category)).slice(0, 2);

  const handleBuyWhatsApp = () => {
    const message = `Halo Active, saya ingin membeli:\n\n*${product.name}*\nHarga: ${formatPrice(product.price)}\n\nMohon informasi pembayaran selanjutnya.`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Beranda</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/produk" className="text-muted-foreground hover:text-foreground">Produk</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium truncate">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container">
          <Button asChild variant="ghost" className="mb-6 -ml-4 rounded-full">
            <Link to="/produk">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Katalog
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="rounded-3xl overflow-hidden bg-muted shadow-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto"
                  />
                </div>
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    HEMAT {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {product.category === 'ebook' ? '📘 EBOOK' : '📄 WORKSHEET'}
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Usia {product.ageRange}</span>
                </div>
                <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>{product.pages} halaman</span>
                </div>
                <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm">
                  <Download className="w-4 h-4 text-primary" />
                  <span>Digital (PDF)</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-muted/50 rounded-2xl p-6 mb-6">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-extrabold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleBuyWhatsApp}
                    size="lg"
                    className="flex-1 rounded-full btn-whatsapp text-base"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Beli Sekarang via WhatsApp
                  </Button>
                  <Button
                    onClick={() => addToCart(product)}
                    size="lg"
                    variant="outline"
                    className="rounded-full"
                    disabled={inCart}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {inCart ? 'Di Keranjang' : 'Tambah ke Keranjang'}
                  </Button>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-foreground mb-4">Manfaat Produk</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-success/10 text-success flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  <span>Kualitas Terjamin</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📥</span>
                  <span>Akses Selamanya</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">💬</span>
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials for this product */}
      {productTestimonials.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
              Apa Kata Pembeli
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {productTestimonials.map((t) => (
                <div key={t.id} className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < t.rating ? 'text-secondary' : 'text-muted'}>★</span>
                    ))}
                  </div>
                  <p className="text-foreground mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
              Produk Serupa
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Ada Pertanyaan Tentang Produk Ini?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Tim kami siap membantu menjawab pertanyaan Anda tentang produk ini
          </p>
          <Button
            onClick={() => {
              const message = `Halo Active, saya ingin bertanya tentang produk "${product.name}".`;
              window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
            }}
            size="lg"
            className="rounded-full btn-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Tanya via WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProdukDetail;
