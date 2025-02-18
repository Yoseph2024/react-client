
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import ProductList from './Component/ProductList';

function App() {
  let client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `http://localhost:3001/graphql`,
    }),
  })
  return (
    <>
    <ApolloProvider client={client}>
       <ProductList/>
    </ApolloProvider>
    </>
  
  );
}

export default App;
