import React from "react";
import { SiWireguard } from "react-icons/si";

interface Card {
  title: string;
  span: string;
  icon: JSX.Element;
}

const cards: Card[] = [
  { title: "Card 1", span: "Description 1", icon: <SiWireguard /> },
  { title: "Card 2", span: "Description 2", icon: <SiWireguard /> },
  { title: "Card 3", span: "Description 3", icon: <SiWireguard /> },
  { title: "Card 4", span: "Description 4", icon: <SiWireguard /> },
  // Add more cards as needed
];

const CardGrid: React.FC = () => {
  return (
    <div className="absolute left-[300px] p-4 w-[calc(100%-300px)] bg-white h-[calc(100vh-2vh)]">
      <div className="relative w-full grid lg:grid-cols-4 grid-cols-2 gap-8 items-center ">
        {cards.map((e, index) => (
          <div
            key={index}
            className="flex gap-10 items-center justify-center p-6 border border-gray-300 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white  "
          >
            <div className="mb-4 text-center">
              <h1 className="text-xl font-bold">{e.title}</h1>
              <h1 className="text-sm">{e.span}</h1>
            </div>
            <div className="flex items-center justify-center gap-4 text-4xl text-center">
              {e.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
