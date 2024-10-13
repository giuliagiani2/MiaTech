import React from "react";

const ItemList = () => {
    //RENDERE UNA LISTA DI ELEMENTI - PARTE 1
    const data = ["ciao", "come", "stai"];
    return (
        <>
            <ul>
                {
                    data.map((item, index) => {
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