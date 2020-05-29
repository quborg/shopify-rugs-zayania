import gql from 'graphql-tag'

export const PRODUCTS_QUERY = gql`
  query ProductsQuery {
    products(first:250) {
      edges {
        node {
          id
          title
          onlineStoreUrl
        }
      }
    }
  }
`
export default PRODUCTS_QUERY

// export const HOME_QUERY = gql`
//   query ShopData {
//     shop {
//       name
//       description
//       products(first:20) {
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//         }
//         edges {
//           node {
//             id
//             title
//             images(first: 1) {
//               edges {
//                 node {
//                   src
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
