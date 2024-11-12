import React from "react";
import { useTranslation } from "react-i18next";

const TabButton = ({ label, isActive, onClick }) => {
  const { t } = useTranslation();
  return (
    <li className={`tab-btn ${isActive ? "active-btn" : ""}`} onClick={onClick}>
      <span>{t(label.text)}</span>
    </li>
  );
};

export default TabButton;
