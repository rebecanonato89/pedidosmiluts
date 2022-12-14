import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import useCheckBox from '../../hooks/useCheckBox';
import ListComponents from '../ListComponents';
import { complementsOption, complementsPromotion, productsOptions } from '../../data';

import { Container, Content, Background, AnimationContainer, Input, Select, CheckBox } from './styles';
import Button from '../../Components/Button';

export interface listData {
    request: string,
    complements: Array<string>
}

function FormInsert() {

    const [list, setList] = useState<Array<listData>>([]);
    const { selected, isSelected, onChange, cleanSelected } = useCheckBox([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [payment, setPayment] = useState('');


    const [input, handleChange, setInput] = useForm({
        request: '1',
        complements: ''
    });

    function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        input.complements = selected;
        setList([...list, input]);
        setInput({ request: '1', complements: '' });
        cleanSelected();
    }

    return (
        <Container>
            <Content>
                <AnimationContainer>

                    <form onSubmit={(e: any) => handleSubmit(e)} target="_blank">

                        <Input>
                            <div className='label'>Dados do cliente:</div>
                            <input
                                name="name"
                                placeholder='nome'
                                onChange={(e) => setName(e.target.value)}
                                value={input.name}
                            >
                            </input>

                            <input
                                name="phone"
                                placeholder='telefone'
                                onChange={(e) => setPhone(e.target.value)}
                                value={input.phone}
                            >
                            </input>

                            <input
                                name="address"
                                placeholder='endere??o'
                                onChange={(e) => setAddress(e.target.value)}
                                value={input.address}
                            >
                            </input>

                            <input
                                name="payment"
                                placeholder='forma de pagamento'
                                onChange={(e) => setPayment(e.target.value)}
                                value={input.payment}
                            >
                            </input>

                        </Input>

                        <Select>

                            <div className='label'>Escolha o produto:</div>
                            <select name="request" value={input.request} onChange={handleChange}>
                                {productsOptions.map((item, index) => (
                                    <option key={index} value={item.value}>{item.label}</option>
                                ))}
                            </select>
                        </Select>

                        <CheckBox>
                            <div className='label'>Escolha os complementos:</div>
                            <div className="input-group">
                                <ul style={{ listStyleType: "none" }}>
                                    {complementsOption.map((i) => (
                                        <li key={i.value}>
                                            <input
                                                id={i.value}
                                                type="checkbox"
                                                value={i.value}
                                                checked={isSelected(i.value)}
                                                onChange={onChange}
                                                disabled={complementsPromotion.includes(input.request) && !i.isPromotion}
                                            />
                                            <label htmlFor={i.value}>&nbsp;{i.label}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CheckBox>

                        <Button type="submit">Gerar Pedido</Button>
                    </form>
                </AnimationContainer>

            </Content>



            <Background>
                {list.length === 0 &&
                    <div className='aviso'>Nenhum pedido realizado no momento!</div>
                }
                {list.length > 0 &&
                    <ListComponents list={list} name={name} phone={phone} address={address} payment={payment} />
                }
            </Background>

        </Container>
    );
}

export default FormInsert;
