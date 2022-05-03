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
          inStock
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

  const product = id => client
  .query({
    query: gql`
    query {
      product(id: "${id}"){
        id
        gallery
        description
        name
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        attributes {
          name
          items {
            value
          }
        }
      }
    }`
  });

export {
  request,
  allProducts,
  currencies,
  product,
};
