export default (status) => {
  switch (status) {
    case 'pednding':
      return 'Ожидается';
    case 'out_of_stock':
      return 'Нет в наличии';
    case 'in_stock':
      return 'В наличии';
  }
};