export const getProductsQuery = `query getProducts($query: ProductQueryCriteria,$sortKey: String, $reverse: Boolean){
    products(query:$query,  sortKey: $sortKey,reverse:$reverse) {
      products {
        sku,
        title,
        slug,
        images,
        price,
        score,
        n_o_reviews,
        instock_available
      },
      count
    }
  }
  `;
export const getProductQuery = `query getProduct($slug:String!){
      product(slug: $slug) {
        title 
        quantity
        slug
        sku
        images
        catalogues
        group
        price
        score
        n_o_reviews
        instock_reserved
        instock_available
      }
    }
    `;
