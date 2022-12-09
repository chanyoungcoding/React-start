import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss'

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(
        x=> {
            setValue(x.target.value);
        },
        []
    );

    const onSubmit = useCallback(
        x => {
        onInsert(value);
        setValue('');
        x.preventDefault();
        }
        ,[onInsert,value]
    );

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요.'
            value={value}
            onChange={onChange}
            />
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;