import Counter from '../components/Counter';
//import * as actions from '../actions';
import { connect } from 'react-redux';
//useSelector() Hook 함수와 동일
// store 안의 state 값을 props로 연결해줍니다.
import { getRandomColor } from '../utils';
import { increment, decrement, setColor } from '../actions';
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

/*Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 합니다.*/
const CounterContainer = connect(
    //store의 state 객체를 받아오기(useSelector())
    (state) => ({
        color: state.color,
        number: state.number
    }),
    //action함수를 dispatch해서 store로 보내기 (useDispatch())
    {
        onIncrement: increment,
        decrement: decrement,
        onSetColor: () => setColor(getRandomColor())
    }
)(Counter);
export default CounterContainer;