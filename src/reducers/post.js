export default (post = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return post;

    default:
      return post;
  }
};
