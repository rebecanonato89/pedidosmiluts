import { complementsOption, productsOptions } from '../../data';
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
                const aux2 = document.getElementById('sua_div');
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
        <div id="sua_div">
            <h3>Dados do Cliente</h3>
            <p>nome = {props.name}</p>
            <p>endereço = {props.address}</p>

            {
                requests.map((item, index) => {
                    let sum = item.complements.reduce((partialSum, a) => partialSum + a.price, 0);
                    return (
                        <div id="box">
                            <b>Pedido: {item.description} - {item.price}</b>
                            {
                                item.complements.map((comp, index) =>
                                (
                                    <div>
                                        <p>{comp.label} - {comp.price}</p>
                                    </div>
                                ))
                            }
                            <strong>VALOR PEDIDO: {sum + item.price}</strong>
                        </div>
                    )
                })
            }
            <strong>VALOR TOTAL: {totalPrice}</strong>

            <button id="btn" onClick={handlePrint}>Clique para imprimir</button>
        </div>


    )
}

export default ListComponents;