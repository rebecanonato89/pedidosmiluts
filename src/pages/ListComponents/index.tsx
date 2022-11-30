import { complementsOption, productsOptions } from '../../data';
import { Container, Content, List } from './styles';
import Button from '../../Components/Button';

interface Data {
    name: string,
    address: string,
    list: Array<{
        request: string,
        complements: Array<string>
    }>
}

interface Complements {
    value: string,
    label: string,
    price: number,
}

interface Product {
    value: string;
    label: string;
    description: string;
    tam: number;
    price: number;
    complements: Array<Complements>

}

const ListComponents: React.FC<Data> = (props) => {

    const date = new Date().toLocaleString();

    const requests = props.list.map(obj => {
        let newObj: Product = {} as Product;

        productsOptions.forEach(element => {
            if (element.value === obj.request) {

                const auxComplements = complementsOption.filter(i => {
                    return obj.complements.includes(i.value)
                });

                newObj = {
                    ...element,
                    complements: auxComplements
                }
            }
        });

        return newObj
    });

    const totalPrice = requests.map((item, index) => {
        const sum = item.complements.reduce((partialSum, a) => partialSum + a.price, 0);
        return sum + item.price;
    }
    ).reduce((partialSum, a) => partialSum + a, 0);


    const handlePrint = () => {

        const aux = document.getElementById('btn');

        if (aux != null) {
            aux.onclick = function () {
                const aux2 = document.getElementById('printDiv');
                if (aux2 != null) {
                    const content = aux2.innerHTML,
                        print = window.open('about:blank');

                    print?.document.write(content);
                    print?.window.print();
                    print?.window.close();
                };
            }
        }
    }


    return (
        <Container id="printDiv">
            <Content>
                <div className='client'>
                    <p>{date}</p>
                    <h1>Dados do Cliente</h1>
                    <p><b>Nome:</b> {props.name}</p>
                    <p><b>Endereço:</b> {props.address}</p>
                    <hr />
                </div>
                <List>
                    {
                        requests.map((item, index) => {
                            let sum = item.complements.reduce((partialSum, a) => partialSum + a.price, 0);
                            return (
                                <div id="box">
                                    <div className='request'>
                                        <strong>{item.description}</strong>&nbsp;&nbsp;&nbsp;
                                        <i>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</i>
                                    </div>

                                    {item.complements.length > 0 &&
                                        <i>&nbsp;&nbsp;Complementos:</i>
                                    }
                                    {item.complements.length === 0 &&
                                        <i>&nbsp;&nbsp;Sem complementos</i>
                                    }
                                    {
                                        item.complements.map((comp, index) =>
                                        (
                                            <div className='complement'>
                                                &nbsp;&nbsp;&nbsp;
                                                <strong> {comp.label} </strong>&nbsp;&nbsp;&nbsp;
                                                <i>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(comp.price)}</i>
                                            </div>
                                        ))
                                    }
                                    <div className='valueRequest'>
                                        <br />
                                        <strong>VALOR PEDIDO:</strong>&nbsp;&nbsp;&nbsp;
                                        <i>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sum + item.price)}</i>
                                    </div>
                                    <hr className='trace'></hr>
                                </div>
                            )
                        })
                    }

                    <div className='valueTotal'>
                        <br /><br />
                        <strong>VALOR TOTAL:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <i><b>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</b></i>
                        <br /><br /><br />
                    </div>
                </List>

                <Button id="btn" type="submit" onClick={handlePrint}>Clique para imprimir</Button>
            </Content>
        </Container>


    )
}

export default ListComponents;