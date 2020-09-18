export default async function ({ $config, $axios }) {
  await $axios.$get(`${$config.AUTH_BASE_URL}/check`)
}
