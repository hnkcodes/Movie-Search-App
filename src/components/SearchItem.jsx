export default function SearchItem({
  list,
  type,
  handleOption,
  title,
  inputs,
}) {
  return (
    <>
      <h3>{title}</h3>
      <ul className="search-list">
        {list.map((item) => (
          <li
            onClick={() => handleOption(item.input, type)}
            key={item.option}
            className="search-list-item"
          >
            <button
              className={`${inputs[type] === item.input ? "active-search-list-button search-list-item-button" : "search-list-item-button"}`}
            >
              {item.option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
