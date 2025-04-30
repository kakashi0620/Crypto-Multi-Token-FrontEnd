export default function Banner() {
  return (
    <div className="marquee-container fixed top-[72px] left-0 right-0 z-40 flex items-center h-8 w-full gap-5 overflow-x-hidden bg-[#673DE6] bg-opacity-95 backdrop-blur-sm">
      <div className="marquee-bar flex text-sm whitespace-nowrap animate-marquee hover:animation-paused">
        🚀 We sell crypto tokens to our customer before launching this token. 🤑 So my business is crypto private deal. 🔥
      </div>
    </div>
  );
}
