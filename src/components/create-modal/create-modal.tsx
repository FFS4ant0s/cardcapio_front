import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interface/FoodData';
import './modal.css';

interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
}

interface ModalProps {
    closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={(event) => updateValue(event.target.value)} />
        </>
    );
};

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const { mutate, status, error } = useFoodDataMutate(); // Alteração: acessando status

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image,
        };
        mutate(foodData); // Chamando a mutação
    };

    useEffect(() => {
        if (status === 'success') {
            closeModal(); // Fecha o modal se a mutação for bem-sucedida
        }
    }, [status, closeModal]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle} />
                    <Input label="price" value={price} updateValue={setPrice} />
                    <Input label="image" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {status === 'pending' ? 'Postando...' : 'Postar'} {/* Exibe "Postando..." enquanto isLoading for true */}
                </button>
                {status === 'error' && <p className="error-message">Ocorreu um erro: {error?.message}</p>} {/* Exibe erro se ocorrer */}
            </div>
        </div>
    );
}
