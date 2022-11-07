import React, { useState } from 'react';
    const Formulario = () =>{
    const [search, setSearch] = useState(" ");

    return(
    <>

        <form>
            NOMBRE<input type = "text" name="search"  autoComplete='off'  onChange= {e=>setSearch(e.target.value)}></input>
            <button type="submit">Enviar</button>
            <h2> {search}</h2>   

        </form>
        
    </>  

    );
}

export default Formulario;

