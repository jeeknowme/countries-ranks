import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';
import { SORT_BY, REGION, STATUS } from '../utils/CONSTANTS';
import {
  getUrlSearchParams,
  createInitialFilterStateFromUrl,
} from '../utils/helpers';

const regionInitialState = Object.fromEntries(
  Object.keys(REGION).map((key) => [REGION[key], false])
);

const statusInitialState = Object.fromEntries(
  Object.keys(STATUS).map((key) => [STATUS[key], false])
);

const useFilter = createWithEqualityFn(
  devtools((set) => ({
    searchFilter: '',
    sortFilter: getUrlSearchParams('sort')?.[0] || SORT_BY.POPULATION,
    regionFilter: createInitialFilterStateFromUrl(regionInitialState, 'region'),
    statusFilter: createInitialFilterStateFromUrl(statusInitialState, 'status'),
    setSortByFilter: (sortFilter) => {
      set({ sortFilter });
    },
    setRegionFilter: (value) => {
      set((state) => ({
        regionFilter: {
          ...state.regionFilter,
          [value]: !state.regionFilter[value],
        },
      }));
    },
    setStatusFilter: (value) => {
      set((state) => ({
        statusFilter: {
          ...state.statusFilter,
          [value]: !state.statusFilter[value],
        },
      }));
    },
    setSearchFilter: (value) => set((state) => ({ searchFilter: value })),
  }))
);

export default useFilter;
