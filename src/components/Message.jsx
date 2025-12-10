function Message() {
  
  const time = new Date().getHours() + "H";
  const salutation = time > 17 ? "bonsoir" : "bonjour";
  const sentence = `${salutation} il est ${time} et je vous souhaite la bienvenue dans une variable phrase`;

  return (
    <>
      <div>{sentence}</div>
    </>
  );
}

export default Message;
