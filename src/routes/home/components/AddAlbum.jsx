import { useState } from "react";
import { useStore } from "../../../hooks/useStore";
import { TextField } from "../../../components/TextField";

function AddAlbum({ hide }) {
  const [name, setName] = useState("");
  const [year, setYear] = useState(1980);

  const { addAlbum } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();

    addAlbum({
      name,
      year,
    });

    hide();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        >
          Nome do Album
        </TextField>
      </div>

      <div>
        <TextField
          id="year"
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          min={1900}
        >
          Ano de Lançamento
        </TextField>
      </div>

      <div className="flex row justify-end">
        <button className="white" type="button" onClick={hide}>
          Cancelar
        </button>

        <button className="blue" type="submit">
          🪄 Criar
        </button>
      </div>
    </form>
  );
}

export default AddAlbum;
