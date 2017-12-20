import { connect } from 'react-redux';

import * as mainActions from '../actions/main';
import Home from '../components/Home';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(mainActions.setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
