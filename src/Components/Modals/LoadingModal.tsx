/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const SuccessModal = ()=>{
    const {loading} = useSelector((state:RootState)=>state.app)
    return(
        <View style={{backgroundColor:'blue'}}>
            <Modal isVisible={loading}>
                <View style={{justifyContent:'center', backgroundColor:'white', paddingVertical:10}}>
                <ActivityIndicator size={40}/>
                </View>
            </Modal>
        </View>
    );
};

export default SuccessModal;
