import gql from 'graphql-tag'

export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdat: DateTime!
  }

  type Query {
    contacts: [Contact!]!
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
    createdat: DateTime!
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
    createdat: DateTime
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact
  }
`
