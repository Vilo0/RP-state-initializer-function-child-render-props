import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);
    console.log(initialValues?.count);

    const increaseBy = ( value: number ) => {
      
        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }
    
    useEffect(() => {
        if (!isMounted.current) return;
        setCounter( value );
    }, [ value ]);

    useEffect(() => {
      isMounted.current = true;
    }, []);


    

    return {
        counter,
        increaseBy
    }

}