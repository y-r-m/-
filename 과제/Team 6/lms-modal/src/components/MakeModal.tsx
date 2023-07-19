import React, { useState } from "react";
import LinkModal from "./LinkModal";

export default function MakeModal({ onOpenModal }: any) {
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const onModalLinkOpen = () => {
    setOpenLinkModal(true);
  };
  const onModalLinkClose = () => {
    setOpenLinkModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
      <div className="bg-white rounded w-10/12 md:w-1/3 p-5">
        <div className="text-left">
          <h1>강의 만들기</h1>
          <input
            type="text"
            placeholder="제목을 입력해주세요.(선택)"
            className="justify-left font-bold text-[12px] w-auto"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className=" border-2 border-inherit rounded-md p-1">
            노트 만들기
          </div>
          <div className=" border-2 border-inherit rounded-md p-1">
            영상 강의 만들기
          </div>
          <div
            className=" border-2 border-inherit rounded-md p-1"
            onClick={onModalLinkOpen}
          >
            링크 만들기
          </div>
        </div>
        <button className="rounded-md mt-3 p-2 text-white bg-blue-500  className= w-107 align-right">
          다음
        </button>
      </div>
      {openLinkModal && <LinkModal onClose={onModalLinkClose} />}
    </div>
  );
}
