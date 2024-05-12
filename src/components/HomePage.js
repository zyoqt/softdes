import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/top-10");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/casualties-page");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/shakertable");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <img
        className={styles.seismohistoryBackground}
        alt=""
        src="../assets/1.png"
      />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.top10StrongestContainer}>
          <p className={styles.top10Strongest}>Top 10 Strongest</p>
          <p className={styles.top10Strongest}>Earthquakes</p>
        </b>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupChild} />
        <b className={styles.casualties}>Casualties</b>
      </div>
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer2Click}
      >
        <div className={styles.groupChild} />
        <b className={styles.shakerTable}>Shaker Table</b>
      </div>
    </div>
  );
};

export default HomePage;
