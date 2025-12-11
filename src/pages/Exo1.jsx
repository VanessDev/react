// faire une page qui affiche le titre voici ma page 1
import Title from "../components/Title";
import Message from "../components/Message";
import Calculator from "./Calculator";
import Button from "./Button";

function Exo1() {
  return (
    <>
      <section className="exercice">
        <div>
          <Title />
        </div>

        <div>
          <Message />
        </div>

        <div>
          <Calculator />
        </div>

        <div>
          <Button/>
        </div>
      </section>
    </>
  );
}

export default Exo1;
