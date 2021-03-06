import { createContext, useState } from "react"

interface InterfaceData {
    products: any;
    setProducts: any;
}

const Context = createContext<InterfaceData | null>(null);
export default Context;

export function ContextProvider(props: any) {
    
    const [products, setProducts]: any = useState([
        {
            image: 'https://images-submarino.b2w.io/produtos/01/00/img/1515753/7/1515753749_1GG.jpg',
            description: `Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
            beforePrice: 2813.99,
            price: 2599,
            amountOfInstallments: 10, // 10x de ...
            isAdded: false,
            isFavorite: false
        },
        {
            image: 'https://images-submarino.b2w.io/produtos/01/00/img/1515753/7/1515753749_1GG.jpg',
            description: `Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
            beforePrice: 2813.99,
            price: 2599,
            amountOfInstallments: 10, // 10x de ...
            isAdded: false,
            isFavorite: false
        }
    ])

    return(
        <Context.Provider value={{ products, setProducts }}>
            {props.children}
        </Context.Provider>
    );

}
