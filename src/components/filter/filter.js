import classes from "./filter.module.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleFilter, removeFilter } from "../store/sliсe-filterReducer";

function Filter() {
  const filterActive = useSelector((state) => state.filter.filter);
  console.log(filterActive);

  const dispatch = useDispatch();

  const toggle = (e) => {
    const textContent = e.target.parentNode.textContent.trim();
    const checkboxes = document.querySelectorAll(`.${classes["check-input"]}`);
  
    if (textContent === "Все") {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = e.target.checked;
        dispatch(
          e.target.checked
            ? toggleFilter(checkbox.parentNode.textContent.trim())
            : removeFilter(checkbox.parentNode.textContent.trim())
        );
      });
    } else {
      const anyUnchecked = Array.from(checkboxes).some((checkbox) => {
        return checkbox.parentNode.textContent.trim() !== "Все" && !checkbox.checked;
      });

      if (anyUnchecked) {
        const allCheckbox = document.querySelector(`.${classes["check-input"]}`);
        allCheckbox.checked = false;
        dispatch(removeFilter("Все"));
      }
  
      if (!anyUnchecked) {
        const allCheckbox = document.querySelector(`.${classes["check-input"]}`);
        allCheckbox.checked = true;
        dispatch(toggleFilter("Все"));
      }

      if (e.target.checked === true) {
        dispatch(toggleFilter(textContent));
      } else {
        dispatch(removeFilter(textContent));
      }
    }
  }

  return (
    <div className={classes.filter}>
      <div className={classes["label-filter"]}>Количество пересадок</div>

      <label className={classes["input-filter"]} >
        <input className={classes["check-input"]} type="checkbox" onChange={toggle} />
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
