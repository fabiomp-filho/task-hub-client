import {GrTextAlignFull} from "react-icons/gr";
import {useState} from "react";
import {FaArrowRight} from "react-icons/fa";
import {MdContentCopy} from "react-icons/md";
import {IoTrashBinSharp} from "react-icons/io5";

const Card = ({card}) => {

    const [isEditingDescription, setIsEditingDescription] = useState(false);

    const handleDescriptionClick = () => {
        setIsEditingDescription(true);
    };
    const handleDescriptionBlur = () => {
        setIsEditingDescription(false);

    };

    return (
        <div className={"flex"}>
            <div className={"flex flex-col w-4/5 ps-8 pb-8"}>
                <div className={"flex gap-6 items-center mb-4"}>
                    <GrTextAlignFull size={22}/>
                    <label className={"text-xl font-medium"}>Description</label>
                </div>
                {isEditingDescription ?
                    <textarea
                        value={card?.description}
                        rows={4}
                        onBlur={handleDescriptionBlur}
                        autoFocus
                        className={"p-4 mx-4 bg-iceWhite rounded-xl outline-mediumgreen"}
                    />
                    :
                    <p
                        onClick={handleDescriptionClick}
                        className={"p-4 ms-7 mx-4"}>{card?.description}</p>
                }
            </div>
            <div className={"flex flex-col gap-2 w-1/5"}>
                <p className={"text-xs text-start font-medium"}>Adicionar ao Cartão</p>
                <div className={"flex flex-col gap-2 mb-2 me-2"}>
                    <button className={"flex items-center gap-2 bg-iceWhite hover:bg-coolGray-400 rounded-sm p-2 " +
                        "transition duration-300"}>
                        <FaArrowRight size={18}/>
                        Mover
                    </button>
                    <button className={"flex items-center gap-2 bg-iceWhite hover:bg-coolGray-400 rounded-sm p-2 " +
                        "transition duration-300"}>
                        <MdContentCopy/>
                        Copiar
                    </button>
                    <button className={"flex items-center gap-2 bg-iceWhite hover:bg-red-400 rounded-sm p-2 " +
                        "transition duration-300"}>
                        <IoTrashBinSharp/>
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card;