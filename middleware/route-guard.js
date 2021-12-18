export default function ({redirect, store, route}) {
  const isAuthenticated = store.state.isLoggedIn
  if (!isAuthenticated && route.path !== "/login") {
    redirect('/login')
  }
}