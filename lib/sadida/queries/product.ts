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
      },
      count
    }
  }
  `;
export const getProductQuery = `query getProduct($slug:String!){
      product(slug: $slug) {
        title 
        slug
        sku
        images
        catalogues
        group
        score
        n_o_reviews
        minPrice,
        maxPrice,
        options {
          name
          value
        }
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
