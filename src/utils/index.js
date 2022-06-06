import emitter from "../mitt.js";

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

export const deleteWidget = (element, props) => {
  const { id } = element
  const index = props.widgets.findIndex(item => item.id === id);
  if (index >= 0) {
    props.widgets.splice(index, 1);
    
    /** 更新panel */
    try {
      emitter.emit('deleteSetCurrentWidget')

      const pid = id.split('-')[0];
      const pIndex = props.panel.findIndex(item => item.id === pid);
      const cIndex = props.panel[pIndex].children.findIndex(item => item.id === id);

      (props.panel[pIndex].children[cIndex].currentCount)--
    }catch{}
  }
}