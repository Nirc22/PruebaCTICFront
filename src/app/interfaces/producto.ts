export interface Producto {
  idproducto: number,
  nombre: string,
  precio: number,
  idcategoria: {
    idcategoria:number,
    nombre: string,
  };
  idproveedor: {
    idproveedor:number,
    nombre: string,
    telefono: number,
  };
}
