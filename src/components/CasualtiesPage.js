import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/CasualtiesPage.module.css";

const CasualtiesPage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShakerTableClick = useCallback(() => {
    // Navigate to the Shaker Table app
    navigate("/shakertable");
  }, [navigate]);

  return (
    <div className={styles.casualtiesPage}>
      <img className={styles.casualJpegIcon} alt="" src="./assets/3.png" />
      <div
        className={styles.casualtiesPageInner}
        onClick={onGroupContainerClick}
      >
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={`${styles.backToHome} ${styles.shakerTable}`}>
            Back to Home Page
          </b>
        </div>
      </div>
      <div className={styles.casualtiesPageChild}
      onClick={onShakerTableClick}
      >
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={`${styles.backToHome} ${styles.shakerTable}`}>
            Shaker Table
          </b>
        </div>
      </div>
      <b className={styles.november41952}>November 4,1952</b>
      <b className={styles.august131868}>August 13,1868</b>
      <b className={styles.date}>DATE</b>
      <b className={styles.may221960}>MAY 22,1960</b>
      <b className={styles.december262004}>December 26,2004</b>
      <b className={styles.march281964}>March 28,1964</b>
      <b className={styles.march112011}>March 11, 2011</b>
      <b className={styles.january261700}>January 26,1700</b>
      <b className={styles.february272010}>February 27,2010</b>
      <b className={styles.january131906}>January 13,1906</b>
      <b className={styles.november11755}>November 1,1755</b>
      <b className={styles.b}>---</b>
      <b className={styles.b1}>---</b>
      <b className={styles.noofInjured}>No.of injured</b>
      <b className={styles.b2}>3,000</b>
      <b className={styles.b3}>---</b>
      <b className={styles.b4}>50</b>
      <b className={styles.b5}>4,100</b>
      <b className={styles.b6}>---</b>
      <b className={styles.b7}>150</b>
      <b className={styles.b8}>---</b>
      <b className={styles.b9}>---</b>
      <b className={styles.b10}>15,000</b>
      <b className={styles.b11}>---</b>
      <b className={styles.noOfDeaths}>No. of Deaths</b>
      <b className={styles.approx1655}>Approx. 1,655</b>
      <b className={styles.approx230000}>Approx.230,000</b>
      <b className={styles.b12}>131</b>
      <b className={styles.b13}>19,300</b>
      <b className={styles.b14}>---</b>
      <b className={styles.b15}>528</b>
      <b className={styles.b16}>---</b>
      <b className={styles.b17}>---</b>
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
      <b className={styles.million}>$17 million</b>
      <b className={styles.b18}>25,000</b>
      <b className={styles.costOfCasualties}>Cost of Casualties</b>
      <b className={styles.million1}>$550 million</b>
      <b className={styles.million2}>$10 million</b>
      <b className={styles.billion}>$1 billion</b>
      <b className={styles.billion1}>$235 billion</b>
      <b className={styles.b19}>---</b>
      <b className={styles.million3}>$550 million</b>
      <b className={styles.b20}>---</b>
      <b className={styles.b21}>---</b>
    </div>
  );
};

export default CasualtiesPage;
