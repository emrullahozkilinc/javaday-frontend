import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
    firstName: Yup.string().when('showNames', {
        is: true,
        then: Yup.string().required('Required'),
        otherwise: Yup.string(),
    }),
    lastName: Yup.string().when('showNames', {
        is: true,
        then: Yup.string().required('Required'),
        otherwise: Yup.string(),
    }),
})