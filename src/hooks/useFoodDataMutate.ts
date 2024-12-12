import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8080';

// Função para enviar dados à API
const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = await axios.post(API_URL + '/food', data);
    return response;
};

export function useFoodDataMutate() {
    const queryClient = useQueryClient();

    // Mutação com React Query v5
    const mutation = useMutation({
        mutationFn: postData,
        onSuccess: () => {
            // Invalida as queries após a mutação bem-sucedida
            queryClient.invalidateQueries({
                queryKey: ['food-data'],
            });
        },
    });

    return mutation;
}
