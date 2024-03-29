import { phaseModel } from '../models/phase.js';

const phaseValidate = {
    phaseId: async(id) => {
        const phase = await phaseModel.find({_id: id});

        if(phase.length == 0) {
            throw new Error('params id no existe en la base de datos');
        }
    },

    phaseActivity: async(activity, { req }) => {
        const { id } = req.params;
        // console.log(activity, req);

        const phase = await phaseModel.find({_id: id});

        const process = phase[0].process

        let existActivity = false;

        for(let position = 0; position < process.length; position++) {
            if(process[position]._id == activity) {
                existActivity = true;
            }
        }

        if(existActivity == false) {
            throw new Error('params idActivity no existe en process');
        }
    },
}

export{
    phaseValidate
}