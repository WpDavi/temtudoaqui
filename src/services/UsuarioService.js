import axios from "axios";

class UsuarioService{

    async cadadastrar(data) {
        return({
            url: "http://192.168.0.61:3000/cadastrar",
            method:"POST",
            timeout: 500,
            data: data,
            headers: {
                Accept: 'application/json'
                
            }
        }).then((reponse) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
        
    }
}
