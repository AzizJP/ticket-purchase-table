import { memo } from "react";
import "./Table.css";
import Data from "../utils/data";

function Table() {
  const createBarcode = (ticketType, eventId, eventDate, eventTime, ticketQuantity) => {
    let arr = [];
    for (let i = 0; i < ticketQuantity; i++) {
      arr[i] = eventId.toString() + eventDate.match(/\d/g).join("") + eventTime.match(/\d/g).join("") + ticketType + i;
    }
    return arr;
  };
  return (
    <div className="wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>event_id</th>
            <th>event_date</th>
            <th>eventTime</th>
            <th>ticket_adult_price</th>
            <th>ticket_adult_quantity</th>
            <th>barcode_adult</th>
            <th>ticket_kid_price</th>
            <th>ticket_kid_quantity</th>
            <th>barcode_kid</th>
            <th>ticket_group_price</th>
            <th>ticket_group_quantity</th>
            <th>barcode_group</th>
            <th>ticket_benefit_price</th>
            <th>ticket_benefit_quantity</th>
            <th>barcode_benefit</th>
            <th>user_id</th>
            <th>equal_price</th>
            <th>created</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.eventId}</td>
              <td>{order.eventDate}</td>
              <td>{order.eventTime}</td>
              <td>{order.ticketAdultPrice}</td>
              <td>{order.ticketAdultQuantity}</td>
              <td>
                {createBarcode(
                  order.ticketTypeAdult,
                  order.eventId,
                  order.eventDate,
                  order.eventTime,
                  order.ticketAdultQuantity
                ).toString()}
              </td>
              <td>{order.ticketKidPrice}</td>
              <td>{order.ticketKidQuantity}</td>
              <td>{createBarcode(
                  order.ticketTypeKid,
                  order.eventId,
                  order.eventDate,
                  order.eventTime,
                  order.ticketKidQuantity
                ).toString()}</td>
              <td>{order.ticketGroupPrice}</td>
              <td>{order.ticketGroupQuantity}</td>
              <td>{createBarcode(
                  order.ticketTypeGroup,
                  order.eventId,
                  order.eventDate,
                  order.eventTime,
                  order.ticketGroupQuantity
                ).toString()}</td>
              <td>{order.ticketBenefitPrice}</td>
              <td>{order.ticketBenefitQuantity}</td>
              <td>{createBarcode(
                  order.ticketTypeBenefit,
                  order.eventId,
                  order.eventDate,
                  order.eventTime,
                  order.ticketBenefitQuantity
                ).toString()}</td>
              <td>{order.userId}</td>
              <td>
                {order.ticketAdultPrice * order.ticketAdultQuantity +
                  order.ticketKidPrice * order.ticketKidQuantity +
                  order.ticketGroupPrice * order.ticketGroupQuantity +
                  order.ticketBenefitPrice * order.ticketBenefitQuantity}
              </td>
              <td>{Date()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(Table);
