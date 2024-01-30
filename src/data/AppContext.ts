import { createContext, useState } from "react";
import db from "@/data/db.json";
import { IProduct } from "./interfaces";

const products = db.products;

interface IAppContext {
	products: IProduct[]
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [products, setProducts] = useState()
	return (
		<AppContext.Provider
			value={{
				
			}}
		>
			{children}
		</AppContext.Provider>
	);
};