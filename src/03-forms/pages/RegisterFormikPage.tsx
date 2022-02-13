import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                                    .max(15)
                                    .required('Requerido'),
                        email: Yup.string()
                                    .email('Revise el formato del correo')
                                    .min(6)
                                    .required('Requerido'),
                        password1: Yup.string()
                                    .min(6, 'Mínimo 6 letras')
                                    .required('Requerido'),
                        password2: Yup.string()
                                    .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                                    .required('Requerido'),
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        
                        <Form>
                            <MyTextInput 
                                label="Name" 
                                name="name"
                                placeholder="Edgard"
                            />

                            <MyTextInput 
                                label="Email" 
                                name="email"
                                type="email"
                                placeholder="vilo@vilo.cl"
                            />

                            <MyTextInput 
                                label="Password" 
                                name="password1"
                                type="password"
                            />

                            <MyTextInput 
                                label="Confirm Password" 
                                name="password2"
                                type="password"
                            />

                            <button type="submit">Create</button>
                            <button type="button" onClick={ handleReset }>Reset</button>
                        </Form>
                    )
                }


            </Formik>
        </div>
    )
}
