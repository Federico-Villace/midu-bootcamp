export const FilteredReducers = () => {
  const filterSelected = (value) => {
    console.log(value);
  };
  return (
    <div>
      all
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("ALL")}
      />
      important
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("IMPORTANT")}
      />
      notImportant
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("NOT_IMPORTANT")}
      />
    </div>
  );
};
