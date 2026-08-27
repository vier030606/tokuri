import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Sparkles, MessageCircle, Gift, CheckCircle2 } from 'lucide-react';
import { contact } from '../data/products';

const ProfitCalculator = () => {
  const [jarsCount, setJarsCount] = useState(24);

  // Estimasi rata-rata:
  // Harga Jual Konsumen: Rp 90.000 / toples
  // Harga Grosir Reseller: Rp 65.000 / toples (Margin Rp 25.000 / toples)
  const retailPrice = 90000;
  const wholesalePrice = jarsCount >= 100 ? 60000 : jarsCount >= 48 ? 62500 : 65000;
  const profitPerJar = retailPrice - wholesalePrice;

  const totalOmzet = jarsCount * retailPrice;
  const totalModal = jarsCount * wholesalePrice;
  const totalProfit = jarsCount * profitPerJar;
  const profitMarginPercent = Math.round((totalProfit / totalOmzet) * 100);

  const getTierBenefit = () => {
    if (jarsCount >= 100) {
      return {
        badge: 'Tier Distributor VIP',
        perks: [
          'Harga grosir terendah (Rp 60.000/toples)',
          'Gratis ongkir seluruh Pulau Jawa',
          'Akses penuh drive foto & video promosi eksklusif',
          'Prioritas slot baking batch harian',
        ],
      };
    } else if (jarsCount >= 48) {
      return {
        badge: 'Tier Gold Reseller',
        perks: [
          'Harga grosir spesial (Rp 62.500/toples)',
          'Subsidi ongkir hingga 50%',
          'Akses bank konten promosi siap posting',
          'Bebas mix varian rasa sesuka hati',
        ],
      };
    } else {
      return {
        badge: 'Tier Starter Mitra',
        perks: [
          'Margin profit sehat ~28%',
          'Minimal order ramah modal (mulai 1 lusin)',
          'Dukungan panduan & copy teks jualan WhatsApp',
        ],
      };
    }
  };

  const tier = getTierBenefit();

  const handleOrderTier = () => {
    const text = encodeURIComponent(
      `Halo Tim Tokuri, saya ingin bermitra reseller dengan rencana kuantiti awal ${jarsCount} toples (${tier.badge}). Boleh minta price list lengkapnya?`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <section className="section-padding py-20 bg-cream/40 grain-overlay border-t border-beige/40">
      <div className="container-narrow max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-cream-dark px-3.5 py-1.5 rounded-full mb-3 border border-beige">
            <Calculator size={14} className="text-cinnamon" />
            <span className="font-sans text-xs font-semibold text-brown uppercase tracking-wider">
              Simulasi Keuntungan Mitra
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mb-3">
            Kalkulator Potensi Profit Reseller
          </h2>
          <p className="font-sans text-sm sm:text-base text-brown-muted">
            Geser jumlah toples kue kering di bawah untuk melihat estimasi keuntungan bersih yang bisa Anda peroleh.
          </p>
        </div>

        <div className="bg-ivory rounded-4xl p-6 sm:p-10 border border-brown/10 ring-1 ring-brown/5 shadow-card grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Slider & Tier Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-sans text-xs font-bold text-brown uppercase tracking-wider">
                  Target Penjualan Toples:
                </label>
                <span className="font-serif text-3xl font-bold text-cinnamon">
                  {jarsCount} <span className="text-base text-brown-muted font-normal">toples</span>
                </span>
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min="12"
                max="250"
                step="6"
                value={jarsCount}
                onChange={(e) => setJarsCount(Number(e.target.value))}
                className="w-full cursor-pointer"
              />

              <div className="flex justify-between text-[11px] font-sans text-brown-muted mt-2">
                <span>12 toples (1 Lusin)</span>
                <span>48 toples (4 Lusin)</span>
                <span>100+ toples</span>
                <span>250 toples</span>
              </div>
            </div>

            {/* Tier Card */}
            <div className="bg-cream/70 rounded-2xl p-5 border border-beige">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-lg font-bold text-brown">
                  {tier.badge}
                </span>
                <span className="bg-brown text-ivory text-[10px] font-sans font-semibold uppercase px-2.5 py-1 rounded-full">
                  Margin {profitMarginPercent}%
                </span>
              </div>
              <ul className="space-y-2">
                {tier.perks.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-sans text-xs text-brown-muted">
                    <CheckCircle2 size={14} className="text-sage mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Profit Summary Box */}
          <div className="lg:col-span-5 bg-cream-dark/60 p-6 sm:p-8 rounded-3xl border border-beige text-center flex flex-col justify-between space-y-6">
            <div>
              <span className="font-sans text-xs font-bold text-brown-muted uppercase tracking-widest block mb-1">
                Estimasi Keuntungan Bersih
              </span>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-brown mb-2">
                Rp {totalProfit.toLocaleString('id-ID')}
              </div>
              <p className="font-sans text-xs text-brown-muted">
                Dihitung dari selisih harga grosir mitra & patokan harga retail pasar.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-beige/80 text-left font-sans text-xs">
              <div className="flex justify-between text-brown-muted">
                <span>Estimasi Omset Penjualan:</span>
                <span className="font-bold text-brown">Rp {totalOmzet.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-brown-muted">
                <span>Modal Grosir Anda:</span>
                <span className="font-bold text-brown">Rp {totalModal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-brown-muted">
                <span>Profit per Toples:</span>
                <span className="font-bold text-cinnamon">Rp {profitPerJar.toLocaleString('id-ID')} / toples</span>
              </div>
            </div>

            <button
              onClick={handleOrderTier}
              className="btn-primary w-full py-3.5 text-xs sm:text-sm shadow-card"
            >
              <MessageCircle size={16} />
              Daftar Paket {jarsCount} Toples Ini
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
