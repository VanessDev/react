import { useState } from "react";

//le composant d'affichage indiquera la saisie actuelle de l'utilisateur et le résultat
function Display({ value }) {
  return <div className="display">{value}</div>;
}

//Le panneau de boutons comprendra tous les boutons nécessaires à la calculatrice.
//  J'ai créé un tableau de valeurs de boutons et je l'ai parcouru pour générer les boutons dynamiquement.
function ButtonPanel({ onButtonClick }) {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <>
      <div className="button-panel">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => onButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </>
  );
}

//Pour gérer l’état de la calculatrice (saisie et résultat actuels),
//  j’ai utilisé la méthode `useState` de React
//setInput(met à jour l'affichage)
function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    //interprete la chaine comme une expression mathematique
    if (value === "=") {
      // Evaluate the expression
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <h2>Calculatrice</h2>
      <div className="calculator">
        <Display value={input} />
        <ButtonPanel onButtonClick={handleButtonClick} />
      </div>
    </>
  );
}

export default Calculator;
