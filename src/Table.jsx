import "./style.css";

const Table = (props) => {
    const { input, deleteData } = props;
    return (
            <tr>
                <td>{input.name}</td>
                <td>{input.lastname}</td>
                <td>{input.position}</td>
                <td><button className="btn-delete" onClick={() => deleteData(input.id)}>delete</button></td>
            </tr>
    )
}

export default Table