import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onchangeArgs } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onchangeArgs) => void;
}

export const ProductCard = ({ children, product, className, style, onChange }: Props) => {

    const { counter, increaseBy } = useProduct({ onChange, product });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children }
            </div>
        </Provider>
    );
};
