const covertToMoney = (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
};

export default covertToMoney;
