export const getProductsQuery = `query getProducts($group: String, $catalogues:String, $sortBy: String, $pageIndex: Int!){
    products(group: $group,catalogues:$catalogues,sortBy: $sortBy,pageIndex: $pageIndex) {
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
