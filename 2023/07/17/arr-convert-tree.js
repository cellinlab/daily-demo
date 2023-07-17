const arr = [
  { id: 1, name: "Department A", parentId: 0 }, // 0 means top-level node with no parent
  { id: 2, name: "Department B", parentId: 1 },
  { id: 3, name: "Department C", parentId: 1 },
  { id: 4, name: "Department D", parentId: 2 },
  { id: 5, name: "Department E", parentId: 2 },
  { id: 6, name: "Department F", parentId: 3 },
];

function convert(arr) {
  const map = {};

  for (const item of arr) {
    const { id, parentId } = item;

    if (!map[id]) {
      map[id] = {
        ...item,
        children: [],
      };
    } else {
      map[id] = {
        ...map[id],
        ...item,
      };
    }

    if (parentId === 0) {
      continue;
    }

    if (!map[parentId]) {
      map[parentId] = { children: [] };
    }
    map[parentId].children.push(map[id]);
  }

  return Object.values(map).filter((item) => item.parentId === 0)[0];
}

console.log(JSON.stringify(convert(arr), null, 2));