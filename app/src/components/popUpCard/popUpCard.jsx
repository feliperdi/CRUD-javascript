import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {Context} from '../../App';
import useForm, { initial_values } from '../../hooks/useForm';
import SpinningLoader from '../spinningLoading';
import delete_icon from '../../icons/delete.svg';
import close_icon from '../../icons/close.svg';
import {
    Wrapper,
    Card,
    LoaderContainer,
    BG,
    Close,
    Icon,
    Input,
    PriceDiv,
    TextArea,
    Label,
    Button,
    Error
} from './style'



const PopUpCard = props => {
    const {handleClose, handleGetCategory, category, handleError, handleItems} = props;
    const context = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [form, onChange, resetForm, defineForm] = useForm(context.data || initial_values);
    
    const [formErrors, setFormErrors] = useState({
        name: null,
        s_price: null,
        b_price: null,
        stock: null,
        description: null
    });

    const createCategory = async () => {
        try {
        await axios.post(`${context.url}/category`, {name: form.category});
        } catch(error) {
        handleError(true);
        }
    };

    const deleteCategory = async () => {
        try {
            setLoading(true);
            const categoryExist = category.find( e => form.category === e.name);
            if(categoryExist){
                await axios.delete(`${context.url}/category`,{data: {id: categoryExist.id, name: categoryExist.name}});
            }
            await handleGetCategory();
            defineForm({
                ...form,
                category: ""
            });
            setLoading(false);
        }catch(error){
            setLoading(false);
            console.log(error.response.data)
        }
    }

    const createItem = async () => {
        try {
        setLoading(true);
        const isNewCategory = category.find( e => e.name === form.category);
        if(!isNewCategory) await createCategory({name: form.category});
        const res = await axios.post(`${context.url}`, {
            name: form.name,
            stock: Number(form.stock),
            b_price: Number(form.b_price),
            s_price: Number(form.s_price),
            category: form.category,
            description: form.description
        });
        await handleItems();
        defineForm(initial_values);
        setLoading(false);
        } catch(error){
            setLoading(false);
            if(error.response) {
                if(error.response.data === 'name already exist') {
                    setFormErrors({
                        ...formErrors,
                        name: true
                    });
                }
                console.log(error.response.data)
            } else {
                handleError(true);
            }
        }
    };

    const editItem = async () => {
        try {
            setLoading(true);
            const isNewCategory = category.find( e => e.name === form.category);
            if(!isNewCategory) await createCategory({name: form.category});
            const res = await axios.put(`${context.url}`, {
                id: context.data.id,
                name: form.name,
                stock: Number(form.stock),
                b_price: Number(form.b_price),
                s_price: Number(form.s_price),
                category: form.category,
                description: form.description
            });
            await handleItems();
            context.setData(null);
            defineForm(initial_values);
            setLoading(false);
            handleClose();
        } catch(error) {
            console.log(error.response.data);
            setLoading(false);
            handleError(true);
        }
    }

    const closeCard = () => {
        context.setData(null);
        handleClose();
    }

    useEffect(() => {
        if(
            form.name !== '' &&
            form.b_price !== '' &&
            form.s_price !== '' &&
            form.stock !== '' &&
            form.category !== ''
        ){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    },[form.name, form.b_price, form.s_price, form.stock, form.category])

    return <Wrapper>
    { loading ?
        <LoaderContainer>
            <SpinningLoader/>
        </LoaderContainer>
           :
       <Card>
           <Close>
                <Icon src={close_icon} onClick={closeCard}/>
            </Close>
            <Label htmlFor='name'>Name</Label>
            <Input 
                id='name'
                value={form.name}
                onChange={ e => onChange(e, () => setFormErrors({...formErrors, name: null}))}
            />
            {formErrors.name && <Error>Name already in use</Error>}
            <PriceDiv>
                <div>
                    <Label htmlFor='b_price'>Buying Price</Label>
                    <Input
                        type='number'
                        id='b_price'
                        className='price'
                        min={0}
                        value={form.b_price}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <Label htmlFor='s_price'>Selling Price</Label>
                    <Input
                        id='s_price'
                        type='number'
                        className='price'
                        min={0}
                        value={form.s_price}
                        onChange={onChange}
                    />
                </div>
            </PriceDiv>
            <PriceDiv>
                <div>
                <Label htmlFor='stock'>Stock</Label>
                <Input
                    id='stock'
                    className='price'
                    type='number'
                    value={form.stock}
                    onChange={onChange}
                />
                </div>
                <div>
                    <Label htmlFor='category'>Category</Label>
                    <div id='categoryInputDiv'>
                        <Input
                            autoComplete='off'
                            className='price'
                            list='category'
                            value={form.category}
                            onChange={onChange}
                            name='category'
                        />
                        <datalist id='category'>
                            {
                                category && category.map( e =>  <option key={e.id} value={e.name}/>)
                            }
                        </datalist>
                        <Icon src={delete_icon} onClick={deleteCategory}/>
                    </div>
                </div>
            </PriceDiv>
            <Label htmlFor='description'>Description</Label>
            <TextArea
                rows={4}
                value={form.description}
                onChange={onChange}
                id='description'
            />
            <Button disabled={disabled} onClick={context.data ? editItem : createItem}>{context.data ? "SAVE" : "CREATE"}</Button>
        </Card>
            }
        <BG></BG>
    </Wrapper>
}

export default PopUpCard;