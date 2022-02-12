import { useState, ChangeEvent } from 'react';

export const useForm = <T>(initState: T) => {
    const [formData, setFormData] = useState(initState);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name: nameInput, value } = e.target;
        setFormData( prev => ({
            ...prev,
            [nameInput]: value,
        }));
    };

    return {
        ...formData,
        // Properties
        formData,
        // Methods
        onChange,
    };
}