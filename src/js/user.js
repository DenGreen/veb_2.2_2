const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
}

export function arrSpecial(value){
  const arr=[];
  for(let arrElement of value.special){
    let {id, name, icon, description = 'Описание недоступно'} = arrElement;
    arr.push({id: id, name: name, icon: icon, description: description});
  }
  return arr;
}
console.log(arrSpecial(character));