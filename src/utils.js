import firebase from 'firebase';

const checkAuth = firebase.auth().onAuthStateChanged((user) => {
  console.log('checkauth');
  if (user) {
    this.setState(prevState => ({
      ...prevState,
      activeUser: user.providerData[0],
    }));
  } else {
    return false;
  }
  return true;
});

module.exports = {
  checkAuth,
};
