interface InterfaceCardText {
    tag?: string,
    texto: string|number,
    tagEnd?: string,
}

export default function CardText({tag, texto, tagEnd=''}:InterfaceCardText){
    return <p className="w-full  p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>{tag}</b> {texto} {tagEnd}</p>
}