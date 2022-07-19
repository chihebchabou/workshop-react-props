import ProductList from './components/products/ProductList';

import { products } from './products';

function App() {
  return (
    <div className="container my-5">
      <ProductList prods={products} />
    </div>
  );
}

export default App;
