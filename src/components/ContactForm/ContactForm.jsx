import { Formik, Form, Field, ErrorMessage  } from 'formik';
import styled from 'styled-components'
import * as yup from 'yup';

const schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().min(6).max(16).required(),
});

const initialValues = {
        login: '',
        password: '',
}
    
const Input = styled(Field)`
color: #2a2a2a;
`

const ErrorText = styled.div`
color: red;
`;


const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render = {message => <ErrorText>{message}</ErrorText>}
        />
    );
};


export const ContactForm = () => {
   
    const handleSubmit = ( values, {resetForm} ) => {
    console.log(values);
        resetForm();
};
    return (
        <Formik initialValues={initialValues} validationSchema={schema}  onSubmit={handleSubmit}>
        <Form autoComplete="off">
            <label htmlFor="login">
                Login
                    <Input type="text" name="login" />
                    <FormError name="login" component="div" />
            </label>
            <label htmlFor="password">
                Password
                    <Input type="password" name="password" />
                    <FormError name="password" component="div" />
            </label>
            <button type="submit">Submit</button>
            </Form>
            </Formik>
    );
};