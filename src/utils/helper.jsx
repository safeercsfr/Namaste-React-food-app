export const filterData = (searchText, restaurants) => {
  return restaurants.filter((res) =>
    res?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
};
