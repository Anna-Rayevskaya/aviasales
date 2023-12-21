import classes from "./tabs.module.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleSorting } from "../store/slice-tabsReducer";

function Tabs() { 

  const tabActive = useSelector((state) => state.tabs.tabs);
  const dispatch = useDispatch();

  const toggle = (e) => {
    dispatch(toggleSorting(e.target.textContent));
  };

  const addClassName = (text) => {
    if (tabActive === text) {
      return `${classes.buttonTab} ${classes.active}`;
    }
    return classes.buttonTab;
  };
  return (
    <div className={classes.tabs}>
      <button className={addClassName("Самый дешевый")} onClick={toggle}>
        Самый дешевый
      </button>
      <button className={addClassName("Самый быстрый")} onClick={toggle}>
        Самый быстрый
      </button>
      <button className={addClassName("Оптимальный")} onClick={toggle}>
        Оптимальный
      </button>
    </div>
  );
}
export default Tabs;
