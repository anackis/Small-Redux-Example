

export const inc = () => ({type: 'INC'});        // Action Creator. Helps not to reapet code {type: 'INC'} every time (DRY).
export const dec = () => ({type: 'DEC'});          
export const rnd = (value) => ({type: 'RND', payload: value});
export const res = () => ({type: 'RES'});