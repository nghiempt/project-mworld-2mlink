"use client";

import { URL } from "@/constant/url";
import { generateCode } from "@/utils/helper";
import { Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(5);
  const [openCode, setOpenCode] = useState(false);
  const [code, setCode] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleCountDown = () => {
    setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000)
  }

  const handleClose = () => {
    setOpen(false)
  };

  const handleClick = () => {
    const newCode = generateCode()
    setCode(newCode.toString())
    setOpenCode(true)
  }

  const handleCopy = () => {
    setOpen(true)
    const textarea = document.createElement('textarea');
    textarea.value = code.toString();
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const directMlink = () => {
    window.open(URL.TELEGRAM)
  }

  useEffect(() => {
    handleCountDown()
  }, [])

  useEffect(() => { }, [count, openCode, code])

  return (
    <div className="w-full flex flex-col justify-center items-center w-full">
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        message="Đã sao chép"
      />
      <div className="flex flex-row justify-center items-center bg-[rgb(41,99,121)] py-10 w-full">
        <h1 className="text-[34px] text-[rgb(204,131,46)] font-bold">Lấy Code Đọc Truyện</h1>
      </div>
      <div className="lg:w-1/2 p-4">
        <div className="flex flex-col gap-y-4 justify-center items-center bg-[rgb(29,29,29)] rounded-lg py-10 px-10 w-full mt-6 border-t-[6px] border-blue-700">
          <h1 className="text-[14px] text-white">Bạn sẽ chuyển đến: {URL.MWORLD}</h1>
          {
            count >= 0 ? <div className="w-[50px] h-[50px] bg-white flex justify-center items-center border border-[4px] border-[rgb(132,197,251)] rounded-full mb-2">{count}</div> : null
          }
          {
            openCode ? <div className="flex flex-col mb-4 mt-2">
              <button className={`py-2 px-4 mb-2 ${count < 0 ? 'bg-white hover:opacity-70' : 'bg-[#ccc]'}  text-gray-700 font-semibold rounded-lg`}>{code}</button>
              <button onClick={handleCopy} className={`py-2 px-4 ${count < 0 ? 'bg-[rgb(40,96,26)] hover:opacity-70' : 'bg-[#ccc]'}  text-white font-semibold rounded-lg`}>Sao chép</button>
            </div> : <button onClick={handleClick} className={`py-2 px-4 ${count < 0 ? 'bg-[rgb(40,96,26)] hover:opacity-70' : 'bg-[#ccc]'}  text-white font-semibold rounded-lg mb-4 mt-2`}>Nhấn vào đây để lấy mã</button>
          }
          <div className="lg:w-1/2 flex flex-col gap-y-4 text-justify">
            <p>
              <span className="text-white">Bấm vào chữ <span className="font-bold text-[rgb(240,131,112)]">"Nhấn Vào Đây Để Lấy Mã" <span className="text-white">bên trên để chuyển sang web lấy mã xem<span className="font-bold text-[rgb(89,171,109)]"> "Full" <span className="text-white">truyện !!!</span></span></span></span></span>
            </p>
            <p>
              <span className="text-white">Nếu web mã<span className="font-bold text-[rgb(132,197,251)]"> "LỖI" <span className="text-white">vui lòng thoát ra và vào lại link để chuyển sang web lấy " MÃ " khác <span className="font-bold text-[rgb(132,197,251)]">(dùng WIFI bị lỗi có thể chuyển sang 4G rồi thử lại) !!!</span></span></span></span>
            </p>
            <p>
              <span className="font-bold text-[rgb(212,153,247)]">Lưu ý:<span className="font-bold text-[rgb(204,131,46)]"> "Không nên sử dụng trình duyệt fake VPN và Proxy để tránh lỗi không hiện mã" </span></span>
            </p>
          </div>
          <h1 className="text-white">Nếu chưa biết cách vượt link thì nhấn vào đây để xem hướng dẫn chi tiết nhất !!!</h1>
          <div className="cursor-pointer" onClick={directMlink}>
            <img className="rounded-lg" src={URL.BANNER} alt="gai-xinh" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center lg:bg-gray-100 py-10 mt-6">
          <div className="flex w-full justify-center items-center">
            <h1>Copyright ©</h1>
            <h1 className="text-green-700 font-semibold ml-2">SexLink.Online</h1>
          </div>
          <div className="flex w-full justify-center items-center mt-4">
            <h1>Liên hệ quảng cáo: </h1>
            <h1 className="text-green-700 font-semibold ml-2 cursor-pointer" onClick={directMlink}>@adsexlinkonline (Telegram)</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
