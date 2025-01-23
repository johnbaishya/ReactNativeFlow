/* eslint-disable react/react-in-jsx-scope */
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { ActivityIndicator, Dialog, Portal, Text, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { setAppState } from '../../Redux/storeActions';

const LoadingModal = ()=>{
    const {success,successMessage} = useSelector((state:RootState)=>state.app)
    const {colors} = useTheme();
    const closemodal = ()=>{
            setAppState({success:false,successMessage:""});
        }
    return(
    <Portal>
        <Dialog visible={success} onDismiss={closemodal}>
            <Dialog.Icon icon={"check-circle"} color={colors.primary} size={30}/>
            {/* <Dialog.Title style={{textAlign:"center"}}>Error</Dialog.Title> */}
            <Dialog.Content>
                <Text variant='bodyLarge' style={{textAlign:"center"}}>{successMessage}</Text>
            </Dialog.Content>
        </Dialog>
    </Portal>
    );
};

export default LoadingModal;
