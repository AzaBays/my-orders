import { OrderAction, OrderActionTypes, orderState } from '../../types/orderTypes';
import { Dispatch } from 'redux';
import { store } from '../../store/index';

export const removeOrder = (id: number) => {
  return (dispatch: Dispatch<OrderAction>) => {
    dispatch({
      type: OrderActionTypes.ORDER_NEW_REMOVE,
      payload: store.getState().orders.newOrders.filter((item) => item.id !== id )
    })
  }
}

export const acceptOrder = (id: number) => {
  return (dispatch: Dispatch<OrderAction>) => {
    const prepareOrders = store.getState().orders.prepareOrders;
    const acceptedOrder = store.getState().orders.newOrders.find((item) => item.id === id )

    dispatch({
      type: OrderActionTypes.ORDER_ACCEPTED,
      payload: [...prepareOrders, { ...acceptedOrder, status: 'prepare' }]
    })
    dispatch({
      type: OrderActionTypes.ORDER_NEW_REMOVE,
      payload: store.getState().orders.newOrders.filter((item) => item.id !== id )
    })
  }
}

export const doneOrder = (id: number) => {
  return (dispatch: Dispatch<OrderAction>) => {
    const { prepareOrders, doneOrders } = store.getState().orders;
    const preparedOrder = store.getState().orders.prepareOrders.find((item) => item.id === id )


    dispatch({
      type: OrderActionTypes.ORDER_DONE,
      payload: [...doneOrders, { ...preparedOrder, status: 'done' }]
    })
    dispatch({
      type: OrderActionTypes.ORDER_ACCEPTED,
      payload: prepareOrders.filter((item) => item.id !== id )
    })
  }
}

export const closeOrder = (id: number) => {
  return (dispatch: Dispatch<OrderAction>) => {
    const { doneOrders, sentOrders } = store.getState().orders;
    const doneOrder = store.getState().orders.doneOrders.find((item) => item.id === id )

    dispatch({
      type: OrderActionTypes.ORDER_CLOSE,
      payload: [...sentOrders, { ...doneOrder, status: 'sent' }]
    })
    dispatch({
      type: OrderActionTypes.ORDER_DONE,
      payload: doneOrders.filter((item) => item.id !== id )
    })
  }
}

