import imgur from '../../api/imgur';
import { router } from '../../main'

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const response = await imgur.fetchImages(rootState.auth.token);

        commit('setImages', response.data.data)
    },
    async uploadImages({ rootState }, images) {
        const token = rootState.auth.token;

        await imgur.uploadImages(token, images)

        router.push('/')
    }
};

const mutations = {
    setImages(state, images) {
        state.images = images
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};