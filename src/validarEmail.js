
class validarEmail {
    isValidaEmail (email){

        const re =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(String(email).toLowerCase());
    }
}

mudule.exports = new validarEmail();