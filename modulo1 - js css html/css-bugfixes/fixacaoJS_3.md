ˋˋˋfunction calculaNota(ex, p1, p2) {
ex = 4
p1 = 4
p2 = 1

  let mp = Number(ex *1 + p1 *2 + p2 *3) /3
  console.log(mp)
  if(mp >= 9){
    return "A"
  }else if(mp < 9.0 >= 7.5){
    return "B"
  }else if(mp < 7.5 >= 6){
    return "C"
  }else if (mp < 6){
    return "D"
}

}

console.log(calculaNota())ˋˋˋ
//resultado:
// 5
// D