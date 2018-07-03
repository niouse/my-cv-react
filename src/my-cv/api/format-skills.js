const formatSkills = (skills) => {
  let res = []
  skills.forEach((item) => {
    if (res.indexOf(item.type) === -1) res.push(item.type)
  })
  res = res.map((item) => {
    let content = []
    skills
      .filter(skill => item === skill.type)
      .forEach(skill => content.push(skill))
    return ({
      type: item,
      skills: content
    })
  })
  return res
}


export const sortData = (data) => {
  data.reduce((cur, acc) => {
    let res = acc.filter(item => item.type === cur.type)
    res.length !== 0 ?
      acc.push({ type: cur.type, skills: [cur] }) :
      acc[cur.type].skills.push(cur) // Falsy line cur.type not good
    return acc
  })
}


export default formatSkills