import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux" 
import { chooseName, chooseBody_Part, chooseEquipment, chooseSets, chooseReps } from "../redux/slices/RootSlice" 

interface ContactFormProps {
    id?: string[];
    onClose: () => void
}

const ContactForm = ( props: ContactFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.first } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000);
            event.target.reset()
        } else {
            dispatch(chooseName(data.name));
            dispatch(chooseBody_Part(data.body_part));
            dispatch(chooseEquipment(data.equipment));
            dispatch(chooseSets(data.sets));
            dispatch(chooseReps(data.reps));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 1000);
            event.target.reset()

            props.onClose();
        }
    }

    return (
        <div id="modalform">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name='name' placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="body_part">Body Part</label>
                    <Input {...register('body_part')} name='body_part' placeholder="Body Part" />
                </div>
                <div>
                    <label htmlFor="equipment">Equipment</label>
                    <Input {...register('equipment')} name='equipment' placeholder="Equipment" />
                </div>
                <div>
                    <label htmlFor="sets">Sets</label>
                    <Input {...register('sets')} name='sets' placeholder="Sets" />
                </div>
                <div>
                    <label htmlFor="reps">Reps</label>
                    <Input {...register('reps')} name='reps' placeholder="Reps" />
                </div>
                <div className="flex p-1">
                    <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm