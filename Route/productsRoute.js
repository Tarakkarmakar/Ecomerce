import express from 'express'
import { isAdmin, requireSignIn } from '../Middlewares/authMiddleware.js'
import { 
    orderSuccess,
 
    createProductController,
    deleteProductController,
    getProductController, 
    getSingleProductController,

    productCountController,
    productFiltersController,
    productImageController, 
    productListController, 

    updateProductController} from '../Controllers/productController.js'
import formidable from 'express-formidable';

const router = express.Router()
 
//Routes
router.post(
    '/create-product', 
    formidable(),
    createProductController)

    // FOR UPDATINGRoutes
     router.put(
    '/update-product/:pid', 
    // requireSignIn, 
    // isAdmin,
    formidable(),
    updateProductController)

//getting all the products
router.get('/get-product', getProductController)  

//single Product
router.get('/get-product/:slug', getSingleProductController) 


//FOR GETTING IMAGES
router.get('/product-photo/:pid' , productImageController)

//Delete Product
router.delete('/delete-product/:pid', deleteProductController)

//Filter Product
router.post('/product-filters' , productFiltersController)

//FOR PAGINATION
router.get('/product-count', productCountController)

//PRODUCT PER PAGE
router.get('/product-list/:page', productListController)



//PAYMENTS
router.post('/order/orderpost', requireSignIn,orderSuccess )

export default router