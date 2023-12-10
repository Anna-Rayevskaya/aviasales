import classes from "./tabs.module.scss";

function Tabs() {
  return (
    <div className={classes.tabs}>
      <button className={`${classes.buttonTab} ${classes.active}`}>
        Самый дешевый
      </button>
      <button className={classes.buttonTab}>Самый быстрый</button>
      <button className={classes.buttonTab}>Оптимальный</button>
    </div>
  );
}
export default Tabs;
