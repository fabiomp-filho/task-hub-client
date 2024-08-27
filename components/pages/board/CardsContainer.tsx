import React from 'react';


interface IMainBox {
    body?: React.ReactNode
}

const CardsContainer: React.FC<IMainBox> = (
    {
        body
    }) => {
    return (
        <div
            className="flex flex-col flex-1 min-w-full bg-white overflow-auto">
            <div className="my-4">
                {body}
            </div>
        </div>
    );
};

export default CardsContainer;
