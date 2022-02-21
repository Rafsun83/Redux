import { connect } from 'react-redux';
import Home from '../Components/Home';
import { addToCart } from '../Services/Actions/action';
const mapStateToProps = state => ({
    data: state.cartItems
})

const mapDispatchToProps = dispatch => ({
    addToCarthandler: data => dispatch(addToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);