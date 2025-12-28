import { Star } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg transition-shadow">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'fill-secondary text-secondary'
                : 'fill-muted text-muted'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-lg font-bold text-primary">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-bold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.location} • Anak usia {testimonial.childAge}
          </p>
        </div>
      </div>

      {/* Product Badge */}
      <div className="mt-4 pt-4 border-t border-border">
        <span className="text-xs bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">
          {testimonial.product}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
