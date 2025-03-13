import Product from "../model/ProductModel.js";


const productsCreate = async (req,res) =>{
    try {
        
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            catagory,
            brand,
            sizes,
            colors,
            collections,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            sku
        } = req.body

        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            catagory,
            brand,
            sizes,
            colors,
            collections,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            sku,
            user: req.user._id // reference to the admin who created it
        })


        //create product in db

        const createdProduct = await product.save();
        res.status(200).json(createdProduct)
    } catch (error) {
        
        console.error(error);
        res.status(404).json({mssgs:"server error", error: error.message})
    }
}


export default productsCreate;