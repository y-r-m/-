"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LinkModal from "./LinkModal";
import { ko } from "date-fns/esm/locale";
import Layout from "./Layout";

interface ModalProps {
  handleBtn: () => void;
}

const DurationModal: React.FC<ModalProps> = ({ handleBtn }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openLinkModal, setOpenLinkModal] = useState(false);

  const onModalLinkOpen = () => {
    setOpenLinkModal(true);
  };
  const onModalLinkClose = () => {
    setOpenLinkModal(false);
  };
  const handleClose = () => {
    handleBtn();
    onModalLinkOpen();
  };
  return (
    <Layout handleBtn={handleBtn}>
      <div className="text-left">
        <h3>교육과정 &gt; 기간 설정</h3>
        <div className="flex items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center p-1 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              className="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              dateFormat="yyyy.MM.dd"
            />
          </div>
          <span className="mx-2 text-gray-500">~</span>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <DatePicker
              locale={ko}
              dateFormat="yyyy.MM.dd"
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              className="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            />
          </div>
        </div>
        <button className="rounded-md mt-3 p-2 text-white bg-blue-500 align-right">
          업로드
        </button>
      </div>

      {openLinkModal && <LinkModal handleBtn={handleBtn} />}
    </Layout>
  );
};
export default DurationModal;
