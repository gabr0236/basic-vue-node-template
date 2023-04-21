import { SomeResource } from "../database/someModel.js"

const createSomeResource = async (name, color, nicknames) => {
    const someResource = new SomeResource({ name, color, nicknames});
    
    await someResource.save();
}

export { 
    createSomeResource
}