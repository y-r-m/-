"use client";
import { useState } from "react";
import LinkModal from "./LinkModal";
import { useDispatch } from "react-redux";
import { setInputTitle } from "@/redux/titleSlice";
import Layout from "./Layout";

interface ModalProps {
  handleBtn: () => void;
}

const MakeModal: React.FC<ModalProps> = ({ handleBtn }) => {
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [inputTitle, setInputTitleLocal] = useState("");
  const dispatch = useDispatch();

  const onLinkModalOpen = () => {
    dispatch(setInputTitle(inputTitle));
    setOpenLinkModal(true);
  };
  const onLinkModalClose = () => {
    setOpenLinkModal(false);
  };
  const handleInputChange = (e: any) => {
    setInputTitleLocal(e.target.value);
  };
  return (
    <Layout handleBtn={handleBtn}>
      <div>
        <div className="text-left">
          <h1>강의 만들기</h1>
          <input
            type="text"
            placeholder="제목을 입력해주세요.(선택)"
            className="justify-left font-bold text-[12px] w-auto"
            value={inputTitle}
            onChange={handleInputChange}
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
            onClick={onLinkModalOpen}
          >
            링크 만들기
          </div>
        </div>
        <button className="rounded-md mt-3 p-2 text-white bg-blue-500  className= w-107 align-right">
          다음
        </button>
      </div>
      {openLinkModal && <LinkModal handleBtn={onLinkModalClose} />}
    </Layout>
  );
};
export default MakeModal;
