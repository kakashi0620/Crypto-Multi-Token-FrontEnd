import UpIcon from "../Icons/Up";

export default function BackToTop({ scroll }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scroll && (
        <a id="scroll-top" className="show" onClick={scrollToTop}>
          <UpIcon className="w-8 h-8 text-white" />
        </a>
      )}
    </>
  );
}
