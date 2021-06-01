export function formatNumberAsCurrency(number) {
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(number); /* $2,500.00 */
}
