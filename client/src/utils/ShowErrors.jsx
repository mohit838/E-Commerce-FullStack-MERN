export const showError = (errors, name) => {
  if (errors.length > 0) {
    const exist = errors.find((err) => err.param === name);
    if (exist) {
      return exist.msg;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// export const showError = (errors, name) => {
//   const set = new Set(errors);

//   if (set.length > 0) {
//     const exist = Array.from(set).find((err) => err.param === name);
//     if (exist) {
//       return exist.msg;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// };
