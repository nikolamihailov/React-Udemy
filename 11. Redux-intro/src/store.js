// redux in isolation, without react
import { createStore } from "redux";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "account/deposit":
            return { ...state, balance: state.balance + action.payload };
        case "account/withdraw":
            return { ...state, balance: state.balance - action.payload };
        case "account/requestLoan":
            if (state.loan > 0) return state;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };
        case "account/payLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

/* store.dispatch({ type: "account/deposit", payload: 500 });
store.dispatch({ type: "account/withdraw", payload: 100 });
console.log(store.getState());
store.dispatch({
    type: "account/requestLoan",
    payload: {
        amount: 9999,
        purpose: "Gamble at casino",
    },
});
console.log(store.getState());
store.dispatch({ type: "account/payLoan" });
console.log(store.getState()); */

////////// using action creators \\\\\\\\\\\\\

function deposit(amount) {
    return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
    return { type: "account/requestLoan", payload: { amount, purpose } };
}
function payLoan() {
    return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(5000, "buy a new car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState()); 
