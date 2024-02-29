var __localdata__ = {
  "ru":{
    win:"Миссия выполнена!",
    lose: "Миссия провалена!",
    lvl:"Пройди предыдущие уровни, чтобы разблокировать!",
    adv:"Разблокировать следующий уровень, за рекламу",
    tut:"Подсказка",
    inf:"Результаты",
    inf0: "Текущий результат: ",
    inf1: "Рекордный результат: ",
    infs: " звёзд"
  },
  "en":{
    win:"Mission passed!",
    lose: "Mission failed!",
    lvl: "Complete the previous levels to unlock!",
    adv: "Unlock the next level, for advertising",
    tut:"Hint",
    inf:"Results",
    inf0: "Current result: ",
    inf1:"Record result: ",
    infs: " stars"
  }
}

function TXT(id){
  return __localdata__[lang][id];
}
