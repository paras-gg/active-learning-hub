import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/data/faqs';

const FAQ = () => {
  const categories = [
    { id: 'produk', label: 'Produk' },
    { id: 'pembelian', label: 'Pembelian' },
    { id: 'download', label: 'Download' },
    { id: 'lainnya', label: 'Lainnya' },
  ];

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" />
              Pertanyaan Umum
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang produk dan layanan kami
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {categories.map((category) => {
              const categoryFaqs = faqs.filter(f => f.category === category.id);
              if (categoryFaqs.length === 0) return null;

              return (
                <div key={category.id} className="mb-10">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {category.label}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {categoryFaqs.map((faq) => (
                      <AccordionItem
                        key={faq.id}
                        value={faq.id}
                        className="bg-card rounded-xl border border-border/50 px-5 shadow-sm data-[state=open]:shadow-card"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-card rounded-3xl p-8 md:p-10 text-center shadow-card border border-border/50">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-foreground mb-3">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-muted-foreground mb-6">
              Jangan ragu untuk menghubungi kami. Tim kami siap membantu menjawab pertanyaan Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const message = 'Halo Active, saya ada pertanyaan tentang produk kalian.';
                  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="rounded-full btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat via WhatsApp
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/kontak">Halaman Kontak</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
