import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigateTo = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigateTo(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for order #"
      />
    </form>
  );
}

export default SearchOrder;
