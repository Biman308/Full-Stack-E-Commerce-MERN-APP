// This object organizes and stores information about different API endpoints

const SummaryApi = {
    signUP: {
        url: 'https://shopping-app-three-blue.vercel.app/api/signup',
        method: 'POST',
    },
    signIn: {
        url: 'https://shopping-app-three-blue.vercel.app/api/signin',
        method: 'POST',
    },
    current_user: {
        url: 'https://shopping-app-three-blue.vercel.app/api/user-details',
        method: "GET"
    },
    logout_user: {
        url: 'https://shopping-app-three-blue.vercel.app/api/userLogout',
        method: "GET"
    },
    allUser: {
        url: 'https://shopping-app-three-blue.vercel.app/api/all-user',
        method: 'GET'
    },
    updateUser: {
        url: 'https://shopping-app-three-blue.vercel.app/api/update-user',
        method: "POST"
    },
    uploadProduct: {
        url: 'https://shopping-app-three-blue.vercel.app/api/upload-product',
        method: 'POST'
    },
    allProduct: {
        url: 'https://shopping-app-three-blue.vercel.app/api/get-product',
        method: 'GET'
    },
    updateProduct: {
        url: 'https://shopping-app-three-blue.vercel.app/api/update-product',
        method: 'POST'
    },
    categoryProduct: {
        url: 'https://shopping-app-three-blue.vercel.app/api/get-categoryProduct',
        method: 'GET'
    },
    categoryWiseProduct: {
        url: 'https://shopping-app-three-blue.vercel.app/api/category-product',
        method: 'POST'
    },
    productDetails: {
        url: 'https://shopping-app-three-blue.vercel.app/api/product-details',
        method: 'POST'
    },
    addToCartProduct: {
        url: 'https://shopping-app-three-blue.vercel.app/api/addtocart',
        method: 'POST'
    },
    addToCartProductCount: {
        url: 'https://shopping-app-three-blue.vercel.app/api/countAddToCartProduct',
        method: 'GET'
    },
    addToCartProductView: {
        url: 'https://shopping-app-three-blue.vercel.app/api/view-cart-product',
        method: 'GET'
    },
    updateCartProduct: {
        url: 'https://shopping-app-three-blue.vercel.app/api/update-cart-product',
        method: 'POST'
    },
    deleteCartProduct: {
        url: 'https://shopping-app-three-blue.vercel.app/api/delete-cart-product',
        method: 'POST'
    },
    searchProduct: {
        url: 'https://shopping-app-three-blue.vercel.app/api/search',
        method: 'GET'
    },
    filterProduct: {
        url: 'https://shopping-app-three-blue.vercel.app/api/filter-product',
        method: 'POST'
    }
}


export default SummaryApi;
