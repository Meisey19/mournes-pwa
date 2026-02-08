import { create } from 'zustand';
import localforage from 'localforage';

interface FavoritesState {
  favorites: Set<number>;
  isLoaded: boolean;
  addFavorite: (id: number) => Promise<void>;
  removeFavorite: (id: number) => Promise<void>;
  toggleFavorite: (id: number) => Promise<void>;
  isFavorite: (id: number) => boolean;
  loadFavorites: () => Promise<void>;
}

const FAVORITES_KEY = 'mournes-favorites';

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: new Set<number>(),
  isLoaded: false,

  addFavorite: async (id: number) => {
    const newFavorites = new Set(get().favorites);
    newFavorites.add(id);
    set({ favorites: newFavorites });
    await localforage.setItem(FAVORITES_KEY, Array.from(newFavorites));
  },

  removeFavorite: async (id: number) => {
    const newFavorites = new Set(get().favorites);
    newFavorites.delete(id);
    set({ favorites: newFavorites });
    await localforage.setItem(FAVORITES_KEY, Array.from(newFavorites));
  },

  toggleFavorite: async (id: number) => {
    const { favorites, addFavorite, removeFavorite } = get();
    if (favorites.has(id)) {
      await removeFavorite(id);
    } else {
      await addFavorite(id);
    }
  },

  isFavorite: (id: number) => {
    return get().favorites.has(id);
  },

  loadFavorites: async () => {
    try {
      const stored = await localforage.getItem<number[]>(FAVORITES_KEY);
      if (stored) {
        set({ favorites: new Set(stored), isLoaded: true });
      } else {
        set({ isLoaded: true });
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
      set({ isLoaded: true });
    }
  },
}));
