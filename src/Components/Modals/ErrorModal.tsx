/* eslint-disable react/react-in-jsx-scope */
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { setAppState } from '../../Utils/storeFunctions';

const ErrorModal = ()=>{
    const closemodal = ()=>{
        setAppState({error:false,errorMessage:""});
    }
    const {error,errorMessage} = useSelector((state:RootState)=>state.app)
    return(
        <View style={{backgroundColor:'blue'}}>
            <Modal isVisible={error} hasBackdrop onBackdropPress={closemodal} >
                <View style={{justifyContent:'center', backgroundColor:'white', paddingVertical:10}}>
                <Text>{errorMessage}</Text>
                </View>
            </Modal>
        </View>
    );
};

export default ErrorModal;
