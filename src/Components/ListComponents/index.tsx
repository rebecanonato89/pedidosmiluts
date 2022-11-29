


function ListComponents(props: any) {


    return (


        <div id="box">
            <p>nome = {props.name}</p>
            <p>endereço = {props.address}</p>
            <p>request = {props.request}</p>
            <p>complements = {props.complements}</p>
        </div>



    )
}

export default ListComponents;