export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center pt-16"
      style={{
        backgroundImage: 'url("https://scist.org/static/images/hero.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <div className="flex justify-center mb-6">
          <img
            src="/SCIST Logo/黑字.svg"
            alt="SCIST Logo"
            className="h-40 w-auto bg-white px-8 py-5 rounded-3xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          南臺灣學生資訊社群
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
          Students' Community of Information in Southern Taiwan
        </p>
      </div>
    </section>
  );
}
