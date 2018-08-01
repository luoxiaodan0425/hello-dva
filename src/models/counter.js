export default{
    namespace:'counter',
    state:{
        count:2
    },
    reducers: {
        'add' (state, action) {
            return {
                count: state.count + 1
            };
        }
    }
}