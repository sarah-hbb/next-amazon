import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-36 lg:-mt-52 xl:-mt-60 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            title={title}
            id={id}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2 grid-flow-row-dense">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              title={title}
              id={id}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      
        {products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              title={title}
              id={id}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      
    </div>
  );
};

export default ProductFeed;
