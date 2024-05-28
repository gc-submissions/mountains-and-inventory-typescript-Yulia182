import Mountain from "./models/Mountine";

export const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (
  arrOfMountains: Mountain[]
): string => {
  if (arrOfMountains.length === 0) {
    return "sorry";
  }
  const result = arrOfMountains.reduce((acc, cv) => {
    return cv.height > acc.height ? cv : acc;
  });
  return result.name;
};
