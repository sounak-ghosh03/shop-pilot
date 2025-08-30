import Product from "../models/product.model.js";
import { uploadOnCloudinary } from "../config/cloudinary.js";

// add product :/api/product/add
export const addProduct = async (req, res) => {
    try {
        const { name, price, offerPrice, description, category } = req.body;

        // Multer: req.files is always an array when using upload.array("images")
        const files = req.files || [];

        if (
            !name ||
            !price ||
            !offerPrice ||
            !description ||
            !category ||
            files.length === 0
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields including at least one image are required",
            });
        }

        // Upload each file to Cloudinary
        const uploads = await Promise.all(
            files.map(async (file) => {
                return uploadOnCloudinary(file.path);
            })
        );

        // Check if any failed
        const failed = uploads.some((u) => !u || !u.url);
        if (failed) {
            return res.status(500).json({
                success: false,
                message: "Failed to upload one or more images to Cloudinary",
            });
        }

        const imageUrls = uploads.map((u) => u.url);

        const product = new Product({
            name,
            price,
            offerPrice,
            description,
            category,
            image: imageUrls, // Store Cloudinary URLs
        });

        const savedProduct = await product.save();

        return res.status(201).json({
            success: true,
            product: savedProduct,
            message: "Product added successfully",
        });
    } catch (error) {
        console.error("Error in addProduct:", error);

        return res.status(500).json({
            success: false,
            message: "Server error while adding product",
        });
    }
};

// get products :/api/product/get
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
// get single product :/api/product/id
export const getProductById = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await Product.findById(id);
        res.status(200).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
// change stock  :/api/product/stock
export const changeStock = async (req, res) => {
    try {
        const { id, inStock } = req.body;
        const product = await Product.findByIdAndUpdate(
            id,
            { inStock },
            { new: true }
        );
        res.status(200).json({
            success: true,
            product,
            message: "Stock updated successfully",
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
