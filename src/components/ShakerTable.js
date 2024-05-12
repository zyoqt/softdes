import { useCallback } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ShakerTable.module.css";

const ShakerTable = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/shakertable-output");
  }, [navigate]);
  const [file, setFile] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        //const csvOutput = event.target.result;
      };

      fileReader.readAsText(file);
    }
  };

  return (
    <div className={styles.shakerTable}>
      <div className={styles.shakerTableInner}>
        <div className={styles.shakerTableInner}>
          <img
            className={styles.shakerJpegIcon}
            alt=""
            src="./assets/4.png"
          />
          <div className={styles.frame} onClick={onFrameContainerClick}>
            <div className={styles.backToHomePageWrapper}>
              <b className={styles.backToHome}>Back to Home Page</b>
            </div>
          </div>
          <div
            className={styles.simulateWrapper}
            onClick={onFrameContainer1Click}
          >
            <b className={styles.simulate}
              onClick={(e) => {
              handleOnSubmit(e);
            }}
            >Simulate</b>
          </div>
          <div className={styles.uploadDataWrapper}>
            <label htmlFor="uploadInput" className={styles.uploadButton}>
              Upload Data
              <input
                type={"file"}
                id={"uploadInput"}
                accept={".csv"}
                onChange={handleOnChange}
                className={styles.uploadInput}
              />
            </label>
          </div>
          <div className={styles.frameChild} />
          <img
            className={styles.receiveUnlimitedFileSize1Icon}
            alt=""
            src="/receiveunlimitedfilesize1-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ShakerTable;

