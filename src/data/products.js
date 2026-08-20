/**
 * Tokuri Kue Kering — Product, Nav & Contact Data
 * ============================================
 * Single source of truth for all pages and components.
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
    name: 'Nastar',
    category: 'Klasik',
    tagline: 'Kelezatan Nanas Pilihan',
    description: 'Perpaduan kue lembut dengan isian selai nanas premium buatan sendiri yang manis dan legit seimbang.',
    weight: '350g / 500g',
    ingredients: 'Butter Wijsman, Tepung Terigu Pilihan, Telur Segar, Selai Nanas Asli',
    image: '/images/nastar.jpg',
    featured: true,
    price: null,
  },
  {
    id: 'semprit',
    name: 'Semprit',
    category: 'Klasik',
    tagline: 'Renyah & Lumer di Lidah',
    description: 'Renyah di mulut dengan rasa butter yang lembut dan aroma wangi khas kue kering legendaris.',
    weight: '300g / 450g',
    ingredients: 'Butter Premium, Tepung Maizena Pilihan, Susu, Gula Halus',
    image: '/images/semprit.jpg',
    featured: true,
    price: null,
  },
  {
    id: 'choco-chip',
    name: 'Choco Chip',
    category: 'Cokelat',
    tagline: 'Sensasi Cokelat Melimpah',
    description: 'Perpaduan cokelat lezat dalam setiap gigitan renyah dengan butiran chocolate chip berkualitas tinggi.',
    weight: '350g / 500g',
    ingredients: 'Dark Chocolate Chips, Kakao Asli, Butter, Tepung Terigu',
    image: '/images/choco-chip.jpg',
    featured: true,
    price: null,
  },
  {
    id: 'kastengel',
    name: 'Kastengel',
    category: 'Keju',
    tagline: 'Gurih Keju Edam & Cheddar',
    description: 'Gurih dan keju, selalu menjadi favorit semua. Dibuat dengan taburan keju melimpah yang dipanggang keemasan.',
    weight: '350g / 500g',
    ingredients: 'Keju Edam Tua, Keju Cheddar, Butter Pilihan, Kuning Telur',
    image: '/images/kastengel.jpg',
    featured: true,
    price: null,
  },
  {
    id: 'matcha-cookies',
    name: 'Matcha Cookies',
    category: 'Spesial',
    tagline: 'Aroma Autentik Green Tea',
    description: 'Perpaduan unik matcha Jepang berkualitas dan rasa manis yang pas, memberikan sensasi rasa modern yang menenangkan.',
    weight: '300g / 450g',
    ingredients: 'Pure Uji Matcha Powder, White Chocolate Chunks, Butter, Tepung',
    image: '/images/matcha-cookies.jpg',
    featured: false,
    price: null,
  },
];

export const categories = ['Semua', 'Klasik', 'Natural', 'Cokelat', 'Keju', 'Spesial'];

export const occasions = [
  { id: 'camilan', label: 'Camilan di Rumah', desc: 'Teman minum teh dan kopi santai bersama keluarga tercinta.', image: '/images/occasions/camilan.jpg' },
  { id: 'hampers', label: 'Hampers', desc: 'Bingkisan manis dan elegan untuk hari raya dan momen spesial.', image: '/images/occasions/hampers.jpg' },
  { id: 'parcel', label: 'Parcel', desc: 'Kemasan eksklusif untuk relasi bisnis, rekan kantor, dan kolega.', image: '/images/occasions/parcel.jpg' },
  { id: 'souvenir', label: 'Souvenir', desc: 'Cinderamata istimewa untuk pernikahan, ulang tahun, dan gathering.', image: '/images/occasions/souvenir.jpg' },
  { id: 'oleh-oleh', label: 'Oleh-oleh', desc: 'Buah tangan khas cita rasa rumahan dari Surabaya.', image: '/images/occasions/oleh-oleh.jpg' },
  { id: 'reseller', label: 'Reseller', desc: 'Peluang usaha menguntungkan dengan produk yang dicintai pasar.', image: '/images/occasions/reseller.jpg' },
];

export const resellerBenefits = [
  {
    number: '01',
    title: 'Margin Menguntungkan',
    description: 'Skema harga bertingkat dengan margin profit yang sangat menarik untuk memaksimalkan keuntungan Anda.',
  },
  {
    number: '02',
    title: 'Produk Mudah Dijual',
    description: 'Rasa yang disukai segala usia dengan kemasan elegan yang memikat pandangan pertama konsumen.',
  },
  {
    number: '03',
    title: 'Bahan Baku Pilihan',
    description: 'Kualitas rasa yang konsisten dan higienis membuat pelanggan melakukan repeat order secara rutin.',
  },
  {
    number: '04',
    title: 'Materi Pemasaran Siap Pakai',
    description: 'Dapatkan aset foto produk beresolusi tinggi, copywriting, dan panduan promosi untuk memudahkan penjualan Anda.',
  },
];

export const resellerSteps = [
  {
    step: '1',
    title: 'Hubungi Kami',
    desc: 'Kirim pesan pendaftaran melalui WhatsApp resmi Tokuri.',
  },
  {
    step: '2',
    title: 'Pilih Paket Kemitraan',
    desc: 'Tentukan kuantiti awal sesuai dengan target dan modal Anda.',
  },
  {
    step: '3',
    title: 'Terima Produk & Materi',
    desc: 'Kue kering dikirim dalam kondisi segar beserta materi promosi.',
  },
  {
    step: '4',
    title: 'Mulai Menghasilkan',
    desc: 'Pasarkan ke jaringan Anda dan nikmati keuntungan berulang.',
  },
];

export const resellerFaqs = [
  {
    q: 'Berapa minimal order untuk menjadi reseller?',
    a: 'Minimal order pertama sangat bersahabat, mulai dari 1 lusin (12 toples) dengan varian rasa yang dapat dicampur.',
  },
  {
    q: 'Apakah bisa menggunakan sistem dropship?',
    a: 'Ya, kami mendukung pengiriman dropship langsung ke pelanggan Anda dengan kemasan aman dan tanpa label harga.',
  },
  {
    q: 'Berapa lama daya tahan kue kering Tokuri?',
    a: 'Kue kering Tokuri bertahan 3 hingga 6 bulan di suhu ruangan tertutup rapat tanpa bahan pengawet buatan berbahaya.',
  },
  {
    q: 'Apakah bisa kirim ke luar kota Surabaya?',
    a: 'Kami melayani pengiriman ke seluruh kota di Indonesia dengan proteksi bubble wrap tebal dan kardus khusus.',
  },
];

export const contact = {
  whatsapp: {
    number: '+62 812-3456-7890',
    url: 'https://wa.me/6281234567890?text=Halo%20Tokuri%2C%20saya%20ingin%20bertanya%20mengenai%20kue%20kering.',
    resellerUrl: 'https://wa.me/6281234567890?text=Halo%20Tokuri%2C%20saya%20tertarik%20untuk%20bergabung%20menjadi%20Reseller.',
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
  hours: 'Senin - Sabtu: 08.00 - 17.00 WIB',
};
