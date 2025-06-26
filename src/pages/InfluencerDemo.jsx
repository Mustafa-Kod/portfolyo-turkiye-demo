import React from "react";

export default function InfluencerDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-yellow-500 flex flex-col items-center font-futuristic">
      {/* Header */}
      <header className="w-full py-8 flex flex-col items-center bg-black/40 shadow-lg">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Influencer Profil"
          className="w-36 h-36 rounded-full border-4 border-white shadow-lg mb-4 object-cover"
        />
        <h1 className="text-5xl font-extrabold text-white mb-2 tracking-widest drop-shadow-lg">Umay Verda</h1>
        <p className="text-xl text-white/80 mb-4">Lifestyle & Moda Influencer</p>
        <div className="flex space-x-6 mb-4">
          <a href="#" className="text-white text-3xl hover:text-yellow-300 transition" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="#" className="text-white text-3xl hover:text-blue-400 transition" title="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
          </a>
          <a href="#" className="text-white text-3xl hover:text-pink-400 transition" title="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M12.75 2v14.25a3.75 3.75 0 1 1-3.75-3.75h1.5a2.25 2.25 0 1 0 2.25 2.25V2h1.5a6.75 6.75 0 0 0 6.75 6.75v1.5A8.25 8.25 0 0 1 14.25 2h-1.5z"/></svg>
          </a>
        </div>
        <div className="flex justify-center space-x-8 mb-6">
          <div>
            <div className="text-2xl font-bold text-white">120K</div>
            <div className="text-sm text-white/80">Instagram</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">80K</div>
            <div className="text-sm text-white/80">Twitter</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">200K</div>
            <div className="text-sm text-white/80">TikTok</div>
          </div>
        </div>
        <p className="text-white/90 mb-6 max-w-2xl">
          Merhaba! Ben Umay. Moda, yaşam tarzı ve seyahat üzerine içerikler üretiyorum. Markanız için yaratıcı işbirliklerine açığım!
        </p>
        <a
          href="#iletisim"
          className="inline-block bg-white text-pink-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition"
        >
          Benimle Çalışın
        </a>
      </header>
      {/* Portfolio Gallery */}
      <section className="w-full max-w-4xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400" alt="Instagram Post" className="w-40 h-40 rounded-lg object-cover mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Instagram İçeriği</h3>
          <p className="text-white/80">Moda çekimi için hazırlanan işbirliği postu.</p>
        </div>
        <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400" alt="YouTube Video" className="w-40 h-40 rounded-lg object-cover mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">YouTube Videosu</h3>
          <p className="text-white/80">Vlog: Paris Moda Haftası deneyimlerim.</p>
        </div>
        <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400" alt="TikTok Video" className="w-40 h-40 rounded-lg object-cover mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">TikTok Videosu</h3>
          <p className="text-white/80">30 saniyede kombin önerileri.</p>
        </div>
        <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400" alt="Blog Post" className="w-40 h-40 rounded-lg object-cover mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Blog Yazısı</h3>
          <p className="text-white/80">Kış sezonu trendleri ve stil ipuçları.</p>
        </div>
      </section>
      {/* Contact */}
      <footer className="w-full py-8 flex flex-col items-center bg-black/40 mt-auto">
        <h2 className="text-2xl font-bold text-white mb-2">İletişim</h2>
        <p className="text-white/80 mb-4">İşbirliği için bana ulaşın:</p>
        <a href="mailto:elif.yildiz@email.com" className="text-pink-300 hover:underline text-lg font-bold">umayverda@email.com</a>
        <p className="text-white/40 mt-8">© 2025 Umay Verda. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}