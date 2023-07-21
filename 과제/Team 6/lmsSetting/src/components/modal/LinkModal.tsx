"use client";
import { useState } from "react";
import DurationModal from "./DurationModal";
import { useSelector } from "react-redux";
import { setInputContent } from "@/redux/contentSlice";
import { useDispatch } from "react-redux";
import Layout from "./Layout";

interface ModalProps {
  handleBtn: () => void;
}

const LinkModal: React.FC<ModalProps> = ({ handleBtn }) => {
  const [openDurationModal, setOpenDurationModal] = useState(false);
  const inputValue = useSelector((state: any) => state.title);
  const [inputContent, setInputContentLocal] = useState("");
  const dispatch = useDispatch();

  const onDurationModalOpen = () => {
    dispatch(setInputContent(inputContent));
    setOpenDurationModal(true);
  };
  const handleInputChange = (e: any) => {
    setInputContentLocal(e.target.value);
  };
  return (
    <Layout handleBtn={handleBtn}>
      <div className="text-left">
        <h3 text-left>교육과정 &gt; 링크 만들기</h3>
        <form>
          <div>
            <input
              type="text"
              placeholder="제목을 입력해주세요.(선택)"
              value={inputValue}
              className="justify-left font-bold text-[12px] w-auto"
            />
          </div>
          <input
            type="text"
            name="link"
            placeholder="내용을 입력해주세요."
            className="justify-left text-[5px] w-auto border-2 border-inherit rounded-md p-1"
            value={inputContent}
            onChange={handleInputChange}
          />
        </form>
        <button
          onClick={onDurationModalOpen}
          className="rounded-md mt-3 p-2 text-white bg-blue-500 align-right"
        >
          다음
        </button>
      </div>

      {openDurationModal && <DurationModal handleBtn={handleBtn} />}
    </Layout>
  );
};
export default LinkModal;
