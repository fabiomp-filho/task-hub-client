import {AiOutlineEllipsis, AiOutlinePlus} from "react-icons/ai";
import React, {FormEvent, useState} from "react";
import CardModal from "@/components/modal/CardModal";
import Card from "@/components/pages/board/Card";
import AutoResizableTextarea from "@/components/inputs/AutoResizableTextArea";
import {ListService} from "@/services/ListService";
import {CgClose} from "react-icons/cg";
import {CardService} from "@/services/CardService";
import useOutsideClick from "@/hooks/useOutsideClick";

const CardsList = ({cardList, fetchBoard, boardId}) => {

    const [showModal, setShowModal] = useState(false);
    const [card, setCard] = useState(null);
    const [columnName, setColumnName] = useState("");
    const [createColumn, setCreateColumn] = useState(false);
    const [listName, setListName] = useState("");
    const [cardName, setCardName] = useState("");
    const [creatingCardInColumn, setCreatingCardInColumn] = useState<number | null>(null);


    const handleListName = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setListName(event.target.value);
    };

    const closeCreateColumn = () => {
        setListName("");
        setCreateColumn(false);
    }

    const handleCardName = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCardName(event.target.value);
    };

    const closeCreateCard = () => {
        setCardName("");
        setCreatingCardInColumn(null);
    }

    const handleCreateColumn = (event: FormEvent) => {
        event.preventDefault();
        let request = {
            name: listName,
            boardId: boardId
        }
        ListService.createList(request).then(() => {
            closeCreateColumn();
        }).catch(() => {

        }).finally(() => {
            fetchBoard();
        })
    };

    const outsideRef = useOutsideClick(() => {
        if (creatingCardInColumn) closeCreateCard();
        if (createColumn) closeCreateColumn();
    });

    const handleCreateCard = (event: FormEvent, id: Number) => {

        event.preventDefault();
        let request = {
            name: cardName,
            listId: id,
        }
        CardService.createCard(request).then(() => {
            closeCreateCard();
        }).catch(() => {

        }).finally(() => {
            fetchBoard();
        })


    }

    return (
        <div className={"ms-6 inline-grid grid-flow-col gap-4 last:me-2 "}>
            {cardList.map((column) => (
                <div key={column.id}
                     className={"bg-iceWhite p-4 rounded-2xl w-72 mb-2 h-fit shadow-sm shadow-lightgreyHover relative"}
                >
                    <h2 className="font-medium text-mediumgreen ">{column.name}</h2>
                    <button
                        className="absolute text-black top-3 right-1  rounded-2xl py-1 px-2
                             hover:bg-coolGray-400 transition duration-200"
                        title={"List actions"}
                        onClick={() => {
                            // Adicione a lógica para o botão aqui
                        }}
                    >
                        <AiOutlineEllipsis/>
                    </button>


                    <div className="mt-4">
                        {column.cards.map((card) => (
                            <div key={card.id}
                                 className="bg-white flex items-center cursor-pointer duration-200 transition rounded-lg
                                 hover:border hover:border-mediumgreenHover mb-2 h-10 shadow-sm shadow-lightgreyHover"
                                 onClick={() => {
                                     setCard(card);
                                     setShowModal(true);
                                     setColumnName(card.name);
                                 }}
                            >
                                <h3 className={"ms-4 "}>{card.name}</h3>

                            </div>
                        ))}
                    </div>
                    {creatingCardInColumn === column.id &&
                        <div ref={outsideRef}>
                            <AutoResizableTextarea
                                value={cardName}
                                onChange={handleCardName}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        if (cardName.trim()) {
                                            handleCreateCard(e, column.id);
                                        }
                                    }
                                }}
                                autoFocus
                                className="rounded-md ps-1 placeholder:ps-3 w-full outline-mediumgreen bg-white
                                 border border-lightgrey"
                                placeholder="Enter with card name..."
                            />
                            <div className={"flex gap-2 p-2"}>
                                <button className={"bg-primary rounded-md whitespace-nowrap py-1 px-4 " +
                                    "hover:bg-primaryHover text-white transition duration-200 "}
                                        onClick={(e) => {
                                            if (cardName.trim()) {
                                                handleCreateCard(e, column.id);
                                            } else {
                                                closeCreateCard();
                                            }
                                        }}>Add Card
                                </button>
                                <button className={"hover:bg-coolGray-400 px-2 rounded-md"}
                                        onClick={closeCreateCard}>
                                    <CgClose size={18}/>
                                </button>
                            </div>
                        </div>}
                    {creatingCardInColumn !== column.id && <button
                        className={"flex mt-4 items-center hover:bg-warmGray-500 hover:text-white transition duration-200 w-64" +
                            " p-1 rounded-lg gap-4"}
                        onClick={() => setCreatingCardInColumn(column.id)}
                    >
                        <AiOutlinePlus/>
                        Add nem Card
                    </button>}

                </div>
            ))}

            {createColumn && <div
                className={"bg-iceWhite h-fit p-4 rounded-2xl w-72 mb-2 shadow-sm shadow-lightgreyHover"}
                ref={outsideRef}
            >
                <AutoResizableTextarea
                    value={listName}
                    onChange={handleListName}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (listName.trim()) {
                                handleCreateColumn(e);
                            }
                        }
                    }}
                    autoFocus
                    className="rounded-md ps-1 placeholder:ps-3 w-full outline-mediumgreen bg-white border border-lightgrey"
                    placeholder="Enter with list name..."
                />
                <div className={"flex gap-2 p-2"}>
                    <button className={"bg-primary rounded-md whitespace-nowrap py-1 px-4 " +
                        "hover:bg-primaryHover text-white transition duration-200 "}
                            onClick={(e) => {
                                if (listName.trim()) {
                                    handleCreateColumn(e);
                                } else {
                                    closeCreateColumn();
                                }
                            }}>Create
                    </button>
                    <button className={"hover:bg-coolGray-400  px-2 rounded-md"} onClick={closeCreateColumn}><CgClose
                        size={18}/>
                    </button>
                </div>

            </div>
            }
            {!createColumn && <button
                className={"flex bg-iceWhite p-4 rounded-2xl whitespace-nowrap " +
                    "mb-2 me-2 items-center justify-center hover:bg-warmGray-500 text-mediumgreen hover:text-white" +
                    " md:w-72 transition duration-200 h-12 gap-4"}
                onClick={() => {
                    setCreateColumn(true);
                }}
            >
                <AiOutlinePlus/>
                Add another list
            </button>}
            <CardModal isOpen={showModal}
                       onClose={() => {
                           setShowModal(false);
                           setCard(null);
                       }}
                       title={card?.name}
                       listTitle={columnName}
                       children={<Card card={card}/>}
            />
        </div>
    );
};

export default CardsList;
