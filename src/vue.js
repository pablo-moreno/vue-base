import Vue from 'vue'
import { directive as clickOutside } from 'vue-clickaway'

Vue.config.productionTip = false

Vue.directive('click-outside', clickOutside )
export default Vue