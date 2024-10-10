

// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";

// const LayoutAddBulkProduct = () => {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState("");

  

//   const onDrop = (acceptedFiles) => {
//     const selectedFile = acceptedFiles[0];
//     const fileType = selectedFile.type;

//     if (
//       fileType ===
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
//       fileType === "application/vnd.ms-excel"
//     ) {
//       setFile(selectedFile);
//       setError("");
//     } else {
//       setFile(null);
//       setError("Please upload a valid Excel file ( .xlsx or .xls ).");
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: ".xlsx, .xls",
//     multiple: false,
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (file) {
//       // Logic to handle file upload goes here
//       console.log("File submitted:", file);
//     } else {
//       console.log("No file selected or invalid file type.");
//     }
//   };

//   return (
//     <div className="flex flex-col  justify-center pl-8 mt-4 bg-gray-100">
//       <div className="flex flex-col justify-start ">
//         <h1 className="text-2xl font-bold text-blue-900 ">ADD PRODUCT</h1>
//         <p className="border-b border-blue-900 w-40  "></p>
//       </div>
//       <div className="w-full max-w-md p-8 mt-8 bg-white rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-4">Add Excel Sheet</h1>
//         <form onSubmit={handleSubmit}>
//           <div
//             {...getRootProps()}
//             className={`border-2 border-dashed rounded-lg p-4 text-center ${
//               isDragActive ? "border-blue-500" : "border-gray-300"
//             } mb-4`}
//           >
//             <input {...getInputProps()} />
//             {isDragActive ? (
//               <p className="text-blue-500">Drop the files here ...</p>
//             ) : (
//               <p className="text-gray-500">
//                 Drag 'n' drop an Excel file here, or click to select one
//               </p>
//             )}
//           </div>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           {file && <p className="text-green-500 mb-4">{file.name} selected</p>}
//           <button
//             type="submit"
//             className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//           >
//             Upload
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LayoutAddBulkProduct;















// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";


// const LayoutAddBulkProduct = () => {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState("");

  

//   const onDrop = (acceptedFiles) => {
//     const selectedFile = acceptedFiles[0];
//     const fileType = selectedFile.type;

//     if (
//       fileType ===
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
//       fileType === "application/vnd.ms-excel"
//     ) {
//       setFile(selectedFile);
//       setError("");
//     } else {
//       setFile(null);
//       setError("Please upload a valid Excel file ( .xlsx or .xls ).");
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: ".xlsx, .xls",
//     multiple: false,
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (file) {
//       // Logic to handle file upload goes here
//       console.log("File submitted:", file);
//     } else {
//       console.log("No file selected or invalid file type.");
//     }
//   };



//   // download file
//   const handleDownload = () => {
//     // Replace this with the actual path to your Excel file
//     const fileUrl = '/Users/Public/Desktop/13sep24_0546pm.xlsx'; // Path relative to the public folder
//     const fileUrl2 = '/SideMenu.xlsx'; 
//     const link = document.createElement('a');       
//     link.href = fileUrl2;
//     link.download = 'SideMenu.xlsx';  
//     // "C:\Users\Bhargav\Desktop\Signup Input Field doc.xlsx"; // This will set the name of the downloaded file
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="flex flex-col  justify-center pl-8 mt-4 bg-gray-100">
//       <div className="flex flex-col justify-start ">
//         <h1 className="text-2xl font-bold text-blue-900 ">ADD PRODUCT</h1>
//         <p className="border-b border-blue-900 w-40  "></p>
//       </div>
//       <div className="flex justify-evenly">

//       <div className="w-full max-w-md p-8 mt-8 bg-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-center mb-4">Download Excel Sheet</h1>
//       <div className="border-2 border-dashed rounded-lg p-4 mb-4 text-center"  onClick={handleDownload}>
//         <p className="text-gray-500">
//           Download Excel file here
//         </p>
//       </div>
//       <button
//         type="button"
//         className="w-full bg-blue-900 text-white py-2 px-4 mt-5 rounded-lg hover:bg-blue-600"
//         onClick={handleDownload}
//       >
//         Download
//       </button>
//     </div>
//       <div className="w-full max-w-md p-8 mt-8 bg-white rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-4">Add Excel Sheet</h1>
//         <form onSubmit={handleSubmit}>
//           <div
//             {...getRootProps()}
//             className={`border-2 border-dashed rounded-lg p-4 text-center ${
//               isDragActive ? "border-blue-500" : "border-gray-300"
//             } mb-4`}
//           >
//             <input {...getInputProps()} />
//             {isDragActive ? (
//               <p className="text-blue-500">Drop the files here ...</p>
//             ) : (
//               <p className="text-gray-500">
//                 Drag 'n' drop an Excel file here, or click to select one
//               </p>
//             )}
//           </div>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           {file && <p className="text-green-500 mb-4">{file.name} selected</p>}
//           <button
//             type="submit"
//             className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//           >
//             Upload
//           </button>
//         </form>
//       </div>
//       {/* <div className="w-full max-w-md p-8 mt-8 bg-white rounded-lg shadow-lg ">
//       <h1 className="text-2xl font-bold text-center mb-4">Download Excel Sheet</h1>
//      <div className="border-2 border-dashed rounded-lg p-4 mb-4 text-center">
//      <p className="text-gray-500">
//                 Download Excel file here
//               </p>
//      </div>
//       <button
//             type="submit"
//             className="w-full bg-blue-900 text-white py-2 px-4 mt-5 rounded-lg hover:bg-blue-600"
//           >
//             Download
//           </button>

//       </div> */}


//       </div>
//     </div>
//   );
// };

// export default LayoutAddBulkProduct;

















import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const LayoutAddBulkProduct = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [fileUrl, setFileUrl] = useState(""); // Store the file URL

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    const fileType = selectedFile.type;

    if (
      fileType ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      fileType === "application/vnd.ms-excel"
    ) {
      setFile(selectedFile);
      setError("");

      // Create a URL for the file so it can be downloaded
      const fileURL = URL.createObjectURL(selectedFile);
      setFileUrl(fileURL);
    } else {
      setFile(null);
      setError("Please upload a valid Excel file (.xlsx or .xls).");
      setFileUrl(""); // Clear the URL if file is invalid
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".xlsx, .xls",
    multiple: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      // Logic to handle file upload goes here
      console.log("File submitted:", file);
    } else {
      console.log("No file selected or invalid file type.");
    }
  };

  // const handleDownloadTemplate = () => {
  //   const fileUrl2 = "/SideMenu.xlsx";
  //   const link = document.createElement("a");
  //   link.href = fileUrl2;
  //   link.download = "SideMenu.xlsx"; // Name of the downloaded template file
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div className="flex flex-col justify-center pl-8 mt-4 bg-gray-100">
      <div className="flex flex-col justify-start">
        <h1 className="text-2xl font-bold text-blue-900">ADD PRODUCT</h1>
        <p className="border-b border-blue-900 w-40"></p>
      </div>
      <div className="flex flex-col">
        {/* Download Excel Template */}
       

        {/* Upload Excel Sheet */}
        <div className="w-full max-w-md p-8 mt-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Add Excel Sheet</h1>
          <form onSubmit={handleSubmit}>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-4 text-center ${
                isDragActive ? "border-blue-500" : "border-gray-300"
              } mb-4`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-blue-500">Drop the files here ...</p>
              ) : (
                <p className="text-gray-500">
                  Drag 'n' drop an Excel file here, or click to select one
                </p>
              )}
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {file && <p className="text-green-500 mb-4">{file.name} selected</p>}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Upload
            </button>
          </form>

          {/* Display download link for uploaded file */}
          
        </div>
        {file && (
            <div className="mt-4">
              <p className="text-left text-green-500">
                File uploaded successfully!
              </p>
              <a
                href={fileUrl}
                download={file.name}
                className="block text-left text-blue-700 underline"
              >
                Download {file.name}
              </a>
            </div>
          )}
      </div>
    </div>
  );
};

export default LayoutAddBulkProduct;
