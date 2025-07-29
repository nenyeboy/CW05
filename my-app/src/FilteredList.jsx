import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import List from "./List";

const FilteredList = ({ items }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");   // NEW

  /* ----- helpers ----- */
  const matchesSearch = (item) =>
    item.name.toLowerCase().includes(search.toLowerCase());

  const matchesType = (item) =>
    type === "All" || item.type === type;

  const filtered = items.filter(
    (item) => matchesSearch(item) && matchesType(item)
  );

  /* ----- render ----- */
  return (
    <div className="filtered-list">
      {/* search box */}
      <input
        placeholder="search…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />

      {/* dropdown */}
      <DropdownButton
        id="type-filter"
        title={`Show: ${type}`}
        onSelect={(val) => setType(val)}
        style={{ marginBottom: "1rem" }}
      >
        <Dropdown.Item eventKey="All">All</Dropdown.Item>
        <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
        <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
      </DropdownButton>

      {/* list */}
      <List items={filtered} />
    </div>
  );
};

export default FilteredList;