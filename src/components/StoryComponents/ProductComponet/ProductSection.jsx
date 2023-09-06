import React from "react";
import { motion } from "framer-motion";
import "./product.css";
const ProductSection = () => {
  return (
    <div className="product-section">
      
      
      
      <motion.div
        className="product-image"
      initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <img
          src="/assets/images/madero_therapy.jpg"
          alt="Product Image"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
      <motion.div
        className="product-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h2>Our Products</h2>
        <p>
          We believe in sourcing products that are non-toxic, vegan, and local
          when possible. We are not completely toxic-free, but we believe in
          providing ingredients that are more responsible and ethical when
          possible so that you can truly enjoy your self-care experience.
        </p>
        <h3>Here’s a list of some of the products we offer:</h3>
        <ul>
          <li>
            Nail Products: J. Hannah (7 free), Sundays (10 free), Veque (9
            free), Base Coat (8-free), Sekala
          </li>
          <li>Massage Products: Sekala, Doterra</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ProductSection;
