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
  return (10 + (parseInt(tempo, 10) * multiplicador));
}

export default CalcPontos;
