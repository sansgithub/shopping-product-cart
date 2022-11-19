import { useEffect, useState } from "react";
import ProductService from "../services/ProductService";

function ProductTable () {

  const [productData, setProducts] = useState([]);
      
  useEffect(() => {
    ProductService.getProducts().then((productData) => {
      console.log("product response from service:", productData);
      // response handling
      setProducts(productData.products)
    })
  }, []);
  
    const DisplayData = productData.map(
        (item, index) => {
            return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td>{item.brand}</td>
                  <td>
                    <img src={item.thumbnail} alt="" height={100} />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.rating}</td>
                </tr>
            )
        }
    )
 
    return(
      <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Brand</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Rating</th>
                    </tr>
                </thead>

                <tbody>
                  {DisplayData}
                </tbody>
            </table>
        </div>
    )
}
 
 export default ProductTable;