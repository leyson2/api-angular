
/*Definición de la interfaz para el objeto de categoría. */
export interface ICategory {
  id: number,
  name: string,
  typeImg: string,
}

/*Definiendo la interfaz para el objeto del producto. */
export interface IProduct {
  id: string,
  title: string,
  price: string,
  images: string[],
  description: string,
  category: ICategory,
}

export interface ICreateProduct extends Omit<IProduct, 'id' | 'category'> {
  categoryId: number,
}

export interface IUpdateProduct extends Partial<ICreateProduct>{

}
