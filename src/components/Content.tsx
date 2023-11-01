import React from "react";
import { OrderCard } from "./OrderCard";
import { useTypedSelector } from "../hooks/useTypedSelector";

export function Content() {
  const { newOrders, prepareOrders, doneOrders, sentOrders } = useTypedSelector(
    (state) => state.orders
  );

  return (
    <div className="content overflow-hidden">
      <div className="content-header">
        <div className="content-header-items">
          <label className="content-header-search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Поиск по ID" />
          </label>
        </div>
        <div className="d-flex align-items-center">
          <div className="content-header-items mr-2">
            <i className="fas fa-clipboard-list text-primary text-18"></i>
            <span className="mx-2 text-medium">Всего: 115</span>
            <i className="fas fa-angle-down text-primary text-18"></i>
          </div>
          <div className="content-header-items">
            <i className="far fa-clock text-gray-primary text-18 mr-2"></i>
            <span className=" text-medium">45:08</span>
          </div>
        </div>
      </div>
      <div className="content-body">
        <div className="content-body-column overflow overflow-y-auto overflow-scrollbar-none">
          <div className="content-body-column-header bg-primary">Новый ({newOrders.length})</div>
          <div className="content-body-column-body">
            {newOrders.length ? newOrders.map((item) => (
              <OrderCard order={item} key={item.id}/>
            )) : (<div className="p-2 text-bold text-align-center bg-white radius-5">Заказов нет</div>)}
          </div>
        </div>
        <div className="content-body-column overflow overflow-y-auto overflow-scrollbar-none">
          <div className="content-body-column-header bg-yellow">
            Заготовка ({prepareOrders.length})
          </div>
          <div className="content-body-column-body">
            {prepareOrders.length ? prepareOrders.map((item) => (
                <OrderCard order={item} key={item.id}/>
            )) : (<div className="p-2 text-bold text-align-center bg-white radius-5">Заказов нет</div>)}
          </div>
        </div>
        <div className="content-body-column overflow overflow-y-auto overflow-scrollbar-none">
          <div className="content-body-column-header bg-green">Готов ({ doneOrders.length })</div>
          <div className="content-body-column-body">
            {doneOrders.length ? doneOrders.map((item) => (
                <OrderCard order={item} key={item.id}/>
            )) : (<div className="p-2 text-bold text-align-center bg-white radius-5">Заказов нет</div>)}
          </div>
        </div>
        <div className="content-body-column overflow overflow-y-auto overflow-scrollbar-none">
          <div className="content-body-column-header bg-green-secondary">
            Курьер в пути ({sentOrders.length})
          </div>
          <div className="content-body-column-body">
            {sentOrders.length ? sentOrders.map((item) => (
                <OrderCard order={item} key={item.id}/>
            )) : (<div className="p-2 text-bold text-align-center bg-white radius-5">Заказов нет</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
