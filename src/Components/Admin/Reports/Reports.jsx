// import React, { useState } from "react";
// import { TextField } from "@mui/material";

// const Reports = () => {
//   // State to store input values and the saved reports data
//   const [reportType, setReportType] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [reports, setReports] = useState([]); // Array to hold saved reports

//   // Handle report type change
//   const handleReportTypeChange = (e) => {
//     setReportType(e.target.value);
//   };

//   // Handle From date change
//   const handleFromDateChange = (e) => {
//     setFromDate(e.target.value);
//   };

//   // Handle To date change
//   const handleToDateChange = (e) => {
//     setToDate(e.target.value);
//   };

//   // Handle form submission and save data to table
//   const handleSave = () => {
//     // Make sure all fields are filled
//     if (reportType && fromDate && toDate) {
//       const newReport = {
//         reportType,
//         fromDate,
//         toDate,
//       };

//       // Add new report to the reports array
//       setReports([...reports, newReport]);

//       // Clear the input fields after saving
//       setReportType("");
//       setFromDate("");
//       setToDate("");
//     } else {
//       alert("Please fill all fields");
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {/* Form Section */}
//       <div className="bg-white shadow-lg rounded-lg mx-5 p-6 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Generate Report</h2>
//         <div className="flex gap-5 ">
//           <div className="flex flex-col">
//             <label className="mb-2 text-sm font-medium text-gray-700">
//               Type of report
//             </label>
//             <select
//               value={reportType}
//               onChange={handleReportTypeChange}
//               className="border w-52 border-gray-300 rounded-lg px-3 py-2"
//             >
//               <option value="">Select a report</option>
//               <option value="Payments">Payments History</option>
//               <option value="Orders">Purchase History</option>
//               <option value="Settlements">NewOrders</option>
//               <option value="Returns">ExpiredItems</option>
//               <option value="Returns">PendingShipments</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-sm font-medium text-gray-700">
//               From:
//             </label>
//             <TextField
//               type="date"
//               size="small"
//               value={fromDate}
//               className="w-52"
//               onChange={handleFromDateChange}
//               InputProps={{ className: "border rounded-lg" }}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-sm font-medium text-gray-700">
//               To:
//             </label>
//             <TextField
//               type="date"
//               size="small"
//               className="w-52"
//               value={toDate}
//               onChange={handleToDateChange}
//               InputProps={{ className: "border rounded-lg" }}
//             />
//           </div>
//         </div>

//         <div className="flex justify-end mt-4">
//           <button
//             onClick={handleSave}
//             className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             Save
//           </button>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className=" p-6">
//         <div className="flex justify-between">
//           <h2 className="text-xl text-blue-900 font-semibold mb-4">
//             Saved Reports
//           </h2>

//           <button className="bg-green-500 text-white px-3 py-1 my-3 rounded-lg hover:bg-green-600 transition">
//             Export
//           </button>
//         </div>
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-blue-900 text-white">
//               <th className=" px-4 py-2 text-left">S No.</th>
//               <th className=" px-4 py-2 text-left">Report Name</th>
//               <th className=" px-4 py-2 text-left">From</th>
//               <th className=" px-4 py-2 text-left">To</th>
//               <th className=" px-4 py-2 text-left">Export Option</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.length > 0 ? (
//               reports.map((report, index) => (
//                 <tr key={index} className="border-t">
//                   <td className=" px-4 py-2">{index + 1}</td>
//                   <td className=" px-4 py-2">{report.reportType}</td>
//                   <td className=" px-4 py-2">{report.fromDate}</td>
//                   <td className=" px-4 py-2">{report.toDate}</td>
//                   <td className=" px-4 py-2">
//                     <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition">
//                       Export
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">
//                   No reports saved
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Reports;


import React, { useState } from "react";
import { TextField } from "@mui/material";
import { format, parseISO } from "date-fns";
import { getReportsApi } from "../../../Api/AdminApi";

const Reports = () => {
  // State to store input values and the saved reports data
  const [reportType, setReportType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reports, setReports] = useState([]); // Array to hold saved reports

  // Handle report type change
  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  // Handle From date change
  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  // Handle To date change
  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };
  // const handleDateChange = (setter) => (e) => {
  //   const inputDate = e.target.value; // YYYY-MM-DD from the native date input
  //   if (isValid(parseISO(inputDate))) {
  //     setter(inputDate); // Store the value as YYYY-MM-DD
  //   } else {
  //     alert("Invalid date format");
  //   }
  // };
  // Handle form submission and save data to table
  // const handleSave = () => {
  //   // Make sure all fields are filled
  //   if (reportType && fromDate && toDate) {
  //     const newReport = {
  //       reportType,
  //       fromDate,
  //       toDate,
  //     };

  //     // Add new report to the reports array
  //     setReports([...reports, newReport]);

  //     // Clear the input fields after saving
  //     setReportType("");
  //     setFromDate("");
  //     setToDate("");
  //   } else {
  //     alert("Please fill all fields");
  //   }
  // };

  const handleSave = async () => {
    if (reportType && fromDate && toDate) {
      const formattedFromDate = format(parseISO(fromDate), "MM/dd/yyyy");
      const formattedToDate = format(parseISO(toDate), "MM/dd/yyyy");
      console.log("fromdate==>", formattedFromDate)
      console.log("todate==>", formattedToDate)
       

      // const newReport = {
      //   reportType,
      //   fromDate: formattedFromDate,
      //   toDate: formattedToDate,
      // };
    
      // setReports([...reports, newReport]);
      try {
        const res = await getReportsApi(reportType, formattedFromDate, formattedToDate)
        setReports(res)
      } catch (error) {
        console.error(error);
      }
      setReportType("");
      setFromDate("");
      setToDate("");
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <div className="container mx-auto p-6">
      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg mx-5 p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Generate Report</h2>
        <div className="flex gap-5 ">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              Type of report
            </label>
            <select
              value={reportType}
              onChange={handleReportTypeChange}
              className="border w-52 border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="">Select a report</option>
              {/* <option value="Payments">Payments History</option>
              <option value="Orders">Purchase History</option>
              <option value="Settlements">NewOrders</option>
              <option value="Returns">ExpiredItems</option>
              <option value="Returns">PendingShipments</option> */}
              <option value="1">Payments History</option>
              <option value="2">Purchase History</option>
              <option value="3">NewOrders</option>
              <option value="4">ExpiredItems</option>
              <option value="5">PendingShipments</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              From:
            </label>
            <TextField
              type="date"
              size="small"
              className="w-52"
              // value={fromDate ? format(parseISO(fromDate), "yyyy-MM-dd") : ""}
              value={fromDate}
              onChange={handleFromDateChange}
              InputProps={{ className: "border rounded-lg" }}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              To:
            </label>
            <TextField
              type="date"
              size="small"
              className="w-52"
              // value={toDate ? format(parseISO(toDate), "yyyy-MM-dd") : ""}
              value={toDate}
              onChange={handleToDateChange}
              InputProps={{ className: "border rounded-lg" }}
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Save
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className=" p-6">
        <div className="flex justify-between">
          <h2 className="text-xl text-blue-900 font-semibold mb-4">
            Saved Reports
          </h2>

          <button className="bg-green-500 text-white px-3 py-1 my-3 rounded-lg hover:bg-green-600 transition">
            Export
          </button>
        </div>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-900 text-white">
              {/* <th className=" px-4 py-2 text-left">S No.</th>
              <th className=" px-4 py-2 text-left">Report Name</th>
              <th className=" px-4 py-2 text-left">From</th>
              <th className=" px-4 py-2 text-left">To</th>
              <th className=" px-4 py-2 text-left">Export Option</th> */}
              <th className=" px-4 py-2 text-left">S No.</th>
              <th className=" px-4 py-2 text-left">CustomerName</th>
              <th className=" px-4 py-2 text-left">OrderNumber</th>
              <th className=" px-4 py-2 text-left">PaymentAmount</th>
              <th className=" px-4 py-2 text-left">PaymentMethod</th>
              <th className=" px-4 py-2 text-left">PaymentDate</th>
              <th className=" px-4 py-2 text-left">OrderDate</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(reports) && reports.length > 0 ? (
              reports.map((report, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{report.customerName}</td>
                  <td className="px-4 py-2">{report.orderNumber}</td>
                  <td className="px-4 py-2">{report.paymentAmount}</td>
                  <td className="px-4 py-2">{report.paymentMethod}</td>
                  <td className="px-4 py-2">{report.paymentDate}</td>
                  <td className="px-4 py-2">{report.orderDate}</td>
                  {/* <td className="px-4 py-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition">
                      Export
                    </button>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No reports saved
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
