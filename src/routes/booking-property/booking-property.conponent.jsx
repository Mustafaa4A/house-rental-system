import { useEffect } from "react";
import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { useContext } from "react";
import { PaymentContext } from "../../contexts/payment.context";

const BookingProperty = () => {
  const { price, total, discountPercent, tax } = useContext(PaymentContext);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="page-warpper">
      <div className="page-body">
        <div class="container-xl">
          <div className="card card-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-12 my-3">
                  <h1 className="mb-4">Booking Information</h1>
                  <table className="table table-transparent table-responsive">
                    <thead>
                      <tr>
                        <th class="text-center"></th>
                        <th class="text-center">Original Price</th>
                        <th class="text-center">Discount</th>
                        <th class="text-center">Total Amount</th>
                      </tr>
                    </thead>
                    <tr>
                      <td>
                        <p className="strong mb-1">Monthly Rental</p>
                      </td>
                      <td className="text-center">${price}</td>
                      <td className="text-center">0%</td>
                      <td className="text-center">$450</td>
                    </tr>
                    <tr>
                      <td>
                        <p className="strong mb-1">Yaerly Tax</p>
                      </td>
                      <td className="text-center">${tax}</td>
                      <td className="text-center">0%</td>
                      <td className="text-center">${tax}</td>
                    </tr>
                    <tr>
                      <td>
                        <p className="strong mb-1">Total</p>
                      </td>
                      <td className="text-center"></td>
                      <td className="text-center">{discountPercent}%</td>
                      <td className="text-center">${total}</td>
                    </tr>
                  </table>
                  <p className="mt-3">
                    To complete the booking process, make a payment following
                    the instructions
                  </p>
                  <div className="btn-list  mt-4 ms-auto">
                    <Link to={"/"}>
                      <button className="btn btn-secondary">
                        <BiArrowBack size={18} className="me-2" />
                        Go Back
                      </button>
                    </Link>
                    <Link to={"/payment"} className="nav-link m-0 p-0">
                      <button className="btn btn-success">
                        <MdPayment size={20} className="me-2" />
                        Make Payment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProperty;
