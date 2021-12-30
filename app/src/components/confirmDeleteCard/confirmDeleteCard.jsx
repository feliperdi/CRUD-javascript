import React, { useContext } from 'react';
import {
    Wrapper,
    Bg,
    Card,
} from './style.js';
import { Context } from '../../App';

const ConfirmDeleteCard = props => {
    const {handleDelete, handleCancelDelete} = props;
    const context = useContext(Context);

    return <Wrapper>
            <Card>
                <h3>Delete item ?</h3>
                <div>
                    <button onClick={() => handleDelete(context)} id='confirmButton'>Confirm</button>
                    <button onClick={handleCancelDelete}>Cancel</button>
                </div>
            </Card>
            <Bg></Bg>
    </Wrapper>
};

export default ConfirmDeleteCard;