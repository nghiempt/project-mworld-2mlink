"use client";

import React from "react";

export default function HomePage() {

  const directTelegram = () => {
    window.open('https://t.me/cskhsexlink', '_blank')
  }

  const directSite = () => {
    window.open('https://sexlink.site', '_blank')
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">

      <div className="hidden lg:block w-2/3 py-16 bg-gray-100 flex justify-center items-center font-semibold text-[20px] text-center">QUẢNG CÁO Ở ĐÂY</div>

      <div className="lg:w-2/3 px-6 lg:px-0 py-14 flex justify-center items-center font-semibold text-[20px] mt-0 lg:mt-4 lg:border border-gray-200">
        <div className="bg-white text-center">
          <h2 className="lg:text-2xl font-semibold mb-2">Bạn đang muốn xem phim xxx</h2>
          <p className="text-gray-600 mb-4">https://s**li**.xxx</p>
          <p className="text-[12px] lg:text-[16px] text-red-500 font-semibold mb-4">VUI LÒNG NHẬP MÃ ĐỂ TIẾP TỤC TỚI TRANG ĐÍCH</p>
          <input type="text" className="border-2 border-gray-300 bg-white h-10 px-5 rounded-md text-sm focus:outline-none w-full mb-4" placeholder="Nhập mã xác nhận" />
          <button onClick={directSite} className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded inline-flex items-center w-full justify-center text-[14px] lg:text-[16px]">
            Nhập mã xác nhận
          </button>
        </div>
      </div>

      <div className="lg:w-2/3 lg:py-10 flex flex-col justify-center items-center font-semibold text-[20px] mt-4 lg:border border-gray-200">

        <h1 className="text-[24px] font-black text-blue-700">HƯỚNG DẪN LẤY MÃ</h1>
        <h1 className="text-[12px] lg:text-[18px] text-red-500 mt-2">LƯU Ý: KHÔNG SỬ DUNG VPN HOẶC 1.1.1.1 KHI VƯỢT LINK</h1>

        <div className="w-full p-6">
          <div className="flex flex-wrap">
            <h1 className="text-[14px] lg:text-[16px] font-medium">Bước 1: Vào google.com và tìm kiếm từ khoá:</h1>
            <h1 className="text-[14px] lg:text-[16px] font-bold text-red-500 lg:ml-1">sexlink.site</h1>
          </div>
          <div className="w-full border border-gray-100 mt-4">
            <img src="https://assets.nnpro.me/mw-gg-search.png" alt="image" />
          </div>
        </div>

        <div className="w-full p-6">
          <h1 className="text-[14px] lg:text-[16px] font-medium">Bước 2: Truy cập vào website ở vị trí đầu tiên như hình bên dưới</h1>
          <div className="w-full p-6 border border-gray-100 mt-4">
            <img src="https://assets.nnpro.me/mw-gg-result.png" alt="image" />
          </div>
        </div>

        <div className="w-full flex flex-wrap lg:flex-nowrap justify-start items-center p-6">
          <h1 className="text-[14px] lg:text-[16px] font-medium">Bước 3: Cuộn xuống cuối trang nhất nút lấy mã như thế này:</h1>
          <img src="https://cdn-icons-png.flaticon.com/128/4208/4208490.png" alt="image" className="w-[28px] h-[28px] lg:w-[40px] lg:h-[40px]" />
          <h1 className="text-[16px] lg:text-[16px] font-black text-red-500">Lấy Mã</h1>
        </div>

        <div className="w-full flex flex-col justify-center items-start p-6">
          <h1 className="text-[14px] lg:text-[16px] font-medium">Bước 4: Nhập mã xác nhận vào ô bên dưới:</h1>
          <div className="lg:w-1/2 mt-4">
            <input type="text" className="border-2 border-gray-300 bg-white h-10 px-5 rounded-md text-sm focus:outline-none w-full mb-4" placeholder="Nhập mã xác nhận" />
            <button onClick={directSite} className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded inline-flex items-center w-full justify-center text-[14px] lg:text-[16px]">
              Nhập mã xác nhận
            </button>
          </div>
        </div>

        <div className="w-full p-6 flex flex-wrap text-[14px] lg:text-[16px] justify-start items-center font-medium">
          <span className="text-red-500 mr-1 font-semibold">Lưu ý:</span>
          <span>Khi website bị lỗi hoặc không tìm thấy mã. Bạn hãy nhấn vào nút bên dưới để đổi từ khoá khác nha.</span>
        </div>

        <button onClick={directSite} className="w-1/2 lg:w-1/4 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-2 rounded-full inline-flex items-center justify-center text-[14px] lg:text-[16px]">
          Đổi từ khoá mới
        </button>
      </div>

      <div className="w-full py-16 bg-blue-900 flex justify-center items-center font-semibold text-[20px] mt-10">
        <div className="flex flex-wrap w-full justify-center items-center text-[14px] lg:text-[18px]">
          <h1 className="text-white">Liên hệ quảng cáo: </h1>
          <h1 className="text-orange-500 font-semibold ml-2 cursor-pointer" onClick={directTelegram}>@cskhsexlink (Telegram)</h1>
        </div>
      </div>

    </div>
  );
}
