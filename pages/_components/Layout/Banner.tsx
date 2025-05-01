export default function Banner() {
  return (
    <div className="marquee-container fixed top-[72px] left-0 right-0 z-40 flex items-center h-8 w-full gap-5 overflow-x-hidden bg-gradient-to-r from-[#1A1A1A] via-[#242424] to-[#1A1A1A] backdrop-blur-sm border-b border-white/5">
      <div className="marquee-bar flex text-sm whitespace-nowrap animate-marquee hover:animation-paused text-gray-300">
        🚀 We sell crypto tokens to our customer before launching this token. 🤑 So my business is crypto private deal. 🔥
      </div>
    </div>
  );
}
