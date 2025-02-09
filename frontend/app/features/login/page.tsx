'use client'

import { motion } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";
import { UserRepositories } from './api';
import { User as UserModels } from "./interfaces/user.interface";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function submit(data: UserModels) {
        const userRepositories = new UserRepositories();
        setErrorMessage(await userRepositories.login(data));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userData: UserModels = { email, password };
        submit(userData);
        setLoading(!loading)
    }

    return (
        <div className="bg-white text-zinc-950 min-h-screen flex items-center justify-center">
            <div className="w-full h-screen relative">
                <Image
                    src={'/fisioterapia-1.svg'}
                    alt="Fotos ilustrativa fisio"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="z-10 flex flex-col gap-10 justify-center items-center w-full max-w-md p-10 rounded-2xl lg:mx-32 mx-2">
                <Image src={'/paraizo-logo-redonda.svg'} alt="logo my broker hori" width={150} height={150} />
                <div className="flex flex-col gap-5 w-full ">
                    <h1 className="text-2xl font-extrabold text-zinc-950">
                        Seja bem-vindo!
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <motion.div whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 1.05 }} className="mb-5">
                            <input
                                type="text"
                                placeholder="email"
                                className="bg-gray-50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 1.05 }} className="mb-5">
                            <input
                                type="password"
                                placeholder="senha"
                                className="bg-gray-50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </motion.div>
                        <a className='text-paraizo-cyan text-sm font-semibold'>Esqueceu a senha?</a>
                        <motion.button
                            type="submit"
                            disabled={loading}
                            className="bg-paraizo-cyan w-full mt-3 text-zinc-50 text-sm font-bold p-3 rounded-xl disabled:bg-zinc-300  disabled:text-zinc-700 cursor-pointer"
                        >
                            {loading ?
                                <div role="status">
                                    <svg aria-hidden="true" className=" max-h-4 text-gray-100 animate-spin fill-paraizo-cyan justify-center w-full" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Carregando...</span>
                                </div> : 'Entrar'}
                        </motion.button>
                        {errorMessage && <p className="text-red-500 text-xs font-bold mb-4 text-center">{errorMessage}</p>}

                    </form>
                    <div className='flex gap-1 justify-center'>
                        <p className='text-sm font-semibold'>Não tem acesso?</p>
                        <a className='text-paraizo-cyan text-sm font-semibold'>Solicite aqui.</a>
                    </div>
                    <div className="w-full flex items-center justify-center border-b-2 pb-3">
                    </div>
                </div>
            </div>
        </div>
    )
}
