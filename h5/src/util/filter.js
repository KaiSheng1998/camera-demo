// import str2dom from './str2dom';

const unique = (arr, key = 'id') => {
  if (!Array.isArray(arr)) {
    return arr;
  }
  const newArr = [];
  const keys = [];
  arr.map(v => {
    const cKey = v[key]? v:{};
    if (!keys.includes(cKey)) {
      keys.push(cKey);
      newArr.push(v);
    }
  });
  return newArr;
};

const filter = (list, keyword, fields = [], exact = false) => {
  if (!Array.isArray(list)) {
    return [];
  }
  if (!keyword) {
    return list;
  }
  if (typeof fields === 'string') {
    fields = [fields];
  }
  return list.filter(v => {
    fields = fields.length > 0 ? fields : Object.keys(v);
    return fields.some(field => {
      const fieldValue = v[field];
      if (fieldValue == null) {
        return false;
      }
      if (exact) {
        return fieldValue === keyword;
      }
      // const match=fieldValue.toString().toLowerCase().includes(keyword.toLowerCase());
      const reg = new RegExp(keyword, 'gi');
      const match = fieldValue.toString().match(reg);
      console.log(match)
      // 高亮
      /* if(match){
        v[field]=str2dom(fieldValue.toString().replace(reg,`<span style="background-color:yellow">${match[0]}</span>`));
      } */
      return match;
    });
  });
};

export const getMatched = fn => (arr, childKey = 'children') => {
  if (!Array.isArray(arr)) {
    return arr;
  }
  const tree = JSON.parse(JSON.stringify((arr)));
  const traver = data => {
    const matchData = [];
    data.map(v => {
      if (Array.isArray(v[childKey]) && v[childKey].length) {
        const matchChildren = traver(v[childKey]) || [];
        v[childKey] = matchChildren;
        if (matchChildren.length > 0) {
          matchData.push(v);
        }
      }
    });
    return fn(data, matchData);
  };
  return traver(tree);
};
export const filterTree = (tree, keyword, fields = 'categoryName', childKey = 'children') => {
  console.log(keyword)
  console.log(tree)
  if (!keyword) {
    return null;
  }
  return getMatched((list, matchedItem) => unique([...filter(list, keyword, fields), ...matchedItem]))(tree, childKey)
};















