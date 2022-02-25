const diff = (initial, modified) => {
    return Object.keys(modified).reduce((previous, key) => {
      // array check 
      if (key in initial && modified[key] instanceof Array) {
          let arrDiff = initial[key]
               .filter(x => !modified[key].includes(x))
               .concat(modified[key].filter(x => !initial[key].includes(x)));
          
          if (arrDiff.length > 0) {
              return {
                  ...previous,
                  [key]: modified[key]
              };
          } else {
              return {
                  ...previous
              };
          }
      }
      //object is kindOf Object
      if (key in initial && modified[key] instanceof Object) {
          let objDiff = diff(initial[key], modified[key]);
          if (Object.keys(objDiff).length === 0) {
              return {
                  ...previous
              };
          } else {
              return {
                  ...previous,
                  [key]: objDiff
              };
          }
          
      }

      if (initial[key] === modified[key]) return previous;

      return {
        ...previous,
        [key]: modified[key]
      };
    }, {});
}

export default diff;