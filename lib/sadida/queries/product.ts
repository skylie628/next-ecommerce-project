export const getProductsQuery = `

query getProducts($query:ProductQueryCriteria,$sortKey: String,$reverse: Boolean){
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
