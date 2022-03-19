export const removeElement = (array, element) => {
  const index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

export const arrayContains = (arr, searchFor) => {
  if (typeof arr.includes == "undefined") {
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i++) {
      if (arr[i] === searchFor) {
        return true;
      }
    }
    return false;
  }
  return arr.includes(searchFor);
};
