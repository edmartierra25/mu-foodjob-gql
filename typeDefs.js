const { gql } = require('apollo-server');
const typeDefs = gql`
    type Query {
    }

    type User {
        id: ID
        username: String
        password: String
        email: String
        firstName: String
        lastName: String
    }

    type Role {
        id: ID
        roleName: String
    }

    type userRole {
        id: ID
        userID: ID
        roleID: ID
    }

    type Provider {
        id: ID
        name: String
        address: String
        menu: [Food]
        contact: String
    }

    type Food {
        id: ID
        name: String
        providerID: ID
        quantity: Int
    }

    type Mutation {
        createOrder(input: createOrderRequest!): createOrderResponse
        deleteOrder(ramon: DeleteOrderRequest!): DeleteOrderResponse

    }

    input createOrderRequest {
        foodID: ID
        userID: ID
        quantity: Int
    }

    type createOrderResponse {
        order: Order
    }

    type Order {
        id: ID
        userID: ID
        foodID: ID
        quantity: Int
    }

    input DeleteOrderRequest {
        id: ID
    }

    type DeleteOrderResponse {
        message: String
    }
`;

module.exports = typeDefs;