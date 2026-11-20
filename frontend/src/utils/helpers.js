export const formatDate = (date) =>
  new Intl.DateTimeFormat('vi-VN', { dateStyle: 'medium' }).format(new Date(date));

export const formatCurrency = (amount, currency = 'VND') =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency }).format(amount);

export const truncate = (str, length = 100) =>
  str.length > length ? `${str.slice(0, length)}...` : str;
