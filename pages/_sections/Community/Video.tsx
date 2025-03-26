interface VideoProps {
  url: string;
  className?: string;
}

export default function Video({ url, className }: VideoProps) {
  return (
    <div className={`flex flex-col max-w-[560px] relative ${className ?? ""}`}>
      <div className="p-2 w-fit">
        <img src="/images/threedots.svg" alt="dots" />
      </div>
      <div className="w-full">
        <img src={url} alt="video" />
      </div>
    </div>
  );
}
