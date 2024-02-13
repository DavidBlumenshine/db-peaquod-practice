// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Layout from './components/Layout/'
import Content from './components/Content'
import Products from './components/Products'
import Cart from './components/Cart'

const products = [
  {
    id: 1,
    name: 'Old Chicago',
    price: 32.99,
    category: 'deep-dish'
  },
  {
    id: 2,
    name: 'Little Italy',
    price: 10.99,
    category: 'tuscan-style'
  },
  {
    id: 3,
    name: 'DiGiorno',
    price: 99.99,
    category: 'stuffed-crust'
  }
]

function App() {
  const [cart, updateCart] = useState([])

  return (
    <div className="App">
      <Layout>
        <header>
          <h1>Peaquads</h1>
        </header>
        <main>
          <Content>
            <Products cart={cart} products={products} updateCart={updateCart} />
            <Cart />
          </Content>
        </main>
        <footer>Peaquads $copy 2024</footer>
      </Layout>
    </div>
  );
}

export default App;
