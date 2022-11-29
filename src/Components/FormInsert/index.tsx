import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import ListComponents from '../ListComponents';
import { complements, productsOptions } from '../../data';
import { CheckBox } from '../CheckBox';

export interface listData {
    name: string,
    address: string,
    request: string,
    complements: string,
    //packages: [];
}

function FormInsert() {

    const [list, setList] = useState<listData[]>([]);
    const { selected, isSelected, onChange } = CheckBox([]);


    const [input, handleChange, setInput] = useForm({
        name: '',
        address: '',
        request: '',
        complements: ''
    });

    function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        console.log("handleSubmit", selected);
        input.complements = selected;
        setList([...list, input]);
        setInput({ name: '', address: '', request: '', complements: '' })
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
                        onChange={handleChange}
                        value={input.name}
                    >
                    </input>
                    <input
                        name="address"
                        placeholder='address'
                        onChange={handleChange}
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
                        {complements.map((i) => (
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
                            {list.map((itemDeBox, index) => {
                                return <ListComponents key={index} index={index}
                                    name={itemDeBox.name}
                                    address={itemDeBox.address}
                                    request={itemDeBox.request}
                                    complements={itemDeBox.complements}
                                />
                            })}
                        </div>
                    </>
                }

            </body>
        </>
    );
}

export default FormInsert;
