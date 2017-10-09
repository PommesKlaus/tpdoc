export default (dateString) => {
  const d = new Date(dateString)
  return d.toLocaleDateString()
}
