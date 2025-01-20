'use client'

import { motion } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";
import { UserRepositories } from './api';
import { User as UserModels } from "./interfaces/user.interface";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(data: UserModels) {
        const userRepositories = new UserRepositories();
        await userRepositories.login(data);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userData: UserModels = { email, password };
        submit(userData);
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
                            className="bg-paraizo-cyan w-full mt-3 text-zinc-50 text-sm font-bold p-3 rounded-xl disabled:bg-zinc-300  disabled:text-zinc-700 cursor-pointer"
                        >
                            entrar
                        </motion.button>
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
