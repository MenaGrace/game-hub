import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface gameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<gameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set((state) => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
