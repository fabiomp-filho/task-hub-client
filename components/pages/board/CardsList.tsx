import {AiOutlinePlus} from "react-icons/ai";
import {useState} from "react";
import CardModal from "@/components/modal/CardModal";
import Card from "@/components/pages/board/Card";

const CardsList = ({cardList}) => {

    const [showModal, setShowModal] = useState(false);
    const [card, setCard] = useState(null);
    const [columnName, setColumnName] = useState("");

    return (
        <div className={"ms-6 flex gap-8 "}>
            {cardList.map((column) => (
                <div key={column.id}
                     className={"bg-iceWhite flex-grow-0 p-4 rounded-2xl w-72 mb-2 mt-2 shadow-sm shadow-lightgreyHover"}
                >
                    <h2 className="font-medium text-mediumgreen cursor-pointer">{column.name}</h2>
                    <div className="mt-4">
                        {column.cards.map((card) => (
                            <div key={card.id}
                                 className="bg-white  cursor-pointer duration-200 transition rounded-lg
                                 hover:border hover:border-mediumgreenHover flex mb-2 h-10 shadow-sm shadow-lightgreyHover
                                 items-center  justify-start"
                                 onClick={() => {
                                     setCard(card);
                                     setShowModal(true);
                                     setColumnName(column.name);
                                 }}
                            >
                                <h3 className={"ms-4"}>{card.name}</h3>
                            </div>
                        ))}
                    </div>
                    <button
                        className={"flex mt-4 items-center hover:bg-warmGray-500 hover:text-white transition duration-200 w-64" +
                            " p-1 rounded-lg gap-4"}>
                        <AiOutlinePlus/>
                        Adicionar um cartão
                    </button>
                </div>
            ))}
            <button
                className={"flex bg-iceWhite p-4 rounded-2xl whitespace-nowrap " +
                    "mb-2 mt-2 me-2 items-center justify-center hover:bg-warmGray-500 text-mediumgreen hover:text-white" +
                    " md:w-72 transition duration-200 h-12 gap-4"}>
                <AiOutlinePlus/>
                Adicionar outra Lista
            </button>
            <CardModal isOpen={showModal}
                       onClose={() => {
                           setShowModal(false);
                           setCard(null);
                       }}
                       title={card?.name}
                       listTitle={columnName}
                       children={<Card card={card} />}
            />
        </div>
    );
};

export default CardsList;
