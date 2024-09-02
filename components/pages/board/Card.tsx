import {GrTextAlignFull} from "react-icons/gr";
import {useEffect, useState} from "react";
import {FaArrowRight} from "react-icons/fa";
import {MdContentCopy} from "react-icons/md";
import {IoTrashBinSharp} from "react-icons/io5";
import {CardService} from "@/services/CardService";

const Card = ({card, fetchBoard}) => {

    const [newDescription, setNewDescription] = useState("");
    const [isEditingDescription, setIsEditingDescription] = useState(false);

    useEffect(() => {
        setNewDescription(card?.description ?? "");
    }, [card]);

    const handleDescriptionClick = () => {
        setIsEditingDescription(true);
    };
    const handleDescriptionBlur = () => {
        setIsEditingDescription(false);
        const request = {
            description: newDescription
        }
        CardService.updateDescription(request, card?.id)
            .catch(() => {})
            .finally(() => {
                fetchBoard();
            })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditingDescription(false);
        const request = {
            description: newDescription
        }
        CardService.updateDescription(request, card?.id)
            .catch(() => {})
            .finally(() => {
                fetchBoard();
            })
    }

    return (
        <div className={"flex"}>
            <div className={"flex flex-col w-9/12 ps-6 pb-8"}>
                <div className={"flex gap-6 items-center mb-4"}>
                    <GrTextAlignFull size={22}/>
                    <label className={"text-xl font-medium"}>Description</label>
                </div>
                {isEditingDescription ?
                    <textarea
                        value={newDescription}
                        rows={4}
                        onBlur={handleDescriptionBlur}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                        onChange={(e) => {
                            setNewDescription(e.target.value);
                        }}

                        autoFocus
                        className={"p-4 mx-4 bg-iceWhite rounded-xl outline-mediumgreen"}
                    />
                    :
                    newDescription.trim() ? <p
                        onClick={handleDescriptionClick}
                        className={"p-4 ms-8 mx-4 text-black"}>{newDescription}
                    </p> : <p
                        onClick={handleDescriptionClick}
                        className={"p-4 h-32 rounded-xl mx-4 bg-iceWhite"}>Add a more detailed description...
                    </p>

                }
            </div>
            <div className={"flex flex-col gap-2 w-3/12"}>
                <p className={"text-xs text-start font-medium ms-1"}>Ações</p>
                <div className={"flex flex-col gap-2 mb-2 me-4"}>
                    <button className={"flex items-center gap-2 bg-iceWhite hover:bg-primaryHover rounded-sm p-2 " +
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