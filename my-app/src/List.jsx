const List = ({ items }) => (
  <ul>
    {items.map((item, idx) => (
      <li key={idx}>{item.name}</li>
    ))}
  </ul>
);

export default List;