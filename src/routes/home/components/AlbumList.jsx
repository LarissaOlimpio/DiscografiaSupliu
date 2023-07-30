import { usePagination } from "../../../Pagination/Pagination";
import { useStore } from "../../../hooks/useStore";
import AlbumItem from "./AlbumItem";

function AlbumList() {
  const { isLoadingAlbums, albumsData } = useStore();
  const itemsPerPage = 5;

  const {
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    currentItems,
  } = usePagination(
    albumsData.items?.length || 0,
    itemsPerPage,
    albumsData.items || []
  );

  if (isLoadingAlbums) return <div>Carregando...</div>;

  if (!albumsData.items || albumsData.items.length === 0) {
    return <div className="text-center">Nenhum album encontrado.</div>;
  }

  return (
    <div>
      <ul>
        {currentItems().map((album) => (
          <AlbumItem key={album.id} album={album} />
        ))}
      </ul>
      <div className="flex justify-center">
        <button
          className="blue"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          className="blue"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default AlbumList;
