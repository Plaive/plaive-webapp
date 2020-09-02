export default async function ({ $axios }) {
  await $axios.$get("/auth/check")
}
