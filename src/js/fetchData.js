export const getData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};
