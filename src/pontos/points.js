function CalcPontos(tempo, dificuldade) {
  let multiplicador = 0;
  switch (dificuldade) {
    case 'hard':
      multiplicador = 3;
      break;
    case 'medium':
      multiplicador = 2;
      break;
    case 'easy':
      multiplicador = 1;
      break;
    default:
      multiplicador = 0;
      break;
  }
  console.log(`tempo =>${tempo}`)
  console.log(`parse =>${parseInt(tempo)}`)
  return (10 + (parseInt(tempo) * multiplicador));
}

export default CalcPontos;
