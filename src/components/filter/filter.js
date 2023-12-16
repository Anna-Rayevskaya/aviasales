import classes from "./filter.module.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleFilter, removeFilter } from "../store/sliсe-filterReducer";

function Filter() {
  const tabActive = useSelector((state) => state.filter.filter);
  console.log(tabActive);

  const dispatch = useDispatch();

  const toggle = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      dispatch(toggleFilter(e.target.parentNode.textContent.trim()));
    } else {
      dispatch(removeFilter(e.target.parentNode.textContent.trim()));
    }
  };

  return (
    <div className={classes.filter}>
      <div className={classes["label-filter"]}>Количество пересадок</div>

      <label className={classes["input-filter"]} onChange={toggle}>
        <input className={classes["check-input"]} type="checkbox"   />
        <span className={classes["check-box"]}></span>
        Все
      </label>

      <label className={classes["input-filter"]} >
        <input className={classes["check-input"]} type="checkbox" onChange={toggle}/>
        <span className={classes["check-box"]}></span>
        Без пересадок
      </label>

      <label className={classes["input-filter"]} >
        <input className={classes["check-input"]} type="checkbox" onChange={toggle}/>
        <span className={classes["check-box"]}></span>1 пересадка
      </label>

      <label className={classes["input-filter"]} >
        <input className={classes["check-input"]} type="checkbox" onChange={toggle}/>
        <span className={classes["check-box"]}></span>2 пересадки
      </label>

      <label className={classes["input-filter"]} >
        <input className={classes["check-input"]} type="checkbox" onChange={toggle}/>
        <span className={classes["check-box"]}></span>3 пересадки
      </label>
    </div>
  );
}
export default Filter;
