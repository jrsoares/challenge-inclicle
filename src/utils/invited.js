const count = (data) => {
  data.invited_people.reduce((counter, { confirmed_presence }) => confirmed_presence === true ? counter += 1 : counter, 0);
}
export default count;