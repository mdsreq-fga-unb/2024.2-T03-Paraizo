import { UserData } from "../types";
import axios, { AxiosResponse } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

type usePostQuery = {
  onSuccess?: (data: AxiosResponse) => void;
  onError?: (error: Error) => void;
};
type DeleteUser = {
  id: number;
};

type PostUser = {
  data: UserData;
};

type usePutQuery = {
  onSuccess?: (data: AxiosResponse) => void;
  onError?: (error: Error) => void;
};

const paraizo = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FRONTEND_URL,
});

export async function getUser() {
  const response = await paraizo.get<UserData>("rota-backend");
  return response;
}

export const GET_USER = "rota-backend";

export function useGetUser() {
  const query = useQuery({
    queryKey: [GET_USER],
    queryFn: () => getUser(),
    select: (data) => data,
  });

  return query.data;
}

//-----------------------------------------------
export function postUser({ data }: PostUser) {
  return paraizo.request<UserData>({
    url: "CRIAÇÃO USUARIO",
    method: "POST",
    data,
  });
}

export function usePostUser({ onSuccess, onError }: usePostQuery = {}) {
  return useMutation({
    mutationFn: postUser,
    onSuccess,
    onError,
  });
}
//-----------------------------------------------

//Put

export function putUser({ data }: { data: UserData }) {
  return paraizo.request<UserData>({
    url: `Atualizando Usuario`,
    method: "PUT",
    data,
  });
}

export function usePutUser({ onSuccess, onError }: usePutQuery = {}) {
  return useMutation({
    mutationFn: putUser,
    onSuccess,
    onError,
  });
}
// Delete

export function deleteUser({ id }: DeleteUser) {
  return paraizo.request<void>({
    url: `Deletando Usuario${id}`,
    method: "DELETE",
  });
}

export function useDeleteUser({ onSuccess, onError }: usePostQuery = {}) {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess,
    onError,
  });
}
