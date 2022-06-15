import { reactive } from 'vue'
import { getQueryVariable } from '../utils'
import { pageConfigSelect } from "../config/pageSettingSelect";

export const usePageConfig = () => {
  const getPageConfig = pageConfigSelect(getQueryVariable('type'))
  const pageConfig = reactive({
    config: getPageConfig.config,
    component: getPageConfig.component
  })

  return {
    pageConfig
  }
}
