import { useState } from "react";

function HideDisplay() {
  const [isOpen, setIsOpen] = useState({ type: false });
  const [wordOnButton, setWordOnButton] = useState({ name: "Xem gioi thieu" });

  const handleClick_Open = () => {
    setIsOpen({ ...isOpen, type: true });
    setWordOnButton({ ...wordOnButton, name: "Dong gioi thieu" });
  };

  const handleClick_Close = () => {
    setIsOpen({ ...isOpen, type: false });
    setWordOnButton({ ...wordOnButton, name: "Xem gioi thieu" });
  };

  if (isOpen.type) {
    return (
      <>
        <button type="button" onClick={handleClick_Close}>
          {wordOnButton.name}
        </button>
        <h3>
          Ngoài anh em có những ai bên em hiện tại Vì yêu em nên anh còn ở lại
          Cuộc đời cho em tiếng ca, yên vui mái nhà Nhưng đối với em không bao
          giờ là tất cả. Cùng một khi ta đã từng hát cho anh nghe Hát về nỗi
          lòng, về tình yêu em trao anh Đến nay chỉ còn lại mình anh Với tiếng
          hát trong tâm trí anh này Anh đã mất em sao. Em sẽ không ở nơi này Anh
          biết phải đàn cho ai đây Đâu đó nỗi buồn cung đàn rung Đôi tay lau
          nước mắt rơi Anh đã đem lòng tin anh trao một người con gái Anh đã
          yêu, anh đã từng yêu em rất nhiều. Nơi ấy suy nghĩ anh còn thương em
          Anh cặm cụi tìm kiếm Tìm những yêu thương em từ trong khúc ca Nay đi
          xa rồi, em đã xa tôi Thà anh sống trong quá khứ nhưng anh có em.
        </h3>
        ;
      </>
    );
  }
  return (
    <>
      <button type="button" onClick={handleClick_Open}>
        {wordOnButton.name}
      </button>
    </>
  );
}

export default HideDisplay;
