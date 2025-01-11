/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { setAppState } from '../../Utils/storeFunctions';

const LoadingModal = ()=>{
    const {success,successMessage} = useSelector((state:RootState)=>state.app)
    const closemodal = ()=>{
            setAppState({success:false,successMessage:""});
        }
    return(
        <View style={{backgroundColor:'blue'}}>
            <Modal isVisible={success} hasBackdrop onBackButtonPress={closemodal}>
                <View style={{justifyContent:'center', backgroundColor:'white', paddingVertical:10}}>
                <Text>{successMessage}</Text>
                </View>
            </Modal>
        </View>
    );
};

export default LoadingModal;
