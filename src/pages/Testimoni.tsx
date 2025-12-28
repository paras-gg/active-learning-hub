import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

const Testimoni = () => {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Apa Kata <span className="gradient-text">Orang Tua</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ratusan orang tua telah mempercayakan pendidikan anak mereka dengan produk Active
            </p>

            {/* Rating Summary */}
            <div className="inline-flex flex-col items-center bg-card rounded-2xl px-8 py-6 shadow-card border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl font-extrabold text-primary">{averageRating.toFixed(1)}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.round(averageRating) ? 'fill-secondary text-secondary' : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Berdasarkan {testimonials.length}+ ulasan pelanggan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Bergabunglah dengan Ratusan Orang Tua Lainnya!
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Berikan yang terbaik untuk pendidikan anak Anda dengan produk Active
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full text-lg px-8"
          >
            <a href="/produk">Lihat Produk Kami</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Testimoni;
