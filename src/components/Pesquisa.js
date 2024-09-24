function Pesquisa(){
    return (
        <form class="d-flex" role="search">
        <input class="form-control me-2 border-danger" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">
                <i className="bi bi-search fs-3 text-dark"></i> {/* Ícone de lupa */}
        </button>
      </form>
    )
}

export default Pesquisa