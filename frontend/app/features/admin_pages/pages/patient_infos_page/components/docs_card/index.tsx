import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router"

import { InterfaceDocsCard } from "./interfaces/docs_interfaces"

export default function DocsCard({id, name, dateDocs, typeDocs, idDocs}:InterfaceDocsCard){
    return(
        <Link to={`docs/${idDocs}`} className='w-full'>
        <div>
            <div className="bg-white rounded-md w-full flex justify-between items-center px-4 py-1">
                <div className='flex flex-col'>
                    <h1 className="text-paraizo-textGray text-start">{name}</h1>
                    <p className='text-paraizo-textGray text-start text-sm'>{typeDocs} - {dateDocs}</p>
                </div>
                <div>
                    <KeyboardArrowRightIcon
                    sx={{color:"#666666"}}/>
                </div>
            </div>
        </div>
    </Link>
    )
}