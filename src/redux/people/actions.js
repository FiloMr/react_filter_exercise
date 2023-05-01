import * as types from "../people/types";

export const updateQuery = (query) => ({
  type: types.UPDATE_QUERY,
  query,
});
