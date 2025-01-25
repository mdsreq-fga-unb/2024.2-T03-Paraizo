import logo from "../../../public/logo_azul.png"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

export default function AdminMenu(){
    return <section className="h-screen w-80 md:w-60 bg-paraizo-cyan flex justify-start items-center flex-col gap-9">
        <img 
        className="mt-4"
        src={logo.src} 
        alt="Logo Janayna Paraizo"/>
        <div className="w-full h-[0.125rem] bg-paraizo-whiteLines "></div>
        <div className="flex flex-col justify-start items-center w-full gap-9 py-4 pl-6">
            <a 
            className="flex justify-start items-center w-full gap-2 md:gap-1"
            href="">
                <AccountBalanceIcon />
                <p>Visão Geral</p>
            </a>
            <a 
            className="flex justify-start items-center w-full gap-2 md:gap-1"
            href="">
                <AccountBoxIcon />
                <p>Área do Administrador</p>
            </a>
            <a 
            className="flex justify-start items-center w-full gap-2 md:gap-1"
            href="">
                <CalendarViewDayIcon />
                <p>Agendamentos</p>
            </a>
        </div>
    </section>
}