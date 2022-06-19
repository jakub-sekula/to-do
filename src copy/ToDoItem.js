import Container from './Container'
import Button from './Button'

const ToDoItem = ({text, id, ...props}) => {
    return(
        <Container className="flex gap-4 items-center">
            <Button className='red p-2 rounded-md uppercase text-sm font-medium' text='remove' onClick={() => props.removeButton(id)}/ >
            <span className="text-xl border-2 p-4 w-full rounded-md">{text}</span> 
        </Container>
    )
};

export default ToDoItem;