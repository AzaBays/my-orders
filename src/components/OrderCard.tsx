// @ts-ignore
import Payme from "../assets/images/payme.png";
// @ts-ignore
import Click from "../assets/images/click.png";
// @ts-ignore
import Apelsin from "../assets/images/apelsin.png";
import { orderType } from "../types/orderTypes";
import { useActions } from "../hooks/useActions";

export function OrderCard(props: { order: orderType }) {
  const { acceptOrder, removeOrder, doneOrder, closeOrder } = useActions();

  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="text-18 text-bold lh-24">ID: {props.order.id}</div>
            <i className="fas fa-info-circle ml-1 text-gray-primary"></i>
          </div>
          <div className="d-flex align-items-center">
            <div className="text-12 text-medium lh-22 text-gray-primary">
              {props.order.total.toLocaleString()} сум
            </div>
            {props.order.payment_type === "payme" ? (
              <img className=" ml-1" src={Payme} alt="" />
            ) : props.order.payment_type === "click" ? (
              <img className=" ml-1" src={Click} alt="" />
            ) : props.order.payment_type === "apelsin" ? (
              <img className=" ml-1" src={Apelsin} alt="" />
            ) : props.order.payment_type === "cash" ? (
              <i className="fas fa-money-bill text-gray-primary ml-1"></i>
            ) : props.order.payment_type === "card" ? (
              <i className="fas fa-money-check text-gray-primary ml-1"></i>
            ) : null}
            {props.order.delivery_type === "store" ? (
              <i className="fas fa-store-alt text-gray-primary ml-1"></i>
            ) : props.order.delivery_type === "courier" ? (
              <i className="fas fa-walking text-gray-primary ml-1"></i>
            ) : props.order.delivery_type === "delivery" ? (
              <i className="fas fa-car text-gray-primary ml-1"></i>
            ) : null}
          </div>
        </div>
      </div>
      <div className="card-body">
        {props.order.meals.map((item) => (
          <div className="card-body-row" key={item.id}>
            <div className="card-body-row-title">{item.count} x</div>
            <div>
              <div className="card-body-row-title">{item.name}</div>
              <ul>
                {item.adds.map((add) => (
                  <li key={add.id}>{add.text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-end">
          <div className="d-flex align-items-center text-gray-primary">
            <i className="fas fa-clock mr-1"></i>
            <span className="text-12 text-medium">15:22</span>
          </div>
        </div>
      </div>
      {props.order.status === "new" ? (
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <div
              className="btn border-all-1 border-gray-lighter d-flex align-items-center justify-content-center text-red text-medium flex-grow-1 mr-1"
              onClick={() => removeOrder(props.order.id)}
            >
              <i className="fas fa-times mr-1"></i>
              <span>Отменить</span>
            </div>
            <div
              className="btn btn-primary d-flex align-items-center justify-content-center text-white text-medium flex-grow-1 ml-1"
              onClick={() => acceptOrder(props.order.id)}
            >
              <i className="fas fa-check mr-1"></i>
              <span>Принять</span>
            </div>
          </div>
        </div>
      ) : props.order.status === "prepare" || props.order.status === "done" ? (
        <div className="card-footer">
          {props.order.comments.length ? (
            <details className="mb-1 pb-2">
              <summary>
                <div>Коментарии({props.order.comments.length})</div>
                <i className="fas fa-angle-down"></i>
              </summary>
              <ul className="text-gray-light">
                {props.order.comments.map((comment) => (
                  <li className="py-1" key={comment.id}>
                    {comment.text}
                  </li>
                ))}
              </ul>
            </details>
          ) : null}
          <div className="d-flex justify-content-between">
            <div className="btn border-all-1 border-primary d-flex align-items-center justify-content-center text-primary text-medium flex-grow-1 mr-1"
            onClick={() => props.order.status === "prepare" ? doneOrder(props.order.id) : props.order.status === "done" ? closeOrder(props.order.id) : null}
            >
              {props.order.status === "prepare" ? (
                <i className="fas fa-check mr-1"></i>
              ) : null}
              <span>
                {props.order.status === "prepare" ? "Готово" : "Завершить"}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
