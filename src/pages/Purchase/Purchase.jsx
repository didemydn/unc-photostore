import React from "react";
import "./Purchase.css";

function Purchase() {
    return (
        <section className="py-5 text-center container">
            <h1>Hello!</h1>
            <h4>Please provide card details.</h4>
            <div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="cardName" className="form-label purchase">Cardholder's Name</label>
                            <input type="text" className="form-control" id="cardName" placeholder="Name on card" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label purchase">Card Number</label>
                            <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div>
                            <div className="col mb-3">
                                <label htmlFor="expiryDate" className="form-label purchase">Expiration Date</label>
                                <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" required />
                            </div>
                            <div className="col mb-3">
                                <label htmlFor="cvv" className="form-label purchase">CVV</label>
                                <input type="text" className="form-control" id="cvv" placeholder="CVV" required />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block">Submit Payment</button>
                    </form>
            </div>
        </section>
    );
}

export default Purchase;