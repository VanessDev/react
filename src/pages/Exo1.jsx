// faire une page qui affiche le titre voici ma page 1
import Title from "../components/Title";
import Message from "../components/Message";
import Calculator from "./Calculator";

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
      </section>
    </>
  );
}

export default Exo1;
