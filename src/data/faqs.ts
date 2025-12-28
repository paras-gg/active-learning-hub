export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'produk' | 'pembelian' | 'download' | 'lainnya';
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Produk Active berbentuk apa?',
    answer: 'Semua produk Active berbentuk digital (PDF) yang bisa langsung Anda download setelah pembelian. Untuk ebook, Anda bisa membaca langsung di HP, tablet, atau laptop. Untuk worksheet, Anda bisa mencetaknya di rumah atau di percetakan terdekat.',
    category: 'produk'
  },
  {
    id: '2',
    question: 'Bagaimana cara membeli produk Active?',
    answer: 'Caranya sangat mudah! Pilih produk yang Anda inginkan, klik tombol "Beli via WhatsApp", lalu Anda akan diarahkan ke WhatsApp kami. Tim kami akan membantu proses pembelian dan mengirimkan link download setelah pembayaran dikonfirmasi.',
    category: 'pembelian'
  },
  {
    id: '3',
    question: 'Metode pembayaran apa yang tersedia?',
    answer: 'Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BRI, BNI) dan e-wallet (GoPay, OVO, Dana, ShopeePay). Detail rekening akan diberikan saat Anda menghubungi kami via WhatsApp.',
    category: 'pembelian'
  },
  {
    id: '4',
    question: 'Berapa lama link download dikirim?',
    answer: 'Setelah pembayaran dikonfirmasi, link download akan dikirim maksimal 1x24 jam (biasanya dalam hitungan menit saja pada jam kerja). Link download berlaku selamanya dan bisa diakses kapan saja.',
    category: 'download'
  },
  {
    id: '5',
    question: 'Apakah worksheet bisa dicetak berkali-kali?',
    answer: 'Ya, tentu! Setelah membeli, Anda bebas mencetak worksheet sebanyak yang Anda butuhkan untuk anak Anda. File PDF akan tersimpan di perangkat Anda selamanya.',
    category: 'download'
  },
  {
    id: '6',
    question: 'Produk Active cocok untuk anak usia berapa?',
    answer: 'Produk kami dirancang khusus untuk anak usia 6-8 tahun atau usia persiapan dan awal Sekolah Dasar. Namun, beberapa produk seperti ide stimulasi juga cocok untuk anak yang lebih muda dengan bimbingan orang tua.',
    category: 'produk'
  },
  {
    id: '7',
    question: 'Apakah ada garansi jika produk tidak sesuai?',
    answer: 'Kepuasan Anda adalah prioritas kami. Jika ada kendala dengan produk, silakan hubungi kami via WhatsApp dan kami akan membantu menyelesaikan masalah Anda.',
    category: 'lainnya'
  },
  {
    id: '8',
    question: 'Bagaimana jika saya butuh bantuan menggunakan produk?',
    answer: 'Kami siap membantu! Hubungi kami via WhatsApp untuk konsultasi gratis seputar penggunaan produk atau tips belajar untuk anak Anda.',
    category: 'lainnya'
  }
];
