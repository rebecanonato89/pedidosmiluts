import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import useCheckBox from '../../hooks/useCheckBox';
import ListComponents from '../ListComponents';
import { complementsOption, productsOptions } from '../../data';

export interface listData {
    request: string,
    complements: Array<string>
}

function FormInsert() {

    const [list, setList] = useState<Array<listData>>([]);
    const { selected, isSelected, onChange, cleanSelected } = useCheckBox([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');


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
        <>
            <header>

            </header>
            <body className="p-3 m-0 border-0 bd-example">

                <form onSubmit={(e: any) => handleSubmit(e)} target="_blank">

                    <input
                        name="name"
                        placeholder='name'
                        onChange={(e) => setName(e.target.value)}
                        value={input.name}
                    >
                    </input>

                    <input
                        name="address"
                        placeholder='address'
                        onChange={(e) => setAddress(e.target.value)}
                        value={input.address}
                    >
                    </input>

                    <label htmlFor="cars">Choose a car:</label>
                    <select name="request" value={input.request} onChange={handleChange}>
                        {productsOptions.map((item, index) => (
                            <option value={item.value}>{item.label}</option>
                        ))}
                    </select>

                    <ul style={{ listStyleType: "none" }}>
                        {complementsOption.map((i) => (
                            <li key={i.value}>
                                <input
                                    id={i.value}
                                    type="checkbox"
                                    value={i.value}
                                    checked={isSelected(i.value)}
                                    onChange={onChange}
                                />
                                <label htmlFor={i.value}> {i.label}</label>
                            </li>
                        ))}
                    </ul>

                    <button>add</button>
                </form>

                {list.length > 0 &&
                    <>
                        <h1>Pedido</h1>
                        <div>
                            <ListComponents list={list} name={name} address={address} />
                        </div>
                    </>
                }

            </body>
        </>
    );
}

export default FormInsert;
