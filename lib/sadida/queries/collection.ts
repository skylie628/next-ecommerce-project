export const getCollectionsQuery = `query getCollections($catalogues: String!){
    collections(catalogues: $catalogues) {
        _id,
        name
    }
  }
  `;
