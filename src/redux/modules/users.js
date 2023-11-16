//초기 상태값(state)을 설정해준다.
const initialState = {
    userId: 123,
}
//위 형태는 useState사용시 const [number, setNumber] =useState(0);로 표현했었음.


//reducer = 'state에 변화를 일으키는'함수. state를 action의 type에 따라 변경한다.
//input 값으로  state와 action을 받는다.
const users = (state = initialState, action) => {
// switch문을 통해서 action(객체형태)이 인자로 들어올 때 type과 value를 가지고 있음.
    switch (action.type) {
        // action.type에 따라 작업을 수행한다.
        default:
            return state;
            //아무 것도 없을 때는 initialState를 return한다.
    }

}
export default users;