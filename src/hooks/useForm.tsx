import { ChangeEvent, useState } from 'react';

const useForm = (inputs: any) => {
    const [input, setInput] = useState(inputs);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [target.name]: target.value });
    };

    return [input, handleChange, setInput];
};

export default useForm;