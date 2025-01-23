import { Dialog, Portal, Text, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { setAppState } from '../../Redux/storeActions';

const ErrorModal = ()=>{
    const closemodal = ()=>{
        setAppState({error:false,errorMessage:""});
    };

    const {error,errorMessage} = useSelector((state:RootState)=>state.app);
    const {colors} = useTheme();
    return(
        // <View style={{backgroundColor:'blue'}}>
        //     <Modal isVisible={error} hasBackdrop onBackdropPress={closemodal} >
        //         <View style={{justifyContent:'center', backgroundColor:'white', paddingVertical:10}}>
        //         <Text>{errorMessage}</Text>
        //         </View>
        //     </Modal>
        // </View>
        <Portal>
            <Dialog visible={error} onDismiss={closemodal}>
                <Dialog.Icon icon={"alert"} color={colors.error} size={30}/>
                {/* <Dialog.Title style={{textAlign:"center"}}>Error</Dialog.Title> */}
                <Dialog.Content>
                    <Text variant="bodyLarge" style={{textAlign:"center"}}>{errorMessage} *</Text>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};

export default ErrorModal;
