import React from "react";
import styles from "../main.module.css";



const Loading = () => {
  return (
    <>
    <div style={{width: "1200px", height : "800px"}} >

      <div   className={styles.loadingCSS} >
     
        <img
          width="250px"
          src="https://images.bewakoof.com/web/bwkf-loading-anim-common.gif"
          alt="loading..."
          />
       <h6 style={{fontSize :"30px", marginTop : "-50px"}} >Bewakoof</h6>
      </div>
   </div>
    </>
  );
};

export default Loading;
