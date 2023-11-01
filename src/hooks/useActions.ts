import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OrderActionCreators from '../store/action-creators/orders'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(OrderActionCreators, dispatch)
}
