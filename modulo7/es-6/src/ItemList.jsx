import React from "react";

const ItemList = ({ items }) => {
    //RENDERE UNA LISTA DI ELEMENTI - PARTE 1

    return (
        <>
            <ul>
                {
                    items.map((item, index) => {
                        return (
                            <li key={`item-${index}`}>{item}</li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default ItemList;