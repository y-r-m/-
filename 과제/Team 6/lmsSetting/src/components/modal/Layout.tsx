import Image from "next/image";
import { ReactNode } from "react";

interface ModalProps {
  handleBtn: () => void;
  children: ReactNode;
}

const Layout: React.FC<ModalProps> = ({ handleBtn, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black/30 flex flex-col justify-center items-center`}
      onClick={handleBtn}
    >
      <article
        className="relative w-[770px] shadow-2xl bg-white pt-[41px] px-8 pb-[37px] flex flex-col gap-5 box-border rounded-[10px]"
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button type="button">
          <Image
            src="/close.svg"
            alt="닫기 버튼"
            width={24}
            height={24}
            className="absolute top-[41px] right-8"
            onClick={handleBtn}
          />
        </button>
      </article>
    </div>
  );
};

export default Layout;
