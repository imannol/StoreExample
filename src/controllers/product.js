const Producto = require ('../models/product');

module.exports = {

    index: async (req, res, next)=>{
     const productos = await Producto.find({});
     res.status(200).json(productos);
    },

    newProducto: async (req, res, next)=>{
        const newProducto = new Producto(req.body);
        const product = await newProducto.save();
        res.status(200).json(product);
    },

    getProducto: async (req, res, next)=>{
     const  { productId } = req.params;
     const product = await User.findById(productId);
     res.status(200).json(product);
    },

    replaceProducto: async(req, res, next)=>{
        const { productId } = req.params;
        const newProducto = req.body;
        const oldProducto = await Producto.findByIdAndUpdate(productId, newProducto);
        res.status(200).json({success: true});
    },

    updateProducto: async( req, res, next)=>{
        const { productId } = req.params;
        const oldProducto = await User.findByIdAndUpdate(productId, newProducto);
        res.status(200).json({success: true});
    },

    deleteProducto: async( req, res, next)=>{
        const { productId } = req.params;
         await Producto.findByIdAndRemove(productId);
        res.status(200).json({success: true});
    },
};
