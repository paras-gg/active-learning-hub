export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  text: string;
  product: string;
  childAge: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ibu Sarah',
    location: 'Jakarta',
    rating: 5,
    text: 'Anak saya jadi lebih semangat belajar! Worksheetnya colorful dan menarik. Sekarang belajar membaca sudah tidak perlu dipaksa lagi.',
    product: 'Worksheet Belajar Membaca',
    childAge: '6 tahun'
  },
  {
    id: '2',
    name: 'Ibu Dewi',
    location: 'Bandung',
    rating: 5,
    text: 'Ebook persiapan SD-nya sangat lengkap! Anak saya jadi lebih siap dan percaya diri saat tes masuk SD. Terima kasih Active!',
    product: 'Ebook Persiapan Masuk SD',
    childAge: '7 tahun'
  },
  {
    id: '3',
    name: 'Ibu Rina',
    location: 'Surabaya',
    rating: 5,
    text: 'Ide-ide stimulasinya kreatif banget dan gampang diikuti. Sekarang quality time sama anak jadi lebih bermakna.',
    product: 'Ebook 100+ Ide Stimulasi Anak',
    childAge: '6 tahun'
  },
  {
    id: '4',
    name: 'Ibu Mega',
    location: 'Yogyakarta',
    rating: 5,
    text: 'Bundel worksheetnya worth it banget! Harga terjangkau tapi materinya lengkap. Anak bisa belajar calistung dengan menyenangkan.',
    product: 'Bundel Lengkap Worksheet Calistung',
    childAge: '7 tahun'
  },
  {
    id: '5',
    name: 'Ibu Anita',
    location: 'Semarang',
    rating: 5,
    text: 'Worksheet berhitungnya bagus! Konsep angka diajarkan dengan visual yang menarik. Anak saya jadi suka matematika.',
    product: 'Worksheet Belajar Berhitung',
    childAge: '6 tahun'
  },
  {
    id: '6',
    name: 'Ibu Lisa',
    location: 'Medan',
    rating: 5,
    text: 'Responnya cepat, produknya berkualitas. Sangat recommended untuk para orang tua yang ingin mengajar anak di rumah!',
    product: 'Worksheet Belajar Menulis',
    childAge: '8 tahun'
  }
];
