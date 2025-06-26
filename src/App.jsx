import Navbar from "./components/Navbar";

const professions = [
  {
    title: "Doktor",
    color: "from-cyan-500 to-blue-700",
    icon: "🩺",
    description: "Hastalarınıza güven veren, modern bir portfolyo sitesi.",
  },
  {
    title: "Mühendis",
    color: "from-yellow-500 to-orange-700",
    icon: "🛠️",
    description: "Projelerinizi ve uzmanlığınızı sergileyen profesyonel bir site.",
  },
  {
    title: "Öğretmen",
    color: "from-green-500 to-emerald-700",
    icon: "📚",
    description: "Eğitim geçmişinizi ve başarılarınızı öne çıkaran portfolyo.",
  },
  {
    title: "Gayrimenkul Danışmanı",
    color: "from-pink-500 to-fuchsia-700",
    icon: "🏠",
    description: "Portföyünüzdeki gayrimenkulleri şık bir şekilde sunun.",
  },
  {
    title: "Influencer",
    color: "from-purple-500 to-indigo-700",
    icon: "📸",
    description: "Takipçilerinize tarzınızı ve işbirliklerinizi gösterin.",
  },
  {
    title: "Freelancer",
    color: "from-teal-500 to-cyan-700",
    icon: "💻",
    description: "Hizmetlerinizi ve referanslarınızı vurgulayan portfolyo.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-secondary flex flex-col font-futuristic">
      <Navbar />
      <main className="flex-1 p-4">
        {/* Hero Section */}
        <section
          id="anasayfa"
          className="py-20 text-center bg-hero-gradient rounded-xl shadow-lg mb-12"
        >
          <h1 className="text-5xl font-bold text-primary mb-4 drop-shadow-lg">
            Hayalinizdeki Portfolyo Siteniz Burada!
          </h1>
          <p className="text-xl text-grayish mb-8">
            Hangi meslekten olursanız olun, size özel modern ve etkileyici portfolyo tasarımları.
          </p>
          <a
            href="#meslekler"
            className="inline-block bg-neon text-white px-8 py-3 rounded-full shadow-lg hover:bg-primary hover:text-secondary transition font-bold tracking-widest"
          >
            Mesleğine Göre Demo Gör
          </a>
        </section>

        {/* Professions Demo Section */}
        <section id="meslekler" className="py-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Her Meslek İçin Portfolyo Tasarımı</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {professions.map((prof, idx) => (
              <div
                key={idx}
                className={`rounded-xl shadow-lg p-8 text-center bg-gradient-to-br ${prof.color} transition transform hover:scale-105`}
              >
                <div className="text-5xl mb-4">{prof.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{prof.title}</h3>
                <p className="text-gray-100">{prof.description}</p>
                <a
                  href={prof.title === "Influencer" ? "/influencer-demo" : "#"}
                  className="mt-6 px-6 py-2 bg-white text-secondary font-bold rounded-full shadow hover:bg-primary hover:text-white transition block w-fit mx-auto"
                >
                  Demo Gör
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="iletisim"
          className="py-16 bg-accent rounded-xl shadow-lg my-8 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">İletişim</h2>
          <p className="text-grayish mb-4">
            Siz de kendi portfolyo sitenizi yaptırmak isterseniz, aşağıdaki formu doldurun!
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Adınız"
              className="p-2 border border-primary rounded bg-secondary text-grayish focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              placeholder="E-posta"
              className="p-2 border border-primary rounded bg-secondary text-grayish focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              placeholder="Mesajınız"
              className="p-2 border border-primary rounded bg-secondary text-grayish focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="bg-neon text-white px-6 py-2 rounded-full hover:bg-primary hover:text-secondary transition font-bold tracking-widest"
            >
              Gönder
            </button>
          </form>
        </section>
      </main>
      <footer className="bg-accent shadow p-4 text-center text-grayish">
        © 2025 Tüm hakları saklıdır.
      </footer>
    </div>
  );
}

export default App;