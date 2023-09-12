import AsyncStorage from "@react-native-async-storage/async-storage"; 

//npmi@react-native-async-storage/async-storage 
//Definicionesdeconstantes. 
const USERNAME_KEY='LOGIN_username';
const PASSWORD_KEY='LOGIN_password';

class UsuarioService{ 
    static login = async(userName, password) => { 
        //Obtiene las credenciales almacenadas e intenta loguearse. 
        try {
            let usuario = await AsyncStorage.getItem(USERNAME_KEY);
            let contrasena = await AsyncStorage.getItem(PASSWORD_KEY);
            
            let isValid=false; 
            return isValid; 
        } catch(e){
            console.log(e);
        }
        
    } 
    static automaticlogin = async() => { 
        //Obtiene la scredenciales almacenadas e intenta loguearse.  
        let isValid=false; 
        return isValid; 
    }     
    //Elimina las credenciales almacenadas al cerrar sesión 
    static eliminarCredenciales = async() => { 

    }; 
    static almacenarCredenciales = async(userName,password) => { 
        //Almacena las credenciales en el asyncStorage
        //(para leerlas al iniciar la próxima vez) 
        try {    
            await AsyncStorage.setItem(USERNAME_KEY, userName);  
            await AsyncStorage.setItem(PASSWORD_KEY, password); 
        } catch(e) {    
            console.log(e);
        }
    }; 
    static obtenerCredenciales = async() => { 
        const returnValue={'userName':storedUserName,'password':storedPassword}; 
        return returnValue; 
    }; 
} 

export default UsuarioService;
