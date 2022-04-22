import { gql } from '@apollo/client';
import { client } from './client';

  const request = client.query({
    query: gql`
    query {
      categories {
        name
      }
    }
  `
  });

  const allProducts = client.query({
    query: gql`
    query {
      categories {
        name
        products {
          category
          name
          id
          gallery
          prices {
            currency{
              label
              symbol
            }
            amount
          }
        }
      }
    }
  `
  });

  const currencies = client.query({
    query: gql`
    query {
      currencies {
        label
        symbol
      }
    }
  `
  });


export {
  request,
  allProducts,
  currencies,
}
