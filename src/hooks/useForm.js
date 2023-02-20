import { useState } from 'react';


export const useForm = (initialValue = {}) => {

    const [formValues, setFormValues] = useState(initialValue);

    const onChangeInputValue = ({ target }) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormValues(initialValue)
    }

    return {
        ...formValues,
        formValues,
        onChangeInputValue,
        onResetForm
    }

}