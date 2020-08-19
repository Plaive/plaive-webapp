export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json, */*'
      }
    }
  })
  
  $axios.setToken('123', 'Bearer')

  // Inject to context as $api
  inject('api', api)
}