import styles from "./styled.css";

const LoaderAnimation = () => {
  return (
    <div className={styles.styled}>
      <div class="loader">
        <div class="container">
          <div class="carousel">
            <div class="love"></div>
            <div class="love"></div>
            <div class="love"></div>
            <div class="love"></div>
            <div class="love"></div>
            <div class="love"></div>
            <div class="love"></div>
          </div>
        </div>
        <div class="container">
          <div class="carousel">
            <div class="death"></div>
            <div class="death"></div>
            <div class="death"></div>
            <div class="death"></div>
            <div class="death"></div>
            <div class="death"></div>
            <div class="death"></div>
          </div>
        </div>
        <div class="container">
          <div class="carousel">
            <div class="robots"></div>
            <div class="robots"></div>
            <div class="robots"></div>
            <div class="robots"></div>
            <div class="robots"></div>
            <div class="robots"></div>
            <div class="robots"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoaderAnimation;
