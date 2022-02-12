import { useField } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; // comodin de poder agregar cualquier otro campo (propiedades adicionales)
}

export const MyTextInput = ({ label, ...props } : Props) => {
    const [ field, meta ] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input className="text-input" { ...field } { ...props } />
            {
                // errores
                meta.touched && meta.error && (
                    <span className="">{ meta.error }</span>
                )
            }
        </>
    )
}
