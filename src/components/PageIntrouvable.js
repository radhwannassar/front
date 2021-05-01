import { Link } from "react-router-dom";
const PageInrouvable = () => {
  return (
    <div>
      <p> SVP veuillez verifier votre lien </p>
      <Link to="/"> Retour a la page d'acceuil</Link>
    </div>
  );
};

export default PageInrouvable;
