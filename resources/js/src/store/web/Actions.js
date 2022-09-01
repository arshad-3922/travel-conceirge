export default {
    async getAll({ commit }, params) {
        try {
            let response = await axios.get(params.route, { params: params.data });
            // statements
            if(params.mutation){
                commit(params.mutation, response.data[params.variable]);
            }
            
            return response;
        } catch (e) {
            alert('fail')
            return e.response
            // console.log(e);
        }
    },
    async get({ commit }, params) {
        try {
            let response = await axios.get(params.route, { params: params.data },{headers : params.headers});
            // statements
            if(params.mutation){
                commit(params.mutation, response.data[params.variable]);
            }
            return response;
        } catch (e) {
            alert('fail-again')
            return e.response
            // console.log(e);
        }
    },
    async delete({ commit }, params) {
        try {
            let response = await axios.delete(params.route, { params: params.data });
            if(params.mutation){
                commit(params.mutation, response.data[params.variable]);
            }
            return response;
        } catch (e) {
            // statements
            return e.response
            // console.log(e);
        }
    },
    async store({ commit }, params) {
        let method = typeof params.method == 'undefined' || params.method.toLowerCase() == 'post' ? 'post' : 'put';

        try {
            let response = await axios.[method](params.route, params.data);
            // statements
            if(params.mutation){
                commit(params.mutation, response.data[params.variable]);
            }
            console.log('store',response);
            return response;
        } catch (e) {
             console.log('store-catch',e);
            // statements
            return e.response
            // console.log(e);
        }
    }
}
