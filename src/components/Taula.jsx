import vehicles from "../data";

export function Taula({vehicles}) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Model</th>
                        <th>Any</th>
                        <th>Rodes</th>
                        <th>Combustible</th>
                        <th>Portes</th>
                        <th>Cilindrada</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, index) => (
                        <tr key={index}>
                            <td>{vehicle.marca}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.anyFabricacio}</td>
                            <td>{vehicle.rodes}</td>
                            <td>{vehicle.tipusCombustible}</td>
                            <td>{vehicle.nombrePortes}</td>
                            <td>{vehicle.cilindrada}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
