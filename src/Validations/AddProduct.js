export const ProductInfoValidation = (formData) => {
    let errors = {};

    // Expiration date validation
    if (formData.categorySpecification === 1 && !formData.expirationDate) {
        errors.expirationDate = "Expiration date is required";
    }

    if (!formData.productName) {
        errors.productName = "Product Name is required.";
    }

    if (!formData.ndcUpc) {
        errors.ndcUpc = "NDC/UPC is required.";
    }



    if (!formData.categorySpecification) {
        errors.categorySpecification = "Category Specification is required.";
    }

    if (!formData.productCategory) {
        errors.productCategory = "Product Category is required.";
    }

    console.log(formData.states.length, "statessssssss");
    // States validation
    if (formData.states.length <= 0) {
        console.log(formData.states.length, "why");

        errors.states = "At least one state must be selected.";
    }

    return errors;
};



export const ProductPriceValidation = (formData) => {
    let errors = {};

    if (formData.price === null || formData.price === undefined || formData.price <= 0) {
        errors.price = "Price is required and must be greater than 0.";
    }

    if (formData.salePrice > 0) {  // Check for positive sale price
        if (!formData.salePriceForm || formData.salePriceForm.trim() === "") {
            errors.salePriceForm = "Sale price 'from' date is required.";
        }
        if (!formData.salePriceTo || formData.salePriceTo.trim() === "") {
            errors.salePriceTo = "Sale price 'to' date is required.";
        }
    }

    if (formData.amountInStock === null || formData.amountInStock === undefined || formData.amountInStock <= 0) {
        errors.amountInStock = "Amount In Stock is required.";
    }

    return errors;
};


// export const ProductPriceValidation = (formData) => {
//     let errors = {};

//     // Price is mandatory
//     if (formData.price === null || formData.price === undefined || formData.price <= 0) {
//         errors.price = "Price is required.";
//     }

//     // Sale price is mandatory
//     if (formData.salePrice === null || formData.salePrice === undefined || formData.salePrice <= 0) {
//         errors.salePrice = "Sale price is required.";
//     } else {
//         // If sale price is provided, salePriceForm and salePriceTo are mandatory
//         if (!formData.salePriceForm || formData.salePriceForm.trim() === "") {
//             errors.salePriceForm = "Sale price 'from' date is required.";
//         }
//         if (!formData.salePriceTo || formData.salePriceTo.trim() === "") {
//             errors.salePriceTo = "Sale price 'to' date is required.";
//         }
//     }

//     return errors;
// };

