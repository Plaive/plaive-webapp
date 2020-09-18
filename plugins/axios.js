export default function ({ $config, $axios, redirect, $bvToast }) {
	// Create a custom axios instance
	$axios.create({
		headers: {
			common: {
				Accept: "application/json, */*"
			}
		}
	})

	$axios.interceptors.response.use((response) => {
		return response
	}, function (error) {
		if (error.response === undefined) {
			redirect("/error")
		}
		const originalRequest = error.config
		console.log(originalRequest)
		if (error.response.status === 401 && originalRequest.url === `${$config.AUTH_BASE_URL}/token/refresh`) {
			return redirect("/signin")
		}
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true
			return $axios.$post(`${$config.AUTH_BASE_URL}/token/refresh`).then((res) => {
				$axios.setToken(res.accessToken, "Bearer")
				return $axios(originalRequest)
			}).catch(() => {
				return redirect("/signin")
			});
		} else if (error.response.status === 401) {
			redirect("/signin")
		} else if (error.response.status >= 500) {
			redirect("/error")
		}
		return Promise.reject(error.response.data)
	})
}