import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Top1.module.css";

const Top1 = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/casualties-page");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.top10}>
      <img className={styles.top10Jpeg} alt="" src="./assets/2.png" />
      <b className={styles.november41952}>November 4,1952</b>
      <b className={styles.august131868}>August 13,1868</b>
      <div className={styles.top10Inner}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.casualties}>Casualties</b>
        </div>
      </div>
      <div className={styles.top10Child}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.backToHome}>Back to Home Page</b>
        </div>
      </div>
      <div className={styles.frame} onClick={onFrameClick} />
      <div className={styles.frame1} onClick={onFrame1Click} />
      <b className={styles.date}>DATE</b>
      <b className={styles.may221960}>MAY 22,1960</b>
      <b className={styles.december262004}>December 26,2004</b>
      <b className={styles.march281964}>March 28,1964</b>
      <b className={styles.march112011}>March 11, 2011</b>
      <b className={styles.january261700}>January 26,1700</b>
      <b className={styles.february272010}>February 27,2010</b>
      <b className={styles.january131906}>January 13,1906</b>
      <b className={styles.november11755}>November 1,1755</b>
      <b className={styles.b}>9.0</b>
      <b className={styles.b1}>9.0</b>
      <b className={styles.magnitude}>Magnitude</b>
      <b className={styles.b2}>9.5</b>
      <b className={styles.b3}>9.1</b>
      <b className={styles.b4}>9.2</b>
      <b className={styles.b5}>9.0</b>
      <b className={styles.b6}>9.0</b>
      <b className={styles.b7}>8.8</b>
      <b className={styles.b8}>8.8</b>
      <b className={styles.b9}>8.7</b>
      <b className={styles.sovietUnion}>Soviet Union</b>
      <b className={styles.aricaPeru}>Arica, Peru</b>
      <b className={styles.location}>Location</b>
      <b className={styles.chile}>Chile</b>
      <b className={styles.westCoastSumatra}>West coast Sumatra</b>
      <b className={styles.kamchatka}>Kamchatka</b>
      <b className={styles.eastCoastOf}>East coast of Japan</b>
      <b className={styles.northAmerica}>North America</b>
      <b className={styles.bioBioChile}>Bio-Bio, Chile</b>
      <b className={styles.coastOfEcuador}>Coast of Ecuador</b>
      <b className={styles.lisbon}>Lisbon</b>
    </div>
  );
};

export default Top1;
