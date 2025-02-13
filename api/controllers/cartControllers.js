const Carts = require("../models/Carts");

//get carts using email
const getCartByEmail = async (req, res) => {
    try {
        const email = req.query.email;
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        const query = { email: email };
        const result = await Carts.find(query).exec();

        res.status(200).json(result); //  FIXED: Added response
    } catch (error) {
        console.error("Error fetching cart:", error); // Log the error
        res.status(500).json({ message: error.message });
    }
};



//post a cart when add to cart clicked
const addToCart = async (req, res) => {
    const { menuItemId, name, recipe, image, price, quantity, email } = req.body;

    try {
        if (!email || !menuItemId) {
            return res.status(400).json({ message: "Email and menuItemId are required" });
        }

        // Check if the item already exists in the same user's cart
        const existingCartItem = await Carts.findOne({ menuItemId, email });

        if (existingCartItem) {
            return res.status(400).json({ message: "Product already exists in your cart!" });
        }

        // Create new cart item
        const cartItem = await Carts.create({ menuItemId, name, recipe, image, price, quantity, email });

        res.status(201).json({ insertedId: cartItem._id }); // ✅ FIXED: Send insertedId response
    } catch (error) {
        console.error("Error adding to cart:", error); // Log the error
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

//delete cart item
const deleteCart = async(req,res)=>{
    const cartId=req.params.id;
try {
    const deletedCart=await Carts.findByIdAndDelete(cartId);
    if(!deletedCart){
        return res.status(401).json({message:"cart items not found"})
}
res.status(200).json({message:"Cart item Deleted successfully "})
} catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
}
}

//update a cart item
const updateCart = async (req, res) => {

    const cartId = req.params.id;
    
    const {menuItemId, name, recipe, image, price, quantity, email } = req.body;
    
    try {
    
    const updatedCart = await Carts.findByIdAndUpdate(
    
    cartId, {menuItemId, name, recipe, image, price, quantity, email }, {
    
    new: true, runValidators: true
    
    }
    
    )
    
    if(!updatedCart) {
    
    return res.status(404).json({ message: "Cart Item not found"})
    
    }
    
    res.status(200).json(updatedCart)
    
    } catch (error) {
    
    res.status(500).json({message: error.message});
      }
    
}

// get single recipe

const getSingleCart = async (req, res) => {

    const cartId = req.params.id;
    
    try {
    const cartItem = await Carts.findById(cartId)
    res.status(200).json(cartItem)
    } catch (error) {
    
    res.status(500).json({message: error.message});
    
    }
    
    };


module.exports={
    getCartByEmail,
    addToCart,
    deleteCart,
    updateCart,
    getSingleCart,
}



// const Carts = require("../models/Carts");

// //get carts using email
// const getCartByEmail =async(req,res)=>{
//     try {
//         const email=req.query.email;
//         const query={email:email};
//         const result=await Carts.find(query).exec();
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// }


// //post a cart when add to cart clicked
// const addToCart =async(req,res)=>{
//     const{menuItemId,name,recipe,image,price,quantity,email}=req.body;
//     try {
//         //existing menu
//         const existingCartItem=await Carts.findOne({menuItemId});
//         if(existingCartItem){
//            return res.status(400).json({message:"Product Already exist!"});
//         }
//         else{
//         const cartItem= await Carts.create({
//             menuItemId,name,recipe,image,price,quantity,email
//         })
//         res.status(201).json(cartItem)}
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// }

// module.exports={
//     getCartByEmail,
//     addToCart
// }
