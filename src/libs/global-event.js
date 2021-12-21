import Vue from "vue";
export const vm = new Vue()

export const checkSize = () => {
  if(innerWidth < 992) {
    vm.$emit('mobile-mode')
  } else {
    vm.$emit('desktop-mode')
  }
}
export const initScreenEvent = () =>  {
  addEventListener('resize', checkSize)
}
export const destroyScreenEvent = () =>  {
  removeEventListener('resize', checkSize)
}

export const categoryDetailsEvent = (payload) =>  {
  vm.$emit('category-details-event', payload)
}
export const addCategoryEvent = (payload) =>  {
  vm.$emit('add-category-event', payload)
}

