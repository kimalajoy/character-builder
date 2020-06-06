export const fetchData = async () => {
  const response = await fetch('https://www.dnd5eapi.co/api/races')
  const data = await response.json()
  
  console.log(data)
  return data;
}