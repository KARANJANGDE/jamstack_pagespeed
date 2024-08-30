import Link from "@/components/Link";
import { CustomImageType } from "@/lib/sanity/types";
import { useState } from "react";
import CustomImage from "..";
const CustomClickableImage: React.FC<{
  value: any;
  isClickable: boolean;
}> = ({ value, isClickable }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [clickedImage, setClickedImage] = useState<CustomImageType | null>(
    null
  );
  const openModal = (image: CustomImageType) => {
    setClickedImage(image);
    setModalVisible(true);
    document.body.classList.add("popupOpenImage");
  };

  const closeModal = () => {
    setClickedImage(null);
    setModalVisible(false);
    document.body.classList.remove("popupOpenImage");
  };
  return (
    <div>
      {value?.link ? (
        <div>
          <Link className="" to={value?.link}>
            <CustomImage block={value} />
          </Link>
        </div>
      ) : isClickable ? (
        <div>
          <div className="" onClick={() => openModal(value)}>
            <CustomImage block={value} className="cursor-pointer" />
          </div>

          {modalVisible && (
            <div
              className="overlayImage flex fixed top-0 left-0 w-full h-full bg-[#39383854] justify-center items-center z-[1000]  pointer-events-auto"
              onClick={closeModal}
            >
              <div
                className="popupImage relative max-w-[90%] max-h-[90vh] rounded-lg [&>img]:w-full [&>img]:object-cover ![&>img]:my-0"
                onClick={(e) => e.stopPropagation()}
              >
                {clickedImage && <CustomImage block={clickedImage} />}
              </div>
              <div
                className="close absolute top-0 right-[25px] text-white text-[50px] no-underline cursor-pointer font-semibold"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
              >
                &times;
              </div>
            </div>
          )}
        </div>
      ) : (
        <CustomImage className="bg-[orange]" block={value} />
      )}
    </div>
  );
};
export default CustomClickableImage;
