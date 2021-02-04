class Price {
    constructor(currency: string, amount: number, decimals: number) {
        this.currency = currency;
        this.amount = amount;
        this.decimals = decimals;
    }
    currency: string = 'none';
    amount: number = 0;
    decimals: number = 0;
}

export default Price;