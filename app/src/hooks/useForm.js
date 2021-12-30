import {useState} from 'react';

export const initial_values = {
    name: "",
    s_price: "",
    b_price: "",
    category: "",
    stock: "",
    description: ""
};

const useForm = values => {
    const [form, setForm] = useState(values);
    
    const onChange = (e, callback) => {
        const {id, value, name} = e.target;
        setForm({
            ...form,
            [id || name]: value
        });
        callback && callback();
    }

    const resetForm = () => {
        setForm(initial_values);
    }

    const defineForm = (data) => {
        setForm(data);
    }

    return [form, onChange, resetForm, defineForm]
}

export default useForm;