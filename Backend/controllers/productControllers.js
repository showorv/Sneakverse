
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

    try {
        
        const product = await Product.findById(req.params.id)
        if(product){
            res.status(200).json(product)
        }else{
            res.status(404).json({mssgs:"No product found"})
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in singleproduct", error:error.message})
    }
}


// similar products retrive based on the current products catagory and gender(if) brand

const similarProduct = async (req,res) =>{

    const {id} = req.params;
   
    try {
        
        const product = await Product.findById(id);

        if(!product){
            return res.status(404).json({mssgs:"Product not found"})
        }

        const similarProducts = await Product.find({
            _id: {$ne: id}, //exclude the current product
            category: product.category,
            brand: product.brand
        }).limit(4);

        res.status(200).json(similarProducts)
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in similar product", error:error.message})
    }
}

// best seller with high rating

const bestSellerProduct = async (req,res)=>{

    try {
      const bestseller = await Product.find().sort({rating:-1}).limit(4)
      if(bestseller){
        res.json(bestseller)
      }else{
         res.status(404).json({mssgs:"No best seller found"})
      }
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in best seller", error:error.message})
    }
}

// n pre-order section for collection which equal pre-order

const preOrderProducts = async( req,res)=>{

    try {
        const preorder = await Product.find({ collections: "pre-order" })

        res.status(200).json(preorder)
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in pre order", error:error.message})
    }
}


// in stock


const stockProducts = async( req,res)=>{

    try {
        const stockorder = await Product.find({ collections: "Stock" }).limit(10)

        res.status(200).json(stockorder)
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in stock", error:error.message})
    }
}


//new arrival for latest 8 products retrive from creation date

const newArrival = async (req,res)=>{

    try {
        
        const newProduct = await Product.find().sort({createdAt: -1}).limit(8);
        res.status(200).json(newProduct)
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in new arrival", error:error.message})
    }
}

export default {productsCreate, updateProduct, deleteProduct,allProducts,singleProduct,similarProduct, bestSellerProduct,preOrderProducts,stockProducts, newArrival};