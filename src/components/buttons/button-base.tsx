import { ReactElement } from "react";
import buttonStyle from "./base.module.css";

type ButtonBasePropsType = {
  additionalStyles?: CSSModuleClasses;
  onClick: () => void;
  ElementJSX?: ReactElement;
  text?: string | number;
  arialLabel?: string;
};
export default function ButtonBase(props: ButtonBasePropsType) {
  const { additionalStyles, onClick, ElementJSX, text, arialLabel } = props;
  const styles = Object.assign({}, buttonStyle, additionalStyles);

  function renderButtonIcon() {
    if (ElementJSX) {
      return <span className={styles.icon}>{ElementJSX}</span>;
    }
    return null;
  }

  function renderButtonText() {
    if (text) {
      return <span className={styles.icon}>{text}</span>;
    }
    return null;
  }

  return (
    <button
      aria-label={arialLabel}
      type="button"
      className={styles.btn}
      onClick={onClick}
    >
      {renderButtonIcon()}
      {renderButtonText()}
    </button>
  );
}
