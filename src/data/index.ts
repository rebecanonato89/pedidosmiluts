export interface productOption {
  readonly value: string;
  readonly label: string;
  readonly description: string;
  readonly tam: number;
  readonly price: number;
}

export const productsOptions: readonly productOption[] = [
  {
    value: "1",
    label: "AÇAí - 300",
    description: "TIQUIM - 300ml",
    tam: 300,
    price: 7.0,
  },
  {
    value: "2",
    label: "AÇAí - 400",
    description: "CADIM - 400ml",
    tam: 400,
    price: 9.0,
  },
  {
    value: "3",
    label: "AÇAí - 500",
    description: "BITELA - 500ml",
    tam: 500,
    price: 10.0,
  },
  {
    value: "4",
    label: "AÇAí - 700",
    description: "BRUTO - 700ml",
    tam: 600,
    price: 12.0,
  },
];

// export const productsOptions = [
//   { value: "1", label: "AÇAí - 300" },
//   { value: "2", label: "AÇAí - 400" },
//   { value: "3", label: "AÇAí - 500" },
//   { value: "4", label: "AÇAí - 700" },
// ];

export const complements = [
  { value: "1", label: "AMENDOIM GRANULADO	", price: 3.0 },
  { value: "2", label: "BANANA	", price: 3.0 },
  { value: "3", label: "GOTA DE CHOCOLATE	", price: 3.0 },
  { value: "4", label: "GRANOLA	", price: 3.0 },
  { value: "5", label: "GRANULADO DE CHOCOLATE	", price: 3.0 },
  { value: "6", label: "PAÇOCA	", price: 3.0 },
  { value: "7", label: "SUCRILHOS	", price: 3.0 },
  { value: "8", label: "DISQUETI	", price: 3.5 },
  { value: "9", label: "BOMBOM OURO BRANCO	", price: 3.5 },
  { value: "10", label: "BOMBOM SONHO DE VALSA	", price: 3.5 },
  { value: "11", label: "DOCE DE LEITE	", price: 3.5 },
  { value: "12", label: "LEITE CONDENSADO	", price: 3.5 },
  { value: "13", label: "LEITE EM PÓ	", price: 3.5 },
  { value: "14", label: "OVOMALTINE PÓ	", price: 3.5 },
  { value: "15", label: "POLPA DE MORANGO	", price: 4.5 },
  { value: "16", label: "BÃO COM FORÇA!    (avelã)	", price: 5.0 },
  { value: "17", label: "DE LAMBER OS BEIÇO   (ninho)	", price: 5.0 },
  { value: "18", label: "OVOMALTINE CROCANTE	", price: 5.0 },
];
