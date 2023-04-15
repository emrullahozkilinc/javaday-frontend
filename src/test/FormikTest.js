import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
    const [addressNumber, setAddressNumber] = useState(2);

    const [formValues, setFormValues] = useState({});

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        age: Yup.number().required('Required'),
        address: Yup.array()
            .test(
                'address-number',
                `You must provide exactly ${addressNumber} addresses`,
                (value) => value.length === addressNumber,
            )
            .of(
                Yup.object().shape({
                    street: Yup.string().required('Required'),
                    city: Yup.string().required('Required'),
                    state: Yup.string().required('Required'),
                    zip: Yup.string().required('Required'),
                }),
            ),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            address: [{ street: '', city: '', state: '', zip: '' }],
        },
        validationSchema
    });
    
    const handleChange = (e) => {
        setFormValues( prevValues => {
            return {...prevValues, [e.target.name] : e.target.value}
        })
    }
    
    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formValues.name}
                />
                {formik.touched.name && formik.errors.name && (
                    <div>{formik.errors.name}</div>
                )}
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    name="age"
                    type="text"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formValues.age}
                />
                {formik.touched.age && formik.errors.age && (
                    <div>{formik.errors.age}</div>
                )}
            </div>
            <div>
                <label htmlFor="address">Address</label>
                {formik.values.address.map((_, index) => (
                    <div key={index}>
                        <label htmlFor={`address[${index}].street`}>Street</label>
                        <input
                            id={`address[${index}].street`}
                            name={`address[${index}].street`}
                            type="text"
                            onChange={handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address[index].street}
                        />
                        {formik.touched.address?.[index]?.street &&
                            formik.errors?.address?.[index]?.street && (
                                <div>{formik.errors.address[index].street}</div>
                            )}
                        <label htmlFor={`address[${index}].city`}>City</label>
                        <input
                            id={`address[${index}].city`}
                            name={`address[${index}].city`}
                            type="text"
                            onChange={handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address[index].city}
                        />
                        {formik.touched.address?.[index]?.city &&
                            formik.errors?.address?.[index]?.city && (
                                <div>{formik.errors.address[index].city}</div>
                            )}
                        <label htmlFor={`address[${index}].state`}>State</label>
                        <input
                            id={`address[${index}].state`}
                            name={`address[${index}].state`}
                            type="text"
                            onChange={handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address[index].state}
                        />
                        {formik.touched.address?.[index]?.state &&
                            formik.errors?.address?.[index]?.state && (
                                <div>{formik.errors.address[index].state}</div>
                            )}
                        <label htmlFor={`address[${index}].zip`}>Zip</label>
                        <input
                            id={`address[${index}].zip`}
                            name={`address[${index}].zip`}
                            type="text"
                            onChange={handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address[index].zip}
                        />
                        {formik.touched.address?.[index]?.zip &&
                            formik.errors?.address?.[index]?.zip && (
                                <div>{formik.errors.address[index].zip}</div>
                            )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => {
                        formik.setFieldValue('address', [          ...formik.values.address,          { street: '', city: '', state: '', zip: '' },        ]);
                    }}
                >
                    Add address
                </button>
                <button
                    type="button"
                    onClick={() => {
                        formik.setFieldValue(
                            'address',
                            formik.values.address.slice(0, -1),
                        );
                    }}
                >
                    Remove address
                </button>
            </div>
            <div>
                <label htmlFor="addressNumber">Number of addresses</label>
                <input
                    id="addressNumber"
                    name="addressNumber"
                    type="number"
                    onChange={(event) => setAddressNumber(parseInt(event.target.value))}
                    onBlur={formik.handleBlur}
                    value={addressNumber}
                />
                {formik.touched.addressNumber && formik.errors.address && (
                    <div>{formik.errors.address}</div>
                )}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
