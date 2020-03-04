/**
 * @description The feathers middleware will redirect any user in a 
 * non public page to the login, 
 * but will also redirect a loged user away from any public pages.
 * https://vuex.feathersjs.com/common-patterns.html#full-nuxt-example
 * @param {*} param0 
 */
export default function ({ store, redirect, route }) {
  const { auth } = store.state
  if (auth.publicPages.length > 0 && !auth.publicPages.includes(route.name) && !auth.payload) {
    return redirect('/authenticate')
  } else if (auth.publicPages.length > 0 && auth.publicPages.includes(route.name) && auth.payload) {
    return redirect('feed')
  }
}