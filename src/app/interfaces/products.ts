export interface Products {
    CategoriaId: number;
    DepartamentoId: number;
    Id: number,
    Descripcion: string,
    Imagen: string,
    Nombre: string,
    Size: [{
        Precio: number,
        PrecioOferta: number,
        Size: string
    }]
  }
  