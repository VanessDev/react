import { useState } from "react";

function Vulnerable() {
  // etat pour un input user
  const [userInput, setUserInput] = useState("");
  // etat pour afficher le result
  const [displayedContent, setDisplayContent] = useState("");
  // etat pour stocker les commentaires
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleDisplayContent = () => {
    setDisplayContent(userInput);
  };

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <>
      <h2>Page vulnérable</h2>
      <p>Ici, il y a des vulnerablilités</p>
      <section>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Entrez la faille vue en cours ici ! ex: img oneerror..."
        ></textarea>

        <button onClick={handleDisplayContent}>
          Envoyez le contenu (vulnerable!)
        </button>

        <div>
          <span>resultat affiché : </span>
          <div dangerouslySetInnerHTML={{ __html: displayedContent }}></div>
        </div>
      </section>

      <section>
        <h2>Injection dans un tableau/list</h2>
        <div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="essayez les failles ici aussi"
          ></textarea>

          <button onClick={handleAddComment}>add comment vulnerable</button>
        </div>
        <div>
          <span>les comments :</span>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <div dangerouslySetInnerHTML={{ __html: comment }}></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Vulnerable;
