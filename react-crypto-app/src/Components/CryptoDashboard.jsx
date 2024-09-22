
const CryptoDashboard = () => {
    return <>
    <h1>CRYPTO COIN TRACKER</h1>
        <input type ="text" placeholder="Search Crypto Currencey" value=""/>
        <select name="choice">
            <option value= "market_cap"> Market Cap</option>
            <option value="current_price">Price</option>
            <option value="total_volume">24h Volume</option>
            <option value="price_change_percentage_24h">24h Change</option>
        </select>
     </>

}
    export default CryptoDashboard;

