import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';
import { SORT_BY, REGION, STATUS } from '../utils/CONSTANTS';

const regionInitialState = Object.fromEntries(
  Object.keys(REGION).map((key) => [REGION[key], false])
);

const statusInitialState = Object.fromEntries(
  Object.keys(STATUS).map((key) => [STATUS[key], false])
);

const useFilter = createWithEqualityFn(
  devtools((set) => ({
    sortFilter: SORT_BY.POPULATION,
    regionFilter: regionInitialState,
    statusFilter: statusInitialState,
    setSortByFilter: (sortFilter) => set({ sortFilter }),
    setRegionFilter: (value) =>
      set((state) => ({
        regionFilter: {
          ...state.regionFilter,
          [value]: !state.regionFilter[value],
        },
      })),
    setStatusFilter: (value) => {
      return set((state) => ({
        statusFilter: {
          ...state.statusFilter,
          [value]: !state.statusFilter[value],
        },
      }));
    },
  }))
);

export default useFilter;
