import { useState } from 'react';
import { Product, onchangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onchangeArgs) => void;
}

export const useProduct = ({ onChange, product }: useProductArgs) => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);
        onChange && onChange({ count: newValue,product });
    }

    return {
        counter,
        increaseBy,
    }
}