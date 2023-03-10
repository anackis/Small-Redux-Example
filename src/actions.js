

export const inc = () => ({type: 'INC'});        // Action Creator. Helps not to reapet code {type: 'INC'} every time (DRY).
export const dec = () => ({type: 'DEC'});
export const res = () => ({type: 'RES'});
export const rnd = () => ({type: 'RND', payload: Math.floor(Math.random() *10) +2});