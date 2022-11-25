import React, { useState } from "react";
import styles from "./Alert.module.css";

const Alert = ({ id, message, autoClose, type, onClose }) => {
  let bgcolor =
    type === "success"
      ? "lightgreen"
      : type === "error"
      ? "red"
      : "lightyellow";
  return (
    <div className={styles.alert} style={{ backgroundColor: bgcolor }}>
      <span>
        <p>{type}</p> :<p>{message}</p>
      </span>
      {!autoClose && (
        <button
          onClick={() => {
            onClose(id);
          }}
        >
          close
        </button>
      )}
    </div>
  );
};

export default Alert;
