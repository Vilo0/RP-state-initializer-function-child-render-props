import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';
import '../styles/styles.css';

export const FormikAbstraction = () => {
    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                        lastName: Yup.string()
                                    .max(10, 'Debe de tener 10 caracteres o menos')
                                    .required('Requerido'),
                        email: Yup.string().email('Email no tiene un formato válido').required('Requerido'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string()
                                    .notOneOf(['it-jr'], 'Esta opción no es permitida')
                                    .required()
                                    
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput 
                                label="First Name" 
                                name="firstName"
                                placeholder="Edgard"
                            />
        
                            <MyTextInput 
                                label="Last Name" 
                                name="lastName"
                                placeholder="Vilo"
                            />

                            <MyTextInput 
                                label="Email Address" 
                                name="email"
                                placeholder="thevilos@mail.com"
                                type="email"
                            />

                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms & conditions" name="terms" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
