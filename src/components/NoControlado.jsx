const NoControlado = () => {

    const handleSubmit = (capturaEvento) => {
        capturaEvento.preventDefault()
        
        console.log("Capturando submit")
    }

    

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Ingrese su texto" 
            className="form-control mb-3" name="title" defaultValue="Asunto: "/>
            <textarea className="form-control mb-2" 
            placeholder="Ingrese la descripcion" name="description"></textarea>
            <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className="btn btn-primary" type="submit">Procesar</button>
        </form>
    )
}

export default NoControlado;