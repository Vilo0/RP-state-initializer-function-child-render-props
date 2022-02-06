import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
};

const product2 = {
  id: '21',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({
    '1': { ...product1, count: 10 },
    '2': { ...product2, count: 2 },
  });

  console.log(shoppingCart);

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>

          { products.map((product) => (
            <ProductCard 
              product={ product }
              className="bg-dark text-white"
              key={product.id}
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
            ))
          }


        </div>

        <div className="shopping-cart">
            <ProductCard 
              product={ product2 }
              className="bg-dark text-white"
              style={{ width: '100px' }}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>

            <ProductCard 
              product={ product1 }
              className="bg-dark text-white"
              style={{ width: '100px' }}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
        </div>
    </div>
  );
};
