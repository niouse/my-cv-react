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

export default formatSkills