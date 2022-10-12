import {Entity, model, property, belongsTo, hasMany, hasOne} from '@loopback/repository';
import {Persona} from './persona.model';
import {Productos} from './productos.model';

@model({settings: {strict: false}})
export class Pedidos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_Producto: string;

  @property({
    type: 'string',
    required: true,
  })
  id_Persona: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @belongsTo(() => Persona)
  personaId: string;

  @hasOne(() => Productos)
  productos: Productos[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pedidos>) {
    super(data);
  }
}

export interface PedidosRelations {
  // describe navigational properties here
}

export type PedidosWithRelations = Pedidos & PedidosRelations;
