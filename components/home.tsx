"use client";

import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";

export default function HomePage() {

  const [currectCategory, setCurrectCategory] = React.useState(1)
  const [posts, setPosts] = React.useState([])
  const [categories, setCategories] = React.useState([])

  const directTelegram = () => {
    window.open('https://t.me/cskhsexlink', '_blank')
  }

  const directSite = () => {
    // window.open('https://sexlink.site', '_blank')
  }

  const filterPosts = (categoryId: any) => {
    const filterPosts = posts.filter((item: any) => item?.cat_id === categoryId)
    return filterPosts
  }

  const renderImage = (image: any) => {
    return (
      "https://api.sexlink.online/" + image
    )
  };

  const init = async () => {
    const fetchPosts = await fetch('https://api.sexlink.online/api/post/get-all')
    const fetchPostsResult = await fetchPosts.json()

    const fetchCategories = await fetch('https://api.sexlink.online/api/category/get-all')
    const fetchCategoriesResult = await fetchCategories.json()

    setCategories(fetchCategoriesResult)
    setPosts(fetchPostsResult)
  };

  useEffect(() => {
    init()
  }, [])

  useEffect(() => { }, [currectCategory, posts, categories])

  return (
    <div className="w-full flex flex-col justify-center items-center">

      <div className="hidden lg:block w-2/3 py-16 bg-gray-100 flex justify-center items-center font-semibold text-[20px] text-center">QUẢNG CÁO Ở ĐÂY</div>

      {
        categories?.length === 0 ? <div className="lg:w-2/3  py-28 text-center"><CircularProgress /></div> :
          <div className="lg:w-2/3 flex justify-center items-center grid grid-cols-4 gap-2 lg:gap-4 font-semibold mt-4">
            {

              categories?.map((item: any, index: any) => {
                return (
                  <div onClick={() => setCurrectCategory(item?.cat_id)} key={index} className={`${currectCategory === item?.cat_id ? 'bg-blue-900 text-white' : 'bg-gray-200'} text-center py-1 lg:py-2 px-2 lg:px-0 text-[14px] lg:text-[18px] cursor-pointer`}>
                    {item?.cat_name}
                  </div>
                )
              })
            }
          </div>
      }

      <div onClick={directSite} className="lg:w-2/3 flex justify-center items-center grid grid-cols-1 lg:grid-cols-3 gap-4 font-semibold lg:mt-4 cursor-pointer">
        {
          filterPosts(currectCategory)?.map((item: any, index: any) => {
            return (
              <div key={index} className="w-full h-[460px] rounded-lg overflow-hidden shadow-lg p-2">
                <img src={renderImage(item?.p_image)} alt="img" className="object-cover rounded-md w-full h-full" />
              </div>
            )
          })
        }
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
