import { GET_APP_PRODUCTS } from '../constants/ProductConstants';

const ProductService = {

    // get request function to service provider.
    
    getProducts: async function ()
    {
        const actualData = await fetch(GET_APP_PRODUCTS).then(response => response.json())
          .catch((err) => {
            console.log(err.message);
          });
   
        return actualData;
  }
}

export default ProductService;