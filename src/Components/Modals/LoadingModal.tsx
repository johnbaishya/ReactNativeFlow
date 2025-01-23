import { ActivityIndicator, Dialog, Portal } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const SuccessModal = ()=>{
    const {loading} = useSelector((state:RootState)=>state.app);
    return(
        <Portal>
            <Dialog visible={loading}>
                <Dialog.Content>
                    <ActivityIndicator size={40}/>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};

export default SuccessModal;
