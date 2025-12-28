import ebookStimulasiImg from '@/assets/ebook-stimulasi.jpg';
import ebookPersiapanSDImg from '@/assets/ebook-persiapan-sd.jpg';
import worksheetMembacaImg from '@/assets/worksheet-membaca.jpg';
import worksheetMenulisImg from '@/assets/worksheet-menulis.jpg';
import worksheetBerhitungImg from '@/assets/worksheet-berhitung.jpg';
import bundelCalistungImg from '@/assets/bundel-calistung.jpg';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  category: 'ebook' | 'worksheet';
  ageRange: string;
  pages: number;
  benefits: string[];
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Ebook 100+ Ide Stimulasi Anak',
    slug: 'ebook-ide-stimulasi-anak',
    description: 'Kumpulan lengkap 100+ ide kegiatan stimulasi untuk mengembangkan kreativitas, motorik halus, dan kemampuan kognitif anak. Setiap aktivitas dilengkapi dengan langkah-langkah mudah diikuti dan bahan-bahan yang mudah ditemukan di rumah.',
    shortDescription: 'Kumpulan 100+ ide kegiatan stimulasi untuk perkembangan optimal anak.',
    price: 79000,
    originalPrice: 129000,
    category: 'ebook',
    ageRange: '6-8 tahun',
    pages: 85,
    benefits: [
      'Meningkatkan kreativitas anak',
      'Mengembangkan motorik halus',
      'Memperkuat ikatan orang tua-anak',
      'Aktivitas mudah dilakukan di rumah',
      'Bahan-bahan terjangkau'
    ],
    image: ebookStimulasiImg,
    featured: true
  },
  {
    id: '2',
    name: 'Ebook Persiapan Masuk SD',
    slug: 'ebook-persiapan-masuk-sd',
    description: 'Panduan lengkap untuk mempersiapkan anak masuk SD dengan percaya diri. Mencakup materi pra-membaca, pra-menulis, konsep matematika dasar, dan tips membangun kemandirian anak.',
    shortDescription: 'Panduan lengkap persiapan anak untuk masuk Sekolah Dasar.',
    price: 89000,
    originalPrice: 149000,
    category: 'ebook',
    ageRange: '5-7 tahun',
    pages: 120,
    benefits: [
      'Anak siap secara akademis',
      'Membangun kepercayaan diri',
      'Mengembangkan kemandirian',
      'Materi sesuai kurikulum',
      'Tips untuk orang tua'
    ],
    image: ebookPersiapanSDImg,
    featured: true
  },
  {
    id: '3',
    name: 'Worksheet Belajar Membaca',
    slug: 'worksheet-belajar-membaca',
    description: 'Kumpulan worksheet printable untuk belajar membaca dengan metode yang menyenangkan. Dilengkapi dengan gambar-gambar lucu dan aktivitas interaktif yang membuat anak semangat belajar.',
    shortDescription: 'Worksheet printable belajar membaca dengan cara yang menyenangkan.',
    price: 49000,
    originalPrice: 79000,
    category: 'worksheet',
    ageRange: '6-8 tahun',
    pages: 50,
    benefits: [
      'Metode belajar menyenangkan',
      'Gambar-gambar menarik',
      'Progres bertahap',
      'Bisa dicetak berkali-kali',
      'Cocok untuk homeschooling'
    ],
    image: worksheetMembacaImg,
    featured: true
  },
  {
    id: '4',
    name: 'Worksheet Belajar Menulis',
    slug: 'worksheet-belajar-menulis',
    description: 'Latihan menulis huruf dan kata dengan metode tracing yang efektif. Membantu anak mengembangkan motorik halus dan keterampilan menulis dengan rapi.',
    shortDescription: 'Worksheet latihan menulis huruf dan kata untuk pemula.',
    price: 49000,
    originalPrice: 79000,
    category: 'worksheet',
    ageRange: '6-8 tahun',
    pages: 45,
    benefits: [
      'Melatih motorik halus',
      'Metode tracing efektif',
      'Huruf besar dan kecil',
      'Latihan kata sederhana',
      'Kualitas cetak tinggi'
    ],
    image: worksheetMenulisImg
  },
  {
    id: '5',
    name: 'Worksheet Belajar Berhitung',
    slug: 'worksheet-belajar-berhitung',
    description: 'Worksheet matematika dasar yang mengajarkan konsep angka, penjumlahan, dan pengurangan dengan cara yang visual dan interaktif.',
    shortDescription: 'Worksheet berhitung dasar dengan metode visual dan interaktif.',
    price: 49000,
    originalPrice: 79000,
    category: 'worksheet',
    ageRange: '6-8 tahun',
    pages: 55,
    benefits: [
      'Konsep angka 1-100',
      'Penjumlahan dasar',
      'Pengurangan dasar',
      'Aktivitas counting',
      'Gambar-gambar edukatif'
    ],
    image: worksheetBerhitungImg
  },
  {
    id: '6',
    name: 'Bundel Lengkap Worksheet Calistung',
    slug: 'bundel-worksheet-calistung',
    description: 'Paket hemat berisi worksheet membaca, menulis, dan berhitung dalam satu bundel. Solusi lengkap untuk pembelajaran calistung di rumah.',
    shortDescription: 'Paket hemat worksheet membaca, menulis, dan berhitung.',
    price: 129000,
    originalPrice: 237000,
    category: 'worksheet',
    ageRange: '6-8 tahun',
    pages: 150,
    benefits: [
      'Hemat lebih dari 45%',
      'Paket lengkap calistung',
      'Materi terstruktur',
      'Cocok untuk semua level',
      'Bonus tracking progress'
    ],
    image: bundelCalistungImg,
    featured: true
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
