export const getQueryVariable = (variable, urlSearch = window.location.search) => {
  const query = urlSearch.substring(1);
  const vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return '';
};
