const FilterButton = (props) => {

    const className = props.isPressed ? 'filter-button checked' : 'filter-button' 

  return (
    <button
      type="button"
      className={className}
      onClick={() => {props.setFilter(props.name)}}
      aria-pressed={props.isPressed}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};

export default FilterButton;
