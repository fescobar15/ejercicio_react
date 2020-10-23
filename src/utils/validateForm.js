export default function validateForm(rules, values) {
  const err = {};

  for (let i = 0; i < rules.length; i++) {
    const element = rules[i];
    // eslint-disable-next-line
    if (eval(element.condition)) {
      err[element.name] = element.message;
    }
  }

  return err;
}
