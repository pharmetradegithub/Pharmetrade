
import React, { useEffect, useState } from "react";
import wishlist from "../../../assets/Wishlist1_icon.png";
import compare from "../../../assets/CompareNav2.png";
import next from "../../../assets/Next_icon.png";
import previous from "../../../assets/Previous_icon.png";
import cart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartApi } from "../../../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";
// import { fetchGetProductOffer } from "../Api/ProductApi";

const OffersProducts = ({ topMargin, addCart, wishList }) => {
  const itemsPerPage = 10;

  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState({});
  const [currentItems, setCurrentItems] = useState([]);
  
  const productOffer = useSelector((state) => state.product.getProductSpecialOffer);
  // const carts = useSelector((state) => state.cart.cart);
  // const wishlist = useSelector((state) => state.wishlist.wishlist);
  const user = useSelector((state) => state.user.user);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const [wishlistProductIDs, setwishlistProductIDs] = useState([]);
  //const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find((item) => item.product.productID === productID);
    return wishlistItem ? wishlistItem.wishListId : null;
  };

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setwishlistProductIDs(wishlist.map((wishItem) => wishItem.product.productID));
    }
  }, [wishlist]);


  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil((productOffer?.length || 0) / itemsPerPage);

  
  useEffect(() => {
    if (productOffer) {
      setCurrentItems(productOffer.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [productOffer, indexOfFirstItem, indexOfLastItem]);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // const handleCart = (index) => {
  //   console.log("Adding to cart:", index);
  //   const prolist = {
  //     id: index,
  //     src: productOffer[index].productGallery.imageUrl,
  //     price: productOffer[index].salePrice,
  //     rate: "SKU 6545555",
  //     rates: "UPN member price:",
  //     ratesupn: "$45.00",
  //   };
  //   addCart(prolist);
  // };

  const handleCart = async (productID) => {
    const cartData = {
      customerId: user.customerId,
      productId: productID,
      quantity: 1,
      isActive: 1,
    };
    try {
      await addCartApi(cartData);

    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  // const handleClick = (index) => {
  //   setFavoriteItems((prevState) => ({
  //     ...prevState,
  //     [index]: !prevState[index],
  //   }));

  //   const prolist = {
  //     id: index,
  //     src: productOffer[index].productGallery.imageUrl,
  //     price: productOffer[index].salePrice,
  //     rate: "SKU 6545555",
  //     rates: "UPN member price:",
  //     ratesupn: "$45.00",
  //   };
  //   wishList(prolist);
  // };
  const handleClick = async (productID) => {
    if (wishlistProductIDs.includes(productID)) {
      setwishlistProductIDs(
        wishlistProductIDs.filter((id) => id !== productID)
      );
      await removeFromWishlistApi(getWishlistIdByProductID(productID));
    } else {
      setwishlistProductIDs([...wishlistProductIDs, productID]);
      const wishListData = {
        wishListId: "0",
        productId: productID,
        customerId: user.customerId,
        isActive: 1,
      };
      await addToWishlistApi(wishListData);
    }
  };
  console.log("offersData-->", currentItems)

  return (
    <div
      className="w-full flex flex-col justify-center items-center overflow-y-auto  bg-gray-200"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      <div className="w-full h-full bg-gray-200 mb-5 mt-8">
        <div className="h-full p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {currentItems.map((offer, index) => (
              <div
                key={index}
                className="flex flex-col border rounded-lg w-60 h-80 bg-white"
              >
                <div className="flex justify-between">
                  <div className="flex flex-row justify-center text-center bg-yellow-300 w-20 rounded-l-xl rounded-b-full pb-8">
                    <p className="pb-3 mt-3 text-black font-semibold">
                      {offer.discount}% Off
                    </p>
                  </div>
                  <div className="m-3">
                    <img
                      onClick={() => {
                        // e.stopPropagation();
                        handleClick(offer.productID)
                      }}
                      src={
                        wishlistProductIDs.includes(offer.productID)
                          ? filledHeart
                          : emptyHeart
                      }
                      className="h-5 w-5 cursor-pointer"
                      alt="Favorite Icon"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center -mt-5">
                  <Link to={`/detailspage/${offer.productID}`}>
                    <img
                      src={offer.productGallery.imageUrl}
                      className="w-60 h-40 hover:cursor-pointer p-6"
                      alt={offer.productName}
                    />
                  </Link>
                </div>
                <div className="flex justify-center flex-col items-center mb-1 cursor-pointer">
                <Link to={`/detailspage/${offer.productID}`}>
                  <p
                    className="font-semibold text-lg hover:underline w-52 items-start justify-start text-center whitespace-nowrap overflow-hidden text-ellipsis"
                    title={offer.productName}
                    // onClick={() => navigate(`/detailspage/${index}`)}
                  >
                    {offer.productName}
                  </p>
                  </Link>
                  <span className="">${offer.salePrice?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mx-2">
                  <button
                    onClick={() => handleCart(offer.productID)}
                    className="items-center justify-center px-2 flex gap-1 bg-blue-900 border text-sm font-medium rounded-md text-white p-1"
                  >
                    <img src={cart} className="w-4 h-4" alt="Cart Icon" />
                    Add to cart
                  </button>
                  <div className="flex gap-2">
                    <img src={compare} className="w-5 h-5" alt="Compare Icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end my-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={previous} className="w-2" alt="Previous Page" />
        </button>
        <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={next} className="w-2" alt="Next Page" />
        </button>
      </div>
    </div>
  );
};

export default OffersProducts;


