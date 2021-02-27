import {heroes} from '../data/heroes';

export const getHeroesByPublisher = (id) =>{

    const validPublisher =['DC Comics', 'Marvel Comics'];

    return heroes.find(hero=>hero.id===id);
}
