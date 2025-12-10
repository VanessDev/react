import DOMpurify from "dompurify";
import { useState } from "react";

function Secure() {
  const [userrInput, setUserInput] = useState("");
  const [displayedContent, setDisplayedContent] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  return (
    <>
      <h2>Page sécurisée</h2>
    </>
  );
}

export default Secure;
