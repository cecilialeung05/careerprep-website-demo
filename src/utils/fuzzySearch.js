
  // @param {string} needle
  // @param {string} haystack 
  // @returns {boolean}
 
export const fuzzySearch = (needle, haystack) => {
    if (!needle || !haystack) return false;
  
    needle = needle.toLowerCase();
    haystack = haystack.toLowerCase();
  
    let hIndex = 0;
    let nIndex = 0;
  
    while (hIndex < haystack.length) {
      if (haystack[hIndex] === needle[nIndex]) {
        nIndex++;
      }
      if (nIndex === needle.length) {
        return true;
      }
      hIndex++;
    }
  
    return false;
  };
  
  //  * @param {Array} items 
  //  * @param {string} searchTerm 
  //  * @param {Array} fields 
  //  * @returns {Array} 

  export const filterBySearchTerm = (items, searchTerm, fields) => {
    if (!searchTerm) return items;
  
    return items.filter(item =>
      fields.some(field =>
        fuzzySearch(searchTerm, item[field]?.toString() || "")
      )
    );
  };
  