export default function ({ store, redirect }) {
  const { auth } = store.state
  const permissions = auth.payload.permissions;
  if (
    !auth.payload ||
    permissions == undefined || (permissions && !permissions.includes('admin'))
  ) {
    return redirect('/not-permitted')
  }
}