import Image from "next/image";

const CustomPrevArrow: React.FC<{
  onClick: () => void;
  className: string
}> = ({ onClick, className }) => {
  return <button className="bg-white-color hover:bg-black-shade-color w-12 h-12 md:w-[3.25em] md:h-[3.25em] rounded-full hover:scale-125 group" onClick={onClick}>
    <Image
      src="/left-arrow-black.svg"
      alt="Jamstacky"
      className="black block group-hover:hidden"
      width={10}
      height={10}
    />
    <Image
      src="/left-arrow-white.svg"
      alt="Jamstacky"
      className="white hidden group-hover:block"
      width={10}
      height={10}
    />
  </button>;
};

export default CustomPrevArrow;