export enum OrderActionTypes {
  ORDER_NEW_REMOVE = "ORDER_NEW_REMOVE",
  ORDER_ACCEPTED = "ORDER_ACCEPTED",
  ORDER_DONE = "ORDER_DONE",
  ORDER_CLOSE = "ORDER_CLOSE",
}

interface mealType {
  id: number;
  name: string;
  adds: commentType[];
  count: number;
}
interface commentType {
  id: number;
  text: string;
}

export interface orderType {
  id: number;
  created_at: string;
  meals: mealType[];
  comments: commentType[];
  total: number;
  payment_type: string;
  delivery_type: string;
  status: string;
}

export interface orderState {
  newOrders: orderType[],
  prepareOrders: orderType[],
  doneOrders: orderType[],
  sentOrders: orderType[],
}

export interface OrderAction {
  type: string,
  payload?: any;
}
