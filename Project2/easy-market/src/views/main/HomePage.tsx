import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {homeAction} from '../../store/actions'
import {RouteComponentProps} from 'react-router'
import {useHistory} from 'react-router'

interface IStateProps {
    state: any
}
interface IDispatchProps {
    getHome: ()=>void
}
interface IOwnProps {

}

const HomePage: React.FC<IStateProps & IDispatchProps & IOwnProps & RouteComponentProps> = props => {
    console.log('props...', props);

    useEffect(()=>{
        props.getHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let history = useHistory();
    

    let goMy = ()=>{
        history.replace('/main/my');
    }

    return <p onClick={goMy}>Home Page</p>;
}

const mapStateToProps = (state: any) => {
    console.log('state...', state);
    return state;
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getHome: ()=>{
            dispatch(homeAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);