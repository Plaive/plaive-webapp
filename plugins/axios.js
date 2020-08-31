export default function ({ $axios, redirect  }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json, */*'
      }
    }
  })

  $axios.interceptors.response.use((response) => {
    return response
  },
  function (error) {
      const originalRequest = error.config
      if (error.response.status === 401 && originalRequest.url === '/auth/refresh') {
        redirect("/signin")
      }
      if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true
          return $axios.$post('/auth/refresh')
          .then(res => {
            $axios.setToken(res.accessToken, 'Bearer')
            return $axios(originalRequest)
          }).catch(() => {
            redirect("/signin")
          })
      }
      return Promise.reject(error)
  })

  // Inject to context as $api
  inject('api', api)
}