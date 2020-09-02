export default function ({ $axios, redirect, $bvToast  }) {
  // Create a custom axios instance
  $axios.create({
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
      if(error.response === undefined) {
        redirect("/error")
      }
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
      } else if (error.response.status >= 500) {
        redirect("/error")
      }
      return Promise.reject(error.response.data)
  })
}