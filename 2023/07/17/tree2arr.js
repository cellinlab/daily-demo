const obj = {
  id: 1,
  name: 'Department A',
  children: [
    {
      id: 2,
      name: 'Department B',
      children: [
        { id: 4, name: 'Department D' },
        { id: 5, name: 'Department E' }
      ]
    },
    {
      id: 3,
      name: 'Department C',
      children: [{ id: 6, name: 'Department F' }]
    }
  ]
}

function convert(obj) {
  const result = [];

  traverse(obj, 0);
  function traverse(obj, parentId) {
    const { id, name, children } = obj;
    result.push({ id, name, parentId });

    if (children) {
      for (const child of children) {
        traverse(child, id);
      }
    }
  }

  return result;
}

console.log(convert(obj));