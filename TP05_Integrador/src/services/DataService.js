import AsyncStorage from "@react-native-async-storage/async-storage"; 

//npm i @react-native-async-storage/async-storage 
//Definicionesdeconstantes. 
const TELEFONO_KEY='telefono';
const VIDEO_KEY='video';
const MUSICA_KEY='musica';
const BACKGROUND_KEY='background';

export default class DataService{ 
    //Elimina las credenciales almacenadas al cerrar sesión 
    eliminarDatos = async() => { 
        try{
            await AsyncStorage.removeItem(TELEFONO_KEY); 
            await AsyncStorage.removeItem(VIDEO_KEY); 
            await AsyncStorage.removeItem(MUSICA_KEY); 
        }catch(e){
            console.log(e);
        }
    }; 

    almacenarDatos = async(telefono, video, musica) => { 
        //Almacena las credenciales en el asyncStorage
        try {    
            await AsyncStorage.setItem(TELEFONO_KEY, telefono);  
            await AsyncStorage.setItem(VIDEO_KEY, video); 
            await AsyncStorage.setItem(MUSICA_KEY, musica); 
            return true;
        } catch(e) {    
            console.log(e);
            return false;
        }
    }; 

    guardarBackground = async(background) => { 
        //Almacena las credenciales en el asyncStorage
        try {    
            await AsyncStorage.setItem(BACKGROUND_KEY, background);  
            return true;
        } catch(e) {    
            console.log(e);
            return false;
        }
    }; 

    obtenerBackground = async() => { 
        let storedBackground = await AsyncStorage.getItem(BACKGROUND_KEY);
        const returnValue = storedBackground; 
        return returnValue; 
    }; 

    obtenerDatos = async() => { 
        let storedTelefono = await AsyncStorage.getItem(TELEFONO_KEY);
        let storedVideo = await AsyncStorage.getItem(VIDEO_KEY);
        let storedMusica = await AsyncStorage.getItem(MUSICA_KEY);
        const returnValue = {'telefono':storedTelefono, 'video':storedVideo, 'musica':storedMusica}; 
        return returnValue; 
    }; 
} 

