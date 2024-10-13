// src/Component/ClassList.js
import React, { useState } from "react";
import { useAtom } from "jotai";
import { charactersAtom } from "../Socketmanager";

const ClassList = () => {
  const [characters] = useAtom(charactersAtom);
  const [coinInput, setCoinInput] = useState({});
  const [showInput, setShowInput] = useState({});

  const handleSendCoins = (id) => {
    // Logic to send coins
    //console.log(`Sending ${coinInput[id]} coins to ${id}`);
    // Reset input field
    setCoinInput({ ...coinInput, [id]: "" });
    setShowInput({ ...showInput, [id]: false });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Class Members</h2>
      <ul className="divide-y divide-gray-200 bg-white/60 shadow rounded-lg">
        {characters.map((character) => (
          <li key={character.id} className="py-3 px-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-xs text-gray-700">{character.id}</span>
                <span className="font-xs text-gray-500 ml-2">
                  {character.role}
                </span>
                <button
                  onClick={() =>
                    setShowInput({
                      ...showInput,
                      [character.id]: !showInput[character.id],
                    })
                  }
                  className="mx-1 text-[40px] scale-75 px-2 bg-indigo-500 -mb-10 text-white rounded-md border-none shadow-lg"
                >
                  Coins
                </button>
              </div>
            </div>
            {showInput[character.id] && (
              <div className="mt-2 flex flex-col items-start">
                <input
                  type="number"
                  value={coinInput[character.id] || ""}
                  onChange={(e) =>
                    setCoinInput({
                      ...coinInput,
                      [character.id]: e.target.value,
                    })
                  }
                  className="w-20 px-3 py-2 border rounded border-slate-200 mb-2"
                  placeholder="Coins"
                />
                <button
                  onClick={() => handleSendCoins(character.id)}
                  className="mx-1 text-[40px] px-2 my-2 bg-indigo-500 -mb-10 text-white rounded-md border-none shadow-lg"
                >
                  Send
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
