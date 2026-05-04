import React from 'react';
import Card from "./Card.jsx";

const data = [{
    id:1,
    title: "Kirby gourmand",
    description: "Ceci est une image avec Kirby.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9568YouEscV9rW_pU3QlYjuTWiW_5X6HILQ&s"
},{
    id: 2,
    title: "Etoiles",
    description: "De jolies et brillantes étoiles",
    imageUrl : "https://i.pinimg.com/564x/ec/0e/bb/ec0ebbc342ec3d06426919e308a1284e.jpg"
},{
    id: 3,
    title: "Ours en peluche",
    description: "Ours avec belle fourrure !",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFN_5iqVM7eyIgDBkZFr8DSRZRaagyer18eA&s"
},{
    id: 4,
    title: "Orthencia",
    description: "Belle fleur violet et bleu",
    imageUrl : "https://static.vecteezy.com/ti/vecteur-libre/p1/8823050-hortensia-fleur-couleur-cartoon-illustration-gratuit-vectoriel.jpg"

}];

const Cards = () => {
    return (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(2, 1fr)", padding: '16px' }}>
            {data.map((item) => (
            <Card title={item.title} description={item.description} imageUrl={item.imageUrl}></Card>
            ))}
        </div>
    );
};
export default Cards;