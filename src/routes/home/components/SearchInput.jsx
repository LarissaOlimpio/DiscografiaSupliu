import { useState } from "react";
import { useStore } from "../../../hooks/useStore";
import { TextField } from "../../../components/TextField";

function SearchInput() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const { searchAlbum } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();

    searchAlbum(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="items-end ">
          <TextField
            id="searchInput"
            type="text"
            value={search}
            onChange={handleChange}
          >
            Digite uma palavra chave:
          </TextField>


          <button className="blue" type="submit">
            {" "}
            Procurar
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchInput;
