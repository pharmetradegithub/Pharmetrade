import React, { useState } from "react";
import trash from "../../../assets/trash.png";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import edit from "../../../assets/Edit.png";

const AdminBanners = () => {
  const [banners, setBanners] = useState([]);
  const [newBanners, setNewBanners] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editBanner, setEditBanner] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const MAX_WIDTH = 7680;
  const MAX_HEIGHT = 2200;

  // Handle new banners file input with validation for size
  const handleBannerChange = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > MAX_WIDTH || img.height > MAX_HEIGHT) {
          setErrorMessage(
            `Please upload a banner with dimensions less than or equal to ${MAX_WIDTH}px width and ${MAX_HEIGHT}px height.`
          );
        } else {
          // If valid, clear error and add banner
          setErrorMessage(null);
          setNewBanners((prevBanners) => [...prevBanners, img.src]);
        }
      };
    });
  };

  // Handle adding new banners
  const handleAddBanners = () => {
    if (newBanners.length > 0) {
      setBanners((prevBanners) => [...prevBanners, ...newBanners]);
      setNewBanners([]); // Clear the newBanners after adding
    }
  };

  // Handle editing banner
  const handleEditBanner = (index) => {
    setEditingIndex(index);
    setEditBanner(banners[index]);
  };

  const handleSaveEdit = () => {
    if (editBanner && editingIndex !== null) {
      const updatedBanners = banners.map((banner, index) =>
        index === editingIndex ? editBanner : banner
      );
      setBanners(updatedBanners);
      setEditingIndex(null);
      setEditBanner(null);
    }
  };

  // Handle deleting banner
  const handleDeleteBanner = (index) => {
    const filteredBanners = banners.filter((_, i) => i !== index);
    setBanners(filteredBanners);
  };

  // Handle edited banner input
  const handleEditBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditBanner(URL.createObjectURL(file));
    }
  };

  // Dropzone setup
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: true, // Enable selecting multiple files
    onDrop: (acceptedFiles) => handleBannerChange(acceptedFiles),
  });

  const BannerData = useSelector((state) => state.banner.banner);
  console.log("bbbbbb", BannerData);

  return (
    <div className="p-6 bg-gray-100 overflow-y-scroll">
      <h1 className="flex items-center text-3xl font-bold mb-6">
        Manage Banners{" "}
        {/* <p className="text-lg mt-2 ml-3">
          (Banner Size Should be in Width: 7680px , Height: 2200px ,
          Resolution:300)
        </p> */}

        <p className="flex text-lg mt-2 ml-2 items-center justify-center">
          (
          <p className="text-lg   text-red-500"> Banner Size Should be in Width: 7680px , Height: 2200px ,
            Resolution:300 </p>
          )
        </p>
      </h1>

      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-500 text-white p-2 mb-4 rounded">
          {errorMessage}
        </div>
      )}

      {/* Add Banners Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Banners</h2>
        <div
          {...getRootProps()}
          className="w-96 p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
        >
          <input {...getInputProps()} multiple />
          <p className="text-gray-500 text-center">
            Click here to select images
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {newBanners.map((banner, index) => (
            <div key={index} className="relative">
              <img
                src={banner}
                alt={`New Banner ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleAddBanners}
          className="bg-blue-900 text-white px-6 mx-4 py-2 rounded"
        >
          Save Banners
        </button>
      </div>

      {/* Display Banners */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Banners</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="w-full relative  overflow-hidden">
            {BannerData.length > 0 ? (
              <div>
                {BannerData.map((item, index) => (
                  <div key={index} className="">
                    <img
                      src={item.imageUrl}
                      alt={`Carousel Image ${index + 1}`}
                    />
                    <div className="flex ">
                      <button onClick={() => handleEditBanner(index)}>
                        <img src={edit} className="w-8 h-8" />
                      </button>
                      <button
                        onClick={() => handleDeleteBanner(index)}
                        className="bg-white text-white px-4 py-2 rounded"
                      >
                        <img src={trash} className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No banners available</p>
            )}
          </div>
        </div>
      </div>

      {/* Edit Banner Modal */}
      {editingIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Edit Banner</h2>
            <div className="relative w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400">
              <input
                type="file"
                accept="image/*"
                onChange={handleEditBannerChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <p className="text-gray-500 text-center">
                Click here or drag and drop images
              </p>
            </div>
            {editBanner && (
              <img
                src={editBanner}
                alt="Edited Banner"
                className="w-32 h-20 object-cover mb-4"
              />
            )}
            <button
              onClick={handleSaveEdit}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditingIndex(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBanners;
