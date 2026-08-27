/**
 * Tokuri Kue Kering — Product, Nav, Review & Quiz Data
 * ====================================================
 * Single source of truth for the entire website.
 */

export const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang-kami' },
  { label: 'Produk', path: '/produk' },
  { label: 'Reseller', path: '/reseller' },
  { label: 'Kontak', path: '/kontak' },
];

export const products = [
  {
    id: 'nastar',
    name: 'Nastar Klasik Wijsman',
    category: 'Klasik',
    tagline: 'Kelezatan Nanas Pilihan',
    description: 'Perpaduan kulit kue lembut lumer beraroma butter Wijsman murni dengan isian selai nanas asli buatan sendiri yang manis dan legit seimbang.',
    weight: '350g / 500g',
    priceEstimate: {
      '350g': 85000,
      '500g': 115000,
    },
    tasteProfile: {
      manis: 4,
      butter: 5,
      gurih: 2,
      renyah: 3,
    },
    tasteTags: ['Manis Legit', 'Lumer di Mulut', 'Butter Harum'],
    bestFor: ['Hari Raya', 'Hadiah Mertua', 'Teman Ngeteh'],
    ingredients: 'Butter Wijsman, Mentega Pilihan, Tepung Terigu Sangrai, Kuning Telur Segar, Selai Nanas Madu Asli, Cengkeh Harum',
    storageInfo: 'Simpan di suhu ruang dalam toples tertutup rapat. Tahan hingga 4–6 bulan tanpa pengawet.',
    image: '/images/nastar.jpg',
    featured: true,
    badge: 'Paling Laris',
  },
  {
    id: 'kastengel',
    name: 'Kastengel Keju Edam Tua',
    category: 'Keju',
    tagline: 'Gurih Keju Edam & Cheddar',
    description: 'Gurih mantap dan renyah di mulut. Dibuat dengan parutan keju Edam Belanda tua asli dan Cheddar pilihan yang dipanggang hingga cokelat keemasan.',
    weight: '350g / 500g',
    priceEstimate: {
      '350g': 90000,
      '500g': 125000,
    },
    tasteProfile: {
      manis: 1,
      butter: 4,
      gurih: 5,
      renyah: 5,
    },
    tasteTags: ['Gurih Renyah', 'Double Cheese', 'Tanpa Pemanis'],
    bestFor: ['Pecinta Keju', 'Teman Ngopi', 'Bingkisan Eksklusif'],
    ingredients: 'Keju Edam Tua (Aged Edam), Keju Cheddar Kraft, Butter Premium, Kuning Telur, Tepung Terigu Rendah Protein',
    storageInfo: 'Jauhkan dari sinar matahari langsung dan kelembaban. Tahan 3–5 bulan dalam segel rapat.',
    image: '/images/kastengel.jpg',
    featured: true,
    badge: 'Favorit Gurih',
  },
  {
    id: 'semprit',
    name: 'Semprit Bunga Butter',
    category: 'Klasik',
    tagline: 'Renyah & Lumer di Lidah',
    description: 'Bentuk mawar klasik dengan sensasi renyah lembut yang langsung lumer saat menyentuh lidah, meninggalkan aroma mentega susu yang khas.',
    weight: '300g / 450g',
    priceEstimate: {
      '300g': 70000,
      '450g': 95000,
    },
    tasteProfile: {
      manis: 3,
      butter: 5,
      gurih: 2,
      renyah: 4,
    },
    tasteTags: ['Lumer Lembut', 'Aroma Susu', 'Nostalgia Rasa'],
    bestFor: ['Camilan Keluarga', 'Suguhan Meja Tamu', 'Anak-Anak'],
    ingredients: 'Mentega Wijsman Blend, Tepung Maizena Pilihan, Susu Bubuk Full Cream, Gula Halus, Choco Chip Center',
    storageInfo: 'Pastikan toples tertutup kedap udara setelah dibuka. Tahan 4–6 bulan.',
    image: '/images/semprit.jpg',
    featured: true,
    badge: 'Nostalgia Klasik',
  },
  {
    id: 'choco-chip',
    name: 'Dark Choco Chip Cookies',
    category: 'Cokelat',
    tagline: 'Sensasi Cokelat Melimpah',
    description: 'Perpaduan dark chocolate couverture murni dan choco chips melimpah di setiap gigitan dengan sentuhan gurih sea salt yang menyempurnakan rasa.',
    weight: '350g / 500g',
    priceEstimate: {
      '350g': 75000,
      '500g': 105000,
    },
    tasteProfile: {
      manis: 3,
      butter: 4,
      gurih: 2,
      renyah: 5,
    },
    tasteTags: ['Dark Chocolate', 'Crunchy Bite', 'Rich Cocoa'],
    bestFor: ['Pecinta Cokelat', 'Teman Ngopi Hitam', 'Kado Sahabat'],
    ingredients: 'Dark Chocolate Chips 54%, Bubuk Kakao Murni, Mentega Berkualitas, Gula Palem Alami, Garam Laut Alami',
    storageInfo: 'Simpan di tempat sejuk agar cokelat tidak meleleh. Tahan 4–6 bulan.',
    image: '/images/choco-chip.jpg',
    featured: true,
    badge: 'Cokelat Intens',
  },
  {
    id: 'matcha-cookies',
    name: 'Matcha Uji White Choco',
    category: 'Spesial',
    tagline: 'Aroma Autentik Green Tea',
    description: 'Menggunakan bubuk matcha Uji asli Jepang beraroma harum teh hijau earthy yang berpadu seimbang dengan potongan white chocolate manis lembut.',
    weight: '300g / 450g',
    priceEstimate: {
      '300g': 85000,
      '450g': 115000,
    },
    tasteProfile: {
      manis: 3,
      butter: 4,
      gurih: 1,
      renyah: 4,
    },
    tasteTags: ['Uji Matcha Asli', 'White Choco Chunk', 'Modern Artisan'],
    bestFor: ['Pecinta Matcha', 'Koleksi Eksklusif', 'Hampers Spesial'],
    ingredients: 'Pure Uji Matcha Powder Jepang, White Chocolate Belgian Chunks, Butter Pilihan, Tepung Terigu, Gula Halus',
    storageInfo: 'Simpan rapat di tempat gelap dan sejuk agar warna hijau alami tidak pudar. Tahan 3–5 bulan.',
    image: '/images/matcha-cookies.jpg',
    featured: false,
    badge: 'Varian Eksklusif',
  },
];

export const categories = ['Semua', 'Klasik', 'Keju', 'Cokelat', 'Spesial'];

export const occasions = [
  {
    id: 'camilan',
    label: 'Camilan di Rumah',
    desc: 'Teman minum teh sore dan kopi santai bersama keluarga tercinta.',
    image: '/images/occasions/camilan.jpg',
    recommended: ['semprit', 'choco-chip'],
  },
  {
    id: 'hampers',
    label: 'Hampers & Gift Box',
    desc: 'Bingkisan manis berhias pita eksklusif untuk hari raya dan perayaan istimewa.',
    image: '/images/occasions/hampers.jpg',
    recommended: ['nastar', 'kastengel', 'matcha-cookies'],
  },
  {
    id: 'parcel',
    label: 'Parcel Korporat',
    desc: 'Kemasan mewah premium untuk relasi bisnis, rekan kantor, dan kolega penting.',
    image: '/images/occasions/parcel.jpg',
    recommended: ['kastengel', 'nastar', 'choco-chip'],
  },
  {
    id: 'souvenir',
    label: 'Souvenir Pernikahan & Acara',
    desc: 'Cinderamata istimewa toples mini yang berkesan untuk tamu undangan.',
    image: '/images/occasions/souvenir.jpg',
    recommended: ['nastar', 'semprit'],
  },
  {
    id: 'oleh-oleh',
    label: 'Oleh-oleh Khas Surabaya',
    desc: 'Buah tangan otentik dengan cita rasa kue rumahan yang selalu dirindukan.',
    image: '/images/occasions/oleh-oleh.jpg',
    recommended: ['kastengel', 'nastar'],
  },
  {
    id: 'reseller',
    label: 'Kemitraan Reseller',
    desc: 'Peluang usaha menguntungkan dengan produk repeat order tinggi dan materi siap pakai.',
    image: '/images/occasions/reseller.jpg',
    recommended: ['nastar', 'kastengel', 'semprit', 'choco-chip'],
  },
];

export const customerReviews = [
  {
    id: 1,
    name: 'Ibu Ratna Dewi',
    role: 'Ibu Rumah Tangga',
    city: 'Surabaya Barat',
    avatarText: 'RD',
    rating: 5,
    product: 'Nastar Klasik Wijsman',
    review: 'Nastar Tokuri beneran lumer di mulut dan selai nanasnya nggak pelit sama sekali! Manis asemnya pas banget, anak-anak sama mertua suka sekali. Pasti repeat order buat Lebaran nanti.',
    date: '12 Feb 2026',
  },
  {
    id: 2,
    name: 'Bpk. Hendra Wijaya',
    role: 'Mitra Reseller Tokuri',
    city: 'Sidoarjo',
    avatarText: 'HW',
    rating: 5,
    product: 'Paket Reseller 24 Toples',
    review: 'Awalnya coba ambil 1 lusin untuk ditawarkan ke teman kantor, ternyata 2 hari langsung habis! Kemasannya rapi, fotonya estetik jadi gampang banget jualnya. Margin keuntungannya sangat sehat.',
    date: '28 Jan 2026',
  },
  {
    id: 3,
    name: 'dr. Farah Anggraini',
    role: 'Pecinta Keju & Pelanggan Setia',
    city: 'Surabaya Timur',
    avatarText: 'FA',
    rating: 5,
    product: 'Kastengel Keju Edam',
    review: 'Kastengel paling otentik yang pernah saya coba. Terasa banget kejunya melimpah dan tidak pakai pengawet aneh-aneh. Renyahnya awet walau sudah dibuka berminggu-minggu.',
    date: '05 Feb 2026',
  },
  {
    id: 4,
    name: 'Clara Michelle',
    role: 'Creative Director',
    city: 'Jakarta Selatan',
    avatarText: 'CM',
    rating: 5,
    product: 'Custom Hampers 3 Toples',
    review: 'Pesan hampers Tokuri untuk dikirim ke klien di Jakarta via Paxel, packingnya luar biasa aman tanpa ada kue yang hancur. Kotaknya cantik banget dengan kartu ucapan rapi.',
    date: '18 Feb 2026',
  },
];

export const resellerBenefits = [
  {
    number: '01',
    title: 'Margin Profit 25% – 35%',
    description: 'Skema harga bertingkat dengan keuntungan bersih yang sangat menarik untuk mempercepat perputaran modal usaha Anda.',
  },
  {
    number: '02',
    title: 'Produk Laris & Cepat Habis',
    description: 'Rasa yang disukai segala usia dari anak-anak hingga orang tua dengan kemasan toples elegan yang memikat pandangan pertama.',
  },
  {
    number: '03',
    title: 'Kualitas Rasa Terjamin Murni',
    description: 'Dibuat dengan butter pilihan dan higienis, menghasilkan tingkat repeat order yang tinggi dari konsumen Anda.',
  },
  {
    number: '04',
    title: 'Bank Konten & Materi Promosi Siap Pakai',
    description: 'Dapatkan akses ke ratusan foto studio berkualitas tinggi, video baking, copy text promosi WhatsApp, dan panduan jualan.',
  },
];

export const resellerSteps = [
  {
    step: '1',
    title: 'Pendaftaran WhatsApp',
    desc: 'Isi formulir atau chat admin Tokuri untuk mendapatkan katalog harga grosir khusus mitra.',
  },
  {
    step: '2',
    title: 'Pilih Paket & Varian',
    desc: 'Tentukan jumlah toples (mulai dari 1 lusin) dengan varian rasa yang bebas Anda kombinasikan.',
  },
  {
    step: '3',
    title: 'Produksi Fresh & Pengiriman',
    desc: 'Kue dipanggang fresh sesuai pesanan dan dikirim dengan packing ekstra aman ke alamat Anda.',
  },
  {
    step: '4',
    title: 'Mulai Jual & Nikmati Profit',
    desc: 'Gunakan materi promosi resmi Tokuri dan raih keuntungan berulang setiap minggunya.',
  },
];

export const resellerFaqs = [
  {
    q: 'Berapa minimal pemesanan untuk menjadi reseller pertama kali?',
    a: 'Minimal order pertama sangat bersahabat, mulai dari 1 lusin (12 toples) dengan varian rasa yang dapat dimix sesuai keinginan Anda.',
  },
  {
    q: 'Apakah Tokuri mendukung sistem dropship langsung ke pembeli saya?',
    a: 'Ya, kami melayani pengiriman dropship ke seluruh Indonesia dengan nama pengirim atas nama toko Anda, tanpa mencantumkan label harga.',
  },
  {
    q: 'Berapa lama masa simpan / ketahanan kue kering Tokuri?',
    a: 'Kue kering Tokuri bertahan 3 hingga 6 bulan di suhu ruangan dalam toples tersegel rapat, dibuat alami tanpa bahan pengawet sintesis berbahaya.',
  },
  {
    q: 'Bagaimana keamanan pengiriman ke luar kota Surabaya?',
    a: 'Setiap toples kami proteksi dengan toples bersegel, inner seal, bubble wrap berlapis per toples, serta kardus tebal khusus ekspedisi (Paxel / JNE / SiCepat). Tingkat keamanan mencapai 99%.',
  },
  {
    q: 'Apakah reseller mendapatkan foto produk tanpa watermark untuk promosi?',
    a: 'Ya! Semua mitra reseller resmi Tokuri akan diberikan akses Google Drive berisi bank foto studio resolusi tinggi, video reels/shorts, dan template caption jualan.',
  },
];

export const contact = {
  whatsapp: {
    number: '+62 812-3456-7890',
    url: 'https://wa.me/6281234567890?text=Halo%20Tokuri%2C%20saya%20ingin%20memesan%20kue%20kering%20homemade%20Tokuri.',
    resellerUrl: 'https://wa.me/6281234567890?text=Halo%20Tim%20Tokuri%2C%20saya%20tertarik%20mendaftar%20menjadi%20Reseller%20Tokuri.',
  },
  instagram: {
    handle: '@tokuri.kuekering',
    url: 'https://instagram.com',
  },
  line: {
    id: '@tokuri',
    url: 'https://line.me',
  },
  location: 'Surabaya, Jawa Timur, Indonesia',
  hours: 'Senin – Sabtu: 08.00 – 17.00 WIB',
};
