import {
  OrderAction,
  OrderActionTypes,
  orderState,
  orderType,
} from "../../types/orderTypes";

const initialState: orderState = {
  newOrders: [
    {
      id: 321524,
      created_at: "2023-11-01T11:57:21 -05:00",
      meals: [
        {
          id: 0,
          name: "Лаваш мясной Standart острый",
          adds: [
            {
              id: 0,
              text: "Без лука",
            },
            {
              id: 2,
              text: "Острый",
            },
            {
              id: 3,
              text: "С сыром",
            },
          ],
          count: 1,
        },
      ],
      comments: [
        {
          id: 1,
          text: "Сделайте вкусно пжл",
        },
      ],
      total: 282177,
      payment_type: "payme",
      delivery_type: "courier",
      status: "new",
    },
    {
      id: 321797,
      created_at: "2023-11-01T11:57:21 -05:00",
      meals: [
        {
          id: 0,
          name: "Лаваш мясной Standart острый",
          adds: [
            {
              id: 0,
              text: "Без лука",
            },
          ],
          count: 3,
        },
        {
          id: 1,
          name: "Big Gamburger",
          adds: [
            {
              id: 0,
              text: "Без лука",
            },
            {
              id: 1,
              text: "Острый",
            },
          ],
          count: 1,
        },
        {
          id: 2,
          name: "Гамбургер",
          adds: [
            {
              id: 0,
              text: "С сыром",
            },
          ],
          count: 3,
        },
      ],
      comments: [
        {
          id: 0,
          text: "Я очень голодный",
        },
      ],
      total: 216245,
      payment_type: "card",
      delivery_type: "courier",
      status: "new",
    },
    {
      id: 321919,
      created_at: "2023-11-01T11:57:21 -05:00",
      meals: [
        {
          id: 0,
          name: "Гамбургер",
          adds: [
            {
              id: 0,
              text: "Без лука",
            },
            {
              id: 1,
              text: "Острый",
            },
          ],
          count: 3,
        },
        {
          id: 1,
          name: "Гамбургер",
          adds: [
            {
              id: 1,
              text: "С сыром",
            },
            {
              id: 2,
              text: "Без лука",
            },
          ],
          count: 2,
        },
      ],
      comments: [
        {
          id: 1,
          text: "Сделайте вкусно пжл",
        },
        {
          id: 2,
          text: "Я очень голодный",
        },
        {
          id: 3,
          text: "Мясо не жалейте)))",
        },
      ],
      total: 272040,
      payment_type: "cash",
      delivery_type: "courier",
      status: "new",
    },
    {
      id: 321072,
      created_at: "2023-11-01T11:57:21 -05:00",
      meals: [
        {
          id: 0,
          name: "Гамбургер",
          adds: [
            {
              id: 0,
              text: "Без лука",
            },
          ],
          count: 2,
        },
        {
          id: 1,
          name: "Гамбургер",
          adds: [
            {
              id: 2,
              text: "Острый",
            },
            {
              id: 3,
              text: "С сыром",
            },
          ],
          count: 1,
        },
        {
          id: 2,
          name: "Лаваш мясной Standart острый",
          adds: [
            {
              id: 0,
              text: "С сыром",
            },
          ],
          count: 1,
        },
        {
          id: 3,
          name: "Big Gamburger",
          adds: [
            {
              id: 1,
              text: "С сыром",
            },
            {
              id: 2,
              text: "Без лука",
            },
            {
              id: 3,
              text: "Острый",
            },
          ],
          count: 4,
        },
      ],
      comments: [
        {
          id: 0,
          text: "Сделайте вкусно пжл",
        },
      ],
      total: 207499,
      payment_type: "payme",
      delivery_type: "courier",
      status: "new",
    },
    {
      id: 321744,
      created_at: "2023-11-01T11:57:21 -05:00",
      meals: [
        {
          id: 0,
          name: "Big Gamburger",
          adds: [
            {
              id: 2,
              text: "Без лука",
            },
            {
              id: 3,
              text: "Острый",
            },
          ],
          count: 1,
        },
        {
          id: 1,
          name: "Big Gamburger",
          adds: [
            {
              id: 0,
              text: "С сыром",
            },
            {
              id: 1,
              text: "С сыром",
            },
          ],
          count: 4,
        },
        {
          id: 2,
          name: "Big Gamburger",
          adds: [
            {
              id: 0,
              text: "Без лука",
            },
            {
              id: 1,
              text: "Острый",
            },
          ],
          count: 4,
        },
        {
          id: 3,
          name: "Лаваш мясной Standart острый",
          adds: [
            {
              id: 0,
              text: "Без лука",
            },
            {
              id: 1,
              text: "С сыром",
            },
          ],
          count: 2,
        },
      ],
      comments: [
        {
          id: 1,
          text: "Мясо не жалейте)))",
        },
        {
          id: 2,
          text: "Я очень голодный",
        },
        {
          id: 3,
          text: "Сделайте вкусно пжл",
        },
      ],
      total: 275359,
      payment_type: "click",
      delivery_type: "delivery",
      status: "new",
    },
    {
      id: 321776,
      created_at: "2023-11-01T11:57:21 -05:00",
      meals: [
        {
          id: 0,
          name: "Гамбургер",
          adds: [],
          count: 2,
        },
        {
          id: 1,
          name: "Big Gamburger",
          adds: [
            {
              id: 0,
              text: "Острый",
            },
          ],
          count: 1,
        },
        {
          id: 2,
          name: "Big Gamburger",
          adds: [],
          count: 1,
        },
      ],
      comments: [
        {
          id: 0,
          text: "Мясо не жалейте)))",
        },
      ],
      total: 278715,
      payment_type: "apelsin",
      delivery_type: "delivery",
      status: "new",
    },
    {
      id: 321621,
      created_at: "2023-11-01T11:57:21 -05:00",
      meals: [
        {
          id: 0,
          name: "Лаваш мясной Standart острый",
          adds: [
            {
              id: 2,
              text: "С сыром",
            },
            {
              id: 3,
              text: "Без лука",
            },
          ],
          count: 3,
        },
        {
          id: 1,
          name: "Лаваш мясной Standart острый",
          adds: [
            {
              id: 1,
              text: "Острый",
            },
          ],
          count: 1,
        },
        {
          id: 2,
          name: "Гамбургер",
          adds: [
            {
              id: 2,
              text: "Без лука",
            },
            {
              id: 3,
              text: "Острый",
            },
          ],
          count: 4,
        },
        {
          id: 3,
          name: "Гамбургер",
          adds: [
            {
              id: 0,
              text: "С сыром",
            },
          ],
          count: 2,
        },
      ],
      comments: [
        {
          id: 0,
          text: "Мясо не жалейте)))",
        },
      ],
      total: 277872,
      payment_type: "payme",
      delivery_type: "delivery",
      status: "new",
    },
  ],
  prepareOrders: [
    {
      id: 321641,
      created_at: "2023-11-01T11:56:56 -05:00",
      meals: [
        {
          id: 0,
          name: "Пепси 0,5",
          adds: [],
          count: 2,
        },
        {
          id: 1,
          name: "Гамбургер",
          adds: [
            {
              id: 0,
              text: "Острый",
            },
          ],
          count: 2,
        },
        {
          id: 2,
          name: "Big Gamburger",
          adds: [
            {
              id: 1,
              text: "Без лука",
            },
          ],
          count: 2,
        },
      ],
      comments: [
        {
          id: 0,
          text: "Сделайте вкусно пжл",
        },
        {
          id: 2,
          text: "Мясо не жалейте)))",
        },
      ],
      total: 280089,
      payment_type: "click",
      delivery_type: "delivery",
      status: "prepare",
    },
    {
      id: 321526,
      created_at: "2023-11-01T11:56:56 -05:00",
      meals: [
        {
          id: 0,
          name: "Гамбургер",
          adds: [],
          count: 2,
        },
        {
          id: 1,
          name: "Big Gamburger",
          adds: [
            {
              id: 0,
              text: "Острый",
            },
          ],
          count: 3,
        },
        {
          id: 2,
          name: "Big Gamburger",
          adds: [],
          count: 4,
        },
        {
          id: 3,
          name: "Гамбургер",
          adds: [
            {
              id: 0,
              text: "Без лука",
            },
          ],
          count: 2,
        },
      ],
      comments: [
        {
          id: 2,
          text: "Я очень голодный",
        },
      ],
      total: 236179,
      payment_type: "payme",
      delivery_type: "courier",
      status: "prepare",
    },
    {
      id: 321367,
      created_at: "2023-11-01T11:56:56 -05:00",
      meals: [
        {
          id: 0,
          name: "Гамбургер",
          adds: [],
          count: 3,
        },
        {
          id: 1,
          name: "Пепси 0,5",
          adds: [
            {
              id: 3,
              text: "С сыром",
            },
          ],
          count: 2,
        },
        {
          id: 2,
          name: "Big Gamburger",
          adds: [],
          count: 3,
        },
        {
          id: 3,
          name: "Лаваш мясной Standart острый",
          adds: [
            {
              id: 0,
              text: "Острый",
            },
          ],
          count: 2,
        },
      ],
      comments: [],
      total: 250079,
      payment_type: "cash",
      delivery_type: "store",
      status: "prepare",
    },
    {
      id: 321423,
      created_at: "2023-11-01T11:56:56 -05:00",
      meals: [
        {
          id: 0,
          name: "Гамбургер",
          adds: [],
          count: 3,
        },
        {
          id: 1,
          name: "Гамбургер",
          adds: [],
          count: 2,
        },
        {
          id: 2,
          name: "Пепси 0,5",
          adds: [],
          count: 3,
        },
        {
          id: 3,
          name: "Пепси 0,5",
          adds: [
            {
              id: 0,
              text: "Острый",
            },
          ],
          count: 4,
        },
      ],
      comments: [
        {
          id: 2,
          text: "Сделайте вкусно пжл",
        },
      ],
      total: 264741,
      payment_type: "click",
      delivery_type: "store",
      status: "prepare",
    },
    {
      id: 321443,
      created_at: "2023-11-01T11:56:56 -05:00",
      meals: [
        {
          id: 0,
          name: "Гамбургер",
          adds: [
            {
              id: 0,
              text: "Острый",
            },
          ],
          count: 3,
        },
        {
          id: 1,
          name: "Big Gamburger",
          adds: [],
          count: 4,
        },
      ],
      comments: [
        {
          id: 0,
          text: "Мясо не жалейте)))",
        },
      ],
      total: 250442,
      payment_type: "cash",
      delivery_type: "store",
      status: "prepare",
    },
  ],
  doneOrders: [
    {
      id: 321099,
      created_at: "2023-11-01T11:56:26 -05:00",
      meals: [
        {
          id: 0,
          name: "Пепси 0,5",
          adds: [],
          count: 1,
        },
        {
          id: 1,
          name: "Лаваш мясной Standart острый",
          adds: [
            {
              id: 0,
              text: "Острый",
            },
            {
              id: 1,
              text: "Без лука",
            },
          ],
          count: 2,
        },
        {
          id: 2,
          name: "Big Gamburger",
          adds: [],
          count: 4,
        },
        {
          id: 3,
          name: "Лаваш мясной Standart острый",
          adds: [],
          count: 2,
        },
      ],
      comments: [],
      total: 221627,
      payment_type: "apelsin",
      delivery_type: "store",
      status: "done",
    },
    {
      id: 321594,
      created_at: "2023-11-01T11:56:26 -05:00",
      meals: [
        {
          id: 0,
          name: "Пепси 0,5",
          adds: [],
          count: 1,
        },
      ],
      comments: [],
      total: 260239,
      payment_type: "apelsin",
      delivery_type: "delivery",
      status: "done",
    },
    {
      id: 321270,
      created_at: "2023-11-01T11:56:26 -05:00",
      meals: [
        {
          id: 0,
          name: "Лаваш мясной Standart острый",
          adds: [],
          count: 2,
        },
      ],
      comments: [
        {
          id: 0,
          text: "Мясо не жалейте)))",
        },
        {
          id: 1,
          text: "Сделайте вкусно пжл",
        },
      ],
      total: 224329,
      payment_type: "payme",
      delivery_type: "delivery",
      status: "done",
    },
  ],
  sentOrders: [
    {
      id: 321688,
      created_at: "2023-11-01T11:55:41 -05:00",
      meals: [
        {
          id: 0,
          name: "Пепси 0,5",
          adds: [],
          count: 4,
        },
      ],
      comments: [],
      total: 278124,
      payment_type: "apelsin",
      delivery_type: "store",
      status: "sent",
    },
    {
      id: 321711,
      created_at: "2023-11-01T11:55:41 -05:00",
      meals: [
        {
          id: 0,
          name: "Big Gamburger",
          adds: [],
          count: 1,
        },
        {
          id: 1,
          name: "Big Gamburger",
          adds: [],
          count: 1,
        },
        {
          id: 2,
          name: "Пепси 0,5",
          adds: [],
          count: 4,
        },
      ],
      comments: [],
      total: 280431,
      payment_type: "card",
      delivery_type: "courier",
      status: "sent",
    },
  ],
};

export const orderReducer = (
  state = initialState,
  action: OrderAction
): orderState => {
  switch (action.type) {
    case OrderActionTypes.ORDER_NEW_REMOVE:
      return {
        ...state,
        newOrders: action.payload,
      };
    case OrderActionTypes.ORDER_ACCEPTED:
      return {
        ...state,
        prepareOrders: action.payload,
      };
    case OrderActionTypes.ORDER_DONE:
      return {
        ...state,
        doneOrders: action.payload,
      };
    case OrderActionTypes.ORDER_CLOSE:
      return {
        ...state,
        sentOrders: action.payload,
      };
    default:
      return state;
  }
};
