import { Link } from "react-router-dom";
import styles from "./notFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.content}>
        <h1>404</h1>
        <h2>OPPS! PAGE NOT FOUND</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
