import classes from "./filter.module.scss";
import React from 'react';
function Filter() {
  return (
    <div className={classes.filter}>
      <div className={classes["label-filter"]}>Количество пересадок</div>

      <label className={classes["input-filter"]}>
        <input className={classes["check-input"]} type="checkbox" />
        <span className={classes["check-box"]}></span>
        Все
      </label>

      <label className={classes["input-filter"]}>
        <input className={classes["check-input"]} type="checkbox" />
        <span className={classes["check-box"]}></span>
        Без пересадок
      </label>

      <label className={classes["input-filter"]}>
        <input className={classes["check-input"]} type="checkbox" />
        <span className={classes["check-box"]}></span>1 пересадка
      </label>

      <label className={classes["input-filter"]}>
        <input className={classes["check-input"]} type="checkbox" />
        <span className={classes["check-box"]}></span>2 пересадки
      </label>

      <label className={classes["input-filter"]}>
        <input className={classes["check-input"]} type="checkbox" />
        <span className={classes["check-box"]}></span>
        3 пересадки
      </label>
    </div>
  );
}
export default Filter;
