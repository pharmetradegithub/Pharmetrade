// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { fetchCustomerDashboard, fetchSellerDashboard } from '../../../Api/Dashboard';

// function LayoutDashboard() {
//   const user = useSelector((state) => state.user.user);
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   useEffect(() => {
//     console.log('User object:', user);
//     console.log('Customer ID:', user?.customerId);
//     if (user?.customerTypeId === 1 || user?.customerTypeId === 2 || user?.customerTypeId === 3) {
//       console.log("sellerDashBoardApi-->")
//       dispatch(fetchSellerDashboard(user?.customerId));
//       navigate('/layout/layoutsellerdashboard')
//     } else {
//       console.log("fetchAllProductsAll")
//       dispatch(fetchCustomerDashboard(user?.customerId))
//       navigate('/layout/layoutcustomerdashboard')
//     }
//   }, [user]);
//   return (
//     <div>LayoutDashboard</div>
//   )
// }

// export default LayoutDashboard


import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCustomerDashboard, fetchSellerDashboard } from '../../../Api/Dashboard';

function LayoutDashboard() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('User object:', user);
    console.log('Customer ID:', user?.customerId);
    if (user?.customerTypeId === 1 || user?.customerTypeId === 2 || user?.customerTypeId === 3) {
      console.log("sellerDashBoardApi-->")
      dispatch(fetchSellerDashboard(user?.customerId));
      navigate('/layout/layoutsellerdashboard')
    } else if (user?.customerTypeId === 5) {
      dispatch(fetchAdminLogin("1b8ec36a-6549-11ef-8a1f-0affd374995f"))
      navigate('/pharmEtradeadmin')
    }
    else {
      console.log("fetchAllcustomerDashboard-->")
      dispatch(fetchCustomerDashboard(user?.customerId))
      navigate('/layout/layoutcustomerdashboard')
    }
  }, [user?.customerId]);
  return (
    <div>LayoutDashboard</div>
  )
}

export default LayoutDashboard