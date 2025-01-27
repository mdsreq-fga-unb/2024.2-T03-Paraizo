'use client'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface patientInterface {
    key: string,
    id: Number,
    name: string,
    email: string,
}

export default function CardPatient({id, name, email}:patientInterface){
    const handleClick = () => {
        console.log('ir para paciente')
    }

    return <button className='w-full' onClick={handleClick}>
        <div className="bg-white rounded-md w-full flex justify-between items-center px-4 py-1">
            <div className='flex flex-col'>
                <h1 className="text-paraizo-textGray text-start">{name}</h1>
                <p className='text-paraizo-textGray text-start text-sm'>{email}</p>
            </div>
            <div>
                <KeyboardArrowRightIcon
                sx={{color:"#666666"}}/>
            </div>
        </div>
    </button>
}