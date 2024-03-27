"use client";

import { CircularProgress, Modal } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function AdminPage() {

  const params = useSearchParams();

  const [currentTab, setCurrentTab] = React.useState(1);
  const [posts, setPosts] = React.useState([])
  const [categories, setCategories] = React.useState([])
  const [inputCategory, setInputCategory] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false);
  const [file, setFile] = React.useState<any>(null)
  const [categoryAdd, setCategoryAdd] = React.useState<any>(1)

  const filterPosts = (categoryId: any) => {
    const filterPosts = posts.filter((item: any) => item?.cat_id === categoryId)
    return filterPosts
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  const renderImage = (image: any) => {
    return (
      <img src={"https://api.sexlink.online/" + image} alt="img" className="rounded-md w-full" />
    )
  };

  const handleChangeCategory = (p_id: any, cat_id: any) => {
    const updateCategory = fetch(`https://api.sexlink.online/api/post/update/${p_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cat_id: cat_id
      })
    })
    window.location.reload()
  };

  const handleUpdateCategory = async (cat_id: any) => {
    const updateCategory = await fetch(`https://api.sexlink.online/api/category/update/${cat_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cat_name: inputCategory
      })
    })
    window.location.reload()
  };

  const handleDeleteCategory = async (cat_id: any) => {
    const deleteCategory = await fetch(`https://api.sexlink.online/api/category/delete/${cat_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.reload()
  };

  const handleDeletePost = async (p_id: any) => {
    const deletePost = await fetch(`https://api.sexlink.online/api/post/delete/${p_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.reload()
  };

  const handleAddPost = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('p_image', file)
    formData.append('cat_id', categoryAdd)
    const addPost = await fetch('https://api.sexlink.online/api/post/add', {
      method: 'POST',
      body: formData
    })
    window.location.reload()
  }

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

  useEffect(() => { }, [posts, categories, currentTab])

  return (
    <div className="w-full flex flex-col justify-center items-center">

      <Modal
        open={openModal}
        onClose={handleClose}
      >
        <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Thêm Mới</p>
            <div className="modal-close cursor-pointer z-50" onClick={handleClose}>
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><polygon points="18 1.41 16.59 0 9 7.59 1.41 0 0 1.41 7.59 9 0 16.59 1.41 18 9 10.41 16.59 18 18 16.59 10.41 9 18 1.41" /></svg>
            </div>
          </div>
          <form onSubmit={handleAddPost}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >Hình Ảnh</label>
              <input type="file" name="product_images" accept="image/*" onChange={(e: any) => setFile(e.target.files[0])} />
            </div>
            {
              file
                ?
                <div className="mb-4">
                  <img src={URL.createObjectURL(file)} alt="img" className="w-1/2" />
                </div>
                :
                null
            }
            <select className="border border-gray-200 rounded-md px-2 py-1" onChange={(e) => setCategoryAdd(e.target.value)}>
              {
                categories?.map((category: any, index: any) => {
                  return (
                    <option key={index} value={category?.cat_id}>{category?.cat_name}</option>
                  )
                })
              }
            </select>
            <div className="flex items-center justify-between mt-6">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline" >
                THÊM HÌNH TRÊN
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {
        params.get('key') === 'n9KOd80xx'
          ?
          <div className="w-full flex flex-col justify-center items-center mt-10">
            <div className="w-2/3 flex flex-col justify-center items-center text-center">
              <div className="w-full grid grid-cols-2 gap-4">
                <div onClick={() => setCurrentTab(1)} className={`${currentTab === 1 ? 'bg-blue-900 text-white' : 'bg-gray-100'} py-2 rounded-md text-[18px] font-semibold cursor-pointer`}>Quản Lý Hình Ảnh</div>
                <div onClick={() => setCurrentTab(2)} className={`${currentTab === 2 ? 'bg-blue-900 text-white' : 'bg-gray-100'} py-2 rounded-md text-[18px] font-semibold cursor-pointer`}>Quản Lý Danh Mục</div>
              </div>

              <div className="w-full h-[2px] bg-gray-200 mt-10 mb-10"></div>

              {
                currentTab === 2
                  ?
                  <div className="w-full flex flex-col justify-center items-start gap-4">
                    <h1 className="text-[20px] font-bold mb-2">Danh Mục</h1>
                    {
                      categories?.map((item: any, index: any) => {
                        return (
                          <div key={index} className="flex justify-center items-center">
                            <input className="py-2 pl-2 border border-gray-200 rounded-md" value={item?.cat_name} />
                            <input onChange={(e) => setInputCategory(e.target.value)} className="py-2 pl-2 pr-20 border border-gray-200 rounded-md ml-2" placeholder="Đổi" />
                            <div onClick={() => handleUpdateCategory(item?.cat_id)} className="bg-green-500 text-white font-semibold py-2 px-2 rounded-md ml-2 cursor-pointer">Cập nhật</div>
                            <div onClick={() => handleDeleteCategory(item?.cat_id)} className="bg-red-500 text-white font-semibold py-2 px-2 rounded-md ml-2 cursor-pointer">Xoá</div>
                          </div>
                        )
                      })
                    }
                  </div>
                  :
                  <div className="w-full flex flex-col justify-center items-start">
                    {
                      
                      categories?.length === 0 ? <div className="w-full py-20"><CircularProgress /></div> :
                      
                      categories?.map((item: any, index: any) => {
                        return (
                          <div key={index} className="w-full mb-10">
                            <div className="w-full flex justify-between items-center mb-4">
                              <h1 className="text-[20px] font-bold">{item?.cat_name}</h1>
                              {
                                item?.cat_id !== 1
                                  ?
                                  <div></div>
                                  :
                                  <div onClick={() => setOpenModal(true)} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer">Thêm mới</div>
                              }
                            </div>
                            <div className="grid grid-cols-6 gap-4">
                              {
                                filterPosts(item?.cat_id)?.map((post: any, index: any) => {
                                  return (
                                    <div key={index} className="w-full border border-gray-200 rounded-md p-2 flex flex-col justify-center items-center">
                                      {renderImage(post?.p_image)}
                                      <div className="w-full flex justify-center items-center gap-2 mt-2">
                                        <select className="border border-gray-200 rounded-md px-2 py-1" onChange={(e) => handleChangeCategory(post?.p_id, e.target.value)}>
                                          {
                                            categories?.map((category: any, index: any) => {
                                              return (
                                                <option key={index} value={category?.cat_id}>{category?.cat_name}</option>
                                              )
                                            })
                                          }
                                        </select>
                                        <div onClick={() => handleDeletePost(post?.p_id)} className="bg-red-500 text-white font-semibold px-2 py-1 rounded-md cursor-pointer">Xoá</div>
                                      </div>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="w-full h-[2px] bg-gray-200 mt-10"></div>
                          </div>
                        )
                      })
                    }
                  </div>
              }
            </div>
          </div>
          :
          <div className="w-full flex flex-col justify-center items-center">Invalid</div>
      }
    </div>
  );
}
