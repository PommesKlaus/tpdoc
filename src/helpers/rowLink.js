import router from '@/router'

export default (routeName, kwargs) => {
  router.push({
    name: routeName,
    params: kwargs
  })
}
