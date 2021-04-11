import { useContext} from 'react';
import AuthContext from '../components/General/AuthContext';

const isAuth = (InnerComponent) => {

    const OuterComponent = (props) => {
        const { isAuthenticated } = useContext(AuthContext);

        if (!isAuthenticated) {
            props.history.push('/login');

            return null;
        }

        return <InnerComponent {...props} />
    }

    return OuterComponent;
};

export default isAuth;