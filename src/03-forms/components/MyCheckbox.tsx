import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    [x: string]: any; // comodin de poder agregar cualquier otro campo (propiedades adicionales)
}

export const MyCheckbox = ({ label, ...props } : Props) => {
    const [ field ] = useField({ ...props, type: 'checkbox' });

    return (
        <>
            <label>
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label>
            <ErrorMessage name={ props.name } component="span" />
        </>
    )
}
