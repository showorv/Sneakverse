
import Product from "../model/ProductModel.js";


const productsCreate = async (req,res) =>{
    try {
        
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
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
            category,
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


// update product by id

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,  // Find product by ID
            { $set: req.body }, // Update only provided fields
            { new: true, runValidators: true } // Return updated doc & validate fields
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};

//delete product by id

const deleteProduct = async (req,res) =>{

    try {
        
        //find the product by id

        const product = await Product.findById(req.params.id)
        if(product){
            await product.deleteOne();
            res.status(200).json({messgs:"Products deleted"})
        }else{
            res.status(404).json({messgs:"products not found"})
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"Error in deleteproduct", error:error.message})
    }
}


// all products with filter

const allProducts = async (req,res) =>{

    try {
        //for filter
        const {brand,sizes,colors, category,collections, minPrice, maxPrice, search, sortBy,limit} = req.query;  


        let query = {};

        //filter logic

        if( collections && collections.toLocaleLowerCase()!== "all"){
            query.collection = collections
        }
        if( category && category.toLocaleLowerCase()!== "all"){
            query.category = category
        }

        if(brand){
            query.brand = {$in: brand.split(",")}
        }
        if(sizes){
            query.size = {$in: sizes.split(",")}
        }

        if (colors) {
            query.color = { $in: colors.split(",") }; 
        }

        if( minPrice || maxPrice){
            query.price = {}
            if(minPrice) query.price.$gte = Number(minPrice)
            if(maxPrice) query.price.$lte = Number(maxPrice)
        }

        if(search){
            query.$or = [
                {name: {$regex: search, $options:"i"}},
                {description: {$regex: search, $options:"i"}},
            ]
        }

        let sort = {};
        if(sortBy){
            switch(sortBy){
                case "priceAsc":
                    sort = {price:1};
                    break;

                case "priceDesc":
                    sort = {price: -1};
                    break;
                case "popularity":
                    sort = {rating:-1};
                    break;
                default:
                    break;
            }
        }


        //FETCH products and apply sorting and limit

        let products = await Product.find(query).sort(sort).limit(Number(limit) || 0);

        res.status(200).json(products)
    } catch (error) {
        console.error(error);
        res.status(404).json({messgs:"error in all products", error:error.message})
    }
}


// get single product by Id 

const singleProduct = async(req,res)=>{

}

export default {productsCreate, updateProduct, deleteProduct,allProducts,singleProduct};