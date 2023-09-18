import AsyncStorage from "@react-native-async-storage/async-storage"; 

//npm i @react-native-async-storage/async-storage 
//Definicionesdeconstantes. 
const USERNAME_KEY='LOGIN_username';
const PASSWORD_KEY='LOGIN_password';

export default class UsuarioService{ 
    login = async(userName, password) => { 
        //Obtiene las credenciales almacenadas e intenta loguearse. 
        let isValid;
        try {            
            if(userName == 'mariano' && password == 'caceres'){
                isValid = true;
            }else{
                isValid = false;
            }             
            return isValid; 
        } catch(e){
            return false;
        }
        
    };

    automaticlogin = async() => { 
        //Obtiene las credenciales almacenadas e intenta loguearse.  
        try {
            let usuario = await AsyncStorage.getItem(USERNAME_KEY);
            let contrasena = await AsyncStorage.getItem(PASSWORD_KEY);
            let isValid;
            
            if(usuario == 'mariano' && contrasena == 'caceres'){
                isValid = true;
            }else{
                isValid = false;
            }             
            return isValid; 

        } catch(e){
            return false;
        }
    };

    //Elimina las credenciales almacenadas al cerrar sesión 
    eliminarCredenciales = async() => { 
        try{
            await AsyncStorage.removeItem(USERNAME_KEY); 
            await AsyncStorage.removeItem(PASSWORD_KEY); 
        }catch(e){
            console.log(e);
        }
    }; 

    almacenarCredenciales = async(userName,password) => { 
        //Almacena las credenciales en el asyncStorage
        //(para leerlas al iniciar la próxima vez) 
        try {    
            await AsyncStorage.setItem(USERNAME_KEY, userName);  
            await AsyncStorage.setItem(PASSWORD_KEY, password); 
        } catch(e) {    
            console.log(e);
        }
    }; 

    obtenerCredenciales = async() => { 
        let storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
        let storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
        const returnValue = {'userName':storedUserName, 'password':storedPassword}; 
        return returnValue; 
    }; 
} 

