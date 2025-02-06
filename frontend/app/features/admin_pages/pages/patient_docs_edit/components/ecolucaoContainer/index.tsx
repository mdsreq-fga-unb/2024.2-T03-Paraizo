import { Box, Button, TextField } from "@mui/material";

export default function EvolucaoContainer(){

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleCancel = () => {

    }

    return<>
    <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                margin: '0 auto'
            }}>
                <TextField
                label="Nome"
                name="name"
                value=''
                onChange={handleChange}
                fullWidth/>
    
                <TextField
                label="CPF"
                name="cpf"
                value=''
                onChange={handleChange}
                fullWidth/>
    
                <TextField
                label="Data de Nascimento"
                name="birthDate"
                value=''
                onChange={handleChange}
                fullWidth/>
    
                <TextField
                label="Telefone"
                name="phone"
                value=''
                onChange={handleChange}
                fullWidth/>
    
                <TextField
                label="Email"
                name="email"
                value=''
                onChange={handleChange}
                fullWidth/>
                
                <div className="flex w-full justify-start gap-4">
                    <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#739DAB", 
                        color: "white", 
                        fontSize: 16, 
                        fontFamily: "Rubik",
                        height: "40px",
                        width: "30%",
                    }}>Salvar</Button>
                    <Button
                    variant="contained" 
                    sx={{
                        backgroundColor: "#F44250", 
                        color: "white", 
                        fontSize: 16, 
                        fontFamily: "Rubik",
                        height: "40px",
                        width: "30%",
                    }}
                    fullWidth
                    onClick={handleCancel}>Cancelar</Button>
                </div>
            </Box>
    </>
}