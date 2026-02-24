export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="max-w-md w-full p-8 border border-stone-200 rounded-3xl shadow-sm bg-stone-50/50 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-serif text-[#d4af37] mb-6 drop-shadow-sm">
          Coming Soon
        </h1>
        <p className="text-stone-600 text-base md:text-lg tracking-wide leading-relaxed mb-8">
          We're currently crafting an exceptional experience for this section. Please check back later for our latest updates.
        </p>
        <a 
          href="/"
          className="inline-block bg-[#d4af37] hover:bg-[#c5a030] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 tracking-widest text-sm uppercase"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
