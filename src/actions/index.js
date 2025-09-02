import * as types from './ActionTypes';

//상태변수값을 증가시키는 액션함수
export const increment = () => ({
    type: types.INCREMENT
});
//상태변수값을 감소시키는 액션함수
export const decrement = () => ({
    type: types.DECREMENT
});
//상태변수값의 색상을 변경하는 액션함수
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});