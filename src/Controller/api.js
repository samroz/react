class apiController {

    getItems = async() => {
        const data = await fetch('https://fakestoreapi.com/products');
        return data;
    }

    getItem = async({id}) => {
        const data = fetch(`https://fakestoreapi.com/products/${id}`)
        return data;
    }
}

export default new apiController();


