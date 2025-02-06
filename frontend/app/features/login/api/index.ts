import { User as UserModels } from "../interfaces/user.interface";

export class UserRepositories {
    private url: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    private key: string | undefined = process.env.NEXT_PUBLIC_API_KEY;

    async register(data: UserModels): Promise<void> {
        try {
            const fetchData = async () => {
                const response = await fetch(`${this.url!}/authenticator/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.key}`,
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const responseData = await response.json();
                console.log(responseData);
                
            };

            await fetchData();
        } catch (error) {
            console.error("Falha ao efetuar registro:", error);
        }
    }
    
    async login(data: UserModels): Promise<void> {
        try {
            console.log(`${this.url!}authenticator/login`);
            
            const fetchData = async () => {
                const response = await fetch(`${this.url!}/authenticator/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.key}`,
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const responseData = await response.json();
                console.log(responseData);
                
            };

            await fetchData();
        } catch (error) {
            console.error("Falha ao efetuar login:", error);
        }
    }
}

