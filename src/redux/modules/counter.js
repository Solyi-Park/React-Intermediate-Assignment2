//초기 상태값(state)을 설정해준다.
const initialState = {
    number: 0
}
//위 형태는 useState사용시 const [number, setNumber] =useState(0);로 표현했었음.


//reducer = 'state에 변화를 일으키는'함수. state를 action의 type에 따라 변경한다.
//input 값으로  state와 action을 받는다.
const counter = (state = initialState, action) => {
// switch문을 통해서 action(객체형태)이 인자로 들어올 때 type과 value를 가지고 있음.
    switch (action.type) {
        case "PLUS_ONE":
            return {
                number: state.number + 1,
            }
        default:
            return state;
    }
}
export default counter;