import ReactDOM from "react-dom"
import React from "react"
import App from "./App"

// import { ApolloClient } from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
// import { ApolloLink, concat } from 'apollo-link'
// import { ApolloProvider } from 'react-apollo'
// import { InMemoryCache } from 'apollo-cache-inmemory'


// const uri = 'https://assyamoussaid.myshopify.com/api/graphql'
// const httpLink = new createHttpLink({ uri })

// const APIkey = '8461e4eeaa5eb0af47d9777ccad06e20'
// const authMiddleware = new ApolloLink((operation, forward) => {
//   operation.setContext({
//     headers: {
//       'X-Shopify-Storefront-Access-Token': APIkey
//     } 
//   })
//   return forward(operation)
// })

// const client = new ApolloClient({
//   link: concat(authMiddleware, httpLink),
//   cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
// })


// const ApolloApp = <ApolloProvider client={client}>
//                     <App />  
//                   </ApolloProvider>

const rootEl = document.getElementById("react-products-filters")
console.log('dataset >>',rootEl.dataset)
rootEl && ReactDOM.render(<App {...(rootEl.dataset)} />, rootEl)