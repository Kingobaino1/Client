import { gql } from '@apollo/client';
import { client } from './client';

  const allProdutcs = client.query({
    query: gql`
    query {
      categories {
        products {
          prices {
            amount
          }
        }
      }
    }
  `
  });

  

export default allProdutcs;
