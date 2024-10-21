import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCT_DETAILS } from "../GraphQl/Query";
import { useEffect, useState } from "react";

function ProductList() {
  // Fetch product data using Apollo's useQuery hook
  let { data } = useQuery(GET_ALL_PRODUCT_DETAILS);
  let [productList, setProductList] = useState([]); // State to store the list of products

  // useEffect to update the product list when data changes
  useEffect(() => {
    if (data !== undefined) {
      setProductList(data.getProducts);
    }
  }, [data]);

  return (
    <>
      <section className="container-fluid">
        <section className="row justify-content-center" >
          {productList.map((product, index) => {
            return (
              <article
                key={index}
                className="card col-3 gap-3"
                title={product.title}
              >
                <img 
                src= {product.image} 
                className="card-img-top w-100" 
               style={{height: "15rem"}}
                alt={product.title} />
                <section 
                   className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 20)}</h5>
                  <p className="card-text">${product.price}</p>
                  <a href="#" className="btn btn-primary">Explore</a>
                </section>
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
}

export default ProductList;
