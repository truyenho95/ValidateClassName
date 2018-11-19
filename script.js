function checkValidateClassName(className) {
  let regx = /^[C|A|P]\d{4}[G|H|I|K|L|M]$/;
  if (regx.test(className)) {
    console.log(`Class Name: ${className} hợp lệ!`);
  } else {
    console.log(`Class Name: ${className} không hợp lệ!`);
  }
}

let className = 'C0318G';
checkValidateClassName(className);
className = 'M0318G';
checkValidateClassName(className);
className = 'P0323A';
checkValidateClassName(className);
