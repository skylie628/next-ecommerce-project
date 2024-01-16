export const getProductsQuery = `query getProducts($query: ProductQueryCriteria,$sortKey: String, $reverse: Boolean){
    products(query:$query,  sortKey: $sortKey,reverse:$reverse) {
      products {
        sku,
        title,
        slug,
        images,
        minPrice,
        maxPrice,
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
        score
        n_o_reviews
        variants {
          sku
          title
          options {
            name
            value
          }
          instock_available
          reserved_available
          price
        }
      }
    }
    `;
