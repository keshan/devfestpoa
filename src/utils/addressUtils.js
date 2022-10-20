const truncateRegex = /^([a-zA-Z0-9]{6})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

const truncateAddress = (address) => {
  const match = address.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export default truncateAddress;
