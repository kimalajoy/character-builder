export const fetchRaces = async () => {
  const response = await fetch('https://www.dnd5eapi.co/api/races')
  const data = await response.json()

  return data;
}

export const fetchRaceDetails = async (race) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/races/${race}`)
  const data = await response.json();

  return data
}


export const fetchClasses = async () => {
  const response = await fetch('https://www.dnd5eapi.co/api/classes')
  const data = await response.json();

  console.log('classes', data)
  return data
}

export const fetchClassDetails = async (characterClass) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/classes/${characterClass}`)
  const data = await response.json();

  return data
}